import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Mail, ShieldAlert, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          {/* Brand Column */}
          <div className="footer-brand-col">
            <div className="footer-logo-wrap">
              <img
                src="/assets/lemon-india-logo.png"
                alt="Lemon India DAO Logo"
                className="footer-logo"
              />
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 800, color: '#fff' }}>
                  Lemon India DAO
                </div>
                <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-lemon)' }}>
                  Digital Ecosystem
                </div>
              </div>
            </div>

            <div className="footer-tagline">
              "Build in India. Create together. Grow through decentralisation."
            </div>

            <p className="footer-desc">
              A decentralised digital ecosystem bringing together software products, technological experimentation, research, and community participation.
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.88rem', color: 'rgba(255,255,255,0.85)' }}>
              <Mail size={16} color="var(--color-lemon)" />
              <a href="mailto:lemonindiaincorporated@gmail.com" style={{ color: 'var(--color-lemon)' }}>
                lemonindiaincorporated@gmail.com
              </a>
            </div>
          </div>

          {/* Ecosystem Column */}
          <div>
            <h4 className="footer-heading">Ecosystem</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Lemon India</Link></li>
              <li><Link to="/ecosystem">Ecosystem Overview</Link></li>
              <li><Link to="/products">Product Directory</Link></li>
              <li><Link to="/vidyaverse">Vidyaverse AI</Link></li>
              <li>
                <a href="https://vidyaverse-ai-study.vercel.app/" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                  Vidyaverse App <ExternalLink size={12} />
                </a>
              </li>
              <li>
                <a href="https://cyan-rosy-rho.vercel.app/Hind-main/index.html" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                  Hind.com Search <ExternalLink size={12} />
                </a>
              </li>
            </ul>
          </div>

          {/* Participation Column */}
          <div>
            <h4 className="footer-heading">Participation</h4>
            <ul className="footer-links">
              <li>
                <a
                  href="https://app.xdao.app/56/dao/0x4deaff5873536f7510d29da4fbc0621629d77fc1?tab=Info"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}
                >
                  Explore the DAO <ExternalLink size={12} />
                </a>
              </li>
              <li>
                <a
                  href="https://app.xdao.app/56/dao/0x4deaff5873536f7510d29da4fbc0621629d77fc1/modules/crowdfunding"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}
                >
                  Crowdfunding <ExternalLink size={12} />
                </a>
              </li>
              <li><Link to="/lp-tokens">LP Tokens Information</Link></li>
              <li><Link to="/lpc">Lemon Pine Coin (LPC)</Link></li>
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h4 className="footer-heading">Resources</h4>
            <ul className="footer-links">
              <li><Link to="/faq">Frequently Asked Questions</Link></li>
              <li><Link to="/investor-relations">Investor Relations</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h4 className="footer-heading">Legal</h4>
            <ul className="footer-links">
              <li><Link to="/privacy-policy">Privacy Policy</Link></li>
              <li><Link to="/license">License & IP</Link></li>
              <li><Link to="/terms">Terms and Conditions</Link></li>
              <li><Link to="/risk-disclosure">Risk Disclosure</Link></li>
            </ul>
          </div>
        </div>

        {/* Digital Asset Risk Statement */}
        <div className="footer-risk-statement">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-lemon)', fontWeight: 700, marginBottom: '6px', fontSize: '0.86rem' }}>
            <ShieldAlert size={16} />
            Digital Asset & Technology Disclosure
          </div>
          Digital assets, blockchain smart contracts, and decentralized participation involve significant technical, regulatory, and market risks.
          Information published on this website is for educational and informational purposes only and does not constitute financial, investment, legal, or tax advice.
          LP tokens represent an economic ownership stake in DAO financial assets under XDAO's model linked to the treasury. Lemon Pine Coin (LPC) is a separate cryptocurrency created by Lemon India DAO and does not confer DAO treasury ownership. Read the full <Link to="/risk-disclosure" style={{ color: 'var(--color-lemon)', textDecoration: 'underline' }}>Risk Disclosure</Link>.
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div>
            © {currentYear} Lemon India DAO. All rights reserved.
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span>Made with purposeful technology for India & beyond</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
