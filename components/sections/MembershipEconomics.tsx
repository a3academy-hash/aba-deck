import { Section, SectionHeading } from '@/components/Section';
import { Reveal } from '@/components/Reveal';
import { PricingTable } from '@/components/PricingTable';
import { PDFDownloadCard } from '@/components/PDFDownloadCard';
import { CostCalculator } from '@/components/CostCalculator';
import { BUDGET_PDFS, ECONOMICS_INCLUDES, ECONOMICS_INTRO, INITIATION_FEE } from '@/lib/content';

export function MembershipEconomics() {
  return (
    <Section id="economics">
      <SectionHeading {...ECONOMICS_INTRO} />

      {/* Initiation fee — the single headline number */}
      <Reveal className="mt-12 overflow-hidden rounded-2xl border border-hairline bg-silver-50/60">
        <div className="grid items-center gap-6 p-8 sm:grid-cols-[auto_1fr] sm:p-10">
          <div>
            <div className="display-1 text-5xl text-navy sm:text-6xl">{INITIATION_FEE.amount}</div>
          </div>
          <div className="sm:border-l sm:border-hairline sm:pl-8">
            <div className="text-base font-semibold text-navy">{INITIATION_FEE.label}</div>
            <p className="mt-1 text-muted">{INITIATION_FEE.detail}</p>
          </div>
        </div>
      </Reveal>

      {/* Annual fee tiers */}
      <Reveal className="mt-14">
        <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-steel-deep">
          Annual team / event fees by division
        </h3>
        <p className="mt-2 max-w-2xl text-sm text-muted">
          Annual fees vary based on division participation, postseason events, neutral-site events, and
          Opening Kickoff participation. Premier programs travel more; JV/MS programs travel less.
        </p>
      </Reveal>
      <div className="mt-6">
        <PricingTable />
      </div>

      {/* What's included + calculator */}
      <div className="mt-14 grid gap-6 lg:grid-cols-[1fr_1.1fr]">
        <Reveal className="card-surface p-7">
          <h3 className="text-base font-semibold text-navy">Every projection accounts for</h3>
          <ul className="mt-5 space-y-3">
            {ECONOMICS_INCLUDES.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-muted">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-steel" />
                {item}
              </li>
            ))}
          </ul>
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
