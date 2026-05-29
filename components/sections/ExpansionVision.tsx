import { Section, SectionHeading } from '@/components/Section';
import { Reveal } from '@/components/Reveal';
import { EXPANSION_INTRO, EXPANSION_PILLARS } from '@/lib/content';

export function ExpansionVision() {
  return (
    <Section id="expansion" dark>
      <SectionHeading {...EXPANSION_INTRO} dark />

      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {EXPANSION_PILLARS.map((p, i) => (
          <Reveal
            key={p.title}
            delay={(i % 3) * 80}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition-colors hover:border-white/25"
          >
            <span className="text-xs font-semibold tabular-nums text-steel">
              {String(i + 1).padStart(2, '0')}
            </span>
            <h3 className="mt-3 text-lg font-semibold text-white">{p.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-silver-200/80">{p.body}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
