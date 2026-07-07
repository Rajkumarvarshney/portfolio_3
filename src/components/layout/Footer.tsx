'use client';

const quickLinks = [
  { label: 'About', href: '#about' },
  { label: 'Team', href: '#team' },
  { label: 'DocuFlow', href: '#docuflow' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="border-t"
      style={{
        borderColor: 'rgba(42, 63, 95, 0.4)',
        background: 'var(--structural-dark)',
      }}
      role="contentinfo"
    >
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div
                className="w-8 h-8 rounded-md flex items-center justify-center text-xs font-bold"
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
                style={{ fontFamily: 'var(--font-display)', color: 'var(--ghost-white)', lineHeight: 1.4, overflow: 'visible', paddingBottom: '0.1em' }}
              >
                TrioForge
              </span>
            </div>
            <p
              className="text-sm leading-relaxed max-w-xs"
              style={{ color: 'var(--muted)', fontFamily: 'var(--font-body)' }}
            >
              Three engineers. One forge. We turn complex requirements into structured, 
              fast-running software — from ML pipelines to real-time apps.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col md:items-center">
            <div className="flex flex-col items-start">
              <h3
                className="text-sm font-semibold mb-4 uppercase tracking-wider"
                style={{ color: 'var(--ghost-white)', fontFamily: 'var(--font-mono)', letterSpacing: '0.12em' }}
              >
                Quick Links
              </h3>
              <ul className="flex flex-col gap-2" role="list">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm transition-colors"
                      style={{ color: 'var(--muted)', fontFamily: 'var(--font-body)' }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.color = 'var(--parsed-teal)';
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.color = 'var(--muted)';
                      }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Get in Touch */}
          <div className="flex flex-col md:items-center">
            <div className="flex flex-col items-start">
              <h3
                className="text-sm font-semibold mb-4 uppercase tracking-wider"
                style={{ color: 'var(--ghost-white)', fontFamily: 'var(--font-mono)', letterSpacing: '0.12em' }}
              >
                Get in Touch
              </h3>
              <div className="flex flex-col gap-2 text-sm" style={{ color: 'var(--muted)' }}>
                <a
                  href="mailto:raj1511aryan@gmail.com"
                  className="transition-colors hover:text-[var(--parsed-teal)] break-all"
                  style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem' }}
                >
                  raj1511aryan@gmail.com
                </a>
                <a
                  href="mailto:yashgarg7302@gmail.com"
                  className="transition-colors hover:text-[var(--parsed-teal)] break-all"
                  style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem' }}
                >
                  yashgarg7302@gmail.com
                </a>
                <a
                  href="mailto:aditya.mehra.dummy@email.com"
                  className="transition-colors hover:text-[var(--parsed-teal)] break-all"
                  style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem' }}
                >
                  aditya.mehra.dummy@email.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t text-xs"
          style={{ borderColor: 'rgba(42, 63, 95, 0.4)', color: 'var(--muted)' }}
        >
          <p style={{ fontFamily: 'var(--font-mono)' }}>
            © {year} TrioForge. Built with Next.js + Framer Motion.
          </p>
          <p
            className="text-center"
            style={{ color: 'rgba(136, 153, 170, 0.6)' }}
          >
            Documents in → Structured JSON out
          </p>
        </div>
      </div>
    </footer>
  );
}
