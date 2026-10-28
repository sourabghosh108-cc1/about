import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Sparkles,
  ExternalLink,
  Target,
  Gamepad2,
  Cpu,
  BookOpen,
  Trophy,
  Award,
  ArrowRight,
  Maximize2
} from 'lucide-react';

export default function VidyaversePage() {
  const [showEmbeddedPreview, setShowEmbeddedPreview] = useState(false);

  return (
    <div>
      {/* Page Header */}
      <section className="page-header dark" style={{ background: 'linear-gradient(165deg, #071E14 0%, #0E3524 50%, #0B291C 100%)' }}>
        <div className="container">
          <div className="breadcrumbs">
            <Link to="/" style={{ color: 'rgba(255,255,255,0.7)' }}>Home</Link>
            <span className="separator" style={{ color: 'rgba(255,255,255,0.4)' }}>/</span>
            <Link to="/products" style={{ color: 'rgba(255,255,255,0.7)' }}>Products</Link>
            <span className="separator" style={{ color: 'rgba(255,255,255,0.4)' }}>/</span>
            <span className="current" style={{ color: 'var(--color-lemon)' }}>Vidyaverse AI</span>
          </div>

          <div className="page-header-eyebrow">
            <span>AI-Powered Gamified Education</span>
          </div>

          <h1 className="page-title" style={{ color: '#fff' }}>
            Vidyaverse AI
          </h1>

          <p className="page-description" style={{ color: 'rgba(255,255,255,0.85)', maxWidth: 780 }}>
            An online, AI-powered learning platform combining gamification and diverse learning experiences to make quality education genuinely engaging, interactive, and universally accessible.
          </p>

          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginTop: 28 }}>
            <a
              href="https://vidyaverse-ai-study.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-lemon"
            >
              <span>Launch Live Study App</span>
              <ExternalLink size={16} />
            </a>
            <button
              type="button"
              onClick={() => setShowEmbeddedPreview(!showEmbeddedPreview)}
              className="btn btn-outline-lemon"
            >
              <span>{showEmbeddedPreview ? 'Hide App Preview' : 'Interactive App Preview'}</span>
              <Maximize2 size={16} />
            </button>
            <a
              href="#purpose"
              className="btn btn-secondary"
              style={{ background: 'rgba(255,255,255,0.1)', color: '#fff', borderColor: 'rgba(255,255,255,0.2)' }}
            >
              <span>Why Vidyaverse Exists</span>
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* Optional Interactive Live Frame Preview */}
      {showEmbeddedPreview && (
        <section className="section" style={{ background: '#06170F', padding: '36px 0', borderBottom: '1px solid rgba(216,243,106,0.2)' }}>
          <div className="container">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <span className="badge badge-lemon">Live Interactive Sandbox</span>
                <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.86rem', fontFamily: 'var(--font-mono)' }}>
                  https://vidyaverse-ai-study.vercel.app/
                </span>
              </div>
              <a
                href="https://vidyaverse-ai-study.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-lemon btn-sm"
              >
                <span>Open in New Tab</span>
                <ExternalLink size={14} />
              </a>
            </div>

            <div className="vidyaverse-preview-iframe-wrapper" style={{
              borderRadius: 'var(--radius-lg)',
              overflow: 'hidden',
              border: '2px solid rgba(216, 243, 106, 0.3)',
              boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
              background: '#0F3323',
              height: '650px'
            }}>
              <iframe
                src="https://vidyaverse-ai-study.vercel.app/"
                title="Vidyaverse AI Study Portal"
                width="100%"
                height="100%"
                style={{ border: 'none', display: 'block' }}
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              />
            </div>
          </div>
        </section>
      )}

      {/* Main Content */}
      <section className="section" id="purpose">
        <div className="container">
          {/* Eyebrow & Headline Block */}
          <div className="section-heading-wrap text-left" style={{ marginBottom: 40 }}>
            <span className="section-eyebrow">WHY VIDYAVERSE EXISTS</span>
            <h2 className="section-title" style={{ fontSize: '2.8rem' }}>
              Your Background Shouldn't Define Your Potential.
            </h2>
            <p className="section-subtitle" style={{ fontSize: '1.2rem', color: 'var(--color-primary)', fontWeight: 600 }}>
              "Where you begin should never determine how far you can go."
            </p>
          </div>

          {/* Narrative & Mission Grid */}
          <div className="grid-2" style={{ gap: 40, alignItems: 'start', marginBottom: 54 }}>
            <div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: 16, color: 'var(--color-forest)' }}>
                The Educational Challenge
              </h3>
              <p style={{ fontSize: '1.05rem', lineHeight: 1.8, marginBottom: 20 }}>
                Across India and around the world, millions of students have the ambition to achieve more but lack access to the educational resources, guidance, and opportunities they need. Many face barriers such as expensive private coaching, limited access to quality educational infrastructure, financial constraints, and outdated learning experiences that fail to keep them engaged.
              </p>
              <p style={{ fontSize: '1.05rem', lineHeight: 1.8, marginBottom: 24 }}>
                Learning should not be a privilege reserved for those who can afford the best resources. Every learner deserves the opportunity to discover their potential. A student's potential should never be limited by their financial background or access to educational opportunities.
              </p>

              {/* Founder Supporting Note */}
              <div style={{
                background: '#F6F9F3',
                borderLeft: '4px solid var(--color-primary)',
                padding: '18px 22px',
                borderRadius: '0 var(--radius-md) var(--radius-md) 0',
                fontSize: '0.96rem',
                color: 'var(--color-text-dark)',
                lineHeight: 1.65,
                fontStyle: 'italic'
              }}>
                "Our founder experienced similar educational challenges firsthand. That experience helped inspire the vision behind Vidyaverse AI, but the mission extends far beyond any one person's story. It is about the millions of learners who deserve better opportunities."
              </div>
            </div>

            {/* Mission & Core Message Cards */}
            <div>
              <div className="card" style={{
                background: 'linear-gradient(135deg, #123D2A 0%, #1A523A 100%)',
                color: '#fff',
                borderRadius: 'var(--radius-xl)',
                padding: '36px',
                boxShadow: 'var(--shadow-lg)',
                marginBottom: 24
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, color: 'var(--color-lemon)', fontWeight: 700, fontSize: '0.9rem', marginBottom: 14, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                  <Target size={18} />
                  <span>Our Mission</span>
                </div>
                <h4 style={{ fontSize: '1.5rem', color: '#fff', marginBottom: 16, lineHeight: 1.35 }}>
                  To make quality learning experiences more accessible and engaging, particularly for students from low-income families and underserved communities.
                </h4>
                <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.98rem', lineHeight: 1.65, margin: 0 }}>
                  By combining AI-powered learning concepts, gamification, and diverse learning approaches, we are exploring new ways to help people learn beyond the limitations of traditional study methods.
                </p>
              </div>

              <div className="card" style={{ background: '#FFFDF5', border: '1px solid #E8DEB2', padding: '24px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, color: '#7E630A', fontWeight: 700, fontSize: '0.85rem', marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                  <Sparkles size={16} />
                  <span>Core Truth</span>
                </div>
                <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#2B2304', lineHeight: 1.4, fontFamily: 'var(--font-display)' }}>
                  A lack of resources should never mean a lack of opportunity to learn.
                </div>
              </div>
            </div>
          </div>

          {/* Product Pillars */}
          <div style={{ margin: '64px 0 32px' }}>
            <div className="section-heading-wrap">
              <span className="section-eyebrow">Product Architecture</span>
              <h2 className="section-title">How Vidyaverse AI Reimagines Study</h2>
              <p className="section-subtitle">
                Merging cognitive engagement, personalized AI guidance, and hardware acceleration to build an active, joyful learning path.
              </p>
            </div>

            <div className="grid-3">
              <div className="card">
                <div className="card-icon" style={{ background: '#E2F3E9', color: 'var(--color-primary)' }}>
                  <Gamepad2 size={26} />
                </div>
                <h3 className="card-title">Gamified Learning Quests</h3>
                <p className="card-desc">
                  Replaces dry passive memorization with interactive challenges, streak incentives, and step-by-step concept progression that makes mastering complex subjects rewarding.
                </p>
                <div style={{ marginTop: 'auto', paddingTop: 14 }}>
                  <span className="badge badge-green">Engaging Retention</span>
                </div>
              </div>

              <div className="card">
                <div className="card-icon" style={{ background: '#E2F3E9', color: 'var(--color-primary)' }}>
                  <Cpu size={26} />
                </div>
                <h3 className="card-title">On-Device Edge AI</h3>
                <p className="card-desc">
                  Engineered with an eye toward on-device NPU acceleration (such as Qualcomm Hexagon™ NPU), reducing server dependencies and ensuring students in low-connectivity areas can study smoothly.
                </p>
                <div style={{ marginTop: 'auto', paddingTop: 14 }}>
                  <span className="badge badge-green">NPU & Edge Ready</span>
                </div>
              </div>

              <div className="card">
                <div className="card-icon" style={{ background: '#E2F3E9', color: 'var(--color-primary)' }}>
                  <BookOpen size={26} />
                </div>
                <h3 className="card-title">Diverse Learning Modes</h3>
                <p className="card-desc">
                  Every mind learns differently. Vidyaverse AI supports conceptual breakdowns, interactive analogies, practice questions, and visual mindmaps to match every learner's cognitive style.
                </p>
                <div style={{ marginTop: 'auto', paddingTop: 14 }}>
                  <span className="badge badge-green">Multi-Modal Study</span>
                </div>
              </div>
            </div>
          </div>

          {/* Project Journey & Achievements Strip */}
          <div style={{ margin: '64px 0' }}>
            <div className="vidyaverse-achievements-wrap" style={{ background: '#0F3323', border: '1px solid rgba(216,243,106,0.3)', color: '#fff' }}>
              <div className="vidyaverse-achievements-header">
                <div>
                  <h3 className="vidyaverse-achievements-title" style={{ color: '#fff' }}>
                    <Award size={24} color="var(--color-lemon)" />
                    Project Journey & <span>Verified Milestones</span>
                  </h3>
                  <p className="vidyaverse-achievements-sub" style={{ color: 'rgba(255,255,255,0.7)' }}>
                    Milestones that validate our technical direction, agentic architectures, and accessibility mission
                  </p>
                </div>
                <span className="badge badge-lemon">
                  Project Milestones
                </span>
              </div>

              <div className="vidyaverse-achievements-grid">
                {/* Milestone 1 */}
                <div className="achievement-card">
                  <div className="achievement-org">Qualcomm • Snapdragon®</div>
                  <h4 className="achievement-title">
                    Snapdragon® AI Lab Build & Present Challenge
                  </h4>
                  <p className="achievement-desc">
                    Involving on-device AI architectures, Qualcomm Hexagon™ NPU hardware acceleration, and the Qualcomm AI Hub to optimize low-latency local model inference for education.
                  </p>
                  <div className="achievement-meta">
                    <Cpu size={14} color="var(--color-lemon)" />
                    <span>On-Device AI & Hexagon™ NPU</span>
                  </div>
                </div>

                {/* Milestone 2 */}
                <div className="achievement-card">
                  <div className="achievement-org">IIT Bhubaneswar • Tech Zephyr 4.0</div>
                  <h4 className="achievement-title">
                    Hackathon Winner: Agentic AI
                  </h4>
                  <p className="achievement-desc">
                    Awarded Winner in the Agentic AI Hackathon category focused on web and interface design, recognizing intuitive autonomous agent workflows that guide students through custom learning journeys.
                  </p>
                  <div className="achievement-meta">
                    <Trophy size={14} color="var(--color-lemon)" />
                    <span>Hackathon Winner • Web & Design</span>
                  </div>
                </div>

                {/* Milestone 3 */}
                <div className="achievement-card">
                  <div className="achievement-org">Kaggle & Google DeepMind</div>
                  <h4 className="achievement-title">
                    AI Agents: Intensive Vibe Coding Capstone
                  </h4>
                  <p className="achievement-desc">
                    Selected participation in the Agents for Good track, exploring how agentic workflows can solve systemic educational barriers and deliver individualized tutoring at scale.
                  </p>
                  <div className="achievement-meta">
                    <Sparkles size={14} color="var(--color-lemon)" />
                    <span>Agents for Good Track • Capstone</span>
                  </div>
                </div>
              </div>

              <div className="achievement-disclaimer" style={{ color: 'rgba(255,255,255,0.6)' }}>
                * Note: These initiatives represent milestone achievements in the project's development. Vidyaverse AI does not imply endorsement, funding, ownership, or official partnership with Qualcomm, IIT Bhubaneswar, Kaggle, or Google DeepMind.
              </div>
            </div>
          </div>

          {/* Launch Action Card */}
          <div className="card card-resp-padding" style={{
            background: 'linear-gradient(135deg, #123D2A 0%, #0D2D1F 100%)',
            color: '#fff',
            borderRadius: 'var(--radius-xl)',
            textAlign: 'center',
            padding: '48px 24px',
            margin: '48px 0'
          }}>
            <div style={{ maxWidth: 680, margin: '0 auto' }}>
              <span className="badge badge-lemon" style={{ marginBottom: 16 }}>
                Experience The Platform
              </span>
              <h2 style={{ fontSize: '2.4rem', color: '#fff', marginBottom: 16 }}>
                Ready to Experience Next-Generation Learning?
              </h2>
              <p style={{ fontSize: '1.08rem', color: 'rgba(255,255,255,0.85)', lineHeight: 1.6, marginBottom: 28 }}>
                Vidyaverse AI is live on the web. Test interactive study prompts, explore gamified concept maps, and experience how AI can democratize quality learning.
              </p>
              <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
                <a
                  href="https://vidyaverse-ai-study.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-lemon"
                >
                  <span>Launch Vidyaverse AI App</span>
                  <ExternalLink size={16} />
                </a>
                <Link to="/products" className="btn btn-outline-lemon">
                  <span>Back to Product Directory</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
