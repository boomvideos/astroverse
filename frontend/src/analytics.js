// frontend/src/lib/analytics.js
// ─────────────────────────────────────────────────
// Mixpanel wrapper with typed event names.
//
// Why Mixpanel over GA4 for this app:
//   - GA4 is page-view-first; Mixpanel is event-first.
//   - "User generated kundli for Scorpio ascendant" is richer
//     than a pageview — Mixpanel's funnel + retention analysis
//     handles this better out of the box.
//   - Free tier: 20M events/month.
//
// Usage:
//   import { track, identify, page } from '@/lib/analytics';
//   track('kundli_generated', { ascendant: 'Scorpio', lang: 'en' });
// ─────────────────────────────────────────────────

import mixpanel from 'mixpanel-browser';

const TOKEN   = import.meta.env.VITE_MIXPANEL_TOKEN;
const IS_DEV  = import.meta.env.DEV;
const ENABLED = !!TOKEN;

if (ENABLED) {
  mixpanel.init(TOKEN, {
    debug: IS_DEV,
    track_pageview: false,   // We'll call page() manually per route for better control
    persistence: 'localStorage',
    ignore_dnt: false,       // Respect Do Not Track
  });
}

// ── Core helpers ─────────────────────────────────

/** Track an event. Call after user consent is granted. */
export function track(eventName, properties = {}) {
  if (!ENABLED) return;
  if (IS_DEV) console.log(`[Analytics] track: ${eventName}`, properties);
  mixpanel.track(eventName, {
    ...properties,
    env: IS_DEV ? 'development' : 'production',
  });
}

/** Identify a logged-in user — call after Clerk sign-in. */
export function identify(userId, userProperties = {}) {
  if (!ENABLED) return;
  mixpanel.identify(userId);
  if (Object.keys(userProperties).length > 0) {
    mixpanel.people.set(userProperties);
  }
}

/** Track a page view — call in router onChange. */
export function page(pageName, properties = {}) {
  track('Page Viewed', { page: pageName, ...properties });
}

/** Reset tracking on sign-out. */
export function reset() {
  if (!ENABLED) return;
  mixpanel.reset();
}

// ── Typed event catalogue ────────────────────────
// Centralising event names prevents typos and makes
// refactoring (renaming events) a single-file change.

export const Events = {
  // Auth
  SIGNED_UP:              'Signed Up',
  SIGNED_IN:              'Signed In',
  SIGNED_OUT:             'Signed Out',

  // Core feature
  KUNDLI_FORM_SUBMITTED:  'Kundli Form Submitted',
  KUNDLI_GENERATED:       'Kundli Generated',
  AI_ANALYSIS_STARTED:    'AI Analysis Started',
  AI_ANALYSIS_COMPLETED:  'AI Analysis Completed',
  AI_ANALYSIS_ERROR:      'AI Analysis Error',

  // Feature engagement
  TAB_SWITCHED:           'Tab Switched',
  HOT_QUESTION_ASKED:     'Hot Question Asked',
  MAGIC_SEARCH_USED:      'Magic Search Used',
  COMPATIBILITY_CHECKED:  'Compatibility Checked',
  NUMEROLOGY_CALCULATED:  'Numerology Calculated',

  // Support
  SUPPORT_MODAL_OPENED:   'Support Modal Opened',
  SUPPORT_FORM_SUBMITTED: 'Support Form Submitted',
  BUG_REPORTED:           'Bug Reported',

  // SEO / acquisition
  SHARE_CLICKED:          'Share Clicked',
  LANGUAGE_SWITCHED:      'Language Switched',
};
