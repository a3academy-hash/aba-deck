import { CORE_FEES } from '@/lib/content';
import { Reveal } from './Reveal';

/**
 * The three ABA fees: one-time initiation, annual per-team, and per-player
 * registration. The per-player card lists what registration covers.
 */
export function PricingTable() {
  return (
    <div className="grid gap-5 lg:grid-cols-3">
      {CORE_FEES.map((fee, i) => (
        <Reveal
          key={fee.name}
          delay={i * 90}
          className={`relative flex flex-col rounded-2xl border p-7 ${
            fee.highlight
              ? 'border-navy bg-navy text-white shadow-xl shadow-navy/20'
              : 'border-hairline bg-white'
          }`}
        >
          <span
            className={`text-xs font-semibold uppercase tracking-wider ${
              fee.highlight ? 'text-silver-200' : 'text-steel-deep'
            }`}
          >
            {fee.cadence}
          </span>
          <div className={`mt-3 flex items-baseline gap-1 ${fee.highlight ? 'text-white' : 'text-navy'}`}>
            <span className="text-5xl font-bold tracking-tight">{fee.amount}</span>
          </div>
          <h3 className={`mt-3 text-lg font-semibold ${fee.highlight ? 'text-white' : 'text-navy'}`}>
            {fee.name}
          </h3>
          <p className={`mt-2 text-sm leading-relaxed ${fee.highlight ? 'text-silver-200' : 'text-muted'}`}>
            {fee.detail}
          </p>

          {fee.includes && (
            <ul className={`mt-5 space-y-2.5 border-t pt-5 ${fee.highlight ? 'border-white/15' : 'border-hairline'}`}>
              {fee.includes.map((item) => (
                <li
                  key={item}
                  className={`flex items-start gap-2 text-sm ${fee.highlight ? 'text-silver-200' : 'text-muted'}`}
                >
                  <svg
                    className={`mt-0.5 h-4 w-4 shrink-0 ${fee.highlight ? 'text-emerald-300' : 'text-emerald-600'}`}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path fillRule="evenodd" d="M16.7 5.3a1 1 0 0 1 0 1.4l-7.5 7.5a1 1 0 0 1-1.4 0L3.3 9.7a1 1 0 1 1 1.4-1.4l3.1 3.1 6.8-6.8a1 1 0 0 1 1.4 0Z" clipRule="evenodd" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          )}
        </Reveal>
      ))}
    </div>
  );
}
