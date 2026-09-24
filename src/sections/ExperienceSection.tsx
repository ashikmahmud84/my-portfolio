import React from 'react';
import { motion, useReducedMotion, type Variants } from 'motion/react';
import {
  Code,
  Monitor,
  Layers,
  Briefcase,
  Rocket,
  Target,
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import { Container } from '../components/ui/Container';
import { SectionHeading } from '../components/ui/SectionHeading';
import { GlassCard } from '../components/ui/GlassCard';
import { Badge } from '../components/ui/Badge';
import { careerMilestones, journeyPhilosophy, Milestone } from '../data/experience';

export const ExperienceSection: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  const getMilestoneIcon = (icon: Milestone['icon']) => {
    switch (icon) {
      case 'code':
        return <Code className="w-4 h-4 text-emerald-400" aria-hidden="true" />;
      case 'monitor':
        return <Monitor className="w-4 h-4 text-cyan-400" aria-hidden="true" />;
      case 'layers':
        return <Layers className="w-4 h-4 text-teal-400" aria-hidden="true" />;
      case 'briefcase':
        return <Briefcase className="w-4 h-4 text-emerald-400" aria-hidden="true" />;
      case 'rocket':
        return <Rocket className="w-4 h-4 text-cyan-400" aria-hidden="true" />;
      case 'target':
        return <Target className="w-4 h-4 text-emerald-400" aria-hidden="true" />;
      default:
        return <Sparkles className="w-4 h-4 text-emerald-400" aria-hidden="true" />;
    }
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.12,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
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
    <section id="experience" className="py-20 sm:py-24 border-t border-white/[0.06] relative scroll-mt-20 sm:scroll-mt-24">
      {/* Ambient background lighting */}
      <div
        className="absolute top-1/3 left-1/4 w-[450px] h-[450px] bg-emerald-500/[0.03] rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-cyan-500/[0.02] rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />

      <Container size="wide" className="relative z-10">
        {/* Section Header */}
        <SectionHeading
          align="center"
          stepNumber="04"
          badge="Journey & Growth"
          title="Experience & Career Journey"
          subtitle="A journey of continuous learning, practical development, and preparation for a career in modern web development."
        />

        {/* Timeline Container */}
        <div className="relative mt-12 sm:mt-16 max-w-5xl mx-auto">
          {/* Vertical Connecting Line - Desktop Center Spine */}
          <div
            className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-4 bottom-24 w-[2px] bg-gradient-to-b from-emerald-500/40 via-cyan-500/30 to-emerald-500/10 pointer-events-none"
            aria-hidden="true"
          />

          {/* Vertical Connecting Line - Mobile/Tablet Left Spine */}
          <div
            className="lg:hidden absolute left-5 top-4 bottom-24 w-[2px] bg-gradient-to-b from-emerald-500/40 via-cyan-500/30 to-emerald-500/10 pointer-events-none"
            aria-hidden="true"
          />

          {/* Timeline Items */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="space-y-10 sm:space-y-12"
          >
            {careerMilestones.map((milestone, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <motion.div
                  key={milestone.id}
                  variants={itemVariants}
                  className="relative flex flex-col lg:grid lg:grid-cols-2 lg:gap-14 items-center"
                >
                  {/* Desktop Center Node */}
                  <div
                    className="hidden lg:flex absolute left-1/2 -translate-x-1/2 top-7 w-10 h-10 rounded-full bg-[#0a0d14] border-2 border-emerald-500/50 items-center justify-center shadow-[0_0_15px_rgba(16,185,129,0.25)] z-20"
                    aria-hidden="true"
                  >
                    {getMilestoneIcon(milestone.icon)}
                  </div>

                  {/* Mobile/Tablet Left Node */}
                  <div
                    className="lg:hidden absolute left-5 -translate-x-1/2 top-6 w-9 h-9 rounded-full bg-[#0a0d14] border-2 border-emerald-500/50 flex items-center justify-center shadow-[0_0_12px_rgba(16,185,129,0.2)] z-20"
                    aria-hidden="true"
                  >
                    {getMilestoneIcon(milestone.icon)}
                  </div>

                  {/* Card wrapper with responsive positioning */}
                  <div
                    className={`w-full pl-12 sm:pl-14 lg:pl-0 ${
                      isEven
                        ? 'lg:col-start-1 lg:col-end-2 lg:pr-2'
                        : 'lg:col-start-2 lg:col-end-3 lg:col-span-1 lg:pl-2'
                    }`}
                  >
                    <GlassCard
                      variant="default"
                      hoverGlow
                      className="p-6 sm:p-7 border-white/[0.08] hover:border-emerald-500/35 transition-all duration-300 hover:-translate-y-1 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.5)]"
                    >
                      {/* Top Meta Bar */}
                      <div className="flex items-center justify-between gap-3 mb-3 flex-wrap">
                        <div className="flex items-center gap-2">
                          <Badge
                            variant={milestone.category === 'Current Focus' ? 'accent' : 'default'}
                            size="sm"
                            className="font-mono text-[11px]"
                          >
                            {milestone.category}
                          </Badge>
                          {milestone.status && (
                            <span className="text-[11px] font-mono text-neutral-400">
                              &bull; {milestone.status}
                            </span>
                          )}
                        </div>

                        <span className="text-xs font-mono text-emerald-400/80 font-semibold">
                          Step {milestone.step}
                        </span>
                      </div>

                      {/* Milestone Title */}
                      <h3 className="text-lg sm:text-xl font-bold tracking-tight text-neutral-100 mb-2.5">
                        {milestone.title}
                      </h3>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-normal mb-5">
                        {milestone.description}
                      </p>

                      {/* Highlights Chips */}
                      <div className="pt-4 border-t border-white/[0.06]">
                        <p className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 mb-2 font-semibold">
                          Key Milestones &amp; Topics:
                        </p>
                        <div className="flex flex-wrap gap-1.5" aria-label="Milestone highlights">
                          {milestone.highlights.map((highlight, hIdx) => (
                            <span
                              key={hIdx}
                              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-[#121622] border border-white/[0.08] text-[11px] font-mono text-neutral-300 hover:border-white/20 transition-colors"
                            >
                              <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" aria-hidden="true" />
                              <span>{highlight}</span>
                            </span>
                          ))}
                        </div>
                      </div>
                    </GlassCard>
                  </div>

                  {/* Empty Spacer Column for Desktop Alternating Grid */}
                  <div
                    className={`hidden lg:block ${
                      isEven ? 'lg:col-start-2' : 'lg:col-start-1 lg:row-start-1'
                    }`}
                    aria-hidden="true"
                  />
                </motion.div>
              );
            })}
          </motion.div>

          {/* Bottom Highlighted Statement Card */}
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: shouldReduceMotion ? 0.2 : 0.5, delay: 0.2 }}
            className="mt-14 sm:mt-16 pt-8 border-t border-white/[0.06] relative z-10"
          >
            <GlassCard
              variant="default"
              hoverGlow
              className="max-w-2xl mx-auto p-6 sm:p-8 text-center border-emerald-500/30 bg-gradient-to-b from-[#0f1523]/90 to-[#0a0d14]/90 shadow-[0_0_30px_rgba(16,185,129,0.08)]"
            >
              <div className="w-10 h-10 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mx-auto mb-3 text-emerald-400">
                <Sparkles className="w-5 h-5" aria-hidden="true" />
              </div>

              <h3 className="text-lg sm:text-xl font-bold tracking-tight text-neutral-100 mb-2">
                {journeyPhilosophy.heading}
              </h3>

              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-normal max-w-lg mx-auto">
                {journeyPhilosophy.text}
              </p>
            </GlassCard>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
