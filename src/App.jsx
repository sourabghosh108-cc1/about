import React from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import EcosystemPage from './pages/EcosystemPage';
import ProductsPage from './pages/ProductsPage';
import InvestorRelationsPage from './pages/InvestorRelationsPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import LicensePage from './pages/LicensePage';
import TermsPage from './pages/TermsPage';
import RiskDisclosurePage from './pages/RiskDisclosurePage';
import LpTokensPage from './pages/LpTokensPage';
import LpcPage from './pages/LpcPage';
import ContactPage from './pages/ContactPage';
import FaqPage from './pages/FaqPage';
import VidyaversePage from './pages/VidyaversePage';

// 404 Fallback
function NotFoundPage() {
  return (
    <div className="section" style={{ textAlign: 'center', padding: '100px 20px' }}>
      <div className="container">
        <span className="badge badge-lemon" style={{ marginBottom: 16 }}>404 Error</span>
        <h1 style={{ fontSize: '3rem', marginBottom: 16 }}>Page Not Found</h1>
        <p style={{ maxWidth: 540, margin: '0 auto 28px', color: 'var(--color-text-muted)' }}>
          The requested page does not exist or has been moved. Explore our verified ecosystem sections below.
        </p>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/" className="btn btn-primary">Return to Homepage</Link>
          <Link to="/ecosystem" className="btn btn-secondary">Ecosystem Overview</Link>
          <Link to="/faq" className="btn btn-secondary">FAQ</Link>
        </div>
      </div>
    </div>
  );
}

function AppContent() {
  const location = useLocation();
  const isLpc = location.pathname === '/lpc';

  return (
    <div className="app-wrapper">
      <ScrollToTop />
      {!isLpc && <Navbar />}
      <main className={!isLpc ? "main-content" : ""}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/ecosystem" element={<EcosystemPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/vidyaverse" element={<VidyaversePage />} />
          <Route path="/investor-relations" element={<InvestorRelationsPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/license" element={<LicensePage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/risk-disclosure" element={<RiskDisclosurePage />} />
          <Route path="/lp-tokens" element={<LpTokensPage />} />
          <Route path="/lpc" element={<LpcPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      {!isLpc && <Footer />}
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
