// ═══════════════════════════════════════════════════════════════
// AstroVerse — Template Engine  v3.0  (Bilingual)
//
// CHANGE from v2:
//   generateSection() ab context.lang ko read karta hai.
//   Agar template mein hi{} aur en{} objects hain, to sahi
//   language ka version pick karta hai automatically.
//   Purane flat templates (tmpl.title directly) bhi kaam karte
//   hain — backward compatible hai.
// ═══════════════════════════════════════════════════════════════

export const PLANET_MAP = {
  Sun: 'sun', Moon: 'moon', Mars: 'mars', Mercury: 'mercury',
  Jupiter: 'jupiter', Venus: 'venus', Saturn: 'saturn',
  Rahu: 'rahu', Ketu: 'ketu',
};

export const SIGN_ELEMENT = {
  Aries: 'fire',  Leo: 'fire',       Sagittarius: 'fire',
  Taurus: 'earth', Virgo: 'earth',   Capricorn: 'earth',
  Gemini: 'air',   Libra: 'air',     Aquarius: 'air',
  Cancer: 'water', Scorpio: 'water', Pisces: 'water',
};

export const SIGN_MODALITY = {
  Aries: 'cardinal', Cancer: 'cardinal',  Libra: 'cardinal',    Capricorn: 'cardinal',
  Taurus: 'fixed',   Leo: 'fixed',        Scorpio: 'fixed',     Aquarius: 'fixed',
  Gemini: 'mutable', Virgo: 'mutable',    Sagittarius: 'mutable', Pisces: 'mutable',
};

export const PLANET_HOUSE_KARAK = {
  Sun:     [1, 9, 10],   Moon:    [2, 4],
  Mars:    [1, 3, 6, 8, 10], Mercury: [3, 6, 10],
  Jupiter: [2, 5, 9, 11],   Venus:   [2, 4, 7, 12],
  Saturn:  [6, 8, 10, 12],  Rahu:    [3, 6, 12],
  Ketu:    [8, 12],
};

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
// ═══════════════════════════════════════════════════════════════
export function extractChartContext(chartData) {
  const {
    name = 'You',
    dob,
    gender,
    lang = 'en',
    planets = [],
    ascendant,
    sunSign,
    moonSign,
    nakshatra,
    dashaData,
    doshas = [],
    lp,
  } = chartData;

  const ascSignIdx = ascendant?.signIdx ?? 0;

  const getPlanet = (pName) => planets.find(p => p.name === pName) || null;

  const getHouse = (planet) => {
    if (!planet) return null;
    const signIdx = planet.signIdx ?? 0;
    return ((signIdx - ascSignIdx + 12) % 12) + 1;
  };

  const getDignity = (planet) => {
    if (!planet) return 'neutral';
    const signName = planet.signName || planet.sign?.name;
    const dig = PLANET_DIGNITY[planet.name];
    if (!dig || !signName) return 'neutral';
    if (signName === dig.exalt) return 'exalted';
    if (signName === dig.debil) return 'debilitated';
    if (dig.own.includes(signName)) return 'own';
    return 'neutral';
  };

  const p = {};
  for (const pName of Object.keys(PLANET_MAP)) {
    const pl = getPlanet(pName);
    const signName = pl ? (pl.signName || pl.sign?.name || '') : '';
    p[PLANET_MAP[pName]] = pl ? {
      name:       pl.name,
      sign:       signName,
      signIdx:    pl.signIdx ?? 0,
      house:      getHouse(pl),
      retrograde: !!pl.retrograde,
      degree:     parseFloat(pl.degree) || 0,
      nakshatra:  pl.nakshatraName || pl.nakshatra?.name || '',
      dignity:    getDignity(pl),
      element:    SIGN_ELEMENT[signName] || 'neutral',
      modality:   SIGN_MODALITY[signName] || 'mutable',
    } : null;
  }

  const dashas    = dashaData?.dashas || [];
  const curIdx    = dashaData?.currentDashaIdx ?? 0;
  const curDasha  = dashas[curIdx] || {};
  const nextDasha = dashas[curIdx + 1] || {};

  const findDosha = (keyword) => doshas.find(d => d.name?.toLowerCase().includes(keyword.toLowerCase()));
  const isManglik    = findDosha('Manglik')?.present    || false;
  const isKaalSarp   = findDosha('Kaal Sarp')?.present  || false;
  const isPitruDosha = findDosha('Pitru')?.present      || false;
  const isSadeSati   = findDosha('Sade Sati')?.present  || false;

  const yogas = [];

  // Gaj Kesari: Jupiter in kendra from Moon (fixed: proper circular diff)
  if (p.jupiter && p.moon) {
    const diff = ((p.jupiter.signIdx - p.moon.signIdx) + 12) % 12;
    if ([0, 3, 6, 9].includes(diff)) yogas.push('GajKesari');
  }
  if (p.sun && p.mercury && p.sun.sign === p.mercury.sign) yogas.push('Budhaditya');
  if (p.jupiter && p.jupiter.dignity !== 'debilitated' && [1,4,7,10].includes(p.jupiter.house)) yogas.push('Hamsa');
  if (p.venus   && ['own','exalted'].includes(p.venus.dignity)   && [1,4,7,10].includes(p.venus.house))   yogas.push('Malavya');
  if (p.saturn  && ['own','exalted'].includes(p.saturn.dignity)  && [1,4,7,10].includes(p.saturn.house))  yogas.push('Shasha');
  if (p.mars    && ['own','exalted'].includes(p.mars.dignity)    && [1,4,7,10].includes(p.mars.house))    yogas.push('Ruchaka');
  if (p.mercury && ['own','exalted'].includes(p.mercury.dignity) && [1,4,7,10].includes(p.mercury.house)) yogas.push('Bhadra');

  const resolvedSunSign  = typeof sunSign  === 'object' ? (sunSign?.name  || '') : (sunSign  || p.sun?.sign  || 'Aries');
  const resolvedMoonSign = typeof moonSign === 'object' ? (moonSign?.name || '') : (moonSign || p.moon?.sign || 'Cancer');
  const resolvedAscSign  = ascendant?.signName || ascendant?.sign?.name || 'Aries';

  return {
    name:    name || 'You',
    gender:  gender || 'unknown',
    dob:     dob || '',
    lang:    lang || 'en',   // ← NEW: language carried into context

    sunSign:    resolvedSunSign,
    moonSign:   resolvedMoonSign,
    ascSign:    resolvedAscSign,
    sunElement: SIGN_ELEMENT[resolvedSunSign]  || 'fire',
    moonElement:SIGN_ELEMENT[resolvedMoonSign] || 'water',
    ascElement: SIGN_ELEMENT[resolvedAscSign]  || 'fire',

    nakshatra:      nakshatra?.name  || '',
    nakshatraLord:  nakshatra?.lord  || '',
    nakshatraDiety: nakshatra?.deity || '',

    p,

    mahadasha:     curDasha.planet || 'Sun',
    dashaEndYear:  curDasha.end ? new Date(curDasha.end).getFullYear() : new Date().getFullYear() + 5,
    nextMahadasha: nextDasha.planet || '',

    lp: lp || 1,

    isManglik,
    isKaalSarp,
    isPitruDosha,
    isSadeSati,

    yogas,
    planets,
    ascSignIdx,
  };
}


// ═══════════════════════════════════════════════════════════════
// getTemplate — same as before, scoring by conditions
// ═══════════════════════════════════════════════════════════════
export function getTemplate(templates, context) {
  if (!templates || templates.length === 0) {
    throw new Error('getTemplate called with empty templates array');
  }

  let best      = null;
  let bestScore = -1;

  for (const tmpl of templates) {
    if (!tmpl.conditions || tmpl.conditions.length === 0) {
      if (bestScore < 0) { best = tmpl; bestScore = 0; }
      continue;
    }

    let score = 0;
    for (const cond of tmpl.conditions) {
      try { if (cond(context)) score++; } catch (_) {}
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
// fillTemplate — same as before
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
// resolveLangFields — NEW helper
// Template mein agar hi{} aur en{} hain to lang ke hisaab se
// sahi object pick karta hai. Agar flat (purana format) hai to
// waise hi return karta hai — backward compatible.
// ═══════════════════════════════════════════════════════════════
function resolveLangFields(tmpl, lang) {
  const isHindi = lang === 'hi';

  // Naya bilingual format: tmpl.hi{} aur tmpl.en{} dono hain
  if (tmpl.hi && tmpl.en) {
    const langObj = isHindi ? tmpl.hi : tmpl.en;
    return {
      title:       langObj.title       || tmpl.en.title       || '',
      description: langObj.description || tmpl.en.description || '',
      advice:      langObj.advice      || tmpl.en.advice      || '',
    };
  }

  // Purana flat format — seedha use karo (backward compatible)
  return {
    title:       tmpl.title       || '',
    description: tmpl.description || '',
    advice:      tmpl.advice      || '',
  };
}


// ═══════════════════════════════════════════════════════════════
// generateSection — UPDATED: bilingual support
// ═══════════════════════════════════════════════════════════════
export function generateSection(templates, context) {
  const tmpl   = getTemplate(templates, context);
  const lang   = context.lang || 'en';
  const fields = resolveLangFields(tmpl, lang);

  return {
    title:             fillTemplate(fields.title,       context),
    description:       fillTemplate(fields.description, context),
    advice:            fillTemplate(fields.advice,       context),
    matchedConditions: tmpl.conditions?.length || 0,
    templateId:        tmpl.id || 'default',
    lang,
  };
}
