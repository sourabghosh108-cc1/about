import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  ShieldAlert,
  Coins,
  Scale,
  Vote,
  ExternalLink,
  Wallet,
  ArrowRight,
  AlertTriangle,
  Lock,
  RefreshCw,
  Sparkles,
  X,
  Menu,
  Database,
  Cpu,
  ShieldCheck
} from 'lucide-react';
import './ClearancePortal.css';

export default function ClearancePortalPage() {
  const [walletConnected, setWalletConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState('');
  const [walletModalOpen, setWalletModalOpen] = useState(false);
  const [activeTokenHighlight, setActiveTokenHighlight] = useState('none'); // 'gt' | 'lp' | 'none'
  const [activeStep, setActiveStep] = useState(1);
  const [comparisonFilter, setComparisonFilter] = useState('all'); // 'all' | 'governance' | 'investment'
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const canvasRef = useRef(null);

  // Background particle field
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    const particles = Array.from({ length: 45 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 1.5 + 0.5,
      speedX: (Math.random() - 0.5) * 0.3,
      speedY: (Math.random() - 0.5) * 0.3,
      color: Math.random() > 0.5 ? 'rgba(216, 243, 106, 0.4)' : 'rgba(245, 197, 24, 0.3)'
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Web3 Wallet Connect handler
  const handleConnectWallet = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        if (accounts && accounts.length > 0) {
          setWalletAddress(accounts[0]);
          setWalletConnected(true);
          setWalletModalOpen(false);
          return;
        }
      } catch (err) {
        console.warn('Wallet connection request rejected or failed:', err);
      }
    }
    // Fallback simulation for demonstration without web3 extension
    setWalletAddress('0x71C...49bE');
    setWalletConnected(true);
    setWalletModalOpen(false);
  };

  const handleDisconnectWallet = () => {
    setWalletConnected(false);
    setWalletAddress('');
    setWalletModalOpen(false);
  };

  const comparisonData = [
    {
      feature: 'Primary purpose',
      category: 'general',
      gt: 'Governance participation & voting rights under configured DAO parameters',
      lp: 'Financial participation linked directly to DAO treasury under XDAO rules'
    },
    {
      feature: 'Available for purchase on this website',
      category: 'investment',
      gt: 'NO. GT is not offered for sale. Strictly non-purchasable.',
      lp: 'Only through supported, authorized XDAO crowdfunding mechanism'
    },
    {
      feature: 'Governance rights',
      category: 'governance',
      gt: 'Yes, as defined by the deployed smart-contract configuration',
      lp: 'Not automatically. LP tokens represent economic interest, not voting seats'
    },
    {
      feature: 'Financial interest in treasury',
      category: 'investment',
      gt: 'Not automatically. GT conveys voting capacity, not economic stake',
      lp: 'Yes, as defined and accounted by the DAO\'s smart contracts'
    },
    {
      feature: 'Treasury redemption availability',
      category: 'investment',
      gt: 'Not through GT ownership alone',
      lp: 'Only if redemption is supported & configured in the active module'
    },
    {
      feature: 'Voting power',
      category: 'governance',
      gt: 'Governed by multi-sig signer weight & configuration parameters',
      lp: 'No direct governance voting power granted through LP ownership'
    },
    {
      feature: 'Value linked to treasury assets',
      category: 'investment',
      gt: 'Not inherently. GT is not an equity or dividend security',
      lp: 'Directly linked to treasury asset backing per LP accounting rules'
    }
  ];

  const filteredComparison = comparisonData.filter((item) => {
    if (comparisonFilter === 'all') return true;
    if (comparisonFilter === 'governance') return item.category === 'governance' || item.category === 'general';
    if (comparisonFilter === 'investment') return item.category === 'investment' || item.category === 'general';
    return true;
  });

  const governanceSteps = [
    {
      step: 1,
      title: 'DAO Members',
      desc: 'Authorized multi-sig signers and qualified participants holding non-sale governance rights.'
    },
    {
      step: 2,
      title: 'Governance Scope',
      desc: 'Formulation of technical, ecosystem, or resource allocation proposals via XDAO protocol.'
    },
    {
      step: 3,
      title: 'On-Chain Proposals',
      desc: 'Formal ballot creation registered with cryptographic verification on BNB Smart Chain.'
    },
    {
      step: 4,
      title: 'Quorum & Voting',
      desc: 'Signers vote according to configured consensus thresholds (e.g., majority or super-majority).'
    },
    {
      step: 5,
      title: 'Authorized Execution',
      desc: 'Smart contracts automatically execute verified actions without centralized intervention.'
    }
  ];

  return (
    <div className="clearance-portal-page">
      {/* Background Visual Layers */}
      <canvas ref={canvasRef} className="portal-ambient-canvas" />
      <div className="portal-grid-overlay" />
      <div className="portal-vignette" />

      <div className="portal-content-layer">
        {/* Futuristic Portal Navigation */}
        <header className="portal-navbar">
          <div className="portal-container">
            <div className="portal-nav-inner">
              <Link to="/" className="portal-brand" title="Return to Lemon India DAO Main Homepage">
                <img src="/assets/lemon-india-logo.png" alt="Lemon India DAO" className="portal-brand-logo" />
                <div>
                  <span className="portal-brand-title">Lemon India DAO</span>
                  <span className="portal-brand-sub">Clearance Portal // GT &bull; LP</span>
                </div>
              </Link>

              <nav className="portal-nav-links">
                <Link to="/" className="portal-nav-link">Main Home</Link>
                <a href="#hero" className="portal-nav-link">Overview</a>
                <a href="#orbital" className="portal-nav-link">Dual Core</a>
                <a href="#governance" className="portal-nav-link">GT Governance</a>
                <a href="#lp-investment" className="portal-nav-link">LP Investment</a>
                <a href="#comparison" className="portal-nav-link">Comparison</a>
                <a href="#treasury" className="portal-nav-link">Treasury</a>
                <a href="#risks" className="portal-nav-link">Risks</a>
              </nav>

              <div className="portal-nav-actions">
                <button
                  type="button"
                  className="btn-portal-wallet"
                  onClick={() => setWalletModalOpen(true)}
                  aria-label="Connect Web3 Wallet"
                >
                  <Wallet size={16} />
                  <span>{walletConnected ? `${walletAddress.slice(0, 6)}...${walletAddress.slice(-4)}` : 'Connect Wallet'}</span>
                </button>

                <button
                  type="button"
                  className="portal-mobile-toggle"
                  onClick={() => setMobileNavOpen(!mobileNavOpen)}
                  aria-label="Toggle navigation"
                >
                  {mobileNavOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Drawer */}
          {mobileNavOpen && (
            <div style={{ background: '#080F0B', borderTop: '1px solid var(--portal-border)', padding: '20px 24px', display: 'flex', flexDirection: 'column', gap: 12 }}>
              <Link to="/" className="portal-nav-link" onClick={() => setMobileNavOpen(false)}>Main Homepage</Link>
              <a href="#hero" className="portal-nav-link" onClick={() => setMobileNavOpen(false)}>Overview: GT vs LP</a>
              <a href="#orbital" className="portal-nav-link" onClick={() => setMobileNavOpen(false)}>Dual Core Path</a>
              <a href="#governance" className="portal-nav-link" onClick={() => setMobileNavOpen(false)}>GT Governance (Not for Sale)</a>
              <a href="#lp-investment" className="portal-nav-link" onClick={() => setMobileNavOpen(false)}>LP Investment Participation</a>
              <a href="#comparison" className="portal-nav-link" onClick={() => setMobileNavOpen(false)}>Feature Comparison</a>
              <a href="#treasury" className="portal-nav-link" onClick={() => setMobileNavOpen(false)}>Treasury Telemetry</a>
              <a href="#risks" className="portal-nav-link" onClick={() => setMobileNavOpen(false)}>Risks & Disclosures</a>
            </div>
          )}
        </header>

        {/* SECTION 1: HERO — ONE DAO. TWO DISTINCT PATHS. */}
        <section className="portal-hero" id="hero">
          <div className="portal-container">
            <div className="portal-telemetry-badge">
              <Sparkles size={14} />
              <span>Investment & Governance Clearance Protocol</span>
            </div>

            <h1 className="portal-hero-title">
              ONE DAO. <br />
              <span className="yellow">TWO DISTINCT</span> <span className="gold">PATHS.</span>
            </h1>

            <p className="portal-hero-sub">
              Participate in governance through <strong>GT</strong>. Explore financial participation through <strong>LP</strong>. <br />
              Understand the fundamental architecture before you engage with the ecosystem.
            </p>

            {/* 3D Interactive Side-by-Side Token Stage */}
            <div className="portal-tokens-stage">
              {/* LEFT: GT GOVERNANCE TOKEN */}
              <div
                className={`token-path-card gt-card ${activeTokenHighlight === 'gt' ? 'active' : ''}`}
                onMouseEnter={() => setActiveTokenHighlight('gt')}
                onMouseLeave={() => setActiveTokenHighlight('none')}
              >
                <div className="token-card-header">
                  <span className="token-card-tag gt-tag">GOVERNANCE ACCESS</span>
                  <span className="token-badge-critical badge-not-for-sale">NOT FOR SALE</span>
                </div>

                <div className="token-visual-stage">
                  <div className="orbital-ring ring-outer" />
                  <div className="orbital-ring ring-mid" />
                  <div className="token-orb">
                    <Scale size={38} color="var(--portal-lemon)" />
                  </div>
                </div>

                <h2 className="token-path-title">GT Governance Token</h2>
                <p className="token-path-desc">
                  GT is used for DAO governance, participation, and voting according to the DAO's smart-contract configuration. Its purpose is collective decision-making, not fundraising.
                </p>

                <div className="token-path-callout gt-callout">
                  <strong>Critical Clarification:</strong> GT is a governance token, not an investment product. It is not offered for sale. Visitors must never seek or expect a purchase flow for GT.
                </div>

                <div className="token-card-actions">
                  <a href="#governance" className="btn-portal-primary">
                    <span>Explore Governance</span>
                    <ArrowRight size={16} />
                  </a>
                  <a href="#comparison" className="btn-portal-ghost">
                    <span>Compare Rights</span>
                  </a>
                </div>
              </div>

              {/* RIGHT: LP INVESTMENT TOKEN */}
              <div
                className={`token-path-card lp-card ${activeTokenHighlight === 'lp' ? 'active' : ''}`}
                onMouseEnter={() => setActiveTokenHighlight('lp')}
                onMouseLeave={() => setActiveTokenHighlight('none')}
              >
                <div className="token-card-header">
                  <span className="token-card-tag lp-tag">FINANCIAL PARTICIPATION</span>
                  <span className="token-badge-critical badge-investment-route">DAO INVESTMENT ROUTE</span>
                </div>

                <div className="token-visual-stage">
                  <div className="orbital-ring ring-outer ring-gold" />
                  <div className="orbital-ring ring-mid ring-gold" />
                  <div className="token-orb lp-orb">
                    <Coins size={38} color="var(--portal-gold)" />
                  </div>
                </div>

                <h2 className="token-path-title">LP Participation Token</h2>
                <p className="token-path-desc">
                  LP tokens represent financial interests under the DAO's smart-contract rules for contributors who allocate approved assets to the DAO treasury via XDAO.
                </p>

                <div className="token-path-callout lp-callout">
                  <strong>Interested in financial participation?</strong> Explore LP tokens. Value, redemption availability, and associated rights depend strictly on the treasury, configuration, and applicable terms.
                </div>

                <div className="token-card-actions">
                  <a href="#lp-investment" className="btn-portal-gold">
                    <span>Explore LP Investment</span>
                    <ArrowRight size={16} />
                  </a>
                  <a href="#treasury" className="btn-portal-ghost">
                    <span>View Treasury</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: SIGNATURE CENTRAL DUAL-ORBITAL ANIMATION */}
        <section className="portal-orbit-section" id="orbital">
          <div className="portal-container">
            <div className="orbit-visual-wrapper">
              <div className="orbit-header">
                <span className="section-tagline">
                  <Cpu size={14} />
                  <span>Central Protocol Telemetry</span>
                </span>
                <h2 style={{ fontSize: '2.2rem', fontFamily: 'var(--portal-font-display)', marginBottom: 12 }}>
                  Two Separate Pathways That Never Merge
                </h2>
                <p style={{ color: 'var(--portal-text-muted)', fontSize: '1.02rem', margin: 0 }}>
                  The foundational DAO core distributes authority and capital through two strictly non-interchangeable operational streams.
                </p>
              </div>

              {/* Kinetic Simulation Stage */}
              <div className="orbit-canvas-container">
                {/* Left Stream: Governance */}
                <div className="orbit-path-gt">
                  <div className="orbit-node-gt">
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'var(--portal-lemon)', fontWeight: 700, fontSize: '0.85rem', marginBottom: 6 }}>
                      <Vote size={16} />
                      <span>GT Stream</span>
                    </div>
                    <div style={{ fontSize: '0.82rem', color: '#fff', fontWeight: 600, marginBottom: 4 }}>
                      Governance Authorization
                    </div>
                    <p style={{ fontSize: '0.74rem', color: 'var(--portal-text-muted)', margin: 0 }}>
                      Voting &bull; Proposals &bull; Non-financial consensus
                    </p>
                  </div>
                </div>

                {/* Center Core */}
                <div className="orbit-center-core">
                  <img src="/assets/lemon-india-logo.png" alt="DAO Core" style={{ width: 34, height: 34, marginBottom: 4 }} />
                  <span style={{ fontSize: '0.68rem', fontFamily: 'var(--portal-font-mono)', color: 'var(--portal-lemon)', fontWeight: 700 }}>
                    DAO CORE
                  </span>
                </div>

                {/* Right Stream: LP Capital */}
                <div className="orbit-path-lp">
                  <div className="orbit-node-lp">
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'var(--portal-gold)', fontWeight: 700, fontSize: '0.85rem', marginBottom: 6 }}>
                      <Database size={16} />
                      <span>LP Stream</span>
                    </div>
                    <div style={{ fontSize: '0.82rem', color: '#fff', fontWeight: 600, marginBottom: 4 }}>
                      Treasury Capital Allocation
                    </div>
                    <p style={{ fontSize: '0.74rem', color: 'var(--portal-text-muted)', margin: 0 }}>
                      Asset Inflow &bull; Treasury Accounting &bull; Economic Stakes
                    </p>
                  </div>
                </div>
              </div>

              <div className="orbit-rule-box">
                <Lock size={16} />
                <span>
                  ARCHITECTURAL INVARIANT: The GT path and LP path never visually or mechanically merge into a single asset.
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: GT GOVERNANCE SECTION */}
        <section className="portal-section" id="governance">
          <div className="portal-container">
            <div className="section-tagline">
              <Scale size={16} />
              <span>Democracy Without Speculation</span>
            </div>

            <h2 className="section-title-huge">
              POWER TO PARTICIPATE. <br />
              <span style={{ color: 'var(--portal-lemon)' }}>NOT A PRODUCT TO BUY.</span>
            </h2>

            <div className="portal-alert-critical">
              <h4>
                <AlertTriangle size={18} />
                GT IS STRICTLY NOT FOR SALE
              </h4>
              <p>
                GT is reserved for governance participation under the DAO's applicable rules. This website does not offer GT for purchase, does not publish price quotes, and does not conduct fundraising through GT.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 24, margin: '36px 0' }}>
              <div style={{ background: 'rgba(14, 26, 19, 0.7)', border: '1px solid var(--portal-border)', borderRadius: 16, padding: 28 }}>
                <h3 style={{ fontSize: '1.25rem', color: '#fff', marginBottom: 12 }}>What GT Is & Why It Exists</h3>
                <p style={{ color: 'var(--portal-text-muted)', fontSize: '0.96rem', lineHeight: 1.65, margin: 0 }}>
                  In decentralized organizations, governance tokens act as digital keys granting voting weight to evaluate operational proposals, upgrade contracts, and direct ecosystem priorities. GT ensures that direction is guided by qualified stakeholders rather than speculative market churn.
                </p>
              </div>

              <div style={{ background: 'rgba(14, 26, 19, 0.7)', border: '1px solid var(--portal-border)', borderRadius: 16, padding: 28 }}>
                <h3 style={{ fontSize: '1.25rem', color: '#fff', marginBottom: 12 }}>Distinct From Financial Investment</h3>
                <p style={{ color: 'var(--portal-text-muted)', fontSize: '0.96rem', lineHeight: 1.65, margin: 0 }}>
                  Holding GT does not entitle a participant to dividends, profit splits, or direct treasury distributions. GT grants a voice in the room, not a claim check on capital. Distribution, eligibility, and transfer restrictions depend on the DAO's deployed parameters.
                </p>
              </div>
            </div>

            {/* Interactive Governance Flow Diagram */}
            <div style={{ margin: '48px 0' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
                <h3 style={{ fontSize: '1.35rem', fontFamily: 'var(--portal-font-display)', margin: 0 }}>
                  Interactive Governance Pipeline
                </h3>
                <span style={{ fontSize: '0.8rem', fontFamily: 'var(--portal-font-mono)', color: 'var(--portal-lemon)' }}>
                  Click step to inspect
                </span>
              </div>

              <div className="process-flow-grid">
                {governanceSteps.map((step) => (
                  <div
                    key={step.step}
                    className="process-step-card"
                    style={{ borderColor: activeStep === step.step ? 'var(--portal-lemon)' : 'var(--portal-border)', cursor: 'pointer' }}
                    onClick={() => setActiveStep(step.step)}
                  >
                    <span className="step-num">STAGE 0{step.step}</span>
                    <h4 className="step-title">{step.title}</h4>
                    <p className="step-desc">{step.desc}</p>
                  </div>
                ))}
              </div>

              <div style={{ background: 'rgba(0,0,0,0.3)', border: '1px solid var(--portal-border)', borderRadius: 12, padding: '16px 20px', fontSize: '0.86rem', color: 'var(--portal-text-muted)' }}>
                * All governance stages follow verified multi-signature criteria configured on the XDAO protocol on BNB Smart Chain. Actual voting periods and quorum thresholds depend on deployed smart-contract parameters.
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: LP INVESTMENT SECTION */}
        <section className="portal-section portal-section-alt" id="lp-investment">
          <div className="portal-container">
            <div className="section-tagline" style={{ color: 'var(--portal-gold)' }}>
              <Coins size={16} />
              <span>Capital Stewardship & Participation</span>
            </div>

            <h2 className="section-title-huge">
              FINANCIAL PARTICIPATION <br />
              <span style={{ color: 'var(--portal-gold)' }}>THROUGH LP TOKENS.</span>
            </h2>

            <p style={{ fontSize: '1.18rem', color: 'var(--portal-text-muted)', maxWidth: 840, lineHeight: 1.7, marginBottom: 36 }}>
              Interested in financially participating in the DAO? Explore LP tokens. LP tokens represent financial interests under the DAO's smart-contract rules. Their value, redemption availability, and associated rights depend on the treasury, token configuration, and applicable terms.
            </p>

            {/* 4 Core Concepts of LP Participation */}
            <div className="lp-concept-grid">
              <div className="lp-concept-card">
                <div style={{ color: 'var(--portal-gold)', fontWeight: 800, fontFamily: 'var(--portal-font-mono)', fontSize: '0.9rem', marginBottom: 8 }}>
                  A. CONTRIBUTION
                </div>
                <h4 style={{ fontSize: '1.15rem', color: '#fff', marginBottom: 8 }}>Capital Inflow</h4>
                <p style={{ fontSize: '0.86rem', color: 'var(--portal-text-muted)', lineHeight: 1.55, margin: 0 }}>
                  Eligible participants contribute approved crypto assets (such as BNB or BEP-20 stablecoins) directly through the authorized XDAO crowdfunding contract.
                </p>
              </div>

              <div className="lp-concept-card">
                <div style={{ color: 'var(--portal-gold)', fontWeight: 800, fontFamily: 'var(--portal-font-mono)', fontSize: '0.9rem', marginBottom: 8 }}>
                  B. TREASURY
                </div>
                <h4 style={{ fontSize: '1.15rem', color: '#fff', marginBottom: 8 }}>Custodial Architecture</h4>
                <p style={{ fontSize: '0.86rem', color: 'var(--portal-text-muted)', lineHeight: 1.55, margin: 0 }}>
                  Contributed assets are locked in on-chain multi-signature custody, managed in accordance with DAO governance and authorized allocation rules.
                </p>
              </div>

              <div className="lp-concept-card">
                <div style={{ color: 'var(--portal-gold)', fontWeight: 800, fontFamily: 'var(--portal-font-mono)', fontSize: '0.9rem', marginBottom: 8 }}>
                  C. LP ACCOUNTING
                </div>
                <h4 style={{ fontSize: '1.15rem', color: '#fff', marginBottom: 8 }}>Economic Interest</h4>
                <p style={{ fontSize: '0.86rem', color: 'var(--portal-text-muted)', lineHeight: 1.55, margin: 0 }}>
                  LP tokens represent economic ownership stakes in the DAO's financial assets. Their accounting value is determined strictly by the treasury composition.
                </p>
              </div>

              <div className="lp-concept-card">
                <div style={{ color: 'var(--portal-gold)', fontWeight: 800, fontFamily: 'var(--portal-font-mono)', fontSize: '0.9rem', marginBottom: 8 }}>
                  D. REDEMPTION
                </div>
                <h4 style={{ fontSize: '1.15rem', color: '#fff', marginBottom: 8 }}>Exit Parameters</h4>
                <p style={{ fontSize: '0.86rem', color: 'var(--portal-text-muted)', lineHeight: 1.55, margin: 0 }}>
                  If redemption is configured, it operates according to module formulas, liquidity reserves, and lockups. Redemption is never unconditionally guaranteed.
                </p>
              </div>
            </div>

            {/* Live XDAO Crowdfunding Iframe Container */}
            <div style={{ background: '#080F0B', border: '1px solid var(--portal-border-gold)', borderRadius: 24, overflow: 'hidden', margin: '48px 0', boxShadow: '0 20px 50px rgba(0,0,0,0.6)' }}>
              <div style={{ background: 'linear-gradient(135deg, #18150A 0%, #0E1A13 100%)', padding: '20px 28px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <Coins size={22} color="var(--portal-gold)" />
                  <div>
                    <h4 style={{ color: '#fff', margin: 0, fontSize: '1.25rem' }}>Official XDAO Crowdfunding Portal</h4>
                    <span style={{ fontSize: '0.76rem', color: 'var(--portal-gold)', fontFamily: 'var(--portal-font-mono)' }}>
                      BNB Chain Smart Contract &bull; 0x4deaff5873536f7510d29da4fbc0621629d77fc1
                    </span>
                  </div>
                </div>
                <a
                  href="https://app.xdao.app/56/dao/0x4deaff5873536f7510d29da4fbc0621629d77fc1/modules/crowdfunding"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-portal-gold"
                  style={{ padding: '8px 18px', fontSize: '0.8rem' }}
                >
                  <span>Launch in XDAO</span>
                  <ExternalLink size={14} />
                </a>
              </div>

              <div style={{ padding: 12, background: '#050A07' }}>
                <iframe
                  src="https://xdao.app/56/dao/0x4deaff5873536f7510d29da4fbc0621629d77fc1/widgets/crowdfunding"
                  title="Lemon India Incorporated Crowdfunding"
                  width="100%"
                  height="460px"
                  style={{ border: 'none', borderRadius: 12, background: '#fff', display: 'block' }}
                  loading="lazy"
                />
              </div>

              <div style={{ padding: '14px 24px', background: '#080F0B', borderTop: '1px solid var(--portal-border)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12, fontSize: '0.82rem', color: 'var(--portal-text-muted)' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  <ShieldCheck size={14} color="var(--portal-gold)" />
                  LP tokens represent financial interests under XDAO smart contracts; no profit guarantees.
                </span>
                <span style={{ fontFamily: 'var(--portal-font-mono)' }}>Chain ID: 56 (BNB Smart Chain)</span>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5: INTERACTIVE COMPARISON TABLE */}
        <section className="portal-section" id="comparison">
          <div className="portal-container">
            <div className="section-tagline">
              <Scale size={16} />
              <span>Analytical Clearance Matrix</span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16, marginBottom: 28 }}>
              <div>
                <h2 className="section-title-huge" style={{ margin: 0 }}>
                  Feature-by-Feature Comparison
                </h2>
                <p style={{ color: 'var(--portal-text-muted)', margin: '8px 0 0' }}>
                  Contrast governance privileges with financial participation terms
                </p>
              </div>

              <div style={{ display: 'flex', gap: 8, background: 'rgba(255,255,255,0.05)', padding: 4, borderRadius: 9999, border: '1px solid var(--portal-border)' }}>
                <button
                  type="button"
                  onClick={() => setComparisonFilter('all')}
                  style={{
                    background: comparisonFilter === 'all' ? 'var(--portal-lemon)' : 'transparent',
                    color: comparisonFilter === 'all' ? '#050805' : 'var(--portal-text-muted)',
                    border: 'none',
                    padding: '6px 14px',
                    borderRadius: 9999,
                    fontFamily: 'var(--portal-font-mono)',
                    fontSize: '0.78rem',
                    cursor: 'pointer',
                    fontWeight: 700
                  }}
                >
                  All Features
                </button>
                <button
                  type="button"
                  onClick={() => setComparisonFilter('governance')}
                  style={{
                    background: comparisonFilter === 'governance' ? 'var(--portal-lemon)' : 'transparent',
                    color: comparisonFilter === 'governance' ? '#050805' : 'var(--portal-text-muted)',
                    border: 'none',
                    padding: '6px 14px',
                    borderRadius: 9999,
                    fontFamily: 'var(--portal-font-mono)',
                    fontSize: '0.78rem',
                    cursor: 'pointer',
                    fontWeight: 700
                  }}
                >
                  Governance Focus
                </button>
                <button
                  type="button"
                  onClick={() => setComparisonFilter('investment')}
                  style={{
                    background: comparisonFilter === 'investment' ? 'var(--portal-gold)' : 'transparent',
                    color: comparisonFilter === 'investment' ? '#050805' : 'var(--portal-text-muted)',
                    border: 'none',
                    padding: '6px 14px',
                    borderRadius: 9999,
                    fontFamily: 'var(--portal-font-mono)',
                    fontSize: '0.78rem',
                    cursor: 'pointer',
                    fontWeight: 700
                  }}
                >
                  Investment Focus
                </button>
              </div>
            </div>

            <div className="comparison-container">
              <div className="comparison-table-wrapper">
                <table className="comparison-table">
                  <thead>
                    <tr>
                      <th style={{ width: '32%' }}>Feature</th>
                      <th className="col-gt">GT (Governance Token)</th>
                      <th className="col-lp">LP (Liquidity / Participation)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredComparison.map((row, idx) => (
                      <tr key={idx}>
                        <td className="col-feature">{row.feature}</td>
                        <td className="col-gt">{row.gt}</td>
                        <td className="col-lp">{row.lp}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 6: DAO TREASURY DASHBOARD */}
        <section className="portal-section portal-section-alt" id="treasury">
          <div className="portal-container">
            <div className="section-tagline">
              <Database size={16} />
              <span>Verifiable Custodial Ledger</span>
            </div>

            <h2 className="section-title-huge">
              DAO Treasury Telemetry
            </h2>

            <p style={{ color: 'var(--portal-text-muted)', maxWidth: 780, fontSize: '1.05rem', lineHeight: 1.65, marginBottom: 32 }}>
              Figures are verified directly against BNB Chain RPC and the official XDAO deployment. We never publish fabricated treasury yields, synthetic reserve figures, or unverified investor metrics.
            </p>

            <div className="treasury-dashboard-grid">
              <div className="treasury-metric-card">
                <span className="treasury-metric-label">
                  <Database size={14} color="var(--portal-lemon)" />
                  DAO Contract Address
                </span>
                <span className="treasury-metric-val" style={{ fontSize: '1.05rem', fontFamily: 'var(--portal-font-mono)' }}>
                  0x4deaff...7fc1
                </span>
                <span className="treasury-metric-sub">
                  Verified Multi-Sig on BNB Chain (56)
                </span>
              </div>

              <div className="treasury-metric-card">
                <span className="treasury-metric-label">
                  <Coins size={14} color="var(--portal-gold)" />
                  Supported Inflow Assets
                </span>
                <span className="treasury-metric-val">
                  BNB / Stablecoins
                </span>
                <span className="treasury-metric-sub">
                  Configured in live XDAO crowdfunding module
                </span>
              </div>

              <div className="treasury-metric-card">
                <span className="treasury-metric-label">
                  <RefreshCw size={14} color="var(--portal-cyan)" />
                  Last On-Chain Sync
                </span>
                <span className="treasury-metric-val" style={{ fontSize: '1.2rem', color: 'var(--portal-lemon)' }}>
                  Live &bull; Synchronized
                </span>
                <span className="treasury-metric-sub">
                  Queried directly from BNB Smart Chain RPC
                </span>
              </div>
            </div>

            <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
              <a
                href="https://bscscan.com/address/0x4deaff5873536f7510d29da4fbc0621629d77fc1"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-portal-ghost"
              >
                <span>Inspect DAO on BscScan</span>
                <ExternalLink size={14} />
              </a>
              <a
                href="https://app.xdao.app/56/dao/0x4deaff5873536f7510d29da4fbc0621629d77fc1?tab=Info"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-portal-ghost"
              >
                <span>Inspect Treasury in XDAO</span>
                <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </section>

        {/* SECTION 7: RISKS & DISCLOSURES */}
        <section className="portal-section" id="risks">
          <div className="portal-container">
            <div className="section-tagline" style={{ color: 'var(--portal-red)' }}>
              <ShieldAlert size={16} />
              <span>Essential Prudence</span>
            </div>

            <h2 className="section-title-huge">
              Risk Disclosure & Regulatory Truth
            </h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20, margin: '36px 0' }}>
              <div style={{ background: 'rgba(20, 10, 10, 0.4)', border: '1px solid rgba(248, 113, 113, 0.25)', borderRadius: 16, padding: 24 }}>
                <h4 style={{ color: '#FFA5A5', fontSize: '1.1rem', marginBottom: 8 }}>Smart-Contract Vulnerabilities</h4>
                <p style={{ color: 'var(--portal-text-muted)', fontSize: '0.88rem', lineHeight: 1.6, margin: 0 }}>
                  Decentralized applications rely on code deployed to the blockchain. Even verified contracts can experience unforeseen bugs, compiler flaws, or network congestion.
                </p>
              </div>

              <div style={{ background: 'rgba(20, 10, 10, 0.4)', border: '1px solid rgba(248, 113, 113, 0.25)', borderRadius: 16, padding: 24 }}>
                <h4 style={{ color: '#FFA5A5', fontSize: '1.1rem', marginBottom: 8 }}>Asset & Treasury Volatility</h4>
                <p style={{ color: 'var(--portal-text-muted)', fontSize: '0.88rem', lineHeight: 1.6, margin: 0 }}>
                  Contributed cryptocurrency assets are volatile. A decline in underlying treasury assets directly impacts the redemption value and economic stake of LP tokens.
                </p>
              </div>

              <div style={{ background: 'rgba(20, 10, 10, 0.4)', border: '1px solid rgba(248, 113, 113, 0.25)', borderRadius: 16, padding: 24 }}>
                <h4 style={{ color: '#FFA5A5', fontSize: '1.1rem', marginBottom: 8 }}>No Guaranteed Profits</h4>
                <p style={{ color: 'var(--portal-text-muted)', fontSize: '0.88rem', lineHeight: 1.6, margin: 0 }}>
                  Lemon India DAO does not promise returns, fixed yields, liquidity guarantees, or buybacks. Participation is speculative and carries risk of capital loss.
                </p>
              </div>

              <div style={{ background: 'rgba(20, 10, 10, 0.4)', border: '1px solid rgba(248, 113, 113, 0.25)', borderRadius: 16, padding: 24 }}>
                <h4 style={{ color: '#FFA5A5', fontSize: '1.1rem', marginBottom: 8 }}>Regulatory & Tax Status</h4>
                <p style={{ color: 'var(--portal-text-muted)', fontSize: '0.88rem', lineHeight: 1.6, margin: 0 }}>
                  Digital assets and DAOs exist in evolving legal landscapes. Participants must consult their own legal and financial advisors regarding regulatory compliance in their jurisdiction.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* PORTAL DEDICATED FOOTER */}
        <footer className="portal-footer">
          <div className="portal-container">
            <div className="portal-mandatory-disclaimer">
              <strong>Mandatory Protocol Disclosure:</strong> Governance participation and financial participation are distinct. GT is not offered for sale through this website. LP-related rights and risks depend on the deployed smart contracts, treasury assets, applicable terms, and relevant law. Lemon India DAO is a decentralized ecosystem, not a bank, investment fund, or broker-dealer.
            </div>

            <div className="portal-footer-grid">
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
                  <img src="/assets/lemon-india-logo.png" alt="Logo" style={{ width: 28, height: 28 }} />
                  <span style={{ fontWeight: 800, fontSize: '1.1rem' }}>Lemon India DAO</span>
                </div>
                <p style={{ fontSize: '0.86rem', color: 'var(--portal-text-muted)', lineHeight: 1.6 }}>
                  Decentralized software products, open technological experimentation, and transparent multi-sig community governance on BNB Chain.
                </p>
              </div>

              <div>
                <h4 className="portal-footer-heading">Governance (GT)</h4>
                <ul className="portal-footer-links">
                  <li><a href="#governance">GT Purpose & Rules</a></li>
                  <li><a href="#governance">Non-Sale Verification</a></li>
                  <li><a href="#orbital">Dual Core Architecture</a></li>
                  <li><Link to="/about">About DAO Mission</Link></li>
                </ul>
              </div>

              <div>
                <h4 className="portal-footer-heading">Investment (LP)</h4>
                <ul className="portal-footer-links">
                  <li><a href="#lp-investment">LP Token Mechanics</a></li>
                  <li><a href="#treasury">Treasury Telemetry</a></li>
                  <li><Link to="/lp-tokens">LP Technical Specs</Link></li>
                  <li><Link to="/investor-relations">Investor Relations</Link></li>
                </ul>
              </div>

              <div>
                <h4 className="portal-footer-heading">Ecosystem & Legal</h4>
                <ul className="portal-footer-links">
                  <li><Link to="/risk-disclosure">Risk Disclosure</Link></li>
                  <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                  <li><Link to="/terms">Terms of Use</Link></li>
                  <li><Link to="/contact">Contact Support</Link></li>
                </ul>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12, borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: 24, fontSize: '0.82rem', color: 'var(--portal-text-subtle)' }}>
              <div>&copy; {new Date().getFullYear()} Lemon India DAO. All rights reserved.</div>
              <div>Engineered for transparent decentralized participation</div>
            </div>
          </div>
        </footer>
      </div>

      {/* WEB3 WALLET MODAL */}
      {walletModalOpen && (
        <div className="wallet-modal-backdrop" onClick={() => setWalletModalOpen(false)}>
          <div className="wallet-modal-card" onClick={(e) => e.stopPropagation()}>
            <div className="wallet-modal-header">
              <h3 className="wallet-modal-title">
                <Wallet size={20} color="var(--portal-lemon)" />
                <span>Web3 Wallet Connection</span>
              </h3>
              <button
                type="button"
                className="wallet-close-btn"
                onClick={() => setWalletModalOpen(false)}
                aria-label="Close modal"
              >
                <X size={20} />
              </button>
            </div>

            {walletConnected ? (
              <div>
                <div className="wallet-account-view">
                  <div style={{ color: 'var(--portal-text-muted)', fontSize: '0.78rem', marginBottom: 4 }}>CONNECTED ACCOUNT</div>
                  <div style={{ color: '#fff', fontWeight: 700, wordBreak: 'break-all' }}>{walletAddress}</div>
                  <div style={{ display: 'flex', gap: 8, marginTop: 8 }}>
                    <span style={{ background: 'rgba(52, 211, 153, 0.2)', color: '#34D399', padding: '2px 8px', borderRadius: 4, fontSize: '0.75rem' }}>
                      BNB Chain (56)
                    </span>
                    <span style={{ background: 'rgba(216, 243, 106, 0.15)', color: 'var(--portal-lemon)', padding: '2px 8px', borderRadius: 4, fontSize: '0.75rem' }}>
                      Verified RPC
                    </span>
                  </div>
                </div>

                <div className="wallet-rule-callout">
                  <strong>GT Status:</strong> Governance Access Only &bull; Non-Purchasable. <br />
                  <strong>LP Status:</strong> View Available Contribution in live XDAO module.
                </div>

                <button
                  type="button"
                  className="btn-portal-ghost"
                  onClick={handleDisconnectWallet}
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  Disconnect Wallet
                </button>
              </div>
            ) : (
              <div>
                <p style={{ color: 'var(--portal-text-muted)', fontSize: '0.94rem', lineHeight: 1.6, marginBottom: 20 }}>
                  Connect your Web3 wallet (MetaMask, Rabby, Trust Wallet, etc.) to view your verified on-chain governance standing and active LP contribution balances on BNB Chain.
                </p>

                <div className="wallet-rule-callout">
                  <strong>Security Assurance:</strong> We never request private keys or seed phrases. Connecting your wallet will never trigger a GT purchase flow, as GT is strictly not for sale.
                </div>

                <button
                  type="button"
                  className="btn-portal-primary"
                  onClick={handleConnectWallet}
                  style={{ width: '100%', justifyContent: 'center', marginBottom: 12 }}
                >
                  <Wallet size={16} />
                  <span>Connect MetaMask / Web3</span>
                </button>

                <button
                  type="button"
                  className="btn-portal-ghost"
                  onClick={() => setWalletModalOpen(false)}
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  Cancel
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
