import React from 'react';
import {
  Layers,
  Layout,
  CalendarCheck,
  ShoppingBag,
  Database,
  Rocket,
  ArrowUpRight,
  FolderGit2
} from 'lucide-react';
import { ServiceItem } from '../../data/services';
import { GlassCard } from './GlassCard';

interface ServiceCardProps {
  service: ServiceItem;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const renderIcon = () => {
    const iconClass =
      'w-5 h-5 text-emerald-400 transition-transform duration-300 group-hover:scale-110';

    switch (service.icon) {
      case 'layers':
        return <Layers className={iconClass} aria-hidden="true" />;
      case 'layout':
        return <Layout className={iconClass} aria-hidden="true" />;
      case 'calendar':
        return <CalendarCheck className={iconClass} aria-hidden="true" />;
      case 'store':
        return <ShoppingBag className={iconClass} aria-hidden="true" />;
      case 'database':
        return <Database className={iconClass} aria-hidden="true" />;
      case 'rocket':
        return <Rocket className={iconClass} aria-hidden="true" />;
      default:
        return <Layers className={iconClass} aria-hidden="true" />;
    }
  };

  return (
    <GlassCard
      variant="default"
      hoverGlow
      className="group p-6 sm:p-7 flex flex-col justify-between h-full border-white/[0.08] hover:border-emerald-500/35 transition-all duration-300 hover:-translate-y-1.5 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.5)]"
    >
      <div>
        {/* Top Header Row: Icon & Arrow Indicator */}
        <div className="flex items-center justify-between mb-5">
          <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.08] group-hover:border-emerald-500/30 group-hover:bg-emerald-500/10 transition-colors">
            {renderIcon()}
          </div>

          <div
            className="w-8 h-8 rounded-full bg-white/[0.02] border border-white/[0.06] flex items-center justify-center text-neutral-500 group-hover:text-emerald-400 group-hover:border-emerald-500/30 transition-all"
            aria-hidden="true"
          >
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        </div>

        {/* Service Title */}
        <h3 className="text-lg sm:text-xl font-bold tracking-tight text-neutral-100 group-hover:text-emerald-300 transition-colors mb-2.5">
          {service.title}
        </h3>

        {/* Service Description */}
        <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-normal mb-5">
          {service.description}
        </p>
      </div>

      <div>
        {/* Project Reference: "Based on: Project A · Project B" */}
        <div className="pt-4 pb-4 border-t border-white/[0.06]">
          <div className="flex items-start gap-1.5 text-xs text-neutral-400 font-mono">
            <FolderGit2 className="w-3.5 h-3.5 text-emerald-400/80 shrink-0 mt-0.5" aria-hidden="true" />
            <span className="leading-snug">
              <span className="text-neutral-500">Based on: </span>
              <span className="text-neutral-300 font-medium">
                {service.supportedBy.join(' · ')}
              </span>
            </span>
          </div>
        </div>

        {/* Technology Badges */}
        <div
          className="flex flex-wrap gap-1.5 pt-1"
          aria-label={`Technologies for ${service.title}`}
        >
          {service.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded-md bg-[#121622] border border-white/[0.08] text-[11px] font-mono text-neutral-300 group-hover:border-white/20 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </GlassCard>
  );
};
