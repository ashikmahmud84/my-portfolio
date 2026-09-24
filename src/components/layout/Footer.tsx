import React from 'react';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { Container } from '../ui/Container';
import { SocialIconButton } from '../ui/SocialIconButton';
import { developerProfile } from '../../data/developer';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Services', href: '#services' },
    { label: 'GitHub', href: '#github' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="border-t border-white/[0.08] bg-[#07080b] py-14 text-sm text-neutral-400 relative">
      <Container size="wide">
        {/* Main Footer Multi-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-white/[0.06]">
          {/* Brand Column (Left) */}
          <div className="md:col-span-6 lg:col-span-5 flex flex-col items-start gap-3">
            <a
              href="#"
              className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded-lg"
              aria-label={`${developerProfile.name} - Back to top`}
            >
              <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center font-mono text-xs font-bold text-emerald-400 group-hover:border-emerald-500/60 transition-colors">
                AA
              </div>
              <span className="font-bold text-base tracking-tight text-neutral-100 group-hover:text-emerald-400 transition-colors">
                {developerProfile.name}
              </span>
            </a>

            {/* Developer Title: Web Developer / MERN Stack Developer */}
            <p className="text-xs font-mono text-emerald-400 font-medium">
              {developerProfile.role} / {developerProfile.subRole || 'MERN Stack Developer'}
            </p>

            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed max-w-md">
              Building modern, responsive, and scalable web applications with clean code, modern frontend design, and full-stack technologies.
            </p>

            <div className="inline-flex items-center gap-2 text-xs text-neutral-400 font-mono mt-1">
              <span>{developerProfile.location}</span>
              <span>•</span>
              <span className="text-emerald-400/90">Available for Opportunities</span>
            </div>
          </div>

          {/* Quick Navigation Column (Center) */}
          <div className="md:col-span-3 lg:col-span-4 flex flex-col items-start">
            <h3 className="text-xs font-mono uppercase tracking-wider text-neutral-200 font-semibold mb-4">
              Quick Navigation
            </h3>
            <ul className="grid grid-cols-2 gap-y-2.5 gap-x-6 text-xs sm:text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-neutral-400 hover:text-emerald-300 transition-colors py-1 inline-block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Column (Right) */}
          <div className="md:col-span-3 lg:col-span-3 flex flex-col items-start md:items-end justify-between">
            <div className="flex flex-col items-start md:items-end w-full">
              <h3 className="text-xs font-mono uppercase tracking-wider text-neutral-200 font-semibold mb-4">
                Connect
              </h3>
              <div className="flex items-center gap-2.5">
                {developerProfile.socials?.github && (
                  <SocialIconButton
                    href={developerProfile.socials.github}
                    icon={<Github className="w-4 h-4" aria-hidden="true" />}
                    label="Ashik Ahammed's GitHub Profile (@ashikmahmud84)"
                  />
                )}

                {developerProfile.socials?.linkedin && (
                  <SocialIconButton
                    href={developerProfile.socials.linkedin}
                    icon={<Linkedin className="w-4 h-4" aria-hidden="true" />}
                    label="Ashik Ahammed's LinkedIn Profile (ashik24bd)"
                  />
                )}

                {developerProfile.socials?.email && (
                  <SocialIconButton
                    href={`mailto:${developerProfile.socials.email}`}
                    icon={<Mail className="w-4 h-4" aria-hidden="true" />}
                    label={`Send Email to ${developerProfile.socials.email}`}
                  />
                )}
              </div>
            </div>

            {/* Back to top button */}
            <div className="mt-6 md:mt-0 pt-4 md:pt-0">
              <button
                type="button"
                onClick={scrollToTop}
                aria-label="Back to top of page"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#12151f] text-neutral-400 border border-white/10 hover:text-emerald-400 hover:border-emerald-500/40 hover:bg-[#161a26] transition-all cursor-pointer text-xs font-mono focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
              >
                <span>Back to Top</span>
                <ArrowUp className="w-3.5 h-3.5" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Legal / Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <p>
            &copy; {new Date().getFullYear()} {developerProfile.name}. All rights reserved.
          </p>
          <p className="font-mono text-[11px] text-neutral-400 text-center sm:text-right">
            Designed &amp; built with modern React, JavaScript &amp; Tailwind CSS.
          </p>
        </div>
      </Container>
    </footer>
  );
};
