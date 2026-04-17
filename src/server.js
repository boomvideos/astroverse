// ═══════════════════════════════════════════════════════════════
// AstroVerse — Backend Server  v3.2 (Charts API + Clerk Auth)
// ═══════════════════════════════════════════════════════════════

import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import 'dotenv/config';

// ── Database ─────────────────────────────────────────────────
import connectDB from './src/config/db.js';

// ── Auth ─────────────────────────────────────────────────────
import { clerkHandler } from './auth.js';

// ── Routes ───────────────────────────────────────────────────
import sitemapRouter  from './src/routes/sitemap.js';
import templateRouter from './src/template-routes.js';
import chartsRouter   from './src/routes/charts.js';

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
  methods: ['GET', 'POST', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: false,
}));

// Trust the first proxy hop (Render / Heroku / Nginx) so req.ip reflects the
// real client IP rather than the load-balancer address — required for accurate
// rate-limiting via express-rate-limit.
app.set('trust proxy', 1);
app.use(express.json({ limit: '10kb' }));

// ── Clerk middleware (global — silently decodes JWT when present) ─
// Only active when CLERK_SECRET_KEY is set in environment.
if (process.env.CLERK_SECRET_KEY) {
  app.use(clerkHandler);
} else {
  console.warn('⚠️  CLERK_SECRET_KEY not set — auth routes will return 401');
}

// ── Routes ────────────────────────────────────────────────────
app.use('/', sitemapRouter);
app.use('/api/template', templateRouter);
app.use('/api/charts', chartsRouter);

app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    service: 'AstroVerse Backend v3.2',
    mode: 'template + charts',
    timestamp: new Date().toISOString(),
  });
});

// ── Graceful shutdown ─────────────────────────────────────────
// Initialise DB connection (non-fatal if MONGODB_URI is not set)
connectDB();

const server = app.listen(PORT, () => {
  console.log(`\n✅  AstroVerse Backend running on port ${PORT}`);
  console.log(`    Mode    : Template + Charts API`);
  console.log(`    Origin  : ${allowedOrigins.join(', ')}`);
  console.log(`    Health  : http://localhost:${PORT}/api/health\n`);
});

process.on('SIGTERM', () => {
  server.close(() => { console.log('Server closed.'); process.exit(0); });
  setTimeout(() => process.exit(1), 30_000);
});
