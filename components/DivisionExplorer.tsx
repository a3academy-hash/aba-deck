'use client';

import { useState } from 'react';
import { DIVISIONS, type Division } from '@/lib/content';

const DETAIL_ROWS: { key: keyof Division; label: string }[] = [
  { key: 'level', label: 'Competition level' },
  { key: 'roster', label: 'Typical roster' },
  { key: 'travel', label: 'Travel expectations' },
  { key: 'games', label: 'Projected games' },
  { key: 'hotelNights', label: 'Hotel night estimate' },
  { key: 'recruiting', label: 'Recruiting visibility' },
  { key: 'postseason', label: 'Postseason access' },
];

/**
 * Interactive division explorer with animated tabs. Selecting a division
 * cross-fades its detail panel. Pure CSS transitions, keyboard accessible.
 */
export function DivisionExplorer() {
  const [activeId, setActiveId] = useState(DIVISIONS[0].id);
  const active = DIVISIONS.find((d) => d.id === activeId) ?? DIVISIONS[0];

  return (
    <div className="mt-12 grid gap-6 lg:grid-cols-[280px_1fr]">
      {/* Tabs */}
      <div
        role="tablist"
        aria-label="ABA divisions"
        className="flex gap-2 overflow-x-auto scrollbar-thin lg:flex-col lg:overflow-visible"
      >
        {DIVISIONS.map((d) => {
          const isActive = d.id === activeId;
          return (
            <button
              key={d.id}
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveId(d.id)}
              className={`tap-target group flex shrink-0 flex-col items-start rounded-xl border px-5 py-4 text-left transition-all duration-300 lg:w-full ${
                isActive
                  ? 'border-navy bg-navy text-white shadow-lg shadow-navy/20'
                  : 'border-hairline bg-white text-navy hover:border-steel'
              }`}
            >
              <span className="flex w-full items-center justify-between gap-3">
                <span className="text-base font-semibold">{d.name}</span>
                {d.future && (
                  <span
                    className={`chip text-[10px] ${
                      isActive ? 'bg-white/15 text-white' : 'bg-silver-100 text-steel-deep'
                    }`}
                  >
                    Future
                  </span>
                )}
              </span>
              <span className={`mt-1 text-xs ${isActive ? 'text-silver-200' : 'text-muted'}`}>
                {d.tagline}
              </span>
            </button>
          );
        })}
      </div>

      {/* Detail panel */}
      <div key={active.id} className="card-surface p-7 [animation:fade-up_0.45s_var(--ease-premium)_both] sm:p-9">
        <div className="flex flex-wrap items-center gap-3">
          <h3 className="display-2 text-3xl text-navy sm:text-4xl">{active.name}</h3>
          {active.future && <span className="chip bg-silver-100 text-steel-deep">Future division</span>}
        </div>
        <p className="mt-2 text-muted">{active.tagline}</p>

        <dl className="mt-7 grid gap-x-8 gap-y-5 sm:grid-cols-2">
          {DETAIL_ROWS.map((row) => (
            <div key={row.key} className="border-t border-hairline pt-3">
              <dt className="text-xs font-semibold uppercase tracking-wider text-steel-deep">
                {row.label}
              </dt>
              <dd className="mt-1 text-sm font-medium text-navy">{active[row.key] as string}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
