import React, { useState } from 'react';
import { motion, useReducedMotion, type Variants } from 'motion/react';
import {
  Mail,
  MapPin,
  Send,
  Github,
  Linkedin,
  ExternalLink,
  Sparkles,
  AlertCircle,
  Info,
  Check,
  Copy
} from 'lucide-react';
import { Container } from '../components/ui/Container';
import { SectionHeading } from '../components/ui/SectionHeading';
import { GlassCard } from '../components/ui/GlassCard';
import { Badge } from '../components/ui/Badge';
import { SocialIconButton } from '../components/ui/SocialIconButton';
import { developerProfile } from '../data/developer';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export const ContactSection: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  // Form state
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<keyof FormData, boolean>>({
    name: false,
    email: false,
    subject: false,
    message: false,
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Email validation regex (standard RFC-compliant subset)
  const isValidEmail = (emailStr: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailStr.trim());
  };

  const validateField = (field: keyof FormData, value: string): string | undefined => {
    switch (field) {
      case 'name':
        if (!value.trim()) return 'Your name is required.';
        if (value.trim().length < 2) return 'Name must be at least 2 characters.';
        return undefined;
      case 'email':
        if (!value.trim()) return 'Email address is required.';
        if (!isValidEmail(value)) return 'Please enter a valid email address.';
        return undefined;
      case 'subject':
        if (!value.trim()) return 'Subject is required.';
        if (value.trim().length < 3) return 'Subject must be at least 3 characters.';
        return undefined;
      case 'message':
        if (!value.trim()) return 'Message cannot be empty.';
        if (value.trim().length < 10) return 'Please provide at least 10 characters.';
        return undefined;
      default:
        return undefined;
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const fieldName = name as keyof FormData;

    setFormData((prev) => ({ ...prev, [fieldName]: value }));

    if (touched[fieldName]) {
      const error = validateField(fieldName, value);
      setErrors((prev) => ({ ...prev, [fieldName]: error }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const fieldName = name as keyof FormData;

    setTouched((prev) => ({ ...prev, [fieldName]: true }));
    const error = validateField(fieldName, value);
    setErrors((prev) => ({ ...prev, [fieldName]: error }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setTouched({
      name: true,
      email: true,
      subject: true,
      message: true,
    });

    const newErrors: FormErrors = {
      name: validateField('name', formData.name),
      email: validateField('email', formData.email),
      subject: validateField('subject', formData.subject),
      message: validateField('message', formData.message),
    };

    setErrors(newErrors);

    const hasErrors = Object.values(newErrors).some(Boolean);
    if (hasErrors) {
      setFormSubmitted(false);
      return;
    }

    // Honest handling: no fake success and no fake background server call.
    setFormSubmitted(true);
  };

  const copyEmailToClipboard = () => {
    if (developerProfile.socials?.email) {
      navigator.clipboard?.writeText(developerProfile.socials.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    }
  };

  const mailtoUrl = developerProfile.socials?.email
    ? `mailto:${developerProfile.socials.email}?subject=${encodeURIComponent(
        formData.subject || 'Portfolio Inquiry'
      )}&body=${encodeURIComponent(
        `From: ${formData.name || 'Anonymous'} (${formData.email || 'No email provided'})\n\n${
          formData.message
        }`
      )}`
    : '#';

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.08,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.2 : 0.45,
        ease: 'easeOut' as const,
      },
    },
  };

  return (
    <section id="contact" className="py-14 sm:py-20 lg:py-24 border-t border-white/[0.06] relative scroll-mt-20 sm:scroll-mt-24 overflow-hidden">
      {/* Ambient background lighting */}
      <div
        className="absolute top-1/4 right-1/4 w-[450px] max-w-full h-[450px] bg-emerald-500/[0.03] rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/4 left-1/4 w-[400px] max-w-full h-[400px] bg-cyan-500/[0.02] rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />

      <Container size="wide" className="relative z-10">
        {/* Section Header */}
        <SectionHeading
          stepNumber="07"
          badge="Get In Touch"
          title="Let's Connect & Collaborate"
          subtitle="Interested in hiring, collaboration, or full-stack web development? Feel free to reach out directly through email, LinkedIn, or GitHub."
        />

        {/* Responsive Grid: Two-column on Desktop/Tablet, Single-column on Mobile */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 mt-8 sm:mt-14 items-start"
        >
          {/* Left Column: Direct Contact Details & Verified Socials */}
          <motion.div variants={itemVariants} className="lg:col-span-5 space-y-6">
            <GlassCard
              variant="default"
              hoverGlow
              className="p-4 sm:p-6 lg:p-8 border-white/[0.08] hover:border-emerald-500/35 transition-all duration-300"
            >
              {/* Availability Badge & Heading */}
              <div className="flex items-center gap-2 mb-3 flex-wrap">
                <Badge variant="status" size="sm" pulseDot>
                  Available
                </Badge>
                <span className="text-xs font-mono text-emerald-400 font-semibold">
                  Open for Web Development Opportunities
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-100 mb-2.5">
                Start a Conversation
              </h3>

              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-normal mb-6">
                I am actively seeking web development roles, internships, and collaborative opportunities where I can apply modern MERN stack expertise and contribute high-quality code.
              </p>

              {/* Contact Detail Cards */}
              <div className="space-y-3 pt-6 border-t border-white/[0.06]">
                {/* 1. Email Address Card */}
                {developerProfile.socials?.email ? (
                  <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-emerald-500/30 transition-all flex items-center justify-between gap-3 group/mail">
                    <a
                      href={`mailto:${developerProfile.socials.email}`}
                      className="flex items-center gap-3.5 min-w-0 flex-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded-lg p-0.5"
                      aria-label={`Send email to ${developerProfile.socials.email}`}
                    >
                      <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-400 group-hover/mail:scale-105 transition-transform shrink-0">
                        <Mail className="w-4 h-4" aria-hidden="true" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider block">
                          Direct Email
                        </span>
                        <span className="text-xs sm:text-sm font-mono text-neutral-200 group-hover/mail:text-emerald-300 transition-colors truncate block">
                          {developerProfile.socials.email}
                        </span>
                      </div>
                    </a>

                    <button
                      type="button"
                      onClick={copyEmailToClipboard}
                      className="p-2 rounded-lg text-neutral-400 hover:text-emerald-400 hover:bg-white/[0.05] transition-colors shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
                      title="Copy email to clipboard"
                      aria-label="Copy email address"
                    >
                      {copiedEmail ? (
                        <Check className="w-4 h-4 text-emerald-400" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                ) : (
                  <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                    <div className="p-2.5 rounded-lg bg-white/[0.04] text-neutral-400 shrink-0">
                      <Mail className="w-4 h-4" aria-hidden="true" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider block">
                        Email
                      </span>
                      <span className="text-xs sm:text-sm font-mono text-neutral-400">
                        Add your email in src/data/developer.ts
                      </span>
                    </div>
                  </div>
                )}

                {/* 2. LinkedIn Card */}
                {developerProfile.socials?.linkedin && (
                  <a
                    href={developerProfile.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3.5 p-3.5 rounded-xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/[0.06] hover:border-emerald-500/30 transition-all group/li focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
                    aria-label="Visit Ashik Ahammed's LinkedIn profile (opens in new tab)"
                  >
                    <div className="p-2.5 rounded-lg bg-cyan-500/10 text-cyan-400 group-hover/li:scale-105 transition-transform shrink-0">
                      <Linkedin className="w-4 h-4" aria-hidden="true" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider block">
                        LinkedIn Profile
                      </span>
                      <span className="text-xs sm:text-sm font-mono text-neutral-200 group-hover/li:text-cyan-300 transition-colors truncate block">
                        linkedin.com/in/{developerProfile.socials.linkedinUsername || 'ashik24bd'}
                      </span>
                    </div>
                    <ExternalLink className="w-4 h-4 text-neutral-500 group-hover/li:text-cyan-400 transition-colors shrink-0" />
                  </a>
                )}

                {/* 3. GitHub Card */}
                {developerProfile.socials?.github && (
                  <a
                    href={developerProfile.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3.5 p-3.5 rounded-xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/[0.06] hover:border-emerald-500/30 transition-all group/gh focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
                    aria-label="Visit Ashik Ahammed's GitHub profile (opens in new tab)"
                  >
                    <div className="p-2.5 rounded-lg bg-white/[0.06] text-neutral-100 group-hover/gh:scale-105 transition-transform shrink-0">
                      <Github className="w-4 h-4" aria-hidden="true" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider block">
                        GitHub Profile
                      </span>
                      <span className="text-xs sm:text-sm font-mono text-neutral-200 group-hover/gh:text-emerald-300 transition-colors truncate block">
                        github.com/{developerProfile.socials.githubUsername || 'ashikmahmud84'}
                      </span>
                    </div>
                    <ExternalLink className="w-4 h-4 text-neutral-500 group-hover/gh:text-emerald-400 transition-colors shrink-0" />
                  </a>
                )}

                {/* 4. Location */}
                {developerProfile.location && (
                  <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                    <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-400 shrink-0">
                      <MapPin className="w-4 h-4" aria-hidden="true" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider block">
                        Location
                      </span>
                      <span className="text-xs sm:text-sm font-medium text-neutral-200 truncate block">
                        {developerProfile.location}
                      </span>
                    </div>
                  </div>
                )}
              </div>

              {/* Social Icon Buttons Row */}
              <div className="pt-6 mt-6 border-t border-white/[0.06]">
                <p className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 mb-3 font-semibold">
                  Quick Social Links:
                </p>

                <div className="flex items-center gap-3">
                  <SocialIconButton
                    href={developerProfile.socials.github}
                    icon={<Github className="w-4 h-4" aria-hidden="true" />}
                    label="Ashik Ahammed's GitHub Profile (@ashikmahmud84)"
                  />
                  <SocialIconButton
                    href={developerProfile.socials.linkedin}
                    icon={<Linkedin className="w-4 h-4" aria-hidden="true" />}
                    label="Ashik Ahammed's LinkedIn Profile (ashik24bd)"
                  />
                  <SocialIconButton
                    href={`mailto:${developerProfile.socials.email}`}
                    icon={<Mail className="w-4 h-4" aria-hidden="true" />}
                    label={`Send Email to ${developerProfile.socials.email}`}
                  />
                </div>
              </div>
            </GlassCard>
          </motion.div>

          {/* Right Column: Accessible Validated Contact Form */}
          <motion.div variants={itemVariants} className="lg:col-span-7">
            <GlassCard
              variant="default"
              hoverGlow
              className="p-4 sm:p-6 lg:p-8 border-white/[0.08] hover:border-emerald-500/35 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-5 pb-4 border-b border-white/[0.06]">
                <div className="flex items-center gap-2">
                  <span className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 shrink-0">
                    <Sparkles className="w-4 h-4" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-neutral-100">
                      Send a Message
                    </h3>
                    <p className="text-xs text-neutral-400">
                      Submit details below or reach out directly.
                    </p>
                  </div>
                </div>

                <span className="text-[10px] font-mono text-neutral-500 hidden sm:inline-block">
                  * All fields required
                </span>
              </div>

              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                {/* Name Field */}
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-xs font-mono text-neutral-300 mb-1.5 font-medium"
                  >
                    Your Name <span className="text-emerald-400" aria-hidden="true">*</span>
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="e.g. John Doe"
                    aria-required="true"
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? 'contact-name-error' : undefined}
                    className={`w-full px-4 py-2.5 rounded-lg bg-[#0a0d14] text-xs sm:text-sm text-neutral-100 placeholder:text-neutral-500 border transition-all focus:outline-none focus:ring-1 ${
                      errors.name && touched.name
                        ? 'border-rose-500/70 focus:border-rose-500 focus:ring-rose-500'
                        : 'border-white/10 hover:border-white/20 focus:border-emerald-500 focus:ring-emerald-500'
                    }`}
                  />
                  {errors.name && touched.name && (
                    <p
                      id="contact-name-error"
                      className="mt-1.5 text-[11px] text-rose-400 flex items-center gap-1 font-mono"
                      role="alert"
                    >
                      <AlertCircle className="w-3 h-3 shrink-0" aria-hidden="true" />
                      <span>{errors.name}</span>
                    </p>
                  )}
                </div>

                {/* Email Field */}
                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-xs font-mono text-neutral-300 mb-1.5 font-medium"
                  >
                    Email Address <span className="text-emerald-400" aria-hidden="true">*</span>
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="you@example.com"
                    aria-required="true"
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? 'contact-email-error' : undefined}
                    className={`w-full px-4 py-2.5 rounded-lg bg-[#0a0d14] text-xs sm:text-sm text-neutral-100 placeholder:text-neutral-500 border transition-all focus:outline-none focus:ring-1 ${
                      errors.email && touched.email
                        ? 'border-rose-500/70 focus:border-rose-500 focus:ring-rose-500'
                        : 'border-white/10 hover:border-white/20 focus:border-emerald-500 focus:ring-emerald-500'
                    }`}
                  />
                  {errors.email && touched.email && (
                    <p
                      id="contact-email-error"
                      className="mt-1.5 text-[11px] text-rose-400 flex items-center gap-1 font-mono"
                      role="alert"
                    >
                      <AlertCircle className="w-3 h-3 shrink-0" aria-hidden="true" />
                      <span>{errors.email}</span>
                    </p>
                  )}
                </div>

                {/* Subject Field */}
                <div>
                  <label
                    htmlFor="contact-subject"
                    className="block text-xs font-mono text-neutral-300 mb-1.5 font-medium"
                  >
                    Subject <span className="text-emerald-400" aria-hidden="true">*</span>
                  </label>
                  <input
                    type="text"
                    id="contact-subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Project Inquiry / Job Opportunity"
                    aria-required="true"
                    aria-invalid={Boolean(errors.subject)}
                    aria-describedby={errors.subject ? 'contact-subject-error' : undefined}
                    className={`w-full px-4 py-2.5 rounded-lg bg-[#0a0d14] text-xs sm:text-sm text-neutral-100 placeholder:text-neutral-500 border transition-all focus:outline-none focus:ring-1 ${
                      errors.subject && touched.subject
                        ? 'border-rose-500/70 focus:border-rose-500 focus:ring-rose-500'
                        : 'border-white/10 hover:border-white/20 focus:border-emerald-500 focus:ring-emerald-500'
                    }`}
                  />
                  {errors.subject && touched.subject && (
                    <p
                      id="contact-subject-error"
                      className="mt-1.5 text-[11px] text-rose-400 flex items-center gap-1 font-mono"
                      role="alert"
                    >
                      <AlertCircle className="w-3 h-3 shrink-0" aria-hidden="true" />
                      <span>{errors.subject}</span>
                    </p>
                  )}
                </div>

                {/* Message Field */}
                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-mono text-neutral-300 mb-1.5 font-medium"
                  >
                    Message <span className="text-emerald-400" aria-hidden="true">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Hello Ashik, I would like to discuss..."
                    aria-required="true"
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={errors.message ? 'contact-message-error' : undefined}
                    className={`w-full px-4 py-2.5 rounded-lg bg-[#0a0d14] text-xs sm:text-sm text-neutral-100 placeholder:text-neutral-500 border transition-all focus:outline-none focus:ring-1 resize-y min-h-[110px] ${
                      errors.message && touched.message
                        ? 'border-rose-500/70 focus:border-rose-500 focus:ring-rose-500'
                        : 'border-white/10 hover:border-white/20 focus:border-emerald-500 focus:ring-emerald-500'
                    }`}
                  />
                  {errors.message && touched.message && (
                    <p
                      id="contact-message-error"
                      className="mt-1.5 text-[11px] text-rose-400 flex items-center gap-1 font-mono"
                      role="alert"
                    >
                      <AlertCircle className="w-3 h-3 shrink-0" aria-hidden="true" />
                      <span>{errors.message}</span>
                    </p>
                  )}
                </div>

                {/* Transparent submission notice */}
                {formSubmitted && (
                  <div
                    className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-xs font-mono text-emerald-300 flex items-start gap-3 animate-in fade-in duration-200"
                    role="status"
                  >
                    <Info className="w-4 h-4 shrink-0 text-emerald-400 mt-0.5" aria-hidden="true" />
                    <div className="leading-relaxed">
                      <p className="font-semibold text-white mb-1">
                        Form inputs validated successfully!
                      </p>
                      <p className="text-neutral-300 text-[11.5px] mb-3">
                        This client-side portfolio is ready to connect with email routing. You can instantly dispatch your message via your default email application:
                      </p>
                      <a
                        href={mailtoUrl}
                        className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-emerald-500 text-neutral-950 font-bold hover:bg-emerald-400 transition-colors"
                      >
                        <Mail className="w-3.5 h-3.5" />
                        <span>Launch Pre-Filled Email</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                )}

                {/* Submit Button & Direct Alternative */}
                <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 px-6 py-2.5 min-h-[44px] rounded-lg bg-emerald-500 hover:bg-emerald-400 text-neutral-950 font-semibold text-xs transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_25px_rgba(16,185,129,0.5)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#08090d] active:scale-[0.98] cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>Send Message</span>
                  </button>

                  {developerProfile.socials?.email && (
                    <a
                      href={`mailto:${developerProfile.socials.email}`}
                      className="text-xs font-mono text-neutral-400 hover:text-emerald-400 transition-colors text-center sm:text-right break-all sm:break-normal"
                    >
                      Or write directly to {developerProfile.socials.email} &rarr;
                    </a>
                  )}
                </div>
              </form>
            </GlassCard>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};
