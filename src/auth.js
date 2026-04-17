// middleware/auth.js
// ─────────────────────────────────────────────────
// Clerk JWT verification for Express.
// Usage:
//   import { requireAuth, optionalAuth } from './middleware/auth.js';
//
//   app.post('/api/kundli-analysis', requireAuth, handler);   // must be logged in
//   app.post('/api/template/personality', optionalAuth, handler); // works anon too
//
// After middleware runs:
//   req.auth.userId  → Clerk user ID (string) — use for per-user rate limiting
//   req.auth.user    → full user object (only if you call clerkClient.users.getUser)
// ─────────────────────────────────────────────────

import { clerkMiddleware, getAuth } from '@clerk/express';

// Global Clerk middleware — must be registered ONCE on the app before any routes.
// It silently decodes the JWT from the Authorization header if present.
// Does NOT reject unauthenticated requests on its own.
export const clerkHandler = clerkMiddleware();

// Guard: rejects if no valid session token is present.
// Returns 401 JSON (never HTML) — safe to call from fetch().
export function requireAuth(req, res, next) {
  const auth = getAuth(req);
  if (!auth?.userId) {
    return res.status(401).json({
      error: 'Authentication required. Please sign in.',
      code: 'UNAUTHENTICATED',
    });
  }
  // Attach to req for convenience in route handlers
  req.userId = auth.userId;
  next();
}

// Optional: attaches userId if present, continues regardless.
// Use for endpoints that return richer results when logged in.
export function optionalAuth(req, res, next) {
  const auth = getAuth(req);
  req.userId = auth?.userId || null;
  next();
}
