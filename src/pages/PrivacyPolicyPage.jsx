import React from 'react';
import LegalLayout from '../components/LegalLayout';
import NoticeBox from '../components/NoticeBox';

export default function PrivacyPolicyPage() {
  return (
    <LegalLayout title="Privacy Policy" lastUpdated="October 27, 2026" badgeText="Data & Privacy">
      <NoticeBox type="info" title="Policy Scope & Architectural Integrity">
        This Privacy Policy explains how Lemon India DAO handles information through this official website. We do not operate invasive advertising trackers, sell personal data, or store wallet seed phrases. Public blockchain transactions executed on BNB Chain remain permanently public on decentralized networks.
      </NoticeBox>

      <section className="legal-section">
        <h2>1. Introduction</h2>
        <p>
          Lemon India DAO ("we", "our", or "the DAO") is committed to transparent and responsible digital practices. This Privacy Policy informs visitors of our policies regarding the collection, use, and disclosure of personal data when you use our website and services, and the choices you have associated with that data.
        </p>
      </section>

      <section className="legal-section">
        <h2>2. Scope of this Policy</h2>
        <p>
          This policy applies specifically to the official Lemon India DAO web portal and digital interfaces directly hosted under our domain. It governs interactions through our informational pages, contact mechanisms, and public documentation.
        </p>
        <p>
          It does <strong>not</strong> apply to independent third-party platforms linked from our website—such as the XDAO application, four.meme trading platform, BscScan explorer, or independent wallets—each of which maintains its own autonomous terms and privacy procedures.
        </p>
      </section>

      <section className="legal-section">
        <h2>3. Information Collected</h2>
        <h3>3.1 Information You Provide Directly</h3>
        <p>
          We collect personal information only when you voluntarily submit it to us, such as when sending an inquiry via our contact form or writing to our contact email (<code>lemonindiaincorporated@gmail.com</code>). This may include:
        </p>
        <ul>
          <li>Your name or online alias.</li>
          <li>Your email address.</li>
          <li>The contents of your message, feedback, or inquiry.</li>
        </ul>

        <h3>3.2 Technical & Usage Information</h3>
        <p>
          When accessing web pages, standard HTTP server logs may automatically receive ephemeral technical data, including your IP address, browser type, operating system version, referrer headers, and timestamp of access. This information is used strictly to deliver web assets and protect against denial-of-service attempts.
        </p>

        <h3>3.3 Web3 Wallets & Public Blockchain Data</h3>
        <p>
          This informational website does <strong>not</strong> require you to connect a Web3 wallet, nor do we request, handle, or store your private cryptographic keys, seed recovery phrases, or wallet passwords.
        </p>
        <p>
          If you interact with Lemon India DAO smart contracts or Lemon Pine Coin (LPC) via external interfaces (such as XDAO or four.meme), your public blockchain address, transaction hashes, timestamps, and transfer amounts are published directly to the public BNB Chain ledger. Public blockchain transactions are irreversible and globally readable by design; Lemon India DAO does not control, encrypt, or expunge public on-chain ledger records.
        </p>
      </section>

      <section className="legal-section">
        <h2>4. Cookies and Local Storage</h2>
        <p>
          Our website avoids non-essential tracking cookies, profiling beacons, or cross-site advertising networks. We may utilize standard browser local storage exclusively to persist technical user preferences (such as accordion states, filter selections, or responsive layout settings). You can disable cookies and local storage through your browser settings without disabling reading access to our site.
        </p>
      </section>

      <section className="legal-section">
        <h2>5. Third-Party Services and External Links</h2>
        <p>
          Our website contains links to external platforms, including:
        </p>
        <ul>
          <li><strong>Hind.com:</strong> Our ecosystem search and discovery project.</li>
          <li><strong>XDAO:</strong> The decentralized organization platform hosting our multi-signature DAO configuration and crowdfunding module.</li>
          <li><strong>four.meme & BscScan:</strong> Third-party decentralized exchange and block explorer utilities.</li>
        </ul>
        <p>
          We do not operate these external third-party services and are not responsible for their independent privacy practices. We encourage you to review their specific policies upon visiting their respective domains.
        </p>
      </section>

      <section className="legal-section">
        <h2>6. How Information Is Used</h2>
        <p>
          Any information collected is used solely for legitimate operational purposes:
        </p>
        <ul>
          <li>To respond to your direct inquiries, feedback, or technical support requests.</li>
          <li>To monitor and maintain server performance, load balance, and mitigate cybersecurity threats.</li>
          <li>To enforce compliance with our website Terms and Conditions and applicable legal obligations.</li>
        </ul>
        <p>
          We never sell, rent, or trade your personal email or communications to commercial data brokers or advertisers.
        </p>
      </section>

      <section className="legal-section">
        <h2>7. Data Sharing and Disclosures</h2>
        <p>
          We do not disclose personal information to third parties except:
        </p>
        <ul>
          <li>When required by enforceable legal process, court order, or governmental demand under applicable law.</li>
          <li>To protect the security, integrity, and operational safety of the DAO's infrastructure and community against malicious attacks.</li>
          <li>With core technical contributors strictly on a need-to-know basis to resolve reported technical defects.</li>
        </ul>
      </section>

      <section className="legal-section">
        <h2>8. Data Retention</h2>
        <p>
          Contact inquiries sent to our email address are retained only as long as necessary to fulfill the request, maintain communication history, or comply with legal recordkeeping obligations. Technical access logs are periodically rotated and deleted.
        </p>
      </section>

      <section className="legal-section">
        <h2>9. Information Security</h2>
        <p>
          We implement standard technological safeguards—including HTTPS SSL/TLS encryption for all web transit—to protect communications. However, no internet transmission or electronic storage method is 100% secure. You are encouraged to exercise personal caution when transmitting sensitive data over the internet.
        </p>
      </section>

      <section className="legal-section">
        <h2>10. User Rights & Choices</h2>
        <p>
          Depending on your jurisdiction, you may have rights under applicable privacy laws regarding your personal information, including the right to request access to, correction of, or deletion of personal communications you have sent to us. To exercise these rights, please contact us at the email provided below. Note that this cannot apply to public blockchain records permanently minted to BNB Chain.
        </p>
      </section>

      <section className="legal-section">
        <h2>11. International Processing</h2>
        <p>
          As a decentralized ecosystem with contributors and users worldwide, information sent to us may be processed on servers located outside your country of residence. By utilizing our services, you acknowledge such cross-border processing in accordance with this policy.
        </p>
      </section>

      <section className="legal-section">
        <h2>12. Children's Privacy</h2>
        <p>
          Our website and products are directed toward general technology and digital asset participants and are not designed or intended for individuals under the age of 18 (or the age of legal majority in your jurisdiction). We do not knowingly collect personal data from minors.
        </p>
      </section>

      <section className="legal-section">
        <h2>13. Changes to this Privacy Policy</h2>
        <p>
          We may update our Privacy Policy periodically to reflect technological adjustments, new product features, or regulatory updates. Any changes will be published directly on this page with an updated "Last Updated" date.
        </p>
      </section>

      <section className="legal-section">
        <h2>14. Contact Information</h2>
        <p>
          For privacy inquiries, rights requests, or questions regarding our data practices, contact:
        </p>
        <p>
          <strong>Lemon India DAO Communications</strong><br />
          Email: <a href="mailto:lemonindiaincorporated@gmail.com">lemonindiaincorporated@gmail.com</a>
        </p>
      </section>
    </LegalLayout>
  );
}
