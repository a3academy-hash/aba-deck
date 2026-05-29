import Image from 'next/image';
import { TECH_INTEGRATIONS, type TechIntegration } from '@/lib/content';
import { Reveal } from './Reveal';

/**
 * Radial technology ecosystem: the ABA mark at the center with integrations
 * orbiting around it. Node positions are computed deterministically from each
 * item's index (evenly spaced on a circle). Collapses to a clean grid on small
 * screens where an orbital layout would be cramped.
 */

/** Logo(s) for a node — supports a single logo or a paired set (e.g. media). */
function NodeLogos({ tech }: { tech: TechIntegration }) {
  if (tech.logos) {
    return (
      <div className="flex items-center gap-1.5">
        {tech.logos.map((src) => (
          <Image
            key={src}
            src={src}
            alt={`${tech.name} logo`}
            width={40}
            height={40}
            className="h-10 w-10 rounded-lg object-cover"
          />
        ))}
      </div>
    );
  }
  if (tech.logo) {
    return (
      <Image
        src={tech.logo}
        alt={`${tech.name} logo`}
        width={48}
        height={48}
        className="h-12 w-12 rounded-lg object-cover"
      />
    );
  }
  return null;
}

const Center = ({ size }: { size: string }) => (
  <div className={`grid ${size} place-items-center rounded-full bg-white shadow-xl shadow-navy/20 ring-1 ring-hairline`}>
    <Image src="/aba_logo_transparent.png" alt="Academy Baseball Association" width={88} height={88} className="h-3/4 w-auto" />
  </div>
);

export function EcosystemMap() {
  const n = TECH_INTEGRATIONS.length;

  return (
    <>
      {/* Orbital layout — large screens */}
      <Reveal className="relative mx-auto mt-14 hidden aspect-square w-full max-w-[640px] lg:block">
        {/* Orbit rings */}
        {[0.95, 0.66, 0.36].map((scale) => (
          <span
            key={scale}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-hairline"
            style={{ width: `${scale * 100}%`, height: `${scale * 100}%` }}
            aria-hidden="true"
          />
        ))}

        {/* Center node */}
        <div className="absolute left-1/2 top-1/2 z-10 h-28 w-28 -translate-x-1/2 -translate-y-1/2">
          <Center size="h-28 w-28" />
        </div>

        {/* Orbiting integration nodes */}
        {TECH_INTEGRATIONS.map((tech, i) => {
          // start at top (-90deg), distribute evenly
          const angle = (i / n) * 2 * Math.PI - Math.PI / 2;
          const radius = 46; // % of container from center
          const x = 50 + radius * Math.cos(angle);
          const y = 50 + radius * Math.sin(angle);
          return (
            <div
              key={tech.name}
              className="group absolute z-10 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center"
              style={{ left: `${x}%`, top: `${y}%` }}
            >
              <div className="card-surface flex flex-col items-center gap-1.5 px-4 py-3 text-center">
                <NodeLogos tech={tech} />
                <span className="text-sm font-semibold text-navy">{tech.name}</span>
                <span className="text-[10px] uppercase tracking-wider text-steel">{tech.category}</span>
              </div>
            </div>
          );
        })}
      </Reveal>

      {/* Grid fallback — small screens */}
      <div className="mt-12 lg:hidden">
        <div className="mx-auto mb-6 h-20 w-20">
          <Center size="h-20 w-20" />
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {TECH_INTEGRATIONS.map((tech, i) => (
            <Reveal
              key={tech.name}
              delay={i * 50}
              className="card-surface flex flex-col items-center gap-1.5 px-4 py-3 text-center"
            >
              <NodeLogos tech={tech} />
              <span className="block text-sm font-semibold text-navy">{tech.name}</span>
              <span className="text-[10px] uppercase tracking-wider text-steel">{tech.category}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </>
  );
}
