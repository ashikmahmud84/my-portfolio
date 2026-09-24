import React, { useState, useEffect } from 'react';
import { motion, useReducedMotion, type Variants } from 'motion/react';
import { ArrowRight, Download, Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { Container } from '../components/ui/Container';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { SocialIconButton } from '../components/ui/SocialIconButton';
import { HeroVisual } from '../components/hero/HeroVisual';
import { developerProfile } from '../data/developer';

const ROTATING_TITLES = developerProfile.rotatingTitles || [
  'MERN Stack Developer',
  'Full Stack Web Developer',
  'React Developer',
  'Next.js Developer'
];

export const HeroSection: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  // Typewriter rotating title state
  const [titleIndex, setTitleIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (shouldReduceMotion) return;

    const currentTitle = ROTATING_TITLES[titleIndex];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (subIndex < currentTitle.length) {
          setSubIndex((prev) => prev + 1);
        } else {
          // Pause at full word before backspacing
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        if (subIndex > 0) {
          setSubIndex((prev) => prev - 1);
        } else {
          // Finished deleting, move to next title
          setIsDeleting(false);
          setTitleIndex((prev) => (prev + 1) % ROTATING_TITLES.length);
        }
      }
    }, isDeleting ? 35 : 75);

    return () => clearTimeout(timer);
  }, [subIndex, isDeleting, titleIndex, shouldReduceMotion]);

  const displayedTitle = shouldReduceMotion
    ? ROTATING_TITLES[0]
    : ROTATING_TITLES[titleIndex].substring(0, subIndex);

  const leftColVariants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.2 : 0.45,
        ease: 'easeOut',
        staggerChildren: shouldReduceMotion ? 0 : 0.08,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: shouldReduceMotion ? 0.2 : 0.35, ease: 'easeOut' },
    },
  };

  const rightColVariants: Variants = {
    hidden: { opacity: 0, scale: shouldReduceMotion ? 1 : 0.97 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: shouldReduceMotion ? 0.2 : 0.5,
        delay: shouldReduceMotion ? 0 : 0.12,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section
      id="home"
      aria-label="Introduction"
      className="relative pt-24 pb-12 sm:pt-28 sm:pb-16 lg:pt-32 lg:pb-20 overflow-hidden scroll-mt-24"
    >
      {/* Target anchor for backwards-compatibility with #hero links */}
      <div id="hero" className="sr-only" aria-hidden="true" />

      {/* Subtle ambient lighting / radial backdrop glow */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[450px] bg-emerald-500/[0.05] rounded-full blur-[130px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-teal-500/[0.03] rounded-full blur-[110px] pointer-events-none"
        aria-hidden="true"
      />

      <Container size="wide" className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* LEFT SIDE: Personal Branding, Headline, Rotating Title, Bio, and CTAs */}
          <motion.div
            variants={leftColVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Availability Badge & Location */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-2.5 mb-4">
              <Badge variant="status" size="sm" pulseDot>
                {developerProfile.status}
              </Badge>
              <div className="inline-flex items-center gap-1.5 text-xs text-neutral-400 font-mono px-2.5 py-0.5 rounded-full bg-white/[0.03] border border-white/[0.06]">
                <MapPin className="w-3.5 h-3.5 text-emerald-400" aria-hidden="true" />
                <span>{developerProfile.location}</span>
              </div>
            </motion.div>

            {/* Introduction & Developer Name */}
            <motion.div variants={itemVariants} className="mb-2">
              <p className="text-xs sm:text-sm font-mono text-emerald-400 font-medium tracking-wider uppercase mb-1.5">
                Hi, I&apos;m
              </p>
              <h1 className="text-3xl sm:text-4xl lg:text-[3.25rem] font-extrabold tracking-tight text-neutral-100 leading-[1.12]">
                {developerProfile.name}
              </h1>
            </motion.div>

            {/* Rotating Title / Specialization */}
            <motion.div
              variants={itemVariants}
              className="flex items-center flex-wrap gap-2 text-lg sm:text-xl lg:text-2xl font-semibold text-neutral-200 min-h-[36px] sm:min-h-[40px] mb-5"
            >
              <span className="text-neutral-300">
                {developerProfile.role}
              </span>
              <span className="text-neutral-600 font-mono" aria-hidden="true">|</span>
              <div className="inline-flex items-center">
                <span className="font-mono text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
                  {displayedTitle}
                </span>
                {!shouldReduceMotion && (
                  <span
                    className="inline-block w-[2.5px] h-5 sm:h-6 bg-emerald-400 ml-1 animate-pulse"
                    aria-hidden="true"
                  />
                )}
              </div>
            </motion.div>

            {/* Professional Bio Description */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-neutral-300 leading-relaxed max-w-2xl mb-7 font-normal"
            >
              {developerProfile.description}
            </motion.p>

            {/* CTA Buttons: View Projects, Contact, Download Resume */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto mb-7"
            >
              {/* Primary CTA: View My Projects */}
              <Button
                href="#projects"
                variant="primary"
                size="md"
                className="w-full sm:w-auto justify-center"
                rightIcon={<ArrowRight className="w-4 h-4" aria-hidden="true" />}
              >
                View My Projects
              </Button>

              {/* Secondary CTA: Contact Me */}
              <Button
                href="#contact"
                variant="outline"
                size="md"
                className="w-full sm:w-auto justify-center"
                rightIcon={<Mail className="w-4 h-4 text-emerald-400" aria-hidden="true" />}
              >
                Contact Me
              </Button>

              {/* Tertiary CTA: Download Resume */}
              <Button
                href={developerProfile.resumeUrl || '/resume.pdf'}
                download="Ashik_Ahammed_Resume.pdf"
                variant="secondary"
                size="md"
                className="w-full sm:w-auto justify-center"
                leftIcon={<Download className="w-4 h-4 text-emerald-400" aria-hidden="true" />}
                aria-label="Download Ashik Ahammed's Resume"
              >
                Download Resume
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="flex items-center gap-2.5 pt-1">
              <span className="text-xs font-mono text-neutral-400 tracking-wide mr-1">
                Connect:
              </span>
              <SocialIconButton
                href={developerProfile.socials.github}
                icon={<Github className="w-4 h-4" aria-hidden="true" />}
                label="GitHub Profile (ashikmahmud84)"
              />
              <SocialIconButton
                href={developerProfile.socials.linkedin}
                icon={<Linkedin className="w-4 h-4" aria-hidden="true" />}
                label="LinkedIn Profile (ashik24bd)"
              />
              <SocialIconButton
                href={`mailto:${developerProfile.socials.email}`}
                icon={<Mail className="w-4 h-4" aria-hidden="true" />}
                label="Direct Email"
              />
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE: Profile Picture & Interactive Showcase Card */}
          <motion.div
            variants={rightColVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-5 w-full mt-4 lg:mt-0"
          >
            <HeroVisual />
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
