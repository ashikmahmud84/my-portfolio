import React from 'react';
import { Sparkles } from 'lucide-react';
import { TechIcon, getBrandMeta } from '../icons/TechIcon';
import type { SkillItem } from '../../data/skills';

export interface SkillCardProps {
  skill: SkillItem;
  className?: string;
  showRole?: boolean;
}

export const SkillCard: React.FC<SkillCardProps> = ({
  skill,
  className = '',
  showRole = true
}) => {
  const brand = getBrandMeta(skill.name);

  return (
    <div
      className={`group relative flex flex-col items-center text-center p-2.5 sm:p-4 rounded-xl bg-[#0d1018]/90 border border-white/[0.08] hover:border-emerald-500/40 hover:bg-[#121622] transition-all duration-300 ease-out cursor-default select-none hover:-translate-y-1 hover:scale-[1.02] shadow-sm hover:shadow-lg w-full ${className}`}
      style={{
        boxShadow: undefined
      }}
    >
      {/* Ambient hover glow inside card */}
      <div
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none blur-xl -z-10"
        style={{
          background: `radial-gradient(circle at center, ${brand.bgGlow} 0%, transparent 70%)`
        }}
        aria-hidden="true"
      />

      {/* Top right indicator badges */}
      <div className="absolute top-2 right-2 flex items-center gap-1">
        {skill.isCore && (
          <span
            className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]"
            title="Core MERN Stack"
          />
        )}
      </div>

      {/* Logo container */}
      <div
        className="w-10 h-10 sm:w-13 sm:h-13 rounded-xl flex items-center justify-center mb-2 sm:mb-2.5 bg-[#151926]/90 border border-white/[0.08] group-hover:border-white/20 transition-all duration-300 group-hover:scale-105 shadow-inner"
        style={{
          boxShadow: 'inset 0 1px 2px rgba(255,255,255,0.05)'
        }}
      >
        <TechIcon
          name={skill.name}
          size={26}
          className="transition-transform duration-300 group-hover:scale-110 drop-shadow-sm"
        />
      </div>

      {/* Technology Name */}
      <h4 className="text-xs sm:text-sm font-semibold text-neutral-200 group-hover:text-white transition-colors duration-200 tracking-tight truncate max-w-full px-1">
        {skill.name}
      </h4>

      {/* Subtle Role / Capability description */}
      {showRole && skill.role && (
        <p className="mt-0.5 sm:mt-1 text-[10px] sm:text-[11px] font-mono text-neutral-400 group-hover:text-neutral-300 truncate max-w-full px-1 transition-colors leading-tight">
          {skill.role}
        </p>
      )}

      {/* Badge (e.g. Currently Exploring) */}
      {skill.badge && (
        <div className="mt-1.5 sm:mt-2 inline-flex items-center gap-1 px-1.5 sm:px-2 py-0.5 rounded-full text-[9px] sm:text-[10px] font-sans font-medium bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 truncate max-w-full">
          <Sparkles className="w-2 sm:w-2.5 h-2 sm:h-2.5 text-emerald-400 shrink-0" />
          <span className="truncate">{skill.badge}</span>
        </div>
      )}
    </div>
  );
};
