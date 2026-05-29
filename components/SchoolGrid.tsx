import Image from 'next/image';
import { FOUNDING_SCHOOLS } from '@/lib/content';
import { Reveal } from './Reveal';

/**
 * Premium logo/profile wall for founding member schools. Each tile shows a
 * placeholder monogram today (real logos drop in later), structured so it can
 * become a clickable profile. The 2026 champion is flagged distinctly.
 */
export function SchoolGrid() {
  return (
    <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
      {FOUNDING_SCHOOLS.map((school, i) => {
        const monogram = school.name
          .split(' ')
          .map((w) => w[0])
          .join('')
          .slice(0, 3)
          .toUpperCase();
        return (
          <Reveal
            key={school.name}
            delay={(i % 4) * 60}
            className={`card-surface flex flex-col p-6 ${
              school.championships?.length ? 'ring-1 ring-amber-300/50' : ''
            }`}
          >
            <div className="flex items-center gap-3">
              {school.logo ? (
                <span className="h-12 w-12 shrink-0 overflow-hidden rounded-xl border border-hairline">
                  <Image
                    src={school.logo}
                    alt={`${school.name} logo`}
                    width={48}
                    height={48}
                    className="h-full w-full object-cover"
                  />
                </span>
              ) : (
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-navy text-xs font-bold tracking-tight text-white">
                  {monogram}
                </span>
              )}
              <span className="min-w-0">
                <span className="block text-sm font-semibold leading-tight text-navy">{school.name}</span>
                <span className="mt-0.5 block truncate text-xs text-muted">
                  {school.location ?? 'Location to be announced'}
                </span>
              </span>
            </div>

            {school.championships?.length ? (
              <div className="mt-4 flex flex-wrap gap-1.5">
                {school.championships.map((c) => (
                  <span
                    key={c}
                    className="inline-flex items-center gap-1 rounded-full bg-amber-400/15 px-2.5 py-1 text-[10px] font-semibold text-amber-700"
                  >
                    <svg className="h-3 w-3" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M5 4h14v3a4 4 0 0 1-4 4h-.4a3 3 0 0 1-2.6 1.9V16h2a1 1 0 0 1 0 2H8a1 1 0 0 1 0-2h2v-3.1A3 3 0 0 1 7.4 11H7a4 4 0 0 1-4-4V4h2Z" />
                    </svg>
                    2026 {c} Champion
                  </span>
                ))}
              </div>
            ) : null}

            <div className="mt-4 flex flex-wrap gap-1.5">
              {school.divisions.map((d) => (
                <span key={d} className="chip bg-silver-100 text-[10px] text-steel-deep">
                  {d}
                </span>
              ))}
            </div>
            <span className="mt-4 text-[10px] uppercase tracking-wider text-steel">
              {school.membership ?? 'Founding Member'}
            </span>
          </Reveal>
        );
      })}
    </div>
  );
}
