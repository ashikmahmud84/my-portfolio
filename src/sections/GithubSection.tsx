import React from 'react';
import { motion, useReducedMotion, type Variants } from 'motion/react';
import {
  Github,
  ExternalLink,
  Code2,
  FolderGit2,
  GitPullRequest,
  CheckCircle2,
  Sparkles,
  ArrowUpRight
} from 'lucide-react';
import { Container } from '../components/ui/Container';
import { SectionHeading } from '../components/ui/SectionHeading';
import { GlassCard } from '../components/ui/GlassCard';
import { Button } from '../components/ui/Button';
import { developerProfile } from '../data/developer';

export const GithubSection: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

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
      transition: { duration: shouldReduceMotion ? 0.2 : 0.45, ease: 'easeOut' as const },
    },
  };

  const githubUrl = developerProfile.socials.github;
  const githubUsername = developerProfile.socials.githubUsername || 'ashikmahmud84';

  const codeHighlights = [
    {
      title: 'Clean Git Workflows',
      description: 'Structured branch strategies, semantic commit messages, and clean pull request history.',
      icon: <GitPullRequest className="w-4 h-4 text-emerald-400" />
    },
    {
      title: 'Full-Stack JavaScript',
      description: 'Production-ready MERN stacks with modular controller patterns, REST APIs, and typed React components.',
      icon: <Code2 className="w-4 h-4 text-cyan-400" />
    },
    {
      title: 'Documented Repositories',
      description: 'Comprehensive README files with setup prerequisites, environment variable configuration, and architecture summaries.',
      icon: <FolderGit2 className="w-4 h-4 text-teal-400" />
    }
  ];

  return (
    <section id="github" className="py-14 sm:py-20 lg:py-24 border-t border-white/[0.06] relative scroll-mt-20 sm:scroll-mt-24 overflow-hidden">
      {/* Ambient background lighting */}
      <div
        className="absolute top-1/3 left-1/4 w-[400px] max-w-full h-[400px] bg-emerald-500/[0.03] rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/3 right-1/4 w-[350px] max-w-full h-[350px] bg-cyan-500/[0.025] rounded-full blur-[130px] pointer-events-none"
        aria-hidden="true"
      />

      <Container size="wide" className="relative z-10">
        <SectionHeading
          stepNumber="06"
          badge="Open Source & Code"
          title="GitHub & Source Code Activity"
          subtitle="Explore public repositories, code architecture, and ongoing development workflows on GitHub."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="mt-8 sm:mt-10"
        >
          {/* Main GitHub Showcase Card */}
          <GlassCard
            variant="default"
            hoverGlow
            className="p-4 sm:p-7 lg:p-10 border-white/[0.09] bg-[#0c0f17]/90 rounded-2xl relative overflow-hidden"
          >
            {/* Top Identity Banner */}
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-5 sm:gap-6 pb-6 sm:pb-8 border-b border-white/[0.07]">
              <div className="flex items-center gap-3.5 sm:gap-5 min-w-0">
                {/* GitHub Mark Container */}
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-[#141824] border border-white/[0.1] flex items-center justify-center shadow-inner shrink-0 group">
                  <Github className="w-6 h-6 sm:w-8 sm:h-8 text-neutral-100 group-hover:scale-110 transition-transform duration-300" />
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <span className="text-base sm:text-xl font-bold text-neutral-100 tracking-tight truncate">
                      {developerProfile.name}
                    </span>
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] sm:text-[11px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/25 shrink-0">
                      <Sparkles className="w-2.5 h-2.5" />
                      Active Repositories
                    </span>
                  </div>

                  <a
                    href={githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-mono text-neutral-400 hover:text-emerald-300 transition-colors truncate max-w-full"
                  >
                    <span>@{githubUsername}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-70 shrink-0" />
                  </a>
                </div>
              </div>

              {/* Primary Call to Action */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full lg:w-auto">
                <Button
                  href={githubUrl}
                  isExternal
                  variant="primary"
                  size="md"
                  leftIcon={<Github className="w-4 h-4" />}
                  rightIcon={<ExternalLink className="w-3.5 h-3.5" />}
                  className="w-full sm:w-auto justify-center font-semibold"
                >
                  View My GitHub
                </Button>
              </div>
            </div>

            {/* Middle Grid: Authentic Engineering Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 pt-8 pb-8 border-b border-white/[0.07]">
              {codeHighlights.map((highlight) => (
                <div
                  key={highlight.title}
                  className="p-5 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-emerald-500/30 transition-all duration-300 group"
                >
                  <div className="p-2.5 rounded-lg bg-[#141824] border border-white/[0.08] w-fit mb-3 group-hover:scale-105 transition-transform">
                    {highlight.icon}
                  </div>
                  <h4 className="text-sm font-bold text-neutral-200 group-hover:text-white transition-colors mb-1.5">
                    {highlight.title}
                  </h4>
                  <p className="text-xs text-neutral-400 leading-relaxed font-normal">
                    {highlight.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Bottom Status / Summary Row */}
            <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono text-neutral-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Featured repository: TravelEase (`travelease`) on GitHub</span>
              </div>
              <a
                href={`${githubUrl}?tab=repositories`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                <span>Browse All Repositories</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </GlassCard>
        </motion.div>
      </Container>
    </section>
  );
};
