// frontend/src/components/Layout.jsx
import { useState } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { SignedIn, SignedOut, UserButton } from '@clerk/clerk-react';
import SupportModal from './SupportModal.jsx';

export default function Layout() {
  const [supportOpen, setSupportOpen] = useState(false);
  const [supportType, setSupportType] = useState('contact');

  function openSupport(type = 'contact') {
    setSupportType(type);
    setSupportOpen(true);
  }

  return (
    <div className="layout">
      {/* ── Nav ─────────────────────────────────── */}
      <header className="nav">
        <Link to="/" className="nav-logo">
          ✦ AstroVerse AI
        </Link>

        <nav className="nav-links">
          <NavLink to="/app" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            My Kundli
          </NavLink>
          <button className="nav-link btn-ghost" onClick={() => openSupport('contact')}>
            Support
          </button>
        </nav>

        <div className="nav-auth">
          <SignedOut>
            <Link to="/sign-in" className="btn btn-outline">Sign In</Link>
            <Link to="/sign-up" className="btn btn-primary">Get Started</Link>
          </SignedOut>
          <SignedIn>
            {/* Clerk's pre-built user menu: avatar, manage account, sign out */}
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
        </div>
      </header>

      {/* ── Page content ────────────────────────── */}
      <main className="main-content">
        <Outlet />
      </main>

      {/* ── Footer ──────────────────────────────── */}
      <footer className="footer">
        <div className="footer-inner">
          <p className="footer-copy">
            © {new Date().getFullYear()} AstroVerse AI. Vedic calculations via VSOP87 + Lahiri Ayanamsa.
          </p>
          <nav className="footer-links">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
            <button className="btn-ghost" onClick={() => openSupport('contact')}>Contact</button>
            <button className="btn-ghost" onClick={() => openSupport('bug')}>Report a Bug</button>
          </nav>
        </div>
      </footer>

      {/* ── Support modal ────────────────────────── */}
      <SupportModal
        isOpen={supportOpen}
        type={supportType}
        onClose={() => setSupportOpen(false)}
      />
    </div>
  );
}
