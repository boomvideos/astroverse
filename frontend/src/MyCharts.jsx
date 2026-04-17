// frontend/src/pages/MyCharts.jsx
// ─────────────────────────────────────────────────
// Profile / Saved Charts page.
// Shows all Kundli charts saved by the signed-in user.
// Fetches from GET /api/charts (Clerk-authenticated).
// ─────────────────────────────────────────────────

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useUser } from '@clerk/clerk-react';
import { useApi } from '../lib/api.js';

export default function MyCharts() {
  const { user } = useUser();
  const api = useApi();

  const [charts, setCharts]   = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError]     = useState('');

  useEffect(() => {
    let cancelled = false;
    async function fetchCharts() {
      setLoading(true);
      setError('');
      try {
        const data = await api.get('/api/charts');
        if (!cancelled) setCharts(data.charts || []);
      } catch (err) {
        if (!cancelled) setError(err.message || 'Failed to load charts.');
      } finally {
        if (!cancelled) setLoading(false);
      }
    }
    fetchCharts();
    return () => { cancelled = true; };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function handleDelete(chartId) {
    if (!window.confirm('Delete this chart? This cannot be undone.')) return;
    try {
      await api.delete(`/api/charts/${chartId}`);
      setCharts(prev => prev.filter(c => c._id !== chartId));
    } catch (err) {
      alert('Failed to delete chart: ' + err.message);
    }
  }

  return (
    <>
      <Helmet>
        <title>My Saved Charts — AstroVerse AI</title>
        <meta name="robots" content="noindex" />
      </Helmet>

      <div className="my-charts-page">
        <div className="my-charts-header">
          <h1>✦ My Saved Charts</h1>
          {user && (
            <p className="my-charts-subtitle">
              Signed in as <strong>{user.fullName || user.primaryEmailAddress?.emailAddress}</strong>
            </p>
          )}
          <Link to="/app" className="btn btn-primary">
            + Generate New Kundli
          </Link>
        </div>

        {loading && (
          <div className="spinner-container">
            <div className="spinner" aria-label="Loading charts…" />
            <p>Loading your charts…</p>
          </div>
        )}

        {error && (
          <div className="error-banner" role="alert">
            <strong>Error:</strong> {error}
          </div>
        )}

        {!loading && !error && charts.length === 0 && (
          <div className="empty-state">
            <div className="empty-icon">🪐</div>
            <h2>No saved charts yet</h2>
            <p>Generate your first Kundli and click "Save Chart" to see it here.</p>
            <Link to="/app" className="btn btn-primary">Generate Kundli →</Link>
          </div>
        )}

        {!loading && charts.length > 0 && (
          <div className="charts-grid">
            {charts.map(chart => (
              <ChartCard key={chart._id} chart={chart} onDelete={handleDelete} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}

function ChartCard({ chart, onDelete }) {
  const dob = chart.dob ? new Date(chart.dob).toLocaleDateString('en-IN', { year:'numeric', month:'long', day:'numeric' }) : '—';
  const saved = chart.createdAt ? new Date(chart.createdAt).toLocaleDateString('en-IN') : '—';

  return (
    <div className="chart-card">
      <div className="chart-card-header">
        <h3 className="chart-card-name">{chart.name}</h3>
        <button
          className="btn-icon btn-delete"
          onClick={() => onDelete(chart._id)}
          title="Delete chart"
          aria-label={`Delete chart for ${chart.name}`}
        >
          ✕
        </button>
      </div>

      <div className="chart-card-body">
        <div className="chart-card-row">
          <span className="card-label">Date of Birth</span>
          <span className="card-value">{dob}</span>
        </div>
        {chart.place && (
          <div className="chart-card-row">
            <span className="card-label">Place</span>
            <span className="card-value">{chart.place}</span>
          </div>
        )}
        {chart.sunSign && (
          <div className="chart-card-row">
            <span className="card-label">Sun Sign</span>
            <span className="card-value">{chart.sunSign}</span>
          </div>
        )}
        {chart.moonSign && (
          <div className="chart-card-row">
            <span className="card-label">Moon Sign</span>
            <span className="card-value">{chart.moonSign}</span>
          </div>
        )}
        {chart.ascendant && (
          <div className="chart-card-row">
            <span className="card-label">Ascendant (Lagna)</span>
            <span className="card-value">{chart.ascendant}</span>
          </div>
        )}
        {chart.nakshatra && (
          <div className="chart-card-row">
            <span className="card-label">Nakshatra</span>
            <span className="card-value">{chart.nakshatra}</span>
          </div>
        )}
        {chart.lifePath > 0 && (
          <div className="chart-card-row">
            <span className="card-label">Life Path</span>
            <span className="card-value">{chart.lifePath}</span>
          </div>
        )}
      </div>

      <div className="chart-card-footer">
        <span className="card-saved-date">Saved {saved}</span>
      </div>
    </div>
  );
}
