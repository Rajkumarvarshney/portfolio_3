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

      <div className="container py-12">
        {/* 3-column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-10">

          {/* ── Brand ──────────────────────────────── */}
          <div className="sm:col-span-2 lg:col-span-1">
            {/* Logo */}
            <div className="flex items-center gap-2.5 mb-4">
              <div
                className="w-8 h-8 rounded-md flex items-center justify-center text-xs font-bold flex-shrink-0"
                style={{
                  background: 'linear-gradient(135deg, var(--parsed-teal), #5DDED5)',
                  color: 'var(--forge-black)',
                  fontFamily: 'var(--font-mono)',
                }}
              >
                TF
              </div>
              <span
                className="text-lg font-bold"
                style={{
                  fontFamily: 'var(--font-display)',
                  color: 'var(--ghost-white)',
                  lineHeight: 1.4,
                  overflow: 'visible',
                }}
              >
                TrioForge
              </span>
            </div>

            <p
              className="text-sm leading-relaxed mb-5"
              style={{ color: 'var(--muted)', fontFamily: 'var(--font-body)', maxWidth: '22rem' }}
            >
              Three engineers. One forge. We turn complex requirements into
              structured, fast-running software — from ML pipelines to
              real-time apps.
            </p>

            <span
              className="inline-block text-xs px-3 py-1 rounded-full"
              style={{
                fontFamily: 'var(--font-mono)',
                background: 'rgba(78,205,196,0.08)',
                border: '1px solid rgba(78,205,196,0.25)',
                color: 'var(--parsed-teal)',
                letterSpacing: '0.04em',
              }}
            >
              Available for freelance &amp; contract
            </span>
          </div>

          {/* ── Quick Links ────────────────────────── */}
          <div>
            <h3
              className="text-xs font-semibold uppercase mb-4"
              style={{
                fontFamily: 'var(--font-mono)',
                color: 'var(--ghost-white)',
                letterSpacing: '0.12em',
              }}
            >
              Quick Links
            </h3>
            <ul className="flex flex-col gap-2.5" role="list">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm transition-colors duration-150 hover:text-[var(--parsed-teal)]"
                    style={{ color: 'var(--muted)', fontFamily: 'var(--font-body)' }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Get in Touch ───────────────────────── */}
          <div>
            <h3
              className="text-xs font-semibold uppercase mb-4"
              style={{
                fontFamily: 'var(--font-mono)',
                color: 'var(--ghost-white)',
                letterSpacing: '0.12em',
              }}
            >
              Get in Touch
            </h3>
            <div className="flex flex-col gap-3">
              {[
                { label: 'Rajkumar', email: 'raj1511aryan@gmail.com', dot: 'var(--parsed-teal)' },
                { label: 'Yash', email: 'yashgarg7302@gmail.com', dot: 'var(--forge-amber)' },
                { label: 'Aditya', email: 'aditya.mehra.dummy@email.com', dot: '#7B8FF7' },
              ].map(({ label, email, dot }) => (
                <div key={email}>
                  <p
                    className="text-xs mb-0.5"
                    style={{ color: dot, fontFamily: 'var(--font-mono)', opacity: 0.85 }}
                  >
                    {label}
                  </p>
                  <a
                    href={`mailto:${email}`}
                    className="text-xs break-all transition-colors duration-150"
                    style={{ color: 'var(--muted)', fontFamily: 'var(--font-mono)' }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = dot; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = 'var(--muted)'; }}
                    aria-label={`Email ${label}: ${email}`}
                  >
                    {email}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Bottom bar ─────────────────────────── */}
        <div
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-6 text-xs"
          style={{ borderTop: '1px solid rgba(42,63,95,0.4)' }}
        >
          <p style={{ fontFamily: 'var(--font-mono)', color: 'var(--muted)' }}>
            © {year} TrioForge. Built with Next.js + Framer Motion.
          </p>
          <p style={{ fontFamily: 'var(--font-mono)', color: 'rgba(78,205,196,0.5)' }}>
            Documents in → Structured JSON out
          </p>
        </div>
      </div>
    </footer>
  );
}
