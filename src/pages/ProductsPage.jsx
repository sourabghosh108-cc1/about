import React from 'react';
import { Link } from 'react-router-dom';
import { Search, ExternalLink, Sparkles, Layers, ShieldCheck, ArrowRight, Clock, AlertCircle, GraduationCap, Gamepad2, Cpu, Award } from 'lucide-react';
import NoticeBox from '../components/NoticeBox';

export default function ProductsPage() {
  return (
    <div>
      {/* Header */}
      <section className="page-header dark">
        <div className="container">
          <div className="breadcrumbs">
            <Link to="/" style={{ color: 'rgba(255,255,255,0.7)' }}>Home</Link>
            <span className="separator" style={{ color: 'rgba(255,255,255,0.4)' }}>/</span>
            <span className="current" style={{ color: 'var(--color-lemon)' }}>Products</span>
          </div>
          <div className="page-header-eyebrow">
            <span>Product Directory</span>
          </div>
          <h1 className="page-title">Products & Digital Experiences</h1>
          <p className="page-description">
            Discover active consumer applications, verified digital experiences, and evolving software utilities built by and supported within Lemon India DAO.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section">
        <div className="container">
          {/* Featured Product: Hind.com */}
          <div className="card card-resp-padding" style={{ marginBottom: '48px', border: '2px solid #DCE6D7', boxShadow: 'var(--shadow-md)' }}>
            <div className="products-hero-grid">
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
                  <span className="badge badge-status-live">Live & Operational</span>
                  <span className="badge badge-lemon">Flagship Product</span>
                </div>

                <h2 style={{ fontSize: '2.4rem', marginBottom: '12px' }}>Hind.com</h2>
                <div style={{ fontSize: '1.15rem', color: 'var(--color-primary)', fontWeight: 600, marginBottom: '16px' }}>
                  Digital Search & Discovery Engine
                </div>

                <p style={{ fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '20px' }}>
                  "A digital search and discovery project focused on accessible information and digital services." Hind.com was designed to cut through bloated, ad-heavy search layouts, delivering responsive information discovery for Indian users and the global internet.
                </p>

                <div className="products-features-grid">
                  <div style={{ background: '#F5F8F2', padding: '14px', borderRadius: 'var(--radius-md)' }}>
                    <div style={{ fontWeight: 700, fontSize: '0.92rem', color: 'var(--color-forest)', marginBottom: '4px' }}>Accessible Interface</div>
                    <div style={{ fontSize: '0.82rem', color: 'var(--color-text-muted)' }}>High-readability typography and lightweight HTML footprint.</div>
                  </div>
                  <div style={{ background: '#F5F8F2', padding: '14px', borderRadius: 'var(--radius-md)' }}>
                    <div style={{ fontWeight: 700, fontSize: '0.92rem', color: 'var(--color-forest)', marginBottom: '4px' }}>Respectful by Design</div>
                    <div style={{ fontSize: '0.82rem', color: 'var(--color-text-muted)' }}>Zero deceptive tracking scripts or intrusive surveillance telemetry.</div>
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
                  <a
                    href="https://cyan-rosy-rho.vercel.app/Hind-main/index.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary"
                  >
                    <span>Inspect Public Endpoint</span>
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>

              {/* Visual Preview */}
              <div>
                <div style={{
                  background: 'linear-gradient(135deg, #123D2A 0%, #0D2D1F 100%)',
                  borderRadius: 'var(--radius-xl)',
                  padding: '36px',
                  color: '#fff',
                  border: '1px solid rgba(255,255,255,0.12)'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '24px' }}>
                    <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#FF5F56' }} />
                    <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#FFBD2E' }} />
                    <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#27C93F' }} />
                    <span style={{ marginLeft: 'auto', fontSize: '0.78rem', color: 'rgba(255,255,255,0.5)', fontFamily: 'var(--font-mono)' }}>https://hind.com</span>
                  </div>

                  <div style={{ textAlign: 'center', padding: '24px 0' }}>
                    <h3 style={{ fontSize: '2.2rem', color: 'var(--color-lemon)', fontFamily: 'var(--font-display)', marginBottom: '8px' }}>
                      hind.com
                    </h3>
                    <p style={{ fontSize: '0.86rem', color: 'rgba(255,255,255,0.7)', margin: 0 }}>
                      Fast, Accessible Digital Information
                    </p>
                  </div>

                  <div style={{ background: '#fff', borderRadius: 'var(--radius-full)', padding: '10px 16px', display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--color-text-dark)', marginTop: '12px' }}>
                    <Search size={16} color="var(--color-primary)" />
                    <span style={{ fontSize: '0.85rem', color: '#666' }}>explore decentralised technology...</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Featured Product: Vidyaverse AI */}
          <div className="card card-resp-padding" style={{ marginBottom: '48px', border: '2px solid rgba(216, 243, 106, 0.4)', boxShadow: 'var(--shadow-md)', background: '#FAFDF6' }}>
            <div className="products-hero-grid">
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
                  <span className="badge badge-status-live">Live Web App</span>
                  <span className="badge badge-lemon">AI & Education</span>
                </div>

                <h2 style={{ fontSize: '2.4rem', marginBottom: '12px' }}>Vidyaverse AI</h2>
                <div style={{ fontSize: '1.15rem', color: 'var(--color-primary)', fontWeight: 600, marginBottom: '16px' }}>
                  AI-Powered Gamified Learning Platform
                </div>

                <p style={{ fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '20px' }}>
                  "Where you begin should never determine how far you can go." Vidyaverse AI combines AI-powered study concepts, gamified progression quests, and diverse multi-modal learning experiences to make quality education engaging and accessible for students across India and worldwide.
                </p>

                <div className="products-features-grid">
                  <div style={{ background: '#F0F6EB', padding: '14px', borderRadius: 'var(--radius-md)' }}>
                    <div style={{ fontWeight: 700, fontSize: '0.92rem', color: 'var(--color-forest)', marginBottom: '4px' }}>Gamified Learning Quests</div>
                    <div style={{ fontSize: '0.82rem', color: 'var(--color-text-muted)' }}>Interactive study streaks, concept milestones, and curiosity missions.</div>
                  </div>
                  <div style={{ background: '#F0F6EB', padding: '14px', borderRadius: 'var(--radius-md)' }}>
                    <div style={{ fontWeight: 700, fontSize: '0.92rem', color: 'var(--color-forest)', marginBottom: '4px' }}>On-Device AI Readiness</div>
                    <div style={{ fontSize: '0.82rem', color: 'var(--color-text-muted)' }}>Explored Qualcomm Hexagon™ NPU optimization for low-latency offline edge tutoring.</div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                  <Link to="/vidyaverse" className="btn btn-primary">
                    <span>Explore Vidyaverse Section</span>
                    <ArrowRight size={16} />
                  </Link>
                  <a
                    href="https://vidyaverse-ai-study.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary"
                  >
                    <span>Launch Live App</span>
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>

              {/* Visual Preview */}
              <div>
                <div style={{
                  background: 'linear-gradient(135deg, #071E14 0%, #0F3323 100%)',
                  borderRadius: 'var(--radius-xl)',
                  padding: '36px',
                  color: '#fff',
                  border: '1px solid rgba(216,243,106,0.25)'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '24px' }}>
                    <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#FF5F56' }} />
                    <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#FFBD2E' }} />
                    <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#27C93F' }} />
                    <span style={{ marginLeft: 'auto', fontSize: '0.78rem', color: 'var(--color-lemon)', fontFamily: 'var(--font-mono)' }}>vidyaverse-ai-study.vercel.app</span>
                  </div>

                  <div style={{ textAlign: 'center', padding: '20px 0' }}>
                    <div style={{ display: 'inline-flex', padding: 12, borderRadius: '50%', background: 'rgba(216,243,106,0.15)', color: 'var(--color-lemon)', marginBottom: 12 }}>
                      <GraduationCap size={32} />
                    </div>
                    <h3 style={{ fontSize: '2rem', color: '#fff', fontFamily: 'var(--font-display)', marginBottom: '8px' }}>
                      Vidyaverse AI
                    </h3>
                    <p style={{ fontSize: '0.86rem', color: 'rgba(255,255,255,0.7)', margin: 0 }}>
                      Democratizing High-Quality Interactive Education
                    </p>
                  </div>

                  <div style={{ background: 'rgba(255,255,255,0.08)', borderRadius: 'var(--radius-md)', padding: '14px', marginTop: '16px', border: '1px solid rgba(255,255,255,0.1)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.8rem', color: 'var(--color-lemon)' }}>
                      <span>Verified Achievements</span>
                      <Award size={14} />
                    </div>
                    <div style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.85)', marginTop: 6 }}>
                      • Qualcomm Snapdragon AI Lab • IIT Bhubaneswar Winner • Kaggle & DeepMind Agents for Good
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Genuine Status Disclosure Regarding Pipeline */}
          <div className="section-heading-wrap text-left" style={{ margin: '48px 0 24px' }}>
            <span className="section-eyebrow">Development Pipeline</span>
            <h2 className="section-title">Evolving Initiatives & Upcoming Utilities</h2>
            <p className="section-subtitle">
              We uphold strict standards of truthfulness. We only present live products when they are actually operational, and clearly label upcoming services.
            </p>
          </div>

          <div className="grid-2">
            <div className="card">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                <span className="badge badge-status-dev">In Development</span>
                <span style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>Infrastructure</span>
              </div>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '8px' }}>Decentralized Web Gateway</h3>
              <p style={{ fontSize: '0.94rem', lineHeight: 1.6, marginBottom: '18px' }}>
                An edge proxy designed to route traffic securely between traditional DNS endpoints and decentralized storage protocols, minimizing dependency on centralized cloud hosts.
              </p>
              <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.84rem', color: 'var(--color-text-muted)' }}>
                <Clock size={14} />
                <span>Status: Architecture benchmarking & prototype testing</span>
              </div>
            </div>

            <div className="card">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                <span className="badge badge-status-planned">Planned Research</span>
                <span style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>Community Tools</span>
              </div>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '8px' }}>DAO Transparency Dashboard</h3>
              <p style={{ fontSize: '0.94rem', lineHeight: 1.6, marginBottom: '18px' }}>
                A dedicated analytics visualizer reading directly from BNB Chain RPCs to display on-chain treasury transactions, multi-sig signoffs, and milestone verifications.
              </p>
              <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.84rem', color: 'var(--color-text-muted)' }}>
                <Clock size={14} />
                <span>Status: Requirements definition & RPC schema design</span>
              </div>
            </div>
          </div>

          {/* Notice: Product Integrity */}
          <NoticeBox type="info" title="Commitment Against Vaporware" style={{ marginTop: '36px' }}>
            Lemon India DAO will never list fabricated products, invented metrics, or imaginary partner software. When a new product reaches alpha testing, it will be posted here with verifiable access endpoints.
          </NoticeBox>
        </div>
      </section>
    </div>
  );
}
