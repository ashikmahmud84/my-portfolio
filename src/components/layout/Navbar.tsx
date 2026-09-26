import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { navItems } from '../../data/navigation';
import { developerProfile } from '../../data/developer';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('home');
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  // Handle scroll events: navbar styling and active section detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // 1. If near top of page, activate 'home'
      if (window.scrollY < 180) {
        setActiveSection('home');
        return;
      }

      // 2. If near bottom of page, activate 'contact'
      const isBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 90;
      if (isBottom) {
        setActiveSection('contact');
        return;
      }

      // 3. Detect current section in viewport with comfortable offset
      const scrollPosition = window.scrollY + 140;
      let current = '';

      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            current = item.id;
            break;
          }
        }
      }

      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial run on mount

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open to avoid background scrolling
  useEffect(() => {
    if (mobileMenuOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          setMobileMenuOpen(false);
          menuButtonRef.current?.focus();
        }
      };

      window.addEventListener('keydown', handleKeyDown);

      return () => {
        document.body.style.overflow = originalOverflow;
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [mobileMenuOpen]);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  // Smooth scroll handler with accessibility fallback
  const handleNavClick = (e: React.MouseEvent<HTMLElement>, href: string) => {
    const targetId = href.replace('#', '');
    const targetEl = document.getElementById(targetId);

    if (targetEl) {
      e.preventDefault();
      targetEl.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', href);
      setActiveSection(targetId);
    }
    closeMobileMenu();
  };

  return (
    <>
      {/* Skip to Content accessible link for keyboard navigation */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:px-4 focus:py-2 focus:bg-emerald-500 focus:text-neutral-950 focus:font-semibold focus:text-xs focus:rounded-lg focus:shadow-xl focus:outline-none focus:ring-2 focus:ring-emerald-300"
      >
        Skip to main content
      </a>

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#08090d]/90 backdrop-blur-md border-b border-white/[0.08] shadow-lg shadow-black/25 py-3'
            : 'bg-transparent border-b border-transparent py-4 sm:py-5'
        }`}
      >
        <Container size="wide">
          <nav aria-label="Main navigation" className="flex items-center justify-between">
            {/* Brand Identity / Logo */}
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className="flex items-center gap-2.5 sm:gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#08090d] rounded-lg p-1 min-w-0"
              aria-label={`${developerProfile.name} - Home`}
            >
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center font-mono text-xs font-bold text-emerald-400 group-hover:border-emerald-500/60 group-hover:shadow-[0_0_12px_rgba(16,185,129,0.3)] transition-all shrink-0">
                AA
              </div>
              <div className="flex flex-col min-w-0">
                <span className="font-bold text-xs sm:text-sm tracking-tight text-neutral-100 group-hover:text-emerald-400 transition-colors truncate max-w-[130px] xs:max-w-[190px] sm:max-w-none">
                  {developerProfile.name}
                </span>
                <span className="text-[10px] sm:text-[11px] font-mono text-neutral-400 truncate max-w-[130px] xs:max-w-[190px] sm:max-w-none">
                  {developerProfile.role}
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links (Visible on Large Screens 1024px+) */}
            <div className="hidden lg:flex items-center gap-1 bg-[#10131d]/80 backdrop-blur-md border border-white/[0.08] rounded-full px-2.5 xl:px-3.5 py-1 shadow-inner">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <a
                    key={item.id}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    aria-current={isActive ? 'page' : undefined}
                    className={`text-xs font-medium px-2.5 xl:px-3 py-1.5 rounded-full transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 whitespace-nowrap ${
                      isActive
                        ? 'text-emerald-300 bg-emerald-500/15 border border-emerald-500/30 shadow-sm font-semibold'
                        : 'text-neutral-400 hover:text-neutral-100 hover:bg-white/[0.04]'
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}
            </div>

            {/* Right Quick Action: Contact CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <Button
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                variant="outline"
                size="sm"
                rightIcon={<ArrowUpRight className="w-3.5 h-3.5 text-emerald-400" />}
                className="font-mono text-xs"
              >
                Contact
              </Button>
            </div>

            {/* Mobile / Tablet Hamburger Menu Toggle Button */}
            <div className="lg:hidden flex items-center">
              <button
                ref={menuButtonRef}
                type="button"
                onClick={() => setMobileMenuOpen((prev) => !prev)}
                className="p-2.5 min-w-[42px] min-h-[42px] flex items-center justify-center rounded-lg text-neutral-300 hover:text-white bg-[#12151f] border border-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#08090d] transition-colors cursor-pointer"
                aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-navigation"
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5 text-neutral-200" aria-hidden="true" />
                ) : (
                  <Menu className="w-5 h-5 text-neutral-200" aria-hidden="true" />
                )}
              </button>
            </div>
          </nav>
        </Container>

        {/* Mobile & Tablet Backdrop & Drawer Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden">
            {/* Backdrop overlay to close when clicking outside */}
            <div
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40 transition-opacity"
              onClick={closeMobileMenu}
              aria-hidden="true"
            />

            {/* Mobile Dropdown Panel directly under navbar container */}
            <div
              id="mobile-navigation"
              className="relative z-50 px-4 pt-3 pb-6 max-h-[calc(100dvh-4.75rem)] overflow-y-auto overscroll-contain border-b border-white/10 bg-[#0c0f17]/98 backdrop-blur-2xl shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200"
            >
              <div className="flex flex-col gap-1">
                {navItems.map((item) => {
                  const isActive = activeSection === item.id;
                  return (
                    <a
                      key={item.id}
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      aria-current={isActive ? 'page' : undefined}
                      className={`flex items-center justify-between py-3 px-3.5 rounded-xl text-sm font-medium min-h-[46px] transition-all active:scale-[0.99] ${
                        isActive
                          ? 'text-emerald-300 bg-emerald-500/15 border border-emerald-500/30 font-semibold shadow-sm'
                          : 'text-neutral-300 hover:text-white active:bg-white/[0.08]'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        {isActive && (
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" aria-hidden="true" />
                        )}
                        <span>{item.label}</span>
                      </div>
                      <span className="font-mono text-xs text-neutral-500">
                        {item.sectionNumber}
                      </span>
                    </a>
                  );
                })}
              </div>

              {/* Mobile CTA */}
              <div className="pt-4 mt-3 border-t border-white/[0.08]">
                <Button
                  href="#contact"
                  variant="primary"
                  size="md"
                  className="w-full justify-center font-semibold min-h-[44px]"
                  onClick={(e) => handleNavClick(e, '#contact')}
                >
                  Contact Ashik
                </Button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
