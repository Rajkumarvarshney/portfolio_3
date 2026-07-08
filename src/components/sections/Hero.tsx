'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

// ─── File Type Icon SVG paths ─────────────────────────────────────────────────
const fileTypes = [
  {
    id: 'pdf',
    label: 'PDF',
    color: '#FF6B6B',
    bg: 'rgba(255,107,107,0.1)',
    border: 'rgba(255,107,107,0.3)',
    icon: (
      <svg viewBox="0 0 40 40" width="40" height="40" aria-hidden="true">
        <rect x="6" y="2" width="22" height="28" rx="3" fill="rgba(255,107,107,0.15)" stroke="#FF6B6B" strokeWidth="1.5"/>
        <rect x="10" y="30" width="26" height="6" rx="2" fill="#FF6B6B" opacity="0.9"/>
        <text x="23" y="35" textAnchor="middle" fill="white" fontSize="5" fontFamily="monospace" fontWeight="bold">PDF</text>
        <line x1="10" y1="12" x2="24" y2="12" stroke="#FF6B6B" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>
        <line x1="10" y1="16" x2="22" y2="16" stroke="#FF6B6B" strokeWidth="1.5" strokeLinecap="round" opacity="0.4"/>
        <line x1="10" y1="20" x2="26" y2="20" stroke="#FF6B6B" strokeWidth="1.5" strokeLinecap="round" opacity="0.4"/>
      </svg>
    ),
  },
  {
    id: 'docx',
    label: 'DOCX',
    color: '#4A90D9',
    bg: 'rgba(74,144,217,0.1)',
    border: 'rgba(74,144,217,0.3)',
    icon: (
      <svg viewBox="0 0 40 40" width="40" height="40" aria-hidden="true">
        <rect x="6" y="2" width="22" height="28" rx="3" fill="rgba(74,144,217,0.15)" stroke="#4A90D9" strokeWidth="1.5"/>
        <rect x="10" y="30" width="26" height="6" rx="2" fill="#4A90D9" opacity="0.9"/>
        <text x="23" y="35" textAnchor="middle" fill="white" fontSize="4.5" fontFamily="monospace" fontWeight="bold">DOCX</text>
        <line x1="10" y1="12" x2="24" y2="12" stroke="#4A90D9" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>
        <line x1="10" y1="16" x2="26" y2="16" stroke="#4A90D9" strokeWidth="1.5" strokeLinecap="round" opacity="0.4"/>
        <line x1="10" y1="20" x2="20" y2="20" stroke="#4A90D9" strokeWidth="1.5" strokeLinecap="round" opacity="0.4"/>
        <line x1="10" y1="24" x2="23" y2="24" stroke="#4A90D9" strokeWidth="1.5" strokeLinecap="round" opacity="0.4"/>
      </svg>
    ),
  },
  {
    id: 'pptx',
    label: 'PPTX',
    color: '#FF9B3C',
    bg: 'rgba(255,155,60,0.1)',
    border: 'rgba(255,155,60,0.3)',
    icon: (
      <svg viewBox="0 0 40 40" width="40" height="40" aria-hidden="true">
        <rect x="6" y="2" width="22" height="28" rx="3" fill="rgba(255,155,60,0.15)" stroke="#FF9B3C" strokeWidth="1.5"/>
        <rect x="10" y="30" width="26" height="6" rx="2" fill="#FF9B3C" opacity="0.9"/>
        <text x="23" y="35" textAnchor="middle" fill="white" fontSize="4.5" fontFamily="monospace" fontWeight="bold">PPTX</text>
        <rect x="10" y="8" width="16" height="10" rx="2" fill="rgba(255,155,60,0.2)" stroke="#FF9B3C" strokeWidth="1" opacity="0.6"/>
        <circle cx="18" cy="13" r="3" fill="#FF9B3C" opacity="0.4"/>
        <line x1="10" y1="22" x2="24" y2="22" stroke="#FF9B3C" strokeWidth="1.5" strokeLinecap="round" opacity="0.4"/>
      </svg>
    ),
  },
  {
    id: 'video',
    label: 'VIDEO',
    color: '#9B59B6',
    bg: 'rgba(155,89,182,0.1)',
    border: 'rgba(155,89,182,0.3)',
    icon: (
      <svg viewBox="0 0 40 40" width="40" height="40" aria-hidden="true">
        <rect x="4" y="8" width="24" height="18" rx="3" fill="rgba(155,89,182,0.15)" stroke="#9B59B6" strokeWidth="1.5"/>
        <polygon points="32,12 36,17 32,22" fill="#9B59B6" opacity="0.8"/>
        <polygon points="13,14 13,22 21,18" fill="#9B59B6" opacity="0.6"/>
        <rect x="10" y="30" width="26" height="6" rx="2" fill="#9B59B6" opacity="0.9"/>
        <text x="23" y="35" textAnchor="middle" fill="white" fontSize="4" fontFamily="monospace" fontWeight="bold">VIDEO</text>
      </svg>
    ),
  },
];

// ─── JSON Preview Lines ────────────────────────────────────────────────────────
const jsonLines = [
  { text: '{', type: 'punct' },
  { text: '  "document": "quarterly_report.pdf",', type: 'key-str' },
  { text: '  "pages": 24,', type: 'key-num' },
  { text: '  "parsed": true,', type: 'key-bool' },
  { text: '  "sections": [', type: 'key-punct' },
  { text: '    { "title": "Executive Summary",', type: 'obj' },
  { text: '      "type": "heading", "confidence": 0.98 }', type: 'obj' },
  { text: '  ],', type: 'punct' },
  { text: '  "tables": 3, "images": 7,', type: 'key-num' },
  { text: '  "schema": "custom_v2"', type: 'key-str' },
  { text: '}', type: 'punct' },
];

function JsonLine({ text, delay }: { text: string; delay: number }) {
  const [displayed, setDisplayed] = useState('');
  const [done, setDone] = useState(false);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    // Wait `delay` ms before starting the typewriter
    const startTimer = setTimeout(() => {
      setStarted(true);
    }, delay);
    return () => clearTimeout(startTimer);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    let i = 0;
    const timer = setInterval(() => {
      if (i <= text.length) {
        setDisplayed(text.slice(0, i));
        i++;
      } else {
        setDone(true);
        clearInterval(timer);
      }
    }, 18);
    return () => clearInterval(timer);
  }, [started, text]);

  // Simple syntax colorizer
  const colorize = (raw: string) => {
    return raw
      .replace(/"([^"]+)":/g, '<span class="json-key">"$1"</span>:')
      .replace(/: "([^"]*)"([,\s]|$)/g, ': <span class="json-str">"$1"</span>$2')
      .replace(/: (\d+\.?\d*)/g, ': <span class="json-num">$1</span>')
      .replace(/: (true|false)/g, ': <span class="json-bool">$1</span>')
      .replace(/[{}\[\],]/g, (m) => `<span class="json-punct">${m}</span>`);
  };

  return (
    <div className="flex items-center min-h-[1.4em]">
      <span
        style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--ghost-white)' }}
        dangerouslySetInnerHTML={{ __html: colorize(displayed) }}
      />
      {started && !done && (
        <span
          className="cursor-blink inline-block w-1.5 h-3 ml-0.5 rounded-sm"
          style={{ background: 'var(--parsed-teal)', verticalAlign: 'text-bottom' }}
          aria-hidden="true"
        />
      )}
    </div>
  );
}

// ─── Transform Node (glowing center) ─────────────────────────────────────────
function TransformNode() {
  return (
    <div className="relative flex items-center justify-center w-16 h-16">
      {/* Outer pulse ring */}
      <div
        className="absolute w-16 h-16 rounded-full animate-pulse-glow"
        style={{ border: '1px solid rgba(78, 205, 196, 0.35)' }}
        aria-hidden="true"
      />
      {/* Inner glow node */}
      <div
        className="relative w-10 h-10 rounded-full flex items-center justify-center"
        style={{
          background: 'radial-gradient(circle, rgba(78,205,196,0.3) 0%, rgba(78,205,196,0.06) 70%)',
          border: '1.5px solid var(--parsed-teal)',
          boxShadow: '0 0 24px rgba(78,205,196,0.5), 0 0 8px rgba(78,205,196,0.3)',
        }}
        aria-hidden="true"
      >
        <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
          <path d="M4 10h12M12 6l4 4-4 4" stroke="var(--parsed-teal)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </div>
  );
}

// ─── Hero Component ────────────────────────────────────────────────────────────
export default function Hero() {
  const prefersReducedMotion = useReducedMotion();
  const [jsonStarted, setJsonStarted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setJsonStarted(true), 1800);
    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      const navbarOffset = 64; // Exact height of the fixed navbar
      const elementPosition = el.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navbarOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: prefersReducedMotion ? 'auto' : 'smooth',
      });
    }
  };

  const ease = [0.16, 1, 0.3, 1] as const;

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-start hero-backdrop pt-24 pb-16 md:pt-36"
      aria-label="Hero section"
    >
      {/* Background accent dots */}
      <div
        className="absolute top-1/4 left-10 w-40 h-40 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(78,205,196,0.06) 0%, transparent 70%)' }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/4 right-10 w-56 h-56 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(255,155,60,0.05) 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="container relative z-10">

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease }}
          className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6"
          style={{ fontFamily: 'var(--font-display)', color: 'var(--ghost-white)', lineHeight: 1.25, overflow: 'visible' }}
        >
          We build software that{' '}
          <span className="text-gradient-teal">parses,</span>
          <br className="hidden sm:block" />
          {' '}transforms,{' '}
          <span className="text-gradient-amber">and ships.</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25, ease }}
          className="text-center text-xs sm:text-sm md:text-base max-w-2xl mx-auto mb-6 sm:mb-8 leading-relaxed"
          style={{ color: 'var(--muted)', fontFamily: 'var(--font-body)' }}
        >
          TrioForge is a 3-person postgrad engineering team from NIT Jalandhar — 
          MERN stack, real-time systems, and ML-driven tooling. We turn messy requirements 
          into fast, structured software. Our flagship:{' '}
          <span style={{ color: 'var(--parsed-teal)' }}>
            DocuFlow, which converts any document format into clean JSON.
          </span>
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4, ease }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-10 sm:mb-12"
        >
          <button
            id="hero-cta-work"
            onClick={() => scrollToSection('#projects')}
            className="btn-primary"
          >
            See Our Work
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button
            id="hero-cta-contact"
            onClick={() => scrollToSection('#contact')}
            className="btn-outline"
          >
            Start a Project
          </button>
        </motion.div>

        {/* ─── Transform Animation ──────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55, ease }}
          className="relative"
          aria-label="Document transformation visualization: file formats convert to structured JSON"
          role="img"
        >
          <div
            className="rounded-2xl p-6 sm:p-8 mx-auto max-w-3xl"
            style={{
              background: 'rgba(28, 35, 51, 0.7)',
              border: '1px solid rgba(42, 63, 95, 0.8)',
              backdropFilter: 'blur(12px)',
              boxShadow: '0 24px 80px rgba(0,0,0,0.4)',
            }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500 opacity-70" />
              <div className="w-3 h-3 rounded-full bg-yellow-500 opacity-70" />
              <div className="w-3 h-3 rounded-full bg-green-500 opacity-70" />
              <span
                className="ml-2 text-xs"
                style={{ color: 'var(--muted)', fontFamily: 'var(--font-mono)' }}
              >
                docuflow — transform
              </span>
            </div>

            {/* Transform row — responsive: column on xs, row on sm+ */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
              {/* Input files */}
              <div className="flex flex-row sm:flex-col gap-2 flex-shrink-0">
                {fileTypes.map((ft, i) => (
                  <motion.div
                    key={ft.id}
                    initial={{ opacity: 0, x: -24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 + i * 0.12, duration: 0.5, ease }}
                    className="flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg"
                    style={{
                      background: ft.bg,
                      border: `1px solid ${ft.border}`,
                    }}
                    aria-label={`${ft.label} input file`}
                  >
                    <div className="w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0">{ft.icon}</div>
                    <span
                      className="hidden sm:inline"
                      style={{ color: ft.color, fontFamily: 'var(--font-mono)', fontSize: '0.65rem', fontWeight: 600 }}
                    >
                      .{ft.label.toLowerCase()}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Arrow + Transform Node */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.3, duration: 0.5, ease }}
                className="flex-shrink-0 flex items-center justify-center"
                aria-hidden="true"
              >
                <TransformNode />
              </motion.div>

              {/* JSON Output — hidden on xs, visible sm+ */}
              <motion.div
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.5, duration: 0.5, ease }}
                className="hidden sm:block flex-1 rounded-lg p-3 overflow-hidden"
                style={{
                  background: 'rgba(14, 17, 23, 0.8)',
                  border: '1px solid rgba(78, 205, 196, 0.25)',
                  minWidth: 0,
                  maxWidth: '260px',
                }}
              >
                <div
                  className="text-xs mb-2"
                  style={{ color: 'var(--muted)', fontFamily: 'var(--font-mono)' }}
                >
                  output.json
                </div>
                <div className="space-y-0.5 overflow-hidden">
                  {jsonStarted
                    ? jsonLines.map((line, i) => (
                        <JsonLine key={i} text={line.text} delay={i * 220} />
                      ))
                    : jsonLines.map((_, i) => (
                        <div key={i} className="h-4" />
                      ))}
                </div>
              </motion.div>
            </div>

            {/* Mobile-only: JSON label instead of full panel */}
            <motion.div
              className="sm:hidden mt-3 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.8, duration: 0.5, ease }}
            >
              <span
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs"
                style={{
                  background: 'rgba(78,205,196,0.08)',
                  border: '1px solid rgba(78,205,196,0.25)',
                  color: 'var(--parsed-teal)',
                  fontFamily: 'var(--font-mono)',
                }}
              >
                → output.json ✓
              </span>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2, duration: 0.5 }}
          className="flex justify-center mt-10"
          aria-hidden="true"
        >
          <div className="animate-float flex flex-col items-center gap-1.5">
            <span style={{ color: 'var(--muted)', fontSize: '0.7rem', fontFamily: 'var(--font-mono)' }}>
              scroll
            </span>
            <svg width="16" height="24" viewBox="0 0 16 24" fill="none" aria-hidden="true">
              <rect x="1" y="1" width="14" height="22" rx="7" stroke="var(--blueprint)" strokeWidth="1.5"/>
              <circle cx="8" cy="7" r="2.5" fill="var(--parsed-teal)" className="animate-float"/>
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
