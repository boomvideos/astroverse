// ═══════════════════════════════════════════════════════════════
// AstroVerse — Backend Server  v3.1 (Template-Only, No Auth)
// Clerk and Anthropic AI removed — template routes only
// ═══════════════════════════════════════════════════════════════

import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import 'dotenv/config';

// ── Routes ───────────────────────────────────────────────────
import sitemapRouter  from './src/routes/sitemap.js';
import templateRouter from './template-routes.js';

// ── Validate critical env vars at startup ─────────────────────
const REQUIRED_ENV = ['ALLOWED_ORIGIN'];
const missing = REQUIRED_ENV.filter(k => !process.env[k]);
if (missing.length > 0) {
  console.error(`\n❌ Missing required env vars: ${missing.join(', ')}\n   Add them to .env\n`);
  process.exit(1);
}

const app  = express();
const PORT = process.env.PORT || 3001;

app.use(helmet());

const allowedOrigins = (process.env.ALLOWED_ORIGIN || '').split(',').map(s => s.trim());
app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin) || allowedOrigins.includes('*')) return callback(null, true);
    callback(new Error(`CORS: origin ${origin} not allowed`));
  },
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: false,
}));

// Trust the first proxy hop (Render / Heroku / Nginx) so req.ip reflects the
// real client IP rather than the load-balancer address — required for accurate
// rate-limiting via express-rate-limit.
app.set('trust proxy', 1);
app.use(express.json({ limit: '10kb' }));

// ── Routes ────────────────────────────────────────────────────
app.use('/', sitemapRouter);
app.use('/api/template', templateRouter);

app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    service: 'AstroVerse Backend v3.1',
    mode: 'template-only',
    timestamp: new Date().toISOString(),
  });
});

// ── Graceful shutdown ─────────────────────────────────────────
const server = app.listen(PORT, () => {
  console.log(`\n✅  AstroVerse Backend running on port ${PORT}`);
  console.log(`    Mode    : Template-only (no AI, no auth)`);
  console.log(`    Origin  : ${allowedOrigins.join(', ')}`);
  console.log(`    Health  : http://localhost:${PORT}/api/health\n`);
});

process.on('SIGTERM', () => {
  server.close(() => { console.log('Server closed.'); process.exit(0); });
  setTimeout(() => process.exit(1), 30_000);
});
