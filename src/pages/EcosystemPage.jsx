import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Layers,
  Search,
  Cpu,
  Microscope,
  Users,
  ExternalLink,
  Shield,
  Server,
  Code,
  ArrowRight
} from 'lucide-react';
import NoticeBox from '../components/NoticeBox';

export default function EcosystemPage() {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 'hind',
      title: 'Hind.com',
      category: 'products',
      status: 'Available Now',
      statusType: 'live',
      tagline: 'Accessible Search & Discovery Engine',
      description: 'An independent digital search engine focused on clean information discovery, minimal latency, and accessible web experiences for diverse users.',
      features: ['Clean index layout', 'Fast query delivery', 'No invasive profiling', 'Modern responsive UI'],
      link: 'https://cyan-rosy-rho.vercel.app/Hind-main/index.html',
      external: true,
      buttonText: 'Visit Hind.com'
    },
    {
      id: 'vidyaverse',
      title: 'Vidyaverse AI',
      category: 'products',
      status: 'Available Now',
      statusType: 'live',
      tagline: 'AI-Powered Gamified Education Platform',
      description: 'An online educational platform combining artificial intelligence, gamification quests, and diverse learning modes to make quality education engaging and universally accessible.',
      features: ['Adaptive AI study assistant', 'Gamified learning quests', 'On-device edge AI readiness', 'Educational accessibility focus'],
      link: '/vidyaverse',
      external: false,
      buttonText: 'Explore Vidyaverse AI'
    },
    {
      id: 'xdao-hub',
      title: 'Lemon India DAO on XDAO',
      category: 'community',
      status: 'Available Now',
      statusType: 'live',
      tagline: 'Multi-Signature Governance & Treasury',
      description: 'The on-chain governance hub configured on BNB Chain, enabling transparent multi-signature approval of proposals, treasury transparency, and collective decision making.',
      features: ['BNB Chain deployment', 'Multi-sig signer architecture', 'Public proposal logs', 'Configured crowdfunding module'],
      link: 'https://app.xdao.app/56/dao/0x4deaff5873536f7510d29da4fbc0621629d77fc1?tab=Info',
      external: true,
      buttonText: 'View on XDAO'
    },
    {
      id: 'infra-nodes',
      title: 'Distributed Infrastructure Nodes',
      category: 'infrastructure',
      status: 'Under Development',
      statusType: 'dev',
      tagline: 'Resilient Digital Hosting & Cache Layers',
      description: 'Engineering decentralized cache distribution and edge computing nodes to ensure high availability and resistance to single points of failure across ecosystem services.',
      features: ['Edge caching models', 'Decentralized failover routing', 'Low-latency Indian relay points'],
      link: '/products',
      external: false,
      buttonText: 'Learn More'
    },
    {
      id: 'lpc-token',
      title: 'Lemon Pine Coin (LPC / PAAPPL)',
      category: 'community',
      status: 'Available Now',
      statusType: 'live',
      tagline: 'Independent BNB Chain Cryptocurrency',
      description: 'A separate cryptocurrency created by Lemon India DAO on BNB Chain with verified contract 0x5843591afe21e7430115162e20c576d5ea764444. It is distinct from LP tokens and does not confer ownership of the DAO treasury.',
      features: ['BNB Chain contract', 'four.meme trading integration', 'Community ticker PAAPPL'],
      link: '/lpc',
      external: false,
      buttonText: 'LPC Specifications'
    },
    {
      id: 'privacy-research',
      title: 'Zero-Knowledge & Privacy Research',
      category: 'research',
      status: 'Planned / Exploratory',
      statusType: 'planned',
      tagline: 'Exploratory Cryptographic Inquiry',
      description: 'Investigating lightweight zero-knowledge proof verification algorithms and client-side data anonymization to enhance user security on Hind.com.',
      features: ['Literature review underway', 'Prototype evaluation', 'Academic & open-source citations'],
      link: '/about',
      external: false,
      buttonText: 'Research Scope'
    },
    {
      id: 'dev-tooling',
      title: 'Ecosystem Developer SDK',
      category: 'infrastructure',
      status: 'Planned / Exploratory',
      statusType: 'planned',
      tagline: 'Standardized Open APIs & Integrations',
      description: 'Planning a lightweight API client to allow developers to query verified Lemon India DAO public metrics and search endpoints without proprietary bottlenecks.',
      features: ['REST & RPC endpoints', 'OpenAPI documentation', 'Permissive developer usage'],
      link: '/products',
      external: false,
      buttonText: 'Roadmap Details'
    }
  ];

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(p => p.category === filter);

  return (
    <div>
      {/* Page Header */}
      <section className="page-header dark">
        <div className="container">
          <div className="breadcrumbs">
            <Link to="/" style={{ color: 'rgba(255,255,255,0.7)' }}>Home</Link>
            <span className="separator" style={{ color: 'rgba(255,255,255,0.4)' }}>/</span>
            <span className="current" style={{ color: 'var(--color-lemon)' }}>Ecosystem</span>
          </div>
          <div className="page-header-eyebrow">
            <span>Ecosystem Portfolio</span>
          </div>
          <h1 className="page-title">Explore the Lemon India DAO Ecosystem</h1>
          <p className="page-description">
            "An evolving collection of digital products and technology initiatives connected by a shared vision of accessible digital innovation."
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section">
        <div className="container">
          <NoticeBox type="info" title="Status Transparency">
            Each initiative below is explicitly tagged as <strong>Available Now</strong>, <strong>Under Development</strong>, or <strong>Planned / Exploratory</strong>. We do not claim uncompleted software is operational.
          </NoticeBox>

          {/* Category Filter Pills */}
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', margin: '36px 0 40px' }}>
            <button
              type="button"
              onClick={() => setFilter('all')}
              className={`btn btn-sm ${filter === 'all' ? 'btn-primary' : 'btn-secondary'}`}
            >
              All Initiatives ({projects.length})
            </button>
            <button
              type="button"
              onClick={() => setFilter('products')}
              className={`btn btn-sm ${filter === 'products' ? 'btn-primary' : 'btn-secondary'}`}
            >
              Digital Products
            </button>
            <button
              type="button"
              onClick={() => setFilter('infrastructure')}
              className={`btn btn-sm ${filter === 'infrastructure' ? 'btn-primary' : 'btn-secondary'}`}
            >
              Technology & Infrastructure
            </button>
            <button
              type="button"
              onClick={() => setFilter('research')}
              className={`btn btn-sm ${filter === 'research' ? 'btn-primary' : 'btn-secondary'}`}
            >
              Research & Innovation
            </button>
            <button
              type="button"
              onClick={() => setFilter('community')}
              className={`btn btn-sm ${filter === 'community' ? 'btn-primary' : 'btn-secondary'}`}
            >
              Community & Participation
            </button>
          </div>

          {/* Projects Grid */}
          <div className="grid-3">
            {filteredProjects.map((project) => (
              <div key={project.id} className="card" style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                  <span className={`badge badge-status-${project.statusType}`}>
                    {project.status}
                  </span>
                  <span style={{ fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--color-text-muted)' }}>
                    {project.category}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.38rem', marginBottom: '6px' }}>{project.title}</h3>
                <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-primary)', marginBottom: '12px' }}>
                  {project.tagline}
                </div>

                <p style={{ fontSize: '0.94rem', lineHeight: 1.6, marginBottom: '20px', flex: '1 0 auto' }}>
                  {project.description}
                </p>

                <div style={{ borderTop: '1px solid var(--color-border)', paddingTop: '16px', marginBottom: '20px' }}>
                  <div style={{ fontSize: '0.78rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--color-forest)', marginBottom: '8px' }}>
                    Key Capabilities
                  </div>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    {project.features.map((feature, i) => (
                      <li key={i} style={{ fontSize: '0.84rem', color: 'var(--color-text-muted)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <span style={{ width: 4, height: 4, borderRadius: '50%', background: 'var(--color-primary)' }} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  {project.external ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary btn-sm"
                      style={{ width: '100%' }}
                    >
                      <span>{project.buttonText}</span>
                      <ExternalLink size={14} />
                    </a>
                  ) : (
                    <Link
                      to={project.link}
                      className="btn btn-secondary btn-sm"
                      style={{ width: '100%' }}
                    >
                      <span>{project.buttonText}</span>
                      <ArrowRight size={14} />
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Section: Continuous Evolution */}
          <div className="card" style={{ marginTop: '56px', background: '#F8F9F3', border: '1px dashed #CBD6C6', padding: '36px', textAlign: 'center' }}>
            <h3 style={{ fontSize: '1.4rem', marginBottom: '10px' }}>An Evolving Ecosystem</h3>
            <p style={{ maxWidth: '640px', margin: '0 auto 20px', fontSize: '0.96rem' }}>
              We regularly audit project statuses. As software completes testing and moves into production or research phases yield actionable frameworks, this directory will be updated transparently.
            </p>
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
              <Link to="/products" className="btn btn-primary btn-sm">
                <span>View Product Directory</span>
              </Link>
              <Link to="/investor-relations" className="btn btn-secondary btn-sm">
                <span>Investor & Funding Info</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
