'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useInView, useReducedMotion } from 'framer-motion';
import { TeamMember } from '@/types';
import { teamMembers } from '@/data/team';
import { projects } from '@/data/projects';

// ─── Member Avatar ─────────────────────────────────────────────────────────────
function Avatar({ member }: { member: TeamMember }) {
  return (
    <div
      className="w-20 h-20 rounded-2xl flex items-center justify-center text-2xl font-bold flex-shrink-0"
      style={{
        background: `linear-gradient(135deg, ${member.avatarColor}22, ${member.avatarColor}44)`,
        border: `2px solid ${member.avatarColor}66`,
        color: member.avatarColor,
        fontFamily: 'var(--font-display)',
      }}
      aria-label={`${member.name} avatar`}
    >
      {member.avatar}
    </div>
  );
}

// ─── Member Card ─────────────────────────────────────────────────────────────
function MemberCard({
  member,
  index,
  onOpen,
}: {
  member: TeamMember;
  index: number;
  onOpen: (m: TeamMember) => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const prefersReducedMotion = useReducedMotion();
  const ease = [0.16, 1, 0.3, 1] as const;

  return (
    <motion.div
      ref={ref}
      className="h-full"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: prefersReducedMotion ? 0 : 0.6, delay: prefersReducedMotion ? 0 : index * 0.12, ease }}
    >
      <div
        className="card p-6 h-full flex flex-col cursor-pointer group"
        onClick={() => onOpen(member)}
        onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') onOpen(member); }}
        tabIndex={0}
        role="button"
        aria-label={`View full profile for ${member.name}`}
      >
        {/* Header */}
        <div className="flex items-start gap-4 mb-5">
          <Avatar member={member} />
          <div className="flex-1 min-w-0">
            <h3
              className="text-lg font-bold mb-1 truncate"
              style={{ fontFamily: 'var(--font-display)', color: 'var(--ghost-white)' }}
            >
              {member.name}
            </h3>
            <p
              className="text-sm"
              style={{ color: 'var(--parsed-teal)', fontFamily: 'var(--font-mono)', fontSize: '0.75rem' }}
            >
              {member.role}
            </p>
          </div>
        </div>

        {/* Tagline */}
        <p
          className="text-sm leading-relaxed mb-5 flex-1"
          style={{ color: 'var(--muted)' }}
        >
          {member.tagline}
        </p>

        {/* Top Skills */}
        <div className="flex flex-wrap gap-2 mb-5">
          {member.topSkills.map((skill) => (
            <span key={skill} className="skill-tag">
              {skill}
            </span>
          ))}
        </div>

        {/* Education quick line */}
        <div
          className="text-xs pb-4 mb-4"
          style={{
            color: 'var(--muted)',
            fontFamily: 'var(--font-mono)',
            borderBottom: '1px solid rgba(42,63,95,0.5)',
          }}
        >
          {member.education[0].degree} · {member.education[0].institution}
        </div>

        {/* View Profile CTA */}
        <div
          className="flex items-center gap-2 text-sm font-medium transition-colors group-hover:text-[var(--parsed-teal)]"
          style={{ color: 'var(--muted)', fontFamily: 'var(--font-mono)', fontSize: '0.78rem' }}
        >
          View Full Profile
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            className="transition-transform group-hover:translate-x-1"
            aria-hidden="true"
          >
            <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </motion.div>
  );
}

// ─── Member Modal ─────────────────────────────────────────────────────────────
function MemberModal({
  member,
  onClose,
}: {
  member: TeamMember | null;
  onClose: () => void;
}) {
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (!member) return;
    const handleKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [member, onClose]);

  if (!member) return null;

  const memberProjects = projects.filter((p) => member.projects.includes(p.id));

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-3 sm:p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: prefersReducedMotion ? 0 : 0.2 }}
      >
        {/* Backdrop */}
        <motion.div
          className="absolute inset-0"
          style={{ background: 'rgba(14, 17, 23, 0.85)', backdropFilter: 'blur(8px)' }}
          onClick={onClose}
          aria-hidden="true"
        />

        {/* Modal */}
        <motion.div
          className="relative w-full max-w-2xl max-h-[92vh] sm:max-h-[90vh] overflow-y-auto rounded-2xl rounded-b-none sm:rounded-2xl"
          style={{
            background: 'var(--structural-dark)',
            border: '1px solid var(--blueprint)',
            boxShadow: '0 32px 100px rgba(0,0,0,0.6)',
          }}
          initial={{ y: prefersReducedMotion ? 0 : 40, opacity: 0, scale: 0.97 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: 20, opacity: 0, scale: 0.97 }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.35, ease: [0.16, 1, 0.3, 1] }}
          role="dialog"
          aria-modal="true"
          aria-label={`${member.name}'s profile`}
        >
          {/* Modal Header */}
          <div
            className="sticky top-0 flex items-center justify-between p-6 pb-4"
            style={{
              background: 'var(--structural-dark)',
              borderBottom: '1px solid rgba(42,63,95,0.5)',
              zIndex: 1,
            }}
          >
            <div className="flex items-center gap-4">
              <Avatar member={member} />
              <div>
                <h2
                  className="text-xl font-bold"
                  style={{ fontFamily: 'var(--font-display)', color: 'var(--ghost-white)' }}
                >
                  {member.name}
                </h2>
                <p
                  className="text-sm"
                  style={{ color: 'var(--parsed-teal)', fontFamily: 'var(--font-mono)', fontSize: '0.8rem' }}
                >
                  {member.role}
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-lg transition-colors hover:bg-[rgba(42,63,95,0.4)]"
              style={{ color: 'var(--muted)' }}
              aria-label="Close profile modal"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M5 5l10 10M15 5L5 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
          </div>

          <div className="p-6 space-y-6">
            {/* Education */}
            <section aria-labelledby={`${member.id}-edu`}>
              <h3
                id={`${member.id}-edu`}
                className="modal-subtitle mb-3"
              >
                Education
              </h3>
              {member.education.map((edu, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 mb-3 last:mb-0"
                >
                  <div
                    className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                    style={{ background: 'var(--parsed-teal)' }}
                    aria-hidden="true"
                  />
                  <div>
                    <p
                      className="text-sm font-semibold"
                      style={{ color: 'var(--ghost-white)', fontFamily: 'var(--font-display)' }}
                    >
                      {edu.degree}
                    </p>
                    <p
                      className="text-xs"
                      style={{ color: 'var(--muted)' }}
                    >
                      {edu.institution} · {edu.year}
                      {edu.cgpa ? ` · CGPA: ${edu.cgpa}` : ''}
                    </p>
                  </div>
                </div>
              ))}
            </section>

            {/* Experience */}
            <section aria-labelledby={`${member.id}-exp`}>
              <h3 id={`${member.id}-exp`} className="modal-subtitle mb-3">
                Experience
              </h3>
              {member.experience.map((exp, i) => (
                <div key={i} className="rounded-xl p-4" style={{ background: 'rgba(14,17,23,0.6)', border: '1px solid rgba(42,63,95,0.5)' }}>
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <p className="text-sm font-semibold" style={{ color: 'var(--ghost-white)', fontFamily: 'var(--font-display)' }}>
                        {exp.role}
                      </p>
                      <p className="text-xs" style={{ color: 'var(--parsed-teal)', fontFamily: 'var(--font-mono)' }}>
                        {exp.company}
                      </p>
                    </div>
                    <span
                      className="text-xs px-2 py-1 rounded"
                      style={{ background: 'rgba(42,63,95,0.5)', color: 'var(--muted)', fontFamily: 'var(--font-mono)', fontSize: '0.65rem' }}
                    >
                      {exp.period}
                    </span>
                  </div>
                  <ul className="space-y-1">
                    {exp.highlights.map((h, j) => (
                      <li key={j} className="flex items-start gap-2 text-xs" style={{ color: 'var(--muted)' }}>
                        <span style={{ color: 'var(--parsed-teal)', flexShrink: 0 }}>›</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </section>

            {/* Skills */}
            <section aria-labelledby={`${member.id}-skills`}>
              <h3 id={`${member.id}-skills`} className="modal-subtitle mb-3">
                Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {member.skills.map((skill) => (
                  <span key={skill} className="skill-tag">{skill}</span>
                ))}
              </div>
            </section>

            {/* Projects */}
            <section aria-labelledby={`${member.id}-projects`}>
              <h3 id={`${member.id}-projects`} className="modal-subtitle mb-3">
                Projects
              </h3>
              <div className="space-y-3">
                {memberProjects.map((proj) => (
                  <div
                    key={proj.id}
                    className="rounded-xl p-4"
                    style={{ background: 'rgba(14,17,23,0.6)', border: '1px solid rgba(42,63,95,0.5)' }}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <p className="text-sm font-semibold" style={{ color: 'var(--ghost-white)', fontFamily: 'var(--font-display)' }}>
                        {proj.title}
                      </p>
                      <div className="flex gap-2 flex-shrink-0 ml-2">
                        {proj.github !== '#' && (
                          <a href={proj.github} target="_blank" rel="noopener noreferrer" className="text-xs" style={{ color: 'var(--muted)' }} aria-label={`${proj.title} GitHub`}>
                            GitHub
                          </a>
                        )}
                      </div>
                    </div>
                    <p className="text-xs mb-2" style={{ color: 'var(--muted)' }}>{proj.description}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {proj.techStack.slice(0, 4).map((t) => (
                        <span key={t} className="skill-tag" style={{ fontSize: '0.62rem', padding: '0.15rem 0.45rem' }}>{t}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Interests */}
            {member.interests && (
              <section aria-labelledby={`${member.id}-interests`}>
                <h3 id={`${member.id}-interests`} className="modal-subtitle mb-3">
                  Interests
                </h3>
                <div className="flex flex-wrap gap-2">
                  {member.interests.map((interest) => (
                    <span
                      key={interest}
                      className="text-xs px-3 py-1.5 rounded-full"
                      style={{
                        background: 'rgba(255,155,60,0.08)',
                        border: '1px solid rgba(255,155,60,0.2)',
                        color: 'var(--forge-amber)',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.7rem',
                      }}
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </section>
            )}

            {/* Contact */}
            <section
              className="rounded-xl p-4"
              style={{ background: 'rgba(78,205,196,0.05)', border: '1px solid rgba(78,205,196,0.2)' }}
              aria-labelledby={`${member.id}-contact`}
            >
              <h3 id={`${member.id}-contact`} className="modal-subtitle mb-3">
                Contact
              </h3>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={`mailto:${member.contact.email}`}
                  className="btn-primary"
                  style={{ fontSize: '0.8rem', padding: '0.5rem 1rem' }}
                >
                  Email {member.name.split(' ')[0]}
                </a>
                <a
                  href={member.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline"
                  style={{ fontSize: '0.8rem', padding: '0.5rem 1rem' }}
                >
                  GitHub
                </a>
                <a
                  href={member.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline"
                  style={{ fontSize: '0.8rem', padding: '0.5rem 1rem' }}
                >
                  LinkedIn
                </a>
              </div>
            </section>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

// ─── TeamMembers Section ──────────────────────────────────────────────────────
export default function TeamMembers() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const prefersReducedMotion = useReducedMotion();
  const ease = [0.16, 1, 0.3, 1] as const;

  return (
    <section id="team" ref={ref} className="section" aria-labelledby="team-heading">
      <div className="container">
        <motion.h2
          id="team-heading"
          className="text-3xl sm:text-4xl font-bold mb-4"
          style={{ fontFamily: 'var(--font-display)', color: 'var(--ghost-white)', lineHeight: 1.25, overflow: 'visible' }}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: prefersReducedMotion ? 0 : 0.6, delay: 0.1, ease }}
        >
          Meet the forge
        </motion.h2>
        <motion.p
          className="text-base mb-12 max-w-xl"
          style={{ color: 'var(--muted)' }}
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: prefersReducedMotion ? 0 : 0.5, delay: 0.2, ease }}
        >
          Click any card for the full profile — education, experience, projects, and contact links.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6" role="list" aria-label="Team members">
          {teamMembers.map((member, i) => (
            <div key={member.id} role="listitem" className="h-full">
              <MemberCard member={member} index={i} onOpen={setSelectedMember} />
            </div>
          ))}
        </div>
      </div>

      <MemberModal member={selectedMember} onClose={() => setSelectedMember(null)} />
    </section>
  );
}
