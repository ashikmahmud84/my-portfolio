import React, { useState } from 'react';
import { motion, useReducedMotion, type Variants, AnimatePresence } from 'motion/react';
import {
  Code2,
  Server,
  Database,
  GitBranch,
  Terminal,
  Sparkles,
  Layers,
  Cpu,
  CheckCircle2
} from 'lucide-react';
import { Container } from '../components/ui/Container';
import { SectionHeading } from '../components/ui/SectionHeading';
import { GlassCard } from '../components/ui/GlassCard';
import { Badge } from '../components/ui/Badge';
import { SkillCard } from '../components/ui/SkillCard';
import { TechIcon, getBrandMeta } from '../components/icons/TechIcon';
import {
  skillCategories,
  coreStackItems,
  coreStackSummary,
  type SkillItem
} from '../data/skills';

export const SkillsSection: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const [activeTab, setActiveTab] = useState<string>('all');

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.05,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 14 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: shouldReduceMotion ? 0.2 : 0.4, ease: 'easeOut' as const },
    },
  };

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'frontend':
        return <Code2 className="w-4 h-4 text-cyan-400" aria-hidden="true" />;
      case 'backend':
        return <Server className="w-4 h-4 text-emerald-400" aria-hidden="true" />;
      case 'database':
        return <Database className="w-4 h-4 text-teal-400" aria-hidden="true" />;
      case 'tools':
        return <GitBranch className="w-4 h-4 text-emerald-400" aria-hidden="true" />;
      default:
        return <Terminal className="w-4 h-4 text-emerald-400" aria-hidden="true" />;
    }
  };

  // Filter skills based on selected category tab
  const getFilteredCategories = () => {
    if (activeTab === 'all') {
      return skillCategories;
    }
    return skillCategories.filter((cat) => cat.id === activeTab);
  };

  // Total count of technologies across categories
  const allTechnologies: SkillItem[] = skillCategories.flatMap((cat) => cat.technologies);

  return (
    <section id="skills" className="py-20 sm:py-24 border-t border-white/[0.06] relative scroll-mt-20 sm:scroll-mt-24">
      {/* Subtle ambient lighting */}
      <div
        className="absolute top-1/4 right-1/4 w-[450px] h-[450px] bg-emerald-500/[0.03] rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/4 left-1/5 w-[350px] h-[350px] bg-cyan-500/[0.025] rounded-full blur-[120px] pointer-events-none"
        aria-hidden="true"
      />

      <Container size="wide" className="relative z-10">
        {/* Section Intro */}
        <SectionHeading
          stepNumber="02"
          badge="Expertise & Stack"
          title="Skills & Technologies"
          subtitle="A comprehensive overview of my core technical stack, libraries, and tools with recognizable brand logos and interactive categories."
        />

        {/* 1. CORE STACK HIGHLIGHT SHOWCASE */}
        <div className="mb-14 sm:mb-18">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-3 border-b border-white/[0.06]">
            <div className="flex items-center gap-2.5">
              <span className="p-1.5 rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <Cpu className="w-4 h-4" />
              </span>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-neutral-100 flex items-center gap-2">
                  <span>Core MERN Stack</span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                    Primary Specialization
                  </span>
                </h3>
              </div>
            </div>
            <p className="text-xs font-mono text-neutral-400">
              Full-Stack Architecture • React • Node.js • Express.js • MongoDB
            </p>
          </div>

          {/* 4 Core Pillars Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {coreStackItems.map((item) => {
              const brand = getBrandMeta(item.name);
              return (
                <GlassCard
                  key={item.name}
                  variant="default"
                  className="relative p-5 sm:p-6 rounded-2xl border-white/[0.09] bg-[#0c0f17]/90 hover:border-emerald-500/40 hover:bg-[#101420] transition-all duration-300 group hover:-translate-y-1 hover:shadow-xl flex flex-col justify-between"
                >
                  {/* Subtle brand glow on hover */}
                  <div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none blur-xl -z-10"
                    style={{
                      background: `radial-gradient(circle at top right, ${brand.bgGlow} 0%, transparent 70%)`
                    }}
                    aria-hidden="true"
                  />

                  <div>
                    {/* Top Row: Category & Badge */}
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span className="text-[11px] font-mono text-neutral-400 px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.06]">
                        {item.category}
                      </span>
                      <span className="inline-flex items-center gap-1 text-[10px] font-mono font-medium text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/25">
                        <Sparkles className="w-2.5 h-2.5" />
                        {item.badge}
                      </span>
                    </div>

                    {/* Logo & Title */}
                    <div className="flex items-center gap-3.5 mb-3">
                      <div
                        className="w-13 h-13 rounded-xl flex items-center justify-center bg-[#151926] border border-white/[0.1] shadow-inner group-hover:scale-105 transition-transform duration-300"
                        style={{
                          boxShadow: 'inset 0 1px 2px rgba(255,255,255,0.06)'
                        }}
                      >
                        <TechIcon
                          name={item.name}
                          size={32}
                          className="drop-shadow-sm group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <div>
                        <h4 className="text-base sm:text-lg font-bold text-neutral-100 group-hover:text-white transition-colors">
                          {item.name}
                        </h4>
                        <p className="text-xs font-mono text-emerald-400/90 font-medium">
                          {item.role}
                        </p>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-xs text-neutral-400 leading-relaxed mb-4">
                      {item.description}
                    </p>
                  </div>

                  {/* Capabilities List */}
                  <div className="pt-3 border-t border-white/[0.06] space-y-1.5">
                    {item.capabilities.map((cap) => (
                      <div key={cap} className="flex items-center gap-1.5 text-[11px] font-mono text-neutral-300">
                        <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>
                </GlassCard>
              );
            })}
          </div>
        </div>

        {/* 2. CATEGORY TABS FILTER */}
        <div className="mb-8">
          <div className="flex items-center justify-between flex-wrap gap-4 pb-4 border-b border-white/[0.06]">
            <div>
              <h3 className="text-base sm:text-lg font-semibold text-neutral-100 flex items-center gap-2">
                <Layers className="w-4 h-4 text-cyan-400" />
                <span>All Technical Disciplines</span>
                <span className="text-xs font-mono text-neutral-400">
                  ({allTechnologies.length} Technologies)
                </span>
              </h3>
            </div>

            {/* Filter Buttons */}
            <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto max-w-full pb-1 scrollbar-none">
              <button
                type="button"
                onClick={() => setActiveTab('all')}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer whitespace-nowrap border ${
                  activeTab === 'all'
                    ? 'bg-emerald-500/15 text-emerald-300 border-emerald-500/40 shadow-sm font-semibold'
                    : 'bg-[#10141f] text-neutral-400 border-white/[0.08] hover:text-neutral-200 hover:border-white/20'
                }`}
              >
                All Technologies
              </button>

              {skillCategories.map((category) => {
                const isActive = activeTab === category.id;
                return (
                  <button
                    key={category.id}
                    type="button"
                    onClick={() => setActiveTab(category.id)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer whitespace-nowrap border ${
                      isActive
                        ? 'bg-emerald-500/15 text-emerald-300 border-emerald-500/40 shadow-sm font-semibold'
                        : 'bg-[#10141f] text-neutral-400 border-white/[0.08] hover:text-neutral-200 hover:border-white/20'
                    }`}
                  >
                    {getCategoryIcon(category.iconName)}
                    <span>{category.title.split(' ')[0]}</span>
                    <span className="text-[10px] opacity-70">
                      ({category.technologies.length})
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* 3. CATEGORIZED SKILL GRIDS */}
        <div className="space-y-10 sm:space-y-12">
          {getFilteredCategories().map((category) => (
            <motion.div
              key={category.id}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              className="rounded-2xl p-5 sm:p-7 bg-[#0b0e16]/80 border border-white/[0.07]"
            >
              {/* Category Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 mb-5 pb-4 border-b border-white/[0.05]">
                <div className="flex items-center gap-3">
                  <span className="p-2 rounded-lg bg-white/[0.03] border border-white/[0.08] shrink-0">
                    {getCategoryIcon(category.iconName)}
                  </span>
                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-neutral-100 flex items-center gap-2">
                      <span>{category.title}</span>
                      <span className="text-xs font-mono font-normal text-neutral-400">
                        • {category.technologies.length} tools
                      </span>
                    </h4>
                    <p className="text-xs sm:text-sm text-neutral-400 mt-0.5">
                      {category.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Responsive Grid of Skill Cards:
                  Mobile: 2 columns (grid-cols-2)
                  Tablet: 3-4 columns (sm:grid-cols-3 md:grid-cols-4)
                  Desktop: 4-6 columns (lg:grid-cols-4 xl:grid-cols-6)
                  No horizontal overflow.
              */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-6 gap-3 sm:gap-4">
                {category.technologies.map((tech) => (
                  <motion.div key={tech.name} variants={itemVariants}>
                    <SkillCard skill={tech} showRole={true} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* 4. FOOTER CORE STACK SUMMARY BAR */}
        <div className="mt-12 pt-8 border-t border-white/[0.06] flex items-center justify-center">
          <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-[#10131d]/90 border border-white/[0.08] shadow-sm text-xs sm:text-sm font-mono text-neutral-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>{coreStackSummary}</span>
          </div>
        </div>
      </Container>
    </section>
  );
};
