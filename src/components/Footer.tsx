'use client';

import Link from 'next/link';

const footerLinks = {
  Company: [
    { label: 'About Us', href: '/about' },
    { label: 'Careers', href: '/contact' },
    { label: 'Blog', href: '#' },
    { label: 'Press', href: '#' },
  ],
  Services: [
    { label: 'Executive Search', href: '/services' },
    { label: 'Tech Hiring', href: '/services' },
    { label: 'Mass Recruitment', href: '/services' },
    { label: 'HR Consulting', href: '/services' },
  ],
  Resources: [
    { label: 'How It Works', href: '/how-it-works' },
    { label: 'Case Studies', href: '#' },
    { label: 'Pricing', href: '#' },
    { label: 'Integrations', href: '#' },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Cookie Policy', href: '#' },
  ],
};

export default function Footer() {
  return (
    <footer
      style={{
        background: 'rgba(8, 8, 12, 1)',
        borderTop: '1px solid rgba(30, 30, 46, 0.8)',
        padding: '80px 20px 40px',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Top Section */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '40px',
            marginBottom: '60px',
          }}
        >
          {/* Brand */}
          <div style={{ gridColumn: 'span 1' }}>
            <Link href="/" style={{ textDecoration: 'none' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    background: 'linear-gradient(135deg, #6C47FF, #FF6B6B)',
                    borderRadius: '9px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '17px',
                    fontWeight: '900',
                    color: 'white',
                    fontFamily: 'Outfit, sans-serif',
                  }}
                >
                  S
                </div>
                <span
                  style={{
                    fontFamily: 'Outfit, sans-serif',
                    fontSize: '20px',
                    fontWeight: '800',
                    color: '#F0F0FF',
                  }}
                >
                  Super<span style={{ color: '#6C47FF' }}>Hyre</span>
                </span>
              </div>
            </Link>
            <p style={{ color: '#9090A0', fontSize: '14px', lineHeight: '1.7', marginBottom: '24px' }}>
              Connecting top talent with great organizations. Smarter hiring, faster results.
            </p>
            {/* Social Icons */}
            <div style={{ display: 'flex', gap: '12px' }}>
              {['𝕏', 'in', 'f', '▶'].map((icon, i) => (
                <a
                  key={i}
                  href="#"
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '8px',
                    border: '1px solid rgba(30, 30, 46, 1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#9090A0',
                    textDecoration: 'none',
                    fontSize: '13px',
                    fontWeight: '600',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = '#6C47FF';
                    (e.currentTarget as HTMLElement).style.color = '#6C47FF';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(30, 30, 46, 1)';
                    (e.currentTarget as HTMLElement).style.color = '#9090A0';
                  }}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h4
                style={{
                  fontFamily: 'Outfit, sans-serif',
                  fontSize: '14px',
                  fontWeight: '700',
                  color: '#F0F0FF',
                  marginBottom: '16px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                }}
              >
                {section}
              </h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      style={{
                        textDecoration: 'none',
                        color: '#9090A0',
                        fontSize: '14px',
                        transition: 'color 0.2s ease',
                      }}
                      onMouseEnter={(e) => ((e.target as HTMLElement).style.color = '#6C47FF')}
                      onMouseLeave={(e) => ((e.target as HTMLElement).style.color = '#9090A0')}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div
          style={{
            borderTop: '1px solid rgba(30, 30, 46, 0.8)',
            paddingTop: '32px',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '16px',
          }}
        >
          <p style={{ color: '#5A5A70', fontSize: '13px' }}>
            © {new Date().getFullYear()} SuperHyre. All rights reserved.
          </p>
          <p style={{ color: '#5A5A70', fontSize: '13px' }}>
            Built to help organizations hire smarter. 🚀
          </p>
        </div>
      </div>
    </footer>
  );
}
