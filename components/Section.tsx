import type { ReactNode } from 'react';
import { Reveal } from './Reveal';

type SectionProps = {
  id: string;
  children: ReactNode;
  className?: string;
  /** Dark sections invert text + use the grid texture. */
  dark?: boolean;
};

/**
 * Standard section shell: full-width band with consistent vertical rhythm
 * and a centered max-width inner container.
 */
export function Section({ id, children, className = '', dark = false }: SectionProps) {
  return (
    <section
      id={id}
      className={`section-pad scroll-mt-8 ${dark ? 'bg-navy-900 text-white bg-grid' : ''} ${className}`}
    >
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">{children}</div>
    </section>
  );
}

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  body?: string;
  /** Center the heading block. */
  centered?: boolean;
  dark?: boolean;
};

/** Eyebrow + display heading + lead paragraph, with a built-in reveal. */
export function SectionHeading({ eyebrow, title, body, centered, dark }: SectionHeadingProps) {
  return (
    <Reveal className={`max-w-3xl ${centered ? 'mx-auto text-center' : ''}`}>
      <span className="eyebrow" style={dark ? { color: 'var(--color-steel)' } : undefined}>
        {eyebrow}
      </span>
      <h2 className={`display-2 mt-4 ${dark ? 'text-white' : 'text-navy'}`}>{title}</h2>
      {body && (
        <p className={`mt-5 text-lg leading-relaxed ${dark ? 'text-silver-200' : 'text-muted'}`}>
          {body}
        </p>
      )}
    </Reveal>
  );
}
