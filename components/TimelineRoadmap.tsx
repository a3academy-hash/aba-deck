import { PATHWAY_PHASES } from '@/lib/content';
import { Reveal } from './Reveal';

/**
 * Vertical onboarding roadmap. A connecting spine runs through numbered phase
 * nodes; each phase lists its steps and an estimated-timeline badge.
 */
export function TimelineRoadmap() {
  return (
    <div className="relative mt-14">
      {/* Spine */}
      <span
        className="absolute left-[19px] top-2 bottom-2 w-px bg-gradient-to-b from-navy/30 via-silver-300 to-transparent sm:left-1/2 sm:-translate-x-1/2"
        aria-hidden="true"
      />

      <ol className="space-y-10">
        {PATHWAY_PHASES.map((phase, i) => (
          <Reveal
            key={phase.phase}
            delay={i * 70}
            as="li"
            className="relative grid grid-cols-[40px_1fr] gap-5 sm:grid-cols-2 sm:gap-10"
          >
            {/* Node */}
            <span className="relative z-10 grid h-10 w-10 place-items-center rounded-full border-2 border-navy bg-white text-sm font-bold text-navy sm:absolute sm:left-1/2 sm:-translate-x-1/2">
              {i + 1}
            </span>

            {/* Card — alternates side on desktop */}
            <div className={`card-surface p-6 sm:col-span-1 ${i % 2 === 0 ? 'sm:col-start-1' : 'sm:col-start-2'}`}>
              <div className="flex items-center justify-between gap-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-steel-deep">
                  {phase.phase}
                </span>
                <span className="chip bg-silver-100 text-[11px] text-steel-deep">{phase.timeline}</span>
              </div>
              <h3 className="mt-2 text-lg font-bold text-navy">{phase.title}</h3>
              <ul className="mt-4 space-y-2">
                {phase.steps.map((step) => (
                  <li key={step} className="flex items-start gap-2.5 text-sm text-muted">
                    <svg className="mt-0.5 h-4 w-4 shrink-0 text-navy/40" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M16.7 5.3a1 1 0 0 1 0 1.4l-7.5 7.5a1 1 0 0 1-1.4 0L3.3 9.7a1 1 0 1 1 1.4-1.4l3.1 3.1 6.8-6.8a1 1 0 0 1 1.4 0Z" clipRule="evenodd" />
                    </svg>
                    {step}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </ol>
    </div>
  );
}
