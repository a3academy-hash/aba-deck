import { Section, SectionHeading } from '@/components/Section';
import { TimelineRoadmap } from '@/components/TimelineRoadmap';
import { PATHWAY_INTRO } from '@/lib/content';

export function MembershipPathway() {
  return (
    <Section id="pathway" className="bg-silver-50/40">
      <SectionHeading {...PATHWAY_INTRO} centered />
      <TimelineRoadmap />
    </Section>
  );
}
