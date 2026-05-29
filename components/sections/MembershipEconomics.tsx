import { Section, SectionHeading } from '@/components/Section';
import { Reveal } from '@/components/Reveal';
import { PricingTable } from '@/components/PricingTable';
import { PDFDownloadCard } from '@/components/PDFDownloadCard';
import { CostCalculator } from '@/components/CostCalculator';
import { BUDGET_PDFS, ECONOMICS_INTRO, ECONOMICS_NOTES } from '@/lib/content';

export function MembershipEconomics() {
  return (
    <Section id="economics">
      <SectionHeading {...ECONOMICS_INTRO} />

      {/* The three core fees */}
      <Reveal className="mt-12">
        <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-steel-deep">
          The three ABA fees
        </h3>
      </Reveal>
      <div className="mt-6">
        <PricingTable />
      </div>

      {/* Policies & travel notes */}
      <div className="mt-10 grid gap-4 sm:grid-cols-3">
        {ECONOMICS_NOTES.map((note, i) => (
          <Reveal key={note.title} delay={i * 80} className="card-surface p-6">
            <h4 className="text-sm font-semibold text-navy">{note.title}</h4>
            <p className="mt-2 text-sm leading-relaxed text-muted">{note.body}</p>
          </Reveal>
        ))}
      </div>

      {/* Calculator */}
      <div className="mt-14 grid gap-6 lg:grid-cols-[1.1fr_1fr] lg:items-center">
        <Reveal>
          <h3 className="display-2 text-2xl text-navy sm:text-3xl">Build a rough season budget</h3>
          <p className="mt-4 text-muted">
            Annual league fees are predictable — a flat per-team fee plus per-player registration. Travel is the
            variable, budgeted and covered by each team. Use the estimator to size up a season.
          </p>
        </Reveal>
        <Reveal delay={80}>
          <CostCalculator />
        </Reveal>
      </div>

      {/* Downloadable budget PDFs */}
      <Reveal className="mt-14">
        <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-steel-deep">
          Downloadable budget projections
        </h3>
        <div className="mt-5 grid gap-4 sm:grid-cols-3">
          {BUDGET_PDFS.map((pdf) => (
            <PDFDownloadCard key={pdf.title} pdf={pdf} />
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
