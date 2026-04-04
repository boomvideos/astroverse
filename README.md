# AstroVerse AI — Setup Guide (v2 Fixed)

## What was fixed in v2

| Fix | Details |
|-----|---------|
| **Lahiri Ayanamsa on all planets** | All planet signs, nakshatras, houses are now Vedic sidereal. Previously only Ascendant was converted. |
| **Vedic Sun sign** | `getZodiac()` now uses actual Sun longitude (sidereal), not tropical calendar dates. |
| **Manglik Dosha** | Uses proper house number from Lagna, not raw sign index. |
| **Kaal Sarp Dosha** | Modular arc math — handles 0°/360° boundary correctly. 12 named types added. |
| **Shani Dosha** | Uses house number from Lagna (was also using raw sign index). |
| **Sade Sati** | Added as 5th dosha (was missing from detection). |
| **Dasha date math** | Millisecond-based year addition — no more fractional year loss. |
| **Ashta Kuta Guna Milan** | Full 36-point system (Varna, Vashya, Tara, Yoni, Graha Maitri, Gana, Bhakut, Nadi). Replaces fake element-only formula. |
| **Panchang** | Sun/Moon in sidereal. Rahu Kaal calculated from sunrise. Karana sequence fixed. |
| **`getPredictions()`** | Full chart-based prediction engine replacing empty `{}` stub. |
| **Backend connection** | `astroverse-api.js` now included in HTML. `_buildChartPayload()` sends `signName` strings. |
| **Magic Search** | Parallel execution (5 concurrent) instead of sequential. Was 60-90s, now 15-25s. |
| **trust proxy** | `app.set('trust proxy', 1)` — rate limiter works correctly behind Nginx/Cloudflare. |
| **Model string** | Updated to `claude-opus-4-5-20251101` (dated format). |
| **Prompt injection** | All user strings sanitized before AI prompt insertion. |
| **Celebrity DB** | Signs corrected to Vedic sidereal. |
| **False "Swiss Ephemeris" labels** | Replaced with accurate "Vedic Sidereal — Lahiri Ayanamsa" throughout. |
| **Varshphal Year Lord** | Uses Hora lord from solar birthday weekday (traditional method). |
| **Lal Kitab** | Shows actual house numbers from Lagna. Dosha priority logic fixed. |
| **`ZODIACS.indexOf()`** | All 8 reference-equality bugs fixed with `findIndex(z => z.name === ...)`. |

---

## Project Structure

```
astroverse/
├── astroverse_v8.html    ← Frontend (complete single-file app)
├── astroverse-api.js     ← Frontend ↔ Backend connector (auto-loaded by HTML)
├── server.js             ← Node.js + Express backend
├── template-routes.js    ← Template-based routes (no AI, always instant)
├── package.json
├── .env.example
└── templates/
    ├── engine.js         ← Template matching + filling engine
    ├── personality.js    ← Personality section templates
    └── sections.js       ← All other section templates
```

---

## Architecture

```
astroverse_v8.html
│
│  Local calculations (no server needed):
│  • Planet positions — VSOP87 + Lahiri Ayanamsa
│  • Ascendant — GMST/LMST method
│  • Nakshatra — sidereal Moon longitude
│  • Vimshottari Dasha — Moon nakshatra sequence
│  • Ashta Kuta Guna Milan — 36-point
│  • Dosha detection — Manglik, Kaal Sarp, Shani, Pitru, Sade Sati
│  • Navamsa D9, Transit, Panchang, Numerology
│
astroverse-api.js (connector)
│
│  HTTP POST (JSON)
│
server.js (Node.js + Express)
│  ├── /api/kundli-analysis    → Claude AI interpretation
│  ├── /api/hot-questions      → Single Q&A
│  ├── /api/magic-search       → Batch Q&A (parallel)
│  ├── /api/compatibility      → Compat AI narrative
│  ├── /api/numerology         → Numerology AI interpretation
│  └── /api/template/*         → Template sections (no AI)
│
Anthropic API
```

---

## Setup

### 1. Install dependencies

```bash
cd astroverse
npm install
```

### 2. Configure environment

```bash
cp .env.example .env
# Edit .env and add your Anthropic API key:
# ANTHROPIC_API_KEY=sk-ant-...
```

### 3. Start backend

```bash
node server.js
# or for development with auto-reload:
node --watch server.js
```

You should see:
```
✅  AstroVerse Backend running on port 3001
    API Key : ✓ Set
    Health  : http://localhost:3001/api/health
```

### 4. Open frontend

Open `astroverse_v8.html` directly in your browser — or serve from any static file server:

```bash
npx serve .       # or python3 -m http.server 8080
```

If the backend is running on `localhost:3001`, all AI features activate automatically.

---

## Changing Backend URL (for production)

Edit `astroverse-api.js`, line 18:

```js
const BACKEND_URL = 'https://your-backend-domain.com';
```

---

## What works without the backend

Everything listed under "Local calculations" above — chart, dasha, doshas, panchang, transit, navamsa, numerology math, compatibility score (Guna Milan), Lal Kitab, Varshphal, Cosmic Twin, Astro Roast, download report — all work instantly with zero server.

## What requires the backend

AI interpretation sections: Personality, Career, Love, Health, Remedies, Life Timeline, Hot Questions, Magic Search, Numerology AI narrative.

---

## Requirements

- Node.js 18+
- Anthropic API key
