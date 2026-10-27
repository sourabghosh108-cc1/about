import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Send, CheckCircle2, AlertCircle, HelpCircle, MessageSquare } from 'lucide-react';
import NoticeBox from '../components/NoticeBox';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General Inquiry',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Please enter your name';
    if (!formData.email.trim()) {
      errs.email = 'Please enter your email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email address';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please provide your message';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters';
    }
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setSubmitted(true);
  };

  return (
    <div>
      {/* Header */}
      <section className="page-header dark">
        <div className="container">
          <div className="breadcrumbs">
            <Link to="/" style={{ color: 'rgba(255,255,255,0.7)' }}>Home</Link>
            <span className="separator" style={{ color: 'rgba(255,255,255,0.4)' }}>/</span>
            <span className="current" style={{ color: 'var(--color-lemon)' }}>Contact</span>
          </div>
          <div className="page-header-eyebrow">
            <span>Direct Communications</span>
          </div>
          <h1 className="page-title">Contact Lemon India DAO</h1>
          <p className="page-description">
            Reach out with technical feedback, research collaboration inquiries, governance questions, or ecosystem proposals.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section">
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'flex-start' }}>
            {/* Contact Details & Guidelines */}
            <div>
              <h2 style={{ fontSize: '1.85rem', marginBottom: '16px' }}>Get in Touch</h2>
              <p style={{ fontSize: '1.02rem', lineHeight: 1.7, marginBottom: '28px' }}>
                We welcome inquiries from software developers, testers exploring Hind.com, researchers in decentralized protocols, and community members.
              </p>

              <div className="card" style={{ padding: '28px', marginBottom: '24px', background: '#F8FAF5' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px' }}>
                  <div className="card-icon" style={{ width: 42, height: 42, marginBottom: 0 }}>
                    <Mail size={20} />
                  </div>
                  <div>
                    <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--color-primary)', fontWeight: 700 }}>
                      Official Email Contact
                    </span>
                    <h4 style={{ fontSize: '1.15rem', margin: 0 }}>
                      <a href="mailto:lemonindiaincorporated@gmail.com" style={{ color: 'var(--color-forest)', wordBreak: 'break-all' }}>
                        lemonindiaincorporated@gmail.com
                      </a>
                    </h4>
                  </div>
                </div>
                <p style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)', margin: 0, marginTop: '8px' }}>
                  Direct channel for technical questions, legal notices, and official ecosystem correspondence.
                </p>
              </div>

              <div className="card" style={{ padding: '24px', marginBottom: '24px' }}>
                <h4 style={{ fontSize: '1.1rem', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <HelpCircle size={18} color="var(--color-primary)" />
                  Before You Write
                </h4>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.88rem', color: 'var(--color-text-muted)' }}>
                  <li>• For answers to common questions, please check our <Link to="/faq">Frequently Asked Questions</Link>.</li>
                  <li>• For crowdfunding parameters, see the <Link to="/lp-tokens">LP Tokens Guide</Link>.</li>
                  <li>• For cryptocurrency specifications, review the <Link to="/lpc">LPC Guide</Link>.</li>
                  <li>• We will never ask for your private keys, passwords, or seed phrases.</li>
                </ul>
              </div>

              <NoticeBox type="info" title="Verified Presence">
                Lemon India DAO does not operate unverified call centers, physical customer desks, or unsolicited direct-messaging support. Official communications are routed strictly through the email address listed above.
              </NoticeBox>
            </div>

            {/* Interactive Form */}
            <div className="card" style={{ padding: '40px' }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '8px' }}>Send a Message</h3>
              <p style={{ fontSize: '0.92rem', color: 'var(--color-text-muted)', marginBottom: '24px' }}>
                Fill out the form below. If preferred, you can also write directly from your email client.
              </p>

              {submitted ? (
                <div style={{ background: '#EAF7EE', border: '1px solid #B8E4C4', borderRadius: 'var(--radius-md)', padding: '28px', textAlign: 'center' }}>
                  <CheckCircle2 size={42} color="var(--color-primary)" style={{ margin: '0 auto 12px' }} />
                  <h4 style={{ fontSize: '1.25rem', color: 'var(--color-forest)', marginBottom: '8px' }}>Message Received</h4>
                  <p style={{ fontSize: '0.92rem', color: 'var(--color-text-muted)', marginBottom: '18px' }}>
                    Thank you, <strong>{formData.name}</strong>. Your message regarding <em>"{formData.subject}"</em> has been recorded. You can also send a copy directly via your preferred email software:
                  </p>
                  <a
                    href={`mailto:lemonindiaincorporated@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`From: ${formData.name} (${formData.email})\n\n${formData.message}`)}`}
                    className="btn btn-primary btn-sm"
                  >
                    <span>Open in Email Client</span>
                    <Mail size={14} />
                  </a>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', subject: 'General Inquiry', message: '' });
                    }}
                    className="btn btn-secondary btn-sm"
                    style={{ marginTop: '12px', display: 'block', width: '100%' }}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <div className="form-group">
                    <label className="form-label" htmlFor="name">Your Name / Handle *</label>
                    <input
                      id="name"
                      type="text"
                      className="form-input"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Rahul Sharma"
                      aria-invalid={!!errors.name}
                    />
                    {errors.name && <div style={{ color: '#D9381E', fontSize: '0.82rem', marginTop: 4 }}>{errors.name}</div>}
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="email">Email Address *</label>
                    <input
                      id="email"
                      type="email"
                      className="form-input"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. name@example.com"
                      aria-invalid={!!errors.email}
                    />
                    {errors.email && <div style={{ color: '#D9381E', fontSize: '0.82rem', marginTop: 4 }}>{errors.email}</div>}
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="subject">Subject / Inquiry Type</label>
                    <select
                      id="subject"
                      className="form-select"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    >
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Hind.com Feedback">Hind.com Product Feedback</option>
                      <option value="Technical Collaboration">Technical Collaboration & Research</option>
                      <option value="DAO Governance">DAO & Crowdfunding Information</option>
                      <option value="Legal & Privacy">Legal & Compliance Notice</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="message">Your Message *</label>
                    <textarea
                      id="message"
                      className="form-textarea"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe your inquiry, feedback, or technical proposal in detail..."
                      aria-invalid={!!errors.message}
                    />
                    {errors.message && <div style={{ color: '#D9381E', fontSize: '0.82rem', marginTop: 4 }}>{errors.message}</div>}
                  </div>

                  <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                    <span>Send Inquiry</span>
                    <Send size={16} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
