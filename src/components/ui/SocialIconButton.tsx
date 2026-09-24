import React from 'react';
import { cn } from '../../lib/utils';

export interface SocialIconButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  icon: React.ReactNode;
  label: string;
}

export const SocialIconButton: React.FC<SocialIconButtonProps> = ({
  icon,
  label,
  href,
  className,
  ...props
}) => {
  const isMail = href?.startsWith('mailto:');
  const target = props.target ?? (isMail ? undefined : '_blank');
  const rel = props.rel ?? (isMail ? undefined : 'noopener noreferrer');

  return (
    <a
      href={href}
      target={target}
      rel={rel}
      aria-label={label}
      title={label}
      className={cn(
        'group relative inline-flex items-center justify-center w-10 h-10 rounded-lg',
        'bg-[#12151f] text-neutral-400 border border-white/10',
        'hover:text-emerald-400 hover:border-emerald-500/40 hover:bg-[#161a26]',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#08090d]',
        'transition-all duration-200 cursor-pointer shrink-0',
        className
      )}
      {...props}
    >
      <span className="transition-transform duration-200 group-hover:scale-110 flex items-center justify-center">
        {icon}
      </span>
    </a>
  );
};
