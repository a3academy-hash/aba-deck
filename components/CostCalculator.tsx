'use client';

import { useState } from 'react';

/**
 * Season cost estimator using the league's real fees:
 *   - Annual per-team fee: $2,500 (average)
 *   - Per-player registration: $195
 *   - Travel: team-covered; a charter bus trip runs ~$3,000–$9,000
 * The one-time $5,000 initiation fee is shown separately (not annual).
 */
const TEAM_FEE = 2500;
const PLAYER_FEE = 195;
const BUS_LOW = 3000;
const BUS_HIGH = 9000;

const usd = (n: number) => n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });

export function CostCalculator() {
  const [players, setPlayers] = useState(18);
  const [trips, setTrips] = useState(4);

  const leagueFees = TEAM_FEE + players * PLAYER_FEE;
  const travelLow = trips * BUS_LOW;
  const travelHigh = trips * BUS_HIGH;

  return (
    <div className="card-surface p-7 sm:p-9">
      <div className="flex items-center justify-between gap-3">
        <h3 className="text-lg font-semibold text-navy">Estimate your season</h3>
        <span className="chip bg-silver-100 text-[10px] text-steel-deep">Estimate</span>
      </div>

      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        <label className="block">
          <span className="flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-steel-deep">
            Roster size
            <span className="text-navy">{players} players</span>
          </span>
          <input
            type="range"
            min={10}
            max={35}
            value={players}
            onChange={(e) => setPlayers(Number(e.target.value))}
            className="mt-3 w-full accent-[var(--color-navy)]"
          />
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

      <dl className="mt-7 space-y-3 border-t border-hairline pt-5">
        <div className="flex items-baseline justify-between gap-2">
          <dt className="text-sm text-muted">
            Annual league fees
            <span className="block text-xs text-steel">$2,500 team + ${PLAYER_FEE}/player</span>
          </dt>
          <dd className="text-2xl font-bold tabular-nums text-navy">{usd(leagueFees)}</dd>
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
      </dl>

      <p className="mt-4 text-xs text-steel">
        Estimate only — excludes the one-time $5,000 league initiation fee and varies by division, events, and
        travel method. Request a budget projection for figures specific to your program.
      </p>
    </div>
  );
}
