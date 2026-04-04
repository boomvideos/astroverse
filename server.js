// ═══════════════════════════════════════════════════════════════
// AstroVerse AI — Backend Server  (FIXED v2)
// Node.js + Express + Anthropic Claude
// ═══════════════════════════════════════════════════════════════
// Endpoints:
//   POST /api/kundli-analysis   → Full chart AI interpretation
//   POST /api/hot-questions     → Single Q&A
//   POST /api/magic-search      → Batch Q&A (parallel, up to 15)
//   POST /api/compatibility     → Compat AI analysis
//   POST /api/numerology        → Numerology AI interpretation
//   GET  /api/health            → Status check
//   POST /api/template/*        → Template-based (no AI) sections
// ═══════════════════════════════════════════════════════════════

import express from 'express';
import cors from 'cors';
import Anthropic from '@anthropic-ai/sdk';
import rateLimit from 'express-rate-limit';
import helmet from 'helmet';
import 'dotenv/config';

import templateRouter from './template-routes.js';

const app = express();
app.use(cors({
  origin: "*"
}));
app.options('*', cors());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});
const PORT = process.env.PORT || 3001;

// ── Trust proxy (needed for rate-limiter to work correctly behind Nginx/Cloudflare)
app.set('trust proxy', 1);

// ── Anthropic client ──────────────────────────────────────────
const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

// ── Middleware ────────────────────────────────────────────────
app.use(helmet());
app.use(cors({
  origin: process.env.ALLOWED_ORIGIN || '*',
  methods: ['GET', 'POST'],
}));
app.use(express.json({ limit: '10kb' }));

// ── Rate limiting (per real IP, not proxy IP) ─────────────────
const limiter = rateLimit({
  windowMs: 60 * 1000,
  max: 20,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: 'Too many requests. Please wait a moment.' },
});
app.use('/api/', limiter);

// ── Template routes (no AI, always fast) ─────────────────────
app.use('/api/template', templateRouter);

// ═══════════════════════════════════════════════════════════════
// HELPERS
// ═══════════════════════════════════════════════════════════════

// Sanitize user strings before inserting into AI prompts
// Prevents prompt injection attacks
function sanitize(str, maxLen = 200) {
  if (typeof str !== 'string') return '';
  return str
    .replace(/[\r\n]+/g, ' ')     // no newlines — they break prompt structure
    .replace(/[<>]/g, '')          // no HTML tags
    .slice(0, maxLen)
    .trim();
}

// Call Claude — single unified helper
async function callClaude(systemPrompt, userPrompt, maxTokens = 1000) {
  const response = await anthropic.messages.create({
    model: 'claude-opus-4-5-20251101',   // FIXED: dated model string
    max_tokens: maxTokens,
    system: systemPrompt,
    messages: [{ role: 'user', content: userPrompt }],
  });
  return response.content[0]?.text || '';
}

// Parse JSON safely from Claude output (strips markdown fences if present)
function parseJSON(raw) {
  const clean = raw.replace(/```json\s*/gi, '').replace(/```\s*/g, '').trim();
  const start = clean.indexOf('{');
  const end = clean.lastIndexOf('}');
  if (start === -1 || end === -1) throw new Error('No JSON object found in response');
  return JSON.parse(clean.substring(start, end + 1));
}

// Build a clean text summary of the chart for AI prompts
// FIXED: reads p.signName (string) which frontend now sends correctly
function buildChartSummary(chartData) {
  const {
    name, dob, time, place, gender,
    planets = [], sunSign, moonSign,
    ascendant, nakshatra, dashaData,
    doshas = [], lp,
  } = chartData;

  const currentDasha = dashaData?.dashas?.[dashaData?.currentDashaIdx];
  const manglik  = doshas.find(d => d.name?.includes('Manglik'));
  const kaalSarp = doshas.find(d => d.name?.includes('Kaal Sarp'));
  const sadeSati = doshas.find(d => d.name?.includes('Sade Sati'));

  // Sanitize user-supplied text fields before injecting into prompt
  const safeName   = sanitize(name, 80);
  const safePlace  = sanitize(place, 100);
  const safeGender = sanitize(gender, 20);

  const planetLines = planets.map(p => {
    // Support both p.signName (string, new normalized format) and p.sign.name (object format)
    const signName = p.signName || p.sign?.name || '—';
    const nakName  = p.nakshatraName || p.nakshatra?.name || '—';
    return `  ${p.name}: ${signName} ${p.degree || 0}°${p.minutes ? p.minutes + "'" : ''} ` +
           `${p.retrograde ? '(Vakri ℞)' : '(Direct)'}  Nakshatra: ${nakName}`;
  }).join('\n');

  return `
Name: ${safeName} | DOB: ${dob || '—'}${time ? ' ' + time : ''} | Place: ${safePlace || 'Unknown'} | Gender: ${safeGender || 'Not specified'}
Ascendant (Lagna): ${ascendant?.signName || '—'} ${ascendant?.degree || 0}°${ascendant?.minutes || 0}'
Sun Sign (Vedic Sidereal): ${sunSign || '—'} | Moon Sign (Rashi): ${moonSign || '—'}
Birth Nakshatra: ${nakshatra?.name || '—'} (Lord: ${nakshatra?.lord || '—'}, Deity: ${nakshatra?.deity || '—'})
Life Path Number: ${lp || '—'}
Current Mahadasha: ${currentDasha?.planet || '—'} (until ~${currentDasha?.end ? new Date(currentDasha.end).getFullYear() : '—'})
Manglik Dosha: ${manglik?.present ? 'Present' : 'Absent'}
Kaal Sarp Dosha: ${kaalSarp?.present ? 'Present' : 'Absent'}
Sade Sati: ${sadeSati?.present ? 'Active' : 'Not active'}

Planetary Positions (Vedic Sidereal — Lahiri Ayanamsa):
${planetLines}`.trim();
}


// ═══════════════════════════════════════════════════════════════
// ENDPOINT 1: Full Kundli AI Analysis
// POST /api/kundli-analysis
// Body: { chartData, lang }
// Returns: { personality, career, love, health, remedies, timeline }
// ═══════════════════════════════════════════════════════════════
app.post('/api/kundli-analysis', async (req, res) => {
  try {
    const { chartData, lang = 'en' } = req.body;
    if (!chartData || !chartData.dob) {
      return res.status(400).json({ error: 'chartData with dob is required' });
    }

    const isHi = lang === 'hi';
    const chartSummary = buildChartSummary(chartData);

    const systemPrompt = isHi
      ? 'आप एक अनुभवी वैदिक ज्योतिषी हैं। केवल valid JSON object लौटाएं — कोई extra text, markdown, या code fence नहीं। { से शुरू करें और } पर समाप्त करें।'
      : 'You are an expert Vedic astrologer. Return ONLY a valid JSON object. No markdown, no code fences, no explanation. Start with { and end with }.';

    const prompt1 = isHi
      ? `${chartSummary}\n\nइस जन्म कुंडली के आधार पर:\n{"personality":{"nature":"2 वाक्य","strengths":"2 वाक्य","weaknesses":"2 वाक्य","talents":"2 वाक्य","thinking":"2 वाक्य"},"career":{"fields":"2 वाक्य","growth":"2 वाक्य","finance":"2 वाक्य","businessVsJob":"2 वाक्य","bestPeriods":"2 वाक्य"},"love":{"loveOrArranged":"2 वाक्य","timing":"2 वाक्य","compatibility":"2 वाक्य","stability":"2 वाक्य"}}`
      : `${chartSummary}\n\nBased on this birth chart:\n{"personality":{"nature":"2 sentences","strengths":"2 sentences","weaknesses":"2 sentences","talents":"2 sentences","thinking":"2 sentences"},"career":{"fields":"2 sentences","growth":"2 sentences","finance":"2 sentences","businessVsJob":"2 sentences","bestPeriods":"2 sentences"},"love":{"loveOrArranged":"2 sentences","timing":"2 sentences","compatibility":"2 sentences","stability":"2 sentences"}}`;

    const prompt2 = isHi
      ? `${chartSummary}\n\n{"health":{"weakAreas":"2 वाक्य","riskPeriods":"2 वाक्य","vitality":"2 वाक्य","advice":"2 वाक्य"},"remedies":{"mantra":"मंत्र और विधि","daan":"दान और दिन","vrat":"उपवास विधि","gemstone":"रत्न और पहनने का तरीका","other":"अन्य उपाय"},"timeline":[{"age":"0-20","title":"शीर्षक","desc":"2 वाक्य","type":"personal"},{"age":"20-30","title":"शीर्षक","desc":"2 वाक्य","type":"career"},{"age":"30-40","title":"शीर्षक","desc":"2 वाक्य","type":"finance"},{"age":"40-50","title":"शीर्षक","desc":"2 वाक्य","type":"marriage"},{"age":"50-60","title":"शीर्षक","desc":"2 वाक्य","type":"health"},{"age":"60+","title":"शीर्षक","desc":"2 वाक्य","type":"personal"}]}`
      : `${chartSummary}\n\n{"health":{"weakAreas":"2 sentences","riskPeriods":"2 sentences","vitality":"2 sentences","advice":"2 sentences"},"remedies":{"mantra":"mantra with method","daan":"what to donate and day","vrat":"fasting method","gemstone":"gemstone and how to wear","other":"other remedies"},"timeline":[{"age":"0-20","title":"title","desc":"2 sentences","type":"personal"},{"age":"20-30","title":"title","desc":"2 sentences","type":"career"},{"age":"30-40","title":"title","desc":"2 sentences","type":"finance"},{"age":"40-50","title":"title","desc":"2 sentences","type":"marriage"},{"age":"50-60","title":"title","desc":"2 sentences","type":"health"},{"age":"60+","title":"title","desc":"2 sentences","type":"personal"}]}`;

    // Run both prompts in parallel — faster than sequential
    const [raw1, raw2] = await Promise.all([
      callClaude(systemPrompt, prompt1, 1200),
      callClaude(systemPrompt, prompt2, 1200),
    ]);

    const p1 = parseJSON(raw1);
    const p2 = parseJSON(raw2);

    res.json({
      personality: p1.personality || {},
      career:      p1.career      || {},
      love:        p1.love        || {},
      health:      p2.health      || {},
      remedies:    p2.remedies    || {},
      timeline:    Array.isArray(p2.timeline) ? p2.timeline : [],
    });

  } catch (err) {
    console.error('[/api/kundli-analysis]', err.message);
    res.status(500).json({ error: 'AI analysis failed. Please try again.' });
  }
});


// ═══════════════════════════════════════════════════════════════
// ENDPOINT 2: Hot Question Answer
// POST /api/hot-questions
// Body: { question, category, chartData }
// Returns: { answer }
// ═══════════════════════════════════════════════════════════════
app.post('/api/hot-questions', async (req, res) => {
  try {
    const { question, category, chartData } = req.body;
    if (!question || !chartData?.dob) {
      return res.status(400).json({ error: 'question and chartData required' });
    }

    // Sanitize user question before injecting into prompt
    const safeQuestion = sanitize(question, 300);
    const safeCategory = sanitize(category, 50);

    const chartSummary = buildChartSummary(chartData);
    const systemPrompt = 'You are an expert Vedic astrologer. Answer the question in 4-5 sentences using ONLY the actual chart data provided. Be specific, honest, and include timing where relevant. End with one clear recommendation. Do not give generic answers.';
    const userPrompt   = `${chartSummary}\n\nQuestion (${safeCategory}): "${safeQuestion}"\n\nAnswer based strictly on the chart data above:`;

    const answer = await callClaude(systemPrompt, userPrompt, 450);
    res.json({ answer });

  } catch (err) {
    console.error('[/api/hot-questions]', err.message);
    res.status(500).json({ error: 'Could not generate answer. Please try again.' });
  }
});


// ═══════════════════════════════════════════════════════════════
// ENDPOINT 3: Magic Search — Batch Q&A  (FIXED: parallel with p-limit)
// POST /api/magic-search
// Body: { questions: [{type, text}], chartData }
// Returns: { answers: [{type, text, answer}] }
// ═══════════════════════════════════════════════════════════════
app.post('/api/magic-search', async (req, res) => {
  try {
    const { questions, chartData } = req.body;
    if (!Array.isArray(questions) || questions.length === 0 || !chartData?.dob) {
      return res.status(400).json({ error: 'questions array and chartData required' });
    }
    if (questions.length > 15) {
      return res.status(400).json({ error: 'Maximum 15 questions allowed' });
    }

    const chartSummary = buildChartSummary(chartData);
    const systemPrompt = 'You are an expert Vedic astrologer. Answer each question in 4-5 sentences using ONLY the actual chart data provided. Be specific, honest, and practical. Do not give generic horoscope-style answers.';

    // FIXED: Run up to 5 questions in parallel instead of sequentially.
    // Sequential 15 calls = ~60-90 sec. Parallel (concurrency=5) = ~15-25 sec.
    const CONCURRENCY = 5;
    const answers = [];
    for (let i = 0; i < questions.length; i += CONCURRENCY) {
      const batch = questions.slice(i, i + CONCURRENCY);
      const batchResults = await Promise.all(
        batch.map(async (q) => {
          const safeText = sanitize(q.text, 300);
          const safeType = sanitize(q.type, 50);
          const userPrompt = `${chartSummary}\n\nQuestion (${safeType}): "${safeText}"\n\nAnswer in 4-5 sentences based strictly on the chart:`;
          const answer = await callClaude(systemPrompt, userPrompt, 450);
          return { type: q.type, text: q.text, answer };
        })
      );
      answers.push(...batchResults);
    }

    res.json({ answers });

  } catch (err) {
    console.error('[/api/magic-search]', err.message);
    res.status(500).json({ error: 'Magic Search failed. Please try again.' });
  }
});


// ═══════════════════════════════════════════════════════════════
// ENDPOINT 4: Compatibility AI Analysis
// POST /api/compatibility
// Body: { person1: {name,dob,sunSign,moonSign,lp,nakshatra}, person2:{...}, gunaScore }
// Returns: { label, overview, love, challenges, advice }
// ═══════════════════════════════════════════════════════════════
app.post('/api/compatibility', async (req, res) => {
  try {
    const { person1, person2, gunaScore } = req.body;
    if (!person1?.dob || !person2?.dob) {
      return res.status(400).json({ error: 'Both person DOBs required' });
    }

    const safeName1 = sanitize(person1.name, 80);
    const safeName2 = sanitize(person2.name, 80);

    const systemPrompt = 'You are an expert Vedic astrologer specializing in Guna Milan. Return ONLY a valid JSON object. No markdown, no code fences. Start with { and end with }.';
    const userPrompt = `Vedic Ashta Kuta compatibility analysis:
${safeName1}: Sun ${person1.sunSign}, Moon ${person1.moonSign}, Nakshatra ${person1.nakshatra || '—'}, Life Path ${person1.lp}
${safeName2}: Sun ${person2.sunSign}, Moon ${person2.moonSign}, Nakshatra ${person2.nakshatra || '—'}, Life Path ${person2.lp}
Ashta Kuta Guna Score: ${gunaScore}/36

JSON only: {"label":"2-word archetype","overview":"2-3 sentences about this pairing","love":"1 sentence about love chemistry","challenges":"1 honest sentence about challenges","advice":"1 sentence of specific Vedic advice"}`;

    const raw    = await callClaude(systemPrompt, userPrompt, 500);
    const result = parseJSON(raw);
    res.json(result);

  } catch (err) {
    console.error('[/api/compatibility]', err.message);
    res.status(500).json({ error: 'Compatibility analysis failed.' });
  }
});


// ═══════════════════════════════════════════════════════════════
// ENDPOINT 5: Numerology AI Interpretation
// POST /api/numerology
// Body: { name, dob, lp, expr, soul, pers }
// Returns: { overview, lifePath, expression, soul, advice, mantra }
// ═══════════════════════════════════════════════════════════════
app.post('/api/numerology', async (req, res) => {
  try {
    const { name, dob, lp, expr, soul, pers } = req.body;
    if (!name) return res.status(400).json({ error: 'name is required' });

    const safeName = sanitize(name, 100);

    const systemPrompt = 'You are a master numerologist using Pythagorean and Chaldean systems. Return ONLY a valid JSON object. No markdown. Start with { and end with }.';
    const userPrompt = `Numerology reading for "${safeName}"${dob ? ' (DOB: ' + dob + ')' : ''}:
- Life Path (DOB digits): ${lp}
- Expression Number (Pythagorean): ${expr}
- Soul Urge (vowels): ${soul}
- Personality Number: ${pers}

JSON only: {"overview":"2-3 profound sentences about this person's name energy","lifePath":"2 sentences about life path ${lp} meaning","expression":"1 sentence about expression number ${expr}","soul":"1 sentence about soul urge ${soul}","advice":"1 beautiful actionable sentence","mantra":"4-6 word power phrase for this person"}`;

    const raw    = await callClaude(systemPrompt, userPrompt, 600);
    const result = parseJSON(raw);
    res.json(result);

  } catch (err) {
    console.error('[/api/numerology]', err.message);
    res.status(500).json({ error: 'Numerology analysis failed.' });
  }
});


// ═══════════════════════════════════════════════════════════════
// ENDPOINT 6: Health check
// GET /api/health
// ═══════════════════════════════════════════════════════════════
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    service: 'AstroVerse AI Backend',
    timestamp: new Date().toISOString(),
    aiModel: 'claude-opus-4-5-20251101',
    apiKeySet: !!process.env.ANTHROPIC_API_KEY,
  });
});


// ── Start server ──────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`\n✅  AstroVerse Backend running on port ${PORT}`);
  console.log(`    API Key : ${process.env.ANTHROPIC_API_KEY ? '✓ Set' : '✗ MISSING — add ANTHROPIC_API_KEY to .env'}`);
  console.log(`    Health  : http://localhost:${PORT}/api/health\n`);
});
