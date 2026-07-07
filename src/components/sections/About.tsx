'use client';

import { useRef } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';

const stats = [
  { value: '3', label: 'Engineers' },
  { value: '10+', label: 'Projects' },
  { value: 'MERN', label: 'Core Stack' },
  { value: 'M.Tech', label: 'Postgrad Level' },
];

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const prefersReducedMotion = useReducedMotion();

  const ease = [0.16, 1, 0.3, 1] as const;
  const dur = prefersReducedMotion ? 0 : 0.6;
  const delayBase = prefersReducedMotion ? 0 : 0.1;

  return (
    <section id="about" ref={ref} className="section" aria-labelledby="about-heading">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div>

            <motion.h2
              id="about-heading"
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6"
              style={{ fontFamily: 'var(--font-display)', color: 'var(--ghost-white)', lineHeight: 1.25, overflow: 'visible' }}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: dur, delay: delayBase, ease }}
            >
              Three engineers.{' '}
              <span className="text-gradient-teal">One focused forge.</span>
            </motion.h2>

            <motion.p
              className="text-base sm:text-lg leading-relaxed mb-6"
              style={{ color: 'var(--muted)', fontFamily: 'var(--font-body)' }}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: dur, delay: delayBase * 2, ease }}
            >
              We are postgraduate engineers from{' '}
              <span style={{ color: 'var(--ghost-white)' }}>Dr. B.R. Ambedkar NIT Jalandhar</span>,
              specializing in full-stack web engineering, real-time systems, and ML-driven tooling.
              As a tight-knit freelance team, we work across the stack — from React frontends and
              Node.js APIs to deep learning models and document-processing pipelines.
            </motion.p>

            <motion.p
              className="text-base leading-relaxed"
              style={{ color: 'var(--muted)' }}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: dur, delay: delayBase * 3, ease }}
            >
              We ship real software with real structure — not just prototypes. Every project
              we take on gets the same rigor we put into our academic work:{' '}
              <span style={{ color: 'var(--parsed-teal)' }}>
                clean architecture, documented APIs, and measurable results.
              </span>
            </motion.p>
          </div>

          {/* Right: Stats grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="rounded-xl p-6 text-center"
                style={{
                  background: 'var(--structural-dark)',
                  border: '1px solid var(--blueprint)',
                }}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: dur, delay: delayBase * (i + 2), ease }}
                whileHover={prefersReducedMotion ? {} : {
                  scale: 1.03,
                  boxShadow: '0 0 20px rgba(78,205,196,0.15)',
                }}
              >
                <div
                  className="text-3xl sm:text-4xl font-bold mb-2 text-gradient-teal"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {stat.value}
                </div>
                <div
                  className="text-xs"
                  style={{ color: 'var(--muted)', fontFamily: 'var(--font-mono)', letterSpacing: '0.05em' }}
                >
                  {stat.label}
                </div>
              </motion.div>
            ))}

            {/* NIT Badge */}
            <motion.div
              className="col-span-2 rounded-xl p-5 flex items-center gap-4"
              style={{
                background: 'rgba(78, 205, 196, 0.05)',
                border: '1px solid rgba(78, 205, 196, 0.2)',
              }}
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: dur, delay: delayBase * 6, ease }}
            >
              <div
                className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center text-lg"
                style={{ background: 'rgba(78, 205, 196, 0.12)', border: '1px solid rgba(78, 205, 196, 0.3)' }}
                aria-hidden="true"
              >
                🎓
              </div>
              <div>
                <p
                  className="text-sm font-semibold"
                  style={{ color: 'var(--ghost-white)', fontFamily: 'var(--font-display)' }}
                >
                  Dr. B.R. Ambedkar NIT Jalandhar
                </p>
                <p
                  className="text-xs"
                  style={{ color: 'var(--muted)', fontFamily: 'var(--font-body)' }}
                >
                  M.Tech CSE — Available for freelance & contract work
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
