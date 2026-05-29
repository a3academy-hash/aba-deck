import { Section, SectionHeading } from '@/components/Section';
import { DivisionExplorer } from '@/components/DivisionExplorer';

export function LeagueStructure() {
  return (
    <Section id="league-structure">
      <SectionHeading
        eyebrow="League Structure"
        title="Multiple pathways, one league"
        body="From national-level Premier competition to a developing Middle School pipeline, ABA divisions let programs place every team at the right level — and grow into more."
      />
      <DivisionExplorer />
    </Section>
  );
}
