import React from 'react';
import { NavLink } from 'react-router-dom';
import { Shield, FileText, Scale, AlertTriangle, Calendar, Mail } from 'lucide-react';

export default function LegalLayout({
  title,
  lastUpdated = 'October 2026',
  children,
  badgeText = 'Official Policy'
}) {
  const legalLinks = [
    { to: '/privacy-policy', label: 'Privacy Policy', icon: <Shield size={16} /> },
    { to: '/terms', label: 'Terms and Conditions', icon: <FileText size={16} /> },
    { to: '/license', label: 'License and IP', icon: <Scale size={16} /> },
    { to: '/risk-disclosure', label: 'Risk Disclosure', icon: <AlertTriangle size={16} /> },
  ];

  return (
    <div>
      {/* Header */}
      <section className="page-header">
        <div className="container">
          <div className="breadcrumbs">
            <NavLink to="/">Home</NavLink>
            <span className="separator">/</span>
            <span className="current">Legal & Compliance</span>
            <span className="separator">/</span>
            <span className="current">{title}</span>
          </div>

          <div className="page-header-eyebrow">
            <span className="badge badge-green">{badgeText}</span>
          </div>

          <h1 className="page-title">{title}</h1>
          <div className="legal-meta-bar" style={{ borderBottom: 'none', paddingBottom: 0, marginBottom: 0 }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              <Calendar size={15} /> Last Updated: {lastUpdated}
            </span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              <Mail size={15} /> Inquiries: <a href="mailto:lemonindiaincorporated@gmail.com">lemonindiaincorporated@gmail.com</a>
            </span>
          </div>
        </div>
      </section>

      {/* Main Legal Content with Sidebar */}
      <div className="container">
        <div className="legal-layout">
          {/* Sidebar */}
          <aside className="legal-sidebar" aria-label="Legal Documents Navigation">
            <div className="legal-nav-title">Legal Documents</div>
            <ul className="legal-nav-list">
              {legalLinks.map((link) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    className={({ isActive }) => `legal-nav-link ${isActive ? 'active' : ''}`}
                    style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
                  >
                    {link.icon}
                    <span>{link.label}</span>
                  </NavLink>
                </li>
              ))}
            </ul>

            <div style={{ marginTop: '28px', paddingTop: '20px', borderTop: '1px solid var(--color-border)', fontSize: '0.82rem', color: 'var(--color-text-muted)', lineHeight: '1.5' }}>
              <strong style={{ color: 'var(--color-forest)', display: 'block', marginBottom: '4px' }}>
                Human Review Notice:
              </strong>
              These documents govern the digital presence of Lemon India DAO. They are maintained to provide direct transparency regarding our systems and operations.
            </div>
          </aside>

          {/* Document Content */}
          <article className="legal-body">
            {children}
          </article>
        </div>
      </div>
    </div>
  );
}
