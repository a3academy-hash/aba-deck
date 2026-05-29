import { Section, SectionHeading } from '@/components/Section';
import { FAQAccordion } from '@/components/FAQAccordion';

export function FAQ() {
  return (
    <Section id="faq">
      <SectionHeading
        eyebrow="FAQ"
        title="Questions, answered"
        body="The most common questions from academy owners, athletic directors, and administrators evaluating ABA membership."
      />
      <FAQAccordion />
    </Section>
  );
}
