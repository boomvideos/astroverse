// ═══════════════════════════════════════════════════════════════
// AstroVerse — Frontend ↔ Backend Connector
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
//   - All template features route through here to the backend
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
    console.log(`✅ AstroVerse Backend connected — service: ${data.service}`);
    return true;
  } catch (e) {
    console.warn('⚠️ AstroVerse Backend not reachable. Template features will be unavailable.');
    return false;
  }
}


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

// ── XSS-safe HTML escaping helper ────────────────────────────
function escapeHtml(str) {
  return String(str ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

// Helper: render a template result into a container element.
// All API-supplied strings are HTML-escaped to prevent XSS.
window.renderTemplateSection = function(sectionName, result, containerEl) {
  if (!result || !containerEl) return;
  const { title, description, advice } = result;

  const safeTitle       = escapeHtml(title || sectionName.toUpperCase());
  const safeDescription = escapeHtml(description || '').replace(/\n/g, '<br>');
  const safeAdvice      = escapeHtml(advice || '');

  containerEl.innerHTML = `
    <div style="padding: 20px 0;">
      <div style="font-family:'Cinzel',serif;font-size:0.75rem;letter-spacing:2px;color:var(--gold);margin-bottom:12px;">
        ✦ ${safeTitle}
      </div>
      <p style="font-size:0.88rem;color:var(--text);line-height:1.9;margin-bottom:20px;">
        ${safeDescription}
      </p>
      ${safeAdvice ? `
        <div style="background:rgba(201,168,76,0.05);border-left:2px solid var(--gold);border-radius:0 8px 8px 0;padding:14px 18px;margin-top:12px;">
          <div style="font-family:'Cinzel',serif;font-size:0.6rem;letter-spacing:2px;color:var(--gold);margin-bottom:8px;">💡 UPAY & ADVICE</div>
          <p style="font-size:0.82rem;color:var(--muted);line-height:1.8;">${safeAdvice}</p>
        </div>
      ` : ''}
    </div>`;
};

// ── Auto-check on load ────────────────────────────────────────
checkBackend();
