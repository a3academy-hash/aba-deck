import Image from 'next/image';
import { NAV_SECTIONS } from '@/lib/nav';
import { SOCIALS } from '@/lib/content';

const SOCIAL_LINKS = [
  {
    label: 'Instagram',
    href: SOCIALS.instagram,
    icon: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </>
    ),
  },
  {
    label: 'X',
    href: SOCIALS.x,
    icon: <path d="M4 4l16 16M20 4L4 20" />,
  },
  {
    label: 'Facebook',
    href: SOCIALS.facebook,
    icon: <path d="M14 8h2V5h-2a3 3 0 0 0-3 3v2H9v3h2v6h3v-6h2.5l.5-3h-3V8.5a.5.5 0 0 1 .5-.5Z" />,
  },
].filter((s) => s.href);

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-navy-900 text-silver-200">
      <div className="mx-auto w-full max-w-6xl px-5 py-14 sm:px-8">
        <div className="flex flex-col gap-10 lg:flex-row lg:justify-between">
          <div className="max-w-sm">
            <span className="flex items-center gap-3">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-white p-1.5">
                <Image
                  src="/aba_logo_transparent.png"
                  alt="Academy Baseball Association"
                  width={40}
                  height={40}
                  className="h-full w-auto"
                />
              </span>
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-steel">
                Academy Baseball Association
              </span>
            </span>
            <p className="mt-4 text-sm text-silver-200/70">
              Built for the next era of amateur baseball — a modern competitive, media, and technology
              infrastructure for elite programs.
            </p>
            <div className="mt-5 flex items-center gap-3">
              {SOCIAL_LINKS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`ABA on ${s.label}`}
                  className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-silver-200 transition-colors hover:border-white/40 hover:text-white"
                >
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    {s.icon}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <nav aria-label="Footer" className="grid grid-cols-2 gap-x-10 gap-y-2 text-sm sm:grid-cols-3">
            {NAV_SECTIONS.slice(1).map((s) => (
              <a key={s.id} href={`#${s.id}`} className="text-silver-200/70 transition-colors hover:text-white">
                {s.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-steel sm:flex-row sm:items-center sm:justify-between">
          <span>© {2026} Academy Baseball Association. All rights reserved.</span>
          <span>deck.academyball.com</span>
        </div>
      </div>
    </footer>
  );
}
