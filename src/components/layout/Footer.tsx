'use client';

const quickLinks = [
  { label: 'About', href: '#about' },
  { label: 'Team', href: '#team' },
  { label: 'DocuFlow', href: '#docuflow' },
  { label: 'Projects', href: '#projects' },
  { label: 'Stack', href: '#stack' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      role="contentinfo"
      className="relative border-t"
      style={{
        background: 'var(--structural-dark)',
        borderColor: 'rgba(42, 63, 95, 0.5)',
      }}
    >
      {/* Teal top-glow accent line */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px pointer-events-none"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(78,205,196,0.6), transparent)',
        }}
      />

      <div className="container" style={{ paddingTop: '3rem', paddingBottom: '2rem' }}>

        {/* Main 3-col grid — driven by .footer-grid in globals.css */}
        <div className="footer-grid" style={{ marginBottom: '2.5rem' }}>

          {/* ── Brand ── */}
          <div className="footer-brand">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem' }}>
              <div
                style={{
                  width: '2rem', height: '2rem', borderRadius: '6px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '0.7rem', fontWeight: 700, flexShrink: 0,
                  background: 'linear-gradient(135deg, var(--parsed-teal), #5DDED5)',
                  color: 'var(--forge-black)', fontFamily: 'var(--font-mono)',
                }}
              >
                AD
              </div>
              <span
                style={{
                  fontFamily: 'var(--font-display)', color: 'var(--ghost-white)',
                  fontSize: '1.1rem', fontWeight: 700, lineHeight: 1.4, overflow: 'visible',
                }}
              >
                Apex Devworks
              </span>
            </div>

            <p
              style={{
                color: 'var(--muted)', fontFamily: 'var(--font-body)',
                fontSize: '0.875rem', lineHeight: 1.7,
                maxWidth: '22rem', marginBottom: '1.25rem',
              }}
            >
              Three engineers. One forge. We turn complex requirements into
              structured, fast-running software — from ML pipelines to real-time apps.
            </p>

            <span
              style={{
                display: 'inline-block', fontFamily: 'var(--font-mono)',
                fontSize: '0.68rem', padding: '0.3rem 0.75rem', borderRadius: '999px',
                background: 'rgba(78,205,196,0.08)',
                border: '1px solid rgba(78,205,196,0.25)',
                color: 'var(--parsed-teal)', letterSpacing: '0.04em',
              }}
            >
              Available for freelance &amp; contract
            </span>
          </div>

          {/* ── Quick Links ── */}
          <div>
            <h3
              style={{
                fontFamily: 'var(--font-mono)', fontSize: '0.7rem', fontWeight: 600,
                letterSpacing: '0.14em', textTransform: 'uppercase',
                color: 'var(--ghost-white)', marginBottom: '1rem',
              }}
            >
              Quick Links
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.65rem' }} role="list">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    style={{
                      color: 'var(--muted)', fontFamily: 'var(--font-body)',
                      fontSize: '0.875rem', textDecoration: 'none',
                      transition: 'color 150ms',
                    }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = 'var(--parsed-teal)'; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = 'var(--muted)'; }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Get in Touch ── */}
          <div>
            <h3
              style={{
                fontFamily: 'var(--font-mono)', fontSize: '0.7rem', fontWeight: 600,
                letterSpacing: '0.14em', textTransform: 'uppercase',
                color: 'var(--ghost-white)', marginBottom: '1rem',
              }}
            >
              Get in Touch
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
              {[
                { name: 'Rajkumar', email: 'raj1511aryan@gmail.com', color: '#4ECDC4' },
                { name: 'Yash', email: 'yashgarg7302@gmail.com', color: '#FF9B3C' },
                { name: 'Kushagra', email: 'kushagrasinghal11@gmail.com', color: '#7B8FF7' },
              ].map(({ name, email, color }) => (
                <div key={email}>
                  <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color, marginBottom: '0.2rem', opacity: 0.9 }}>
                    {name}
                  </p>
                  <a
                    href={`mailto:${email}`}
                    style={{
                      fontFamily: 'var(--font-mono)', fontSize: '0.75rem',
                      color: 'var(--muted)', textDecoration: 'none',
                      wordBreak: 'break-all', transition: 'color 150ms',
                    }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = color; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = 'var(--muted)'; }}
                    aria-label={`Email ${name}`}
                  >
                    {email}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div
          style={{
            display: 'flex', flexWrap: 'wrap', alignItems: 'center',
            justifyContent: 'space-between', gap: '0.75rem',
            paddingTop: '1.5rem', borderTop: '1px solid rgba(42,63,95,0.4)',
          }}
        >
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--muted)', margin: 0 }}>
            © {year} Apex Devworks. Built with Next.js + Framer Motion.
          </p>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'rgba(78,205,196,0.5)', margin: 0 }}>
            Documents in → Structured JSON out
          </p>
        </div>
      </div>
    </footer>
  );
}
