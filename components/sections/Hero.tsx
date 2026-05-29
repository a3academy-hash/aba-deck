import Image from 'next/image';
import { HERO } from '@/lib/content';

/**
 * Fullscreen cinematic hero. Layers a championship photo behind a dark
 * navy gradient + grid for a premium, editorial feel. Drop a file at
 * /public/hero.mp4 later to swap in motion footage over the same treatment.
 */
export function Hero() {
  return (
    <section id="hero" className="relative isolate flex min-h-screen items-center overflow-hidden bg-navy-900 text-white">
      {/* Background photo */}
      <Image
        src="/champs.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover object-center opacity-55"
      />

      {/* Layered atmosphere — darkens the photo so text stays legible */}
      <div className="absolute inset-0 -z-10 bg-grid opacity-40" aria-hidden="true" />
      <div className="hero-spotlight absolute inset-0 -z-10" aria-hidden="true" />
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-r from-navy-900 via-navy-900/85 to-navy-900/45"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-t from-navy-900 via-transparent to-navy-900/40"
        aria-hidden="true"
      />

      <div className="mx-auto w-full max-w-6xl px-5 py-28 sm:px-8">
        <div className="max-w-3xl">
          <span
            className="chip mb-7 animate-[fade-in_0.8s_var(--ease-premium)_both] border border-white/15 bg-white/5 text-silver-200 backdrop-blur"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            {HERO.kicker}
          </span>

          <h1 className="display-1 text-white [animation:fade-up_0.9s_var(--ease-premium)_both]">
            {HERO.title}
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-silver-200 [animation:fade-up_1s_var(--ease-premium)_0.1s_both] sm:text-xl">
            {HERO.subtitle}
          </p>

          <div className="mt-10 flex flex-col gap-3 [animation:fade-up_1.05s_var(--ease-premium)_0.2s_both] sm:flex-row sm:items-center">
            <a href={HERO.primaryCta.href} className="btn btn-light">
              {HERO.primaryCta.label}
            </a>
            <a href={HERO.secondaryCta.href} className="btn btn-ghost">
              {HERO.secondaryCta.label}
            </a>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-steel [animation:fade-in_2s_ease_1s_both]">
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
          <span className="h-10 w-px animate-[float_2.4s_ease-in-out_infinite] bg-gradient-to-b from-steel to-transparent" />
        </div>
      </div>
    </section>
  );
}
