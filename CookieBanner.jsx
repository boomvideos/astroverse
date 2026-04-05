// frontend/src/components/CookieBanner.jsx
// ─────────────────────────────────────────────────
// GDPR-compliant cookie consent using vanilla-cookieconsent v3.
// When the user accepts analytics, Mixpanel is enabled.
// When they decline, analytics stays silent (respects their choice).
//
// The banner auto-shows on first visit and remembers consent
// in localStorage. Users can re-open preferences from the footer.
// ─────────────────────────────────────────────────

import { useEffect } from 'react';
import * as CookieConsent from 'vanilla-cookieconsent';
import 'vanilla-cookieconsent/dist/cookieconsent.css';
import mixpanel from 'mixpanel-browser';

const MIXPANEL_TOKEN = import.meta.env.VITE_MIXPANEL_TOKEN;

export default function CookieBanner() {
  useEffect(() => {
    CookieConsent.run({
      // ── Behaviour ───────────────────────────────
      revision: 1,                  // bump to re-ask on policy changes
      autoShow: true,
      manageScriptTags: true,       // blocks scripts with data-category attr

      // ── Where to store consent ───────────────────
      cookie: {
        name:     'av_cookie_consent',
        expiresAfterDays: 365,
        sameSite: 'Strict',
      },

      // ── Categories ──────────────────────────────
      categories: {
        necessary: {
          enabled: true,
          readOnly: true,           // always on, can't be toggled
        },
        analytics: {
          enabled: false,           // default OFF (GDPR-safe)
          autoClear: {
            cookies: [{ name: /^_ga/ }, { name: /^mp_/ }],
          },
        },
      },

      // ── Callbacks ───────────────────────────────
      onConsent: ({ cookie }) => {
        if (cookie.categories.includes('analytics') && MIXPANEL_TOKEN) {
          mixpanel.init(MIXPANEL_TOKEN, {
            debug: import.meta.env.DEV,
            persistence: 'localStorage',
            ignore_dnt: false,
          });
          mixpanel.track('Consent Granted', { analytics: true });
        }
      },

      onChange: ({ cookie, changedCategories }) => {
        if (changedCategories.includes('analytics')) {
          const accepted = cookie.categories.includes('analytics');
          if (!accepted) {
            // User revoked — clear Mixpanel cookies and stop tracking
            mixpanel.opt_out_tracking();
          } else if (MIXPANEL_TOKEN) {
            mixpanel.opt_in_tracking();
          }
        }
      },

      // ── UI Text ─────────────────────────────────
      guiOptions: {
        consentModal: {
          layout:   'box inline',
          position: 'bottom right',
          equalWeightButtons: false,
          flipButtons: false,
        },
        preferencesModal: {
          layout: 'box',
          equalWeightButtons: true,
          flipButtons: false,
        },
      },

      language: {
        default: 'en',
        translations: {
          en: {
            consentModal: {
              title:       '✨ We use cookies',
              description: 'We use essential cookies to run the app. With your permission, we also use analytics to understand how AstroVerse is used — no personal data is sold, ever.',
              acceptAllBtn:    'Accept all',
              acceptNecessaryBtn: 'Necessary only',
              showPreferencesBtn: 'Manage preferences',
              footer:      '<a href="/privacy">Privacy Policy</a> · <a href="/terms">Terms</a>',
            },
            preferencesModal: {
              title: 'Cookie Preferences',
              acceptAllBtn:      'Accept all',
              acceptNecessaryBtn:'Necessary only',
              savePreferencesBtn:'Save preferences',
              closeIconLabel:    'Close',
              serviceCounterLabel: 'Service|Services',
              sections: [
                {
                  title:       'Essential Cookies',
                  description: 'Required for authentication and core functionality. Cannot be disabled.',
                  linkedCategory: 'necessary',
                },
                {
                  title:       'Analytics Cookies',
                  description: 'Help us understand which features are used most. We use Mixpanel — data is anonymised and never sold.',
                  linkedCategory: 'analytics',
                  cookieTable: {
                    caption: 'Cookies used',
                    headers: { name: 'Cookie', domain: 'Domain', desc: 'Description' },
                    body: [
                      { name: 'mp_*', domain: 'mixpanel.com', desc: 'Mixpanel analytics session identifier' },
                    ],
                  },
                },
              ],
            },
          },
        },
      },
    });
  }, []);

  return null; // renders nothing — CookieConsent injects its own DOM
}

// ── Helper: expose "re-open preferences" to footer ──
// Call this from a "Cookie Settings" button in your footer.
export function showCookiePreferences() {
  CookieConsent.showPreferences();
}
