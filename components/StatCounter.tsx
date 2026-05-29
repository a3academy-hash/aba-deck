'use client';

import { useEffect, useRef, useState } from 'react';

type StatCounterProps = {
  value: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  /** Override the rendered final string (e.g. fixed display like "4"). */
  display?: string;
  label: string;
  note?: string;
  durationMs?: number;
};

/**
 * Animated stat counter. Counts from 0 to `value` using requestAnimationFrame
 * with an ease-out curve, triggered once the element scrolls into view.
 * Honors prefers-reduced-motion by snapping to the final value.
 */
export function StatCounter({
  value,
  suffix = '',
  prefix = '',
  decimals = 0,
  display,
  label,
  note,
  durationMs = 1600,
}: StatCounterProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [current, setCurrent] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce =
      typeof window !== 'undefined' &&
      window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

    const run = () => {
      if (started.current) return;
      started.current = true;

      if (reduce || typeof requestAnimationFrame === 'undefined') {
        setCurrent(value);
        return;
      }

      let startTs: number | null = null;
      const tick = (ts: number) => {
        if (startTs === null) startTs = ts;
        const progress = Math.min((ts - startTs) / durationMs, 1);
        // ease-out cubic
        const eased = 1 - Math.pow(1 - progress, 3);
        setCurrent(value * eased);
        if (progress < 1) requestAnimationFrame(tick);
        else setCurrent(value);
      };
      requestAnimationFrame(tick);
    };

    if (typeof IntersectionObserver === 'undefined') {
      run();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            run();
            observer.disconnect();
          }
        }
      },
      { threshold: 0.4 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [value, durationMs]);

  const rendered =
    display ?? `${prefix}${current.toLocaleString('en-US', {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    })}${suffix}`;

  return (
    <div ref={ref} className="text-center sm:text-left">
      <div className="display-2 text-navy tabular-nums">{rendered}</div>
      <div className="mt-2 text-sm font-medium text-muted">{label}</div>
      {note && (
        <div className="mt-1 text-[10px] uppercase tracking-wider text-steel">{note}</div>
      )}
    </div>
  );
}
