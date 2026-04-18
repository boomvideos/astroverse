// src/routes/charts.js
// ─────────────────────────────────────────────────
// Chart persistence endpoints.
//
//   POST /api/charts        — save a generated chart (requires auth)
//   GET  /api/charts        — retrieve all charts for the signed-in user
//   DELETE /api/charts/:id  — delete a chart owned by the signed-in user
//
// Authentication is enforced via Clerk's requireAuth middleware.
// The Clerk user ID (req.userId) is used to scope charts per user.
// Rate limiting is applied to all endpoints to prevent abuse.
// ─────────────────────────────────────────────────

import { Router } from 'express';
import rateLimit from 'express-rate-limit';
import Chart from '../models/Chart.js';
import { requireAuth } from '../auth.js';

const router = Router();

// ── Rate limits ────────────────────────────────────
// Chart writes: max 30 saves per 15 minutes per IP
const chartWriteLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 30,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: 'Too many requests. Please wait before saving another chart.' },
});

// Chart reads: max 60 requests per 15 minutes per IP
const chartReadLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 60,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: 'Too many requests. Please slow down.' },
});

// ── POST /api/charts — save a chart ──────────────
router.post('/', requireAuth, chartWriteLimiter, async (req, res) => {
  try {
    const {
      name, dob, time, place, gender, lang,
      sunSign, moonSign, ascendant, nakshatra,
      planets, dashaData, lp,
    } = req.body;

    if (!name || !dob) {
      return res.status(400).json({ error: 'name and dob are required.' });
    }

    // Normalise string fields that might be objects
    const sunSignStr  = typeof sunSign  === 'object' ? (sunSign?.name  || '') : (sunSign  || '');
    const moonSignStr = typeof moonSign === 'object' ? (moonSign?.name || '') : (moonSign || '');
    const ascStr      = typeof ascendant === 'object' ? (ascendant?.sign?.name || '') : (ascendant || '');
    const nakStr      = typeof nakshatra === 'object' ? (nakshatra?.name || '') : (nakshatra || '');

    const chart = await Chart.create({
      userId:    req.userId,        // Clerk user ID
      name,
      dob,
      time:      time      || '',
      place:     place     || '',
      gender:    gender    || 'other',
      lang:      lang      || 'en',
      sunSign:   sunSignStr,
      moonSign:  moonSignStr,
      ascendant: ascStr,
      nakshatra: nakStr,
      lifePath:  lp        || 0,
      planets:   planets   || [],
      dashaData: dashaData || {},
    });

    res.status(201).json({ message: 'Chart saved successfully.', chartId: chart._id });
  } catch (err) {
    console.error('POST /api/charts error:', err.message);
    res.status(500).json({ error: 'Failed to save chart.' });
  }
});

// ── GET /api/charts — retrieve charts for the user ─
router.get('/', requireAuth, chartReadLimiter, async (req, res) => {
  try {
    const charts = await Chart
      .find({ userId: req.userId })
      .sort({ createdAt: -1 })
      .select('-__v')
      .lean();

    res.json({ charts });
  } catch (err) {
    console.error('GET /api/charts error:', err.message);
    res.status(500).json({ error: 'Failed to retrieve charts.' });
  }
});

// ── DELETE /api/charts/:id — delete a single chart ─
router.delete('/:id', requireAuth, chartWriteLimiter, async (req, res) => {
  try {
    const chart = await Chart.findOneAndDelete({
      _id:    req.params.id,
      userId: req.userId,         // ensure the user owns this chart
    });

    if (!chart) {
      return res.status(404).json({ error: 'Chart not found.' });
    }

    res.json({ message: 'Chart deleted.' });
  } catch (err) {
    console.error('DELETE /api/charts/:id error:', err.message);
    res.status(500).json({ error: 'Failed to delete chart.' });
  }
});

export default router;
