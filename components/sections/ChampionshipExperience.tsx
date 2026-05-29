import Image from 'next/image';
import { Section, SectionHeading } from '@/components/Section';
import { Reveal } from '@/components/Reveal';
import { CHAMPIONS_2026, CHAMPIONSHIP_BEATS, CHAMPIONSHIP_INTRO, CHAMPIONSHIP_VENUE } from '@/lib/content';

export function ChampionshipExperience() {
  return (
    <Section id="championship" dark>
      <SectionHeading {...CHAMPIONSHIP_INTRO} dark />

      {/* Reigning champions photo + venue grid */}
      <div className="mt-14 grid gap-4 lg:grid-cols-[1.6fr_1fr]">
        <Reveal className="group relative flex min-h-[360px] flex-col justify-end overflow-hidden rounded-2xl border border-white/10">
          <Image
            src={CHAMPIONS_2026.image}
            alt={CHAMPIONS_2026.alt}
            fill
            sizes="(max-width: 1024px) 100vw, 60vw"
            className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/40 to-transparent" aria-hidden="true" />
          <div className="relative p-7 sm:p-8">
            <span className="chip border border-white/20 bg-white/10 text-white backdrop-blur">
              {CHAMPIONS_2026.title}
            </span>
            <h3 className="display-2 mt-3 text-3xl text-white sm:text-4xl">{CHAMPIONS_2026.team}</h3>
          </div>
        </Reveal>

        <div className="grid grid-rows-2 gap-4">
          <Reveal className="relative flex flex-col justify-end overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-navy-700 to-navy-900 p-6">
            <div className="bg-grid absolute inset-0 opacity-50" aria-hidden="true" />
            <div className="relative">
              <span className="chip border border-white/15 bg-white/5 text-silver-200">Host venue</span>
              <div className="mt-3 flex items-center gap-3">
                <span className="h-11 w-11 shrink-0 overflow-hidden rounded-lg border border-white/10">
                  <Image src="/media/lakepoint.png" alt="LakePoint Sports logo" width={44} height={44} className="h-full w-full object-cover" />
                </span>
                <h3 className="text-2xl font-bold text-white">{CHAMPIONSHIP_VENUE.name}</h3>
              </div>
              <p className="mt-2 text-sm text-silver-200/80">{CHAMPIONSHIP_VENUE.location}</p>
              <p className="mt-1 text-xs text-silver-200/60">{CHAMPIONSHIP_VENUE.detail}</p>
            </div>
          </Reveal>
          <Reveal
            delay={100}
            className="relative flex items-end overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-tr from-graphite-900 to-navy-700 p-6"
          >
            <div className="bg-grid absolute inset-0 opacity-40" aria-hidden="true" />
            <span className="relative text-sm font-medium text-silver-200">Postseason under the lights</span>
            <span className="absolute right-5 top-5 text-[10px] uppercase tracking-widest text-steel">
              Image placeholder
            </span>
          </Reveal>
        </div>
      </div>

      {/* Timeline of marquee beats */}
      <div className="mt-14">
        <ol className="relative grid gap-8 sm:grid-cols-5 sm:gap-4">
          {/* connecting line on desktop */}
          <span
            className="absolute left-0 right-0 top-5 hidden h-px bg-gradient-to-r from-transparent via-white/20 to-transparent sm:block"
            aria-hidden="true"
          />
          {CHAMPIONSHIP_BEATS.map((beat, i) => (
            <Reveal key={beat.title} delay={i * 90} as="li" className="relative">
              <span className="relative z-10 grid h-10 w-10 place-items-center rounded-full border border-white/20 bg-navy-900 text-sm font-bold text-white">
                {i + 1}
              </span>
              <h4 className="mt-4 text-base font-semibold text-white">{beat.title}</h4>
              <p className="mt-1 text-sm leading-relaxed text-silver-200/70">{beat.body}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </Section>
  );
}
