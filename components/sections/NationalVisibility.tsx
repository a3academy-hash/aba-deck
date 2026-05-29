import Image from 'next/image';
import { Section, SectionHeading } from '@/components/Section';
import { Reveal } from '@/components/Reveal';
import { StatCounter } from '@/components/StatCounter';
import { INSTAGRAM, MEDIA_PARTNERS, SOCIALS, VISIBILITY_INTRO, VISIBILITY_STATS } from '@/lib/content';

const SOCIAL_CHANNELS = [
  {
    name: 'Instagram',
    handle: INSTAGRAM.handle,
    sub: 'Follow the ABA on Instagram',
    href: INSTAGRAM.url,
    badge: 'bg-gradient-to-br from-[#feda75] via-[#d62976] to-[#4f5bd5]',
    panel: 'from-[#feda75]/15 via-[#d62976]/10 to-[#4f5bd5]/15',
    glyph: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    name: 'X',
    handle: '@aba_hq',
    sub: 'Follow the ABA on X',
    href: SOCIALS.x,
    badge: 'bg-black',
    panel: 'from-graphite-800/10 to-graphite-800/5',
    glyph: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.66l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231L18.244 2.25Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
      </svg>
    ),
  },
  {
    name: 'Facebook',
    handle: 'Academy Baseball Association',
    sub: 'Follow the ABA on Facebook',
    href: SOCIALS.facebook,
    badge: 'bg-[#1877F2]',
    panel: 'from-[#1877F2]/12 to-[#1877F2]/5',
    glyph: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M24 12.07C24 5.41 18.63 0 12 0S0 5.4 0 12.07c0 6.02 4.39 11.01 10.13 11.93v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.69.24 2.69.24v2.97h-1.52c-1.49 0-1.96.93-1.96 1.89v2.25h3.33l-.53 3.49h-2.8V24C19.61 23.08 24 18.1 24 12.07Z" />
      </svg>
    ),
  },
];

export function NationalVisibility() {
  return (
    <Section id="national-visibility">
      <SectionHeading {...VISIBILITY_INTRO} />

      {/* Massive stat counters */}
      <div className="mt-14 grid grid-cols-2 gap-x-8 gap-y-12 lg:grid-cols-4">
        {VISIBILITY_STATS.map((s, i) => (
          <Reveal key={s.label} delay={i * 90}>
            <StatCounter {...s} />
          </Reveal>
        ))}
      </div>

      {/* Media partners */}
      <Reveal className="mt-16">
        <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-steel-deep">
          League &amp; media partners
        </h3>
        <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {MEDIA_PARTNERS.map((p) => (
            <div
              key={p.name}
              className="flex h-28 flex-col items-center justify-center gap-2 rounded-xl border border-hairline bg-white px-4 text-center transition-colors hover:border-steel"
            >
              {p.logo ? (
                <Image
                  src={p.logo}
                  alt={`${p.name} logo`}
                  width={44}
                  height={44}
                  className="h-11 w-11 rounded-lg object-cover"
                />
              ) : (
                <span className="grid h-11 w-11 place-items-center rounded-lg bg-silver-100 text-sm font-bold text-steel-deep">
                  {p.name.split(' ').map((w) => w[0]).join('').slice(0, 2)}
                </span>
              )}
              <span className="text-xs font-semibold leading-tight text-navy">{p.name}</span>
              {p.status === 'future' && (
                <span className="chip bg-silver-100 text-[10px] text-steel-deep">Future</span>
              )}
            </div>
          ))}
        </div>
      </Reveal>

      {/* Official social channels */}
      <Reveal className="mt-12 grid gap-4 sm:grid-cols-3">
        {SOCIAL_CHANNELS.map((c) => {
          const inner = (
            <>
              <span className={`grid h-12 w-12 place-items-center rounded-2xl text-white shadow-lg ${c.badge}`}>
                {c.glyph}
              </span>
              <span className="text-sm font-semibold text-navy">{c.handle}</span>
              <span className="text-xs text-steel">{c.href ? c.sub : 'Link coming soon'}</span>
            </>
          );
          const cls = `group relative flex aspect-[4/3] flex-col items-center justify-center gap-3 overflow-hidden rounded-2xl border border-hairline bg-gradient-to-br ${c.panel} text-center`;
          return c.href ? (
            <a
              key={c.name}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`${cls} transition-transform duration-300 hover:-translate-y-1`}
            >
              {inner}
            </a>
          ) : (
            <div key={c.name} className={cls} aria-label={`${c.name} — link coming soon`}>
              {inner}
            </div>
          );
        })}
      </Reveal>
    </Section>
  );
}
