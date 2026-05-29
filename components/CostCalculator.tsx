'use client';

import { useState } from 'react';

/**
 * Academy season-budget estimator. Scopes to costs the ACADEMY is responsible
 * for — the annual per-team fee plus travel. The $195 per-player registration
 * is paid directly by each player, so it is intentionally excluded here. The
 * one-time $5,000 initiation fee is also excluded (not annual).
 *   - Annual per-team fee: $2,500 (average)
 *   - Travel: team-covered; a charter bus trip runs ~$3,000–$9,000
 */
const TEAM_FEE = 2500;
const BUS_LOW = 3000;
const BUS_HIGH = 9000;

const usd = (n: number) => n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });

export function CostCalculator() {
  const [trips, setTrips] = useState(4);

  const travelLow = trips * BUS_LOW;
  const travelHigh = trips * BUS_HIGH;
  const totalLow = TEAM_FEE + travelLow;
  const totalHigh = TEAM_FEE + travelHigh;

  return (
    <div className="card-surface p-7 sm:p-9">
      <div className="flex items-center justify-between gap-3">
        <h3 className="text-lg font-semibold text-navy">Estimate your academy budget</h3>
        <span className="chip bg-silver-100 text-[10px] text-steel-deep">Estimate</span>
      </div>

      <label className="mt-6 block">
        <span className="flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-steel-deep">
          Road trips per team
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

      <dl className="mt-7 space-y-3 border-t border-hairline pt-5">
        <div className="flex items-baseline justify-between gap-2">
          <dt className="text-sm text-muted">
            Annual per-team fee
            <span className="block text-xs text-steel">Flat, per team</span>
          </dt>
          <dd className="text-2xl font-bold tabular-nums text-navy">{usd(TEAM_FEE)}</dd>
        </div>
        <div className="flex items-baseline justify-between gap-2">
          <dt className="text-sm text-muted">
            Estimated travel
            <span className="block text-xs text-steel">{trips} trip{trips === 1 ? '' : 's'} × $3k–$9k charter bus</span>
          </dt>
          <dd className="text-2xl font-bold tabular-nums text-navy">
            {trips === 0 ? usd(0) : `${usd(travelLow)}–${usd(travelHigh)}`}
          </dd>
        </div>
        <div className="flex items-baseline justify-between gap-2 border-t border-hairline pt-3">
          <dt className="text-sm font-semibold text-navy">Estimated academy budget</dt>
          <dd className="text-2xl font-bold tabular-nums text-navy">
            {trips === 0 ? usd(TEAM_FEE) : `${usd(totalLow)}–${usd(totalHigh)}`}
          </dd>
        </div>
      </dl>

      <p className="mt-4 text-xs text-steel">
        Academy costs only. The $195 per-player registration is paid directly by each player (not the academy),
        and the one-time $5,000 league initiation fee is excluded. Estimate varies by division and travel method.
      </p>
    </div>
  );
}
