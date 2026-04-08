// routes/sitemap.js
// ─────────────────────────────────────────────────
// GET /sitemap.xml — Dynamic sitemap for Google Search Console.
//
// Static pages are hardcoded. In a future version with user profiles,
// you can append dynamic URLs (e.g. /chart/:slug) from your DB here.
// ─────────────────────────────────────────────────

import { Router } from 'express';

const router = Router();

const APP_URL = process.env.APP_URL || 'https://http://astromaya.me/';

// Static pages to include
const STATIC_PAGES = [
  { path: '/',        priority: '1.0', changefreq: 'weekly'  },
  { path: '/app',     priority: '0.9', changefreq: 'monthly' },
  { path: '/privacy', priority: '0.3', changefreq: 'yearly'  },
  { path: '/terms',   priority: '0.3', changefreq: 'yearly'  },
  { path: '/help',    priority: '0.6', changefreq: 'monthly' },
];

router.get('/sitemap.xml', (req, res) => {
  const today = new Date().toISOString().split('T')[0];

  const urlEntries = STATIC_PAGES.map(({ path, priority, changefreq }) => `
  <url>
    <loc>${APP_URL}${path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`).join('');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>`;

  res.set('Content-Type', 'application/xml');
  res.set('Cache-Control', 'public, max-age=86400'); // cache 24h
  res.send(xml);
});

// robots.txt (also served from backend for convenience during dev)
// In production, serve this as a static file from your CDN/frontend host.
router.get('/robots.txt', (req, res) => {
  res.type('text/plain');
  res.send(`User-agent: *
Allow: /
Disallow: /api/

Sitemap: ${APP_URL}/sitemap.xml
`);
});

export default router;
