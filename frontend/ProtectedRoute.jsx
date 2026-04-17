// frontend/src/components/ProtectedRoute.jsx
// ─────────────────────────────────────────────────
// Wraps any route that requires a signed-in user.
// Redirects to Clerk's sign-in page if not authenticated,
// preserving the intended destination URL for post-login redirect.
// ─────────────────────────────────────────────────

import { useAuth } from '@clerk/clerk-react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

export default function ProtectedRoute() {
  const { isLoaded, isSignedIn } = useAuth();
  const location = useLocation();

  // While Clerk is hydrating, render nothing (avoids flash)
  if (!isLoaded) return null;

  if (!isSignedIn) {
    // Redirect to sign-in, encode current path so Clerk can
    // redirect back after successful login.
    return (
      <Navigate
        to={`/sign-in?redirect_url=${encodeURIComponent(location.pathname)}`}
        replace
      />
    );
  }

  return <Outlet />;
}
