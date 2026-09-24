import React from 'react';
import { cn } from '../../lib/utils';

export interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'interactive' | 'flat' | 'accent';
  hoverGlow?: boolean;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  variant = 'default',
  hoverGlow = false,
  className,
  ...props
}) => {
  const baseStyles = 'relative rounded-xl border p-6 transition-all duration-200 overflow-hidden';

  const variantStyles = {
    default: 'bg-[#11131a]/80 backdrop-blur-md border-white/[0.08] shadow-[0_4px_20px_-4px_rgba(0,0,0,0.5)]',
    interactive: 'bg-[#11131a]/80 backdrop-blur-md border-white/[0.08] hover:border-emerald-500/30 hover:bg-[#141722] hover:-translate-y-0.5 cursor-pointer shadow-[0_4px_20px_-4px_rgba(0,0,0,0.5)]',
    flat: 'bg-[#0f1118] border-white/[0.06]',
    accent: 'bg-gradient-to-b from-emerald-950/20 to-[#11131a]/90 backdrop-blur-md border-emerald-500/20',
  };

  const glowStyles = hoverGlow ? 'group hover:shadow-[0_0_30px_rgba(16,185,129,0.12)]' : '';

  return (
    <div className={cn(baseStyles, variantStyles[variant], glowStyles, className)} {...props}>
      {children}
    </div>
  );
};
