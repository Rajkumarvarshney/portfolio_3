'use client';

import { useRef, useState } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';

// ─── Form Types ────────────────────────────────────────────────────────────────
type FormFields = {
  name: string;
  email: string;
  projectType: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormFields, string>>;
type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

const projectTypes = [
  'Full-Stack Web Application',
  'Real-Time System (WebSocket/Socket.IO)',
  'ML / AI Integration',
  'Document Processing (DocuFlow)',
  'API Development',
  'Frontend / UI Engineering',
  'Other',
];

const teamContacts = [
  {
    name: 'Rajkumar Varshney',
    role: 'ML / Backend',
    email: 'raj1511aryan@gmail.com',
    avatar: 'RV',
    color: '#4ECDC4',
  },
  {
    name: 'Yash Garg',
    role: 'Full-Stack',
    email: 'yashgarg7302@gmail.com',
    avatar: 'YG',
    color: '#FF9B3C',
  },
  {
    name: 'Kushagra Singhal',
    role: 'Backend / Systems',
    email: 'kushagrasinghal11@gmail.com',
    avatar: 'KS',
    color: '#7B8FF7',
  },
];

// ─── Validation ────────────────────────────────────────────────────────────────
function validate(fields: FormFields): FormErrors {
  const errors: FormErrors = {};
  if (!fields.name.trim()) errors.name = 'Your name is required.';
  if (!fields.email.trim()) {
    errors.email = 'Email is required.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
    errors.email = 'Please enter a valid email address.';
  }
  if (!fields.projectType) errors.projectType = 'Please select a project type.';
  if (!fields.message.trim()) {
    errors.message = 'Please describe your project.';
  } else if (fields.message.trim().length < 20) {
    errors.message = 'Please add a bit more detail (at least 20 characters).';
  }
  return errors;
}

// ─── Input Component ──────────────────────────────────────────────────────────
function FormInput({
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-sm font-medium mb-2"
        style={{ color: 'var(--ghost-white)', fontFamily: 'var(--font-body)' }}
      >
        {label}
      </label>
      {children}
      {error && (
        <motion.p
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-1.5 text-xs"
          style={{ color: '#FF6B6B', fontFamily: 'var(--font-mono)' }}
          role="alert"
          id={`${id}-error`}
        >
          {error}
        </motion.p>
      )}
    </div>
  );
}

// ─── Contact Section ──────────────────────────────────────────────────────────
export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const prefersReducedMotion = useReducedMotion();
  const ease = [0.16, 1, 0.3, 1] as const;

  const [fields, setFields] = useState<FormFields>({
    name: '',
    email: '',
    projectType: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<FormStatus>('idle');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFields((prev) => ({ ...prev, [name]: value }));
    // Clear error on change
    if (errors[name as keyof FormFields]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate(fields);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setStatus('submitting');

    // TODO: Wire to Formspree or EmailJS for real form submission
    // Example (Formspree): 
    //   await fetch('https://formspree.io/f/YOUR_FORM_ID', { method: 'POST', body: JSON.stringify(fields), headers: {'Content-Type': 'application/json'} })
    // Example (EmailJS):
    //   await emailjs.sendForm('SERVICE_ID', 'TEMPLATE_ID', e.target, 'PUBLIC_KEY')

    // Simulated success for UI demonstration
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setStatus('success');
  };

  const dur = prefersReducedMotion ? 0 : 0.6;
  const delay = prefersReducedMotion ? 0 : 0.1;

  return (
    <section id="contact" ref={ref} className="section" aria-labelledby="contact-heading">
      <div className="container">
        <motion.h2
          id="contact-heading"
          className="text-3xl sm:text-4xl font-bold mb-4"
          style={{ fontFamily: 'var(--font-display)', color: 'var(--ghost-white)', lineHeight: 1.25, overflow: 'visible' }}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: dur, delay, ease }}
        >
          Let&apos;s build something real
        </motion.h2>
        <motion.p
          className="text-base mb-12 max-w-xl"
          style={{ color: 'var(--muted)' }}
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: dur, delay: delay * 2, ease }}
        >
          Tell us what you&apos;re building. We&apos;ll get back to you within 24 hours with a scoped proposal.
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Form */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: dur, delay: delay * 2, ease }}
          >
            {status === 'success' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="rounded-2xl p-10 text-center"
                style={{ background: 'rgba(78,205,196,0.06)', border: '1px solid rgba(78,205,196,0.3)' }}
              >
                <div className="text-4xl mb-4" aria-hidden="true">✅</div>
                <h3
                  className="text-xl font-bold mb-2"
                  style={{ fontFamily: 'var(--font-display)', color: 'var(--ghost-white)' }}
                >
                  Message received!
                </h3>
                <p className="text-sm" style={{ color: 'var(--muted)' }}>
                  We&apos;ll review your project brief and reply within 24 hours.
                </p>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                aria-label="Contact form"
                className="rounded-2xl p-6 sm:p-8 space-y-6"
                style={{ background: 'var(--structural-dark)', border: '1px solid var(--blueprint)' }}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <FormInput id="contact-name" label="Your Name" error={errors.name}>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      value={fields.name}
                      onChange={handleChange}
                      className={`form-input ${errors.name ? 'error' : ''}`}
                      placeholder="Alex Johnson"
                      autoComplete="name"
                      aria-describedby={errors.name ? 'contact-name-error' : undefined}
                    />
                  </FormInput>

                  <FormInput id="contact-email" label="Email Address" error={errors.email}>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      value={fields.email}
                      onChange={handleChange}
                      className={`form-input ${errors.email ? 'error' : ''}`}
                      placeholder="alex@company.com"
                      autoComplete="email"
                      aria-describedby={errors.email ? 'contact-email-error' : undefined}
                    />
                  </FormInput>
                </div>

                <FormInput id="contact-project-type" label="Project Type" error={errors.projectType}>
                  <select
                    id="contact-project-type"
                    name="projectType"
                    value={fields.projectType}
                    onChange={handleChange}
                    className={`form-input ${errors.projectType ? 'error' : ''}`}
                    aria-describedby={errors.projectType ? 'contact-project-type-error' : undefined}
                    style={{ cursor: 'pointer' }}
                  >
                    <option value="">Select a project type...</option>
                    {projectTypes.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </FormInput>

                <FormInput id="contact-message" label="Tell Us About Your Project" error={errors.message}>
                  <textarea
                    id="contact-message"
                    name="message"
                    value={fields.message}
                    onChange={handleChange}
                    rows={5}
                    className={`form-input resize-none ${errors.message ? 'error' : ''}`}
                    placeholder="Describe what you're building, your timeline, and any technical requirements..."
                    aria-describedby={errors.message ? 'contact-message-error' : undefined}
                  />
                </FormInput>

                <button
                  type="submit"
                  id="contact-submit-btn"
                  className="btn-primary w-full justify-center"
                  disabled={status === 'submitting'}
                  aria-busy={status === 'submitting'}
                >
                  {status === 'submitting' ? (
                    <>
                      <motion.div
                        className="w-4 h-4 rounded-full border-2 border-current border-t-transparent"
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 0.7, ease: 'linear' }}
                        aria-hidden="true"
                      />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Brief
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                        <path d="M2 8h12M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>

          {/* Direct contacts */}
          <motion.div
            className="lg:col-span-2 space-y-6"
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: dur, delay: delay * 3, ease }}
          >
            <h3
              className="text-base font-semibold"
              style={{ color: 'var(--ghost-white)', fontFamily: 'var(--font-display)' }}
            >
              Or reach us directly
            </h3>

            {teamContacts.map((contact) => (
              <a
                key={contact.email}
                href={`mailto:${contact.email}`}
                className="flex items-center gap-4 p-4 rounded-xl group transition-all duration-200"
                style={{
                  background: 'var(--structural-dark)',
                  border: '1px solid var(--blueprint)',
                  textDecoration: 'none',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = contact.color;
                  (e.currentTarget as HTMLElement).style.boxShadow = `0 0 20px ${contact.color}15`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'var(--blueprint)';
                  (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                }}
                aria-label={`Email ${contact.name}: ${contact.email}`}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center text-sm font-bold flex-shrink-0"
                  style={{
                    background: `${contact.color}15`,
                    border: `1px solid ${contact.color}35`,
                    color: contact.color,
                    fontFamily: 'var(--font-display)',
                  }}
                  aria-hidden="true"
                >
                  {contact.avatar}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold" style={{ color: 'var(--ghost-white)', fontFamily: 'var(--font-display)' }}>
                    {contact.name}
                  </p>
                  <p className="text-xs mb-0.5" style={{ color: contact.color, fontFamily: 'var(--font-mono)' }}>
                    {contact.role}
                  </p>
                  <p className="text-xs truncate" style={{ color: 'var(--muted)', fontFamily: 'var(--font-mono)' }}>
                    {contact.email}
                  </p>
                </div>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="flex-shrink-0 transition-transform group-hover:translate-x-1"
                  style={{ color: 'var(--muted)' }}
                  aria-hidden="true"
                >
                  <path d="M2 8h12M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            ))}

            {/* Social links */}
            <div
              className="pt-6"
              style={{ borderTop: '1px solid rgba(42,63,95,0.4)' }}
            >
              <p className="text-xs mb-4 animate-pulse-glow inline-block px-2 py-0.5 rounded border border-[rgba(78,205,196,0.2)] bg-[rgba(78,205,196,0.05)]" style={{ color: 'var(--parsed-teal)', fontFamily: 'var(--font-mono)' }}>
                Also find us on
              </p>
              <div className="flex gap-3">
                {/* GitHub */}
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200"
                  style={{
                    background: 'rgba(28,35,51,0.8)',
                    border: '1px solid var(--blueprint)',
                    color: 'var(--muted)',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.8rem',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = 'var(--ghost-white)';
                    (e.currentTarget as HTMLElement).style.color = 'var(--ghost-white)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = 'var(--blueprint)';
                    (e.currentTarget as HTMLElement).style.color = 'var(--muted)';
                  }}
                  aria-label="Apex Devworks GitHub (TODO: replace with real URL)"
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
                  </svg>
                  GitHub
                </a>
                {/* LinkedIn */}
                <a
                  href="https://linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200"
                  style={{
                    background: 'rgba(28,35,51,0.8)',
                    border: '1px solid var(--blueprint)',
                    color: 'var(--muted)',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.8rem',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = '#0A66C2';
                    (e.currentTarget as HTMLElement).style.color = '#0A66C2';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = 'var(--blueprint)';
                    (e.currentTarget as HTMLElement).style.color = 'var(--muted)';
                  }}
                  aria-label="Apex Devworks LinkedIn (TODO: replace with real URL)"
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                  </svg>
                  LinkedIn
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
