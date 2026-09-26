import React from 'react';
import { motion, useReducedMotion, type Variants } from 'motion/react';
import {
  User,
  MapPin,
  Code2,
  GraduationCap,
  Sparkles,
  Layers,
  Languages,
  CheckCircle2,
  Award,
  BookOpen
} from 'lucide-react';
import { Container } from '../components/ui/Container';
import { SectionHeading } from '../components/ui/SectionHeading';
import { GlassCard } from '../components/ui/GlassCard';
import { Badge } from '../components/ui/Badge';
import { aboutContent } from '../data/about';

export const AboutSection: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  const fadeInVariants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: shouldReduceMotion ? 0.2 : 0.45, ease: 'easeOut' }
    }
  };

  const devInfo = aboutContent.developerInfo;

  return (
    <section id="about" className="py-14 sm:py-20 lg:py-24 border-t border-white/[0.06] relative scroll-mt-20 sm:scroll-mt-24 overflow-hidden">
      {/* Background ambient lighting */}
      <div
        className="absolute top-1/2 left-0 w-[450px] max-w-full h-[450px] bg-emerald-500/[0.03] rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />

      <Container size="wide" className="relative z-10">
        {/* 1. SECTION INTRO */}
        <SectionHeading
          stepNumber="01"
          badge="Background"
          title={aboutContent.sectionTitle}
          subtitle={aboutContent.subtitle}
        />

        {/* 2. TOP ROW: About Narrative & Developer Information Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 mb-8 sm:mb-12 items-start">
          {/* Left Column (7 cols): Main About Narrative */}
          <motion.div
            variants={fadeInVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            className="lg:col-span-7 flex flex-col gap-6"
          >
            <GlassCard variant="default" className="p-4 sm:p-6 lg:p-8">
              <div className="flex items-center gap-2.5 mb-5">
                <span className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 shrink-0">
                  <User className="w-4 h-4" />
                </span>
                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-neutral-100">
                    Full-Stack Web Development
                  </h3>
                  <p className="text-xs text-neutral-400 font-mono">
                    Computer Science &amp; Technology Foundation
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-neutral-300 leading-relaxed font-normal text-pretty">
                {aboutContent.paragraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              {/* Focus Technologies Tags */}
              <div className="mt-6 pt-5 border-t border-white/[0.08]">
                <p className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-3">
                  Core Development Direction
                </p>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {aboutContent.focusTechnologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="accent"
                      size="sm"
                      className="font-mono text-xs py-1 px-2.5"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Status Note */}
              <div className="mt-6 pt-5 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-2.5 text-xs font-mono text-neutral-400">
                <div className="flex items-center gap-2 text-emerald-400">
                  <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                  <span>MERN Stack &amp; REST APIs</span>
                </div>
                <span className="text-neutral-500">Student &amp; Web Developer</span>
              </div>
            </GlassCard>
          </motion.div>

          {/* Right Column (5 cols): Developer Information Card */}
          <motion.div
            variants={fadeInVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            className="lg:col-span-5"
          >
            <GlassCard variant="default" className="p-4 sm:p-6 lg:p-7">
              <div className="flex items-center justify-between pb-4 border-b border-white/[0.08] mb-4 sm:mb-5">
                <div className="flex items-center gap-2">
                  <span className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 shrink-0">
                    <Code2 className="w-4 h-4" />
                  </span>
                  <h3 className="text-sm sm:text-base font-semibold text-neutral-100">
                    Developer Information
                  </h3>
                </div>
                <Badge variant="status" size="sm" pulseDot>
                  {aboutContent.quickInfo.status}
                </Badge>
              </div>

              {/* Verified Information Items */}
              <div className="space-y-3 text-xs sm:text-sm">
                <div className="flex flex-col xs:flex-row xs:items-center justify-between py-2 border-b border-white/[0.05] gap-1 xs:gap-2">
                  <span className="text-neutral-400 font-mono flex items-center gap-2 shrink-0">
                    <User className="w-3.5 h-3.5 text-neutral-500" />
                    Name
                  </span>
                  <span className="font-semibold text-neutral-100 text-left xs:text-right">
                    {devInfo.name}
                  </span>
                </div>

                <div className="flex flex-col xs:flex-row xs:items-center justify-between py-2 border-b border-white/[0.05] gap-1 xs:gap-2">
                  <span className="text-neutral-400 font-mono flex items-center gap-2 shrink-0">
                    <Code2 className="w-3.5 h-3.5 text-neutral-500" />
                    Role
                  </span>
                  <span className="font-mono font-medium text-emerald-400 text-left xs:text-right">
                    {devInfo.role}
                  </span>
                </div>

                <div className="flex flex-col xs:flex-row xs:items-center justify-between py-2 border-b border-white/[0.05] gap-1 xs:gap-2">
                  <span className="text-neutral-400 font-mono flex items-center gap-2 shrink-0">
                    <MapPin className="w-3.5 h-3.5 text-neutral-500" />
                    Location
                  </span>
                  <span className="text-neutral-300 text-left xs:text-right">
                    {devInfo.location}
                  </span>
                </div>

                <div className="flex flex-col xs:flex-row xs:items-start justify-between py-2 border-b border-white/[0.05] gap-1 xs:gap-2">
                  <span className="text-neutral-400 font-mono flex items-center gap-2 shrink-0">
                    <GraduationCap className="w-3.5 h-3.5 text-neutral-500 mt-0.5" />
                    Education
                  </span>
                  <span className="text-neutral-200 text-left xs:text-right font-medium max-w-full xs:max-w-[62%]">
                    {devInfo.education}
                  </span>
                </div>

                <div className="flex flex-col xs:flex-row xs:items-center justify-between py-2 border-b border-white/[0.05] gap-1 xs:gap-2">
                  <span className="text-neutral-400 font-mono flex items-center gap-2 shrink-0">
                    <Sparkles className="w-3.5 h-3.5 text-neutral-500" />
                    Current Status
                  </span>
                  <span className="text-emerald-300 font-mono text-left xs:text-right">
                    {devInfo.currentStatus}
                  </span>
                </div>

                <div className="flex flex-col xs:flex-row xs:items-center justify-between pt-1 gap-1 xs:gap-2">
                  <span className="text-neutral-400 font-mono flex items-center gap-2 shrink-0">
                    <Languages className="w-3.5 h-3.5 text-neutral-500" />
                    Languages
                  </span>
                  <span className="text-neutral-300 text-left xs:text-right">
                    {devInfo.languages}
                  </span>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </div>

        {/* 3. BOTTOM ROW: Education & Developer Journey Timeline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          {/* Left Column (5 cols): Formal Education */}
          <motion.div
            variants={fadeInVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            <GlassCard variant="default" className="p-4 sm:p-6 lg:p-7">
              <div className="flex items-center gap-2.5 mb-5 pb-3 border-b border-white/[0.08]">
                <span className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 shrink-0">
                  <GraduationCap className="w-4 h-4" />
                </span>
                <div>
                  <h3 className="text-base font-semibold text-neutral-100">
                    Formal Education
                  </h3>
                  <p className="text-xs text-neutral-400 font-mono">
                    Academic Background &amp; Credentials
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                {/* 1. Diploma in Engineering */}
                <div className="relative pl-5 border-l-2 border-emerald-500/40 space-y-2">
                  <div className="absolute -left-[7px] top-1 w-3 h-3 rounded-full bg-[#08090d] border-2 border-emerald-400 shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
                  <div className="flex flex-wrap items-center justify-between gap-1">
                    <h4 className="text-sm sm:text-base font-semibold text-neutral-100 flex items-center gap-1.5">
                      <BookOpen className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>Diploma in Engineering</span>
                    </h4>
                    <span className="text-xs font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      7th Semester
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm font-medium text-emerald-300">
                    Department: Computer Science &amp; Technology
                  </p>
                  <p className="text-xs text-neutral-300">
                    Institute: Mymensingh Polytechnic Institute
                  </p>
                  <div className="flex flex-wrap items-center gap-1.5 pt-1 text-xs font-mono text-neutral-400">
                    <span className="px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.08]">
                      Current: 7th Semester
                    </span>
                    <span className="px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.08] text-neutral-300">
                      Graduation: 2027
                    </span>
                  </div>
                </div>

                {/* 2. Secondary School Certificate (SSC) */}
                <div className="relative pl-5 border-l-2 border-white/10 space-y-2">
                  <div className="absolute -left-[7px] top-1 w-3 h-3 rounded-full bg-[#08090d] border-2 border-neutral-500" />
                  <div className="flex flex-wrap items-center justify-between gap-1">
                    <h4 className="text-sm sm:text-base font-semibold text-neutral-200 flex items-center gap-1.5">
                      <Award className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>SSC (Secondary Certificate)</span>
                    </h4>
                    <span className="text-xs font-mono px-2 py-0.5 rounded bg-white/[0.05] text-neutral-300 border border-white/10">
                      Passing: 2022
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-neutral-300">
                    Board: Mymensingh Board
                  </p>
                  <div className="flex items-center gap-2 pt-0.5 text-xs font-mono">
                    <span className="px-2.5 py-0.5 rounded bg-emerald-500/15 text-emerald-300 font-semibold border border-emerald-500/30">
                      GPA: 5.00
                    </span>
                  </div>
                </div>
              </div>
            </GlassCard>
          </motion.div>

          {/* Right Column (7 cols): Developer Journey Timeline */}
          <motion.div
            variants={fadeInVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            className="lg:col-span-7 flex flex-col gap-6"
          >
            <GlassCard variant="default" className="p-4 sm:p-6 lg:p-7">
              <div className="flex items-center gap-2.5 mb-5 pb-3 border-b border-white/[0.08]">
                <span className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 shrink-0">
                  <Layers className="w-4 h-4" />
                </span>
                <div>
                  <h3 className="text-base font-semibold text-neutral-100">
                    Developer Journey
                  </h3>
                  <p className="text-xs text-neutral-400 font-mono">
                    Logical Progression &amp; Technical Growth
                  </p>
                </div>
              </div>

              {/* Factual Milestones Timeline */}
              <div className="space-y-6">
                {aboutContent.journey.map((item, idx) => {
                  const isCurrent = item.isCurrent;
                  return (
                    <div
                      key={idx}
                      className={`relative pl-5 border-l-2 ${
                        isCurrent
                          ? 'border-emerald-500/60'
                          : 'border-white/10'
                      } space-y-1.5`}
                    >
                      {/* Timeline dot */}
                      <div
                        className={`absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-[#08090d] border-2 ${
                          isCurrent
                            ? 'border-emerald-400 bg-emerald-400/30 shadow-[0_0_8px_rgba(16,185,129,0.6)]'
                            : 'border-neutral-500'
                        }`}
                      />

                      {/* Header with optional badge */}
                      <div className="flex flex-wrap items-center justify-between gap-1.5">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-mono text-emerald-400/80 font-medium">
                            0{idx + 1}.
                          </span>
                          <h4 className="text-sm sm:text-base font-semibold text-neutral-100">
                            {item.title}
                          </h4>
                        </div>
                        {isCurrent && (
                          <span className="px-2 py-0.5 rounded text-[10px] font-mono font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/25 animate-pulse">
                            Current Focus
                          </span>
                        )}
                      </div>

                      <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                        {item.description}
                      </p>

                      {/* Technologies tags if present */}
                      {item.technologies && item.technologies.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {item.technologies.map((tech) => (
                            <Badge
                              key={tech}
                              variant={isCurrent ? 'accent' : 'default'}
                              size="sm"
                              className="text-[11px] py-0.5 px-2"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
