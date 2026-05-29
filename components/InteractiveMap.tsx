'use client';

import Image from 'next/image';
import { useState } from 'react';
import { FOUNDING_SCHOOLS, type FoundingSchool } from '@/lib/content';
import { MAP_ASPECT_K, MAP_BBOX, MAP_VIEWBOX, STATE_PATHS } from '@/lib/mapGeo';

/**
 * Founding-members locator over a real Southeast-US basemap.
 *
 * `lib/mapGeo.ts` is auto-generated from public-domain US-states GeoJSON,
 * projected (equirectangular + cos-lat aspect correction) onto a fixed
 * viewBox. We re-run the IDENTICAL projection here for the school markers, so
 * every dot sits on the correct spot of the rendered states. No map library —
 * the geometry is baked in at author time.
 */

const { w: VW, h: VH } = MAP_VIEWBOX;
const wLng = (MAP_BBOX.lngMax - MAP_BBOX.lngMin) * MAP_ASPECT_K;
const hLat = MAP_BBOX.latMax - MAP_BBOX.latMin;
const px = (lng: number) => (((lng - MAP_BBOX.lngMin) * MAP_ASPECT_K) / wLng) * VW;
const py = (lat: number) => ((MAP_BBOX.latMax - lat) / hLat) * VH;

// Orientation labels at approximate state-interior points.
const STATE_LABELS = [
  { t: 'FLA.', lat: 28.1, lng: -81.8 },
  { t: 'GA.', lat: 32.7, lng: -83.4 },
  { t: 'S.C.', lat: 34.1, lng: -80.9 },
  { t: 'ALA.', lat: 32.8, lng: -86.9 },
  { t: 'N.C.', lat: 35.5, lng: -79.4 },
  { t: 'TENN.', lat: 35.9, lng: -86.3 },
  { t: 'VA.', lat: 37.6, lng: -78.7 },
];

const mapped = FOUNDING_SCHOOLS.filter(
  (s): s is FoundingSchool & { lat: number; lng: number } => s.lat != null && s.lng != null,
);
const unmapped = FOUNDING_SCHOOLS.filter((s) => s.lat == null || s.lng == null);

export function InteractiveMap() {
  const [selected, setSelected] = useState<string>('Georgia Premier Academy');
  const active = mapped.find((s) => s.name === selected) ?? mapped[0];

  return (
    <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_360px]">
      {/* Basemap */}
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-navy-900">
        <div className="hero-spotlight pointer-events-none absolute inset-0 opacity-50" aria-hidden="true" />
        <span className="absolute left-4 top-4 z-10 text-[10px] font-semibold uppercase tracking-[0.2em] text-steel">
          Founding members · East Coast
        </span>

        <svg
          viewBox={`0 0 ${VW} ${VH}`}
          className="block h-auto w-full"
          role="img"
          aria-label="Map of founding member academies across the Southeast United States"
        >
          {/* States */}
          <g>
            {STATE_PATHS.map((s) => (
              <path
                key={s.name}
                d={s.d}
                fill="rgba(159,179,200,0.07)"
                stroke="rgba(159,179,200,0.30)"
                strokeWidth={1.5}
                strokeLinejoin="round"
              />
            ))}
          </g>

          {/* Orientation labels */}
          <g>
            {STATE_LABELS.map((l) => (
              <text
                key={l.t}
                x={px(l.lng)}
                y={py(l.lat)}
                textAnchor="middle"
                fill="rgba(159,179,200,0.40)"
                style={{ fontSize: 22, fontWeight: 600, letterSpacing: 2 }}
              >
                {l.t}
              </text>
            ))}
          </g>

          {/* Markers */}
          <g>
            {mapped.map((s) => {
              const cx = px(s.lng);
              const cy = py(s.lat);
              const isActive = s.name === active.name;
              const isChamp = (s.championships?.length ?? 0) > 0;
              const fill = isChamp ? '#fbbf24' : isActive ? '#ffffff' : '#9fb3c8';
              return (
                <g
                  key={s.name}
                  transform={`translate(${cx} ${cy})`}
                  onClick={() => setSelected(s.name)}
                  className="cursor-pointer"
                  role="button"
                  tabIndex={0}
                  aria-label={`${s.name}${s.location ? `, ${s.location}` : ''}`}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setSelected(s.name);
                    }
                  }}
                >
                  {isActive && (
                    <circle r={22} fill="none" stroke={fill} strokeWidth={2} opacity={0.6}>
                      <animate attributeName="r" values="14;26;14" dur="2.2s" repeatCount="indefinite" />
                      <animate attributeName="opacity" values="0.7;0;0.7" dur="2.2s" repeatCount="indefinite" />
                    </circle>
                  )}
                  <circle r={isActive ? 13 : 10} fill={fill} stroke="#06162a" strokeWidth={3} />
                </g>
              );
            })}
          </g>
        </svg>
      </div>

      {/* Detail + legend */}
      <div className="flex flex-col gap-4">
        <div
          key={active.name}
          className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 [animation:fade-up_0.4s_var(--ease-premium)_both]"
        >
          <span className="text-[10px] uppercase tracking-wider text-steel">{active.membership ?? 'Founding Member'}</span>
          <div className="mt-3 flex items-center gap-3">
            {active.logo && (
              <span className="h-14 w-14 shrink-0 overflow-hidden rounded-xl border border-white/10">
                <Image src={active.logo} alt={`${active.name} logo`} width={56} height={56} className="h-full w-full object-cover" />
              </span>
            )}
            <div>
              <h3 className="text-lg font-bold leading-tight text-white">{active.name}</h3>
              <p className="mt-0.5 text-sm text-silver-200/80">{active.location}</p>
            </div>
          </div>

          {active.championships && active.championships.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-1.5">
              {active.championships.map((c) => (
                <span key={c} className="inline-flex items-center gap-1 rounded-full bg-amber-400/15 px-2.5 py-1 text-[10px] font-semibold text-amber-200">
                  <svg className="h-3 w-3" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M5 4h14v3a4 4 0 0 1-4 4h-.4a3 3 0 0 1-2.6 1.9V16h2a1 1 0 0 1 0 2H8a1 1 0 0 1 0-2h2v-3.1A3 3 0 0 1 7.4 11H7a4 4 0 0 1-4-4V4h2Z" />
                  </svg>
                  2026 {c} Champion
                </span>
              ))}
            </div>
          )}

          <div className="mt-4 flex flex-wrap gap-1.5">
            {active.divisions.map((d) => (
              <span key={d} className="chip border border-white/10 bg-white/5 text-[10px] text-silver-200">
                {d}
              </span>
            ))}
          </div>
        </div>

        {/* Legend */}
        <div className="flex items-center gap-4 px-1 text-xs text-steel">
          <span className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-amber-400" /> Division champion
          </span>
          <span className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-steel" /> Founding member
          </span>
        </div>

        <p className="px-1 text-xs leading-relaxed text-steel">
          Tap a marker to view a program.
          {unmapped.length > 0 && (
            <>
              {' '}Locations to be announced:{' '}
              <span className="text-silver-200/80">{unmapped.map((s) => s.name).join(', ')}.</span>
            </>
          )}
        </p>
      </div>
    </div>
  );
}
