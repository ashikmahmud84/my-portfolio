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
      className={`group relative flex flex-col items-center text-center p-3.5 sm:p-4.5 rounded-xl bg-[#0d1018]/90 border border-white/[0.08] hover:border-emerald-500/40 hover:bg-[#121622] transition-all duration-300 ease-out cursor-default select-none hover:-translate-y-1 hover:scale-[1.02] shadow-sm hover:shadow-lg ${className}`}
      style={{
        // Dynamic brand glow on hover via CSS variable
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
      <div className="absolute top-2.5 right-2.5 flex items-center gap-1">
        {skill.isCore && (
          <span
            className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]"
            title="Core MERN Stack"
          />
        )}
      </div>

      {/* Logo container */}
      <div
        className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center mb-2.5 sm:mb-3 bg-[#151926]/90 border border-white/[0.08] group-hover:border-white/20 transition-all duration-300 group-hover:scale-105 shadow-inner"
        style={{
          boxShadow: 'inset 0 1px 2px rgba(255,255,255,0.05)'
        }}
      >
        <TechIcon
          name={skill.name}
          size={30}
          className="transition-transform duration-300 group-hover:scale-110 drop-shadow-sm"
        />
      </div>

      {/* Technology Name */}
      <h4 className="text-xs sm:text-sm font-semibold text-neutral-200 group-hover:text-white transition-colors duration-200 tracking-tight">
        {skill.name}
      </h4>

      {/* Subtle Role / Capability description */}
      {showRole && skill.role && (
        <p className="mt-1 text-[11px] font-mono text-neutral-400 group-hover:text-neutral-300 line-clamp-1 transition-colors leading-tight">
          {skill.role}
        </p>
      )}

      {/* Badge (e.g. Currently Exploring) */}
      {skill.badge && (
        <div className="mt-2 inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-sans font-medium bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
          <Sparkles className="w-2.5 h-2.5 text-emerald-400" />
          <span>{skill.badge}</span>
        </div>
      )}
    </div>
  );
};
