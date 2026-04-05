// frontend/src/pages/Privacy.jsx
import { Helmet } from 'react-helmet-async';

const APP_URL  = import.meta.env.VITE_APP_URL || 'https://astroverse.app';
const APP_NAME = import.meta.env.VITE_APP_NAME || 'AstroVerse AI';
const UPDATED  = '1 April 2025';

export default function Privacy() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy — {APP_NAME}</title>
        <meta name="description" content={`${APP_NAME} privacy policy. How we collect, use, and protect your data.`} />
        <link rel="canonical" href={`${APP_URL}/privacy`} />
        <meta name="robots" content="noindex" />
      </Helmet>

      <article className="legal-page">
        <header className="legal-header">
          <h1>Privacy Policy</h1>
          <p className="legal-meta">Last updated: {UPDATED}</p>
        </header>

        <section>
          <h2>1. Who we are</h2>
          <p>
            {APP_NAME} ("we", "us", "our") operates {APP_URL}. This policy explains
            what data we collect, how we use it, and your rights under applicable
            data protection law (GDPR, India's DPDP Act 2023, and CCPA where applicable).
          </p>
        </section>

        <section>
          <h2>2. Data we collect</h2>
          <h3>2a. Data you provide</h3>
          <ul>
            <li><strong>Account data:</strong> Email address and name when you sign up via Clerk (our auth provider).</li>
            <li><strong>Birth data:</strong> Name, date/time/place of birth, and gender entered into the Kundli form.</li>
            <li><strong>Support messages:</strong> Name, email, and message content when you contact us.</li>
          </ul>

          <h3>2b. Data collected automatically</h3>
          <ul>
            <li><strong>Usage analytics:</strong> Page views and feature interactions (Mixpanel), only with your consent.</li>
            <li><strong>Authentication tokens:</strong> Session JWTs managed by Clerk, stored in browser memory.</li>
            <li><strong>Server logs:</strong> IP address, request path, and timestamp for security and rate-limiting. Retained 30 days.</li>
          </ul>
        </section>

        <section>
          <h2>3. How we use your data</h2>
          <ul>
            <li>To generate and display your Vedic birth chart.</li>
            <li>To authenticate your account and secure your session.</li>
            <li>To send AI-generated astrological analysis through Anthropic's Claude API.</li>
            <li>To respond to support requests.</li>
            <li>To understand feature usage and improve the product (analytics, consent required).</li>
          </ul>
          <p>
            <strong>We never sell your data.</strong> Birth data entered into the app
            is transmitted to our backend solely to generate your chart and is not
            stored permanently unless you explicitly save a chart (feature coming soon).
          </p>
        </section>

        <section>
          <h2>4. Third-party services</h2>
          <table className="legal-table">
            <thead>
              <tr><th>Service</th><th>Purpose</th><th>Privacy Policy</th></tr>
            </thead>
            <tbody>
              <tr><td>Clerk</td><td>Authentication</td><td><a href="https://clerk.com/privacy" target="_blank" rel="noopener">clerk.com/privacy</a></td></tr>
              <tr><td>Anthropic</td><td>AI interpretations</td><td><a href="https://www.anthropic.com/privacy" target="_blank" rel="noopener">anthropic.com/privacy</a></td></tr>
              <tr><td>Mixpanel</td><td>Analytics (opt-in)</td><td><a href="https://mixpanel.com/legal/privacy-policy" target="_blank" rel="noopener">mixpanel.com</a></td></tr>
              <tr><td>Resend</td><td>Transactional email</td><td><a href="https://resend.com/privacy" target="_blank" rel="noopener">resend.com/privacy</a></td></tr>
            </tbody>
          </table>
        </section>

        <section>
          <h2>5. Your rights</h2>
          <p>Depending on your location, you may have the right to:</p>
          <ul>
            <li>Access the personal data we hold about you.</li>
            <li>Request correction or deletion of your data.</li>
            <li>Withdraw consent for analytics at any time via the cookie preference centre.</li>
            <li>Lodge a complaint with your local data protection authority.</li>
          </ul>
          <p>To exercise these rights, email us at <a href="mailto:privacy@astroverse.app">privacy@astroverse.app</a>.</p>
        </section>

        <section>
          <h2>6. Data retention</h2>
          <p>
            Account data is retained until you delete your account. Server logs are
            purged after 30 days. Support emails are retained for 2 years for legal compliance.
          </p>
        </section>

        <section>
          <h2>7. Changes to this policy</h2>
          <p>
            We may update this policy periodically. We will notify registered users
            by email of material changes. Continued use of the service after
            notification constitutes acceptance.
          </p>
        </section>

        <section>
          <h2>8. Contact</h2>
          <p>
            Questions about this policy? Email <a href="mailto:privacy@astroverse.app">privacy@astroverse.app</a>.
          </p>
        </section>
      </article>
    </>
  );
}
