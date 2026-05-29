'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { NAV_SECTIONS } from '@/lib/nav';

/**
 * Floating left-side navigation with active-section highlighting.
 *
 * Active tracking uses a single IntersectionObserver across all section
 * elements; the section nearest the top of the viewport wins. On small
 * screens the rail collapses into a slim progress dock at the bottom.
 */
export function SideNav() {
  const [active, setActive] = useState<string>(NAV_SECTIONS[0].id);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const sections = NAV_SECTIONS
      .map((s) => document.getElementById(s.id))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const visible = new Map<string, number>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) visible.set(entry.target.id, entry.intersectionRatio);
          else visible.delete(entry.target.id);
        }
        // pick the most-visible section currently intersecting
        let best: string | null = null;
        let bestRatio = 0;
        for (const [id, ratio] of visible) {
          if (ratio > bestRatio) {
            best = id;
            bestRatio = ratio;
          }
        }
        if (best) setActive(best);
      },
      { rootMargin: '-20% 0px -55% 0px', threshold: [0.1, 0.25, 0.5, 0.75] },
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Desktop floating rail */}
      <nav
        aria-label="Section navigation"
        className="fixed left-0 top-0 z-40 hidden h-screen w-64 flex-col justify-center px-8 lg:flex"
      >
        <a href="#hero" className="mb-8 flex items-center gap-2.5">
          <Image
            src="/aba_logo_transparent.png"
            alt="Academy Baseball Association"
            width={48}
            height={48}
            priority
            className="h-11 w-auto"
          />
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-steel-deep">
            Membership
          </span>
        </a>
        <ul className="space-y-1">
          {NAV_SECTIONS.map((s) => {
            const isActive = active === s.id;
            return (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className="group flex items-center gap-3 py-1.5 text-sm transition-colors"
                  aria-current={isActive ? 'true' : undefined}
                >
                  <span
                    className={`h-px transition-all duration-300 ${
                      isActive ? 'w-7 bg-navy' : 'w-3 bg-silver-300 group-hover:w-5 group-hover:bg-steel'
                    }`}
                  />
                  <span
                    className={`transition-colors ${
                      isActive ? 'font-semibold text-navy' : 'text-muted group-hover:text-navy'
                    }`}
                  >
                    {s.short ?? s.label}
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Mobile top bar */}
      <div className="fixed inset-x-0 top-0 z-50 flex items-center justify-between border-b border-hairline bg-white/85 px-4 py-3 backdrop-blur lg:hidden">
        <a href="#hero" className="flex items-center gap-2">
          <Image
            src="/aba_logo_transparent.png"
            alt="Academy Baseball Association"
            width={36}
            height={36}
            priority
            className="h-9 w-auto"
          />
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-steel-deep">
            Membership
          </span>
        </a>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="tap-target -mr-2 flex items-center gap-2 px-2 text-sm font-medium text-navy"
          aria-expanded={open}
          aria-controls="mobile-nav-menu"
        >
          {open ? 'Close' : 'Menu'}
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {open && (
        <div
          id="mobile-nav-menu"
          className="fixed inset-x-0 top-[57px] z-40 max-h-[70vh] overflow-y-auto border-b border-hairline bg-white px-4 py-3 shadow-lg lg:hidden"
        >
          <ul className="grid grid-cols-2 gap-1">
            {NAV_SECTIONS.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  onClick={() => setOpen(false)}
                  className={`block rounded-lg px-3 py-2 text-sm ${
                    active === s.id ? 'bg-silver-100 font-semibold text-navy' : 'text-muted'
                  }`}
                >
                  {s.short ?? s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
