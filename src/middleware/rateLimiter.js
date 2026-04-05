// middleware/rateLimiter.js
// ─────────────────────────────────────────────────
// Two-tier rate limiting:
//   1. Global IP limiter  — protects against unauthenticated floods
//   2. Per-user limiter   — tighter, per Clerk userId for authenticated routes
//
// This eliminates the original bug where all authenticated users shared a
// single IP bucket (e.g. shared office NAT, mobile carrier NAT).
// ─────────────────────────────────────────────────

import rateLimit from 'express-rate-limit';

// ── Tier 1: IP-based (for public / unauthenticated endpoints) ─
export const ipLimiter = rateLimit({
  windowMs: 60 * 1000,       // 1 minute
  max: 20,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: 'Too many requests. Please wait a moment.' },
  // Default keyGenerator uses req.ip (correct behind proxy when trust proxy=1)
});

// ── Tier 2: User-ID based (for authenticated AI endpoints) ────
// Authenticated users get a higher baseline but are tracked individually.
export const userLimiter = rateLimit({
  windowMs: 60 * 1000,       // 1 minute
  max: 30,                   // slightly more generous per authenticated user
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: 'You\'re moving fast! Please wait a moment.' },

  // KEY CHANGE: key is Clerk userId, not IP.
  // Falls back to IP if somehow called without auth middleware.
  keyGenerator: (req) => req.userId || req.ip,

  // Skip rate-limiting for requests that already failed auth
  // (requireAuth will reject them with 401 before this runs anyway,
  // but this is an extra safety net to avoid counting failed auths).
  skip: (req) => !req.userId,
});

// ── Tier 3: Strict limiter for expensive endpoints (magic-search) ─
// magic-search can fire 15 Claude calls per request — needs tighter cap.
export const strictUserLimiter = rateLimit({
  windowMs: 60 * 1000,
  max: 5,                    // max 5 magic-search calls per user per minute
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: 'Magic Search is rate-limited. Please wait 60 seconds.' },
  keyGenerator: (req) => req.userId || req.ip,
  skip: (req) => !req.userId,
});
