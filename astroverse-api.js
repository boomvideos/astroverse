// ═══════════════════════════════════════════════════════════════
// AstroVerse AI — Frontend ↔ Backend Connector  (FIXED v2)
// astroverse-api.js
//
// HOW TO USE:
//   1. Start backend:  cd astroverse && node server.js
//   2. This file is already included in astroverse_v8.html
//      (add <script src="astroverse-api.js"></script> before </body>
//       if you serve them separately from different folders)
//   3. Set BACKEND_URL below to your server address.
//
// WHAT THIS FILE DOES:
//   - Checks if backend is reachable on load
//   - Provides window.fetch* functions that the HTML calls
//   - All AI features route through here to the backend
// ═══════════════════════════════════════════════════════════════

// ── Config ────────────────────────────────────────────────────
// Development : 'http://localhost:3001'
// Production  : 'https://your-backend-domain.com'
const BACKEND_URL = 'https://astroverse-0rzo.onrender.com';

// ── Generic POST helper ───────────────────────────────────────
async function apiPost(endpoint, body) {
  const res = await fetch(`${BACKEND_URL}${endpoint}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.error || `HTTP ${res.status}`);
  }
  return res.json();
}

// ── Check backend reachability ────────────────────────────────
async function checkBackend() {
  try {
    const res  = await fetch(`${BACKEND_URL}/api/health`);
    const data = await res.json();
    console.log(`✅ AstroVerse Backend connected — model: ${data.aiModel}`);
    return true;
  } catch (e) {
    console.warn('⚠️ AstroVerse Backend not reachable. AI features will be unavailable.');
    return false;
  }
}


// ═══════════════════════════════════════════════════════════════
// AI OVERRIDES  (called by the HTML after chart is generated)
// ═══════════════════════════════════════════════════════════════

// OVERRIDE 1: Full Kundli AI Analysis
// Called in generateFullKundli() after local calculations
window.fetchKundliAnalysis = async function(chartData, lang = 'en') {
  try {
    return await apiPost('/api/kundli-analysis', { chartData, lang });
  } catch (e) {
    console.error('Kundli analysis failed:', e.message);
    return { personality:{}, career:{}, love:{}, health:{}, remedies:{}, timeline:[] };
  }
};

// OVERRIDE 2: Hot Questions — single question answer
window.fetchHotAnswer = async function(question, category, chartData) {
  try {
    const data = await apiPost('/api/hot-questions', { question, category, chartData });
    return data.answer || '';
  } catch (e) {
    console.error('Hot question failed:', e.message);
    return '';
  }
};

// OVERRIDE 3: Magic Search — batch answers (parallel on backend)
// questions = [{type, text}, ...]
window.fetchMagicAnswers = async function(questions, chartData) {
  try {
    const data = await apiPost('/api/magic-search', { questions, chartData });
    return data.answers || [];
  } catch (e) {
    console.error('Magic search failed:', e.message);
    return [];
  }
};

// OVERRIDE 4: Compatibility AI narrative
// gunaScore = Ashta Kuta score out of 36 (calculated locally)
window.fetchCompatAnalysis = async function(person1, person2, gunaScore) {
  try {
    return await apiPost('/api/compatibility', { person1, person2, gunaScore });
  } catch (e) {
    console.error('Compat analysis failed:', e.message);
    return null;
  }
};

// OVERRIDE 5: Numerology AI interpretation
window.fetchNumerologyAnalysis = async function(name, dob, lp, expr, soul, pers) {
  try {
    return await apiPost('/api/numerology', { name, dob, lp, expr, soul, pers });
  } catch (e) {
    console.error('Numerology analysis failed:', e.message);
    return null;
  }
};


// ═══════════════════════════════════════════════════════════════
// TEMPLATE-BASED FEATURES  (no AI — instant, free, always works)
// These call /api/template/* which uses rule-based templates
// ═══════════════════════════════════════════════════════════════

async function fetchTemplateSection(section, chartData, lang = 'en') {
  try {
    return await apiPost(`/api/template/${section}`, { chartData, lang });
  } catch (e) {
    console.error(`Template ${section} failed:`, e.message);
    return null;
  }
}

window.fetchPersonalityAnalysis  = (cd, l) => fetchTemplateSection('personality',  cd, l);
window.fetchCareerAnalysis        = (cd, l) => fetchTemplateSection('career',        cd, l);
window.fetchRelationshipAnalysis  = (cd, l) => fetchTemplateSection('relationship',  cd, l);
window.fetchHealthAnalysis        = (cd, l) => fetchTemplateSection('health',        cd, l);
window.fetchFinanceAnalysis       = (cd, l) => fetchTemplateSection('finance',       cd, l);
window.fetchRemediesAnalysis      = (cd, l) => fetchTemplateSection('remedies',      cd, l);
window.fetchEducationAnalysis     = (cd, l) => fetchTemplateSection('education',     cd, l);
window.fetchFamilyAnalysis        = (cd, l) => fetchTemplateSection('family',        cd, l);
window.fetchTimelineAnalysis      = (cd, l) => fetchTemplateSection('timeline',      cd, l);

// All sections in one request (most efficient — used by the HTML)
window.fetchFullTemplateAnalysis = async function(chartData, lang = 'en', sections) {
  try {
    return await apiPost('/api/template/full-analysis', { chartData, lang, sections });
  } catch (e) {
    console.error('Full template analysis failed:', e.message);
    return null;
  }
};

// Helper: render a template result into a container element
window.renderTemplateSection = function(sectionName, result, containerEl) {
  if (!result || !containerEl) return;
  const { title, description, advice } = result;
  containerEl.innerHTML = `
    <div style="padding: 20px 0;">
      <div style="font-family:'Cinzel',serif;font-size:0.75rem;letter-spacing:2px;color:var(--gold);margin-bottom:12px;">
        ✦ ${title || sectionName.toUpperCase()}
      </div>
      <p style="font-size:0.88rem;color:var(--text);line-height:1.9;margin-bottom:20px;">
        ${(description || '').replace(/\n/g, '<br>')}
      </p>
      ${advice ? `
        <div style="background:rgba(201,168,76,0.05);border-left:2px solid var(--gold);border-radius:0 8px 8px 0;padding:14px 18px;margin-top:12px;">
          <div style="font-family:'Cinzel',serif;font-size:0.6rem;letter-spacing:2px;color:var(--gold);margin-bottom:8px;">💡 UPAY & ADVICE</div>
          <p style="font-size:0.82rem;color:var(--muted);line-height:1.8;">${advice}</p>
        </div>
      ` : ''}
    </div>`;
};

// ── Auto-check on load ────────────────────────────────────────
checkBackend();
