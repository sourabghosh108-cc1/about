import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ExternalLink,
  Search,
  Cpu,
  Microscope,
  Users,
  Layers,
  Coins,
  ShieldAlert,
  ChevronDown,
  Sparkles,
  Compass,
  CheckCircle,
  HelpCircle,
  Network
} from 'lucide-react';
import ContractAddressBox from '../components/ContractAddressBox';
import NoticeBox from '../components/NoticeBox';

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      q: 'What is Lemon India DAO?',
      a: 'Lemon India DAO is a decentralised digital ecosystem focused on building accessible software products, exploring next-generation digital infrastructure, conducting open technology research, and creating transparent community-participation models.'
    },
    {
      q: 'What is Hind.com?',
      a: 'Hind.com is a digital search and discovery project within the ecosystem, dedicated to helping users find useful, accessible information with speed and privacy in mind.'
    },
    {
      q: 'What is the difference between LP tokens and LPC (Lemon Pine Coin)?',
      a: "LP tokens represent an economic ownership stake in Lemon India DAO's financial assets under XDAO's LP-token model, where financial participation is linked directly to the DAO treasury according to applicable LP accounting and configuration. LPC (Lemon Pine Coin, ticker PAAPPL) is a separate cryptocurrency created by Lemon India DAO on BNB Chain (contract 0x5843591afe21e7430115162e20c576d5ea764444). Holding LPC does not grant ownership of the DAO treasury."
    },
    {
      q: 'How can I participate in Lemon India DAO?',
      a: 'You can explore our digital products like Hind.com, review our verified smart contracts on XDAO, inspect the technical documentation, join ecosystem research discussions, or review crowdfunding parameters.'
    },
    {
      q: 'Are any financial returns or token price increases guaranteed?',
      a: 'No. All digital assets and decentralized technologies carry inherent market and technical risks. Lemon India DAO does not promise returns, profits, dividends, or guaranteed liquidity.'
    }
  ];

  return (
    <div>
      {/* SECTION 1: HERO */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-grid">
            <div>
              <div className="hero-badge">
                <Sparkles size={16} />
                <span>Decentralised Digital Ecosystem</span>
              </div>

              <h1 className="hero-title">
                Build in India. <br />
                <span className="highlight">Create together.</span>
              </h1>

              <div className="hero-supporting">
                "A decentralised digital ecosystem for products, technology, research, and community-driven innovation."
              </div>

              <p className="hero-desc">
                Lemon India DAO brings together digital products and technological experimentation under a shared vision: making useful digital services accessible while exploring new ways for people to participate in building the future.
              </p>

              <div className="hero-actions">
                <Link to="/ecosystem" className="btn btn-lemon">
                  <span>Explore the Ecosystem</span>
                  <ArrowRight size={18} />
                </Link>
                <Link to="/about" className="btn btn-outline-lemon">
                  <span>Discover Our Mission</span>
                </Link>
              </div>

              <div className="hero-trust-row">
                <div className="hero-trust-item">
                  <CheckCircle size={16} color="var(--color-lemon)" />
                  <span>Verified On-Chain Architecture</span>
                </div>
                <div className="hero-trust-item">
                  <CheckCircle size={16} color="var(--color-lemon)" />
                  <span>Public Ecosystem Research</span>
                </div>
                <div className="hero-trust-item">
                  <CheckCircle size={16} color="var(--color-lemon)" />
                  <span>Transparent Participation</span>
                </div>
              </div>
            </div>

            {/* Interconnected Digital Ecosystem Visual */}
            <div>
              <div className="hero-visual-card">
                <div className="hero-visual-header">
                  <img
                    src="/assets/lemon-india-logo.png"
                    alt="Lemon India DAO"
                    className="hero-visual-logo"
                  />
                  <div>
                    <h3 style={{ color: '#fff', fontSize: '1.35rem', marginBottom: '4px' }}>Lemon India DAO</h3>
                    <div style={{ fontSize: '0.82rem', color: 'var(--color-lemon)', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                      Ecosystem Architecture
                    </div>
                  </div>
                </div>

                <div style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.75)', lineHeight: 1.5, marginBottom: '16px' }}>
                  An interconnected network coordinating product development, technology research, open infrastructure, and decentralized governance.
                </div>

                <div className="hero-nodes-grid">
                  <div className="hero-node">
                    <Search size={18} color="var(--color-lemon)" style={{ marginBottom: 6 }} />
                    <h5>Digital Products</h5>
                    <p>Hind.com search & accessible utilities</p>
                  </div>
                  <div className="hero-node">
                    <Cpu size={18} color="var(--color-lemon)" style={{ marginBottom: 6 }} />
                    <h5>Infrastructure</h5>
                    <p>Decentralised protocols & nodes</p>
                  </div>
                  <div className="hero-node">
                    <Microscope size={18} color="var(--color-lemon)" style={{ marginBottom: 6 }} />
                    <h5>Tech Research</h5>
                    <p>Open standards & smart systems</p>
                  </div>
                  <div className="hero-node">
                    <Users size={18} color="var(--color-lemon)" style={{ marginBottom: 6 }} />
                    <h5>Community DAO</h5>
                    <p>Transparent governance on XDAO</p>
                  </div>
                </div>

                <div style={{ marginTop: '24px', paddingTop: '18px', borderTop: '1px solid rgba(255,255,255,0.1)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.6)' }}>BNB Chain Ecosystem</span>
                  <a
                    href="https://app.xdao.app/56/dao/0x4deaff5873536f7510d29da4fbc0621629d77fc1?tab=Info"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontSize: '0.82rem', color: 'var(--color-lemon)', display: 'inline-flex', alignItems: 'center', gap: 4 }}
                  >
                    View DAO on XDAO <ExternalLink size={12} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: ECOSYSTEM OVERVIEW */}
      <section className="section">
        <div className="container">
          <div className="section-heading-wrap">
            <span className="section-eyebrow">The Foundation</span>
            <h2 className="section-title">One Ecosystem. Multiple Possibilities.</h2>
            <p className="section-subtitle">
              Lemon India DAO is organized into four interconnected domains that foster purposeful development, transparent experimentation, and long-term ecosystem value.
            </p>
          </div>

          <div className="grid-4">
            <div className="card">
              <div className="card-icon">
                <Search size={26} />
              </div>
              <h3 className="card-title">Digital Products</h3>
              <p className="card-desc">
                Building practical consumer-facing applications that solve everyday digital needs. Anchored by Hind.com, our product suite emphasizes accessibility, simplicity, and user dignity.
              </p>
              <div style={{ marginTop: 'auto' }}>
                <span className="badge badge-status-live">Hind.com Live</span>
              </div>
            </div>

            <div className="card">
              <div className="card-icon">
                <Cpu size={26} />
              </div>
              <h3 className="card-title">Technology & Infrastructure</h3>
              <p className="card-desc">
                Designing resilient, decentralized backend infrastructure, secure smart contracts, distributed hosting models, and developer frameworks for high availability.
              </p>
              <div style={{ marginTop: 'auto' }}>
                <span className="badge badge-status-dev">In Active Development</span>
              </div>
            </div>

            <div className="card">
              <div className="card-icon">
                <Microscope size={26} />
              </div>
              <h3 className="card-title">Research & Innovation</h3>
              <p className="card-desc">
                Exploring emergent models in decentralized collaboration, token economics, zero-knowledge proofs, and sovereign web protocols to guide future product design.
              </p>
              <div style={{ marginTop: 'auto' }}>
                <span className="badge badge-status-dev">Ongoing Research</span>
              </div>
            </div>

            <div className="card">
              <div className="card-icon">
                <Users size={26} />
              </div>
              <h3 className="card-title">Community & Participation</h3>
              <p className="card-desc">
                Enabling builders, contributors, and technology enthusiasts to engage with transparent DAO governance structures and collective development milestones.
              </p>
              <div style={{ marginTop: 'auto' }}>
                <span className="badge badge-status-live">On-Chain Governance</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: FEATURED PRODUCT — HIND.COM */}
      <section className="section section-alt" style={{ borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container">
          <div className="featured-product-grid">
            <div>
              <div className="badge badge-green" style={{ marginBottom: '14px' }}>
                Flagship Initiative
              </div>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '18px' }}>Discover Hind.com</h2>
              <p style={{ fontSize: '1.18rem', color: 'var(--color-forest)', fontWeight: 600, marginBottom: '14px', lineHeight: 1.5 }}>
                "Hind.com is a digital search and discovery project focused on helping people find useful information through an accessible digital experience."
              </p>
              <p style={{ marginBottom: '24px' }}>
                Hind.com serves as our primary user-facing digital portal. Designed with modern web standards, it demonstrates our commitment to creating technology that is straightforward, reliable, and respectful of user intent.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '32px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <CheckCircle size={18} color="var(--color-primary)" />
                  <span style={{ fontSize: '0.96rem', fontWeight: 600 }}>Fast, uncluttered search experience</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <CheckCircle size={18} color="var(--color-primary)" />
                  <span style={{ fontSize: '0.96rem', fontWeight: 600 }}>Built to respect digital privacy and speed</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <CheckCircle size={18} color="var(--color-primary)" />
                  <span style={{ fontSize: '0.96rem', fontWeight: 600 }}>Verified production domain: https://hind.com</span>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <a
                  href="https://cyan-rosy-rho.vercel.app/Hind-main/index.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  <span>Visit Hind.com</span>
                  <ExternalLink size={16} />
                </a>
                <Link to="/products" className="btn btn-secondary">
                  <span>View All Products</span>
                </Link>
              </div>
            </div>

            {/* Visual representation of Hind.com */}
            <div>
              <div className="featured-product-card card-resp-padding" style={{
                background: 'linear-gradient(135deg, #123D2A 0%, #1A523A 100%)',
                borderRadius: 'var(--radius-xl)',
                color: '#fff',
                boxShadow: 'var(--shadow-lg)',
                border: '1px solid rgba(255,255,255,0.1)'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '28px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ background: 'var(--color-lemon)', borderRadius: 'var(--radius-sm)', padding: '6px 12px', color: 'var(--color-forest)', fontWeight: 800, fontSize: '1.1rem' }}>
                      hind.com
                    </div>
                    <span style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)' }}>Discovery Engine</span>
                  </div>
                  <span className="badge badge-lemon">Verified</span>
                </div>

                <div style={{
                  background: 'rgba(255,255,255,0.08)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '24px',
                  border: '1px solid rgba(255,255,255,0.14)',
                  marginBottom: '20px'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', background: '#fff', borderRadius: 'var(--radius-full)', padding: '12px 18px', color: 'var(--color-text-muted)' }}>
                    <Search size={18} color="var(--color-primary)" />
                    <span style={{ fontSize: '0.92rem' }}>Search technology, articles, insights...</span>
                  </div>

                  <div style={{ display: 'flex', gap: '8px', marginTop: '16px', flexWrap: 'wrap' }}>
                    <span style={{ fontSize: '0.75rem', background: 'rgba(255,255,255,0.12)', padding: '4px 10px', borderRadius: 'var(--radius-full)' }}>Digital Ecosystems</span>
                    <span style={{ fontSize: '0.75rem', background: 'rgba(255,255,255,0.12)', padding: '4px 10px', borderRadius: 'var(--radius-full)' }}>Open Tech India</span>
                    <span style={{ fontSize: '0.75rem', background: 'rgba(255,255,255,0.12)', padding: '4px 10px', borderRadius: 'var(--radius-full)' }}>Decentralised Storage</span>
                  </div>
                </div>

                <p style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.5, margin: 0 }}>
                  Connecting users directly to reliable information without unnecessary tracking or algorithmic friction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: HOW THE ECOSYSTEM WORKS */}
      <section className="section">
        <div className="container">
          <div className="section-heading-wrap">
            <span className="section-eyebrow">Mechanics</span>
            <h2 className="section-title">How the Ecosystem Works</h2>
            <p className="section-subtitle">
              A structured operational cycle coordinating research, product delivery, transparent funding, and community engagement.
            </p>
          </div>

          <div className="grid-3">
            <div className="card">
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '1.2rem', fontWeight: 800, color: 'var(--color-primary)', background: '#E2F3E9', padding: '4px 10px', borderRadius: 'var(--radius-sm)' }}>01</span>
                <h4 style={{ fontSize: '1.18rem', margin: 0 }}>Digital Product Development</h4>
              </div>
              <p className="card-desc">
                Engineering practical applications such as Hind.com to serve real users, validate technical approaches, and build self-sustaining software utilities.
              </p>
            </div>

            <div className="card">
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '1.2rem', fontWeight: 800, color: 'var(--color-primary)', background: '#E2F3E9', padding: '4px 10px', borderRadius: 'var(--radius-sm)' }}>02</span>
                <h4 style={{ fontSize: '1.18rem', margin: 0 }}>Technology & Research</h4>
              </div>
              <p className="card-desc">
                Translating architectural experiments into hardened open-source tools, resilient infrastructure, and verifiable smart contract configurations.
              </p>
            </div>

            <div className="card">
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '1.2rem', fontWeight: 800, color: 'var(--color-primary)', background: '#E2F3E9', padding: '4px 10px', borderRadius: 'var(--radius-sm)' }}>03</span>
                <h4 style={{ fontSize: '1.18rem', margin: 0 }}>DAO Participation</h4>
              </div>
              <p className="card-desc">
                Leveraging XDAO on BNB Chain for multi-signature governance, transparent treasury custody, and collective decision-making over development priorities.
              </p>
            </div>

            <div className="card">
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '1.2rem', fontWeight: 800, color: 'var(--color-primary)', background: '#E2F3E9', padding: '4px 10px', borderRadius: 'var(--radius-sm)' }}>04</span>
                <h4 style={{ fontSize: '1.18rem', margin: 0 }}>Community Involvement</h4>
              </div>
              <p className="card-desc">
                Inviting technical reviewers, contributors, and ecosystem builders to evaluate proposals, test early prototypes, and contribute to open initiatives.
              </p>
            </div>

            <div className="card">
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '1.2rem', fontWeight: 800, color: 'var(--color-primary)', background: '#E2F3E9', padding: '4px 10px', borderRadius: 'var(--radius-sm)' }}>05</span>
                <h4 style={{ fontSize: '1.18rem', margin: 0 }}>Funding & Ecosystem Growth</h4>
              </div>
              <p className="card-desc">
                Utilizing transparent crowdfunding mechanisms with clearly defined parameters to fund server infrastructure, security audits, and continuous development.
              </p>
            </div>

            <div className="card" style={{ background: 'linear-gradient(135deg, var(--color-forest) 0%, #1A523A 100%)', color: '#fff' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                <Sparkles size={24} color="var(--color-lemon)" />
                <h4 style={{ fontSize: '1.18rem', color: '#fff', margin: 0 }}>Long-Term Direction</h4>
              </div>
              <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.96rem', lineHeight: 1.6 }}>
                Focused on genuine software delivery, technical sustainability, and rigorous decentralization—not speculative hype or short-term trends.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: LP TOKENS AND LPC (CRITICAL DISTINCTION) */}
      <section className="section section-dark">
        <div className="container">
          <div className="section-heading-wrap">
            <span className="section-eyebrow">Participation Instruments</span>
            <h2 className="section-title">Understanding LP Tokens & LPC</h2>
            <p className="section-subtitle">
              Transparency is paramount: LP tokens and LPC are completely separate digital instruments with distinct mechanisms, use cases, and destinations.
            </p>
          </div>

          <NoticeBox type="dark" title="Important Separation of Instruments">
            Under XDAO's LP-token model, LP tokens represent an economic ownership stake in Lemon India DAO's financial assets, with financial participation linked directly to the DAO treasury according to applicable LP accounting and configuration. In contrast, Lemon Pine Coin (LPC) is a separate cryptocurrency created by Lemon India DAO on BNB Chain; holding LPC does not grant ownership of the DAO treasury.
          </NoticeBox>

          <div className="grid-2" style={{ marginTop: '36px' }}>
            {/* Card 1: LP Tokens */}
            <div className="card card-dark" style={{ borderTop: '4px solid var(--color-lemon)' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div className="card-icon">
                    <Layers size={24} />
                  </div>
                  <div>
                    <h3 style={{ color: '#fff', fontSize: '1.4rem', margin: 0 }}>LP Tokens</h3>
                    <span style={{ fontSize: '0.8rem', color: 'var(--color-lemon)' }}>XDAO Crowdfunding Module</span>
                  </div>
                </div>
                <span className="badge badge-lemon">DAO Crowdfunding</span>
              </div>

              <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: '0.98rem', lineHeight: 1.6, marginBottom: '20px' }}>
                Under XDAO's LP-token model, LP tokens represent an economic ownership stake in Lemon India DAO's financial assets. LP holders' financial participation is directly linked to the DAO treasury according to the configured LP accounting rules.
              </p>

              <div style={{ background: 'rgba(0,0,0,0.25)', borderRadius: 'var(--radius-md)', padding: '16px', marginBottom: '24px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0', borderBottom: '1px solid rgba(255,255,255,0.08)', fontSize: '0.88rem' }}>
                  <span style={{ color: 'rgba(255,255,255,0.7)' }}>Platform</span>
                  <span style={{ color: '#fff', fontWeight: 600 }}>XDAO Platform (BNB Chain)</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0', borderBottom: '1px solid rgba(255,255,255,0.08)', fontSize: '0.88rem' }}>
                  <span style={{ color: 'rgba(255,255,255,0.7)' }}>Purpose</span>
                  <span style={{ color: '#fff', fontWeight: 600 }}>Ecosystem & Product Funding</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0', fontSize: '0.88rem' }}>
                  <span style={{ color: 'rgba(255,255,255,0.7)' }}>Terms & Vesting</span>
                  <span style={{ color: 'var(--color-lemon)', fontWeight: 600 }}>Per Live Campaign Rules</span>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', marginTop: 'auto' }}>
                <Link to="/lp-tokens" className="btn btn-lemon btn-sm">
                  <span>LP Token Details</span>
                  <ArrowRight size={15} />
                </Link>
                <a
                  href="https://app.xdao.app/56/dao/0x4deaff5873536f7510d29da4fbc0621629d77fc1/modules/crowdfunding"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-lemon btn-sm"
                >
                  <span>View on XDAO</span>
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>

            {/* Card 2: LPC (Lemon Pine Coin) */}
            <div className="card card-dark" style={{ borderTop: '4px solid #F5C518' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <img
                    src="/assets/paappl-lpc-logo.png"
                    alt="Lemon Pine Coin Pineapple PAAPPL sticker"
                    style={{ width: '48px', height: '48px', objectFit: 'contain', background: '#000', borderRadius: 'var(--radius-sm)', padding: '4px' }}
                  />
                  <div>
                    <h3 style={{ color: '#fff', fontSize: '1.4rem', margin: 0 }}>Lemon Pine Coin</h3>
                    <span style={{ fontSize: '0.8rem', color: '#F5C518' }}>Ticker: PAAPPL / LPC</span>
                  </div>
                </div>
                <span className="badge" style={{ background: '#F5C518', color: '#000' }}>BNB Chain Token</span>
              </div>

              <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: '0.98rem', lineHeight: 1.6, marginBottom: '16px' }}>
                Lemon Pine Coin (ticker PAAPPL) is a separate cryptocurrency created by Lemon India DAO on BNB Chain. Holding LPC is independent of the crowdfunding mechanism and does not grant ownership of the DAO treasury.
              </p>

              <ContractAddressBox
                address="0x5843591afe21e7430115162e20c576d5ea764444"
                label="Verified LPC Contract"
                network="BNB Chain"
                explorerUrl="https://bscscan.com/token/0x5843591afe21e7430115162e20c576d5ea764444"
                dark={true}
              />

              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', marginTop: 'auto' }}>
                <Link to="/lpc" className="btn btn-sm" style={{ background: '#F5C518', color: '#000', fontWeight: 700 }}>
                  <span>LPC Specifications</span>
                  <ArrowRight size={15} />
                </Link>
                <a
                  href="https://four.meme/en/token/0x5843591afe21e7430115162e20c576d5ea764444"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-lemon btn-sm"
                >
                  <span>Trade on four.meme</span>
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: MISSION AND PRINCIPLES */}
      <section className="section">
        <div className="container">
          <div className="section-heading-wrap">
            <span className="section-eyebrow">Guiding Values</span>
            <h2 className="section-title">Mission & Principles</h2>
            <p className="section-subtitle">
              We operate according to grounded principles that prioritize genuine software utility, responsible engineering, and openness over speculation.
            </p>
          </div>

          <div className="grid-3">
            <div className="card">
              <h3 style={{ fontSize: '1.25rem', marginBottom: '12px', color: 'var(--color-primary)' }}>Accessibility</h3>
              <p className="card-desc">
                Digital technology must be usable and straightforward for real people. We build interfaces and tools that lower barriers to entry.
              </p>
            </div>

            <div className="card">
              <h3 style={{ fontSize: '1.25rem', marginBottom: '12px', color: 'var(--color-primary)' }}>Openness</h3>
              <p className="card-desc">
                Transparent operations, verifiable on-chain configurations, and public research documentation form the foundation of our accountability.
              </p>
            </div>

            <div className="card">
              <h3 style={{ fontSize: '1.25rem', marginBottom: '12px', color: 'var(--color-primary)' }}>Experimentation</h3>
              <p className="card-desc">
                Technological progress demands testing new paradigms—including decentralized systems, distributed storage, and novel user experiences.
              </p>
            </div>

            <div className="card">
              <h3 style={{ fontSize: '1.25rem', marginBottom: '12px', color: 'var(--color-primary)' }}>Community Participation</h3>
              <p className="card-desc">
                A decentralized ecosystem thrives when developers, researchers, and users have structured avenues to collaborate and guide direction.
              </p>
            </div>

            <div className="card">
              <h3 style={{ fontSize: '1.25rem', marginBottom: '12px', color: 'var(--color-primary)' }}>Responsible Development</h3>
              <p className="card-desc">
                We avoid exaggerated marketing claims, speculative hype, and premature promises. We represent project status accurately and acknowledge challenges.
              </p>
            </div>

            <div className="card">
              <h3 style={{ fontSize: '1.25rem', marginBottom: '12px', color: 'var(--color-primary)' }}>Independent Resilience</h3>
              <p className="card-desc">
                Architecting infrastructure with redundancy and decentralized fallbacks to preserve availability and user sovereignty over time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: PARTICIPATION PATHWAYS */}
      <section className="section section-alt" style={{ borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container">
          <div className="section-heading-wrap">
            <span className="section-eyebrow">Take Action</span>
            <h2 className="section-title">How to Participate</h2>
            <p className="section-subtitle">
              Clear, transparent pathways to explore our work, test our tools, review governance, and connect with the project.
            </p>
          </div>

          <div className="grid-3">
            <div className="card" style={{ textAlign: 'center', alignItems: 'center' }}>
              <div className="card-icon" style={{ margin: '0 auto 16px' }}>
                <Search size={24} />
              </div>
              <h4 style={{ fontSize: '1.18rem', marginBottom: '8px' }}>Explore Hind.com</h4>
              <p className="card-desc">
                Test our live search and discovery platform to experience our practical product engineering firsthand.
              </p>
              <a href="https://cyan-rosy-rho.vercel.app/Hind-main/index.html" target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-sm">
                <span>Visit Hind.com</span>
                <ExternalLink size={14} />
              </a>
            </div>

            <div className="card" style={{ textAlign: 'center', alignItems: 'center' }}>
              <div className="card-icon" style={{ margin: '0 auto 16px' }}>
                <Network size={24} />
              </div>
              <h4 style={{ fontSize: '1.18rem', marginBottom: '8px' }}>Learn About the DAO</h4>
              <p className="card-desc">
                Inspect our verified smart contracts, signer thresholds, and treasury structure on the XDAO platform.
              </p>
              <a href="https://app.xdao.app/56/dao/0x4deaff5873536f7510d29da4fbc0621629d77fc1?tab=Info" target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-sm">
                <span>Open XDAO Portal</span>
                <ExternalLink size={14} />
              </a>
            </div>

            <div className="card" style={{ textAlign: 'center', alignItems: 'center' }}>
              <div className="card-icon" style={{ margin: '0 auto 16px' }}>
                <HelpCircle size={24} />
              </div>
              <h4 style={{ fontSize: '1.18rem', marginBottom: '8px' }}>Review Crowdfunding</h4>
              <p className="card-desc">
                Read transparent documentation regarding LP token parameters, vesting rules, and associated risks.
              </p>
              <Link to="/lp-tokens" className="btn btn-secondary btn-sm">
                <span>Review Terms</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: FAQ ACCORDION PREVIEW */}
      <section className="section">
        <div className="container">
          <div className="section-heading-wrap">
            <span className="section-eyebrow">Clear Answers</span>
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle">
              Direct, factual answers to essential questions regarding Lemon India DAO, Hind.com, and participation.
            </p>
          </div>

          <div className="faq-list">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div key={index} className={`faq-item ${isOpen ? 'open' : ''}`}>
                  <button
                    type="button"
                    className="faq-question-btn"
                    onClick={() => toggleFaq(index)}
                    aria-expanded={isOpen}
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      size={18}
                      style={{
                        transform: isOpen ? 'rotate(180deg)' : 'none',
                        transition: 'transform 0.2s',
                        color: isOpen ? 'var(--color-primary)' : 'inherit'
                      }}
                    />
                  </button>
                  {isOpen && (
                    <div className="faq-answer">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div style={{ textAlign: 'center', marginTop: '36px' }}>
            <Link to="/faq" className="btn btn-secondary">
              <span>View Full FAQ Directory</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 9: FINAL CTA */}
      <section className="section section-dark" style={{ background: 'linear-gradient(135deg, #0A2619 0%, #123D2A 100%)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div style={{ maxWidth: '780px', margin: '0 auto' }}>
            <span className="badge badge-lemon" style={{ marginBottom: '18px' }}>
              Building the Future
            </span>
            <h2 style={{ fontSize: '3rem', color: '#fff', marginBottom: '18px' }}>
              The Future Is Built Together.
            </h2>
            <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.85)', lineHeight: 1.6, marginBottom: '36px' }}>
              "Explore the products, discover the vision, and follow the development of Lemon India DAO."
            </p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/ecosystem" className="btn btn-lemon">
                <span>Explore the Ecosystem</span>
                <ArrowRight size={18} />
              </Link>
              <a
                href="https://cyan-rosy-rho.vercel.app/Hind-main/index.html"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-lemon"
              >
                <span>Visit Hind.com</span>
                <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
