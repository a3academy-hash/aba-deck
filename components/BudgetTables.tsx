import { Reveal } from './Reveal';
import {
  HOSTING_BUDGET,
  HOSTING_COLUMNS,
  TRAVEL_BUDGET,
  TRAVEL_COLUMNS,
  CONFERENCE_GAMES,
  BUDGET_NOTES,
  BUDGET_DISCLAIMER,
} from '@/lib/content';

type Column = { readonly key: string; readonly label: string };

/**
 * Per-division budget grids: home-game hosting costs and road/travel costs,
 * plus a projected-conference-games strip and footnotes. Tables scroll
 * horizontally on small screens; the division column and the right-most total
 * column are emphasized.
 */
function BudgetGrid<T extends Record<string, string>>({
  caption,
  columns,
  rows,
}: {
  caption: string;
  columns: readonly Column[];
  rows: readonly T[];
}) {
  const lastKey = columns[columns.length - 1].key;
  return (
    <div className="card-surface overflow-hidden">
      <div className="border-b border-hairline px-6 py-4">
        <h4 className="text-sm font-semibold text-navy">{caption}</h4>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[640px] border-collapse text-left">
          <thead>
            <tr className="border-b border-hairline bg-silver-100/60">
              {columns.map((col, i) => (
                <th
                  key={col.key}
                  scope="col"
                  className={`px-5 py-3 text-[11px] font-semibold uppercase tracking-wider text-steel-deep ${
                    i === 0 ? 'text-left' : 'text-right'
                  }`}
                >
                  {col.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr
                key={row.division}
                className="border-b border-hairline last:border-0 transition-colors hover:bg-silver-100/40"
              >
                {columns.map((col, i) => {
                  const value = row[col.key];
                  const isDivision = i === 0;
                  const isTotal = col.key === lastKey;
                  return (
                    <td
                      key={col.key}
                      className={`px-5 py-3.5 tabular-nums ${
                        isDivision
                          ? 'text-left text-sm font-semibold text-navy'
                          : 'text-right text-sm'
                      } ${isTotal ? 'font-bold text-navy' : 'text-muted'}`}
                    >
                      {value}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export function BudgetTables() {
  return (
    <div className="space-y-10">
      <Reveal>
        <BudgetGrid caption="Home-game hosting budget" columns={HOSTING_COLUMNS} rows={HOSTING_BUDGET} />
      </Reveal>

      <Reveal>
        <BudgetGrid caption="Road & travel budget" columns={TRAVEL_COLUMNS} rows={TRAVEL_BUDGET} />
      </Reveal>

      {/* Projected conference games */}
      <Reveal>
        <div className="card-surface p-6">
          <h4 className="text-sm font-semibold text-navy">Projected conference games</h4>
          <dl className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {CONFERENCE_GAMES.map((d) => (
              <div
                key={d.division}
                className="flex flex-col items-center rounded-xl border border-hairline bg-silver-100/40 px-4 py-5 text-center"
              >
                <dd className="text-3xl font-bold tabular-nums text-navy">{d.games}</dd>
                <dt className="mt-1 text-xs font-semibold uppercase tracking-wider text-steel-deep">
                  {d.division}
                </dt>
              </div>
            ))}
          </dl>
        </div>
      </Reveal>

      {/* Footnotes */}
      <div className="grid gap-4 sm:grid-cols-3">
        {BUDGET_NOTES.map((note, i) => (
          <Reveal key={note.title} delay={i * 80} className="card-surface p-6">
            <h4 className="text-sm font-semibold text-navy">{note.title}</h4>
            <p className="mt-2 text-sm leading-relaxed text-muted">{note.body}</p>
          </Reveal>
        ))}
      </div>

      <Reveal as="p" className="text-xs leading-relaxed text-steel">
        {BUDGET_DISCLAIMER}
      </Reveal>
    </div>
  );
}
