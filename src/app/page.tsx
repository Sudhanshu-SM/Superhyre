'use client';

import Link from 'next/link';

const features = [
  {
    icon: '🧠',
    title: 'AI-Powered Matching',
    desc: 'Our intelligent algorithms analyze candidate profiles to find your perfect fit — faster than any traditional method.',
  },
  {
    icon: '🎯',
    title: 'Precision Recruitment',
    desc: 'We go beyond resumes. Our multi-stage vetting process ensures only the top candidates reach your desk.',
  },
  {
    icon: '⚡',
    title: 'Fast Turnaround',
    desc: 'We move at the speed of business so you never miss out on great talent. Speed without compromising quality.',
  },
  {
    icon: '🌐',
    title: 'Wide Talent Network',
    desc: 'Access a curated network of pre-vetted professionals across industries and geographies.',
  },
  {
    icon: '🔒',
    title: 'Confidential & Secure',
    desc: 'Enterprise-grade data security with full compliance. Your candidates and data are always protected.',
  },
  {
    icon: '📊',
    title: 'Real-Time Analytics',
    desc: 'Transparent dashboards showing pipeline health, candidate scores, and hiring forecasts at every stage.',
  },
];

const industries = ['Technology', 'Finance', 'Healthcare', 'E-Commerce', 'SaaS', 'Manufacturing', 'Media', 'Logistics'];

export default function HomePage() {
  return (
    <div style={{ paddingTop: '72px' }}>
      {/* HERO */}
      <section
        style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          background: 'var(--gradient-hero)',
          position: 'relative',
          overflow: 'hidden',
          padding: '80px 20px',
        }}
      >
        {/* Decorative orbs */}
        <div
          style={{
            position: 'absolute',
            top: '15%',
            right: '10%',
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(108,71,255,0.15) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '10%',
            left: '5%',
            width: '300px',
            height: '300px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(0,212,170,0.1) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />

        <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
          <div style={{ maxWidth: '680px' }}>
            <div className="section-tag">
              <span>✨</span> AI-Powered Recruitment Platform
            </div>

            <h1
              style={{
                fontFamily: 'Outfit, sans-serif',
                fontSize: 'clamp(2.8rem, 7vw, 5rem)',
                fontWeight: '900',
                lineHeight: '1.05',
                marginBottom: '24px',
                letterSpacing: '-2px',
              }}
            >
              Hire{' '}
              <span className="gradient-text">Smarter.</span>
              <br />
              Grow{' '}
              <span className="gradient-text-2">Faster.</span>
            </h1>

            <p
              style={{
                fontSize: '1.2rem',
                color: 'var(--text-secondary)',
                lineHeight: '1.8',
                maxWidth: '520px',
                marginBottom: '40px',
              }}
            >
              SuperHyre connects exceptional talent with high-growth organizations.
              Say goodbye to endless job boards — we deliver pre-vetted candidates
              tailored to your culture and goals.
            </p>

            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '48px' }}>
              <Link href="/contact" style={{ textDecoration: 'none' }}>
                <button
                  className="glow-button"
                  style={{ fontSize: '16px', padding: '16px 36px', borderRadius: '12px' }}
                >
                  Start Hiring Now →
                </button>
              </Link>
              <Link href="/how-it-works" style={{ textDecoration: 'none' }}>
                <button
                  className="outline-button"
                  style={{ fontSize: '16px', padding: '16px 36px', borderRadius: '12px' }}
                >
                  ▶ See How It Works
                </button>
              </Link>
            </div>

            {/* Trust badges */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px', alignItems: 'center' }}>
              {['No upfront fee', 'Dedicated account manager', 'Replacement guarantee'].map((badge) => (
                <div
                  key={badge}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '7px',
                    color: 'var(--text-secondary)',
                    fontSize: '13px',
                  }}
                >
                  <span style={{ color: '#00D4AA', fontSize: '16px' }}>✓</span>
                  {badge}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section style={{ padding: '100px 20px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <div className="section-tag" style={{ margin: '0 auto 16px' }}>
              <span>🚀</span> Why SuperHyre
            </div>
            <h2 className="section-heading">
              Everything you need to{' '}
              <span className="gradient-text">hire better</span>
            </h2>
            <p className="section-sub" style={{ margin: '0 auto', textAlign: 'center' }}>
              From initial sourcing to final offer, SuperHyre powers every step of your recruitment journey with intelligence and precision.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '24px',
            }}
          >
            {features.map((f, i) => (
              <div
                key={f.title}
                className="glass-card"
                style={{
                  padding: '32px',
                  transition: 'all 0.3s ease',
                  cursor: 'default',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(-6px)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                }}
              >
                <div
                  style={{
                    width: '52px',
                    height: '52px',
                    borderRadius: '14px',
                    background: i % 3 === 0
                      ? 'rgba(108, 71, 255, 0.15)'
                      : i % 3 === 1
                      ? 'rgba(255, 107, 107, 0.15)'
                      : 'rgba(0, 212, 170, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '24px',
                    marginBottom: '18px',
                    border: `1px solid ${i % 3 === 0 ? 'rgba(108,71,255,0.2)' : i % 3 === 1 ? 'rgba(255,107,107,0.2)' : 'rgba(0,212,170,0.2)'}`,
                  }}
                >
                  {f.icon}
                </div>
                <h3
                  style={{
                    fontFamily: 'Outfit, sans-serif',
                    fontSize: '19px',
                    fontWeight: '700',
                    color: '#F0F0FF',
                    marginBottom: '10px',
                  }}
                >
                  {f.title}
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '14px', lineHeight: '1.7' }}>
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section
        style={{
          padding: '80px 20px',
          background: 'rgba(18,18,26,0.4)',
          borderTop: '1px solid var(--dark-border)',
          borderBottom: '1px solid var(--dark-border)',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ color: 'var(--text-muted)', fontSize: '13px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '24px' }}>
            Serving organizations across industries
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '12px' }}>
            {industries.map((ind) => (
              <span
                key={ind}
                style={{
                  padding: '10px 20px',
                  borderRadius: '100px',
                  border: '1px solid var(--dark-border)',
                  fontSize: '14px',
                  color: 'var(--text-secondary)',
                  background: 'rgba(255,255,255,0.02)',
                  transition: 'all 0.2s ease',
                  cursor: 'default',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = '#6C47FF';
                  (e.currentTarget as HTMLElement).style.color = '#6C47FF';
                  (e.currentTarget as HTMLElement).style.background = 'rgba(108,71,255,0.07)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'var(--dark-border)';
                  (e.currentTarget as HTMLElement).style.color = 'var(--text-secondary)';
                  (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.02)';
                }}
              >
                {ind}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS TEASER */}
      <section style={{ padding: '100px 20px' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
          <div className="section-tag" style={{ margin: '0 auto 16px' }}>
            <span>⚡</span> Our Process
          </div>
          <h2 className="section-heading">
            From brief to hire — <span className="gradient-text">in record time</span>
          </h2>
          <p className="section-sub" style={{ margin: '0 auto 60px', textAlign: 'center' }}>
            A clear, transparent process that takes you from &ldquo;we need to hire&rdquo; to &ldquo;welcome aboard&rdquo; with minimal friction.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginBottom: '48px' }}>
            {[
              { step: '01', title: 'Share Requirements', icon: '📋' },
              { step: '02', title: 'AI Sourcing', icon: '🤖' },
              { step: '03', title: 'Vetting & Screening', icon: '🔬' },
              { step: '04', title: 'Curated Shortlist', icon: '📊' },
            ].map((s) => (
              <div
                key={s.step}
                className="glass-card"
                style={{ padding: '28px 20px', textAlign: 'center' }}
              >
                <div style={{ fontSize: '30px', marginBottom: '12px' }}>{s.icon}</div>
                <div style={{ fontSize: '11px', color: 'var(--text-muted)', fontWeight: '700', letterSpacing: '1px', marginBottom: '6px' }}>
                  STEP {s.step}
                </div>
                <p style={{ fontSize: '15px', fontWeight: '600', color: '#F0F0FF' }}>{s.title}</p>
              </div>
            ))}
          </div>

          <Link href="/how-it-works" style={{ textDecoration: 'none' }}>
            <button className="outline-button" style={{ fontSize: '15px', padding: '14px 36px', borderRadius: '12px' }}>
              See Full Process →
            </button>
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          padding: '100px 20px',
          background: 'linear-gradient(135deg, rgba(108,71,255,0.1) 0%, rgba(255,107,107,0.05) 100%)',
          borderTop: '1px solid var(--dark-border)',
        }}
      >
        <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
          <div className="section-tag" style={{ margin: '0 auto 16px' }}>
            <span>🎯</span> Ready to transform hiring?
          </div>
          <h2
            style={{
              fontFamily: 'Outfit, sans-serif',
              fontSize: 'clamp(2rem, 5vw, 3.2rem)',
              fontWeight: '900',
              marginBottom: '20px',
              lineHeight: '1.2',
            }}
          >
            Your next <span className="gradient-text">great hire</span> is one click away
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '40px' }}>
            Tell us what you need and a SuperHyre specialist will reach out within hours. No commitments required.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" style={{ textDecoration: 'none' }}>
              <button
                className="glow-button"
                style={{ fontSize: '16px', padding: '18px 42px', borderRadius: '14px' }}
              >
                Get Started →
              </button>
            </Link>
            <Link href="/services" style={{ textDecoration: 'none' }}>
              <button
                className="outline-button"
                style={{ fontSize: '16px', padding: '18px 42px', borderRadius: '14px' }}
              >
                View Services
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
