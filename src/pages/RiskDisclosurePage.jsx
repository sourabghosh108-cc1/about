import React from 'react';
import LegalLayout from '../components/LegalLayout';
import NoticeBox from '../components/NoticeBox';

export default function RiskDisclosurePage() {
  return (
    <LegalLayout title="Digital-Asset Risk Disclosure" lastUpdated="October 27, 2026" badgeText="Risk Transparency">
      <NoticeBox type="warning" title="Crucial Warning: Risk of Substantial Financial Loss">
        Participation in decentralized autonomous organizations (DAOs), smart-contract crowdfunding, and cryptocurrency trading involves high degrees of financial, technical, and regulatory risk. <strong>You may lose all of the capital you allocate.</strong> Never participate with funds you cannot afford to lose completely.
      </NoticeBox>

      <section className="legal-section">
        <h2>1. Digital Asset Volatility</h2>
        <p>
          Cryptocurrencies, including Lemon Pine Coin (LPC / PAAPPL) and DAO-related participation tokens, are subject to extreme market price volatility. Asset prices can fluctuate rapidly within minutes due to global market sentiment, macroeconomic conditions, regulatory announcements, technical developments, or trading illiquidity.
        </p>
        <p>
          Historical transactions or past market prices provide no assurance or indication of future performance. Lemon India DAO does not promise, predict, or guarantee any price appreciation or capital preservation.
        </p>
      </section>

      <section className="legal-section">
        <h2>2. Liquidity and Secondary Market Risks</h2>
        <p>
          There is no guarantee that an active, orderly secondary market will develop or persist for any token mentioned on this website.
        </p>
        <p>
          Decentralized liquidity pools (such as automated market makers on four.meme or PancakeSwap) depend upon voluntary liquidity providers. If liquidity is low, attempting to buy or sell tokens may cause extreme slippage, high price impact, or may be entirely impossible. You may be unable to liquidate your tokens at your desired price or timeframe.
        </p>
      </section>

      <section className="legal-section">
        <h2>3. Smart Contract and Protocol Vulnerabilities</h2>
        <p>
          All blockchain transactions depend upon automated software code called smart contracts. Although contracts used by the DAO (including XDAO modules and standard BEP-20 implementations) undergo architectural testing, smart contracts inherently carry risks:
        </p>
        <ul>
          <li>Undiscovered bugs, coding flaws, or logic errors in the smart contract bytecode.</li>
          <li>Exploits by malicious third parties, reentrancy vulnerabilities, or flash-loan manipulations.</li>
          <li>Underlying blockchain network disruptions, consensus failures, hard forks, or gas fee spikes on BNB Chain.</li>
        </ul>
        <p>
          Smart contract transactions are executed autonomously by decentralized nodes and cannot be stopped, paused, reversed, or refunded once confirmed by the network.
        </p>
      </section>

      <section className="legal-section">
        <h2>4. Wallet Security & Private Key Responsibility</h2>
        <p>
          Web3 wallets are non-custodial. You are solely and exclusively responsible for the custody, security, and backup of your private keys and seed phrases:
        </p>
        <ul>
          <li><strong>Irreversible Loss:</strong> If you lose your wallet recovery phrase, nobody—including Lemon India DAO contributors—can recover your wallet or restore access to your assets.</li>
          <li><strong>Phishing & Malware:</strong> Malicious actors frequently clone legitimate websites or create deceptive social profiles. You must personally verify contract addresses and domain names before signing any transactions.</li>
          <li><strong>Malicious Signatures:</strong> Blindly signing unknown cryptographic permit messages or unlimited approval transactions can result in the immediate drainage of your wallet contents.</li>
        </ul>
      </section>

      <section className="legal-section">
        <h2>5. DAO Governance & Participation Realities</h2>
        <p>
          Governance mechanisms, voting thresholds, proposal requirements, and multi-signature controls depend entirely on the active smart contract configuration deployed on XDAO.
        </p>
        <p>
          Holding LP tokens or interacting with the DAO does not automatically grant individual unilateral control, managerial authority, or employment status within Lemon India DAO. Governance proposals are voted on according to configured quorum rules, and outcomes may not align with your individual preferences.
        </p>
      </section>

      <section className="legal-section">
        <h2>6. Crowdfunding Terms and Vesting Lockups</h2>
        <p>
          Contributions made via the XDAO crowdfunding module are subject to the specific campaign rules published at the time of participation:
        </p>
        <ul>
          <li>Allocations, token distribution schedules, and vesting lockups are enforced by code. Tokens subject to vesting cannot be withdrawn or traded until the programmed unlock date has passed.</li>
          <li>Fees associated with crowdfunding transactions, currency swaps, and blockchain gas are non-refundable.</li>
          <li>Crowdfunding contributions are allocated toward operational development, server hosting, and ecosystem expansion, and do not represent a refundable loan or bank deposit.</li>
        </ul>
      </section>

      <section className="legal-section">
        <h2>7. Regulatory, Legal, and Tax Uncertainty</h2>
        <p>
          The regulatory framework governing cryptocurrencies, digital tokens, DAOs, and smart contracts is evolving rapidly in India and globally:
        </p>
        <ul>
          <li>Future legislative or administrative decisions could restrict, tax, prohibit, or penalize the purchase, sale, transfer, or possession of digital assets.</li>
          <li>Tax obligations resulting from token acquisitions, capital gains, air-drops, or swaps are the sole responsibility of each participant in accordance with their local tax residency laws.</li>
        </ul>
      </section>

      <section className="legal-section">
        <h2>8. Total Loss of Funds</h2>
        <p>
          Due to the combination of market volatility, technological unpredictability, smart contract risks, and regulatory changes, there is a realistic risk that your contributions or token holdings could become completely worthless.
        </p>
        <p>
          You should only participate in Lemon India DAO or acquire LPC if you possess the technical understanding to evaluate the architecture independently and possess the financial capacity to bear a total loss of your contributed funds.
        </p>
      </section>

      <section className="legal-section">
        <h2>9. Questions & Clarifications</h2>
        <p>
          If you are uncertain about any of the technical or participation parameters described in this disclosure, we encourage you to seek independent advice or contact our team:
        </p>
        <p>
          <strong>Lemon India DAO Communications</strong><br />
          Email: <a href="mailto:lemonindiaincorporated@gmail.com">lemonindiaincorporated@gmail.com</a>
        </p>
      </section>
    </LegalLayout>
  );
}
