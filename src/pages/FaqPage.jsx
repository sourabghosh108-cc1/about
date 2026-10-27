import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search, ChevronDown, HelpCircle, Layers, Coins, ShieldCheck, Mail, ArrowRight } from 'lucide-react';

export default function FaqPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (id) => {
    setOpenItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const faqData = [
    {
      id: 1,
      category: 'general',
      q: 'What is Lemon India DAO?',
      a: 'Lemon India DAO is a decentralised digital ecosystem bringing together software product development, digital infrastructure, technological experimentation, and community participation. Guided by the motto "Build in India. Create together. Grow through decentralisation", it provides an open framework for developing useful internet services.'
    },
    {
      id: 2,
      category: 'products',
      q: 'What does Hind.com do?',
      a: 'Hind.com is a digital search and discovery project within the Lemon India DAO ecosystem. It is engineered to help users find accessible, reliable information quickly without cluttered advertising layouts or intrusive behavioral profiling.'
    },
    {
      id: 3,
      category: 'general',
      q: 'How is the ecosystem organized?',
      a: 'The ecosystem is organized into four core pillars: (1) Digital Products (user-facing applications like Hind.com), (2) Technology & Infrastructure (resilient backend nodes and protocols), (3) Research & Innovation (cryptographic and decentralized systems studies), and (4) Community & Participation (transparent DAO governance).'
    },
    {
      id: 4,
      category: 'governance',
      q: 'How can I explore the Lemon India DAO on-chain?',
      a: 'Lemon India DAO maintains its verified decentralized organization portal on XDAO on BNB Chain at contract 0x4deaff5873536f7510d29da4fbc0621629d77fc1. Visitors can inspect multi-signature signer architecture, treasury balances, and public proposals directly.'
    },
    {
      id: 5,
      category: 'tokens',
      q: 'What is the difference between LP tokens and LPC (Lemon Pine Coin)?',
      a: "LP tokens represent an economic ownership stake in Lemon India DAO's financial assets under XDAO's LP-token model, with holders' financial participation linked directly to the DAO treasury according to applicable LP accounting and configuration. In contrast, Lemon Pine Coin (LPC, ticker PAAPPL) is a separate cryptocurrency created by Lemon India DAO on BNB Chain (contract 0x5843591afe21e7430115162e20c576d5ea764444). Holding LPC does not grant ownership of the DAO treasury."
    },
    {
      id: 6,
      category: 'tokens',
      q: 'How does the LP-token crowdfunding campaign work?',
      a: 'The crowdfunding campaign is hosted via XDAO\'s audited crowdfunding module on BNB Chain. Participants contribute the designated currency (such as BNB or USDT) according to the terms set in the live module. Funds are deposited into the DAO\'s multi-sig treasury for approved development allocations.'
    },
    {
      id: 7,
      category: 'tokens',
      q: 'Are token prices, liquidity, or financial returns guaranteed?',
      a: 'No. Neither LP tokens nor LPC carry any guarantee of price stability, liquidity, or financial appreciation. Digital assets are subject to extreme market volatility, and participants should never allocate capital they cannot afford to lose completely.'
    },
    {
      id: 8,
      category: 'tokens',
      q: 'What are the vesting and token release rules for LP tokens?',
      a: 'Vesting rules, lockup schedules, and release triggers are programmed directly into the XDAO crowdfunding smart contract. Before participating, users should inspect the active campaign parameters on XDAO to review exact unlock milestones.'
    },
    {
      id: 9,
      category: 'security',
      q: 'Which blockchain wallets are compatible with the ecosystem?',
      a: 'Both XDAO governance and LPC (PAAPPL) operate on the BNB Chain network (BEP-20). Any standard EVM-compatible Web3 wallet—including MetaMask, Trust Wallet, Rabby, and Binance Web3 Wallet—can be used when connected to the BNB Chain RPC.'
    },
    {
      id: 10,
      category: 'security',
      q: 'How does privacy interact with public blockchain transactions?',
      a: 'While our web portal does not sell personal browsing data, any transaction sent to the BNB Chain or XDAO becomes part of a permanent, publicly visible distributed ledger. Anyone can view sender addresses, transaction amounts, and timestamps on public blockchain explorers like BscScan.'
    },
    {
      id: 11,
      category: 'security',
      q: 'What are the primary risks associated with digital asset participation?',
      a: 'Primary risks include market volatility, liquidity limitations, potential smart-contract code bugs or exploits, private-key compromise from phishing or malware, regulatory shifts, and the risk of complete loss of funds. Read our full Risk Disclosure page for a comprehensive review.'
    },
    {
      id: 12,
      category: 'general',
      q: 'How do I contact the team for support or verification?',
      a: 'You can contact the Lemon India DAO team directly at lemonindiaincorporated@gmail.com. We do not offer unsolicited investment advice, telephone support, or private messaging on social networks.'
    }
  ];

  const filteredFaqs = useMemo(() => {
    return faqData.filter(item => {
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
      const matchesSearch = searchQuery.trim() === '' ||
        item.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.a.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div>
      {/* Header */}
      <section className="page-header dark">
        <div className="container">
          <div className="breadcrumbs">
            <Link to="/" style={{ color: 'rgba(255,255,255,0.7)' }}>Home</Link>
            <span className="separator" style={{ color: 'rgba(255,255,255,0.4)' }}>/</span>
            <span className="current" style={{ color: 'var(--color-lemon)' }}>FAQ</span>
          </div>
          <div className="page-header-eyebrow">
            <span>Knowledge Base</span>
          </div>
          <h1 className="page-title">Frequently Asked Questions</h1>
          <p className="page-description">
            Clear, transparent answers about the Lemon India DAO ecosystem, Hind.com, LP tokens, LPC cryptocurrency, and participation safety.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section">
        <div className="container">
          {/* Search Bar & Categories */}
          <div style={{ maxWidth: '860px', margin: '0 auto 40px' }}>
            <div style={{ position: 'relative', marginBottom: '20px' }}>
              <Search size={20} color="var(--color-primary)" style={{ position: 'absolute', left: '18px', top: '50%', transform: 'translateY(-50%)' }} />
              <input
                type="text"
                className="form-input"
                style={{ paddingLeft: '48px', fontSize: '1.05rem', borderRadius: 'var(--radius-full)' }}
                placeholder="Search questions (e.g. Hind.com, LP tokens, LPC, contract, wallets)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', justifyContent: 'center' }}>
              <button
                type="button"
                className={`btn btn-sm ${selectedCategory === 'all' ? 'btn-primary' : 'btn-secondary'}`}
                onClick={() => setSelectedCategory('all')}
              >
                All Questions ({faqData.length})
              </button>
              <button
                type="button"
                className={`btn btn-sm ${selectedCategory === 'general' ? 'btn-primary' : 'btn-secondary'}`}
                onClick={() => setSelectedCategory('general')}
              >
                General & Mission
              </button>
              <button
                type="button"
                className={`btn btn-sm ${selectedCategory === 'products' ? 'btn-primary' : 'btn-secondary'}`}
                onClick={() => setSelectedCategory('products')}
              >
                Hind.com & Products
              </button>
              <button
                type="button"
                className={`btn btn-sm ${selectedCategory === 'tokens' ? 'btn-primary' : 'btn-secondary'}`}
                onClick={() => setSelectedCategory('tokens')}
              >
                Tokens & Crowdfunding
              </button>
              <button
                type="button"
                className={`btn btn-sm ${selectedCategory === 'security' ? 'btn-primary' : 'btn-secondary'}`}
                onClick={() => setSelectedCategory('security')}
              >
                Wallets & Safety
              </button>
            </div>
          </div>

          {/* FAQ Accordion List */}
          <div className="faq-list">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((item) => {
                const isOpen = !!openItems[item.id];
                return (
                  <div key={item.id} className={`faq-item ${isOpen ? 'open' : ''}`}>
                    <button
                      type="button"
                      className="faq-question-btn"
                      onClick={() => toggleItem(item.id)}
                      aria-expanded={isOpen}
                    >
                      <span>{item.q}</span>
                      <ChevronDown
                        size={20}
                        style={{
                          transform: isOpen ? 'rotate(180deg)' : 'none',
                          transition: 'transform 0.2s',
                          color: isOpen ? 'var(--color-primary)' : 'inherit',
                          flexShrink: 0
                        }}
                      />
                    </button>
                    {isOpen && (
                      <div className="faq-answer">
                        {item.a}
                      </div>
                    )}
                  </div>
                );
              })
            ) : (
              <div style={{ textAlign: 'center', padding: '60px 20px', background: '#fff', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border)' }}>
                <HelpCircle size={40} color="var(--color-text-muted)" style={{ margin: '0 auto 12px' }} />
                <h4 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>No matching questions found</h4>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.94rem', marginBottom: '18px' }}>
                  Try different keywords or view all categories.
                </p>
                <button
                  type="button"
                  className="btn btn-secondary btn-sm"
                  onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}
                >
                  Reset Filter
                </button>
              </div>
            )}
          </div>

          {/* Need More Assistance Card */}
          <div className="card" style={{ maxWidth: '860px', margin: '56px auto 0', textAlign: 'center', background: '#F5F8F2', padding: '36px' }}>
            <h3 style={{ fontSize: '1.35rem', marginBottom: '8px' }}>Still have questions?</h3>
            <p style={{ fontSize: '0.96rem', color: 'var(--color-text-muted)', marginBottom: '20px' }}>
              If your question is not addressed above, our team is available to assist via direct email.
            </p>
            <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn btn-primary btn-sm">
                <span>Go to Contact Page</span>
                <ArrowRight size={14} />
              </Link>
              <a href="mailto:lemonindiaincorporated@gmail.com" className="btn btn-secondary btn-sm">
                <span>Send Direct Email</span>
                <Mail size={14} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
