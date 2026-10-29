import React, { useState, useEffect, useRef } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import {
  Menu,
  X,
  ChevronDown,
  ExternalLink,
  Layers,
  Coins,
  FileText,
  Search,
  Sparkles,
  HelpCircle,
  ShieldCheck,
  Mail,
  GraduationCap,
  Scale
} from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [ecosystemOpen, setEcosystemOpen] = useState(false);
  const [tokensOpen, setTokensOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const location = useLocation();

  const ecoRef = useRef(null);
  const tokensRef = useRef(null);
  const resRef = useRef(null);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setEcosystemOpen(false);
    setTokensOpen(false);
    setResourcesOpen(false);
  }, [location.pathname]);

  // Click outside listener for dropdowns
  useEffect(() => {
    function handleClickOutside(event) {
      if (ecoRef.current && !ecoRef.current.contains(event.target)) {
        setEcosystemOpen(false);
      }
      if (tokensRef.current && !tokensRef.current.contains(event.target)) {
        setTokensOpen(false);
      }
      if (resRef.current && !resRef.current.contains(event.target)) {
        setResourcesOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="site-header">
      <div className="container">
        <div className="nav-container">
          {/* Brand Logo */}
          <Link to="/" className="brand-link" aria-label="Lemon India DAO Home">
            <img
              src="/assets/lemon-india-logo.png"
              alt="Lemon India DAO Logo"
              className="brand-logo"
            />
            <div className="brand-text">
              <span className="brand-title">Lemon India</span>
              <span className="brand-subtitle">DAO Ecosystem</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="desktop-nav" aria-label="Main Navigation">
            <NavLink
              to="/"
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              end
            >
              Home
            </NavLink>

            {/* Ecosystem Dropdown */}
            <div className="nav-dropdown" ref={ecoRef}>
              <button
                type="button"
                className={`nav-link dropdown-trigger ${location.pathname.startsWith('/ecosystem') ? 'active' : ''}`}
                onClick={() => {
                  setEcosystemOpen(!ecosystemOpen);
                  setTokensOpen(false);
                  setResourcesOpen(false);
                }}
                aria-expanded={ecosystemOpen}
              >
                Ecosystem
                <ChevronDown size={14} style={{ transform: ecosystemOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
              </button>

              {ecosystemOpen && (
                <div className="dropdown-menu">
                  <Link to="/ecosystem" className="dropdown-item">
                    <Layers size={18} color="var(--color-primary)" style={{ marginTop: 2 }} />
                    <div>
                      <div className="dropdown-item-title">Ecosystem Overview</div>
                      <div className="dropdown-item-desc">Structure, pillars, and initiatives</div>
                    </div>
                  </Link>
                  <Link to="/vidyaverse" className="dropdown-item">
                    <GraduationCap size={18} color="var(--color-primary)" style={{ marginTop: 2 }} />
                    <div>
                      <div className="dropdown-item-title">Vidyaverse AI</div>
                      <div className="dropdown-item-desc">AI-powered gamified education</div>
                    </div>
                  </Link>
                  <a
                    href="https://cyan-rosy-rho.vercel.app/Hind-main/index.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="dropdown-item"
                  >
                    <Search size={18} color="var(--color-primary)" style={{ marginTop: 2 }} />
                    <div>
                      <div className="dropdown-item-title" style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                        Hind.com <ExternalLink size={12} />
                      </div>
                      <div className="dropdown-item-desc">Search and discovery portal</div>
                    </div>
                  </a>
                  <Link to="/ecosystem#technology" className="dropdown-item">
                    <Sparkles size={18} color="var(--color-primary)" style={{ marginTop: 2 }} />
                    <div>
                      <div className="dropdown-item-title">Technology & Research</div>
                      <div className="dropdown-item-desc">Decentralised infrastructure & tools</div>
                    </div>
                  </Link>
                </div>
              )}
            </div>

            <NavLink
              to="/products"
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            >
              Products
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            >
              About
            </NavLink>

            {/* Participation & Tokens Dropdown */}
            <div className="nav-dropdown" ref={tokensRef}>
              <button
                type="button"
                className={`nav-link dropdown-trigger ${(location.pathname === '/lp-tokens' || location.pathname === '/lpc') ? 'active' : ''}`}
                onClick={() => {
                  setTokensOpen(!tokensOpen);
                  setEcosystemOpen(false);
                  setResourcesOpen(false);
                }}
                aria-expanded={tokensOpen}
              >
                Participation
                <ChevronDown size={14} style={{ transform: tokensOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
              </button>

              {tokensOpen && (
                <div className="dropdown-menu">
                  <Link to="/clearance" className="dropdown-item">
                    <Scale size={18} color="var(--color-primary)" style={{ marginTop: 2 }} />
                    <div>
                      <div className="dropdown-item-title">Investment Clearance (GT &bull; LP)</div>
                      <div className="dropdown-item-desc">Governance vs Investment clearance portal</div>
                    </div>
                  </Link>
                  <Link to="/lp-tokens" className="dropdown-item">
                    <Layers size={18} color="var(--color-primary)" style={{ marginTop: 2 }} />
                    <div>
                      <div className="dropdown-item-title">LP Tokens</div>
                      <div className="dropdown-item-desc">DAO Crowdfunding structure</div>
                    </div>
                  </Link>
                  <Link to="/lpc" className="dropdown-item">
                    <Coins size={18} color="var(--color-primary)" style={{ marginTop: 2 }} />
                    <div>
                      <div className="dropdown-item-title">Lemon Pine Coin (LPC)</div>
                      <div className="dropdown-item-desc">BNB Chain crypto (ticker PAAPPL)</div>
                    </div>
                  </Link>
                  <a
                    href="https://app.xdao.app/56/dao/0x4deaff5873536f7510d29da4fbc0621629d77fc1/modules/crowdfunding"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="dropdown-item"
                  >
                    <ExternalLink size={18} color="var(--color-primary)" style={{ marginTop: 2 }} />
                    <div>
                      <div className="dropdown-item-title" style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                        Crowdfunding Campaign <ExternalLink size={12} />
                      </div>
                      <div className="dropdown-item-desc">Live on XDAO platform</div>
                    </div>
                  </a>
                </div>
              )}
            </div>

            <NavLink
              to="/investor-relations"
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            >
              Investor Relations
            </NavLink>

            {/* Resources Dropdown */}
            <div className="nav-dropdown" ref={resRef}>
              <button
                type="button"
                className={`nav-link dropdown-trigger ${(location.pathname === '/faq' || location.pathname === '/contact' || location.pathname.startsWith('/privacy') || location.pathname.startsWith('/license') || location.pathname.startsWith('/terms') || location.pathname.startsWith('/risk')) ? 'active' : ''}`}
                onClick={() => {
                  setResourcesOpen(!resourcesOpen);
                  setEcosystemOpen(false);
                  setTokensOpen(false);
                }}
                aria-expanded={resourcesOpen}
              >
                Resources
                <ChevronDown size={14} style={{ transform: resourcesOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
              </button>

              {resourcesOpen && (
                <div className="dropdown-menu">
                  <Link to="/faq" className="dropdown-item">
                    <HelpCircle size={18} color="var(--color-primary)" style={{ marginTop: 2 }} />
                    <div>
                      <div className="dropdown-item-title">FAQ</div>
                      <div className="dropdown-item-desc">Answers to common questions</div>
                    </div>
                  </Link>
                  <Link to="/contact" className="dropdown-item">
                    <Mail size={18} color="var(--color-primary)" style={{ marginTop: 2 }} />
                    <div>
                      <div className="dropdown-item-title">Contact</div>
                      <div className="dropdown-item-desc">Get in touch with the team</div>
                    </div>
                  </Link>
                  <Link to="/risk-disclosure" className="dropdown-item">
                    <ShieldCheck size={18} color="var(--color-primary)" style={{ marginTop: 2 }} />
                    <div>
                      <div className="dropdown-item-title">Risk Disclosure</div>
                      <div className="dropdown-item-desc">Digital-asset safety & volatility</div>
                    </div>
                  </Link>
                  <Link to="/privacy-policy" className="dropdown-item">
                    <FileText size={18} color="var(--color-primary)" style={{ marginTop: 2 }} />
                    <div>
                      <div className="dropdown-item-title">Legal & Policies</div>
                      <div className="dropdown-item-desc">Privacy, Terms, License</div>
                    </div>
                  </Link>
                </div>
              )}
            </div>
          </nav>

          {/* Nav Actions / CTA */}
          <div className="nav-actions">
            <a
              href="https://app.xdao.app/56/dao/0x4deaff5873536f7510d29da4fbc0621629d77fc1?tab=Info"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-lemon btn-sm nav-cta-btn"
              title="Verified Lemon India DAO on XDAO"
            >
              <span>Explore the DAO</span>
              <ExternalLink size={15} />
            </a>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              className="mobile-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Backdrop & Drawer */}
      {mobileMenuOpen && (
        <>
          <div
            className="mobile-menu-backdrop"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />
          <div className="mobile-menu-drawer">
            <NavLink to="/" className="mobile-menu-link" onClick={() => setMobileMenuOpen(false)}>Home</NavLink>
            <NavLink to="/about" className="mobile-menu-link" onClick={() => setMobileMenuOpen(false)}>About</NavLink>
            <NavLink to="/ecosystem" className="mobile-menu-link" onClick={() => setMobileMenuOpen(false)}>Ecosystem Overview</NavLink>
            <NavLink to="/vidyaverse" className="mobile-menu-link" onClick={() => setMobileMenuOpen(false)}>Vidyaverse AI</NavLink>
            <div className="mobile-submenu">
              <a
                href="https://cyan-rosy-rho.vercel.app/Hind-main/index.html"
                target="_blank"
                rel="noopener noreferrer"
                className="mobile-menu-link"
                style={{ fontSize: '0.92rem' }}
                onClick={() => setMobileMenuOpen(false)}
              >
                Hind.com Search <ExternalLink size={12} style={{ display: 'inline', marginLeft: 4 }} />
              </a>
            </div>
            <NavLink to="/products" className="mobile-menu-link" onClick={() => setMobileMenuOpen(false)}>Products</NavLink>
            <NavLink to="/clearance" className="mobile-menu-link" onClick={() => setMobileMenuOpen(false)}>Investment Clearance (GT &bull; LP)</NavLink>
            <NavLink to="/lp-tokens" className="mobile-menu-link" onClick={() => setMobileMenuOpen(false)}>LP Tokens (Crowdfunding)</NavLink>
            <NavLink to="/lpc" className="mobile-menu-link" onClick={() => setMobileMenuOpen(false)}>Lemon Pine Coin (LPC)</NavLink>
            <NavLink to="/investor-relations" className="mobile-menu-link" onClick={() => setMobileMenuOpen(false)}>Investor Relations</NavLink>
            <NavLink to="/faq" className="mobile-menu-link" onClick={() => setMobileMenuOpen(false)}>FAQ</NavLink>
            <NavLink to="/contact" className="mobile-menu-link" onClick={() => setMobileMenuOpen(false)}>Contact</NavLink>
            <NavLink to="/privacy-policy" className="mobile-menu-link" onClick={() => setMobileMenuOpen(false)}>Privacy Policy</NavLink>
            <NavLink to="/license" className="mobile-menu-link" onClick={() => setMobileMenuOpen(false)}>License</NavLink>
            <NavLink to="/terms" className="mobile-menu-link" onClick={() => setMobileMenuOpen(false)}>Terms and Conditions</NavLink>
            <NavLink to="/risk-disclosure" className="mobile-menu-link" onClick={() => setMobileMenuOpen(false)}>Risk Disclosure</NavLink>

            <a
              href="https://app.xdao.app/56/dao/0x4deaff5873536f7510d29da4fbc0621629d77fc1?tab=Info"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-lemon"
              style={{ marginTop: 10, justifyContent: 'center' }}
              onClick={() => setMobileMenuOpen(false)}
            >
              Explore the DAO <ExternalLink size={16} />
            </a>
          </div>
        </>
      )}
    </header>
  );
}
