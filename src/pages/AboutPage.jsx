import React from 'react';
import { Link } from 'react-router-dom';
import {
  Compass,
  Target,
  Layers,
  Wrench,
  Search,
  ExternalLink,
  Users,
  CheckCircle2,
  ShieldCheck,
  ArrowRight
} from 'lucide-react';
import NoticeBox from '../components/NoticeBox';

export default function AboutPage() {
  return (
    <div>
      {/* Header */}
      <section className="page-header dark">
        <div className="container">
          <div className="breadcrumbs">
            <Link to="/" style={{ color: 'rgba(255,255,255,0.7)' }}>Home</Link>
            <span className="separator" style={{ color: 'rgba(255,255,255,0.4)' }}>/</span>
            <span className="current" style={{ color: 'var(--color-lemon)' }}>About</span>
          </div>
          <div className="page-header-eyebrow">
            <span>Identity & Purpose</span>
          </div>
          <h1 className="page-title">About Lemon India DAO</h1>
          <p className="page-description">
            "Lemon India DAO is developing a decentralised digital ecosystem focused on software, digital services, technology, research, and community participation."
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section">
        <div className="container">
          {/* Factual Integrity Notice */}
          <NoticeBox type="info" title="Transparent Project Representation">
            Lemon India DAO believes in authentic, verifiable milestones. In alignment with our commitment to transparency, we do not fabricate staff profiles, corporate accreditations, or unreleased partnerships. Everything detailed here reflects our verified infrastructure, current software products, and active development roadmap.
          </NoticeBox>

          {/* Section: Our Vision & Mission */}
          <div className="grid-2" style={{ margin: '48px 0' }}>
            <div className="card">
              <div className="card-icon">
                <Compass size={26} />
              </div>
              <h2 style={{ fontSize: '1.65rem', marginBottom: '14px' }}>Our Vision</h2>
              <p className="card-desc">
                Our vision is to develop useful, accessible digital products while exploring decentralized approaches to collaboration, technology governance, and digital sovereignty. We believe software should serve people with clarity, dignity, and resilience, originating from India and contributing to the open global internet.
              </p>
              <div style={{ padding: '14px 18px', background: '#F4F7F1', borderRadius: 'var(--radius-md)', borderLeft: '3px solid var(--color-primary)' }}>
                <span style={{ fontSize: '0.92rem', fontWeight: 600, color: 'var(--color-forest)' }}>
                  "Build in India. Create together. Grow through decentralisation."
                </span>
              </div>
            </div>

            <div className="card">
              <div className="card-icon">
                <Target size={26} />
              </div>
              <h2 style={{ fontSize: '1.65rem', marginBottom: '14px' }}>Our Mission</h2>
              <p className="card-desc">
                Our mission is centered on practical execution: designing accessible digital services, engineering robust backend infrastructure, maintaining an experimental environment for technical research, and building community-aligned participation models that give contributors transparent insight into project growth.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: 'auto' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem' }}>
                  <CheckCircle2 size={16} color="var(--color-primary)" />
                  <span>Lowering digital friction through intuitive products</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem' }}>
                  <CheckCircle2 size={16} color="var(--color-primary)" />
                  <span>Transparent multi-sig treasury governance on BNB Chain</span>
                </div>
              </div>
            </div>
          </div>

          {/* Section: Our Areas of Work */}
          <div style={{ margin: '72px 0 48px' }}>
            <div className="section-heading-wrap text-left">
              <span className="section-eyebrow">Domains of Operation</span>
              <h2 className="section-title">Our Areas of Work</h2>
              <p className="section-subtitle">
                How our activities are organized across products, software engineering, technical inquiry, and governance.
              </p>
            </div>

            <div className="grid-4">
              <div className="card">
                <h3 style={{ fontSize: '1.25rem', marginBottom: '10px', color: 'var(--color-primary)' }}>Digital Products</h3>
                <p style={{ fontSize: '0.92rem', lineHeight: 1.6 }}>
                  Directly solving information retrieval and online utility needs. Flagship product Hind.com is built as an accessible discovery tool designed without dark patterns.
                </p>
              </div>

              <div className="card">
                <h3 style={{ fontSize: '1.25rem', marginBottom: '10px', color: 'var(--color-primary)' }}>Software & Infra</h3>
                <p style={{ fontSize: '0.92rem', lineHeight: 1.6 }}>
                  Engineering distributed servers, high-availability caching tiers, smart contract integrations, and security architectures that ensure uninterrupted digital services.
                </p>
              </div>

              <div className="card">
                <h3 style={{ fontSize: '1.25rem', marginBottom: '10px', color: 'var(--color-primary)' }}>Research & Innovation</h3>
                <p style={{ fontSize: '0.92rem', lineHeight: 1.6 }}>
                  Investigating cryptographic protocols, decentralized identifier standards, decentralized storage networks, and tokenized utility models.
                </p>
              </div>

              <div className="card">
                <h3 style={{ fontSize: '1.25rem', marginBottom: '10px', color: 'var(--color-primary)' }}>Community Participation</h3>
                <p style={{ fontSize: '0.92rem', lineHeight: 1.6 }}>
                  Fostering an inclusive environment where developers, testers, and participants can evaluate work, review proposals, and support technical initiatives.
                </p>
              </div>
            </div>
          </div>

          {/* Section: How We Approach Development */}
          <div className="card" style={{ background: '#FAFBF7', border: '1px solid var(--color-border)', padding: '44px', margin: '48px 0' }}>
            <h2 style={{ fontSize: '1.8rem', marginBottom: '16px' }}>How We Approach Development</h2>
            <p style={{ fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '24px' }}>
              We reject the unsustainable cycle of excessive speculative promises common in early-stage Web3. Instead, our development methodology is built on:
            </p>

            <div className="grid-3">
              <div>
                <h4 style={{ color: 'var(--color-forest)', marginBottom: '8px' }}>Experimentation</h4>
                <p style={{ fontSize: '0.92rem', lineHeight: 1.6 }}>
                  Testing hypotheses in live sandboxes, measuring actual user utility, and iterating rapidly based on observed real-world behavior.
                </p>
              </div>
              <div>
                <h4 style={{ color: 'var(--color-forest)', marginBottom: '8px' }}>Transparency</h4>
                <p style={{ fontSize: '0.92rem', lineHeight: 1.6 }}>
                  Publishing our verified smart contract addresses, platform destinations, and technical documentation openly for public review.
                </p>
              </div>
              <div>
                <h4 style={{ color: 'var(--color-forest)', marginBottom: '8px' }}>Responsible Growth</h4>
                <p style={{ fontSize: '0.92rem', lineHeight: 1.6 }}>
                  Expanding our capacity proportionally to verified project needs, avoiding premature scaling, and prioritizing sustainable operational health.
                </p>
              </div>
            </div>
          </div>

          {/* Section: Our Ecosystem & Hind.com */}
          <div style={{ margin: '64px 0' }}>
            <h2 style={{ fontSize: '1.8rem', marginBottom: '16px' }}>Our Ecosystem</h2>
            <p style={{ fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '24px' }}>
              The central active public project within the Lemon India DAO ecosystem is <strong>Hind.com</strong>, an online search and discovery engine. Other initiatives in infrastructure and distributed protocols are currently undergoing active architecture planning and internal prototyping.
            </p>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <a href="https://cyan-rosy-rho.vercel.app/Hind-main/index.html" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">
                <span>Visit Hind.com</span>
                <ExternalLink size={14} />
              </a>
              <Link to="/products" className="btn btn-secondary btn-sm">
                <span>Browse Products Directory</span>
              </Link>
            </div>
          </div>

          {/* Section: Participation */}
          <div className="card" style={{ background: 'linear-gradient(135deg, var(--color-forest) 0%, #174E36 100%)', color: '#fff', padding: '40px' }}>
            <h2 style={{ fontSize: '1.75rem', color: '#fff', marginBottom: '12px' }}>Participating in Lemon India DAO</h2>
            <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.02rem', lineHeight: 1.6, marginBottom: '24px' }}>
              Whether you are an engineer interested in open protocols, a community tester evaluating Hind.com, or a participant reviewing DAO governance on XDAO, you can connect with us directly.
            </p>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <a
                href="https://app.xdao.app/56/dao/0x4deaff5873536f7510d29da4fbc0621629d77fc1?tab=Info"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-lemon btn-sm"
              >
                <span>Inspect DAO on XDAO</span>
                <ExternalLink size={14} />
              </a>
              <Link to="/contact" className="btn btn-outline-lemon btn-sm">
                <span>Contact Project</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
