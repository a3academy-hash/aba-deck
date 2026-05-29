import { Reveal } from './Reveal';

type CTASectionProps = {
  title: string;
  body?: string;
  primary: { label: string; href: string };
  secondary?: { label: string; href: string };
};

/**
 * Reusable call-to-action banner. Dark navy panel with the grid texture —
 * usable between sections or as a closing prompt.
 */
export function CTASection({ title, body, primary, secondary }: CTASectionProps) {
  return (
    <Reveal className="relative isolate overflow-hidden rounded-3xl bg-navy-900 px-6 py-14 text-center sm:px-12 sm:py-20">
      <div className="bg-grid absolute inset-0 -z-10 opacity-60" aria-hidden="true" />
      <div className="hero-spotlight absolute inset-0 -z-10" aria-hidden="true" />
      <h2 className="display-2 mx-auto max-w-2xl text-white">{title}</h2>
      {body && <p className="mx-auto mt-4 max-w-xl text-silver-200">{body}</p>}
      <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <a href={primary.href} className="btn btn-light">
          {primary.label}
        </a>
        {secondary && (
          <a href={secondary.href} className="btn btn-ghost">
            {secondary.label}
          </a>
        )}
      </div>
    </Reveal>
  );
}
