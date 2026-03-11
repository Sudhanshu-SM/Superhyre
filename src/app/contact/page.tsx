'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    size: '',
    service: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputStyle: React.CSSProperties = {
    width: '100%',
    background: 'rgba(255,255,255,0.04)',
    border: '1px solid rgba(30,30,46,1)',
    borderRadius: '10px',
    color: '#F0F0FF',
    fontSize: '14px',
    padding: '14px 16px',
    outline: 'none',
    fontFamily: 'Inter, sans-serif',
    transition: 'border-color 0.2s ease',
  };

  const labelStyle: React.CSSProperties = {
    display: 'block',
    color: 'var(--text-secondary)',
    fontSize: '13px',
    fontWeight: '500',
    marginBottom: '7px',
  };

  return (
    <div style={{ paddingTop: '72px' }}>
      {/* Hero */}
      <section
        style={{
          padding: '80px 20px 60px',
          background: 'var(--gradient-hero)',
          textAlign: 'center',
          borderBottom: '1px solid var(--dark-border)',
        }}
      >
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <div className="section-tag" style={{ margin: '0 auto 16px' }}>
            <span>💬</span> Get In Touch
          </div>
          <h1 className="section-heading">
            Let&apos;s build your <span className="gradient-text">dream team</span>
          </h1>
          <p className="section-sub" style={{ margin: '0 auto', textAlign: 'center' }}>
            Tell us your hiring needs and a SuperHyre specialist will get back to you shortly.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section style={{ padding: '80px 20px' }}>
        <div
          style={{
            maxWidth: '1100px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '60px',
            alignItems: 'start',
          }}
        >
          {/* Left: Info */}
          <div>
            <h2
              style={{
                fontFamily: 'Outfit, sans-serif',
                fontSize: '28px',
                fontWeight: '800',
                color: '#F0F0FF',
                marginBottom: '12px',
              }}
            >
              We&apos;d love to hear from you
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '15px', lineHeight: '1.7', marginBottom: '40px' }}>
              Whether you&apos;re ready to hire now or just exploring your options, our team is here to help you navigate the journey.
            </p>

            {/* What to expect */}
            <div className="glass-card" style={{ padding: '28px', marginBottom: '24px' }}>
              <h4 style={{ fontFamily: 'Outfit, sans-serif', fontSize: '16px', fontWeight: '700', color: '#F0F0FF', marginBottom: '16px' }}>
                What happens next?
              </h4>
              {[
                { icon: '📬', text: 'We review your submission and assign a specialist' },
                { icon: '📞', text: 'Our team reaches out to learn more about your needs' },
                { icon: '🗺️', text: 'We build a tailored hiring plan for your organization' },
                { icon: '🚀', text: 'Sourcing begins and candidates are presented to you' },
              ].map((step) => (
                <div
                  key={step.text}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '12px',
                    marginBottom: '14px',
                  }}
                >
                  <span style={{ fontSize: '18px', flexShrink: 0, marginTop: '1px' }}>{step.icon}</span>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '14px', lineHeight: '1.5' }}>{step.text}</p>
                </div>
              ))}
            </div>

            {/* Guarantee badge */}
            <div
              style={{
                padding: '20px 24px',
                borderRadius: '14px',
                background: 'linear-gradient(135deg, rgba(0,212,170,0.1), rgba(108,71,255,0.1))',
                border: '1px solid rgba(0,212,170,0.2)',
              }}
            >
              <div style={{ fontSize: '24px', marginBottom: '8px' }}>🛡️</div>
              <h4 style={{ fontFamily: 'Outfit, sans-serif', fontSize: '16px', fontWeight: '700', color: '#F0F0FF', marginBottom: '6px' }}>
                Replacement Guarantee
              </h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '13px', lineHeight: '1.6' }}>
                Not satisfied with a hire? We&apos;ll find you a replacement, no questions asked.
              </p>
            </div>
          </div>

          {/* Right: Form */}
          <div>
            {submitted ? (
              <div
                className="glass-card"
                style={{
                  padding: '60px 40px',
                  textAlign: 'center',
                }}
              >
                <div style={{ fontSize: '56px', marginBottom: '20px' }}>🎉</div>
                <h3 style={{ fontFamily: 'Outfit, sans-serif', fontSize: '28px', fontWeight: '800', color: '#F0F0FF', marginBottom: '12px' }}>
                  We&apos;ve received your request!
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '15px', lineHeight: '1.7', marginBottom: '28px' }}>
                  A SuperHyre specialist will be in touch with you at{' '}
                  <strong style={{ color: '#6C47FF' }}>{form.email}</strong> soon.
                </p>
                <button
                  className="outline-button"
                  onClick={() => { setSubmitted(false); setForm({ name: '', email: '', company: '', size: '', service: '', message: '' }); }}
                  style={{ fontSize: '14px' }}
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              <div className="glass-card" style={{ padding: '36px' }}>
                <h3 style={{ fontFamily: 'Outfit, sans-serif', fontSize: '22px', fontWeight: '700', color: '#F0F0FF', marginBottom: '28px' }}>
                  Tell us about your hiring needs
                </h3>

                <form onSubmit={handleSubmit}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
                    <div>
                      <label style={labelStyle}>Full Name *</label>
                      <input
                        style={inputStyle}
                        type="text"
                        name="name"
                        placeholder="Your name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        onFocus={(e) => (e.target.style.borderColor = '#6C47FF')}
                        onBlur={(e) => (e.target.style.borderColor = 'rgba(30,30,46,1)')}
                      />
                    </div>
                    <div>
                      <label style={labelStyle}>Work Email *</label>
                      <input
                        style={inputStyle}
                        type="email"
                        name="email"
                        placeholder="you@company.com"
                        value={form.email}
                        onChange={handleChange}
                        required
                        onFocus={(e) => (e.target.style.borderColor = '#6C47FF')}
                        onBlur={(e) => (e.target.style.borderColor = 'rgba(30,30,46,1)')}
                      />
                    </div>
                  </div>

                  <div style={{ marginBottom: '16px' }}>
                    <label style={labelStyle}>Company Name *</label>
                    <input
                      style={inputStyle}
                      type="text"
                      name="company"
                      placeholder="Your organization"
                      value={form.company}
                      onChange={handleChange}
                      required
                      onFocus={(e) => (e.target.style.borderColor = '#6C47FF')}
                      onBlur={(e) => (e.target.style.borderColor = 'rgba(30,30,46,1)')}
                    />
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
                    <div>
                      <label style={labelStyle}>Company Size</label>
                      <select
                        style={{ ...inputStyle, cursor: 'pointer' }}
                        name="size"
                        value={form.size}
                        onChange={handleChange}
                        onFocus={(e) => (e.target.style.borderColor = '#6C47FF')}
                        onBlur={(e) => (e.target.style.borderColor = 'rgba(30,30,46,1)')}
                      >
                        <option value="" style={{ background: '#12121A' }}>Select size</option>
                        <option value="1-10" style={{ background: '#12121A' }}>1–10 employees</option>
                        <option value="11-50" style={{ background: '#12121A' }}>11–50 employees</option>
                        <option value="51-200" style={{ background: '#12121A' }}>51–200 employees</option>
                        <option value="201-1000" style={{ background: '#12121A' }}>201–1,000 employees</option>
                        <option value="1000+" style={{ background: '#12121A' }}>1,000+ employees</option>
                      </select>
                    </div>
                    <div>
                      <label style={labelStyle}>Service Needed</label>
                      <select
                        style={{ ...inputStyle, cursor: 'pointer' }}
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                        onFocus={(e) => (e.target.style.borderColor = '#6C47FF')}
                        onBlur={(e) => (e.target.style.borderColor = 'rgba(30,30,46,1)')}
                      >
                        <option value="" style={{ background: '#12121A' }}>Select service</option>
                        <option value="exec" style={{ background: '#12121A' }}>Executive Search</option>
                        <option value="tech" style={{ background: '#12121A' }}>Tech Hiring</option>
                        <option value="mass" style={{ background: '#12121A' }}>Mass Recruitment</option>
                        <option value="hr" style={{ background: '#12121A' }}>HR Consulting</option>
                        <option value="remote" style={{ background: '#12121A' }}>Remote Hiring</option>
                        <option value="campus" style={{ background: '#12121A' }}>Campus Hiring</option>
                      </select>
                    </div>
                  </div>

                  <div style={{ marginBottom: '24px' }}>
                    <label style={labelStyle}>Tell us more</label>
                    <textarea
                      style={{ ...inputStyle, resize: 'vertical', minHeight: '110px' }}
                      name="message"
                      placeholder="Describe the roles you're hiring for, timeline, and any specific requirements..."
                      value={form.message}
                      onChange={handleChange}
                      onFocus={(e) => (e.target.style.borderColor = '#6C47FF')}
                      onBlur={(e) => (e.target.style.borderColor = 'rgba(30,30,46,1)')}
                    />
                  </div>

                  <button
                    type="submit"
                    className="glow-button"
                    style={{ width: '100%', fontSize: '16px', padding: '16px', borderRadius: '12px' }}
                  >
                    Send My Request →
                  </button>

                  <p style={{ color: 'var(--text-muted)', fontSize: '12px', textAlign: 'center', marginTop: '12px' }}>
                    By submitting, you agree to our Privacy Policy. We never share your data.
                  </p>
                </form>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
