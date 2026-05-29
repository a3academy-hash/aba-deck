import { Section, SectionHeading } from '@/components/Section';
import { Reveal } from '@/components/Reveal';
import { StatCounter } from '@/components/StatCounter';
import { INFRASTRUCTURE_CARDS, INFRASTRUCTURE_INTRO, INFRASTRUCTURE_STATS } from '@/lib/content';

export function CompetitiveInfrastructure() {
  return (
    <Section id="infrastructure" dark>
      <SectionHeading {...INFRASTRUCTURE_INTRO} dark />

      {/* Headline stat counters */}
      <Reveal className="mt-14 grid grid-cols-2 gap-8 border-y border-white/10 py-10 lg:grid-cols-4">
        {INFRASTRUCTURE_STATS.map((s) => (
          <div key={s.label} className="text-center sm:text-left">
            <div className="display-2 tabular-nums text-white">
              <StatCounterDark {...s} />
            </div>
          </div>
        ))}
      </Reveal>

      {/* Capability cards */}
      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {INFRASTRUCTURE_CARDS.map((c, i) => (
          <Reveal
            key={c.title}
            delay={(i % 4) * 70}
            className="group rounded-xl border border-white/10 bg-white/[0.03] p-6 transition-colors duration-300 hover:border-white/25 hover:bg-white/[0.06]"
          >
            <h3 className="text-base font-semibold text-white">{c.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-silver-200/80">{c.body}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/** Dark-on-navy variant wrapper so StatCounter inherits white text. */
function StatCounterDark(props: React.ComponentProps<typeof StatCounter>) {
  return (
    <div className="[&_.text-navy]:text-white [&_.text-muted]:text-silver-200/80 [&_.text-steel]:text-steel">
      <StatCounter {...props} />
    </div>
  );
}
