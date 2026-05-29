import { Section, SectionHeading } from '@/components/Section';
import { Reveal } from '@/components/Reveal';
import { GOVERNANCE_INTRO, GOVERNANCE_ITEMS } from '@/lib/content';

export function Governance() {
  return (
    <Section id="governance">
      <SectionHeading {...GOVERNANCE_INTRO} />

      <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-4">
        {GOVERNANCE_ITEMS.map((item, i) => (
          <Reveal
            key={item.title}
            delay={(i % 4) * 70}
            className="bg-white p-6 transition-colors hover:bg-silver-50/60"
          >
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-navy/5 text-navy">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                <path d="M12 3 4 6v6c0 4.4 3.4 7.6 8 9 4.6-1.4 8-4.6 8-9V6l-8-3Z" />
              </svg>
            </span>
            <h3 className="mt-4 text-sm font-semibold text-navy">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{item.body}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
