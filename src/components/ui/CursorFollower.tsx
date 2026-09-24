import React, { useEffect, useRef, useState } from 'react';

/**
 * CursorFollower component
 * Provides a lightweight, smooth circular follower that trails the mouse cursor on desktop devices.
 * - Hardware accelerated with requestAnimationFrame (zero React state updates during movement)
 * - Automatically disabled on touch screens and mobile devices
 * - Respects prefers-reduced-motion accessibility setting
 * - Never captures pointer events (pointer-events: none)
 */
export const CursorFollower: React.FC = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const followerRef = useRef<HTMLDivElement>(null);

  // Positional and animation refs (ZERO re-renders on mousemove!)
  const mousePos = useRef({ x: -100, y: -100 });
  const currentPos = useRef({ x: -100, y: -100 });
  const isHovered = useRef(false);
  const isVisible = useRef(false);
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    // Check for fine pointer (mouse/trackpad) and reduced motion preference
    const finePointerQuery = window.matchMedia('(hover: hover) and (pointer: fine)');
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    const checkSupport = () => {
      const supported = finePointerQuery.matches && !motionQuery.matches;
      setIsEnabled(supported);
    };

    checkSupport();

    finePointerQuery.addEventListener('change', checkSupport);
    motionQuery.addEventListener('change', checkSupport);

    return () => {
      finePointerQuery.removeEventListener('change', checkSupport);
      motionQuery.removeEventListener('change', checkSupport);
    };
  }, []);

  useEffect(() => {
    if (!isEnabled) return;

    const follower = followerRef.current;
    if (!follower) return;

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current.x = e.clientX;
      mousePos.current.y = e.clientY;
      if (!isVisible.current) {
        isVisible.current = true;
        follower.style.opacity = '1';
      }
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (
        target?.closest(
          'a, button, [role="button"], input, textarea, select, label, .cursor-pointer, [data-interactive="true"]'
        )
      ) {
        isHovered.current = true;
      } else {
        isHovered.current = false;
      }
    };

    const handleMouseLeave = () => {
      isVisible.current = false;
      follower.style.opacity = '0';
    };

    const handleMouseEnter = () => {
      isVisible.current = true;
      follower.style.opacity = '1';
    };

    // Smooth animation loop with linear interpolation (lerp factor: 0.18)
    const animate = () => {
      const lerp = 0.18;
      currentPos.current.x += (mousePos.current.x - currentPos.current.x) * lerp;
      currentPos.current.y += (mousePos.current.y - currentPos.current.y) * lerp;

      if (follower) {
        const scale = isHovered.current ? 1.45 : 1;
        follower.style.transform = `translate3d(${currentPos.current.x}px, ${currentPos.current.y}px, 0) translate(-50%, -50%) scale(${scale})`;

        if (isHovered.current) {
          follower.style.borderColor = 'rgba(52, 211, 153, 0.75)';
          follower.style.backgroundColor = 'rgba(16, 185, 129, 0.14)';
          follower.style.boxShadow = '0 0 16px rgba(16, 185, 129, 0.25)';
        } else {
          follower.style.borderColor = 'rgba(52, 211, 153, 0.35)';
          follower.style.backgroundColor = 'rgba(16, 185, 129, 0.05)';
          follower.style.boxShadow = 'none';
        }
      }

      rafId.current = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseover', handleMouseOver, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    rafId.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      if (rafId.current !== null) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, [isEnabled]);

  if (!isEnabled) {
    return null;
  }

  return (
    <div
      ref={followerRef}
      aria-hidden="true"
      className="fixed top-0 left-0 w-7 h-7 rounded-full border border-emerald-400/35 bg-emerald-500/[0.05] pointer-events-none z-[9999] opacity-0 transition-opacity duration-300 will-change-transform"
      style={{
        transform: 'translate3d(-100px, -100px, 0) translate(-50%, -50%) scale(1)',
      }}
    >
      {/* Tiny inner center accent dot */}
      <span className="absolute inset-0 m-auto w-1 h-1 rounded-full bg-emerald-400 opacity-60" />
    </div>
  );
};
