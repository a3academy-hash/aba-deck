import { Section } from '@/components/Section';
import { Reveal } from '@/components/Reveal';
import { ContactForm } from '@/components/ContactForm';
import { CONTACT_INTRO } from '@/lib/content';

export function Contact() {
  return (
    <Section id="contact">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        <Reveal>
          <span className="eyebrow">{CONTACT_INTRO.eyebrow}</span>
          <h2 className="display-2 mt-4 text-navy">{CONTACT_INTRO.title}</h2>
          <p className="mt-5 text-lg leading-relaxed text-muted">{CONTACT_INTRO.body}</p>

          <ul className="mt-8 space-y-4">
            {[
              { label: 'Intro call', value: '30-minute league overview & fit review' },
              { label: 'Domain', value: 'deck.academyball.com' },
              { label: 'Championship', value: 'LakePoint Sports · Emerson, GA' },
            ].map((row) => (
              <li key={row.label} className="flex gap-4 border-t border-hairline pt-4">
                <span className="w-28 shrink-0 text-xs font-semibold uppercase tracking-wider text-steel-deep">
                  {row.label}
                </span>
                <span className="text-sm font-medium text-navy">{row.value}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={80}>
          <ContactForm />
        </Reveal>
      </div>
    </Section>
  );
}
