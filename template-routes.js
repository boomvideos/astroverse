// ═══════════════════════════════════════════════════════════════
// AstroVerse — Template-Based Feature Routes  (FIXED v2)
// template-routes.js
//
// Routes (all POST, no AI, instant response):
//   /api/template/personality
//   /api/template/career
//   /api/template/relationship
//   /api/template/health
//   /api/template/finance
//   /api/template/remedies
//   /api/template/education
//   /api/template/family
//   /api/template/timeline
//   /api/template/full-analysis   ← all sections in one request
// ═══════════════════════════════════════════════════════════════

import { Router } from 'express';
import { z } from 'zod';
import { extractChartContext, generateSection } from './engine.js';
import { personalityTemplates } from './personality.js';
import {
  careerTemplates,
  relationshipTemplates,
  healthTemplates,
  financeTemplates,
  remediesTemplates,
  educationTemplates,
  familyTemplates,
  timelineTemplates,
} from './sections.js';
import { ipLimiter } from './rateLimiter.js';

const router = Router();

// Apply IP rate-limiter to all template routes
router.use(ipLimiter);

// ── Template map (used by full-analysis) ─────────────────────
const TEMPLATE_MAP = {
  personality:  personalityTemplates,
  career:       careerTemplates,
  relationship: relationshipTemplates,
  health:       healthTemplates,
  finance:      financeTemplates,
  remedies:     remediesTemplates,
  education:    educationTemplates,
  family:       familyTemplates,
  timeline:     timelineTemplates,
};

const ALL_SECTIONS = Object.keys(TEMPLATE_MAP);

// ── Dasha themes (module-level) ───────────────────────────────
const DASHA_THEMES = {
  Sun:     'Leadership, Father, Authority, Self-expression',
  Moon:    'Mind, Mother, Home, Emotions, Travel',
  Mars:    'Energy, Action, Property, Siblings, Courage',
  Mercury: 'Communication, Business, Skills, Learning',
  Jupiter: 'Expansion, Wealth, Children, Wisdom, Marriage',
  Venus:   'Love, Beauty, Art, Luxury, Relationships',
  Saturn:  'Discipline, Karma, Delay, Transformation, Longevity',
  Rahu:    'Ambition, Foreign, Technology, Sudden Events',
  Ketu:    'Spirituality, Liberation, Past Life, Detachment',
};

// ── Zod schemas ───────────────────────────────────────────────
const PlanetSchema = z.object({
  name:  z.string(),
  sign:  z.any().optional(),
  house: z.number().optional(),
}).passthrough();

const ChartDataSchema = z.object({
  dob:      z.string().min(1),
  planets:  z.array(PlanetSchema),
}).passthrough();

const SectionBodySchema = z.object({
  chartData: ChartDataSchema,
  lang:      z.string().optional().default('en'),
});

const FullAnalysisBodySchema = SectionBodySchema.extend({
  sections: z.array(z.string()).optional(),
});

// ── Validation helper ─────────────────────────────────────────
function validateBody(schema, body, res) {
  const result = schema.safeParse(body);
  if (!result.success) {
    res.status(400).json({ error: result.error.errors[0]?.message || 'Invalid request body' });
    return null;
  }
  return result.data;
}

// ── Error helper ──────────────────────────────────────────────
// Added err.stack to log so Render.com logs show the actual
// crash location instead of just the error message.
function handleError(res, endpoint, err) {
  console.error(`[/api/template/${endpoint}]`, err.message, '\n', err.stack);
  res.status(500).json({ error: `Analysis failed for ${endpoint}. Please try again.` });
}

// ── Generic section route factory ─────────────────────────────
function makeSectionRoute(sectionName, templates, metaBuilder) {
  router.post(`/${sectionName}`, (req, res) => {
    try {
      const parsed = validateBody(SectionBodySchema, req.body, res);
      if (!parsed) return;
      const { chartData, lang } = parsed;

      const context = extractChartContext(chartData);
      const result  = generateSection(templates, context);

      res.json({
        section: sectionName,
        lang,
        ...result,
        meta: metaBuilder ? metaBuilder(context) : {},
      });
    } catch (err) {
      handleError(res, sectionName, err);
    }
  });
}

// ── Individual routes ─────────────────────────────────────────

makeSectionRoute('personality', personalityTemplates, ctx => ({
  sunSign:   ctx.sunSign,
  moonSign:  ctx.moonSign,
  ascSign:   ctx.ascSign,
  nakshatra: ctx.nakshatra,
  yogas:     ctx.yogas,
}));

makeSectionRoute('career', careerTemplates, ctx => ({
  mahadasha:    ctx.mahadasha,
  dashaEndYear: ctx.dashaEndYear,
  marsHouse:    ctx.p.mars?.house,
  saturnHouse:  ctx.p.saturn?.house,
  sunHouse:     ctx.p.sun?.house,
}));

makeSectionRoute('relationship', relationshipTemplates, ctx => ({
  isManglik:  ctx.isManglik,
  isKaalSarp: ctx.isKaalSarp,
  venusSign:  ctx.p.venus?.sign,
  venusHouse: ctx.p.venus?.house,
  marsHouse:  ctx.p.mars?.house,
}));

makeSectionRoute('health', healthTemplates, ctx => ({
  isSadeSati:  ctx.isSadeSati,
  moonDignity: ctx.p.moon?.dignity,
  saturnHouse: ctx.p.saturn?.house,
  marsHouse:   ctx.p.mars?.house,
  sunElement:  ctx.sunElement,
}));

makeSectionRoute('finance', financeTemplates, ctx => ({
  jupiterHouse: ctx.p.jupiter?.house,
  venusHouse:   ctx.p.venus?.house,
  saturnHouse:  ctx.p.saturn?.house,
  isSadeSati:   ctx.isSadeSati,
}));

makeSectionRoute('remedies', remediesTemplates, ctx => ({
  isManglik:     ctx.isManglik,
  isKaalSarp:    ctx.isKaalSarp,
  isSadeSati:    ctx.isSadeSati,
  nakshatra:     ctx.nakshatra,
  nakshatraLord: ctx.nakshatraLord,
  mahadasha:     ctx.mahadasha,
}));

makeSectionRoute('education', educationTemplates, ctx => ({
  mercuryDignity: ctx.p.mercury?.dignity,
  mercuryHouse:   ctx.p.mercury?.house,
  jupiterHouse:   ctx.p.jupiter?.house,
  rahuHouse:      ctx.p.rahu?.house,
}));

makeSectionRoute('family', familyTemplates, ctx => ({
  moonHouse: ctx.p.moon?.house,
  sunHouse:  ctx.p.sun?.house,
  rahuHouse: ctx.p.rahu?.house,
  moonSign:  ctx.moonSign,
}));

// Timeline route has extra dasha timeline data
router.post('/timeline', (req, res) => {
  try {
    const parsed = validateBody(SectionBodySchema, req.body, res);
    if (!parsed) return;
    const { chartData, lang } = parsed;

    const context = extractChartContext(chartData);
    const result  = generateSection(timelineTemplates, context);

    const dashas = chartData.dashaData?.dashas || [];
    const curIdx  = chartData.dashaData?.currentDashaIdx ?? 0;

    const dashaTimeline = dashas.map((d, i) => ({
      planet:    d.planet,
      startYear: d.start ? new Date(d.start).getFullYear() : null,
      endYear:   d.end   ? new Date(d.end).getFullYear()   : null,
      isCurrent: i === curIdx,
      theme:     DASHA_THEMES[d.planet] || 'Transformation and growth',
    }));

    res.json({
      section: 'timeline',
      lang,
      ...result,
      dashaTimeline,
      meta: {
        currentDasha: context.mahadasha,
        dashaEndYear: context.dashaEndYear,
        nextDasha:    context.nextMahadasha,
        yogas:        context.yogas,
        isSadeSati:   context.isSadeSati,
      },
    });
  } catch (err) {
    handleError(res, 'timeline', err);
  }
});


// ═══════════════════════════════════════════════════════════════
// FULL ANALYSIS — all sections in one request
// POST /api/template/full-analysis
// Body: { chartData, lang?, sections? }
// ═══════════════════════════════════════════════════════════════
router.post('/full-analysis', (req, res) => {
  try {
    const parsed = validateBody(FullAnalysisBodySchema, req.body, res);
    if (!parsed) return;
    const { chartData, lang, sections } = parsed;

    const context   = extractChartContext(chartData);
    const toInclude = Array.isArray(sections) ? sections.filter(s => TEMPLATE_MAP[s]) : ALL_SECTIONS;

    const results = {};
    for (const sec of toInclude) {
      results[sec] = generateSection(TEMPLATE_MAP[sec], context);
    }

    // Dasha timeline for the timeline section
    const dashas = chartData.dashaData?.dashas || [];
    const curIdx  = chartData.dashaData?.currentDashaIdx ?? 0;
    const dashaTimeline = dashas.slice(0, 9).map((d, i) => ({
      planet:    d.planet,
      startYear: d.start ? new Date(d.start).getFullYear() : null,
      endYear:   d.end   ? new Date(d.end).getFullYear()   : null,
      isCurrent: i === curIdx,
    }));

    res.json({
      lang,
      chartSummary: {
        sunSign:      context.sunSign,
        moonSign:     context.moonSign,
        ascSign:      context.ascSign,
        nakshatra:    context.nakshatra,
        mahadasha:    context.mahadasha,
        dashaEndYear: context.dashaEndYear,
        isManglik:    context.isManglik,
        isKaalSarp:   context.isKaalSarp,
        isSadeSati:   context.isSadeSati,
        yogas:        context.yogas,
        lp:           context.lp,
      },
      sections: results,
      dashaTimeline,
    });

  } catch (err) {
    handleError(res, 'full-analysis', err);
  }
});

export default router;
