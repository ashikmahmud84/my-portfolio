import React from 'react';
import { cn } from '../../lib/utils';
import { Badge } from './Badge';

export interface SectionHeadingProps {
  badge?: string;
  stepNumber?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  stepNumber,
  title,
  subtitle,
  align = 'left',
  className,
}) => {
  const isCenter = align === 'center';

  return (
    <div
      className={cn(
        'mb-8 sm:mb-12 lg:mb-16',
        isCenter ? 'text-center mx-auto max-w-2xl' : 'max-w-2xl',
        className
      )}
    >
      {(badge || stepNumber) && (
        <div className={cn('flex items-center gap-2 mb-2.5 sm:mb-3', isCenter ? 'justify-center' : 'justify-start')}>
          {stepNumber && (
            <span className="font-mono text-xs font-semibold text-emerald-400 tracking-wider">
              {stepNumber}
            </span>
          )}
          {stepNumber && badge && <span className="text-white/20 text-xs">•</span>}
          {badge && (
            <Badge variant="accent" size="sm">
              {badge}
            </Badge>
          )}
        </div>
      )}

      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-neutral-100 text-balance break-words">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-2.5 sm:mt-3 text-sm sm:text-base lg:text-lg text-neutral-400 leading-relaxed font-normal text-pretty">
          {subtitle}
        </p>
      )}
    </div>
  );
};
