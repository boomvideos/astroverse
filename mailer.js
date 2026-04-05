// services/mailer.js
// ─────────────────────────────────────────────────
// Thin wrapper around Resend for transactional email.
// Resend: resend.com — free tier: 3,000 emails/month, 100/day.
//
// To switch to SendGrid: replace Resend() with @sendgrid/mail,
// the interface is the same — just change sendEmail() internals.
// ─────────────────────────────────────────────────

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const FROM = process.env.SUPPORT_EMAIL_FROM || 'noreply@astroverse.app';
const TO   = process.env.SUPPORT_EMAIL_TO   || 'support@astroverse.app';

// ── Generic send helper ───────────────────────────
async function sendEmail({ to, subject, html, replyTo }) {
  const { data, error } = await resend.emails.send({
    from: FROM,
    to,
    subject,
    html,
    ...(replyTo ? { reply_to: replyTo } : {}),
  });

  if (error) {
    console.error('[mailer] Resend error:', error);
    throw new Error('Failed to send email');
  }
  return data;
}

// ── Support ticket email ──────────────────────────
// Sends a formatted email to your support inbox.
export async function sendSupportEmail({ name, email, subject, message, type, userId }) {
  const typeLabel = type === 'bug' ? '🐛 Bug Report' : '💬 Support Request';

  const html = `
    <div style="font-family:sans-serif;max-width:600px;margin:0 auto">
      <div style="background:#1a0a2e;padding:24px;border-radius:8px 8px 0 0">
        <h2 style="color:#c9a84c;margin:0">${typeLabel} — AstroVerse AI</h2>
      </div>
      <div style="background:#f9f9f9;padding:24px;border:1px solid #eee;border-top:none">
        <table style="width:100%;border-collapse:collapse">
          <tr>
            <td style="padding:8px 0;color:#666;width:120px">From</td>
            <td style="padding:8px 0;font-weight:600">${escHtml(name)} &lt;${escHtml(email)}&gt;</td>
          </tr>
          <tr>
            <td style="padding:8px 0;color:#666">User ID</td>
            <td style="padding:8px 0;font-family:monospace;font-size:13px">${userId || 'Anonymous'}</td>
          </tr>
          <tr>
            <td style="padding:8px 0;color:#666">Subject</td>
            <td style="padding:8px 0;font-weight:600">${escHtml(subject)}</td>
          </tr>
        </table>
        <hr style="border:none;border-top:1px solid #eee;margin:16px 0">
        <h3 style="margin:0 0 12px;color:#333">Message</h3>
        <div style="background:#fff;padding:16px;border-radius:6px;border:1px solid #eee;white-space:pre-wrap;font-size:15px;line-height:1.6">${escHtml(message)}</div>
      </div>
    </div>
  `;

  return sendEmail({
    to: TO,
    subject: `[AstroVerse] ${typeLabel}: ${subject}`,
    html,
    replyTo: email,
  });
}

// ── Auto-reply to user ────────────────────────────
export async function sendSupportAutoReply({ name, email, type }) {
  const isBug = type === 'bug';
  const html = `
    <div style="font-family:sans-serif;max-width:600px;margin:0 auto">
      <div style="background:#1a0a2e;padding:24px;border-radius:8px 8px 0 0">
        <h2 style="color:#c9a84c;margin:0">We got your message ✨</h2>
      </div>
      <div style="padding:24px;border:1px solid #eee;border-top:none">
        <p>Hi ${escHtml(name)},</p>
        <p>Thanks for reaching out! We've received your ${isBug ? 'bug report' : 'support request'} and will get back to you within <strong>24-48 hours</strong>.</p>
        ${isBug ? '<p>Bug reports help us make AstroVerse better for everyone — thank you for taking the time.</p>' : ''}
        <p>In the meantime, you can check our <a href="${process.env.APP_URL}/help" style="color:#c9a84c">Help Center</a> for quick answers.</p>
        <p style="color:#888;font-size:13px;margin-top:32px">— The AstroVerse AI Team</p>
      </div>
    </div>
  `;

  return sendEmail({ to: email, subject: 'We received your message — AstroVerse AI', html });
}

// ── Safe HTML escaping ────────────────────────────
function escHtml(str) {
  return String(str ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
