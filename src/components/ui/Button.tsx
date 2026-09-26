import React from 'react';
import { cn } from '../../lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  download?: string | boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  isExternal?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className,
  href,
  download,
  leftIcon,
  rightIcon,
  isExternal = false,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed select-none whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/50 rounded-lg max-w-full';

  const sizeStyles = {
    sm: 'text-xs py-2 px-3 sm:px-4 min-h-[38px] gap-1.5',
    md: 'text-xs sm:text-sm py-2.5 px-3.5 sm:px-5 min-h-[42px] gap-2',
    lg: 'text-sm sm:text-base py-3 px-4 sm:px-6 min-h-[46px] gap-2.5',
  };

  const variantStyles = {
    primary: 'bg-emerald-500 text-neutral-950 font-semibold hover:bg-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.2)] hover:shadow-[0_0_24px_rgba(16,185,129,0.35)] active:scale-[0.98]',
    secondary: 'bg-[#151923] text-neutral-100 hover:bg-[#1c2230] border border-white/10 hover:border-white/20 active:scale-[0.98]',
    outline: 'bg-transparent text-neutral-200 border border-emerald-500/30 hover:border-emerald-500 hover:text-emerald-300 hover:bg-emerald-500/5 active:scale-[0.98]',
    ghost: 'bg-transparent text-neutral-400 hover:text-neutral-100 hover:bg-white/5 active:scale-[0.98]',
  };

  const classes = cn(baseStyles, sizeStyles[size], variantStyles[variant], className);

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        download={download}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noopener noreferrer' : undefined}
      >
        {leftIcon && <span className="inline-flex shrink-0">{leftIcon}</span>}
        <span className="truncate">{children}</span>
        {rightIcon && <span className="inline-flex shrink-0">{rightIcon}</span>}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {leftIcon && <span className="inline-flex shrink-0">{leftIcon}</span>}
      <span className="truncate">{children}</span>
      {rightIcon && <span className="inline-flex shrink-0">{rightIcon}</span>}
    </button>
  );
};
