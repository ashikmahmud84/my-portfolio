import React, { useState, useMemo } from 'react';
import { motion, useReducedMotion, type Variants, AnimatePresence } from 'motion/react';
import { Container } from '../components/ui/Container';
import { SectionHeading } from '../components/ui/SectionHeading';
import { ProjectCard } from '../components/ui/ProjectCard';
import { projectsData } from '../data/projects';

export const ProjectsSection: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = useMemo(() => {
    const list = ['All'];
    projectsData.forEach((p) => {
      if (p.category && !list.includes(p.category)) {
        list.push(p.category);
      }
    });
    return list;
  }, []);

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All') return projectsData;
    return projectsData.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.08,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.2 : 0.4,
        ease: 'easeOut' as const,
      },
    },
  };

  return (
    <section id="projects" className="py-20 sm:py-24 border-t border-white/[0.06] relative scroll-mt-20 sm:scroll-mt-24">
      {/* Ambient background lighting */}
      <div
        className="absolute top-1/4 left-1/3 w-[450px] h-[450px] bg-emerald-500/[0.03] rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-cyan-500/[0.02] rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />

      <Container size="wide" className="relative z-10">
        {/* Section Header */}
        <SectionHeading
          align="center"
          badge="MY WORK"
          title="Featured Projects"
          subtitle="A selection of full-stack and web applications I've built demonstrating clean architecture, responsive interfaces, and modern development practices."
        />

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10 sm:mb-12">
          {categories.map((category) => {
            const count =
              category === 'All'
                ? projectsData.length
                : projectsData.filter((p) => p.category === category).length;
            const isActive = activeCategory === category;

            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-mono transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-emerald-500/15 text-emerald-300 border border-emerald-500/40 shadow-[0_0_15px_rgba(16,185,129,0.12)]'
                    : 'bg-white/[0.03] text-neutral-400 hover:text-neutral-200 border border-white/[0.06] hover:border-white/15'
                }`}
              >
                <span>{category}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                    isActive
                      ? 'bg-emerald-500/25 text-emerald-200'
                      : 'bg-white/[0.06] text-neutral-400'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Responsive Projects Grid: 1 column on mobile, 2 columns on tablet and desktop */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10"
          >
            {filteredProjects.map((project) => (
              <motion.div key={project.id} variants={cardVariants} className="h-full">
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </Container>
    </section>
  );
};
