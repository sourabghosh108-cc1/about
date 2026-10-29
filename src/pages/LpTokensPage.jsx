import React from 'react';
import { Link } from 'react-router-dom';
import {
  Layers,
  ExternalLink,
  ShieldAlert,
  CheckCircle,
  HelpCircle,
  Info,
  Clock,
  ArrowRight
} from 'lucide-react';
import NoticeBox from '../components/NoticeBox';

export default function LpTokensPage() {
  return (
    <div>
      {/* Header */}
      <section className="page-header dark">
        <div className="container">
          <div className="breadcrumbs">
            <Link to="/" style={{ color: 'rgba(255,255,255,0.7)' }}>Home</Link>
            <span className="separator" style={{ color: 'rgba(255,255,255,0.4)' }}>/</span>
            <span className="current" style={{ color: 'var(--color-lemon)' }}>LP Tokens</span>
          </div>
          <div className="page-header-eyebrow">
            <span>DAO Crowdfunding Structure</span>
          </div>
          <h1 className="page-title">LP Token Information</h1>
          <p className="page-description">
            Complete technical and participation guide regarding the Lemon India DAO LP tokens configured within the XDAO crowdfunding framework on BNB Chain.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section">
        <div className="container">
          {/* Important Distinction Notice */}
          <NoticeBox type="info" title="Economic Ownership & Treasury Accounting Model">
            <strong>Economic Ownership Stake:</strong> Under XDAO's LP-token model, LP tokens represent an economic ownership stake in Lemon India DAO's financial assets. LP holders' financial participation is linked directly to the DAO treasury according to the applicable LP accounting and configuration. Specific economic rights remain subject to the DAO's actual smart-contract parameters and governing terms.
          </NoticeBox>

          {/* Portal Navigation Banner */}
          <div style={{
            background: 'linear-gradient(135deg, #0B1710 0%, #16281E 100%)',
            border: '1px solid rgba(216, 243, 106, 0.35)',
            borderRadius: 'var(--radius-lg)',
            padding: '20px 24px',
            margin: '28px 0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: 16
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
              <div style={{ background: 'rgba(216, 243, 106, 0.15)', color: 'var(--color-lemon)', borderRadius: 'var(--radius-sm)', padding: 10 }}>
                <Layers size={22} />
              </div>
              <div>
                <h4 style={{ color: '#fff', fontSize: '1.15rem', margin: '0 0 4px' }}>
                  GT Governance &bull; LP Investment Clearance Portal
                </h4>
                <p style={{ color: 'rgba(255, 255, 255, 0.75)', fontSize: '0.88rem', margin: 0 }}>
                  Explore the futuristic dual-pathway interface distinguishing governance rights from financial treasury participation.
                </p>
              </div>
            </div>
            <Link to="/clearance" className="btn btn-lemon btn-sm">
              <span>Open Clearance Portal</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid-2" style={{ margin: '40px 0' }}>
            <div className="card">
              <h2 style={{ fontSize: '1.6rem', marginBottom: '14px' }}>What is the LP Token?</h2>
              <p style={{ fontSize: '1.02rem', lineHeight: 1.7, marginBottom: '16px' }}>
                In the context of the Lemon India DAO ecosystem, LP (Liquidity / Participation) tokens represent an economic ownership stake in the DAO's financial assets under XDAO's LP-token model.
              </p>
              <p style={{ fontSize: '0.96rem', lineHeight: 1.6, color: 'var(--color-text-muted)' }}>
                LP holders' financial participation is linked directly to the DAO treasury according to the applicable LP accounting and smart-contract configuration, rather than functioning merely as speculative tokens.
              </p>
            </div>

            <div className="card">
              <h2 style={{ fontSize: '1.6rem', marginBottom: '14px' }}>The XDAO Crowdfunding Mechanism</h2>
              <p style={{ fontSize: '1.02rem', lineHeight: 1.7, marginBottom: '16px' }}>
                XDAO provides multi-signature and modular contract tools on BNB Chain. The crowdfunding module allows participants to contribute approved cryptocurrency directly into the DAO's custody contract.
              </p>
              <p style={{ fontSize: '0.96rem', lineHeight: 1.6, color: 'var(--color-text-muted)' }}>
                Once verified, tokens are allocated according to programmed pricing formulas, vesting restrictions, and allocation caps.
              </p>
            </div>
          </div>

          {/* Live XDAO Crowdfunding Widget Section */}
          <div className="crowdfunding-widget-card">
            <div className="crowdfunding-widget-header">
              <div className="crowdfunding-widget-title">
                <Layers size={20} color="var(--color-lemon)" />
                <span>Live XDAO Crowdfunding Portal</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <span className="badge badge-lemon">BNB Chain</span>
                <span style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.7)', fontFamily: 'var(--font-mono)' }}>
                  0x4deaff...7fc1
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
                <span>Economic Ownership Stake: Governed directly by XDAO smart contract parameters & LP accounting.</span>
              </div>
              <a
                href="https://app.xdao.app/56/dao/0x4deaff5873536f7510d29da4fbc0621629d77fc1/modules/crowdfunding"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'inline-flex', alignItems: 'center', gap: 4, color: 'var(--color-primary)', fontWeight: 600 }}
              >
                <span>Open Full XDAO Module</span>
                <ExternalLink size={13} />
              </a>
            </div>
          </div>

          {/* Campaign Parameters Table */}
          <div className="card card-resp-padding" style={{ margin: '40px 0' }}>
            <h3 style={{ fontSize: '1.4rem', marginBottom: '18px' }}>Verified Crowdfunding Specifications</h3>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.94rem' }}>
                <tbody>
                  <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
                    <th style={{ padding: '14px 10px', color: 'var(--color-forest)', width: '30%' }}>DAO Address</th>
                    <td style={{ padding: '14px 10px', fontFamily: 'var(--font-mono)', wordBreak: 'break-all' }}>
                      0x4deaff5873536f7510d29da4fbc0621629d77fc1 (BNB Chain)
                    </td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
                    <th style={{ padding: '14px 10px', color: 'var(--color-forest)' }}>Hosting Platform</th>
                    <td style={{ padding: '14px 10px' }}>
                      XDAO Platform (Verified Crowdfunding Module)
                    </td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
                    <th style={{ padding: '14px 10px', color: 'var(--color-forest)' }}>Contribution Currency</th>
                    <td style={{ padding: '14px 10px' }}>
                      Configured in live module (BNB / BEP-20 stablecoins)
                    </td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
                    <th style={{ padding: '14px 10px', color: 'var(--color-forest)' }}>Purchase Limits & Caps</th>
                    <td style={{ padding: '14px 10px' }}>
                      Enforced directly by the smart contract to preserve distribution fairness
                    </td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
                    <th style={{ padding: '14px 10px', color: 'var(--color-forest)' }}>Vesting & Release</th>
                    <td style={{ padding: '14px 10px' }}>
                      Follows the lockup and unlock schedule configured in the module
                    </td>
                  </tr>
                  <tr>
                    <th style={{ padding: '14px 10px', color: 'var(--color-forest)' }}>Network Gas Fees</th>
                    <td style={{ padding: '14px 10px' }}>
                      Standard BNB gas required for transaction execution
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div style={{ marginTop: '28px', display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              <a
                href="https://app.xdao.app/56/dao/0x4deaff5873536f7510d29da4fbc0621629d77fc1/modules/crowdfunding"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <span>Access Live Crowdfunding Module</span>
                <ExternalLink size={16} />
              </a>
              <a
                href="https://app.xdao.app/56/dao/0x4deaff5873536f7510d29da4fbc0621629d77fc1?tab=Info"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                <span>Inspect DAO Info</span>
                <ExternalLink size={16} />
              </a>
            </div>
          </div>

          {/* Distinction: LP Tokens vs LPC */}
          <div className="card" style={{ background: '#FFFDF5', border: '1px solid #E8DEB2', padding: '36px', margin: '40px 0' }}>
            <h3 style={{ fontSize: '1.35rem', color: '#7E630A', marginBottom: '12px' }}>
              Distinct From Lemon Pine Coin (LPC / PAAPPL)
            </h3>
            <p style={{ fontSize: '0.98rem', lineHeight: 1.6, marginBottom: '18px' }}>
              Do not confuse LP tokens with Lemon Pine Coin (LPC). While LP tokens represent an economic ownership stake in DAO financial assets linked to the treasury under XDAO's model, LPC is a separate cryptocurrency created by Lemon India DAO on BNB Chain (contract <code>0x5843591afe21e7430115162e20c576d5ea764444</code>). Holding LPC does not grant ownership of the DAO treasury or participate in the LP-token crowdfunding campaign.
            </p>
            <Link to="/lpc" className="btn btn-secondary btn-sm">
              <span>Read About Lemon Pine Coin (LPC)</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          {/* Verification & Risk Guidance */}
          <div style={{ margin: '48px 0' }}>
            <h3 style={{ fontSize: '1.45rem', marginBottom: '16px' }}>How to Inspect On-Chain Transactions</h3>
            <p style={{ fontSize: '1rem', lineHeight: 1.6, marginBottom: '20px' }}>
              Before signing any transaction in your wallet:
            </p>
            <div className="grid-3">
              <div className="card">
                <h5 style={{ color: 'var(--color-primary)', marginBottom: '8px' }}>1. Verify the Domain</h5>
                <p style={{ fontSize: '0.9rem' }}>
                  Ensure you are on the verified official domain <code>app.xdao.app</code> and that the DAO contract address matches <code>0x4deaff5873536f7510d29da4fbc0621629d77fc1</code>.
                </p>
              </div>
              <div className="card">
                <h5 style={{ color: 'var(--color-primary)', marginBottom: '8px' }}>2. Inspect Wallet Prompt</h5>
                <p style={{ fontSize: '0.9rem' }}>
                  Review the exact token allowance and BNB amount displayed in MetaMask or your Web3 wallet before clicking approve.
                </p>
              </div>
              <div className="card">
                <h5 style={{ color: 'var(--color-primary)', marginBottom: '8px' }}>3. View on BscScan</h5>
                <p style={{ fontSize: '0.9rem' }}>
                  After confirmation, review the transaction hash on BscScan to inspect the smart contract receipt and token minting event.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
