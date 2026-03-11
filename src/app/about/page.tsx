'use client';

import Link from 'next/link';

const values = [
  {
    icon: '🎯',
    title: 'Precision over Volume',
    desc: 'We deliver a curated shortlist of the best candidates, not hundreds of mediocre ones. Quality is our only metric.',
  },
  {
    icon: '🤝',
    title: 'Partnership Mindset',
    desc: 'We act as an extension of your team, not a vendor. Your hiring success is our success.',
  },
  {
    icon: '🔍',
    title: 'Radical Transparency',
    desc: 'Real-time dashboards, honest timelines, and no hidden fees. Trust built through clarity.',
  },
  {
    icon: '🚀',
    title: 'Move at Speed',
    desc: 'Great talent disappears fast. We build urgency into every step of our process.',
  },
];

export default function AboutPage() {
  return (
    <div style={{ paddingTop: '72px' }}>
      {/* Hero */}
      <section
        style={{
          padding: '100px 20px 80px',
          background: 'var(--gradient-hero)',
          borderBottom: '1px solid var(--dark-border)',
        }}
      >
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ maxWidth: '700px' }}>
            <div className="section-tag" style={{ marginBottom: '16px' }}>
              <span>🏢</span> About SuperHyre
            </div>
            <h1 className="section-heading">
              We exist to make <span className="gradient-text">hiring human again</span>
            </h1>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '32px' }}>
              SuperHyre was born from a single frustration: hiring was broken. Slow, expensive, and impersonal.
              We built the platform we always wished existed — one that combines the intuition of great recruiters
              with the scale of AI.
            </p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '36px' }}>
              We partner with organizations of all sizes to help them find, attract, and retain exceptional talent — 
              faster and more reliably than traditional methods.
            </p>
            <Link href="/contact" style={{ textDecoration: 'none' }}>
              <button className="glow-button" style={{ fontSize: '15px', padding: '14px 34px' }}>
                Work With Us →
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section style={{ padding: '100px 20px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '60px',
              alignItems: 'center',
            }}
          >
            <div>
              <div className="section-tag" style={{ marginBottom: '16px' }}>
                <span>🎯</span> Our Mission
              </div>
              <h2 className="section-heading">
                Connecting the right people to the <span className="gradient-text">right opportunities</span>
              </h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: '1.8' }}>
                At SuperHyre, we believe every organization deserves access to world-class talent, and every 
                professional deserves an opportunity that truly fits them. We bridge that gap with technology, 
                expertise, and a genuine care for outcomes.
              </p>
            </div>

            <div
              className="glass-card"
              style={{ padding: '36px' }}
            >
              <h3 style={{ fontFamily: 'Outfit, sans-serif', fontSize: '22px', fontWeight: '700', color: '#F0F0FF', marginBottom: '20px' }}>
                What sets us apart
              </h3>
              {[
                'AI-assisted candidate matching',
                'Multi-stage human vetting process',
                'Dedicated account management',
                'End-to-end hiring support',
                'Candidate replacement guarantee',
              ].map((item) => (
                <div
                  key={item}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '11px 0',
                    borderBottom: '1px solid rgba(30,30,46,0.6)',
                    fontSize: '14px',
                    color: 'var(--text-secondary)',
                  }}
                >
                  <span style={{ color: '#00D4AA', fontSize: '16px', flexShrink: 0 }}>✓</span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section
        style={{
          padding: '80px 20px',
          borderTop: '1px solid var(--dark-border)',
          borderBottom: '1px solid var(--dark-border)',
          background: 'rgba(18,18,26,0.4)',
        }}
      >
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <div className="section-tag" style={{ margin: '0 auto 16px' }}>
              <span>💡</span> Our Values
            </div>
            <h2 className="section-heading">
              What drives <span className="gradient-text">everything we do</span>
            </h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '24px',
            }}
          >
            {values.map((v) => (
              <div
                key={v.title}
                className="glass-card"
                style={{
                  padding: '30px',
                  textAlign: 'center',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-6px)'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; }}
              >
                <div style={{ fontSize: '36px', marginBottom: '16px' }}>{v.icon}</div>
                <h3 style={{ fontFamily: 'Outfit, sans-serif', fontSize: '18px', fontWeight: '700', color: '#F0F0FF', marginBottom: '10px' }}>
                  {v.title}
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '14px', lineHeight: '1.7' }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section style={{ padding: '100px 20px' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <div className="section-tag" style={{ margin: '0 auto 16px' }}>
            <span>🧩</span> Our Approach
          </div>
          <h2 className="section-heading">
            Human expertise meets <span className="gradient-text">intelligent technology</span>
          </h2>
          <p className="section-sub" style={{ margin: '0 auto 48px', textAlign: 'center' }}>
            We combine AI-powered sourcing and screening with experienced human recruiters who understand 
            nuance, culture, and what truly makes a great hire. Technology handles the scale; our people 
            handle the judgment.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/services" style={{ textDecoration: 'none' }}>
              <button className="glow-button" style={{ fontSize: '15px', padding: '14px 34px', borderRadius: '12px' }}>
                Our Services →
              </button>
            </Link>
            <Link href="/contact" style={{ textDecoration: 'none' }}>
              <button className="outline-button" style={{ fontSize: '15px', padding: '14px 34px', borderRadius: '12px' }}>
                Get In Touch
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
