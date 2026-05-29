import { Section, SectionHeading } from '@/components/Section';
import { Reveal } from '@/components/Reveal';
import { COMPARISON_ROWS, WHY_ABA_INTRO, WHY_ABA_PILLARS } from '@/lib/content';

export function WhyABA() {
  return (
    <Section id="why-aba">
      <SectionHeading {...WHY_ABA_INTRO} />

      {/* Pillars */}
      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {WHY_ABA_PILLARS.map((p, i) => (
          <Reveal key={p.title} delay={i * 80} className="card-surface p-6">
            <div className="mb-4 grid h-10 w-10 place-items-center rounded-lg bg-navy/5 text-navy">
              <span className="text-lg font-bold">{i + 1}</span>
            </div>
            <h3 className="text-base font-semibold text-navy">{p.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{p.body}</p>
          </Reveal>
        ))}
      </div>

      {/* Comparison: Traditional vs ABA */}
      <Reveal className="mt-16">
        <div className="overflow-hidden rounded-2xl border border-hairline">
          {/* Header row */}
          <div className="grid grid-cols-[1.2fr_1fr_1fr] bg-silver-50">
            <div className="px-5 py-4 text-xs font-semibold uppercase tracking-wider text-steel-deep sm:px-7">
              Dimension
            </div>
            <div className="border-l border-hairline px-5 py-4 text-xs font-semibold uppercase tracking-wider text-muted sm:px-7">
              Traditional Associations
            </div>
            <div className="border-l border-hairline bg-navy px-5 py-4 text-xs font-semibold uppercase tracking-wider text-white sm:px-7">
              ABA
            </div>
          </div>
          {COMPARISON_ROWS.map((row, i) => (
            <div
              key={row.dimension}
              className={`grid grid-cols-[1.2fr_1fr_1fr] ${i % 2 ? 'bg-silver-50/40' : 'bg-white'}`}
            >
              <div className="px-5 py-4 text-sm font-semibold text-navy sm:px-7">{row.dimension}</div>
              <div className="border-l border-hairline px-5 py-4 text-sm text-muted sm:px-7">
                {row.traditional}
              </div>
              <div className="border-l border-hairline bg-navy/[0.03] px-5 py-4 text-sm font-medium text-navy sm:px-7">
                <span className="inline-flex items-start gap-2">
                  <svg className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.7 5.3a1 1 0 0 1 0 1.4l-7.5 7.5a1 1 0 0 1-1.4 0L3.3 9.7a1 1 0 1 1 1.4-1.4l3.1 3.1 6.8-6.8a1 1 0 0 1 1.4 0Z" clipRule="evenodd" />
                  </svg>
                  {row.aba}
                </span>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-4 text-xs text-steel">
          Comparison reflects structural differences in operating model, not a judgement of any specific organization.
        </p>
      </Reveal>
    </Section>
  );
}
