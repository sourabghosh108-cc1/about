import React from 'react';
import LegalLayout from '../components/LegalLayout';
import NoticeBox from '../components/NoticeBox';

export default function LicensePage() {
  return (
    <LegalLayout title="License and Intellectual Property" lastUpdated="October 27, 2026" badgeText="IP & Copyright">
      <NoticeBox type="info" title="Intellectual Property Statement">
        This document outlines the ownership, copyright, trademark, and permitted usage terms governing the Lemon India DAO web portal, original software implementations, and associated digital assets.
      </NoticeBox>

      <section className="legal-section">
        <h2>1. Website Content and Original Brand Assets</h2>
        <p>
          Unless otherwise stated, all original text, graphic designs, interfaces, color schemes, logos—including the <strong>Lemon India "Li" emblem</strong> and the <strong>PAAPPL Lemon Pineapple sticker icon</strong>—and compilation of information on this website are the proprietary creative property of Lemon India DAO and its contributors.
        </p>
        <p>
          All rights not expressly granted under this document or a written instrument signed by authorized DAO signatories are strictly reserved.
        </p>
      </section>

      <section className="legal-section">
        <h2>2. Software and Source Code Licensing</h2>
        <p>
          The source code developed for this front-end web portal is maintained for public transparency and verifiable communication of DAO parameters.
        </p>
        <p>
          <strong>Open-Source Status Notice:</strong> Except where an explicit open-source license (such as MIT, Apache 2.0, or GPL) is attached directly to an individual repository file or distributed release archive, no blanket open-source license is implied or granted for commercial reuse, closed re-packaging, or proprietary redistribution of original Lemon India DAO codebases.
        </p>
        <p>
          Smart contracts deployed to public networks (including the BEP-20 contracts on BNB Chain) are publicly auditable pursuant to blockchain transparency requirements, but such public visibility does not confer trademark or derivative branding rights.
        </p>
      </section>

      <section className="legal-section">
        <h2>3. Third-Party Components and Dependencies</h2>
        <p>
          This website is built utilizing open-source libraries and digital assets, each subject to its respective governing license:
        </p>
        <ul>
          <li><strong>React & React DOM:</strong> Licensed under the MIT License (© Meta Platforms, Inc. and affiliates).</li>
          <li><strong>Vite:</strong> Licensed under the MIT License (© Yuxi (Evan) You & Vite contributors).</li>
          <li><strong>Lucide Icons:</strong> Licensed under the ISC License (© Lucide Project).</li>
          <li><strong>Google Fonts (Outfit, Plus Jakarta Sans, JetBrains Mono):</strong> Distributed under the SIL Open Font License (OFL) and Apache License 2.0.</li>
        </ul>
        <p>
          Lemon India DAO acknowledges and respects all upstream authors and contributors whose libraries facilitate our technology infrastructure.
        </p>
      </section>

      <section className="legal-section">
        <h2>4. Permitted User Permissions</h2>
        <p>
          Visitors and community participants are granted a limited, revocable, non-exclusive, non-transferable license to:
        </p>
        <ul>
          <li>View, read, and navigate this website on personal computers, smartphones, and tablets for non-commercial informational purposes.</li>
          <li>Quote brief factual snippets with appropriate attribution and a direct clickable link to the source page on this portal.</li>
          <li>Download public documentation for personal reference and educational review.</li>
        </ul>
        <p>
          You are <strong>not permitted</strong> to:
        </p>
        <ul>
          <li>Scrape, replicate, mirror, or publish unauthorized duplicate copies of this website to deceive users or conduct phishing attacks.</li>
          <li>Modify original logos, brand icons, or legal notices without prior written authorization.</li>
          <li>Falsely represent an affiliation with, endorsement by, or employment within Lemon India DAO.</li>
        </ul>
      </section>

      <section className="legal-section">
        <h2>5. Trademarks and Brand Guidelines</h2>
        <p>
          The names <strong>"Lemon India DAO"</strong>, <strong>"Hind.com"</strong>, <strong>"Lemon Pine Coin"</strong>, <strong>"Lemon Pineapple Coin"</strong>, and <strong>"PAAPPL"</strong>, alongside associated logos, wordmarks, and visual emblems, represent identifying markers of the ecosystem.
        </p>
        <p>
          We do not make unsupported claims of registered trademark certificates in jurisdictions where filings have not completed; nevertheless, common-law and brand integrity protections apply to protect community members from impersonation, fraud, and deceptive cloning.
        </p>
      </section>

      <section className="legal-section">
        <h2>6. Inquiries and Permissions</h2>
        <p>
          For licensing permissions, academic attribution queries, or copyright inquiries, please write to:
        </p>
        <p>
          <strong>Lemon India DAO Intellectual Property</strong><br />
          Email: <a href="mailto:lemonindiaincorporated@gmail.com">lemonindiaincorporated@gmail.com</a>
        </p>
      </section>
    </LegalLayout>
  );
}
