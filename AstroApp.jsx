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
import { buildChartFromForm } from '../lib/astro/calculator.js';

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
      // Step 1: Calculate chart using real VSOP87 + Lahiri Ayanamsa
      const chart = buildChartFromForm(formValues);
      setChartData(chart);
      setLoading(false); // chart is ready — show it immediately

      track(Events.AI_ANALYSIS_STARTED, { lang: formValues.lang });

      // Step 2: AI analysis — optional, JWT auto-attached by useApi()
      // We don't re-set loading here so the chart stays visible during analysis
      try {
        const result = await api.post('/api/kundli-analysis', {
          chartData: chart,
          lang: formValues.lang,
        });
        setAnalysis(result);
        track(Events.AI_ANALYSIS_COMPLETED, {
          sunSign:   chart.sunSign?.name || chart.sunSign,
          moonSign:  chart.moonSign,
          ascendant: chart.ascendant?.sign?.name,
          lang:      formValues.lang,
        });
      } catch (aiErr) {
        // AI analysis is optional — chart still displays without it
        console.warn('AI analysis unavailable:', aiErr.message);
      }

    } catch (err) {
      setError(err.message);
      track(Events.AI_ANALYSIS_ERROR, { errorCode: err.status, message: err.message });
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

// ── Chart display with save, download, share actions ──────────
function ChartDisplay({ chartData, analysis, analysisLoading, onReset, api }) {
  const [saveStatus, setSaveStatus] = useState('');

  async function handleSave() {
    setSaveStatus('saving');
    try {
      await api.post('/api/charts', chartData);
      setSaveStatus('saved');
    } catch (err) {
      setSaveStatus('error');
      console.error('Save failed:', err.message);
    }
  }

  const ascName  = chartData.ascendant?.sign?.name || '—';
  const sunName  = chartData.sunSign?.name  || chartData.sunSign  || '—';
  const moonName = chartData.moonSign?.name || chartData.moonSign || '—';
  const nakName  = chartData.nakshatra?.name || '—';
  const lp       = chartData.lp || '—';
  const mahadasha = chartData.dashaData?.dashas?.[chartData.dashaData?.currentDashaIdx]?.planet || '—';

  return (
    <div className="chart-display">
      {/* Action bar */}
      <div className="chart-actions">
        <button className="btn btn-outline" onClick={onReset}>← New Chart</button>
        <button
          className="btn btn-primary"
          onClick={handleSave}
          disabled={saveStatus === 'saving'}
        >
          {saveStatus === 'saving' ? 'Saving…'
           : saveStatus === 'saved' ? '✓ Saved'
           : saveStatus === 'error' ? '✗ Error — Retry'
           : '💾 Save Chart'}
        </button>
        <button className="btn btn-outline" onClick={() => window.print()}>🖨️ Print</button>
        <button
          className="btn btn-outline"
          onClick={() => {
            const shareText = `I generated my Kundli on AstroVerse AI! Sun: ${sunName}, Lagna: ${ascName}, Nakshatra: ${nakName}. Try it free!`;
            const wa = `https://wa.me/?text=${encodeURIComponent(shareText)}`;
            window.open(wa, '_blank');
          }}
        >
          💬 Share
        </button>
      </div>

      {/* Chart header */}
      <div className="chart-header">
        <h2>{chartData.name}'s Kundli</h2>
        <p className="chart-subtitle">
          {sunName} Sun · {ascName} Ascendant · {nakName} Nakshatra
        </p>
      </div>

      {/* Key placements grid */}
      <div className="chart-info-grid">
        <div className="chart-info-cell"><span className="cell-label">Sun Sign</span><span className="cell-value">{sunName}</span></div>
        <div className="chart-info-cell"><span className="cell-label">Moon Sign</span><span className="cell-value">{moonName}</span></div>
        <div className="chart-info-cell"><span className="cell-label">Ascendant (Lagna)</span><span className="cell-value">{ascName}</span></div>
        <div className="chart-info-cell"><span className="cell-label">Nakshatra</span><span className="cell-value">{nakName}</span></div>
        <div className="chart-info-cell"><span className="cell-label">Life Path</span><span className="cell-value">{lp}</span></div>
        <div className="chart-info-cell"><span className="cell-label">Mahadasha</span><span className="cell-value">{mahadasha}</span></div>
      </div>

      {/* Planet table */}
      {chartData.planets?.length > 0 && (
        <div className="planet-section">
          <h3>Planetary Positions (Vedic Sidereal · Lahiri Ayanamsa)</h3>
          <table className="planet-table">
            <thead>
              <tr>
                <th>Planet</th>
                <th>Sign</th>
                <th>Degree</th>
                <th>Nakshatra</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {chartData.planets.map(p => (
                <tr key={p.name}>
                  <td>{p.ico} {p.name}</td>
                  <td>{p.sign?.icon} {p.sign?.name}</td>
                  <td>{p.degree}° {p.minutes}'</td>
                  <td>{p.nakshatra?.name}</td>
                  <td>{p.retrograde ? <span className="retrograde">℞ Retro</span> : '—'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Doshas */}
      {chartData.doshas?.length > 0 && (
        <div className="dosha-section">
          <h3>Doshas</h3>
          {chartData.doshas.map(d => (
            <div key={d.name} className={`dosha-row ${d.present ? 'dosha-present' : ''}`}>
              <strong>{d.name}</strong>
              <span className={d.present ? 'dosha-yes' : 'dosha-no'}>{d.present ? 'Present' : 'Not Present'}</span>
              <p>{d.desc}</p>
            </div>
          ))}
        </div>
      )}

      {/* AI analysis */}
      {analysisLoading && <div className="spinner" aria-label="Loading analysis…" />}
      {analysis && (
        <div className="analysis-panels">
          <pre>{JSON.stringify(analysis, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}
