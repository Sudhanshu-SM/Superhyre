'use client';

import Link from 'next/link';

const steps = [
  {
    num: '01',
    icon: '📋',
    title: 'Share Your Requirements',
    desc: 'Tell us about the role, team culture, skills you need, and your ideal timeline. Our account manager will help scope it perfectly.',
    duration: 'Day 1',
  },
  {
    num: '02',
    icon: '🤖',
    title: 'AI-Powered Sourcing',
    desc: 'Our platform scans millions of profiles across LinkedIn, GitHub, job boards, referrals, and our proprietary database to find matches.',
    duration: 'Day 1–2',
  },
  {
    num: '03',
    icon: '🔬',
    title: 'Rigorous Vetting',
    desc: 'Candidates go through skills tests, structured interviews, background checks, and reference calls. Only the top 5% move forward.',
    duration: 'Day 2–5',
  },
  {
    num: '04',
    icon: '📊',
    title: 'Shortlist Delivered',
    desc: 'Receive a curated shortlist of 3–5 ideal candidates with detailed profiles, scores, and video intros. No noise, just the best.',
    duration: 'Day 5–7',
  },
  {
    num: '05',
    icon: '🤝',
    title: 'Interview & Select',
    desc: 'Meet your top candidates. We coordinate scheduling and provide structured interview guides. You make the final call.',
    duration: 'Day 7–14',
  },
  {
    num: '06',
    icon: '🎉',
    title: 'Offer & Onboard',
    desc: 'We handle offer negotiation, documentation, and a smooth onboarding experience. Plus a 90-day replacement guarantee.',
    duration: 'Day 14–30',
  },
];

const faqs = [
  {
    q: 'How quickly can you find candidates?',
    a: 'Our average time-to-shortlist is 48–72 hours for most roles. Complex executive roles may take 1–2 weeks. We always communicate clear timelines upfront.',
  },
  {
    q: 'What is your quality guarantee?',
    a: 'We offer a 90-day replacement guarantee. If the candidate doesn\'t work out in the first 90 days, we find a replacement at no additional cost.',
  },
  {
    q: 'Do you work with startups?',
    a: 'Absolutely. We have flexible pricing and engagement models designed for seed-stage startups all the way to Fortune 500 enterprises.',
  },
  {
    q: 'Can you handle confidential searches?',
    a: 'Yes. All our executive and senior searches are conducted with full confidentiality. We never disclose your company without your explicit permission.',
  },
  {
    q: 'What industries do you specialize in?',
    a: 'We have deep expertise in tech, finance, healthcare, e-commerce, SaaS, and manufacturing — with specialized recruiters in each domain.',
  },
];

export default function HowItWorksPage() {
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
        <div style={{ maxWidth: '680px', margin: '0 auto' }}>
          <div className="section-tag" style={{ margin: '0 auto 16px' }}>
            <span>⚡</span> Process
          </div>
          <h1 className="section-heading">
            Hire in <span className="gradient-text">6 simple steps</span>
          </h1>
          <p className="section-sub" style={{ margin: '0 auto', textAlign: 'center' }}>
            A clear, transparent, and proven process that takes you from "we need to hire" to "welcome to the team" in record time.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section style={{ padding: '100px 20px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {steps.map((step, i) => (
              <div
                key={step.num}
                style={{
                  display: 'flex',
                  gap: '40px',
                  alignItems: 'flex-start',
                  position: 'relative',
                }}
              >
                {/* Timeline Line */}
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    flexShrink: 0,
                  }}
                >
                  <div
                    style={{
                      width: '56px',
                      height: '56px',
                      borderRadius: '50%',
                      background: i % 2 === 0
                        ? 'linear-gradient(135deg, #6C47FF, #8B6BFF)'
                        : 'linear-gradient(135deg, #FF6B6B, #FF8E8E)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '22px',
                      flexShrink: 0,
                      boxShadow: i % 2 === 0
                        ? '0 0 20px rgba(108,71,255,0.4)'
                        : '0 0 20px rgba(255,107,107,0.4)',
                    }}
                  >
                    {step.icon}
                  </div>
                  {i < steps.length - 1 && (
                    <div
                      style={{
                        width: '2px',
                        height: '60px',
                        background: 'linear-gradient(to bottom, rgba(108,71,255,0.5), rgba(108,71,255,0.1))',
                        margin: '8px 0',
                      }}
                    />
                  )}
                </div>

                {/* Content */}
                <div style={{ paddingBottom: i < steps.length - 1 ? '20px' : '0', flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '10px', flexWrap: 'wrap' }}>
                    <span
                      style={{
                        fontFamily: 'Outfit, sans-serif',
                        fontSize: '13px',
                        fontWeight: '800',
                        color: 'var(--text-muted)',
                        letterSpacing: '1px',
                      }}
                    >
                      STEP {step.num}
                    </span>
                    <span
                      style={{
                        fontSize: '11px',
                        padding: '4px 10px',
                        borderRadius: '100px',
                        background: 'rgba(108,71,255,0.1)',
                        border: '1px solid rgba(108,71,255,0.3)',
                        color: 'var(--primary-light)',
                        fontWeight: '600',
                      }}
                    >
                      {step.duration}
                    </span>
                  </div>
                  <h3
                    style={{
                      fontFamily: 'Outfit, sans-serif',
                      fontSize: '22px',
                      fontWeight: '700',
                      color: '#F0F0FF',
                      marginBottom: '10px',
                    }}
                  >
                    {step.title}
                  </h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '15px', lineHeight: '1.7', marginBottom: '30px' }}>
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section
        style={{
          padding: '80px 20px',
          borderTop: '1px solid var(--dark-border)',
          background: 'rgba(18,18,26,0.4)',
        }}
      >
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <div className="section-tag" style={{ margin: '0 auto 16px' }}>
              <span>❓</span> FAQs
            </div>
            <h2 className="section-heading">
              Common <span className="gradient-text">questions</span>
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {faqs.map((faq) => (
              <div
                key={faq.q}
                className="glass-card"
                style={{ padding: '26px 30px', transition: 'all 0.2s ease' }}
              >
                <h3
                  style={{
                    fontFamily: 'Outfit, sans-serif',
                    fontSize: '17px',
                    fontWeight: '700',
                    color: '#F0F0FF',
                    marginBottom: '12px',
                  }}
                >
                  {faq.q}
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '14px', lineHeight: '1.7' }}>
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '80px 20px', textAlign: 'center' }}>
        <div style={{ maxWidth: '560px', margin: '0 auto' }}>
          <h2 className="section-heading">
            Ready to <span className="gradient-text">get started?</span>
          </h2>
          <p className="section-sub" style={{ margin: '0 auto 36px', textAlign: 'center' }}>
            Share your requirements and get your first shortlist within 48 hours.
          </p>
          <Link href="/contact" style={{ textDecoration: 'none' }}>
            <button className="glow-button" style={{ fontSize: '16px', padding: '16px 42px', borderRadius: '12px' }}>
              Start Hiring Today →
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
