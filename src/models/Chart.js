// src/models/Chart.js — Mongoose model for persisting user kundli data
import mongoose from 'mongoose';

const { Schema } = mongoose;

const ChartSchema = new Schema(
  {
    name:   { type: String, required: true, trim: true },
    dob:    { type: String, required: true },   // ISO date string
    time:   { type: String, default: '' },
    place:  { type: String, default: '' },
    gender: { type: String, enum: ['male', 'female', 'other'], default: 'other' },
    lang:   { type: String, enum: ['en', 'hi'], default: 'en' },

    // Calculated chart data
    sunSign:   { type: String },
    moonSign:  { type: String },
    ascendant: { type: String },
    nakshatra: { type: String },
    lifePath:  { type: Number }, // Pythagorean numerology life path number

    // Raw planet positions snapshot (stored as JSON)
    planets: { type: Schema.Types.Mixed },

    // Dasha data snapshot
    dashaData: { type: Schema.Types.Mixed },
  },
  {
    timestamps: true,   // adds createdAt / updatedAt
  }
);

export default mongoose.models.Chart || mongoose.model('Chart', ChartSchema);
