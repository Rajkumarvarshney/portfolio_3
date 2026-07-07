'use client';

const quickLinks = [
  { label: 'About', href: '#about' },
  { label: 'Team', href: '#team' },
  { label: 'DocuFlow', href: '#docuflow' },
  { label: 'Projects', href: '#projects' },
  { label: 'Stack', href: '#stack' },
  { label: 'Contact', href: '#contact' },
];

const emails = [
  { name: 'Rajkumar', email: 'raj1511aryan@gmail.com', color: '#4ECDC4' },
  { name: 'Yash', email: 'yashgarg7302@gmail.com', color: '#FF9B3C' },
  { name: 'Aditya', email: 'aditya.mehra.dummy@email.com', color: '#7B8FF7' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      role="contentinfo"
      style={{
        background: 'var(--structural-dark)',
        borderTop: '1px solid rgba(42, 63, 95, 0.5)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Top teal glow accent */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '60%',
          height: '1px',
          background: 'linear-gradient(90deg, transparent, var(--parsed-teal), transparent)',
          opacity: 0.6,
        }}
      />

      <div className="container" style={{ paddingTop: '3rem', paddingBottom: '2rem' }}>
        {/* Main grid — brand takes 2fr, links and contact each 1fr */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(1, 1fr)',
            gap: '2.5rem',
            marginBottom: '2.5rem',
          }}
          className="footer-grid"
        >
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem' }}>
              <div
                style={{
                  width: '2rem',
                  height: '2rem',
                  borderRadius: '6px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.7rem',
                  fontWeight: 700,
                  background: 'linear-gradient(135deg, var(--parsed-teal), #5DDED5)',
                  color: 'var(--forge-black)',
                  fontFamily: 'var(--font-mono)',
                  flexShrink: 0,
                }}
              >
                TF
              </div>
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  color: 'var(--ghost-white)',
                  fontSize: '1.1rem',
                  fontWeight: 700,
                  lineHeight: 1.4,
                  overflow: 'visible',
                }}
              >
                TrioForge
              </span>
            </div>

            <p
              style={{
                color: 'var(--muted)',
                fontFamily: 'var(--font-body)',
                fontSize: '0.875rem',
                lineHeight: 1.7,
                maxWidth: '22rem',
                marginBottom: '1.25rem',
              }}
            >
              Three engineers. One forge. We turn complex requirements into
              structured, fast-running software — from ML pipelines to
              real-time apps.
            </p>

            {/* Tagline badge */}
            <span
              style={{
                display: 'inline-block',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.68rem',
                padding: '0.3rem 0.75rem',
                borderRadius: '999px',
                background: 'rgba(78, 205, 196, 0.08)',
                border: '1px solid rgba(78, 205, 196, 0.25)',
                color: 'var(--parsed-teal)',
                letterSpacing: '0.04em',
              }}
            >
              Available for freelance &amp; contract
            </span>
          </div>

          {/* Quick Links */}
          <div>
            <h3
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.7rem',
                fontWeight: 600,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: 'var(--ghost-white)',
                marginBottom: '1.1rem',
              }}
            >
              Quick Links
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem' }} role="list">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      color: 'var(--muted)',
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.875rem',
                      textDecoration: 'none',
                      transition: 'color 180ms ease',
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.color = 'var(--parsed-teal)';
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.color = 'var(--muted)';
                    }}
                  >
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true" style={{ opacity: 0.5, flexShrink: 0 }}>
                      <path d="M2 5h6M5 2l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Get in Touch */}
          <div>
            <h3
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.7rem',
                fontWeight: 600,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: 'var(--ghost-white)',
                marginBottom: '1.1rem',
              }}
            >
              Get in Touch
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {emails.map(({ name, email, color }) => (
                <a
                  key={email}
                  href={`mailto:${email}`}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.6rem',
                    textDecoration: 'none',
                    transition: 'opacity 180ms ease',
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.opacity = '0.8'; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.opacity = '1'; }}
                  aria-label={`Email ${name}: ${email}`}
                >
                  {/* Color dot */}
                  <span
                    style={{
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      background: color,
                      flexShrink: 0,
                      opacity: 0.85,
                    }}
                    aria-hidden="true"
                  />
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.78rem',
                      color: 'var(--muted)',
                      wordBreak: 'break-all',
                    }}
                  >
                    {email}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '0.75rem',
            paddingTop: '1.5rem',
            borderTop: '1px solid rgba(42, 63, 95, 0.4)',
          }}
        >
          <p
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              color: 'var(--muted)',
              margin: 0,
            }}
          >
            © {year} TrioForge — Full-Stack · ML · Real-Time
          </p>
          <p
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.72rem',
              color: 'rgba(78, 205, 196, 0.55)',
              margin: 0,
            }}
          >
            docs in → structured JSON out
          </p>
        </div>
      </div>

      {/* Responsive grid CSS */}
      <style>{`
        .footer-grid {
          grid-template-columns: 1fr;
        }
        @media (min-width: 640px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
          }
        }
        @media (min-width: 900px) {
          .footer-grid {
            grid-template-columns: 2fr 1fr 1.2fr;
            gap: 3rem;
          }
        }
      `}</style>
    </footer>
  );
}
