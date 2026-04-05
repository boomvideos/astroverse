// routes/support.js
// ─────────────────────────────────────────────────
// POST /api/support/contact  — Contact form
// POST /api/support/bug      — Bug report
//
// Both validate with Zod, then send via Resend.
// Auth is optional — both anonymous and logged-in users can submit.
// ─────────────────────────────────────────────────

import { Router } from 'express';
import { z } from 'zod';
import { optionalAuth } from '../middleware/auth.js';
import { ipLimiter } from '../middleware/rateLimiter.js';
import { sendSupportEmail, sendSupportAutoReply } from '../services/mailer.js';

const router = Router();

// Zod schema — shared between contact and bug endpoints
const supportSchema = z.object({
  name:    z.string().min(1).max(100).trim(),
  email:   z.string().email().max(200).toLowerCase().trim(),
  subject: z.string().min(1).max(200).trim(),
  message: z.string().min(10).max(3000).trim(),
});

// ── Rate limit: max 3 support emails per IP per hour ─
const supportLimiter = ipLimiter; // reuse IP limiter; stricter in prod

// ── Helper: validate + send ───────────────────────
async function handleSupportRequest(req, res, type) {
  const parsed = supportSchema.safeParse(req.body);
  if (!parsed.success) {
    const first = parsed.error.errors[0];
    return res.status(400).json({ error: `${first.path[0]}: ${first.message}` });
  }

  const { name, email, subject, message } = parsed.data;
  const userId = req.userId || null;

  try {
    // Send to support inbox and auto-reply in parallel
    await Promise.all([
      sendSupportEmail({ name, email, subject, message, type, userId }),
      sendSupportAutoReply({ name, email, type }),
    ]);
    res.json({ success: true, message: 'Message sent! We\'ll reply within 24-48 hours.' });
  } catch (err) {
    console.error(`[/api/support/${type}]`, err.message);
    res.status(500).json({ error: 'Failed to send message. Please try again or email us directly.' });
  }
}

// POST /api/support/contact
router.post('/contact', supportLimiter, optionalAuth, (req, res) =>
  handleSupportRequest(req, res, 'contact')
);

// POST /api/support/bug
router.post('/bug', supportLimiter, optionalAuth, (req, res) =>
  handleSupportRequest(req, res, 'bug')
);

export default router;
