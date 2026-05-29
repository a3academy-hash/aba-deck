import type { BudgetPdf } from '@/lib/content';

/**
 * Download card for a budget-projection PDF. `file` points at /public/pdfs/*.
 * Until real PDFs are added, the link 404s gracefully — wire actual files in
 * to activate. Uses `download` so browsers save rather than navigate.
 */
export function PDFDownloadCard({ pdf }: { pdf: BudgetPdf }) {
  return (
    <a
      href={pdf.file}
      download
      className="card-surface group flex items-center gap-4 p-5"
    >
      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-lg bg-navy/5 text-navy transition-colors group-hover:bg-navy group-hover:text-white">
        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
          <path d="M12 3v12m0 0 4-4m-4 4-4-4" />
          <path d="M5 19h14" />
        </svg>
      </span>
      <span className="min-w-0">
        <span className="block text-sm font-semibold text-navy">{pdf.title}</span>
        <span className="block truncate text-xs text-muted">{pdf.description}</span>
      </span>
      <span className="ml-auto text-xs font-semibold uppercase tracking-wider text-steel-deep">
        PDF
      </span>
    </a>
  );
}
