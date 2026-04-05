// frontend/src/lib/api.js
// ─────────────────────────────────────────────────
// Typed fetch wrapper that:
//   1. Prepends the API base URL
//   2. Attaches Clerk JWT to every request automatically
//   3. Throws on non-2xx with a structured error object
//
// Usage:
//   import { api } from '@/lib/api';
//   const result = await api.post('/api/kundli-analysis', { chartData, lang });
// ─────────────────────────────────────────────────

import { useAuth } from '@clerk/clerk-react';

const BASE = import.meta.env.VITE_API_BASE || '';

// ── Core fetch wrapper (used internally) ─────────
async function apiFetch(path, options = {}, getToken) {
  const token = getToken ? await getToken() : null;

  const headers = {
    'Content-Type': 'application/json',
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
    ...options.headers,
  };

  const res = await fetch(`${BASE}${path}`, {
    ...options,
    headers,
  });

  if (!res.ok) {
    let message = `Request failed: ${res.status}`;
    try {
      const body = await res.json();
      message = body.error || message;
    } catch {}
    const err = new Error(message);
    err.status = res.status;
    throw err;
  }

  return res.json();
}

// ── React hook — returns an api object with getToken baked in ─
// Use inside React components/hooks.
export function useApi() {
  const { getToken } = useAuth();
  const gt = () => getToken();

  return {
    get:    (path, opts = {})       => apiFetch(path, { method: 'GET', ...opts }, gt),
    post:   (path, body, opts = {}) => apiFetch(path, { method: 'POST', body: JSON.stringify(body), ...opts }, gt),
    delete: (path, opts = {})       => apiFetch(path, { method: 'DELETE', ...opts }, gt),
  };
}

// ── Standalone (no auth) — for public endpoints ───
// Use in non-React contexts or public-only routes.
export const publicApi = {
  get:  (path, opts = {})       => apiFetch(path, { method: 'GET', ...opts }, null),
  post: (path, body, opts = {}) => apiFetch(path, { method: 'POST', body: JSON.stringify(body), ...opts }, null),
};
