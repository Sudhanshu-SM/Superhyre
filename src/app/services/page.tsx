'use client';

import Link from 'next/link';

const services = [
  {
    icon: '🔍',
    title: 'Executive Search',
    tagline: 'C-Suite & Senior Leadership',
    desc: 'Find transformational leaders who align with your vision. Our dedicated executive search team sources and vets top-tier C-suite and senior leadership candidates.',
    features: ['Confidential search', 'Global talent network', 'Cultural fit assessment', 'Placement guarantee'],
    color: '#6C47FF',
  },
  {
    icon: '💻',
    title: 'Tech Hiring',
    tagline: 'Engineering, Product & Data',
    desc: 'Hire engineers who don\'t just code — they build. Technical skills assessments, portfolio reviews, and live coding evaluations included.',
    features: ['Skills-based testing', 'Technical interviews', 'GitHub/Portfolio review', 'Role-specific screening'],
    color: '#FF6B6B',
  },
  {
    icon: '📦',
    title: 'Mass Recruitment',
    tagline: 'Scale your workforce fast',
    desc: 'Need to scale your workforce quickly? Our bulk recruitment engine is built for high-volume hiring. Structured pipelines manage large talent volumes efficiently.',
    features: ['High-volume sourcing', 'Batch interviews', 'ATS integration', 'Onboarding support'],
    color: '#00D4AA',
  },
  {
    icon: '🧩',
    title: 'HR Consulting',
    tagline: 'Strategy & Workforce Planning',
    desc: 'Beyond placement — we help you design your entire talent acquisition strategy, employer brand, and scalable HR processes.',
    features: ['Hiring roadmap', 'JD optimization', 'Interview training', 'EVP development'],
    color: '#FFB800',
  },
  {
    icon: '🌍',
    title: 'Remote Hiring',
    tagline: 'Build distributed teams',
    desc: 'Access the global talent pool without borders. We handle timezone, compliance, and contractor/FTE setups for distributed teams worldwide.',
    features: ['Global compliance', 'Contract support', 'Remote vetting', 'International payroll guidance'],
    color: '#6C47FF',
  },
  {
    icon: '🎓',
    title: 'Campus & Early Talent',
    tagline: 'Graduate & Internship hiring',
    desc: 'Build your talent pipeline from the ground up. We partner with top universities and bootcamps to connect you with the brightest emerging talent.',
    features: ['University partnerships', 'Hackathon recruiting', 'Internship-to-hire', 'Aptitude testing'],
    color: '#FF6B6B',
  },
];

export default function ServicesPage() {
  return (
    <div style={{ paddingTop: '72px' }}>
      {/* Hero */}
      <section
        style={{
          padding: '100px 20px 80px',
          background: 'var(--gradient-hero)',
          textAlign: 'center',
          borderBottom: '1px solid var(--dark-border)',
        }}
      >
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <div className="section-tag" style={{ margin: '0 auto 16px' }}>
            <span>⚙️</span> Our Services
          </div>
          <h1 className="section-heading">
            Tailored hiring solutions for <span className="gradient-text">every need</span>
          </h1>
          <p className="section-sub" style={{ margin: '0 auto', textAlign: 'center' }}>
            Whether you need one senior leader or a thousand frontline workers, SuperHyre has a specialized service track for your organization.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section style={{ padding: '80px 20px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
              gap: '28px',
            }}
          >
            {services.map((s) => (
              <div
                key={s.title}
                className="glass-card"
                style={{
                  padding: '36px',
                  transition: 'all 0.3s ease',
                  cursor: 'default',
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-8px)'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; }}
              >
                <div
                  style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '16px',
                    background: `${s.color}20`,
                    border: `1px solid ${s.color}40`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '26px',
                    marginBottom: '20px',
                  }}
                >
                  {s.icon}
                </div>

                <div
                  style={{
                    fontSize: '11px',
                    fontWeight: '600',
                    color: s.color,
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    marginBottom: '8px',
                  }}
                >
                  {s.tagline}
                </div>

                <h2
                  style={{
                    fontFamily: 'Outfit, sans-serif',
                    fontSize: '22px',
                    fontWeight: '700',
                    color: '#F0F0FF',
                    marginBottom: '14px',
                  }}
                >
                  {s.title}
                </h2>

                <p
                  style={{
                    color: 'var(--text-secondary)',
                    fontSize: '14px',
                    lineHeight: '1.7',
                    marginBottom: '22px',
                  }}
                >
                  {s.desc}
                </p>

                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '9px', marginBottom: '26px' }}>
                  {s.features.map((f) => (
                    <li key={f} style={{ display: 'flex', alignItems: 'center', gap: '9px', fontSize: '13px', color: 'var(--text-secondary)' }}>
                      <span style={{ color: s.color, fontSize: '15px', flexShrink: 0 }}>✓</span>
                      {f}
                    </li>
                  ))}
                </ul>

                <Link href="/contact" style={{ textDecoration: 'none' }}>
                  <button
                    style={{
                      background: `${s.color}15`,
                      border: `1px solid ${s.color}40`,
                      color: s.color,
                      padding: '10px 22px',
                      borderRadius: '9px',
                      fontSize: '13px',
                      fontWeight: '600',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      width: '100%',
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.background = `${s.color}30`;
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.background = `${s.color}15`;
                    }}
                  >
                    Learn More →
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          padding: '80px 20px',
          borderTop: '1px solid var(--dark-border)',
          textAlign: 'center',
        }}
      >
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2 className="section-heading">
            Not sure which <span className="gradient-text">service fits</span>?
          </h2>
          <p className="section-sub" style={{ margin: '0 auto 36px', textAlign: 'center' }}>
            Reach out and we&apos;ll assess your needs together, then recommend the right service track for your organization.
          </p>
          <Link href="/contact" style={{ textDecoration: 'none' }}>
            <button className="glow-button" style={{ fontSize: '16px', padding: '16px 40px', borderRadius: '12px' }}>
              Book Free Consultation →
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
