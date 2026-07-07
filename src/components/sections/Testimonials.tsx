'use client';

import { useRef } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { testimonials } from '@/data/projects';

export default function Testimonials() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const prefersReducedMotion = useReducedMotion();
  const ease = [0.16, 1, 0.3, 1] as const;

  return (
    <section id="testimonials" ref={ref} className="section" aria-labelledby="testimonials-heading">
      <div className="container">
        <motion.h2
          id="testimonials-heading"
          className="text-3xl sm:text-4xl font-bold mb-4"
          style={{ fontFamily: 'var(--font-display)', color: 'var(--ghost-white)' }}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: prefersReducedMotion ? 0 : 0.6, delay: 0.1, ease }}
        >
          Client Feedback
        </motion.h2>
        <motion.p
          className="text-sm mb-2 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg"
          style={{
            color: 'var(--forge-amber)',
            background: 'rgba(255,155,60,0.08)',
            border: '1px solid rgba(255,155,60,0.2)',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.7rem',
          }}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: prefersReducedMotion ? 0 : 0.4, delay: 0.2, ease }}
        >
          ⚠ Illustrative testimonials — swap for real client reviews before launch
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          {testimonials.map((testimonial, i) => (
            <motion.blockquote
              key={testimonial.id}
              className="rounded-xl p-6 flex flex-col"
              style={{
                background: 'var(--structural-dark)',
                border: '1px solid var(--blueprint)',
              }}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: prefersReducedMotion ? 0 : 0.6, delay: prefersReducedMotion ? 0 : 0.2 + i * 0.12, ease }}
              whileHover={prefersReducedMotion ? {} : {
                y: -4,
                boxShadow: '0 0 28px rgba(78,205,196,0.1), 0 8px 32px rgba(0,0,0,0.4)',
              }}
              aria-label={`Testimonial from ${testimonial.author} at ${testimonial.company}`}
            >
              {/* Quote mark */}
              <div
                className="text-4xl mb-4 leading-none"
                style={{ color: 'var(--parsed-teal)', fontFamily: 'var(--font-display)', opacity: 0.4 }}
                aria-hidden="true"
              >
                "
              </div>

              {/* Quote text */}
              <p className="text-sm leading-relaxed flex-1 mb-6" style={{ color: 'var(--muted)', fontStyle: 'italic' }}>
                {testimonial.quote}
              </p>

              {/* Attribution */}
              <footer className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0"
                  style={{
                    background: 'rgba(78,205,196,0.12)',
                    border: '1px solid rgba(78,205,196,0.25)',
                    color: 'var(--parsed-teal)',
                    fontFamily: 'var(--font-display)',
                  }}
                  aria-hidden="true"
                >
                  {testimonial.author.split(' ').map((n) => n[0]).join('')}
                </div>
                <div>
                  <cite
                    className="not-italic text-sm font-semibold"
                    style={{ color: 'var(--ghost-white)', fontFamily: 'var(--font-display)' }}
                  >
                    {testimonial.author}
                  </cite>
                  <p className="text-xs" style={{ color: 'var(--muted)', fontFamily: 'var(--font-body)' }}>
                    {testimonial.role} · {testimonial.company}
                  </p>
                </div>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
