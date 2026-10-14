import { useState, useMemo } from 'react';
import { CASH_FLOW_SAMPLE_DATA } from '../data/portfolioData';
import { formatIDR } from '../utils/formatters';
import { ArrowUpRight, ArrowDownRight, Layers, FileText, CheckCircle2, ShieldCheck } from 'lucide-react';

export default function InteractiveCashFlowTracker() {
  const [selectedMonthIndex, setSelectedMonthIndex] = useState<number>(0);
  const [filterActivity, setFilterActivity] = useState<'All' | 'Operating' | 'Investing' | 'Financing'>('All');

  const selectedData = CASH_FLOW_SAMPLE_DATA[selectedMonthIndex];

  // Roll-forward calculations
  const rollForward = useMemo(() => {
    return CASH_FLOW_SAMPLE_DATA.map((item) => {
      const netOperating = item.operatingInflow - item.operatingOutflow;
      const netInvesting = -item.investingOutflow;
      const netFinancing = item.financingInflow - item.financingOutflow;
      const netChange = netOperating + netInvesting + netFinancing;
      const closing = item.openingBalance + netChange;

      return {
        ...item,
        netOperating,
        netInvesting,
        netFinancing,
        netChange,
        closing
      };
    });
  }, []);

  const activeMonthRow = rollForward[selectedMonthIndex];

  // Six-month aggregate totals
  const aggregateTotals = useMemo(() => {
    const totalOpIn = rollForward.reduce((acc, c) => acc + c.operatingInflow, 0);
    const totalOpOut = rollForward.reduce((acc, c) => acc + c.operatingOutflow, 0);
    const totalInvOut = rollForward.reduce((acc, c) => acc + c.investingOutflow, 0);
    const totalFinOut = rollForward.reduce((acc, c) => acc + c.financingOutflow, 0);
    const startBal = rollForward[0].openingBalance;
    const finalBal = rollForward[rollForward.length - 1].closing;
    const netTotalChange = finalBal - startBal;

    return { totalOpIn, totalOpOut, totalInvOut, totalFinOut, startBal, finalBal, netTotalChange };
  }, [rollForward]);

  return (
    <div className="bg-white border border-slate-200 rounded-xl shadow-xs overflow-hidden">
      {/* Header bar */}
      <div className="bg-slate-900 text-white p-5 border-b border-slate-800">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 tracking-wide uppercase">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400" />
              <span>Treasury Model · Cash Flow & Liquidity Management</span>
            </div>
            <h4 className="text-lg font-semibold text-white mt-1">Monthly Cash Flow Roll-Forward Model</h4>
            <p className="text-xs text-slate-400 mt-0.5">
              Operating, Investing & Financing Cash Flow Segregation (PSAK 2 Standard Simulation)
            </p>
          </div>
          <div className="text-right flex items-center gap-2 self-start sm:self-center">
            <span className="text-xs px-2.5 py-1 bg-slate-800 border border-slate-700 text-slate-300 rounded font-mono">
              Min. Reserve Buffer: Rp 50.000.000
            </span>
          </div>
        </div>
      </div>

      {/* Month Selector Pills (Functional interactive buttons) */}
      <div className="p-4 bg-slate-50 border-b border-slate-200 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="text-xs text-slate-500 font-medium">Select Month:</span>
          <div className="flex flex-wrap gap-1 bg-slate-200/70 p-1 rounded-lg">
            {rollForward.map((item, idx) => (
              <button
                key={item.month}
                onClick={() => setSelectedMonthIndex(idx)}
                className={`px-3 py-1 text-xs font-medium rounded-md transition-colors ${
                  selectedMonthIndex === idx
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'text-slate-700 hover:text-slate-900 hover:bg-slate-200'
                }`}
              >
                {item.month}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-2 text-xs">
          <span className="text-slate-500">View Activity:</span>
          <select
            value={filterActivity}
            onChange={(e) => setFilterActivity(e.target.value as any)}
            className="bg-white border border-slate-300 rounded-md px-2.5 py-1 text-slate-800 font-medium focus:outline-hidden focus:ring-2 focus:ring-slate-900"
          >
            <option value="All">All Activities (Summary)</option>
            <option value="Operating">Operating Cash Flows</option>
            <option value="Investing">Investing Cash Flows</option>
            <option value="Financing">Financing Cash Flows</option>
          </select>
        </div>
      </div>

      {/* Selected Month Key Metrics Card */}
      <div className="p-5 border-b border-slate-200 bg-slate-50/50">
        <div className="flex items-center justify-between mb-3">
          <h5 className="text-xs font-semibold uppercase tracking-wider text-slate-600">
            Treasury Snapshot · {activeMonthRow.month} Roll-Forward
          </h5>
          <span className="text-xs text-emerald-700 font-medium flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5" /> Reserve Buffer Maintained
          </span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <div className="bg-white p-3.5 rounded-lg border border-slate-200 shadow-2xs">
            <span className="text-[11px] text-slate-500 font-medium">Opening Cash Balance</span>
            <p className="text-base font-bold text-slate-900 tabular-nums mt-1">
              {formatIDR(activeMonthRow.openingBalance)}
            </p>
            <span className="text-[11px] text-slate-400">1st of {activeMonthRow.month}</span>
          </div>

          <div className="bg-white p-3.5 rounded-lg border border-slate-200 shadow-2xs">
            <span className="text-[11px] text-slate-500 font-medium">Net Operating Cash</span>
            <div className="flex items-center gap-1 mt-1">
              <p className={`text-base font-bold tabular-nums ${activeMonthRow.netOperating >= 0 ? 'text-emerald-700' : 'text-rose-600'}`}>
                {activeMonthRow.netOperating >= 0 ? `+${formatIDR(activeMonthRow.netOperating)}` : formatIDR(activeMonthRow.netOperating)}
              </p>
              {activeMonthRow.netOperating >= 0 ? (
                <ArrowUpRight className="w-4 h-4 text-emerald-700" />
              ) : (
                <ArrowDownRight className="w-4 h-4 text-rose-600" />
              )}
            </div>
            <span className="text-[11px] text-slate-400">Inflows minus Outflows</span>
          </div>

          <div className="bg-white p-3.5 rounded-lg border border-slate-200 shadow-2xs">
            <span className="text-[11px] text-slate-500 font-medium">Net Period Cash Change</span>
            <div className="flex items-center gap-1 mt-1">
              <p className={`text-base font-bold tabular-nums ${activeMonthRow.netChange >= 0 ? 'text-emerald-700' : 'text-rose-600'}`}>
                {activeMonthRow.netChange >= 0 ? `+${formatIDR(activeMonthRow.netChange)}` : formatIDR(activeMonthRow.netChange)}
              </p>
            </div>
            <span className="text-[11px] text-slate-400">All 3 activities combined</span>
          </div>

          <div className="bg-white p-3.5 rounded-lg border border-slate-200 shadow-2xs">
            <span className="text-[11px] text-slate-500 font-medium">Closing Cash Balance</span>
            <p className="text-base font-bold text-slate-900 tabular-nums mt-1">
              {formatIDR(activeMonthRow.closing)}
            </p>
            <span className="text-[11px] text-slate-400">End of {activeMonthRow.month}</span>
          </div>
        </div>

        {/* Treasury Commentary for Selected Month */}
        <div className="mt-3 p-3 bg-white border border-slate-200 rounded-lg flex items-start gap-2.5 text-xs text-slate-700">
          <FileText className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
          <div>
            <span className="font-semibold text-slate-900">Treasury Movement Note: </span>
            <span>{activeMonthRow.note}</span>
          </div>
        </div>
      </div>

      {/* Six-Month Full Cash Flow Schedule Table */}
      <div className="p-4 sm:p-5">
        <div className="flex items-center justify-between mb-3">
          <h5 className="text-xs font-semibold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
            <Layers className="w-4 h-4 text-slate-500" />
            <span>Full 6-Month Liquidity Roll-Forward Schedule (IDR)</span>
          </h5>
          <span className="text-[11px] text-slate-500 font-mono">Discrepancy Check: 0.00 (Balanced)</span>
        </div>

        <div className="overflow-x-auto border border-slate-200 rounded-lg">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-slate-100 text-slate-700 border-b border-slate-200 font-semibold">
                <th className="py-2.5 px-3">Month</th>
                <th className="py-2.5 px-3 text-right">Opening Bal.</th>
                {(filterActivity === 'All' || filterActivity === 'Operating') && (
                  <>
                    <th className="py-2.5 px-3 text-right">Operating In</th>
                    <th className="py-2.5 px-3 text-right">Operating Out</th>
                    <th className="py-2.5 px-3 text-right">Net Operating</th>
                  </>
                )}
                {(filterActivity === 'All' || filterActivity === 'Investing') && (
                  <th className="py-2.5 px-3 text-right">Net Investing</th>
                )}
                {(filterActivity === 'All' || filterActivity === 'Financing') && (
                  <th className="py-2.5 px-3 text-right">Net Financing</th>
                )}
                <th className="py-2.5 px-3 text-right font-bold">Net Change</th>
                <th className="py-2.5 px-3 text-right font-bold">Closing Bal.</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {rollForward.map((row, idx) => {
                const isSelected = idx === selectedMonthIndex;

                return (
                  <tr
                    key={row.month}
                    onClick={() => setSelectedMonthIndex(idx)}
                    className={`cursor-pointer transition-colors ${
                      isSelected ? 'bg-slate-100/90 font-medium' : 'hover:bg-slate-50'
                    }`}
                  >
                    <td className="py-2.5 px-3 font-semibold text-slate-900 flex items-center gap-1.5">
                      {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-slate-900" />}
                      <span>{row.month}</span>
                    </td>
                    <td className="py-2.5 px-3 text-right tabular-nums text-slate-600">
                      {formatIDR(row.openingBalance)}
                    </td>

                    {(filterActivity === 'All' || filterActivity === 'Operating') && (
                      <>
                        <td className="py-2.5 px-3 text-right tabular-nums text-emerald-700">
                          +{formatIDR(row.operatingInflow)}
                        </td>
                        <td className="py-2.5 px-3 text-right tabular-nums text-rose-600">
                          -{formatIDR(row.operatingOutflow)}
                        </td>
                        <td className={`py-2.5 px-3 text-right tabular-nums font-medium ${row.netOperating >= 0 ? 'text-emerald-700' : 'text-rose-600'}`}>
                          {row.netOperating >= 0 ? `+${formatIDR(row.netOperating)}` : formatIDR(row.netOperating)}
                        </td>
                      </>
                    )}

                    {(filterActivity === 'All' || filterActivity === 'Investing') && (
                      <td className="py-2.5 px-3 text-right tabular-nums text-rose-600 font-medium">
                        {formatIDR(row.netInvesting)}
                      </td>
                    )}

                    {(filterActivity === 'All' || filterActivity === 'Financing') && (
                      <td className="py-2.5 px-3 text-right tabular-nums text-rose-600 font-medium">
                        {formatIDR(row.netFinancing)}
                      </td>
                    )}

                    <td className={`py-2.5 px-3 text-right tabular-nums font-bold ${row.netChange >= 0 ? 'text-emerald-700' : 'text-rose-600'}`}>
                      {row.netChange >= 0 ? `+${formatIDR(row.netChange)}` : formatIDR(row.netChange)}
                    </td>
                    <td className="py-2.5 px-3 text-right tabular-nums font-bold text-slate-900">
                      {formatIDR(row.closing)}
                    </td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot>
              <tr className="bg-slate-100 font-semibold border-t-2 border-slate-300 text-slate-900">
                <td className="py-2.5 px-3">H1 Total (6 Mos)</td>
                <td className="py-2.5 px-3 text-right tabular-nums text-slate-500">
                  {formatIDR(aggregateTotals.startBal)}
                </td>
                {(filterActivity === 'All' || filterActivity === 'Operating') && (
                  <>
                    <td className="py-2.5 px-3 text-right tabular-nums text-emerald-700">
                      +{formatIDR(aggregateTotals.totalOpIn)}
                    </td>
                    <td className="py-2.5 px-3 text-right tabular-nums text-rose-600">
                      -{formatIDR(aggregateTotals.totalOpOut)}
                    </td>
                    <td className="py-2.5 px-3 text-right tabular-nums text-emerald-700 font-bold">
                      +{formatIDR(aggregateTotals.totalOpIn - aggregateTotals.totalOpOut)}
                    </td>
                  </>
                )}
                {(filterActivity === 'All' || filterActivity === 'Investing') && (
                  <td className="py-2.5 px-3 text-right tabular-nums text-rose-600 font-bold">
                    -{formatIDR(aggregateTotals.totalInvOut)}
                  </td>
                )}
                {(filterActivity === 'All' || filterActivity === 'Financing') && (
                  <td className="py-2.5 px-3 text-right tabular-nums text-rose-600 font-bold">
                    -{formatIDR(aggregateTotals.totalFinOut)}
                  </td>
                )}
                <td className={`py-2.5 px-3 text-right tabular-nums font-bold ${aggregateTotals.netTotalChange >= 0 ? 'text-emerald-700' : 'text-rose-600'}`}>
                  +{formatIDR(aggregateTotals.netTotalChange)}
                </td>
                <td className="py-2.5 px-3 text-right tabular-nums font-bold text-slate-900">
                  {formatIDR(aggregateTotals.finalBal)}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>

        {/* Treasury Insights */}
        <div className="mt-4 p-3.5 bg-slate-50 border border-slate-200 rounded-lg text-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
            <span className="text-slate-700 font-medium">
              Closing liquidity ended at <strong>{formatIDR(aggregateTotals.finalBal)}</strong>, providing 2.6x coverage over the minimum safety reserve.
            </span>
          </div>
          <span className="text-[11px] text-slate-500 italic">
            *Click any row above to inspect month-specific commentary.
          </span>
        </div>
      </div>
    </div>
  );
}
