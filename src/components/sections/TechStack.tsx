'use client';

import { useRef } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';

// ─── Stack Data ────────────────────────────────────────────────────────────────
const stackCategories = [
  {
    id: 'languages',
    label: 'Languages',
    icon: '{ }',
    color: 'var(--parsed-teal)',
    items: ['JavaScript', 'TypeScript', 'Python', 'Java', 'C', 'C++'],
  },
  {
    id: 'frontend',
    label: 'Frontend',
    icon: '◻',
    color: '#7B8FF7',
    items: ['React', 'Next.js', 'Tailwind CSS', 'Redux', 'Framer Motion', 'CodeMirror'],
  },
  {
    id: 'backend',
    label: 'Backend & APIs',
    icon: '⟳',
    color: 'var(--forge-amber)',
    items: ['Node.js', 'Express.js', 'Socket.IO', 'REST APIs', 'GraphQL', 'Multer'],
  },
  {
    id: 'data-ml',
    label: 'Data & ML',
    icon: '◈',
    color: '#9B59B6',
    items: ['PyTorch', 'Deep Learning', 'OCR', 'Computer Vision', 'Scikit-learn', 'FFmpeg'],
  },
  {
    id: 'databases',
    label: 'Databases',
    icon: '▦',
    color: '#2ECC71',
    items: ['MongoDB', 'Firebase', 'SQL'],
  },
  {
    id: 'tools',
    label: 'Tools & Workflow',
    icon: '⚙',
    color: 'var(--muted)',
    items: ['Git', 'GitHub', 'Figma', 'Postman', 'PDF-Lib', 'UUID'],
  },
];

// ─── Category Block ───────────────────────────────────────────────────────────
function StackCategory({
  category,
  index,
  inView,
}: {
  category: typeof stackCategories[0];
  index: number;
  inView: boolean;
}) {
  const prefersReducedMotion = useReducedMotion();
  const ease = [0.16, 1, 0.3, 1] as const;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: prefersReducedMotion ? 0 : 0.6, delay: prefersReducedMotion ? 0 : index * 0.1, ease }}
      className="rounded-xl p-5"
      style={{
        background: 'var(--structural-dark)',
        border: '1px solid var(--blueprint)',
      }}
    >
      {/* Category Header */}
      <div className="flex items-center gap-2.5 mb-4">
        <span
          className="text-base font-bold w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
          style={{
            color: category.color,
            background: `${category.color}15`,
            border: `1px solid ${category.color}30`,
            fontFamily: 'var(--font-mono)',
            fontSize: '0.9rem',
          }}
          aria-hidden="true"
        >
          {category.icon}
        </span>
        <h3
          className="text-sm font-bold uppercase tracking-wider"
          style={{ color: 'var(--ghost-white)', fontFamily: 'var(--font-display)', letterSpacing: '0.06em' }}
        >
          {category.label}
        </h3>
      </div>

      {/* Skill items */}
      <div className="flex flex-wrap gap-2">
        {category.items.map((item, i) => (
          <motion.span
            key={item}
            className="px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200"
            style={{
              background: `${category.color}10`,
              border: `1px solid ${category.color}25`,
              color: category.color,
              fontFamily: 'var(--font-mono)',
            }}
            initial={{ opacity: 0, scale: 0.85 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: prefersReducedMotion ? 0 : 0.3, delay: prefersReducedMotion ? 0 : 0.3 + index * 0.1 + i * 0.04 }}
            whileHover={prefersReducedMotion ? {} : {
              scale: 1.05,
              background: `${category.color}20`,
            }}
          >
            {item}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}

// ─── TechStack Section ────────────────────────────────────────────────────────
export default function TechStack() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const prefersReducedMotion = useReducedMotion();
  const ease = [0.16, 1, 0.3, 1] as const;

  return (
    <section id="stack" ref={ref} className="section" aria-labelledby="stack-heading">
      <div className="container">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <motion.h2
            id="stack-heading"
            className="text-3xl sm:text-4xl font-bold"
            style={{ fontFamily: 'var(--font-display)', color: 'var(--ghost-white)', lineHeight: 1.25, overflow: 'visible' }}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: prefersReducedMotion ? 0 : 0.6, delay: 0.1, ease }}
          >
            The full stack
          </motion.h2>
          <motion.p
            className="text-sm max-w-xs"
            style={{ color: 'var(--muted)' }}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: prefersReducedMotion ? 0 : 0.5, delay: 0.2, ease }}
          >
            Combined skills across all three engineers — 
            from pixels to pipelines.
          </motion.p>
        </div>

        {/* Stack grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {stackCategories.map((cat, i) => (
            <StackCategory key={cat.id} category={cat} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
