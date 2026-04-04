// ═══════════════════════════════════════════════════════════════
// AstroVerse — Template Engine  (FIXED v2)
// templates/engine.js
//
// Flow:
//   chartData → extractChartContext() → context object
//   context + templates → getTemplate() → best matching template
//   template + context → fillTemplate() → final text
//   generateSection() = all three steps combined
// ═══════════════════════════════════════════════════════════════

// ── Planet name → shorthand ───────────────────────────────────
export const PLANET_MAP = {
  Sun: 'sun', Moon: 'moon', Mars: 'mars', Mercury: 'mercury',
  Jupiter: 'jupiter', Venus: 'venus', Saturn: 'saturn',
  Rahu: 'rahu', Ketu: 'ketu',
};

// ── Sign → element ────────────────────────────────────────────
export const SIGN_ELEMENT = {
  Aries: 'fire',  Leo: 'fire',       Sagittarius: 'fire',
  Taurus: 'earth', Virgo: 'earth',   Capricorn: 'earth',
  Gemini: 'air',   Libra: 'air',     Aquarius: 'air',
  Cancer: 'water', Scorpio: 'water', Pisces: 'water',
};

// ── Sign → modality ───────────────────────────────────────────
export const SIGN_MODALITY = {
  Aries: 'cardinal', Cancer: 'cardinal',  Libra: 'cardinal',    Capricorn: 'cardinal',
  Taurus: 'fixed',   Leo: 'fixed',        Scorpio: 'fixed',     Aquarius: 'fixed',
  Gemini: 'mutable', Virgo: 'mutable',    Sagittarius: 'mutable', Pisces: 'mutable',
};

// ── Planet → natural house karakatva ─────────────────────────
export const PLANET_HOUSE_KARAK = {
  Sun:     [1, 9, 10],   Moon:    [2, 4],
  Mars:    [1, 3, 6, 8, 10], Mercury: [3, 6, 10],
  Jupiter: [2, 5, 9, 11],   Venus:   [2, 4, 7, 12],
  Saturn:  [6, 8, 10, 12],  Rahu:    [3, 6, 12],
  Ketu:    [8, 12],
};

// ── Planet dignity table (Vedic) ──────────────────────────────
export const PLANET_DIGNITY = {
  Sun:     { exalt: 'Aries',       debil: 'Libra',       own: ['Leo'] },
  Moon:    { exalt: 'Taurus',      debil: 'Scorpio',     own: ['Cancer'] },
  Mars:    { exalt: 'Capricorn',   debil: 'Cancer',      own: ['Aries', 'Scorpio'] },
  Mercury: { exalt: 'Virgo',       debil: 'Pisces',      own: ['Gemini', 'Virgo'] },
  Jupiter: { exalt: 'Cancer',      debil: 'Capricorn',   own: ['Sagittarius', 'Pisces'] },
  Venus:   { exalt: 'Pisces',      debil: 'Virgo',       own: ['Taurus', 'Libra'] },
  Saturn:  { exalt: 'Libra',       debil: 'Aries',       own: ['Capricorn', 'Aquarius'] },
  Rahu:    { exalt: 'Gemini',      debil: 'Sagittarius', own: [] },
  Ketu:    { exalt: 'Sagittarius', debil: 'Gemini',      own: [] },
};


// ═══════════════════════════════════════════════════════════════
// extractChartContext
// Converts raw chartData (from frontend) into a clean context
// object used by all template sections.
// ═══════════════════════════════════════════════════════════════
export function extractChartContext(chartData) {
  const {
    name = 'You',
    dob,
    gender,
    planets = [],
    ascendant,
    sunSign,
    moonSign,
    nakshatra,
    dashaData,
    doshas = [],
    lp,
  } = chartData;

  // Ascendant sign index (0 = Aries … 11 = Pisces)
  // FIXED: use signIdx from ascendant object directly (sent by frontend)
  const ascSignIdx = ascendant?.signIdx ?? 0;

  // ── Helper: find planet object ────────────────────────────
  const getPlanet = (pName) => planets.find(p => p.name === pName) || null;

  // ── Helper: true house number 1–12 from Lagna ────────────
  // FIXED: proper modular house calculation
  const getHouse = (planet) => {
    if (!planet) return null;
    const signIdx = planet.signIdx ?? 0;
    return ((signIdx - ascSignIdx + 12) % 12) + 1;
  };

  // ── Helper: planet dignity ────────────────────────────────
  const getDignity = (planet) => {
    if (!planet) return 'neutral';
    // Support both planet.sign.name (object) and planet.signName (string)
    const signName = planet.signName || planet.sign?.name;
    const dig = PLANET_DIGNITY[planet.name];
    if (!dig || !signName) return 'neutral';
    if (signName === dig.exalt) return 'exalted';
    if (signName === dig.debil) return 'debilitated';
    if (dig.own.includes(signName)) return 'own';
    return 'neutral';
  };

  // ── Build planet context map ──────────────────────────────
  const p = {};
  for (const pName of Object.keys(PLANET_MAP)) {
    const pl = getPlanet(pName);
    const signName = pl ? (pl.signName || pl.sign?.name || '') : '';
    p[PLANET_MAP[pName]] = pl ? {
      name:      pl.name,
      sign:      signName,
      signIdx:   pl.signIdx ?? 0,
      house:     getHouse(pl),
      retrograde: !!pl.retrograde,
      degree:    parseFloat(pl.degree) || 0,
      nakshatra: pl.nakshatraName || pl.nakshatra?.name || '',
      dignity:   getDignity(pl),
      element:   SIGN_ELEMENT[signName] || 'neutral',
      modality:  SIGN_MODALITY[signName] || 'mutable',
    } : null;
  }

  // ── Dasha info ────────────────────────────────────────────
  const dashas    = dashaData?.dashas || [];
  const curIdx    = dashaData?.currentDashaIdx ?? 0;
  const curDasha  = dashas[curIdx] || {};
  const nextDasha = dashas[curIdx + 1] || {};

  // ── Doshas — find by name (robust, not by array index) ────
  const findDosha = (keyword) => doshas.find(d => d.name?.toLowerCase().includes(keyword.toLowerCase()));
  const isManglik    = findDosha('Manglik')?.present    || false;
  const isKaalSarp   = findDosha('Kaal Sarp')?.present  || false;
  const isPitruDosha = findDosha('Pitru')?.present      || false;
  const isSadeSati   = findDosha('Sade Sati')?.present  || false;

  // ── Yoga detection ────────────────────────────────────────
  const yogas = [];

  // Gaj Kesari: Jupiter in kendra (house 1,4,7,10) from Moon
  if (p.jupiter && p.moon) {
    const diff = Math.abs(p.jupiter.signIdx - p.moon.signIdx);
    if ([0, 3, 6, 9].includes(diff)) yogas.push('GajKesari');
  }
  // Budhaditya: Sun + Mercury same sign
  if (p.sun && p.mercury && p.sun.sign === p.mercury.sign) yogas.push('Budhaditya');
  // Pancha Mahapurusha yogas: planet in kendra in own/exalted sign
  if (p.jupiter && p.jupiter.dignity !== 'debilitated' && [1,4,7,10].includes(p.jupiter.house)) yogas.push('Hamsa');
  if (p.venus   && ['own','exalted'].includes(p.venus.dignity)   && [1,4,7,10].includes(p.venus.house))   yogas.push('Malavya');
  if (p.saturn  && ['own','exalted'].includes(p.saturn.dignity)  && [1,4,7,10].includes(p.saturn.house))  yogas.push('Shasha');
  if (p.mars    && ['own','exalted'].includes(p.mars.dignity)    && [1,4,7,10].includes(p.mars.house))    yogas.push('Ruchaka');
  if (p.mercury && ['own','exalted'].includes(p.mercury.dignity) && [1,4,7,10].includes(p.mercury.house)) yogas.push('Bhadra');

  // ── Resolve sign names ────────────────────────────────────
  // sunSign/moonSign/ascSign from chartData may be strings already
  const resolvedSunSign = typeof sunSign === 'object' ? (sunSign?.name || '') : (sunSign || p.sun?.sign || 'Aries');
  const resolvedMoonSign = typeof moonSign === 'object' ? (moonSign?.name || '') : (moonSign || p.moon?.sign || 'Cancer');
  const resolvedAscSign  = ascendant?.signName || ascendant?.sign?.name || 'Aries';

  return {
    // User info
    name: name || 'You',
    gender: gender || 'unknown',
    dob: dob || '',

    // Signs (strings)
    sunSign:    resolvedSunSign,
    moonSign:   resolvedMoonSign,
    ascSign:    resolvedAscSign,
    sunElement: SIGN_ELEMENT[resolvedSunSign]  || 'fire',
    moonElement:SIGN_ELEMENT[resolvedMoonSign] || 'water',
    ascElement: SIGN_ELEMENT[resolvedAscSign]  || 'fire',

    // Nakshatra
    nakshatra:      nakshatra?.name   || '',
    nakshatraLord:  nakshatra?.lord   || '',
    nakshatraDiety: nakshatra?.deity  || '',

    // Planets (p.sun, p.moon, etc. — each has .house, .sign, .dignity, ...)
    p,

    // Dasha
    mahadasha:    curDasha.planet  || 'Sun',
    dashaEndYear: curDasha.end ? new Date(curDasha.end).getFullYear() : new Date().getFullYear() + 5,
    nextMahadasha: nextDasha.planet || '',

    // Life Path
    lp: lp || 1,

    // Doshas
    isManglik,
    isKaalSarp,
    isPitruDosha,
    isSadeSati,

    // Yogas
    yogas,

    // Raw data (available to templates that need direct access)
    planets,
    ascSignIdx,
  };
}


// ═══════════════════════════════════════════════════════════════
// getTemplate
// Scores every template in the array by counting how many
// conditions pass. Returns the highest-scoring template.
// Tie-break: template.weight field (higher = higher priority).
// ═══════════════════════════════════════════════════════════════
export function getTemplate(templates, context) {
  let best      = null;
  let bestScore = -1;

  for (const tmpl of templates) {
    if (!tmpl.conditions || tmpl.conditions.length === 0) {
      // Default fallback (no conditions)
      if (bestScore < 0) { best = tmpl; bestScore = 0; }
      continue;
    }

    let score = 0;
    for (const cond of tmpl.conditions) {
      try {
        if (cond(context)) score++;
      } catch (_) {
        // Ignore errors in individual conditions
      }
    }

    const finalScore = score + (tmpl.weight || 0);
    if (finalScore > bestScore) {
      bestScore = finalScore;
      best = tmpl;
    }
  }

  return best || templates[templates.length - 1];
}


// ═══════════════════════════════════════════════════════════════
// fillTemplate
// Replaces {key} and {nested.key} placeholders with context values.
// ═══════════════════════════════════════════════════════════════
export function fillTemplate(text, context) {
  if (!text) return '';
  return text.replace(/\{([^}]+)\}/g, (_, key) => {
    const keys = key.split('.');
    let val = context;
    for (const k of keys) {
      if (val == null) return '';
      val = val[k];
    }
    return val !== undefined && val !== null ? String(val) : '';
  });
}


// ═══════════════════════════════════════════════════════════════
// generateSection
// Full pipeline: templates + context → {title, description, advice}
// ═══════════════════════════════════════════════════════════════
export function generateSection(templates, context) {
  const tmpl = getTemplate(templates, context);
  return {
    title:             fillTemplate(tmpl.title,       context),
    description:       fillTemplate(tmpl.description, context),
    advice:            fillTemplate(tmpl.advice,       context),
    matchedConditions: tmpl.conditions?.length || 0,
    templateId:        tmpl.id || 'default',
  };
}
