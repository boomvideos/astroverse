// frontend/src/pages/AstroApp.jsx
// ─────────────────────────────────────────────────
// Main application page — the Kundli generator.
// This is where your existing index.html logic lives,
// migrated to a React component.
//
// Key additions vs original:
//   - useApi() hook attaches JWT to every Claude call
//   - Analytics events on key user actions
//   - Helmet sets page-specific meta
// ─────────────────────────────────────────────────

import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useUser } from '@clerk/clerk-react';
import { useApi } from '../lib/api.js';
import { track, Events } from '../lib/analytics.js';

export default function AstroApp() {
  const { user } = useUser();
  const api = useApi();

  const [chartData, setChartData]   = useState(null);
  const [analysis, setAnalysis]     = useState(null);
  const [loading, setLoading]       = useState(false);
  const [error, setError]           = useState('');

  // ── Generate chart + AI analysis ─────────────────
  async function handleGenerateKundli(formValues) {
    setLoading(true);
    setError('');

    track(Events.KUNDLI_FORM_SUBMITTED, {
      hasTime:   !!formValues.time,
      lang:      formValues.lang,
    });

    try {
      // Step 1: Calculate chart client-side (your existing VSOP87 logic)
      // Import your calculation functions from a separate module:
      // const { calculatePlanets, calculateAscendant, ... } = await import('../lib/astro/calculator.js');
      // const chart = calculatePlanets(formValues);
      // setChartData(chart);

      // For now, assume chartData is built from formValues:
      const chart = buildChartFromForm(formValues); // stub — replace with your calc
      setChartData(chart);

      track(Events.AI_ANALYSIS_STARTED, { lang: formValues.lang });

      // Step 2: AI analysis — JWT auto-attached by useApi()
      const result = await api.post('/api/kundli-analysis', {
        chartData: chart,
        lang: formValues.lang,
      });

      setAnalysis(result);
      track(Events.AI_ANALYSIS_COMPLETED, {
        sunSign:   chart.sunSign,
        moonSign:  chart.moonSign,
        ascendant: chart.ascendant?.signName,
        lang:      formValues.lang,
      });

    } catch (err) {
      setError(err.message);
      track(Events.AI_ANALYSIS_ERROR, { errorCode: err.status, message: err.message });
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Helmet>
        <title>
          {chartData
            ? `${user?.firstName || 'Your'} Kundli — AstroVerse AI`
            : 'Generate Kundli — AstroVerse AI'}
        </title>
        <meta name="description" content="Generate and analyse your Vedic birth chart with AI-powered insights." />
        <meta name="robots" content="noindex" /> {/* Don't index personal chart pages */}
      </Helmet>

      <div className="app-container">
        {/* ── Birth data form ──────────────────── */}
        {!chartData && (
          <BirthDataForm onSubmit={handleGenerateKundli} loading={loading} />
        )}

        {/* ── Error state ──────────────────────── */}
        {error && (
          <div className="error-banner" role="alert">
            <strong>Something went wrong:</strong> {error}
            <button onClick={() => setError('')}>✕</button>
          </div>
        )}

        {/* ── Chart display ────────────────────── */}
        {chartData && (
          <ChartDisplay
            chartData={chartData}
            analysis={analysis}
            analysisLoading={loading}
            onReset={() => { setChartData(null); setAnalysis(null); }}
            api={api}
          />
        )}
      </div>
    </>
  );
}

// ── Stub: replace with your actual form component ─
// Migrate the form HTML from your index.html here.
function BirthDataForm({ onSubmit, loading }) {
  const [values, setValues] = useState({
    name: '', dob: '', time: '', place: '', gender: '', lang: 'en',
  });

  return (
    <form
      className="birth-form"
      onSubmit={(e) => { e.preventDefault(); onSubmit(values); }}
    >
      <h2>Generate Your Kundli</h2>
      {/* Move your existing form fields here */}
      <input
        type="text"
        placeholder="Full Name"
        value={values.name}
        onChange={e => setValues(v => ({ ...v, name: e.target.value }))}
        required
      />
      <input
        type="date"
        value={values.dob}
        onChange={e => setValues(v => ({ ...v, dob: e.target.value }))}
        required
      />
      <input
        type="time"
        value={values.time}
        onChange={e => setValues(v => ({ ...v, time: e.target.value }))}
      />
      <input
        type="text"
        placeholder="Place of Birth"
        value={values.place}
        onChange={e => setValues(v => ({ ...v, place: e.target.value }))}
        required
      />
      <button type="submit" className="btn btn-primary" disabled={loading}>
        {loading ? 'Calculating…' : '✦ Generate Kundli'}
      </button>
    </form>
  );
}

// ── Stub: replace with your actual chart display ──
// Migrate your existing tab panels from index.html here.
function ChartDisplay({ chartData, analysis, analysisLoading, onReset, api }) {
  return (
    <div className="chart-display">
      <button className="btn btn-outline" onClick={onReset}>← New Chart</button>
      <h2>{chartData.name}'s Kundli</h2>
      {analysisLoading && <div className="spinner" />}
      {analysis && (
        <div className="analysis-panels">
          {/* Map your existing tab content here */}
          <pre>{JSON.stringify(analysis, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

// ── Stub: build chart object from form values ─────
// Replace with your actual VSOP87 calculation import.
function buildChartFromForm(form) {
  return {
    name:   form.name,
    dob:    form.dob,
    time:   form.time,
    place:  form.place,
    gender: form.gender,
    // ... your calculated planets, ascendant, etc.
    planets:   [],
    sunSign:   '',
    moonSign:  '',
    ascendant: {},
    nakshatra: {},
    dashaData: {},
    doshas:    [],
    lp:        0,
  };
}
