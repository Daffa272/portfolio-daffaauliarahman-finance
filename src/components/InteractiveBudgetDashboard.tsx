import { useState, useMemo } from 'react';
import { BUDGET_SAMPLE_DATA } from '../data/portfolioData';
import { formatIDR, formatPercent } from '../utils/formatters';
import { AlertCircle, CheckCircle2, TrendingUp, TrendingDown, DollarSign, Filter, Layers } from 'lucide-react';

interface Props {
  isCompact?: boolean;
}

export default function InteractiveBudgetDashboard({ isCompact = false }: Props) {
  const [selectedMonth, setSelectedMonth] = useState<string>('All');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const months = ['All', 'January', 'February', 'March', 'April', 'May', 'June'];
  const categories = [
    'All',
    'Salaries & Compensation',
    'Marketing & Advertising',
    'Operations & Utilities',
    'Administration & Office'
  ];

  const filteredData = useMemo(() => {
    return BUDGET_SAMPLE_DATA.filter(item => {
      const matchMonth = selectedMonth === 'All' || item.month === selectedMonth;
      const matchCat = selectedCategory === 'All' || item.category === selectedCategory;
      return matchMonth && matchCat;
    });
  }, [selectedMonth, selectedCategory]);

  const totals = useMemo(() => {
    const totalBudget = filteredData.reduce((acc, curr) => acc + curr.budget, 0);
    const totalActual = filteredData.reduce((acc, curr) => acc + curr.actual, 0);
    const variance = totalActual - totalBudget;
    const utilization = totalBudget > 0 ? (totalActual / totalBudget) * 100 : 0;
    const overBudgetCount = filteredData.filter(i => i.actual > i.budget).length;

    return { totalBudget, totalActual, variance, utilization, overBudgetCount };
  }, [filteredData]);

  // Aggregate monthly spending for the trend view
  const monthlySummary = useMemo(() => {
    const map = new Map<string, { budget: number; actual: number }>();
    months.slice(1).forEach(m => map.set(m, { budget: 0, actual: 0 }));

    BUDGET_SAMPLE_DATA.filter(item => selectedCategory === 'All' || item.category === selectedCategory)
      .forEach(item => {
        const entry = map.get(item.month) || { budget: 0, actual: 0 };
        entry.budget += item.budget;
        entry.actual += item.actual;
        map.set(item.month, entry);
      });

    return Array.from(map.entries()).map(([month, data]) => ({
      month,
      budget: data.budget,
      actual: data.actual,
      variance: data.actual - data.budget,
      utilization: data.budget > 0 ? (data.actual / data.budget) * 100 : 0
    }));
  }, [selectedCategory]);

  return (
    <div className="bg-white border border-slate-200 rounded-xl shadow-xs overflow-hidden">
      {/* Header bar */}
      <div className="bg-slate-900 text-white p-5 border-b border-slate-800">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 tracking-wide uppercase">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Interactive Model · Microsoft Excel Practice Simulation</span>
            </div>
            <h4 className="text-lg font-semibold text-white mt-1">Budget vs. Actual Variance Model</h4>
            <p className="text-xs text-slate-400 mt-0.5">
              Fictional Operational Expense Dataset · Formula: Variance = Actual − Budget | Utilization = (Actual / Budget) × 100%
            </p>
          </div>
          <div className="text-right flex items-center gap-2 self-start sm:self-center">
            <span className="text-xs px-2.5 py-1 bg-slate-800 border border-slate-700 text-slate-300 rounded font-mono">
              Base: IDR (Rupiah)
            </span>
          </div>
        </div>
      </div>

      {/* Filter Controls */}
      <div className="p-4 bg-slate-50 border-b border-slate-200 flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
            <Filter className="w-3.5 h-3.5" />
            <span>Filters:</span>
          </div>

          <div className="flex items-center gap-1.5 text-xs">
            <span className="text-slate-500">Period:</span>
            <select
              value={selectedMonth}
              onChange={(e) => setSelectedMonth(e.target.value)}
              className="bg-white border border-slate-300 rounded-md px-2.5 py-1 text-slate-800 font-medium text-xs focus:outline-hidden focus:ring-2 focus:ring-slate-900"
            >
              {months.map(m => (
                <option key={m} value={m}>{m === 'All' ? 'All Months (H1)' : m}</option>
              ))}
            </select>
          </div>

          <div className="flex items-center gap-1.5 text-xs">
            <span className="text-slate-500">Department:</span>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="bg-white border border-slate-300 rounded-md px-2.5 py-1 text-slate-800 font-medium text-xs focus:outline-hidden focus:ring-2 focus:ring-slate-900 max-w-[200px]"
            >
              {categories.map(c => (
                <option key={c} value={c}>{c === 'All' ? 'All Categories' : c}</option>
              ))}
            </select>
          </div>
        </div>

        <button
          onClick={() => { setSelectedMonth('All'); setSelectedCategory('All'); }}
          className="text-xs text-slate-600 hover:text-slate-900 font-medium underline underline-offset-2"
        >
          Reset Filters
        </button>
      </div>

      {/* KPI Cards Strip */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-slate-200 border-b border-slate-200">
        <div className="bg-white p-4">
          <p className="text-xs text-slate-500 font-medium">Planned Budget Target</p>
          <p className="text-base sm:text-lg font-bold text-slate-900 tabular-nums mt-1">
            {formatIDR(totals.totalBudget)}
          </p>
          <span className="text-[11px] text-slate-400">Approved allocation</span>
        </div>

        <div className="bg-white p-4">
          <p className="text-xs text-slate-500 font-medium">Actual Spending Disbursed</p>
          <p className="text-base sm:text-lg font-bold text-slate-900 tabular-nums mt-1">
            {formatIDR(totals.totalActual)}
          </p>
          <span className="text-[11px] text-slate-400">Total disbursements recorded</span>
        </div>

        <div className="bg-white p-4">
          <p className="text-xs text-slate-500 font-medium">Net Budget Variance</p>
          <div className="flex items-center gap-1.5 mt-1">
            <p className={`text-base sm:text-lg font-bold tabular-nums ${totals.variance > 0 ? 'text-rose-600' : 'text-emerald-600'}`}>
              {totals.variance > 0 ? `+${formatIDR(totals.variance)}` : formatIDR(totals.variance)}
            </p>
          </div>
          <span className="text-[11px] text-slate-500">
            {totals.variance > 0 ? 'Over budget (unfavorable)' : 'Under budget (savings)'}
          </span>
        </div>

        <div className="bg-white p-4">
          <p className="text-xs text-slate-500 font-medium">Utilization Rate</p>
          <div className="flex items-center gap-2 mt-1">
            <p className={`text-base sm:text-lg font-bold tabular-nums ${totals.utilization > 100 ? 'text-rose-600' : 'text-slate-900'}`}>
              {formatPercent(totals.utilization)}
            </p>
            {totals.utilization > 100 ? (
              <span className="text-[11px] text-rose-600 bg-rose-50 px-1.5 py-0.5 rounded font-medium border border-rose-200 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" /> Over
              </span>
            ) : (
              <span className="text-[11px] text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded font-medium border border-emerald-200 flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" /> Within
              </span>
            )}
          </div>
          <span className="text-[11px] text-slate-400">Target baseline: 100.0%</span>
        </div>
      </div>

      {/* Main Table / Data View */}
      <div className="p-4 sm:p-5">
        <div className="flex items-center justify-between mb-3">
          <h5 className="text-xs font-semibold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
            <Layers className="w-4 h-4 text-slate-500" />
            <span>Variance Detail Ledger ({filteredData.length} Records)</span>
          </h5>
          <span className="text-[11px] text-slate-500">
            Showing {selectedMonth === 'All' ? 'Full H1' : selectedMonth} · {selectedCategory}
          </span>
        </div>

        <div className="overflow-x-auto border border-slate-200 rounded-lg">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-slate-100 text-slate-700 border-b border-slate-200 font-semibold">
                <th className="py-2.5 px-3">Month</th>
                <th className="py-2.5 px-3">Expense Category</th>
                <th className="py-2.5 px-3 text-right">Budget (IDR)</th>
                <th className="py-2.5 px-3 text-right">Actual (IDR)</th>
                <th className="py-2.5 px-3 text-right">Variance (IDR)</th>
                <th className="py-2.5 px-3 text-right">Utilization %</th>
                <th className="py-2.5 px-3 text-center">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredData.map((row, idx) => {
                const variance = row.actual - row.budget;
                const utilization = (row.actual / row.budget) * 100;
                const isOver = variance > 0;

                return (
                  <tr
                    key={idx}
                    className={`hover:bg-slate-50 transition-colors ${isOver ? 'bg-rose-50/30' : ''}`}
                  >
                    <td className="py-2.5 px-3 font-medium text-slate-900">{row.month}</td>
                    <td className="py-2.5 px-3 text-slate-700">{row.category}</td>
                    <td className="py-2.5 px-3 text-right tabular-nums text-slate-600">
                      {formatIDR(row.budget)}
                    </td>
                    <td className="py-2.5 px-3 text-right tabular-nums font-medium text-slate-900">
                      {formatIDR(row.actual)}
                    </td>
                    <td className={`py-2.5 px-3 text-right tabular-nums font-semibold ${isOver ? 'text-rose-600' : 'text-emerald-700'}`}>
                      {isOver ? `+${formatIDR(variance)}` : formatIDR(variance)}
                    </td>
                    <td className="py-2.5 px-3 text-right tabular-nums">
                      <div className="inline-flex items-center gap-1.5 justify-end">
                        <span className={`font-medium ${isOver ? 'text-rose-600' : 'text-slate-800'}`}>
                          {formatPercent(utilization)}
                        </span>
                      </div>
                    </td>
                    <td className="py-2.5 px-3 text-center">
                      {isOver ? (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-medium bg-rose-100 text-rose-800 border border-rose-200">
                          <AlertCircle className="w-3 h-3" /> Over
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-medium bg-emerald-50 text-emerald-800 border border-emerald-200">
                          <CheckCircle2 className="w-3 h-3" /> Normal
                        </span>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot>
              <tr className="bg-slate-100 font-semibold border-t-2 border-slate-300 text-slate-900">
                <td className="py-2.5 px-3" colSpan={2}>Aggregate Subtotal</td>
                <td className="py-2.5 px-3 text-right tabular-nums">{formatIDR(totals.totalBudget)}</td>
                <td className="py-2.5 px-3 text-right tabular-nums">{formatIDR(totals.totalActual)}</td>
                <td className={`py-2.5 px-3 text-right tabular-nums font-bold ${totals.variance > 0 ? 'text-rose-600' : 'text-emerald-700'}`}>
                  {totals.variance > 0 ? `+${formatIDR(totals.variance)}` : formatIDR(totals.variance)}
                </td>
                <td className="py-2.5 px-3 text-right tabular-nums font-bold">
                  {formatPercent(totals.utilization)}
                </td>
                <td className="py-2.5 px-3 text-center text-slate-500">
                  {totals.overBudgetCount} Over limit
                </td>
              </tr>
            </tfoot>
          </table>
        </div>

        {/* Visual Monthly Spend Bars */}
        {!isCompact && (
          <div className="mt-6 pt-5 border-t border-slate-200">
            <h5 className="text-xs font-semibold text-slate-700 uppercase tracking-wider mb-3">
              Monthly Utilization Trend ({selectedCategory === 'All' ? 'All Categories Combined' : selectedCategory})
            </h5>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {monthlySummary.map((item) => {
                const isOver = item.variance > 0;
                const barWidth = Math.min(100, (item.actual / (item.budget * 1.25)) * 100);

                return (
                  <div key={item.month} className="p-3 bg-slate-50 border border-slate-200 rounded-lg">
                    <div className="flex justify-between items-center text-xs mb-1">
                      <span className="font-semibold text-slate-800">{item.month}</span>
                      <span className={`text-[11px] font-mono font-medium ${isOver ? 'text-rose-600' : 'text-emerald-700'}`}>
                        {formatPercent(item.utilization)}
                      </span>
                    </div>

                    {/* Utilization visual bar */}
                    <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden my-2">
                      <div
                        className={`h-full rounded-full transition-all duration-300 ${isOver ? 'bg-rose-500' : 'bg-emerald-600'}`}
                        style={{ width: `${barWidth}%` }}
                      />
                    </div>

                    <div className="text-[11px] space-y-0.5 text-slate-500">
                      <div className="flex justify-between">
                        <span>Act:</span>
                        <span className="font-mono text-slate-800">{formatIDR(item.actual)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Var:</span>
                        <span className={`font-mono ${isOver ? 'text-rose-600 font-medium' : 'text-emerald-700'}`}>
                          {isOver ? `+${formatIDR(item.variance)}` : formatIDR(item.variance)}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Analysis & Recommendations Callout */}
        <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
          <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-lg">
            <div className="flex items-center gap-1.5 font-semibold text-slate-900 mb-1.5">
              <TrendingUp className="w-3.5 h-3.5 text-slate-700" />
              <span>Key Analytical Findings</span>
            </div>
            <ul className="space-y-1 text-slate-600 list-disc list-inside">
              <li>Marketing consistently over-budgeted in March and May due to campaign spikes (+IDR 3.6M combined).</li>
              <li>Operations achieved recurring savings through negotiated supplier utilities pricing.</li>
              <li>Overall company-wide variance remained tightly controlled at 97.8% utilization.</li>
            </ul>
          </div>

          <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-lg">
            <div className="flex items-center gap-1.5 font-semibold text-slate-900 mb-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" />
              <span>Financial Recommendations</span>
            </div>
            <ul className="space-y-1 text-slate-600 list-disc list-inside">
              <li>Establish dynamic rolling monthly forecasts for variable digital ad spends.</li>
              <li>Require department head approval on requisition vouchers once utilization passes 90%.</li>
              <li>Reallocate persistent operations surplus to cover promotional customer acquisition tests.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
