'use client';

import { useRef, useState } from 'react';
import { motion, useInView, useReducedMotion, AnimatePresence } from 'framer-motion';
import { projects } from '@/data/projects';
import { teamMembers } from '@/data/team';

// ─── Filter Options ───────────────────────────────────────────────────────────
const filters = [
  { id: 'all', label: 'All Projects' },
  { id: 'rajkumar', label: 'Rajkumar' },
  { id: 'yash', label: 'Yash' },
  { id: 'aditya', label: 'Aditya' },
  { id: 'ml-ai', label: 'ML & AI' },
  { id: 'full-stack', label: 'Full-Stack' },
  { id: 'frontend', label: 'Frontend' },
];

// ─── Project Card ─────────────────────────────────────────────────────────────
function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const prefersReducedMotion = useReducedMotion();

  const memberNames = project.teamMemberIds.map(
    (id) => teamMembers.find((m) => m.id === id)?.name.split(' ')[0] ?? id
  );

  const isFlagship = project.category.includes('flagship');

  return (
    <motion.div
      ref={ref}
      className="h-full"
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: prefersReducedMotion ? 0 : 0.5, delay: prefersReducedMotion ? 0 : (index % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
    >
      <div
        className="card p-5 h-full flex flex-col group"
        style={isFlagship ? { borderColor: 'rgba(78,205,196,0.3)', background: 'rgba(78,205,196,0.04)' } : {}}
      >
        {/* Header */}
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1">
            {isFlagship && (
              <span
                className="inline-block mb-2 text-xs px-2 py-0.5 rounded"
                style={{
                  background: 'rgba(78,205,196,0.15)',
                  color: 'var(--parsed-teal)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.65rem',
                  letterSpacing: '0.05em',
                }}
              >
                ★ FLAGSHIP
              </span>
            )}
            <h3
              className="text-base font-bold"
              style={{ fontFamily: 'var(--font-display)', color: 'var(--ghost-white)' }}
            >
              {project.title}
            </h3>
          </div>
          <div className="flex gap-2 flex-shrink-0 ml-3">
            {project.github !== '#' && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded transition-colors hover:text-[var(--parsed-teal)]"
                style={{ color: 'var(--muted)' }}
                aria-label={`${project.title} GitHub repository`}
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
                </svg>
              </a>
            )}
            {project.demo !== '#' && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded transition-colors hover:text-[var(--parsed-teal)]"
                style={{ color: 'var(--muted)' }}
                aria-label={`${project.title} live demo`}
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            )}
          </div>
        </div>

        {/* Description */}
        <p className="text-sm leading-relaxed mb-4 flex-1" style={{ color: 'var(--muted)' }}>
          {project.description}
        </p>

        {/* Tech stack tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.techStack.slice(0, 5).map((tech) => (
            <span key={tech} className="skill-tag">
              {tech}
            </span>
          ))}
          {project.techStack.length > 5 && (
            <span className="skill-tag">+{project.techStack.length - 5}</span>
          )}
        </div>

        {/* Contributor */}
        <div
          className="text-xs flex items-center gap-1.5 pt-3"
          style={{ color: 'var(--muted)', borderTop: '1px solid rgba(42,63,95,0.4)', fontFamily: 'var(--font-mono)' }}
        >
          <span style={{ color: 'rgba(136,153,170,0.6)' }}>by</span>
          {memberNames.map((name, i) => (
            <span key={name} style={{ color: 'var(--parsed-teal)' }}>
              {name}{i < memberNames.length - 1 ? ', ' : ''}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

// ─── Projects Grid Section ────────────────────────────────────────────────────
export default function ProjectsGrid() {
  const [activeFilter, setActiveFilter] = useState('all');
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const prefersReducedMotion = useReducedMotion();
  const ease = [0.16, 1, 0.3, 1] as const;

  const filteredProjects = projects.filter((p) => {
    if (activeFilter === 'all') return true;
    if (['rajkumar', 'yash', 'aditya'].includes(activeFilter)) {
      return p.teamMemberIds.includes(activeFilter);
    }
    return p.category.includes(activeFilter as 'ml-ai' | 'full-stack' | 'frontend');
  });

  return (
    <section id="projects" ref={ref} className="section" aria-labelledby="projects-heading">
      <div className="container">
        <motion.h2
          id="projects-heading"
          className="text-3xl sm:text-4xl font-bold mb-4"
          style={{ fontFamily: 'var(--font-display)', color: 'var(--ghost-white)', lineHeight: 1.25, overflow: 'visible' }}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: prefersReducedMotion ? 0 : 0.6, delay: 0.1, ease }}
        >
          All projects
        </motion.h2>

        {/* Filter Tabs */}
        <motion.div
          className="-mx-1 px-1 overflow-x-auto pb-2 mb-10"
          style={{ scrollbarWidth: 'none' }}
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: prefersReducedMotion ? 0 : 0.5, delay: 0.2, ease }}
          role="tablist"
          aria-label="Filter projects"
        >
          <div className="flex gap-2 min-w-max">
            {filters.map((filter) => (
              <button
                key={filter.id}
                id={`filter-${filter.id}`}
                role="tab"
                aria-selected={activeFilter === filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 whitespace-nowrap"
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.78rem',
                  background: activeFilter === filter.id ? 'var(--parsed-teal)' : 'rgba(28,35,51,0.8)',
                  color: activeFilter === filter.id ? 'var(--forge-black)' : 'var(--muted)',
                  border: `1px solid ${activeFilter === filter.id ? 'var(--parsed-teal)' : 'var(--blueprint)'}`,
                }}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            role="tabpanel"
            aria-label={`${filters.find((f) => f.id === activeFilter)?.label ?? 'All'} projects`}
          >
            {filteredProjects.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
            {filteredProjects.length === 0 && (
              <div className="col-span-3 text-center py-20" style={{ color: 'var(--muted)' }}>
                No projects match this filter.
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
