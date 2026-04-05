# AstroVerse AI — SaaS Upgrade: Migration Guide

A step-by-step execution plan to go from the current monolith to the
production-ready SaaS architecture. Each phase is independently shippable.

---

## Phase 0 — Accounts & Prerequisites (30 minutes)

Create accounts on the following free-tier services:

| Service | URL | What to grab |
|---|---|---|
| Clerk | dashboard.clerk.com | Publishable key + Secret key |
| Resend | resend.com | API key + verify your sending domain |
| Mixpanel | mixpanel.com | Project token |

---

## Phase 1 — Backend Upgrade (1-2 hours)

### 1. Install new dependencies
```bash
cd backend
npm install @clerk/express resend zod
```

### 2. Update .env
Copy `.env.example` and fill in all values, especially:
- `CLERK_SECRET_KEY`
- `RESEND_API_KEY`
- `ALLOWED_ORIGIN=http://localhost:5173`  ← dev value

### 3. Replace server.js
Swap your current `server.js` with the new version from this package.
The critical fixes applied:
- CORS registered exactly once, reads from env var
- All prompt inputs sanitized (including dob, time, sign names)
- Model string in env var (defaults to Sonnet, not Opus)
- magic-search returns sanitized text (XSS fix)
- Graceful SIGTERM shutdown handler

### 4. Add new files
```
backend/middleware/auth.js
backend/middleware/rateLimiter.js
backend/routes/support.js
backend/routes/sitemap.js
backend/services/mailer.js
```

### 5. Test backend
```bash
npm run dev

# Health check
curl http://localhost:3001/api/health

# Sitemap
curl http://localhost:3001/sitemap.xml

# Support (unauthenticated — should work)
curl -X POST http://localhost:3001/api/support/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@test.com","subject":"Hello","message":"Test message here"}'

# AI endpoint without auth — should return 401
curl -X POST http://localhost:3001/api/kundli-analysis \
  -H "Content-Type: application/json" \
  -d '{"chartData":{"dob":"1990-01-01"}}'
```

---

## Phase 2 — Frontend Scaffold (2-3 hours)

### 1. Create the Vite project alongside your existing code
```bash
# From your project root (one level up from backend/)
npm create vite@latest frontend -- --template react
cd frontend
npm install
```

### 2. Install all dependencies
```bash
npm install \
  @clerk/clerk-react \
  mixpanel-browser \
  react-helmet-async \
  react-router-dom \
  vanilla-cookieconsent
```

### 3. Copy all files from this package's frontend/ into your frontend/
```
frontend/
  vite.config.js          ← includes /api proxy
  index.html
  .env.example            → copy to .env and fill in
  src/
    main.jsx
    App.jsx
    lib/analytics.js
    lib/api.js
    components/Layout.jsx
    components/ProtectedRoute.jsx
    components/SupportModal.jsx
    components/CookieBanner.jsx
    pages/Home.jsx
    pages/Privacy.jsx
    pages/Terms.jsx
    pages/AstroApp.jsx     ← stub: needs your chart logic
    styles/global.css
  public/
    robots.txt
```

### 4. Configure Clerk
In `frontend/.env`:
```
VITE_CLERK_PUBLISHABLE_KEY=pk_test_...
VITE_MIXPANEL_TOKEN=your_token
```

In Clerk dashboard:
- Add `http://localhost:5173` to Allowed Origins
- Enable Google as a Social provider (one toggle)
- Set redirect URLs: sign-in → `/app`, sign-up → `/app`

### 5. Run both servers
```bash
# Terminal 1
cd backend && npm run dev

# Terminal 2
cd frontend && npm run dev
```

Open http://localhost:5173 — you should see the landing page.
Click "Get Started" — Clerk's hosted sign-up modal appears.

---

## Phase 3 — Migrate Your App Logic (2-4 hours)

This is the largest step: moving your 4692-line index.html into React.

### Strategy: extract, don't rewrite
1. **Extract your VSOP87 calculation functions** into `frontend/src/lib/astro/calculator.js`
   These are pure functions (no DOM) — they move verbatim.

2. **Extract your template rendering** (chart wheel, dosha badges, etc.)
   into React components inside `frontend/src/components/chart/`

3. **Replace `AstroApp.jsx`** stub with your real form and chart display.
   The `useApi()` hook replaces your existing `fetch()` calls — just add it.

4. **Mixpanel events** — add `track(Events.KUNDLI_GENERATED, {...})` at the
   right moments. The event catalogue is in `src/lib/analytics.js`.

### What NOT to move to React yet
Your sections.js, personality.js, engine.js, and template-routes.js are already
well-structured server-side modules. Leave them on the backend.

---

## Phase 4 — Google Search Console Setup (20 minutes)

1. Go to https://search.google.com/search-console
2. Add property → URL prefix → enter your production domain
3. Verify ownership: choose "HTML tag" method
   Add the meta tag to your index.html:
   ```html
   <meta name="google-site-verification" content="YOUR_VERIFICATION_CODE" />
   ```
4. After deployment, submit `https://yourdomain.com/sitemap.xml`
5. Request indexing for your homepage

---

## Phase 5 — Production Deployment Checklist

Before going live:

### Backend (.env in prod)
```
NODE_ENV=production
ALLOWED_ORIGIN=https://yourdomain.com   # NO trailing slash
CLERK_SECRET_KEY=sk_live_...
CLAUDE_MODEL=claude-sonnet-4-20250514   # keep Sonnet unless you need Opus
RESEND_API_KEY=re_live_...
APP_URL=https://yourdomain.com
```

### Clerk dashboard (production instance)
- Switch from "Development" to "Production" instance
- Add your real domain to Allowed Origins
- Update redirect URLs to production domain
- Enable Google OAuth with your real Google Cloud credentials

### Frontend (Vercel / Netlify)
```
VITE_CLERK_PUBLISHABLE_KEY=pk_live_...   # production key
VITE_MIXPANEL_TOKEN=your_prod_token
VITE_APP_URL=https://yourdomain.com
```

Configure rewrites so React Router works:
- Vercel: add `vercel.json` with `{"rewrites": [{"source": "/(.*)", "destination": "/"}]}`
- Netlify: add `public/_redirects` with `/* /index.html 200`

---

## Architecture Decisions Explained

### Why Clerk over DIY auth?
Building email verification + password reset + Google OAuth from scratch
= 3-5 days of work + ongoing security maintenance. Clerk's free tier
(10,000 MAU) covers you until significant scale. Their React components
(`<UserButton>`, `<SignIn>`) are drop-in and already styled well.

### Why Mixpanel over GA4?
GA4 is optimised for page views and e-commerce funnels. For an astrology
app, the interesting events are "which features do users actually use after
generating a chart?" — that's an event-centric question. Mixpanel's funnel
and retention analysis answers it out of the box. GA4 can do it but requires
more configuration.

### Why Resend over Nodemailer + SMTP?
Nodemailer requires you to operate an SMTP connection (or use Gmail's API
which has strict limits). Resend is a managed API — 3,000 emails/month free,
excellent deliverability, and a 3-line integration. For a support form sending
< 100 emails/day, it's the lowest-friction option.

### Why Vite + React over Next.js?
Next.js adds SSR/SSG complexity you don't need yet. Your app is fundamentally
a single-page application — users generate charts, see results. Vite + React
gives you fast HMR in dev and a clean static build for Vercel/Netlify.
When/if you need server-side rendering for SEO on chart pages, migrating to
Next.js becomes a 1-day project from this Vite base (the component logic stays
identical).
