// frontend/src/components/SupportModal.jsx
// ─────────────────────────────────────────────────
// Dual-mode modal: "Contact Support" and "Report a Bug"
// Submits to POST /api/support/contact or /api/support/bug
// Auth-optional: works for both logged-in and anonymous users.
// ─────────────────────────────────────────────────

import { useState, useEffect, useRef } from 'react';
import { useUser } from '@clerk/clerk-react';
import { publicApi } from '../lib/api.js';
import { track, Events } from '../lib/analytics.js';

const INITIAL = { name: '', email: '', subject: '', message: '' };

export default function SupportModal({ isOpen, type = 'contact', onClose }) {
  const { user } = useUser();
  const [form, setForm]       = useState(INITIAL);
  const [status, setStatus]   = useState('idle'); // idle | loading | success | error
  const [errMsg, setErrMsg]   = useState('');
  const firstInputRef         = useRef(null);

  const isBug = type === 'bug';
  const title = isBug ? '🐛 Report a Bug' : '💬 Contact Support';

  // Pre-fill name/email from Clerk if signed in
  useEffect(() => {
    if (user) {
      setForm(f => ({
        ...f,
        name:  f.name  || user.fullName || '',
        email: f.email || user.primaryEmailAddress?.emailAddress || '',
      }));
    }
  }, [user]);

  // Reset on close
  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => { setStatus('idle'); setErrMsg(''); }, 300);
    } else {
      track(Events.SUPPORT_MODAL_OPENED, { type });
      // Focus first empty input after open animation
      setTimeout(() => firstInputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose(); };
    if (isOpen) window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [isOpen, onClose]);

  function handleChange(e) {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('loading');
    setErrMsg('');

    try {
      const endpoint = isBug ? '/api/support/bug' : '/api/support/contact';
      await publicApi.post(endpoint, form);
      setStatus('success');
      track(isBug ? Events.BUG_REPORTED : Events.SUPPORT_FORM_SUBMITTED, {
        hasAccount: !!user,
      });
    } catch (err) {
      setStatus('error');
      setErrMsg(err.message || 'Something went wrong. Please try again.');
    }
  }

  if (!isOpen) return null;

  return (
    /* Backdrop */
    <div
      className="modal-backdrop"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
      role="dialog"
      aria-modal="true"
      aria-label={title}
    >
      <div className="modal-box">
        {/* Header */}
        <div className="modal-header">
          <h2 className="modal-title">{title}</h2>
          <button className="modal-close" onClick={onClose} aria-label="Close">✕</button>
        </div>

        {/* Success state */}
        {status === 'success' ? (
          <div className="modal-success">
            <div className="success-icon">✓</div>
            <h3>Message sent!</h3>
            <p>We'll get back to you within 24-48 hours at <strong>{form.email}</strong>.</p>
            <button className="btn btn-primary" onClick={onClose}>Done</button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="modal-form" noValidate>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="support-name">Name</label>
                <input
                  ref={firstInputRef}
                  id="support-name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  maxLength={100}
                />
              </div>
              <div className="form-group">
                <label htmlFor="support-email">Email</label>
                <input
                  id="support-email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  required
                  maxLength={200}
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="support-subject">Subject</label>
              <input
                id="support-subject"
                name="subject"
                type="text"
                value={form.subject}
                onChange={handleChange}
                placeholder={isBug ? 'Brief description of the bug' : 'How can we help?'}
                required
                maxLength={200}
              />
            </div>

            <div className="form-group">
              <label htmlFor="support-message">
                {isBug ? 'Steps to reproduce' : 'Message'}
              </label>
              <textarea
                id="support-message"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder={
                  isBug
                    ? '1. I entered my birth date...\n2. Clicked Generate...\n3. Expected X, but got Y'
                    : 'Tell us what you need...'
                }
                required
                minLength={10}
                maxLength={3000}
                rows={5}
              />
              <span className="char-count">{form.message.length}/3000</span>
            </div>

            {errMsg && (
              <div className="form-error" role="alert">{errMsg}</div>
            )}

            <div className="modal-actions">
              <button type="button" className="btn btn-outline" onClick={onClose}>
                Cancel
              </button>
              <button
                type="submit"
                className="btn btn-primary"
                disabled={status === 'loading'}
              >
                {status === 'loading' ? 'Sending…' : 'Send Message'}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
