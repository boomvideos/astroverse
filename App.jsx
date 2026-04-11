// frontend/src/App.jsx
import { lazy, Suspense, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useUser } from '@clerk/clerk-react';
import Layout from './components/Layout.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx';
import CookieBanner from './components/CookieBanner.jsx';
import { page, identify, Events } from './lib/analytics.js';

// ── Lazy-loaded pages (code splitting) ───────────
// Each page is its own JS chunk — loads only when navigated to.
const Home      = lazy(() => import('./pages/Home.jsx'));
const AstroApp  = lazy(() => import('./pages/AstroApp.jsx'));
const Privacy   = lazy(() => import('./pages/Privacy.jsx'));
const Terms     = lazy(() => import('./pages/Terms.jsx'));
const NotFound  = lazy(() => import('./pages/NotFound.jsx'));
const MyCharts  = lazy(() => import('./pages/MyCharts.jsx'));

// ── Simple loading fallback ───────────────────────
function PageLoader() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '80px 0' }}>
      <div className="spinner" aria-label="Loading..." />
    </div>
  );
}

export default function App() {
  const location = useLocation();
  const { user, isLoaded } = useUser();

  // ── Identify user in analytics once Clerk loads ──
  useEffect(() => {
    if (!isLoaded) return;
    if (user) {
      identify(user.id, {
        $email:      user.primaryEmailAddress?.emailAddress,
        $name:       user.fullName,
        $created:    user.createdAt,
        plan:        'free',
      });
    }
  }, [user, isLoaded]);

  // ── Track page views on route change ─────────────
  useEffect(() => {
    const name = location.pathname === '/' ? 'Home'
      : location.pathname.startsWith('/app') ? 'App'
      : location.pathname.replace('/', '');
    page(name, { path: location.pathname });
  }, [location.pathname]);

  return (
    <>
      <CookieBanner />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          {/* Public pages */}
          <Route element={<Layout />}>
            <Route path="/"        element={<Home />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms"   element={<Terms />} />
            <Route path="*"        element={<NotFound />} />
          </Route>

          {/* Protected: must be signed in */}
          <Route element={<ProtectedRoute />}>
            <Route element={<Layout />}>
              <Route path="/app"        element={<AstroApp />} />
              <Route path="/my-charts"  element={<MyCharts />} />
            </Route>
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}
