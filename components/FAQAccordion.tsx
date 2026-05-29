'use client';

import { useState } from 'react';
import { FAQS } from '@/lib/content';

/**
 * Accessible accordion. One panel open at a time; height/opacity transition
 * via CSS grid-rows trick (no measured JS heights needed).
 */
export function FAQAccordion() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="mt-12 divide-y divide-hairline overflow-hidden rounded-2xl border border-hairline bg-white">
      {FAQS.map((faq, i) => {
        const isOpen = open === i;
        return (
          <div key={faq.q}>
            <h3>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="tap-target flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-silver-50/60"
              >
                <span className="text-base font-semibold text-navy">{faq.q}</span>
                <span
                  className={`grid h-7 w-7 shrink-0 place-items-center rounded-full border border-hairline text-navy transition-transform duration-300 ${
                    isOpen ? 'rotate-45 bg-navy text-white' : ''
                  }`}
                  aria-hidden="true"
                >
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </span>
              </button>
            </h3>
            <div
              className="grid transition-[grid-template-rows] duration-300 ease-[var(--ease-premium)]"
              style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
            >
              <div className="overflow-hidden">
                <p className="px-6 pb-5 text-sm leading-relaxed text-muted">{faq.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
