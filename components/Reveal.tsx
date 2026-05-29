'use client';

import { useEffect, useRef, useState, type ElementType, type ReactNode } from 'react';

type RevealProps = {
  children: ReactNode;
  /** Stagger delay in ms, applied via CSS custom property. */
  delay?: number;
  /** Render as a different element (default div). */
  as?: ElementType;
  className?: string;
  /** Reveal once and stop observing (default true). */
  once?: boolean;
};

/**
 * Wraps content in a scroll-reveal. The visual transition lives in globals.css
 * (`[data-reveal]`); this component only toggles `data-revealed` when the
 * element enters the viewport. CSS-only motion — no animation library.
 *
 * Falls back to visible immediately when IntersectionObserver is unavailable
 * or the user prefers reduced motion (handled in CSS).
 */
export function Reveal({ children, delay = 0, as, className, once = true }: RevealProps) {
  const Tag = (as ?? 'div') as ElementType;
  const ref = useRef<HTMLElement | null>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof IntersectionObserver === 'undefined') {
      // No observer support (rare / non-browser): reveal on the next frame so
      // we never call setState synchronously inside the effect body.
      const id = setTimeout(() => setRevealed(true), 0);
      return () => clearTimeout(id);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setRevealed(true);
            if (once) observer.disconnect();
          } else if (!once) {
            setRevealed(false);
          }
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -10% 0px' },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [once]);

  return (
    <Tag
      ref={ref}
      data-reveal=""
      data-revealed={revealed}
      className={className}
      style={delay ? ({ ['--reveal-delay']: `${delay}ms` } as React.CSSProperties) : undefined}
    >
      {children}
    </Tag>
  );
}
