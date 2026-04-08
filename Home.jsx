// frontend/src/pages/Home.jsx
// ─────────────────────────────────────────────────
// Landing page — fully public, SEO-optimised.
// React Helmet Async sets <head> meta per-page.
// ─────────────────────────────────────────────────

import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { SignedIn, SignedOut } from '@clerk/clerk-react';

const APP_URL = import.meta.env.VITE_APP_URL || 'http://astromaya.me/';

export default function Home() {
  return (
    <>
      {/* ── SEO: Dynamic <head> for this page ─── */}
      <Helmet>
        <title>AstroVerse AI — Free Vedic Kundli with AI Predictions</title>
        <meta
          name="description"
          content="Generate your free Vedic birth chart (Kundli) with AI-powered predictions. Accurate Lahiri Ayanamsa calculations. Career, love, health, and life path analysis — all free, no ads."
        />
        <meta name="keywords" content="vedic astrology, kundli, birth chart, jyotish, AI astrology, free kundli" />

        {/* Open Graph (Facebook, WhatsApp) */}
        <meta property="og:title"       content="AstroVerse AI — Free Vedic Kundli with AI Predictions" />
        <meta property="og:description" content="Your free AI-powered Vedic birth chart. No ads. No account required." />
        <meta property="og:type"        content="website" />
        <meta property="og:url"         content={APP_URL} />
        <meta property="og:image"       content={`${APP_URL}/og-image.png`} />

        {/* Twitter Card */}
        <meta name="twitter:card"        content="summary_large_image" />
        <meta name="twitter:title"       content="AstroVerse AI" />
        <meta name="twitter:description" content="Free AI-powered Vedic Kundli. Career, love, health — real chart data, no generic predictions." />
        <meta name="twitter:image"       content={`${APP_URL}/og-image.png`} />

        {/* Canonical URL */}
        <link rel="canonical" href={APP_URL} />

        {/* Structured Data — helps Google rich snippets */}
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebApplication',
          name: 'AstroVerse AI',
          url: APP_URL,
          description: 'Free Vedic astrology with AI-powered chart interpretation',
          applicationCategory: 'LifestyleApplication',
          operatingSystem: 'Web',
          offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
        })}</script>
      </Helmet>

      {/* ── Hero ───────────────────────────────── */}
      <section className="hero">
        <div className="hero-badge">✦ AI-Powered Vedic Astrology</div>
        <h1 className="hero-title">
          Know your cosmos.<br />
          <span className="hero-accent">For free. Forever.</span>
        </h1>
        <p className="hero-subtitle">
          Real Vedic calculations with Lahiri Ayanamsa. AI-powered predictions from Claude.
          20+ features. No ads. No account needed to start.
        </p>

        <div className="hero-cta">
          <SignedIn>
            <Link to="/app" className="btn btn-primary btn-lg">
              Open My Kundli →
            </Link>
          </SignedIn>
          <SignedOut>
            <Link to="/app" className="btn btn-primary btn-lg">
              Generate Free Kundli →
            </Link>
            <Link to="/sign-up" className="btn btn-outline btn-lg">
              Create Account
            </Link>
          </SignedOut>
        </div>
      </section>

      {/* ── Feature grid ───────────────────────── */}
      <section className="features">
        {FEATURES.map(f => (
          <div key={f.title} className="feature-card">
            <div className="feature-icon">{f.icon}</div>
            <h3>{f.title}</h3>
            <p>{f.desc}</p>
          </div>
        ))}
      </section>
    </>
  );
}

const FEATURES = [
  { icon: '🪐', title: 'Accurate Calculations',  desc: 'VSOP87 planetary positions with Lahiri Ayanamsa — the same standard used by professional Jyotish astrologers.' },
  { icon: '🤖', title: 'AI Interpretations',     desc: 'Claude AI reads your chart and delivers personalised insights — not generic horoscope copy.' },
  { icon: '💫', title: 'Dasha Predictions',       desc: 'Full Vimshottari Mahadasha timeline with planetary period analysis and life event forecasting.' },
  { icon: '❤️', title: 'Kundli Milan',             desc: 'Ashta Kuta compatibility with Guna score and AI relationship analysis for any two charts.' },
  { icon: '🔢', title: 'Numerology',              desc: 'Pythagorean and Chaldean systems — Life Path, Expression, Soul Urge, and Personality numbers.' },
  { icon: '🌙', title: 'Doshas & Yogas',          desc: 'Manglik, Kaal Sarp, Sade Sati, and 7 classical Pancha Mahapurusha yogas detected automatically.' },
];
