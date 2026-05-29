import { Section, SectionHeading } from '@/components/Section';
import { Reveal } from '@/components/Reveal';
import { SchoolGrid } from '@/components/SchoolGrid';
import { InteractiveMap } from '@/components/InteractiveMap';
import { FOUNDING_SCHOOLS } from '@/lib/content';

export function FoundingSchools() {
  return (
    <Section id="founding-schools" dark>
      <SectionHeading
        eyebrow="Founding Member Schools"
        title="The programs building ABA"
        body={`A founding class of ${FOUNDING_SCHOOLS.length} elite academies setting the standard for the league — anchored by reigning Premier champions Georgia Premier Academy.`}
        dark
      />

      {/* Interactive locator map */}
      <Reveal className="mt-14">
        <InteractiveMap />
      </Reveal>

      {/* Logo / profile wall */}
      <SchoolGrid />

      <Reveal className="mt-12 flex flex-col items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="text-base font-semibold text-white">Join the founding class</h3>
          <p className="mt-1 text-sm text-silver-200/70">
            School logos and full member profiles are being added as the founding class is finalized.
          </p>
        </div>
        <a href="#contact" className="btn btn-light shrink-0">
          Become a founding member
        </a>
      </Reveal>
    </Section>
  );
}
