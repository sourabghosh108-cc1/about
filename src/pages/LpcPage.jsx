import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  Copy,
  Check,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  ShieldAlert,
  ArrowRight,
  Terminal,
  Activity,
  Layers,
  ArrowUpRight,
  RotateCcw
} from 'lucide-react';
import './LpcCinematic.css';

export default function LpcPage() {
  // Stages: 'terminal' -> 'reveal' -> 'main'
  const [stage, setStage] = useState('terminal');
  const [terminalLines, setTerminalLines] = useState([]);
  const [currentScene, setCurrentScene] = useState(1);
  const [flipDirection, setFlipDirection] = useState(''); // 'flipping-next' | 'flipping-prev'
  const [copied, setCopied] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const canvasRef = useRef(null);

  const CONTRACT_ADDRESS = '0x5843591afe21e7430115162e20c576d5ea764444';
  const TRADING_URL = 'https://four.meme/en/token/0x5843591afe21e7430115162e20c576d5ea764444';
  const EXPLORER_URL = 'https://bscscan.com/token/0x5843591afe21e7430115162e20c576d5ea764444';

  const fullLogs = [
    'INITIALIZING PINEAPPLE PROTOCOL [PAAPPL]...',
    'ESTABLISHING SECURE RPC TUNNEL TO BNB SMART CHAIN...',
    'SYNCING BEP-20 CONTRACT ARCHITECTURE...',
    'VERIFYING ON-CHAIN ADDRESS 0x5843...4444...',
    'CHECKING DECENTRALIZED LIQUIDITY TOPOLOGY...',
    'CORE ENGINE OPTIMAL. SYSTEM READY.'
  ];

  // 1. Terminal Typing Effect
  useEffect(() => {
    if (stage !== 'terminal') return;

    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex < fullLogs.length) {
        setTerminalLines(prev => [...prev, fullLogs[currentIndex]]);
        currentIndex++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setStage('reveal');
        }, 800);
      }
    }, 450);

    return () => clearInterval(interval);
  }, [stage]);

  // 2. Reveal Sequence Timer
  useEffect(() => {
    if (stage === 'reveal') {
      const timer = setTimeout(() => {
        setStage('main');
      }, 2600);
      return () => clearTimeout(timer);
    }
  }, [stage]);

  // Keyboard navigation & Esc skip
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && (stage === 'terminal' || stage === 'reveal')) {
        setStage('main');
      }
      if (stage === 'main') {
        if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
          handleNextScene();
        } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
          handlePrevScene();
        } else if (['1', '2', '3', '4', '5'].includes(e.key)) {
          changeScene(parseInt(e.key, 10));
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [stage, currentScene]);

  // Mouse Parallax for Scene 1
  const handleMouseMove = (e) => {
    if (currentScene !== 1) return;
    const { clientX, clientY } = e;
    const x = (clientX / window.innerWidth - 0.5) * 20;
    const y = (clientY / window.innerHeight - 0.5) * 20;
    setMousePos({ x, y });
  };

  // 3. Scene Switch with 3D Flip
  const changeScene = (targetScene) => {
    if (targetScene === currentScene || targetScene < 1 || targetScene > 5) return;
    const direction = targetScene > currentScene ? 'flipping-next' : 'flipping-prev';
    setFlipDirection(direction);

    setTimeout(() => {
      setCurrentScene(targetScene);
      setFlipDirection('');
    }, 420);
  };

  const handleNextScene = () => {
    if (currentScene < 5) changeScene(currentScene + 1);
  };

  const handlePrevScene = () => {
    if (currentScene > 1) changeScene(currentScene - 1);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(CONTRACT_ADDRESS);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  // 4. Interactive Canvas Network Simulation (Scene 3)
  useEffect(() => {
    if (stage !== 'main' || currentScene !== 3) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const width = canvas.width = canvas.parentElement.clientWidth;
    const height = canvas.height = canvas.parentElement.clientHeight;

    const nodeCount = 38;
    const nodes = [];

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.9,
        vy: (Math.random() - 0.5) * 0.9,
        radius: Math.random() * 2.5 + 1.5,
        pulse: Math.random() * Math.PI
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw Grid Lines
      ctx.strokeStyle = 'rgba(255, 230, 0, 0.05)';
      ctx.lineWidth = 1;
      const gridSize = 40;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Draw Connections
      for (let i = 0; i < nodeCount; i++) {
        for (let j = i + 1; j < nodeCount; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(255, 230, 0, ${0.35 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      // Draw Nodes
      nodes.forEach(node => {
        node.x += node.vx;
        node.y += node.vy;
        node.pulse += 0.04;

        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;

        const dynamicRadius = node.radius + Math.sin(node.pulse) * 0.7;

        ctx.beginPath();
        ctx.arc(node.x, node.y, Math.max(1, dynamicRadius), 0, Math.PI * 2);
        ctx.fillStyle = '#FFE600';
        ctx.shadowColor = '#FFE600';
        ctx.shadowBlur = 10;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => cancelAnimationFrame(animationFrameId);
  }, [stage, currentScene]);

  return (
    <div className="lpc-viewport" onMouseMove={handleMouseMove}>
      {/* Sci-Fi Overlay Scanlines & Vignette */}
      <div className="lpc-scanlines" />
      <div className="lpc-vignette" />

      {/* STAGE 1: OPENING TERMINAL */}
      {stage === 'terminal' && (
        <div className="lpc-intro-screen">
          <div className="lpc-terminal-box">
            <div className="lpc-terminal-header">
              <span>SYSTEM BOOTSTRAP // PROTOCOL v2.6.4</span>
              <span>BNB-CHAIN // BEP-20</span>
            </div>
            <div className="lpc-terminal-log">
              {terminalLines.map((line, idx) => (
                <div key={idx} className="lpc-log-line">
                  <span style={{ color: '#F5A623', fontSize: '0.75rem' }}>&gt;</span>
                  <span>{line}</span>
                </div>
              ))}
              <div className="lpc-log-line">
                <span style={{ color: '#F5A623', fontSize: '0.75rem' }}>&gt;</span>
                <span className="lpc-cursor" />
              </div>
            </div>
          </div>
          <button
            type="button"
            className="lpc-skip-btn"
            onClick={() => setStage('main')}
          >
            SKIP SEQUENCE [ESC]
          </button>
        </div>
      )}

      {/* STAGE 2: PINEAPPLE LOGO REVEAL */}
      {stage === 'reveal' && (
        <div className="lpc-reveal-screen">
          <div className="lpc-reveal-orb">
            <div className="lpc-reveal-halo" />
            <div className="lpc-reveal-scanring" />
            <img
              src="/assets/paappl-lpc-logo.png"
              alt="Geometric Pineapple Emblem"
              className="lpc-reveal-logo"
            />
          </div>
          <div className="lpc-reveal-text">
            LEMON PINE COIN // INITIALIZED
          </div>
        </div>
      )}

      {/* STAGE 3: MAIN CINEMATIC EXPERIENCE */}
      {stage === 'main' && (
        <>
          {/* Minimal Sci-Fi Top HUD */}
          <header className="lpc-hud-top">
            <div className="lpc-hud-left">
              <div className="lpc-hud-brand">
                <img
                  src="/assets/paappl-lpc-logo.png"
                  alt="Pineapple Icon"
                  className="lpc-hud-mini-logo"
                />
                <div className="lpc-hud-telemetry">
                  LPC-SYS // <span className="active">BNB SMART CHAIN</span>
                </div>
              </div>
            </div>

            <div className="lpc-hud-right">
              <button
                type="button"
                className="lpc-hud-btn"
                onClick={() => {
                  setTerminalLines([]);
                  setStage('terminal');
                }}
                title="Replay Cinematic Intro"
              >
                <RotateCcw size={12} />
                <span>REPLAY INTRO</span>
              </button>

              <Link to="/" className="lpc-hud-btn">
                <span>← LEMON INDIA DAO</span>
              </Link>
            </div>
          </header>

          {/* 3D Scene Viewport with Screen-Flip Animation */}
          <div className={`lpc-scene-viewport ${flipDirection}`}>
            <div className="lpc-scene-container">
              {/* SCENE 1: THE COIN */}
              {currentScene === 1 && (
                <div className="lpc-hero-scene">
                  <div
                    className="lpc-hero-pineapple-wrap"
                    style={{
                      transform: `rotateY(${mousePos.x}deg) rotateX(${-mousePos.y}deg)`
                    }}
                  >
                    <div className="lpc-hero-glimmer" />
                    <img
                      src="/assets/paappl-lpc-logo.png"
                      alt="Lemon Pine Coin Geometric Pineapple Emblem"
                      className="lpc-hero-pineapple"
                    />
                  </div>

                  <div className="lpc-hero-ticker">TICKER // LPC [PAAPPL]</div>

                  <h1 className="lpc-hero-title">
                    LEMON PINE <span className="glow">COIN</span>
                  </h1>

                  <p className="lpc-hero-desc">
                    A cinematic decentralized cryptocurrency deployed on BNB Smart Chain. Designed for transparent digital experimentation, autonomous community liquidity, and technological exploration.
                  </p>

                  <div className="lpc-hero-actions">
                    <button
                      type="button"
                      className="lpc-btn-primary"
                      onClick={() => changeScene(2)}
                    >
                      <span>INSPECT PROTOCOL HUD</span>
                      <ArrowRight size={16} />
                    </button>
                    <a
                      href={TRADING_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="lpc-btn-secondary"
                    >
                      <span>ACCESS TRADING POOL</span>
                      <ArrowUpRight size={16} />
                    </a>
                  </div>
                </div>
              )}

              {/* SCENE 2: PROTOCOL INFORMATION (TERMINAL HUD) */}
              {currentScene === 2 && (
                <div className="lpc-protocol-scene">
                  <div className="lpc-cyber-panel">
                    <div className="lpc-panel-title">
                      <Terminal size={22} color="var(--lpc-yellow)" />
                      <span>PROTOCOL PARAMETERS // BNB BEP-20</span>
                    </div>

                    <table className="lpc-spec-table">
                      <tbody>
                        <tr className="lpc-spec-row">
                          <td className="lpc-spec-label">TOKEN NAME</td>
                          <td className="lpc-spec-val">Lemon Pine Coin (Lemon Pineapple Coin)</td>
                        </tr>
                        <tr className="lpc-spec-row">
                          <td className="lpc-spec-label">TICKER SYMBOL</td>
                          <td className="lpc-spec-val" style={{ color: 'var(--lpc-yellow)', fontWeight: 700 }}>
                            LPC / PAAPPL
                          </td>
                        </tr>
                        <tr className="lpc-spec-row">
                          <td className="lpc-spec-label">LEDGER NETWORK</td>
                          <td className="lpc-spec-val">BNB Smart Chain (Binance Smart Chain)</td>
                        </tr>
                        <tr className="lpc-spec-row">
                          <td className="lpc-spec-label">STANDARD</td>
                          <td className="lpc-spec-val">BEP-20 Standard Smart Contract</td>
                        </tr>
                        <tr className="lpc-spec-row">
                          <td className="lpc-spec-label">DECIMALS</td>
                          <td className="lpc-spec-val">18</td>
                        </tr>
                        <tr className="lpc-spec-row">
                          <td className="lpc-spec-label">DAO DISTINCTION</td>
                          <td className="lpc-spec-val" style={{ color: '#A0A0A0', fontSize: '0.88rem' }}>
                            Created by Lemon India DAO. Holding LPC is separate from LP crowdfunding tokens and does not grant ownership of the DAO treasury.
                          </td>
                        </tr>
                      </tbody>
                    </table>

                    <div style={{ marginBottom: 12, fontSize: '0.78rem', color: 'var(--lpc-amber)', letterSpacing: '0.12em' }}>
                      VERIFIED ON-CHAIN CONTRACT ADDRESS
                    </div>
                    <div className="lpc-contract-hud">
                      <span className="lpc-contract-address">{CONTRACT_ADDRESS}</span>
                      <button
                        type="button"
                        onClick={handleCopy}
                        className="lpc-copy-cyber-btn"
                        aria-label="Copy contract address"
                      >
                        {copied ? (
                          <>
                            <Check size={14} />
                            <span>COPIED TO BUFFER</span>
                          </>
                        ) : (
                          <>
                            <Copy size={14} />
                            <span>COPY ADDRESS</span>
                          </>
                        )}
                      </button>
                    </div>

                    <div style={{ display: 'flex', gap: 14, marginTop: 24, flexWrap: 'wrap' }}>
                      <a
                        href={EXPLORER_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="lpc-btn-secondary"
                        style={{ padding: '10px 20px', fontSize: '0.82rem' }}
                      >
                        <span>INSPECT ON BSCSCAN</span>
                        <ExternalLink size={13} />
                      </a>
                      <button
                        type="button"
                        className="lpc-btn-primary"
                        style={{ padding: '10px 20px', fontSize: '0.82rem' }}
                        onClick={() => changeScene(3)}
                      >
                        <span>VIEW NETWORK SIMULATION</span>
                        <ArrowRight size={13} />
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* SCENE 3: NETWORK (INTERACTIVE CANVAS GRID) */}
              {currentScene === 3 && (
                <div className="lpc-network-scene">
                  <div style={{ marginBottom: 20 }}>
                    <div style={{ fontSize: '0.78rem', color: 'var(--lpc-amber)', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
                      REAL-TIME TOPOLOGY
                    </div>
                    <h2 style={{ fontFamily: 'var(--lpc-display)', fontSize: '2rem', color: '#fff', margin: '4px 0' }}>
                      DECENTRALIZED NODE CONSTELLATION
                    </h2>
                  </div>

                  <div className="lpc-canvas-wrap">
                    <canvas ref={canvasRef} className="lpc-canvas-element" />
                    <div className="lpc-canvas-overlay">
                      <div>TOPOLOGY // BNB-CHAIN PEERS</div>
                      <div style={{ color: '#fff', marginTop: 4 }}>SIMULATION // ACTIVE MESH</div>
                    </div>
                    <div className="lpc-canvas-footer">
                      * ILLUSTRATIVE NETWORK SIMULATION // DECENTRALIZED TOPOLOGY
                    </div>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'center', gap: 16, marginTop: 24 }}>
                    <button
                      type="button"
                      className="lpc-btn-primary"
                      onClick={() => changeScene(4)}
                    >
                      <span>EXPLORE TRADING PORTALS</span>
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              )}

              {/* SCENE 4: EXPLORE PORTALS */}
              {currentScene === 4 && (
                <div className="lpc-explore-scene">
                  <div style={{ textAlign: 'center', marginBottom: 28 }}>
                    <div style={{ fontSize: '0.78rem', color: 'var(--lpc-amber)', letterSpacing: '0.2em' }}>
                      GATEWAYS & MARKET ACCESS
                    </div>
                    <h2 style={{ fontFamily: 'var(--lpc-display)', fontSize: '2.4rem', color: '#fff', margin: '6px 0' }}>
                      VERIFIED ACCESS PORTALS
                    </h2>
                    <p style={{ color: '#A0A0A0', fontSize: '0.94rem' }}>
                      Direct cryptographic links to external decentralized liquidity pools and telemetry.
                    </p>
                  </div>

                  <div className="lpc-portals-grid">
                    <a
                      href={TRADING_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="lpc-portal-card"
                    >
                      <div className="lpc-portal-badge">PRIMARY AMM POOL</div>
                      <div className="lpc-portal-title">
                        <span>four.meme Portal</span>
                        <ArrowUpRight size={20} color="var(--lpc-yellow)" />
                      </div>
                      <p className="lpc-portal-desc">
                        Trade Lemon Pine Coin on the four.meme decentralized automated market maker. Inspect current pricing, pools, and swap parameters.
                      </p>
                      <div className="lpc-portal-link">
                        <span>LAUNCH AMM TERMINAL</span>
                        <ExternalLink size={13} />
                      </div>
                    </a>

                    <a
                      href={EXPLORER_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="lpc-portal-card"
                    >
                      <div className="lpc-portal-badge">BLOCKCHAIN AUDIT</div>
                      <div className="lpc-portal-title">
                        <span>BscScan Explorer</span>
                        <ArrowUpRight size={20} color="var(--lpc-yellow)" />
                      </div>
                      <p className="lpc-portal-desc">
                        Inspect verified bytecode, real-time transfers, token holders, and contract interactions on the official BNB Chain block explorer.
                      </p>
                      <div className="lpc-portal-link">
                        <span>VIEW CONTRACT ON BSCSCAN</span>
                        <ExternalLink size={13} />
                      </div>
                    </a>
                  </div>

                  <div style={{ textAlign: 'center', marginTop: 32 }}>
                    <button
                      type="button"
                      className="lpc-btn-primary"
                      onClick={() => changeScene(5)}
                    >
                      <span>READ THE MANIFESTO</span>
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              )}

              {/* SCENE 5: THE MANIFESTO */}
              {currentScene === 5 && (
                <div className="lpc-manifesto-scene">
                  <div className="lpc-manifesto-card">
                    <div className="lpc-manifesto-header">
                      THE PINEAPPLE <span className="accent">MANIFESTO</span>
                    </div>

                    <div className="lpc-manifesto-body">
                      <p>
                        Lemon Pine Coin (PAAPPL) was conceived as a testament to open, borderless digital experimentation. Born in India as an autonomous cryptocurrency deployed on BNB Smart Chain, LPC represents curiosity, decentralized community coordination, and technological exploration.
                      </p>

                      <div className="lpc-manifesto-quote">
                        "Decentralization is not just an architecture—it is an invitation to build, experiment, and collaborate without artificial boundaries."
                      </div>

                      <p>
                        We reject false promises, fabricated guarantees, and artificial presale hype. LPC operates as an independent digital asset. Holding LPC confers neither ownership of the Lemon India DAO treasury nor traditional equity in any corporate entity. It stands on the cryptographic principles of the blockchain network it inhabits.
                      </p>

                      <p style={{ fontSize: '0.86rem', color: '#888', borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: 16 }}>
                        RISK DISCLOSURE: Trading cryptocurrencies involves substantial market and technical risks. Prices fluctuate rapidly and liquidity cannot be guaranteed. Never allocate capital you cannot afford to lose completely.
                      </p>
                    </div>

                    <div className="lpc-manifesto-nav">
                      <button
                        type="button"
                        className="lpc-btn-primary"
                        onClick={() => changeScene(1)}
                      >
                        <RotateCcw size={14} />
                        <span>RETURN TO SCENE 1 [COIN]</span>
                      </button>

                      <Link to="/" className="lpc-btn-secondary">
                        <span>LEMON INDIA DAO PORTAL</span>
                        <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Minimal Bottom Scene Selector HUD */}
          <nav className="lpc-hud-bottom" aria-label="Scene navigation">
            <button
              type="button"
              className={`lpc-scene-tab ${currentScene === 1 ? 'active' : ''}`}
              onClick={() => changeScene(1)}
            >
              01 // COIN
            </button>
            <button
              type="button"
              className={`lpc-scene-tab ${currentScene === 2 ? 'active' : ''}`}
              onClick={() => changeScene(2)}
            >
              02 // PROTOCOL
            </button>
            <button
              type="button"
              className={`lpc-scene-tab ${currentScene === 3 ? 'active' : ''}`}
              onClick={() => changeScene(3)}
            >
              03 // NETWORK
            </button>
            <button
              type="button"
              className={`lpc-scene-tab ${currentScene === 4 ? 'active' : ''}`}
              onClick={() => changeScene(4)}
            >
              04 // EXPLORE
            </button>
            <button
              type="button"
              className={`lpc-scene-tab ${currentScene === 5 ? 'active' : ''}`}
              onClick={() => changeScene(5)}
            >
              05 // MANIFESTO
            </button>
          </nav>

          {/* Corner Floating Navigation Arrows */}
          <div className="lpc-hud-controls">
            <button
              type="button"
              className="lpc-nav-arrow"
              onClick={handlePrevScene}
              disabled={currentScene === 1}
              aria-label="Previous Scene"
              title="Previous Scene (Left Arrow)"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              type="button"
              className="lpc-nav-arrow"
              onClick={handleNextScene}
              disabled={currentScene === 5}
              aria-label="Next Scene"
              title="Next Scene (Right Arrow)"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </>
      )}
    </div>
  );
}
