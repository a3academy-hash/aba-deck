'use client';

import { useState } from 'react';

/**
 * Future-ready cost estimator placeholder. The math here is illustrative only
 * (clearly labeled) — a production version would pull real per-division rates,
 * event fees, and travel models. Kept self-contained so it can later be wired
 * to live pricing data without changing the surrounding section.
 */
const DIVISION_BASE: Record<string, number> = {
  Premier: 4200,
  Varsity: 2800,
  'JV / Middle School': 1600,
};
const PER_TRIP = 1100; // illustrative blended travel + lodging per road trip

export function CostCalculator() {
  const [division, setDivision] = useState('Premier');
  const [trips, setTrips] = useState(5);

  const annual = DIVISION_BASE[division] + trips * PER_TRIP;
  const formatted = annual.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });

  return (
    <div className="card-surface p-7 sm:p-9">
      <div className="flex items-center justify-between gap-3">
        <h3 className="text-lg font-semibold text-navy">Estimate your season</h3>
        <span className="chip bg-silver-100 text-[10px] text-steel-deep">Illustrative</span>
      </div>

      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        <label className="block">
          <span className="text-xs font-semibold uppercase tracking-wider text-steel-deep">Division</span>
          <select
            value={division}
            onChange={(e) => setDivision(e.target.value)}
            className="tap-target mt-2 w-full rounded-lg border border-silver-200 bg-white px-3 text-sm text-navy focus:border-navy focus:outline-none"
          >
            {Object.keys(DIVISION_BASE).map((d) => (
              <option key={d} value={d}>
                {d}
              </option>
            ))}
          </select>
        </label>

        <label className="block">
          <span className="flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-steel-deep">
            Road trips
            <span className="text-navy">{trips}</span>
          </span>
          <input
            type="range"
            min={0}
            max={8}
            value={trips}
            onChange={(e) => setTrips(Number(e.target.value))}
            className="mt-3 w-full accent-[var(--color-navy)]"
          />
        </label>
      </div>

      <div className="mt-7 flex flex-wrap items-baseline justify-between gap-2 border-t border-hairline pt-5">
        <span className="text-sm text-muted">Estimated annual team fees</span>
        <span className="display-2 text-3xl tabular-nums text-navy">{formatted}</span>
      </div>
      <p className="mt-3 text-xs text-steel">
        Placeholder estimate for illustration only. Excludes the one-time initiation fee and is not a quote —
        request a budget projection for figures specific to your program.
      </p>
    </div>
  );
}
