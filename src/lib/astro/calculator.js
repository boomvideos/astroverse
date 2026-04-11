// ═══════════════════════════════════════════════════════════════
// AstroVerse — Real Vedic Astrology Calculator
// VSOP87 mean orbital elements + Lahiri Ayanamsa (sidereal)
// Computes: 9 Vedic planets + Ascendant + Dasha + Doshas + Numerology
// ═══════════════════════════════════════════════════════════════

// ── Astronomical Constants ────────────────────────────────────

export const ZODIACS = [
  {name:'Aries',       hi:'मेष',    icon:'♈', dates:'Mar 21–Apr 19', el:'Fire',  lord:'Mars',    c:'#ef4444'},
  {name:'Taurus',      hi:'वृषभ',   icon:'♉', dates:'Apr 20–May 20', el:'Earth', lord:'Venus',   c:'#22c55e'},
  {name:'Gemini',      hi:'मिथुन',  icon:'♊', dates:'May 21–Jun 20', el:'Air',   lord:'Mercury', c:'#eab308'},
  {name:'Cancer',      hi:'कर्क',   icon:'♋', dates:'Jun 21–Jul 22', el:'Water', lord:'Moon',    c:'#a78bfa'},
  {name:'Leo',         hi:'सिंह',   icon:'♌', dates:'Jul 23–Aug 22', el:'Fire',  lord:'Sun',     c:'#f97316'},
  {name:'Virgo',       hi:'कन्या',  icon:'♍', dates:'Aug 23–Sep 22', el:'Earth', lord:'Mercury', c:'#84cc16'},
  {name:'Libra',       hi:'तुला',   icon:'♎', dates:'Sep 23–Oct 22', el:'Air',   lord:'Venus',   c:'#06b6d4'},
  {name:'Scorpio',     hi:'वृश्चिक',icon:'♏', dates:'Oct 23–Nov 21', el:'Water', lord:'Mars',    c:'#8b5cf6'},
  {name:'Sagittarius', hi:'धनु',    icon:'♐', dates:'Nov 22–Dec 21', el:'Fire',  lord:'Jupiter', c:'#3b82f6'},
  {name:'Capricorn',   hi:'मकर',    icon:'♑', dates:'Dec 22–Jan 19', el:'Earth', lord:'Saturn',  c:'#6b7280'},
  {name:'Aquarius',    hi:'कुम्भ',  icon:'♒', dates:'Jan 20–Feb 18', el:'Air',   lord:'Saturn',  c:'#22d3ee'},
  {name:'Pisces',      hi:'मीन',    icon:'♓', dates:'Feb 19–Mar 20', el:'Water', lord:'Jupiter', c:'#818cf8'},
];

export const NAKSHATRAS = [
  {name:'Ashwini',           lord:'Ketu',    deity:'Ashwini Kumaras'},
  {name:'Bharani',           lord:'Venus',   deity:'Yama'},
  {name:'Krittika',          lord:'Sun',     deity:'Agni'},
  {name:'Rohini',            lord:'Moon',    deity:'Brahma'},
  {name:'Mrigashira',        lord:'Mars',    deity:'Soma'},
  {name:'Ardra',             lord:'Rahu',    deity:'Rudra'},
  {name:'Punarvasu',         lord:'Jupiter', deity:'Aditi'},
  {name:'Pushya',            lord:'Saturn',  deity:'Brihaspati'},
  {name:'Ashlesha',          lord:'Mercury', deity:'Sarpa'},
  {name:'Magha',             lord:'Ketu',    deity:'Pitru'},
  {name:'Purva Phalguni',    lord:'Venus',   deity:'Bhaga'},
  {name:'Uttara Phalguni',   lord:'Sun',     deity:'Aryaman'},
  {name:'Hasta',             lord:'Moon',    deity:'Savitar'},
  {name:'Chitra',            lord:'Mars',    deity:'Vishwakarma'},
  {name:'Swati',             lord:'Rahu',    deity:'Vayu'},
  {name:'Vishakha',          lord:'Jupiter', deity:'Indragni'},
  {name:'Anuradha',          lord:'Saturn',  deity:'Mitra'},
  {name:'Jyeshtha',          lord:'Mercury', deity:'Indra'},
  {name:'Mula',              lord:'Ketu',    deity:'Nirriti'},
  {name:'Purva Ashadha',     lord:'Venus',   deity:'Apas'},
  {name:'Uttara Ashadha',    lord:'Sun',     deity:'Vishwadevas'},
  {name:'Shravana',          lord:'Moon',    deity:'Vishnu'},
  {name:'Dhanishtha',        lord:'Mars',    deity:'Ashta Vasus'},
  {name:'Shatabhisha',       lord:'Rahu',    deity:'Varuna'},
  {name:'Purva Bhadrapada',  lord:'Jupiter', deity:'Ajaikapat'},
  {name:'Uttara Bhadrapada', lord:'Saturn',  deity:'Ahirbudhnya'},
  {name:'Revati',            lord:'Mercury', deity:'Pushan'},
];

// Vimshottari Dasha periods in years
export const DASHA_SEQUENCE = [
  {planet:'Ketu',    hi:'केतु',   years:7,  ico:'☊'},
  {planet:'Venus',   hi:'शुक्र',  years:20, ico:'♀'},
  {planet:'Sun',     hi:'सूर्य',  years:6,  ico:'☀️'},
  {planet:'Moon',    hi:'चंद्र',  years:10, ico:'🌙'},
  {planet:'Mars',    hi:'मंगल',   years:7,  ico:'♂'},
  {planet:'Rahu',    hi:'राहु',   years:18, ico:'☋'},
  {planet:'Jupiter', hi:'गुरु',   years:16, ico:'♃'},
  {planet:'Saturn',  hi:'शनि',    years:19, ico:'♄'},
  {planet:'Mercury', hi:'बुध',    years:17, ico:'☿'},
];

export const LP_LUCKY = {
  1:  {stone:'Ruby',             color:'Red & Gold',            day:'Sunday',    planet:'Sun'},
  2:  {stone:'Pearl',            color:'White & Silver',        day:'Monday',    planet:'Moon'},
  3:  {stone:'Yellow Sapphire',  color:'Yellow & Purple',       day:'Thursday',  planet:'Jupiter'},
  4:  {stone:'Hessonite',        color:'Green & Blue',          day:'Saturday',  planet:'Rahu'},
  5:  {stone:'Emerald',          color:'Gray & Turquoise',      day:'Wednesday', planet:'Mercury'},
  6:  {stone:'Diamond',          color:'Pink & White',          day:'Friday',    planet:'Venus'},
  7:  {stone:"Cat's Eye",        color:'Violet & Purple',       day:'Monday',    planet:'Ketu'},
  8:  {stone:'Blue Sapphire',    color:'Dark Blue & Black',     day:'Saturday',  planet:'Saturn'},
  9:  {stone:'Red Coral',        color:'Red & Orange',          day:'Tuesday',   planet:'Mars'},
  11: {stone:'Moonstone',        color:'Silver & Iridescent',   day:'Monday',    planet:'Moon'},
  22: {stone:'Amethyst',         color:'Purple & Gold',         day:'Saturday',  planet:'Saturn'},
  33: {stone:'Aquamarine',       color:'Teal & Gold',           day:'Thursday',  planet:'Jupiter'},
};

// ── Core Calculation Helpers ──────────────────────────────────

/**
 * Convert a date string and time string to Julian Day Number.
 * @param {string} date - ISO date string (YYYY-MM-DD)
 * @param {string} time - Time string (HH:MM), defaults to '12:00'
 * @returns {number} Julian Day Number
 */
export function calcJulianDay(date, time) {
  const dt = new Date(date + 'T' + (time || '12:00') + ':00');
  return (dt.getTime() / 86400000) + 2440587.5;
}

/**
 * Calculate sidereal (Vedic) positions of the 9 standard Vedic planets.
 * Uses VSOP87 mean orbital elements with equation of center correction.
 * Applies Lahiri Ayanamsa for tropical → sidereal conversion.
 *
 * @param {string} date - ISO date string (YYYY-MM-DD)
 * @param {string} time - Time string (HH:MM)
 * @returns {Array} Array of planet objects with sign, signIdx, degree, minutes, nakshatra, retrograde
 */
export function calcPlanets(date, time) {
  const JD = calcJulianDay(date, time);
  const T = (JD - 2451545.0) / 36525; // Julian centuries from J2000

  const planetData = [
    {name:'Sun',      hi:'सूर्य', ico:'☀️', L0:280.46646,  Lrate:36000.76983,  M0:357.52911, Mrate:35999.05029, canRetro:false},
    {name:'Moon',     hi:'चंद्र', ico:'🌙', L0:218.3165,   Lrate:481267.8813,  canRetro:false},
    {name:'Mars',     hi:'मंगल',  ico:'♂',  L0:355.433,    Lrate:19140.2993,   canRetro:true},
    {name:'Mercury',  hi:'बुध',   ico:'☿',  L0:252.2509,   Lrate:149472.6746,  canRetro:true},
    {name:'Jupiter',  hi:'गुरु',  ico:'♃',  L0:34.3515,    Lrate:3034.7461,    canRetro:true},
    {name:'Venus',    hi:'शुक्र', ico:'♀',  L0:181.9798,   Lrate:58517.8156,   canRetro:true},
    {name:'Saturn',   hi:'शनि',   ico:'♄',  L0:50.0774,    Lrate:1222.4937,    canRetro:true},
    {name:'Rahu',     hi:'राहु',  ico:'☋',  L0:125.0445,   Lrate:-1934.136,    isNode:true, canRetro:false},
  ];

  // Helper: get mean longitude for a planet at time T
  function getLong(p, Tv) {
    return ((p.L0 + p.Lrate * Tv) % 360 + 360) % 360;
  }

  // Helper: normalize angle difference to [-180, 180]
  function angleDiff(a, b) {
    let d = a - b;
    while (d > 180)  d -= 360;
    while (d < -180) d += 360;
    return d;
  }

  // Sun: apply equation of center correction
  function getSunTrueLong(Tv) {
    const M = ((357.52911 + 35999.05029 * Tv) % 360 + 360) % 360;
    const Mrad = M * Math.PI / 180;
    const C = (1.9146 - 0.004817 * Tv - 0.000014 * Tv * Tv) * Math.sin(Mrad)
            + (0.019993 - 0.000101 * Tv) * Math.sin(2 * Mrad)
            + 0.00029 * Math.sin(3 * Mrad);
    return ((280.46646 + 36000.76983 * Tv + C) % 360 + 360) % 360;
  }

  // Inner/outer planets: apply equation of center
  const ecc = {Mercury:0.2056, Venus:0.0068, Mars:0.0934, Jupiter:0.0489, Saturn:0.0565};
  function getTrueLong(p, Tv) {
    if (p.name === 'Sun') return getSunTrueLong(Tv);
    const meanLong = getLong(p, Tv);
    const e = ecc[p.name];
    if (!e) return meanLong; // Moon, Rahu — use mean longitude
    const perihelion = {Mercury:77.46, Venus:131.53, Mars:336.04, Jupiter:14.33, Saturn:93.06};
    const M = ((meanLong - (perihelion[p.name] || 0)) % 360 + 360) % 360;
    const Mrad = M * Math.PI / 180;
    const C = (2 * e - (e * e * e) / 4) * Math.sin(Mrad)
            + (5 / 4) * e * e * Math.sin(2 * Mrad)
            + (13 / 12) * e * e * e * Math.sin(3 * Mrad);
    return ((meanLong + C * 180 / Math.PI) % 360 + 360) % 360;
  }

  // Lahiri Ayanamsa: 23.85° at J2000, precessing at ~50.3"/year
  const ayanamsa = 23.85 + (JD - 2451545.0) * (50.3 / 3600 / 365.25);

  const results = planetData.map(p => {
    const T_prev = (JD - 1 - 2451545.0) / 36525;
    const T_next = (JD + 1 - 2451545.0) / 36525;

    const tropLong     = getTrueLong(p, T);
    const tropLongPrev = getTrueLong(p, T_prev);
    const tropLongNext = getTrueLong(p, T_next);

    // Retrograde detection: compare motion over ±1 day
    let retrograde = false;
    if (p.isNode) {
      retrograde = true; // lunar nodes always retrograde
    } else if (p.canRetro) {
      const dailyMotion = angleDiff(tropLongNext, tropLongPrev) / 2;
      retrograde = dailyMotion < 0;
    }

    // Convert tropical → sidereal (Vedic) using Lahiri Ayanamsa
    const longitude = ((tropLong - ayanamsa) % 360 + 360) % 360;

    const signIdx      = Math.floor(longitude / 30) % 12;
    const degree       = Math.floor(longitude % 30);
    const minutes      = Math.floor((longitude % 1) * 60);
    const sign         = ZODIACS[signIdx];
    const nakshatraIdx = Math.min(Math.floor(longitude / (360 / 27)) % 27, 26);
    const nakshatra    = NAKSHATRAS[nakshatraIdx] || NAKSHATRAS[0];

    return { ...p, longitude: longitude.toFixed(4), sign, signIdx, degree, minutes, nakshatraIdx, nakshatra, retrograde };
  });

  // Ketu = exactly opposite Rahu (both in sidereal frame)
  const rahu = results.find(p => p.name === 'Rahu');
  const ketuLong    = ((parseFloat(rahu.longitude) + 180) % 360);
  const ketuSignIdx = Math.floor(ketuLong / 30) % 12;
  const ketuNakIdx  = Math.min(Math.floor(ketuLong / (360 / 27)) % 27, 26);
  results.push({
    name:'Ketu', hi:'केतु', ico:'☊',
    longitude: ketuLong.toFixed(4),
    sign:      ZODIACS[ketuSignIdx],
    signIdx:   ketuSignIdx,
    degree:    Math.floor(ketuLong % 30),
    minutes:   Math.floor((ketuLong % 1) * 60),
    nakshatra: NAKSHATRAS[ketuNakIdx] || NAKSHATRAS[0],
    retrograde: true, // Ketu always retrograde
  });

  return results;
}

/**
 * Calculate the Ascendant (Lagna) for given birth data.
 * Requires latitude and longitude for accurate results.
 * Falls back to a time-based approximation if coordinates are missing.
 *
 * @param {string} date - ISO date string (YYYY-MM-DD)
 * @param {string} time - Time string (HH:MM) — required for accurate Lagna
 * @param {number|null} lat - Latitude of birth place (degrees)
 * @param {number|null} lng - Longitude of birth place (degrees)
 * @returns {object} { sign, degree, minutes, ayanamsa, note? }
 */
export function calcAscendant(date, time, lat, lng) {
  // Without coordinates: time-based approximation
  if (!lat || !lng) {
    if (!time) return { sign: ZODIACS[0], degree: 0, note: 'No time/location' };
    const [h, m] = time.split(':').map(Number);
    const decimalHour = h + m / 60;
    const sunSign     = getZodiac(date);
    const sunSignIdx  = ZODIACS.findIndex(z => z.name === sunSign.name);
    // Each 2 hours shifts Lagna by ~1 sign (equatorial approximation)
    const hoursSinceSunrise = ((decimalHour - 6) + 24) % 24;
    const lagnaShift = Math.floor(hoursSinceSunrise / 2);
    const lagnaFrac  = (hoursSinceSunrise / 2) % 1;
    const lagnaIdx   = (sunSignIdx + lagnaShift) % 12;
    const degree     = Math.floor(lagnaFrac * 30);
    return { sign: ZODIACS[lagnaIdx], degree, note: 'Approx (no location)' };
  }

  // Full GMST/LMST calculation with coordinates
  const JD = calcJulianDay(date, time);
  const T  = (JD - 2451545.0) / 36525;

  // 1. Greenwich Mean Sidereal Time (degrees) — IAU 1982
  const theta0 = 280.46061837
               + 360.98564736629 * (JD - 2451545.0)
               + 0.000387933 * T * T
               - (T * T * T) / 38710000;
  const GMST = ((theta0 % 360) + 360) % 360;

  // 2. Local Mean Sidereal Time
  const LMST = ((GMST + lng) % 360 + 360) % 360;

  // 3. True obliquity of the ecliptic (with nutation approximation)
  const eps0    = 23.439291111 - 0.013004167 * T - 1.64e-7 * T * T + 5.04e-7 * T * T * T;
  const omega   = ((125.04 - 1934.136 * T) % 360 + 360) % 360;
  const epsilon = (eps0 + 0.00256 * Math.cos(omega * Math.PI / 180)) * Math.PI / 180;

  // 4. Ascendant from LMST (standard formula)
  const LMSTrad    = LMST * Math.PI / 180;
  const latRad     = lat  * Math.PI / 180;
  const y          = -Math.cos(LMSTrad);
  const x          = Math.sin(LMSTrad) * Math.cos(epsilon) + Math.tan(latRad) * Math.sin(epsilon);
  const ascTropical = (Math.atan2(y, x) * 180 / Math.PI + 360) % 360;

  // 5. Convert Tropical → Sidereal (Vedic) using Lahiri Ayanamsa
  const ayanamsa    = 23.85 + (JD - 2451545.0) * (50.3 / 3600 / 365.25);
  const ascSidereal = ((ascTropical - ayanamsa) % 360 + 360) % 360;

  const signIdx = Math.floor(ascSidereal / 30) % 12;
  const degree  = Math.floor(ascSidereal % 30);
  const minutes = Math.floor((ascSidereal % 1) * 60);

  return { sign: ZODIACS[signIdx], degree, minutes, ayanamsa: ayanamsa.toFixed(2) };
}

/**
 * Get the Vedic (sidereal) Sun sign for a given date.
 * Uses actual Sun longitude with Lahiri Ayanamsa applied.
 *
 * @param {string} dob  - ISO date string
 * @param {string} time - Time string (optional, defaults to '12:00')
 * @returns {object} Zodiac sign object
 */
export function getZodiac(dob, time) {
  const planets = calcPlanets(dob, time || '12:00');
  const sun = planets.find(p => p.name === 'Sun');
  return sun ? sun.sign : ZODIACS[0];
}

/**
 * Calculate Vimshottari Dasha timeline from Moon's nakshatra at birth.
 *
 * @param {string} dob         - ISO date string
 * @param {string} time        - Time string
 * @param {number} moonSignIdx - Moon's sidereal sign index (0–11)
 * @returns {object} { dashas: Array, currentDashaIdx: number }
 */
export function calcDasha(dob, time, moonSignIdx) {
  const planets = calcPlanets(dob, time);
  const moon    = planets.find(p => p.name === 'Moon');
  if (!moon || !moon.nakshatra || !moon.nakshatra.lord) {
    return { dashas: DASHA_SEQUENCE.map(d => ({...d, start: new Date(dob), end: new Date(dob)})), currentDashaIdx: 0 };
  }

  const nakshatraLord = moon.nakshatra.lord;
  const lordToIdx = {Ketu:0, Venus:1, Sun:2, Moon:3, Mars:4, Rahu:5, Jupiter:6, Saturn:7, Mercury:8};
  const startIdx  = lordToIdx[nakshatraLord] || 0;

  const dob_d          = new Date(dob);
  const nakshatraDeg   = 360 / 27;
  const moonLong       = parseFloat(moon.longitude);
  const nakshatraStart = moon.nakshatraIdx * nakshatraDeg;
  const elapsed        = moonLong - nakshatraStart;
  const fraction       = Math.min(Math.max(elapsed / nakshatraDeg, 0), 1);
  const startDasha     = DASHA_SEQUENCE[startIdx];
  const remainingYears = startDasha.years * (1 - fraction);

  const MS_PER_YEAR = 365.25 * 24 * 3600 * 1000;
  const dashas = [];
  let currentMs = dob_d.getTime();

  // First partial dasha
  const endFirstMs = currentMs + remainingYears * MS_PER_YEAR;
  dashas.push({...startDasha, start: new Date(currentMs), end: new Date(endFirstMs), years: parseFloat(remainingYears.toFixed(2))});
  currentMs = endFirstMs;

  // Remaining 8 full dashas (cycle wraps around)
  for (let i = 1; i < 9; i++) {
    const idx    = (startIdx + i) % 9;
    const d      = DASHA_SEQUENCE[idx];
    const endMs  = currentMs + d.years * MS_PER_YEAR;
    dashas.push({...d, start: new Date(currentMs), end: new Date(endMs), years: d.years});
    currentMs = endMs;
  }

  const now            = new Date();
  const currentDashaIdx = dashas.findIndex(d => d.start <= now && d.end > now);
  return { dashas, currentDashaIdx: currentDashaIdx >= 0 ? currentDashaIdx : 0 };
}

/**
 * Detect Vedic doshas: Manglik, Kaal Sarp, Shani, Pitru, Sade Sati.
 *
 * @param {Array}  planets - Output of calcPlanets()
 * @param {number} ascIdx  - Ascendant sign index (0–11)
 * @returns {Array} Array of dosha objects { name, hi, present, desc }
 */
export function detectDoshas(planets, ascIdx) {
  ascIdx = ascIdx || 0;
  const mars   = planets.find(p => p.name === 'Mars');
  const saturn = planets.find(p => p.name === 'Saturn');
  const rahu   = planets.find(p => p.name === 'Rahu');
  const ketu   = planets.find(p => p.name === 'Ketu');
  const sun    = planets.find(p => p.name === 'Sun');
  const moon   = planets.find(p => p.name === 'Moon');
  const venus  = planets.find(p => p.name === 'Venus');

  if (!mars || !saturn || !rahu || !ketu || !sun) return [];

  const houseOf = (p) => ((p.signIdx - ascIdx + 12) % 12) + 1;

  // Manglik Dosha (checked from Lagna, Moon, Venus)
  const MANGLIK_HOUSES  = [1, 2, 4, 7, 8, 12];
  const marsHouse       = houseOf(mars);
  const manglikFromLagna = MANGLIK_HOUSES.includes(marsHouse);
  const manglikFromMoon  = moon  ? MANGLIK_HOUSES.includes(((mars.signIdx - moon.signIdx + 12) % 12) + 1)  : false;
  const manglikFromVenus = venus ? MANGLIK_HOUSES.includes(((mars.signIdx - venus.signIdx + 12) % 12) + 1) : false;
  const isManglik        = manglikFromLagna || manglikFromMoon || manglikFromVenus;
  const manglikScore     = [manglikFromLagna, manglikFromMoon, manglikFromVenus].filter(Boolean).length;
  const manglikLevel     = manglikScore === 3 ? 'strong' : manglikScore === 2 ? 'moderate' : manglikScore === 1 ? 'mild' : 'none';

  // Kaal Sarp Dosha — all 7 planets within Rahu→Ketu arc
  const rahuLong    = parseFloat(rahu.longitude);
  const ketuLong    = parseFloat(ketu.longitude);
  const otherPlanets = planets.filter(p => !['Rahu', 'Ketu'].includes(p.name));
  let allBetween = true;
  for (const p of otherPlanets) {
    const arcFromRahu = ((parseFloat(p.longitude) - rahuLong) + 360) % 360;
    if (arcFromRahu > 180) { allBetween = false; break; }
  }
  const rahuHouse = houseOf(rahu);
  const KAAL_SARP_TYPES = ['','Anant','Kulik','Vasuki','Shankhapal','Padma','Mahapadma','Takshak','Karkotak','Shankhnaad','Paatak','Vishadhar','Sheshnaag'];
  const kaalSarpType = allBetween ? (KAAL_SARP_TYPES[rahuHouse] || 'Anant') : '';

  // Shani Dosha — Saturn in Kendra (1, 4, 7, 10) from Lagna
  const saturnHouse = houseOf(saturn);
  const isShapit    = [1, 4, 7, 10].includes(saturnHouse);

  // Pitru Dosha — Sun conjunct Rahu or Ketu
  const isPitru = (sun.signIdx === rahu.signIdx) || (sun.signIdx === ketu.signIdx);

  // Sade Sati — transiting Saturn within one sign of natal Moon
  let isSadeSati = false;
  let transitSaturnSign = saturn.sign;
  if (moon) {
    const todayJD = (new Date().getTime() / 86400000) + 2440587.5;
    const todayT  = (todayJD - 2451545.0) / 36525;
    const todayAyanamsa      = 23.85 + (todayJD - 2451545.0) * (50.3 / 3600 / 365.25);
    const satTropToday       = ((50.0774 + 1222.4937 * todayT) % 360 + 360) % 360;
    const satSiderealToday   = ((satTropToday - todayAyanamsa) % 360 + 360) % 360;
    const transitSaturnSignIdx = Math.floor(satSiderealToday / 30) % 12;
    transitSaturnSign = ZODIACS[transitSaturnSignIdx];
    const satMoonDiff = ((transitSaturnSignIdx - moon.signIdx) + 12) % 12;
    isSadeSati = [11, 0, 1].includes(satMoonDiff);
  }

  return [
    {
      name:'Manglik Dosha', hi:'मांगलिक दोष', present: isManglik,
      desc: isManglik
        ? `Manglik Dosha is present (${manglikLevel}) — Mars in House ${marsHouse} (${mars.sign.name}). Present from ${[manglikFromLagna?'Lagna':'',manglikFromMoon?'Moon':'',manglikFromVenus?'Venus':''].filter(Boolean).join(', ')}.`
        : `No Manglik Dosha. Mars is in House ${marsHouse} (${mars.sign.name}) — not in Manglik positions from Lagna, Moon, or Venus.`,
    },
    {
      name:'Kaal Sarp Dosha', hi:'काल सर्प दोष', present: allBetween,
      desc: allBetween
        ? `All planets lie within the Rahu–Ketu axis. ${kaalSarpType} Kaal Sarp Dosha is present (Rahu in H${rahuHouse}).`
        : `Planets are not all confined between Rahu–Ketu axis. Kaal Sarp Dosha is not present.`,
    },
    {
      name:'Shani Dosha', hi:'शनि दोष', present: isShapit,
      desc: isShapit
        ? `Saturn (${saturn.sign.name} ${saturn.degree}°) is in Kendra House ${saturnHouse}. Discipline and karmic lessons are prominent themes.`
        : `Saturn (${saturn.sign.name}) is in House ${saturnHouse} — not a challenging Kendra position.`,
    },
    {
      name:'Pitru Dosha', hi:'पितृ दोष', present: isPitru,
      desc: isPitru
        ? `Sun is conjunct with Rahu/Ketu in ${sun.sign.name}. Pitru Dosha may be present — ancestral karmic debts.`
        : `Sun (${sun.sign.name}) is not afflicted by nodal conjunction. No Pitru Dosha detected.`,
    },
    {
      name:'Sade Sati', hi:'साढ़े साती', present: isSadeSati,
      desc: isSadeSati
        ? `Transiting Saturn (${transitSaturnSign.name}) is within one sign of your natal Moon (${moon ? moon.sign.name : '—'}). Sade Sati is currently active.`
        : `Transiting Saturn (${transitSaturnSign.name}) is not within one sign of your natal Moon. Sade Sati is not currently active.`,
    },
  ];
}

// ── Numerology ────────────────────────────────────────────────

const PYTHA = {A:1,B:2,C:3,D:4,E:5,F:6,G:7,H:8,I:9,J:1,K:2,L:3,M:4,N:5,O:6,P:7,Q:8,R:9,S:1,T:2,U:3,V:4,W:5,X:6,Y:7,Z:8};

function reduce(n) {
  while (n > 9 && n !== 11 && n !== 22 && n !== 33)
    n = String(n).split('').reduce((a, d) => a + parseInt(d), 0);
  return n;
}

/**
 * Pythagorean Life Path number from date of birth.
 * @param {string} dob - ISO date string (YYYY-MM-DD)
 * @returns {number}
 */
export function lifePath(dob) {
  const digits = dob.replace(/-/g, '');
  return reduce(digits.split('').reduce((a, c) => a + parseInt(c), 0));
}

/**
 * Pythagorean Expression number from full name.
 * @param {string} name
 * @returns {number}
 */
export function expressionNum(name) {
  return reduce(name.toUpperCase().replace(/[^A-Z]/g, '').split('').reduce((a, c) => a + (PYTHA[c] || 0), 0));
}

/**
 * Pythagorean Soul Urge number (vowels only).
 * @param {string} name
 * @returns {number}
 */
export function soulUrge(name) {
  return reduce(name.toUpperCase().replace(/[^AEIOU]/g, '').split('').reduce((a, c) => a + (PYTHA[c] || 0), 0));
}

// ── Main Chart Builder ────────────────────────────────────────

/**
 * Build a complete chart object from birth form values.
 * Performs real Vedic calculations using VSOP87 + Lahiri Ayanamsa.
 *
 * @param {object} form - { name, dob, time, place, gender, lang, lat?, lng? }
 * @returns {object} Complete chart data object
 */
export function buildChartFromForm(form) {
  const { name, dob, time, place, gender, lang } = form;
  const lat = form.lat ? parseFloat(form.lat) : null;
  const lng = form.lng ? parseFloat(form.lng) : null;

  // Real calculations
  const planets   = calcPlanets(dob, time || '12:00');
  const sunSign   = getZodiac(dob, time);
  const moonP     = planets.find(p => p.name === 'Moon');
  const ascendant = calcAscendant(dob, time || '12:00', lat, lng);
  const ascIdx    = ascendant.sign ? ZODIACS.findIndex(z => z.name === ascendant.sign.name) : 0;
  const dashaData = calcDasha(dob, time || '12:00', moonP?.signIdx);
  const doshas    = detectDoshas(planets, ascIdx);
  const lp        = lifePath(dob);
  const nakshatra = moonP?.nakshatra || null;

  return {
    name,
    dob,
    time:      time || '',
    place:     place || '',
    gender:    gender || '',
    lang:      lang || 'en',
    planets,
    sunSign,
    moonSign:  moonP?.sign?.name || '',
    ascendant,
    nakshatra,
    dashaData,
    doshas,
    lp,
  };
}
