// middleware/rateLimiter.js
// ─────────────────────────────────────────────────
// IP-based rate limiting for public / unauthenticated endpoints.
//
// NOTE: userLimiter and strictUserLimiter were designed for Clerk-authenticated
// AI endpoints that have since been removed from the codebase. They are kept
// here only for reference and are NOT applied to any active route.
// ─────────────────────────────────────────────────

import rateLimit from 'express-rate-limit';

// ── IP-based limiter (applied to all template routes) ─────────
// Requires app.set('trust proxy', 1) in server.js so that req.ip
// reflects the real client address behind Render / Heroku / Nginx.
export const ipLimiter = rateLimit({
  windowMs: 60 * 1000,       // 1 minute
  max: 20,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: 'Too many requests. Please wait a moment.' },
  // Default keyGenerator uses req.ip (correct behind proxy when trust proxy=1)
});

// ── DEAD CODE — not applied to any active route ────────────────
// These were used by Clerk-authenticated AI endpoints that have been removed.
// Left here for historical reference only.

export const userLimiter = rateLimit({
  windowMs: 60 * 1000,
  max: 30,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: 'You\'re moving fast! Please wait a moment.' },
  keyGenerator: (req) => req.userId || req.ip,
  skip: (req) => !req.userId,
});

export const strictUserLimiter = rateLimit({
  windowMs: 60 * 1000,
  max: 5,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: 'Magic Search is rate-limited. Please wait 60 seconds.' },
  keyGenerator: (req) => req.userId || req.ip,
  skip: (req) => !req.userId,
});
