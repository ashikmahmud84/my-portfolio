import React from 'react';
import { motion, useReducedMotion, type Variants } from 'motion/react';
import { Container } from '../components/ui/Container';
import { SectionHeading } from '../components/ui/SectionHeading';
import { ServiceCard } from '../components/ui/ServiceCard';
import { servicesData } from '../data/services';

export const ServicesSection: React.FC = () => {
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

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 18 },
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
    <section id="services" className="py-14 sm:py-20 lg:py-24 border-t border-white/[0.06] relative scroll-mt-20 sm:scroll-mt-24 overflow-hidden">
      {/* Ambient background lighting */}
      <div
        className="absolute top-1/3 left-1/3 w-[450px] max-w-full h-[450px] bg-emerald-500/[0.03] rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-[400px] max-w-full h-[400px] bg-cyan-500/[0.02] rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />

      <Container size="wide" className="relative z-10">
        {/* Section Header */}
        <SectionHeading
          align="center"
          stepNumber="05"
          badge="Services"
          title="Development Services"
          subtitle="Practical web development services built around the technologies and project experience demonstrated in my portfolio."
        />

        {/* Responsive Services Grid: 3 columns on Desktop, 2 on Tablet, 1 on Mobile */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8"
        >
          {servicesData.map((service) => (
            <motion.div key={service.id} variants={cardVariants} className="h-full">
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
};
