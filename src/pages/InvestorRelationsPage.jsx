import React from 'react';
import { Link } from 'react-router-dom';
import {
  ShieldAlert,
  Coins,
  Layers,
  ExternalLink,
  FileCheck2,
  AlertTriangle,
  Mail,
  CheckCircle,
  HelpCircle,
  Info
} from 'lucide-react';
import ContractAddressBox from '../components/ContractAddressBox';
import NoticeBox from '../components/NoticeBox';

export default function InvestorRelationsPage() {
  return (
    <div>
      {/* Header */}
      <section className="page-header dark">
        <div className="container">
          <div className="breadcrumbs">
            <Link to="/" style={{ color: 'rgba(255,255,255,0.7)' }}>Home</Link>
            <span className="separator" style={{ color: 'rgba(255,255,255,0.4)' }}>/</span>
            <span className="current" style={{ color: 'var(--color-lemon)' }}>Investor Relations</span>
          </div>
          <div className="page-header-eyebrow">
            <span>Financial Participation & Governance</span>
          </div>
          <h1 className="page-title">Investor & Participation Information</h1>
          <p className="page-description">
            Transparent disclosure of funding mechanisms, smart contract architectures, community crowdfunding parameters, and ecosystem financial integrity.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section">
        <div className="container">
          {/* Section 1: Introduction & Non-Corporate Clarification */}
          <NoticeBox type="warning" title="Informational Notice & Participation Clarification">
            Lemon India DAO is a decentralized digital ecosystem and community organization—not a publicly listed corporation, licensed investment fund, or broker-dealer. Under XDAO's model, LP tokens represent an economic ownership stake in Lemon India DAO's financial assets, with financial participation linked directly to the DAO treasury according to the applicable LP accounting and configuration. In contrast, Lemon Pine Coin (LPC) is a separate cryptocurrency created by Lemon India DAO; holding LPC does not grant ownership of the DAO treasury. Specific economic rights remain subject to the DAO's actual configuration and governing terms.
          </NoticeBox>

          {/* Dedicated Portal Banner */}
          <div style={{
            background: 'linear-gradient(135deg, #0B1710 0%, #16281E 100%)',
            border: '1px solid rgba(216, 243, 106, 0.35)',
            borderRadius: 'var(--radius-lg)',
            padding: '22px 28px',
            margin: '28px 0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: 16
          }}>
            <div>
              <span className="badge badge-lemon" style={{ marginBottom: 6 }}>
                Clearance Protocol
              </span>
              <h3 style={{ color: '#fff', fontSize: '1.3rem', margin: '4px 0 6px' }}>
                GT Governance &bull; LP Investment Clearance Portal
              </h3>
              <p style={{ color: 'rgba(255, 255, 255, 0.78)', fontSize: '0.92rem', margin: 0, maxWidth: 680 }}>
                GT is strictly for governance access and is not for sale. LP tokens represent financial interests in the DAO treasury. Launch the futuristic portal for interactive feature analysis.
              </p>
            </div>
            <Link to="/clearance" className="btn btn-lemon btn-sm">
              <span>Launch Clearance Portal</span>
              <ExternalLink size={14} />
            </Link>
          </div>

          <div className="card card-resp-padding" style={{ margin: '36px 0' }}>
            <h2 style={{ fontSize: '1.75rem', marginBottom: '14px' }}>Introduction to Ecosystem Funding</h2>
            <p style={{ fontSize: '1.02rem', lineHeight: 1.7, marginBottom: '16px' }}>
              Lemon India DAO relies on decentralized funding mechanisms to support software development, infrastructure hosting, security maintenance, and open technical research.
            </p>
            <p style={{ fontSize: '1.02rem', lineHeight: 1.7, margin: 0 }}>
              The exact rights associated with any token depend strictly on its governing smart-contract configuration, on-chain parameters, and applicable law. We do not make speculative return promises, nor do we claim automatic voting rights or treasury distributions beyond what is explicitly programmed in the verified contracts.
            </p>
          </div>

          {/* Section 2: Funding Purpose */}
          <div style={{ margin: '54px 0' }}>
            <div className="section-heading-wrap text-left">
              <span className="section-eyebrow">Resource Allocation</span>
              <h2 className="section-title">Intended Funding Purpose</h2>
              <p className="section-subtitle">
                Funds contributed through verified DAO participation channels are earmarked for specific operational categories. The DAO does not publish fabricated allocation percentages; exact allocations are governed by proposals on XDAO.
              </p>
            </div>

            <div className="grid-3">
              <div className="card">
                <h4 style={{ fontSize: '1.2rem', color: 'var(--color-primary)', marginBottom: '10px' }}>
                  1. Hind.com Operations
                </h4>
                <p style={{ fontSize: '0.94rem', lineHeight: 1.6 }}>
                  Server hosting, bandwidth, index maintenance, edge caching, and technical reliability engineering for the Hind.com search portal.
                </p>
              </div>

              <div className="card">
                <h4 style={{ fontSize: '1.2rem', color: 'var(--color-primary)', marginBottom: '10px' }}>
                  2. Software & Infrastructure
                </h4>
                <p style={{ fontSize: '0.94rem', lineHeight: 1.6 }}>
                  Backend microservice engineering, database clustering, developer API development, and distributed storage gateways.
                </p>
              </div>

              <div className="card">
                <h4 style={{ fontSize: '1.2rem', color: 'var(--color-primary)', marginBottom: '10px' }}>
                  3. Security & Audits
                </h4>
                <p style={{ fontSize: '0.94rem', lineHeight: 1.6 }}>
                  Third-party code reviews, multi-signature contract verification, vulnerability mitigation, and penetration testing.
                </p>
              </div>

              <div className="card">
                <h4 style={{ fontSize: '1.2rem', color: 'var(--color-primary)', marginBottom: '10px' }}>
                  4. Research & Innovation
                </h4>
                <p style={{ fontSize: '0.94rem', lineHeight: 1.6 }}>
                  Exploration of zero-knowledge privacy tooling, decentralized identity standards, and distributed network architectures.
                </p>
              </div>

              <div className="card">
                <h4 style={{ fontSize: '1.2rem', color: 'var(--color-primary)', marginBottom: '10px' }}>
                  5. Community Operations
                </h4>
                <p style={{ fontSize: '0.94rem', lineHeight: 1.6 }}>
                  Maintaining public documentation, bug bounty distributions, educational materials, and direct community communication channels.
                </p>
              </div>

              <div className="card" style={{ background: '#F4F7F1', border: '1px dashed #CBD6C6' }}>
                <h4 style={{ fontSize: '1.2rem', color: 'var(--color-forest)', marginBottom: '10px' }}>
                  No Fabricated Budgets
                </h4>
                <p style={{ fontSize: '0.94rem', lineHeight: 1.6 }}>
                  Detailed financial allocations are proposed and executed on-chain via XDAO multi-sig ballots rather than rigid, unverified corporate claims.
                </p>
              </div>
            </div>
          </div>

          {/* Section 3 & 4: Deep-dive into LP Tokens vs LPC */}
          <div className="grid-2" style={{ margin: '54px 0' }}>
            {/* Section 3: LP Tokens */}
            <div className="card" style={{ borderTop: '4px solid var(--color-primary)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
                <Layers size={24} color="var(--color-primary)" />
                <h3 style={{ fontSize: '1.5rem', margin: 0 }}>LP Tokens (Crowdfunding)</h3>
              </div>
              <p style={{ fontSize: '0.96rem', lineHeight: 1.6, marginBottom: '18px' }}>
                Under XDAO's LP-token model, LP tokens represent an economic ownership stake in Lemon India DAO's financial assets. Financial participation is linked directly to the DAO treasury according to the applicable LP accounting and configuration.
              </p>

              <div style={{ background: '#F8F9F5', padding: '16px', borderRadius: 'var(--radius-md)', marginBottom: '20px' }}>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.88rem' }}>
                  <li><strong>Contribution Currency:</strong> As defined in live XDAO campaign configuration (typically BNB or USDT).</li>
                  <li><strong>Purchase Limits:</strong> Governed by campaign parameters to prevent disproportionate concentration.</li>
                  <li><strong>Vesting & Releases:</strong> Handled by XDAO smart contract code according to published schedule.</li>
                  <li><strong>Fees & Gas:</strong> Standard BNB Chain network transaction fees apply to all interactions.</li>
                </ul>
              </div>

              <p style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)', marginBottom: '20px' }}>
                <em>Important:</em> The specific economic rights of LP holders remain subject to the DAO's actual smart-contract configuration and governing terms. LP tokens do not represent corporate shares in a traditional entity or promise fixed distributions.
              </p>

              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginTop: 'auto' }}>
                <a
                  href="https://app.xdao.app/56/dao/0x4deaff5873536f7510d29da4fbc0621629d77fc1/modules/crowdfunding"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-sm"
                >
                  <span>Open Official Crowdfunding</span>
                  <ExternalLink size={14} />
                </a>
                <Link to="/lp-tokens" className="btn btn-secondary btn-sm">
                  <span>Detailed LP Token Docs</span>
                </Link>
              </div>
            </div>

            {/* Section 4: LPC (Lemon Pine Coin) */}
            <div className="card" style={{ borderTop: '4px solid #F5C518' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
                <img
                  src="/assets/paappl-lpc-logo.png"
                  alt="Pineapple sticker PAAPPL"
                  style={{ width: 36, height: 36, objectFit: 'contain', background: '#000', borderRadius: 'var(--radius-sm)', padding: 2 }}
                />
                <h3 style={{ fontSize: '1.5rem', margin: 0 }}>Lemon Pine Coin (LPC)</h3>
              </div>
              <p style={{ fontSize: '0.96rem', lineHeight: 1.6, marginBottom: '18px' }}>
                Lemon Pine Coin (also known as Lemon Pineapple Coin, ticker PAAPPL) is a separate cryptocurrency created by Lemon India DAO on BNB Chain. Holding LPC is distinct from holding LP tokens and does not grant ownership of the DAO treasury.
              </p>

              <div style={{ background: '#F8F9F5', padding: '16px', borderRadius: 'var(--radius-md)', marginBottom: '20px' }}>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.88rem' }}>
                  <li><strong>Ticker Symbol:</strong> PAAPPL / LPC</li>
                  <li><strong>Network:</strong> BNB Chain (BEP-20)</li>
                  <li><strong>Trading Platform:</strong> four.meme automated liquidity pools</li>
                  <li><strong>Distinction:</strong> LPC is an independent cryptocurrency; purchasing LPC does not grant ownership of the DAO treasury or participate in the LP crowdfunding campaign.</li>
                </ul>
              </div>

              <ContractAddressBox
                address="0x5843591afe21e7430115162e20c576d5ea764444"
                label="LPC Contract"
                network="BNB Chain"
                explorerUrl="https://bscscan.com/token/0x5843591afe21e7430115162e20c576d5ea764444"
              />

              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginTop: 'auto' }}>
                <a
                  href="https://four.meme/en/token/0x5843591afe21e7430115162e20c576d5ea764444"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary btn-sm"
                >
                  <span>Trade on four.meme</span>
                  <ExternalLink size={14} />
                </a>
                <Link to="/lpc" className="btn btn-secondary btn-sm">
                  <span>LPC Token Guide</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Official Live Crowdfunding Widget */}
          <div className="crowdfunding-widget-card" style={{ margin: '48px 0' }}>
            <div className="crowdfunding-widget-header">
              <div className="crowdfunding-widget-title">
                <Layers size={20} color="var(--color-lemon)" />
                <span>Verified DAO Crowdfunding Interface (XDAO)</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <span className="badge badge-lemon">Financial Equity Model</span>
                <span style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.7)', fontFamily: 'var(--font-mono)' }}>
                  BNB Chain
                </span>
              </div>
            </div>

            <div className="crowdfunding-widget-body">
              <iframe
                src="https://xdao.app/56/dao/0x4deaff5873536f7510d29da4fbc0621629d77fc1/widgets/crowdfunding"
                title="Lemon India Incorporated Crowdfunding"
                width="100%"
                height="460px"
                className="crowdfunding-iframe-frame"
                loading="lazy"
              />
            </div>

            <div className="crowdfunding-widget-footer">
              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <ShieldAlert size={15} color="var(--color-primary)" />
                <span>Under XDAO's model, LP tokens represent an economic ownership stake in Lemon India DAO's financial assets linked to the treasury.</span>
              </div>
              <a
                href="https://app.xdao.app/56/dao/0x4deaff5873536f7510d29da4fbc0621629d77fc1/modules/crowdfunding"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'inline-flex', alignItems: 'center', gap: 4, color: 'var(--color-primary)', fontWeight: 600 }}
              >
                <span>Launch in XDAO</span>
                <ExternalLink size={13} />
              </a>
            </div>
          </div>

          {/* Section 5: Financial Transparency */}
          <div className="card card-resp-padding" style={{ background: '#FAFBF7', margin: '48px 0' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <FileCheck2 size={26} color="var(--color-primary)" />
              <h2 style={{ fontSize: '1.75rem', margin: 0 }}>Financial Transparency & On-Chain Auditability</h2>
            </div>
            <p style={{ fontSize: '1.02rem', lineHeight: 1.7, marginBottom: '20px' }}>
              Rather than presenting unaudited balance sheets or fabricated statistics, Lemon India DAO provides direct access to its verified public blockchain records.
            </p>

            <div className="grid-3" style={{ marginTop: '20px' }}>
              <div style={{ background: '#fff', padding: '20px', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }}>
                <h5 style={{ color: 'var(--color-forest)', marginBottom: '6px' }}>Treasury Status</h5>
                <p style={{ fontSize: '0.88rem', margin: 0 }}>
                  Treasury balances are held in multi-sig smart contracts on BNB Chain. Inspect live balances directly through the XDAO explorer.
                </p>
              </div>

              <div style={{ background: '#fff', padding: '20px', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }}>
                <h5 style={{ color: 'var(--color-forest)', marginBottom: '6px' }}>Funding Utilisation</h5>
                <p style={{ fontSize: '0.88rem', margin: 0 }}>
                  Disbursements require multi-sig sign-off recorded permanently on-chain. Formal summary reports will be published as milestones conclude.
                </p>
              </div>

              <div style={{ background: '#fff', padding: '20px', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }}>
                <h5 style={{ color: 'var(--color-forest)', marginBottom: '6px' }}>Governance Ballots</h5>
                <p style={{ fontSize: '0.88rem', margin: 0 }}>
                  All financial participation proposals, parameter updates, and development milestones are published to public voting logs.
                </p>
              </div>
            </div>

            <div style={{ marginTop: '24px', display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              <a
                href="https://app.xdao.app/56/dao/0x4deaff5873536f7510d29da4fbc0621629d77fc1?tab=Info"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary btn-sm"
              >
                <span>Inspect DAO Treasury on XDAO</span>
                <ExternalLink size={14} />
              </a>
              <Link to="/contact" className="btn btn-secondary btn-sm">
                <span>Request Treasury Queries</span>
              </Link>
            </div>
          </div>

          {/* Section 6: Comprehensive Risk Disclosure */}
          <div style={{ margin: '54px 0' }}>
            <h2 style={{ fontSize: '1.75rem', marginBottom: '16px' }}>Risks Associated with Participation</h2>
            <p style={{ fontSize: '1.02rem', lineHeight: 1.7, marginBottom: '24px' }}>
              Participants must evaluate the following inherent risks prior to interacting with any decentralized smart contract or digital asset:
            </p>

            <div className="grid-2">
              <div className="card">
                <h4 style={{ color: 'var(--color-forest)', marginBottom: '8px' }}>Market & Price Volatility</h4>
                <p style={{ fontSize: '0.92rem', lineHeight: 1.6 }}>
                  Cryptocurrency and digital asset markets experience high price fluctuations. Tokens may lose value rapidly or entirely.
                </p>
              </div>

              <div className="card">
                <h4 style={{ color: 'var(--color-forest)', marginBottom: '8px' }}>Liquidity Limitations</h4>
                <p style={{ fontSize: '0.92rem', lineHeight: 1.6 }}>
                  There is no guarantee that a liquid secondary market will exist for any token at any given time or price.
                </p>
              </div>

              <div className="card">
                <h4 style={{ color: 'var(--color-forest)', marginBottom: '8px' }}>Smart Contract Vulnerabilities</h4>
                <p style={{ fontSize: '0.92rem', lineHeight: 1.6 }}>
                  Smart contracts are complex software code. Despite careful deployment, unexpected exploits, bugs, or network forks remain possible.
                </p>
              </div>

              <div className="card">
                <h4 style={{ color: 'var(--color-forest)', marginBottom: '8px' }}>Wallet & Private Key Responsibility</h4>
                <p style={{ fontSize: '0.92rem', lineHeight: 1.6 }}>
                  Participants hold sole responsibility for safeguarding their private keys, seed phrases, and wallet access credentials.
                </p>
              </div>

              <div className="card">
                <h4 style={{ color: 'var(--color-forest)', marginBottom: '8px' }}>Regulatory Uncertainty</h4>
                <p style={{ fontSize: '0.92rem', lineHeight: 1.6 }}>
                  Digital assets, DAOs, and smart contracts are subject to evolving legal frameworks across global and Indian jurisdictions.
                </p>
              </div>

              <div className="card">
                <h4 style={{ color: 'var(--color-forest)', marginBottom: '8px' }}>Possible Total Loss of Funds</h4>
                <p style={{ fontSize: '0.92rem', lineHeight: 1.6 }}>
                  You should never contribute or swap capital that you cannot afford to lose completely.
                </p>
              </div>
            </div>

            <div style={{ marginTop: '24px' }}>
              <Link to="/risk-disclosure" className="btn btn-secondary btn-sm">
                <span>Read Full Standalone Risk Disclosure</span>
                <ExternalLink size={14} />
              </Link>
            </div>
          </div>

          {/* Section 7: Contact */}
          <div className="card card-resp-padding" style={{ background: '#F4F7F1', textAlign: 'center' }}>
            <h3 style={{ fontSize: '1.4rem', marginBottom: '8px' }}>Investor & Governance Inquiries</h3>
            <p style={{ maxWidth: '600px', margin: '0 auto 20px', fontSize: '0.96rem' }}>
              For factual questions regarding participation parameters, verifiable documentation, or community updates, reach out directly.
            </p>
            <a
              href="mailto:lemonindiaincorporated@gmail.com"
              className="btn btn-primary"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
            >
              <Mail size={16} />
              <span>lemonindiaincorporated@gmail.com</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
