'use client';

import { useRef, useState } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';

// ─── Feature List ─────────────────────────────────────────────────────────────
const features = [
  {
    icon: '📄',
    title: 'Multi-Format Ingestion',
    desc: 'Handles PDF, DOCX, PPTX, and video files. Drop any format — get consistent JSON out.',
  },
  {
    icon: '🔍',
    title: 'OCR for Scanned Documents',
    desc: 'Optical character recognition on image-based or scanned pages — no manual transcription.',
  },
  {
    icon: '🎬',
    title: 'Video Transcription',
    desc: 'Extracts audio transcript, slide changes, and scene boundaries from video presentations.',
  },
  {
    icon: '⚡',
    title: 'Batch Processing',
    desc: 'Process dozens of documents in parallel with real-time progress tracking via WebSocket.',
  },
  {
    icon: '🔧',
    title: 'Schema Customization',
    desc: 'Define your own JSON output structure. DocuFlow maps to your schema, not ours.',
  },
  {
    icon: '🔌',
    title: 'Developer API',
    desc: 'Clean REST API for integration into your own pipelines, CI workflows, or SaaS products.',
  },
];

// ─── Animated Demo Mockup ─────────────────────────────────────────────────────
function DemoMockup() {
  const [stage, setStage] = useState<'idle' | 'dropping' | 'processing' | 'done' | 'replay'>('idle');
  const prefersReducedMotion = useReducedMotion();

  const runDemo = () => {
    if (stage !== 'idle' && stage !== 'replay') return;
    setStage('dropping');
    setTimeout(() => setStage('processing'), 800);
    setTimeout(() => setStage('done'), 2600);
    setTimeout(() => setStage('replay'), 5800);
    setTimeout(() => setStage('idle'), 6000);
  };

  const jsonOutput = `{
  "file": "report_Q3.pdf",
  "pages": 18,
  "schema": "financial_v1",
  "sections": [
    {
      "id": "exec_summary",
      "type": "heading",
      "text": "Executive Summary",
      "level": 1,
      "confidence": 0.97
    },
    {
      "id": "table_1",
      "type": "table",
      "rows": 12,
      "cols": 4,
      "data": [[...]]
    }
  ],
  "word_count": 4821,
  "processing_ms": 340
}`;

  return (
    <div
      className="rounded-2xl overflow-hidden"
      style={{
        background: 'rgba(14, 17, 23, 0.95)',
        border: '1px solid rgba(42, 63, 95, 0.8)',
        boxShadow: '0 32px 80px rgba(0,0,0,0.5)',
      }}
    >
      {/* Title bar */}
      <div
        className="flex items-center gap-2 px-4 py-3"
        style={{ borderBottom: '1px solid rgba(42,63,95,0.6)', background: 'rgba(28,35,51,0.8)' }}
      >
        <div className="w-3 h-3 rounded-full bg-red-500 opacity-60" />
        <div className="w-3 h-3 rounded-full bg-yellow-500 opacity-60" />
        <div className="w-3 h-3 rounded-full bg-green-500 opacity-60" />
        <span className="ml-2 text-xs" style={{ color: 'var(--muted)', fontFamily: 'var(--font-mono)' }}>
          DocuFlow — Live Demo
        </span>
      </div>

      <div className="p-5">
        {/* Drop zone */}
        <button
          onClick={runDemo}
          disabled={stage === 'dropping' || stage === 'processing'}
          className="w-full rounded-xl p-6 mb-4 text-center transition-all duration-300"
          style={{
            background: stage === 'dropping' || stage === 'processing'
              ? 'rgba(78,205,196,0.08)'
              : stage === 'replay'
              ? 'rgba(78,205,196,0.05)'
              : 'rgba(28,35,51,0.5)',
            border: `2px dashed ${
              stage === 'dropping' || stage === 'processing'
                ? 'var(--parsed-teal)'
                : stage === 'replay'
                ? 'rgba(78,205,196,0.4)'
                : 'rgba(42,63,95,0.6)'
            }`,
            cursor: stage === 'dropping' || stage === 'processing' ? 'default' : 'pointer',
          }}
          aria-label="Click to run DocuFlow demo"
        >
          {stage === 'idle' && (
            <div>
              <div className="text-3xl mb-2" aria-hidden="true">📁</div>
              <p className="text-sm" style={{ color: 'var(--muted)', fontFamily: 'var(--font-mono)' }}>
                Click to run demo
              </p>
            </div>
          )}
          {stage === 'replay' && (
            <div>
              <div className="text-2xl mb-2" aria-hidden="true">🔄</div>
              <p className="text-sm" style={{ color: 'var(--parsed-teal)', fontFamily: 'var(--font-mono)' }}>
                Click to replay
              </p>
            </div>
          )}
          {stage === 'dropping' && (
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4 }}
            >
              <div className="text-3xl mb-2" aria-hidden="true">📄</div>
              <p className="text-sm" style={{ color: 'var(--parsed-teal)', fontFamily: 'var(--font-mono)' }}>
                report_Q3.pdf dropped...
              </p>
            </motion.div>
          )}
          {stage === 'processing' && (
            <div>
              <div className="flex justify-center gap-1.5 mb-3" aria-hidden="true">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    className="w-2 h-2 rounded-full"
                    style={{ background: 'var(--parsed-teal)' }}
                    animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                    transition={{ repeat: Infinity, duration: 0.8, delay: i * 0.15 }}
                  />
                ))}
              </div>
              <p className="text-sm" style={{ color: 'var(--parsed-teal)', fontFamily: 'var(--font-mono)' }}>
                Parsing... OCR... Structuring...
              </p>
            </div>
          )}
          {stage === 'done' && (
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-3xl mb-2" aria-hidden="true">✅</div>
              <p className="text-sm" style={{ color: 'var(--parsed-teal)', fontFamily: 'var(--font-mono)' }}>
                Done in 340ms
              </p>
            </motion.div>
          )}
        </button>

        {/* JSON Output — use code element inside pre for valid HTML */}
        <div
          className="rounded-xl overflow-hidden transition-all duration-500"
          style={{
            opacity: stage === 'done' || stage === 'replay' ? 1 : 0.12,
            transform: stage === 'done' || stage === 'replay' ? 'none' : 'translateY(4px)',
          }}
          aria-label="JSON output preview"
        >
          <div
            className="flex items-center justify-between px-4 py-2"
            style={{ background: 'rgba(42,63,95,0.3)', borderBottom: '1px solid rgba(42,63,95,0.4)' }}
          >
            <span style={{ color: 'var(--muted)', fontFamily: 'var(--font-mono)', fontSize: '0.7rem' }}>output.json</span>
            <span
              className="text-xs px-2 py-0.5 rounded"
              style={{ background: 'rgba(78,205,196,0.15)', color: 'var(--parsed-teal)', fontFamily: 'var(--font-mono)', fontSize: '0.65rem' }}
            >
              application/json
            </span>
          </div>
          <pre
            className="p-4 text-xs overflow-x-auto leading-relaxed"
            style={{ fontFamily: 'var(--font-mono)', color: 'var(--ghost-white)', lineHeight: 1.7, margin: 0 }}
            aria-label="Sample JSON output"
          >
            <code
              dangerouslySetInnerHTML={{
                __html: jsonOutput
                  .replace(/&/g, '&amp;')
                  .replace(/</g, '&lt;')
                  .replace(/>/g, '&gt;')
                  .replace(/"([^"]+)":/g, '<span class="json-key">"$1"</span>:')
                  .replace(/: "([^"]*)"([,\n]|$)/g, ': <span class="json-str">"$1"</span>$2')
                  .replace(/: (\d+\.?\d*)/g, ': <span class="json-num">$1</span>')
                  .replace(/: (true|false)/g, ': <span class="json-bool">$1</span>')
                  .replace(/[{}\[\]]/g, (m) => `<span class="json-punct">${m}</span>`),
              }}
            />
          </pre>
        </div>
      </div>
    </div>
  );
}

// ─── DocuFlow Section ─────────────────────────────────────────────────────────
export default function DocuFlow() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const prefersReducedMotion = useReducedMotion();
  const ease = [0.16, 1, 0.3, 1] as const;
  const dur = prefersReducedMotion ? 0 : 0.6;
  const delay = prefersReducedMotion ? 0 : 0.1;

  return (
    <section
      id="docuflow"
      ref={ref}
      className="section relative overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, var(--forge-black) 0%, rgba(78,205,196,0.03) 50%, var(--forge-black) 100%)',
      }}
      aria-labelledby="docuflow-heading"
    >
      {/* Background accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 70% 50% at 50% 50%, rgba(78,205,196,0.04) 0%, transparent 60%)',
        }}
        aria-hidden="true"
      />

      <div className="container relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            id="docuflow-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: 'var(--font-display)', color: 'var(--ghost-white)', lineHeight: 1.25, overflow: 'visible' }}
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: dur, delay, ease }}
          >
            <span className="text-gradient-teal">DocuFlow</span>
          </motion.h2>
          <motion.p
            className="text-lg max-w-2xl mx-auto"
            style={{ color: 'var(--muted)' }}
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: dur, delay: delay * 2, ease }}
          >
            Feed it any document. Get structured JSON back. 
            Our core product solves the &ldquo;unstructured document&rdquo; problem — 
            the last mile between raw files and real data pipelines.
          </motion.p>
        </div>

        {/* Main content: Features + Demo */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Features */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: dur, delay: delay * 2, ease }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {features.map((feat, i) => (
              <motion.div
                key={feat.title}
                className="p-4 rounded-xl"
                style={{
                  background: 'var(--structural-dark)',
                  border: '1px solid var(--blueprint)',
                  transition: 'border-color 0.3s, box-shadow 0.3s',
                }}
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: prefersReducedMotion ? 0 : 0.5, delay: prefersReducedMotion ? 0 : 0.3 + i * 0.08, ease }}
                whileHover={prefersReducedMotion ? {} : {
                  borderColor: 'var(--parsed-teal)',
                  boxShadow: '0 0 20px rgba(78,205,196,0.08)',
                }}
              >
                <div className="text-xl mb-2" aria-hidden="true">{feat.icon}</div>
                <h3
                  className="text-sm font-semibold mb-1"
                  style={{ color: 'var(--ghost-white)', fontFamily: 'var(--font-display)' }}
                >
                  {feat.title}
                </h3>
                <p className="text-xs leading-relaxed" style={{ color: 'var(--muted)' }}>
                  {feat.desc}
                </p>
              </motion.div>
            ))}

            {/* CTAs */}
            <div className="sm:col-span-2 flex flex-col sm:flex-row flex-wrap gap-3 mt-2">
              <a href="#" className="btn-primary justify-center" aria-label="View DocuFlow on GitHub">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
                </svg>
                View on GitHub
              </a>
              <a href="#contact" className="btn-outline justify-center" aria-label="Request DocuFlow API access">
                Request API Access
              </a>
            </div>
          </motion.div>

          {/* Demo Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: dur, delay: delay * 3, ease }}
          >
            <DemoMockup />
          </motion.div>
        </div>

        {/* Tech badges */}
        <motion.div
          className="flex flex-wrap gap-3 justify-center mt-12 pt-12"
          style={{ borderTop: '1px solid rgba(42,63,95,0.4)' }}
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: dur, delay: delay * 4, ease }}
        >
          {['Next.js', 'Node.js', 'Python', 'Socket.IO', 'OCR Engine', 'FFmpeg', 'MongoDB', 'REST API'].map((tech) => (
            <span key={tech} className="skill-tag" style={{ fontSize: '0.75rem', padding: '0.3rem 0.8rem' }}>
              {tech}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
