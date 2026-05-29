import { FEE_TIERS } from '@/lib/content';
import { Reveal } from './Reveal';

/**
 * Division fee tiers. Intentionally avoids hard dollar figures for annual fees
 * (those vary by participation) — instead it communicates the travel/event
 * footprint that drives cost, keeping the section transparent, not salesy.
 */
export function PricingTable() {
  return (
    <div className="grid gap-5 lg:grid-cols-3">
      {FEE_TIERS.map((tier, i) => (
        <Reveal
          key={tier.name}
          delay={i * 90}
          className={`relative flex flex-col rounded-2xl border p-7 ${
            tier.highlight
              ? 'border-navy bg-navy text-white shadow-xl shadow-navy/20'
              : 'border-hairline bg-white'
          }`}
        >
          {tier.highlight && (
            <span className="chip absolute right-6 top-6 bg-white/15 text-[10px] text-white">
              Most travel
            </span>
          )}
          <h3 className={`text-xl font-bold ${tier.highlight ? 'text-white' : 'text-navy'}`}>
            {tier.name}
          </h3>
          <p className={`mt-2 text-sm ${tier.highlight ? 'text-silver-200' : 'text-muted'}`}>
            {tier.description}
          </p>

          <dl className={`mt-6 space-y-3 border-t pt-5 ${tier.highlight ? 'border-white/15' : 'border-hairline'}`}>
            <div className="flex items-center justify-between gap-3">
              <dt className={`text-sm ${tier.highlight ? 'text-silver-200' : 'text-muted'}`}>Road trips</dt>
              <dd className={`text-sm font-semibold ${tier.highlight ? 'text-white' : 'text-navy'}`}>
                {tier.roadTrips}
              </dd>
            </div>
            <div className="flex items-center justify-between gap-3">
              <dt className={`text-sm ${tier.highlight ? 'text-silver-200' : 'text-muted'}`}>Hotel nights</dt>
              <dd className={`text-sm font-semibold ${tier.highlight ? 'text-white' : 'text-navy'}`}>
                {tier.hotelNights}
              </dd>
            </div>
          </dl>

          <ul className="mt-6 space-y-2.5">
            {tier.notes.map((note) => (
              <li
                key={note}
                className={`flex items-start gap-2 text-sm ${tier.highlight ? 'text-silver-200' : 'text-muted'}`}
              >
                <svg
                  className={`mt-0.5 h-4 w-4 shrink-0 ${tier.highlight ? 'text-emerald-300' : 'text-emerald-600'}`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path fillRule="evenodd" d="M16.7 5.3a1 1 0 0 1 0 1.4l-7.5 7.5a1 1 0 0 1-1.4 0L3.3 9.7a1 1 0 1 1 1.4-1.4l3.1 3.1 6.8-6.8a1 1 0 0 1 1.4 0Z" clipRule="evenodd" />
                </svg>
                {note}
              </li>
            ))}
          </ul>
        </Reveal>
      ))}
    </div>
  );
}
