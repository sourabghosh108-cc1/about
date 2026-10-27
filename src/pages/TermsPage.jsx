import React from 'react';
import LegalLayout from '../components/LegalLayout';
import NoticeBox from '../components/NoticeBox';

export default function TermsPage() {
  return (
    <LegalLayout title="Terms and Conditions" lastUpdated="October 27, 2026" badgeText="Terms of Use">
      <NoticeBox type="warning" title="Important Terms of Use Notice">
        Please read these Terms and Conditions carefully before using the Lemon India DAO website. By accessing or browsing any part of this site, you agree to be bound by these terms. If you do not agree with any part, you must refrain from using the website.
      </NoticeBox>

      <section className="legal-section">
        <h2>1. Acceptance and Scope</h2>
        <p>
          These Terms and Conditions ("Terms") govern your access to and use of the website, documentation, and user interfaces provided by Lemon India DAO ("we", "us", or "the DAO").
        </p>
        <p>
          These Terms apply to all visitors, contributors, and users who access the website. Certain specialized services or smart-contract interactions (such as the XDAO crowdfunding module or decentralized trading pools) may be subject to additional technical rules and platform-specific smart-contract terms.
        </p>
      </section>

      <section className="legal-section">
        <h2>2. Website Access and Informational Nature</h2>
        <p>
          The materials on this website are provided strictly for general informational, educational, and research purposes.
        </p>
        <p>
          Nothing contained on this website constitutes professional financial, legal, investment, or tax advice. You should consult independent qualified professionals prior to making any financial or digital asset decisions.
        </p>
      </section>

      <section className="legal-section">
        <h2>3. Digital Assets and Blockchain Interactions</h2>
        <p>
          Visitors may choose to interact with public blockchain contracts—including the Lemon India DAO contracts on XDAO or Lemon Pine Coin (LPC) contracts on BNB Chain.
        </p>
        <ul>
          <li><strong>Autonomous Protocols:</strong> Blockchain transactions are executed by autonomous decentralized nodes, not by Lemon India DAO servers. Once broadcast, transactions cannot be cancelled, reversed, or refunded.</li>
          <li><strong>No Fiduciary Relationship:</strong> Browsing this website or holding LP tokens or LPC does not establish a partnership, joint venture, employment, or fiduciary relationship between you and Lemon India DAO.</li>
          <li><strong>Non-Securities Status:</strong> Tokens associated with the project do not constitute shares, securities, or ownership stakes in any registered corporation.</li>
        </ul>
      </section>

      <section className="legal-section">
        <h2>4. Prohibited Misuse and User Conduct</h2>
        <p>
          You agree not to use the website or associated communication channels to:
        </p>
        <ul>
          <li>Engage in any unlawful, fraudulent, defamatory, or deceptive conduct.</li>
          <li>Attempt to breach, probe, test the vulnerability of, or compromise our web servers or networks.</li>
          <li>Deploy automated scripts, bots, spiders, or scrapers that place an unreasonable or disproportionately large load on our infrastructure.</li>
          <li>Impersonate Lemon India DAO contributors, team members, or other users.</li>
          <li>Circumvent or manipulate any security features, access restrictions, or token purchase caps.</li>
        </ul>
      </section>

      <section className="legal-section">
        <h2>5. Intellectual Property Rights</h2>
        <p>
          All text, layouts, visual brand elements, graphics, and custom code provided on the website are protected by applicable copyright, trademark, and unfair competition laws. Use of our materials must strictly adhere to the terms set forth in our <a href="/license">License and IP Page</a>.
        </p>
      </section>

      <section className="legal-section">
        <h2>6. Third-Party Services and External Hyperlinks</h2>
        <p>
          Our website links to independent third-party websites and tools, including Hind.com, XDAO, four.meme, and BscScan. We do not control, endorse, or assume responsibility for the content, privacy practices, terms, or availability of these external platforms.
        </p>
      </section>

      <section className="legal-section">
        <h2>7. Website Availability and Modifications</h2>
        <p>
          We strive to keep the website accessible and updated, but we do not guarantee continuous, uninterrupted, or error-free availability. We reserve the right to modify, suspend, update, or discontinue any aspect of the website at any time without prior notice.
        </p>
      </section>

      <section className="legal-section">
        <h2>8. Accuracy and Informational Content</h2>
        <p>
          While we make reasonable efforts to verify facts and publish truthful information, website content is provided on an "as-is" and "as-available" basis. We make no warranties regarding completeness, timeliness, or absence of technical inaccuracies.
        </p>
      </section>

      <section className="legal-section">
        <h2>9. Limitation of Responsibility</h2>
        <p>
          To the maximum extent permitted by applicable law, Lemon India DAO and its individual contributors, developers, and community volunteers shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages—including loss of funds, token price volatility, smart contract defects, data loss, or business interruption—arising out of your access to, use of, or inability to use this website.
        </p>
        <p>
          <em>Note:</em> Nothing in these Terms shall exclude or limit liability that cannot be excluded or limited under mandatory applicable statutory consumer protection laws in your jurisdiction.
        </p>
      </section>

      <section className="legal-section">
        <h2>10. Changes to These Terms</h2>
        <p>
          We reserve the right to revise these Terms at our discretion. Updated terms take effect immediately upon posting to this page. Continued use of the website following changes constitutes acceptance of the revised Terms.
        </p>
      </section>

      <section className="legal-section">
        <h2>11. Contact Details</h2>
        <p>
          For questions, notices, or legal inquiries regarding these Terms and Conditions:
        </p>
        <p>
          <strong>Lemon India DAO Legal & Governance</strong><br />
          Email: <a href="mailto:lemonindiaincorporated@gmail.com">lemonindiaincorporated@gmail.com</a>
        </p>
      </section>
    </LegalLayout>
  );
}
