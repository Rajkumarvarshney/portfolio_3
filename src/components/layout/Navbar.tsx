'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Team', href: '#team' },
  { label: 'DocuFlow', href: '#docuflow' },
  { label: 'Projects', href: '#projects' },
  { label: 'Stack', href: '#stack' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleNavClick = (href: string) => {
    const wasOpen = mobileOpen;
    setMobileOpen(false);

    const scrollToSection = () => {
      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth' });
      }
    };

    // On mobile the menu takes ~300ms to animate closed.
    // Delay the scroll so the menu is fully gone before we jump.
    if (wasOpen) {
      setTimeout(scrollToSection, 350);
    } else {
      scrollToSection();
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled
            ? 'rgba(14, 17, 23, 0.92)'
            : 'transparent',
          backdropFilter: scrolled ? 'blur(16px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(42, 63, 95, 0.5)' : '1px solid transparent',
        }}
        aria-label="Main navigation"
      >
        <div className="container">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <button
              onClick={() => handleNavClick('#hero')}
              className="flex items-center gap-2 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--parsed-teal)] rounded-md"
              aria-label="TrioForge home"
            >
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
                style={{ fontFamily: 'var(--font-display)', color: 'var(--ghost-white)', lineHeight: 1.4, overflow: 'visible', paddingBottom: '0.1em' }}
              >
                TrioForge
              </span>
            </button>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8" role="list">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="nav-link"
                  role="listitem"
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:block">
              <button
                onClick={() => handleNavClick('#contact')}
                className="btn-primary"
                style={{ padding: '0.5rem 1.25rem', fontSize: '0.85rem' }}
              >
                Start a Project
              </button>
            </div>

            {/* Mobile Hamburger */}
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden flex flex-col gap-1.5 p-2 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--parsed-teal)]"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
            >
              <span
                className="block w-6 h-0.5 transition-all duration-300"
                style={{
                  background: 'var(--ghost-white)',
                  transform: mobileOpen ? 'rotate(45deg) translateY(8px)' : 'none',
                }}
              />
              <span
                className="block w-6 h-0.5 transition-all duration-300"
                style={{
                  background: 'var(--ghost-white)',
                  opacity: mobileOpen ? 0 : 1,
                }}
              />
              <span
                className="block w-6 h-0.5 transition-all duration-300"
                style={{
                  background: 'var(--ghost-white)',
                  transform: mobileOpen ? 'rotate(-45deg) translateY(-8px)' : 'none',
                }}
              />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-16 left-0 right-0 z-40 overflow-hidden"
            style={{
              background: 'rgba(14, 17, 23, 0.97)',
              backdropFilter: 'blur(20px)',
              borderBottom: '1px solid rgba(42, 63, 95, 0.5)',
            }}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation menu"
          >
            <div className="container py-6 flex flex-col gap-4">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left py-2 text-lg font-medium transition-colors"
                  style={{
                    fontFamily: 'var(--font-display)',
                    color: 'var(--muted)',
                    borderBottom: '1px solid rgba(42, 63, 95, 0.3)',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.color = 'var(--ghost-white)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.color = 'var(--muted)';
                  }}
                >
                  {link.label}
                </motion.button>
              ))}
              <button
                onClick={() => handleNavClick('#contact')}
                className="btn-primary mt-2 justify-center"
              >
                Start a Project
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
