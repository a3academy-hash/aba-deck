import { Section, SectionHeading } from '@/components/Section';
import { EcosystemMap } from '@/components/EcosystemMap';
import { TECH_INTRO } from '@/lib/content';

export function TechnologyEcosystem() {
  return (
    <Section id="technology">
      <SectionHeading {...TECH_INTRO} centered />
      <EcosystemMap />
    </Section>
  );
}
