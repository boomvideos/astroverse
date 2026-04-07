// ═══════════════════════════════════════════════════════════════
// AstroVerse AI — Backend Server  v3.0 (SaaS)
// ═══════════════════════════════════════════════════════════════

import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import 'dotenv/config';
import Anthropic from '@anthropic-ai/sdk';

// ── Auth & Rate Limiters ──────────────────────────────────────
import { clerkHandler, requireAuth, optionalAuth } from './src/middleware/auth.js';
import { ipLimiter, userLimiter, strictUserLimiter } from './src/middleware/rateLimiter.js';


// ── Routes ───────────────────────────────────────────────────
import sitemapRouter  from './src/routes/sitemap.js';
//import supportRouter  from './src/routes/support.js';

// ── Validate critical env vars at startup ─────────────────────
const REQUIRED_ENV = ['ANTHROPIC_API_KEY', 'CLERK_SECRET_KEY', 'ALLOWED_ORIGIN'];
const missing = REQUIRED_ENV.filter(k => !process.env[k]);
if (missing.length > 0) {
  console.error(`\n❌ Missing required env vars: ${missing.join(', ')}\n   Add them to .env\n`);
  process.exit(1);
}

const app  = express();
const PORT = process.env.PORT || 3001;

// ── Security headers ──────────────────────────────────────────
app.use(helmet());

// ── CORS (single, correct registration) ──────────────────────
// FIXED: was registered 3× before; manual res.header() removed.
const allowedOrigins = (process.env.ALLOWED_ORIGIN || '').split(',').map(s => s.trim());
app.use(cors({
  origin: (origin, callback) => {
    // Allow server-to-server requests (no Origin header) and whitelisted origins
    if (!origin || allowedOrigins.includes(origin)) return callback(null, true);
    callback(new Error(`CORS: origin ${origin} not allowed`));
  },
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
}));

// ── Trust proxy (Render, Railway, Nginx, Cloudflare) ─────────
app.set('trust proxy', 1);

// ── Body parser ───────────────────────────────────────────────
app.use(express.json({ limit: '10kb' }));

// ── Clerk middleware (global, silent — decodes JWT if present) ─
app.use(clerkHandler);

// ── Anthropic client ──────────────────────────────────────────
const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });
const CLAUDE_MODEL = process.env.CLAUDE_MODEL || 'claude-sonnet-4-20250514';

// ═══════════════════════════════════════════════════════════════
// HELPERS  (sanitize, callClaude, parseJSON, buildChartSummary)
// ═══════════════════════════════════════════════════════════════

function sanitize(str, maxLen = 200) {
  if (typeof str !== 'string') return '';
  return str.replace(/[\r\n]+/g, ' ').replace(/[<>]/g, '').slice(0, maxLen).trim();
}

async function callClaude(systemPrompt, userPrompt, maxTokens = 1000) {
  const response = await anthropic.messages.create({
    model: CLAUDE_MODEL,
    max_tokens: maxTokens,
    system: systemPrompt,
    messages: [{ role: 'user', content: userPrompt }],
  });
  return response.content[0]?.text || '';
}

function parseJSON(raw) {
  const clean = raw.replace(/```json\s*/gi, '').replace(/```\s*/g, '').trim();
  const start = clean.indexOf('{');
  const end   = clean.lastIndexOf('}');
  if (start === -1 || end === -1) throw new Error('No JSON object in response');
  return JSON.parse(clean.substring(start, end + 1));
}

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

  // FIXED: sanitize ALL user-supplied fields including dob and time
  const safeName   = sanitize(name, 80);
  const safeDob    = sanitize(dob, 20);
  const safeTime   = sanitize(time, 10);
  const safePlace  = sanitize(place, 100);
  const safeGender = sanitize(gender, 20);

  const planetLines = planets.map(p => {
    const signName = p.signName || p.sign?.name || '—';
    const nakName  = p.nakshatraName || p.nakshatra?.name || '—';
    return `  ${p.name}: ${signName} ${p.degree || 0}°${p.minutes ? p.minutes + "'" : ''} ` +
           `${p.retrograde ? '(Vakri ℞)' : '(Direct)'}  Nakshatra: ${nakName}`;
  }).join('\n');

  return `
Name: ${safeName} | DOB: ${safeDob || '—'}${safeTime ? ' ' + safeTime : ''} | Place: ${safePlace || 'Unknown'} | Gender: ${safeGender || 'Not specified'}
Ascendant (Lagna): ${sanitize(ascendant?.signName, 20) || '—'} ${ascendant?.degree || 0}°${ascendant?.minutes || 0}'
Sun Sign (Vedic Sidereal): ${sanitize(sunSign, 20) || '—'} | Moon Sign (Rashi): ${sanitize(moonSign, 20) || '—'}
Birth Nakshatra: ${sanitize(nakshatra?.name, 30) || '—'} (Lord: ${sanitize(nakshatra?.lord, 20) || '—'}, Deity: ${sanitize(nakshatra?.deity, 30) || '—'})
Life Path Number: ${Number.isFinite(lp) ? lp : '—'}
Current Mahadasha: ${sanitize(currentDasha?.planet, 20) || '—'} (until ~${currentDasha?.end ? new Date(currentDasha.end).getFullYear() : '—'})
Manglik Dosha: ${manglik?.present ? 'Present' : 'Absent'}
Kaal Sarp Dosha: ${kaalSarp?.present ? 'Present' : 'Absent'}
Sade Sati: ${sadeSati?.present ? 'Active' : 'Not active'}

Planetary Positions (Vedic Sidereal — Lahiri Ayanamsa):
${planetLines}`.trim();
}

// ═══════════════════════════════════════════════════════════════
// ROUTES
// ═══════════════════════════════════════════════════════════════

// ── Public routes (IP rate-limited) ──────────────────────────
app.use('/sitemap.xml', sitemapRouter);
app.use('/robots.txt',  sitemapRouter);
//app.use('/api/support', supportRouter);

// ── Template routes (optional auth, IP rate-limited) ──────────
app.use('/api/template', ipLimiter, optionalAuth, templateRouter);

// ── AI endpoints (require auth, user-ID rate-limited) ─────────

// POST /api/kundli-analysis
app.post('/api/kundli-analysis', requireAuth, userLimiter, async (req, res) => {
  try {
    const { chartData, lang = 'en' } = req.body;
    if (!chartData || !chartData.dob) {
      return res.status(400).json({ error: 'chartData with dob is required' });
    }

    const isHi = lang === 'hi';
    const chartSummary = buildChartSummary(chartData);

    const systemPrompt = isHi
      ? 'आप एक अनुभवी वैदिक ज्योतिषी हैं। केवल valid JSON object लौटाएं — कोई extra text, markdown, या code fence नहीं।'
      : 'You are an expert Vedic astrologer. Return ONLY a valid JSON object. No markdown, no code fences. Start with { and end with }.';

    const prompt1 = isHi
      ? `${chartSummary}\n\nइस जन्म कुंडली के आधार पर:\n{"personality":{"nature":"2 वाक्य","strengths":"2 वाक्य","weaknesses":"2 वाक्य","talents":"2 वाक्य","thinking":"2 वाक्य"},"career":{"fields":"2 वाक्य","growth":"2 वाक्य","finance":"2 वाक्य","businessVsJob":"2 वाक्य","bestPeriods":"2 वाक्य"},"love":{"loveOrArranged":"2 वाक्य","timing":"2 वाक्य","compatibility":"2 वाक्य","stability":"2 वाक्य"}}`
      : `${chartSummary}\n\nBased on this birth chart:\n{"personality":{"nature":"2 sentences","strengths":"2 sentences","weaknesses":"2 sentences","talents":"2 sentences","thinking":"2 sentences"},"career":{"fields":"2 sentences","growth":"2 sentences","finance":"2 sentences","businessVsJob":"2 sentences","bestPeriods":"2 sentences"},"love":{"loveOrArranged":"2 sentences","timing":"2 sentences","compatibility":"2 sentences","stability":"2 sentences"}}`;

    const prompt2 = isHi
      ? `${chartSummary}\n\n{"health":{"weakAreas":"2 वाक्य","riskPeriods":"2 वाक्य","vitality":"2 वाक्य","advice":"2 वाक्य"},"remedies":{"mantra":"मंत्र और विधि","daan":"दान और दिन","vrat":"उपवास विधि","gemstone":"रत्न और पहनने का तरीका","other":"अन्य उपाय"},"timeline":[{"age":"0-20","title":"शीर्षक","desc":"2 वाक्य","type":"personal"},{"age":"20-30","title":"शीर्षक","desc":"2 वाक्य","type":"career"},{"age":"30-40","title":"शीर्षक","desc":"2 वाक्य","type":"finance"},{"age":"40-50","title":"शीर्षक","desc":"2 वाक्य","type":"marriage"},{"age":"50-60","title":"शीर्षक","desc":"2 वाक्य","type":"health"},{"age":"60+","title":"शीर्षक","desc":"2 वाक्य","type":"personal"}]}`
      : `${chartSummary}\n\n{"health":{"weakAreas":"2 sentences","riskPeriods":"2 sentences","vitality":"2 sentences","advice":"2 sentences"},"remedies":{"mantra":"mantra with method","daan":"what to donate and day","vrat":"fasting method","gemstone":"gemstone and how to wear","other":"other remedies"},"timeline":[{"age":"0-20","title":"title","desc":"2 sentences","type":"personal"},{"age":"20-30","title":"title","desc":"2 sentences","type":"career"},{"age":"30-40","title":"title","desc":"2 sentences","type":"finance"},{"age":"40-50","title":"title","desc":"2 sentences","type":"marriage"},{"age":"50-60","title":"title","desc":"2 sentences","type":"health"},{"age":"60+","title":"title","desc":"2 sentences","type":"personal"}]}`;

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

// POST /api/hot-questions
app.post('/api/hot-questions', requireAuth, userLimiter, async (req, res) => {
  try {
    const { question, category, chartData } = req.body;
    if (!question || !chartData?.dob) {
      return res.status(400).json({ error: 'question and chartData required' });
    }
    const safeQuestion = sanitize(question, 300);
    const safeCategory = sanitize(category, 50);
    const chartSummary = buildChartSummary(chartData);

    const answer = await callClaude(
      'You are an expert Vedic astrologer. Answer in 4-5 sentences using ONLY the chart data provided. Be specific and include timing where relevant.',
      `${chartSummary}\n\nQuestion (${safeCategory}): "${safeQuestion}"\n\nAnswer based strictly on the chart data above:`,
      450
    );
    res.json({ answer });
  } catch (err) {
    console.error('[/api/hot-questions]', err.message);
    res.status(500).json({ error: 'Could not generate answer. Please try again.' });
  }
});

// POST /api/magic-search
app.post('/api/magic-search', requireAuth, strictUserLimiter, async (req, res) => {
  try {
    const { questions, chartData } = req.body;
    if (!Array.isArray(questions) || questions.length === 0 || !chartData?.dob) {
      return res.status(400).json({ error: 'questions array and chartData required' });
    }
    if (questions.length > 15) {
      return res.status(400).json({ error: 'Maximum 15 questions allowed' });
    }

    const chartSummary = buildChartSummary(chartData);
    const CONCURRENCY = 5;
    const answers = [];

    for (let i = 0; i < questions.length; i += CONCURRENCY) {
      const batch = questions.slice(i, i + CONCURRENCY);
      const results = await Promise.all(
        batch.map(async (q) => {
          const safeText = sanitize(q.text, 300);
          const safeType = sanitize(q.type, 50);
          const answer = await callClaude(
            'You are an expert Vedic astrologer. Answer in 4-5 sentences using ONLY the chart data provided.',
            `${chartSummary}\n\nQuestion (${safeType}): "${safeText}"\n\nAnswer in 4-5 sentences:`,
            450
          );
          // FIXED: return sanitized text, not raw q.text (XSS fix)
          return { type: sanitize(q.type, 50), text: safeText, answer };
        })
      );
      answers.push(...results);
    }
    res.json({ answers });
  } catch (err) {
    console.error('[/api/magic-search]', err.message);
    res.status(500).json({ error: 'Magic Search failed. Please try again.' });
  }
});

// POST /api/compatibility
app.post('/api/compatibility', requireAuth, userLimiter, async (req, res) => {
  try {
    const { person1, person2, gunaScore } = req.body;
    if (!person1?.dob || !person2?.dob) {
      return res.status(400).json({ error: 'Both person DOBs required' });
    }
    const safeName1 = sanitize(person1.name, 80);
    const safeName2 = sanitize(person2.name, 80);

    const raw = await callClaude(
      'You are an expert Vedic astrologer specializing in Guna Milan. Return ONLY a valid JSON object. No markdown.',
      `Vedic Ashta Kuta compatibility:\n${safeName1}: Sun ${sanitize(person1.sunSign,20)}, Moon ${sanitize(person1.moonSign,20)}, Nakshatra ${sanitize(person1.nakshatra,30) || '—'}, Life Path ${Number.isFinite(person1.lp) ? person1.lp : '—'}\n${safeName2}: Sun ${sanitize(person2.sunSign,20)}, Moon ${sanitize(person2.moonSign,20)}, Nakshatra ${sanitize(person2.nakshatra,30) || '—'}, Life Path ${Number.isFinite(person2.lp) ? person2.lp : '—'}\nAshta Kuta Guna Score: ${Number.isFinite(gunaScore) ? gunaScore : 0}/36\n\nJSON only: {"label":"2-word archetype","overview":"2-3 sentences","love":"1 sentence","challenges":"1 sentence","advice":"1 sentence"}`,
      500
    );
    res.json(parseJSON(raw));
  } catch (err) {
    console.error('[/api/compatibility]', err.message);
    res.status(500).json({ error: 'Compatibility analysis failed.' });
  }
});

// POST /api/numerology
app.post('/api/numerology', requireAuth, userLimiter, async (req, res) => {
  try {
    const { name, dob, lp, expr, soul, pers } = req.body;
    if (!name) return res.status(400).json({ error: 'name is required' });
    const safeName = sanitize(name, 100);
    const safeDob  = sanitize(dob, 20);

    const raw = await callClaude(
      'You are a master numerologist. Return ONLY a valid JSON object. No markdown.',
      `Numerology reading for "${safeName}"${safeDob ? ' (DOB: ' + safeDob + ')' : ''}:\n- Life Path: ${Number.isFinite(lp) ? lp : '—'}\n- Expression: ${Number.isFinite(expr) ? expr : '—'}\n- Soul Urge: ${Number.isFinite(soul) ? soul : '—'}\n- Personality: ${Number.isFinite(pers) ? pers : '—'}\n\nJSON only: {"overview":"2-3 sentences","lifePath":"2 sentences","expression":"1 sentence","soul":"1 sentence","advice":"1 sentence","mantra":"4-6 word phrase"}`,
      600
    );
    res.json(parseJSON(raw));
  } catch (err) {
    console.error('[/api/numerology]', err.message);
    res.status(500).json({ error: 'Numerology analysis failed.' });
  }
});

// GET /api/health
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    service: 'AstroVerse AI Backend v3',
    timestamp: new Date().toISOString(),
    model: CLAUDE_MODEL,
  });
});

// ── Graceful shutdown ─────────────────────────────────────────
// Handles SIGTERM from Render/Railway — lets in-flight requests finish.
const server = app.listen(PORT, () => {
  console.log(`\n✅  AstroVerse Backend v3 running on port ${PORT}`);
  console.log(`    Auth    : Clerk`);
  console.log(`    Model   : ${CLAUDE_MODEL}`);
  console.log(`    Origin  : ${allowedOrigins.join(', ')}`);
  console.log(`    Health  : http://localhost:${PORT}/api/health\n`);
});

process.on('SIGTERM', () => {
  console.log('SIGTERM received — closing gracefully...');
  server.close(() => {
    console.log('Server closed.');
    process.exit(0);
  });
  // Force exit after 30s if requests are still in flight
  setTimeout(() => process.exit(1), 30_000);
});
