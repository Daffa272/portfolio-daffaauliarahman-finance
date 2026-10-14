import { useState } from 'react';
import { FINANCIAL_STATEMENT_SAMPLE } from '../data/portfolioData';
import { formatIDR, formatPercent } from '../utils/formatters';
import { TrendingUp, FileSpreadsheet, Percent, ShieldCheck, Info } from 'lucide-react';

export default function InteractiveFinancialAnalysis() {
  const [activeTab, setActiveTab] = useState<'ratios' | 'income' | 'balance'>('ratios');

  const { incomeStatement, balanceSheet, calculatedRatios, companyName, industry } = FINANCIAL_STATEMENT_SAMPLE;

  return (
    <div className="bg-white border border-slate-200 rounded-xl shadow-xs overflow-hidden">
      {/* Header */}
      <div className="bg-slate-900 text-white p-5 border-b border-slate-800">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 tracking-wide uppercase">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400" />
              <span>Comparative Financial Statement Analysis · FY2024 vs FY2025</span>
            </div>
            <h4 className="text-lg font-semibold text-white mt-1">{companyName}</h4>
            <p className="text-xs text-slate-400 mt-0.5">
              Sector: {industry} · Clearly labeled fictional dataset for academic ratio evaluation
            </p>
          </div>
          <div className="text-right">
            <span className="text-xs px-2.5 py-1 bg-slate-800 border border-slate-700 text-slate-300 rounded font-mono">
              Method: Horizontal & Vertical
            </span>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="p-3 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
        <div className="flex items-center gap-1 bg-slate-200/70 p-1 rounded-lg">
          <button
            onClick={() => setActiveTab('ratios')}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
              activeTab === 'ratios'
                ? 'bg-slate-900 text-white shadow-xs'
                : 'text-slate-700 hover:text-slate-900 hover:bg-slate-200'
            }`}
          >
            Key Financial Ratios
          </button>
          <button
            onClick={() => setActiveTab('income')}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
              activeTab === 'income'
                ? 'bg-slate-900 text-white shadow-xs'
                : 'text-slate-700 hover:text-slate-900 hover:bg-slate-200'
            }`}
          >
            Income Statement (YoY)
          </button>
          <button
            onClick={() => setActiveTab('balance')}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
              activeTab === 'balance'
                ? 'bg-slate-900 text-white shadow-xs'
                : 'text-slate-700 hover:text-slate-900 hover:bg-slate-200'
            }`}
          >
            Balance Sheet (YoY)
          </button>
        </div>

        <span className="text-xs text-slate-500 hidden sm:inline-block">
          FY24 Base / FY25 Target
        </span>
      </div>

      {/* Tab 1: Financial Ratios */}
      {activeTab === 'ratios' && (
        <div className="p-4 sm:p-5">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-5">
            {calculatedRatios.map((item) => (
              <div key={item.ratio} className="p-3.5 bg-slate-50 border border-slate-200 rounded-lg">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-800">{item.ratio}</span>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 border border-emerald-200 font-medium">
                    {item.status}
                  </span>
                </div>

                <div className="mt-3 flex items-baseline justify-between">
                  <div>
                    <span className="text-[11px] text-slate-500">FY2024: </span>
                    <span className="text-xs font-mono font-medium text-slate-700">{item.fy2024}</span>
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-500">FY2025: </span>
                    <span className="text-sm font-mono font-bold text-slate-900">{item.fy2025}</span>
                  </div>
                </div>

                <div className="mt-2 pt-2 border-t border-slate-200 flex justify-between text-[11px] text-slate-500">
                  <span>Change: <strong className="font-mono text-slate-800">{item.change}</strong></span>
                  <span>Bench: {item.benchmark}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Executive Summary Card */}
          <div className="p-4 bg-slate-900 text-white rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <h5 className="text-sm font-semibold text-white">Analyst Executive Summary</h5>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              1. <strong>Top-Line Expansion:</strong> Net revenue grew +14.2% YoY (from Rp 12.4B to Rp 14.16B), demonstrating strong client acquisition across distribution regions.
            </p>
            <p className="text-xs text-slate-300 leading-relaxed mt-1">
              2. <strong>Margin Compression:</strong> Gross Margin compressed by 240 bps to 24.10% due to rising logistics and supplier acquisition costs, which slightly moderated net income growth (+2.68% YoY).
            </p>
            <p className="text-xs text-slate-300 leading-relaxed mt-1">
              3. <strong>Solvency & Liquidity:</strong> Current Ratio improved from 1.65x to 1.88x, and Quick Ratio crossed 1.09x. Debt-to-Equity fell conservatively to 0.67x, confirming a highly resilient, low-risk capital structure.
            </p>
          </div>
        </div>
      )}

      {/* Tab 2: Income Statement */}
      {activeTab === 'income' && (
        <div className="p-4 sm:p-5">
          <div className="overflow-x-auto border border-slate-200 rounded-lg">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-slate-100 text-slate-700 border-b border-slate-200 font-semibold">
                  <th className="py-2.5 px-3">Income Statement Line Item</th>
                  <th className="py-2.5 px-3 text-right">FY2024 (IDR)</th>
                  <th className="py-2.5 px-3 text-right">FY2025 (IDR)</th>
                  <th className="py-2.5 px-3 text-right">YoY Nominal Change</th>
                  <th className="py-2.5 px-3 text-right">YoY % Growth</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {incomeStatement.map((row, idx) => {
                  const nominal = row.fy2025 - row.fy2024;
                  const pct = (nominal / row.fy2024) * 100;
                  const isPrimary = row.item === 'Net Sales Revenue' || row.item === 'Gross Profit' || row.item === 'Net Income After Tax';

                  return (
                    <tr key={idx} className={`hover:bg-slate-50 transition-colors ${isPrimary ? 'bg-slate-50/70 font-semibold text-slate-900' : 'text-slate-700'}`}>
                      <td className="py-2.5 px-3">{row.item}</td>
                      <td className="py-2.5 px-3 text-right tabular-nums text-slate-600">{formatIDR(row.fy2024)}</td>
                      <td className="py-2.5 px-3 text-right tabular-nums text-slate-900">{formatIDR(row.fy2025)}</td>
                      <td className={`py-2.5 px-3 text-right tabular-nums ${nominal >= 0 ? 'text-emerald-700' : 'text-rose-600'}`}>
                        {nominal >= 0 ? `+${formatIDR(nominal)}` : formatIDR(nominal)}
                      </td>
                      <td className={`py-2.5 px-3 text-right tabular-nums font-medium ${pct >= 0 ? 'text-emerald-700' : 'text-rose-600'}`}>
                        {pct >= 0 ? `+${formatPercent(pct)}` : formatPercent(pct)}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Tab 3: Balance Sheet */}
      {activeTab === 'balance' && (
        <div className="p-4 sm:p-5">
          <div className="overflow-x-auto border border-slate-200 rounded-lg">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-slate-100 text-slate-700 border-b border-slate-200 font-semibold">
                  <th className="py-2.5 px-3">Balance Sheet Line Item</th>
                  <th className="py-2.5 px-3 text-right">FY2024 (IDR)</th>
                  <th className="py-2.5 px-3 text-right">FY2025 (IDR)</th>
                  <th className="py-2.5 px-3 text-right">Nominal Variance</th>
                  <th className="py-2.5 px-3 text-right">YoY % Change</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {balanceSheet.map((row, idx) => {
                  const nominal = row.fy2025 - row.fy2024;
                  const pct = (nominal / row.fy2024) * 100;
                  const isTotal = row.item.includes('Total');

                  return (
                    <tr key={idx} className={`hover:bg-slate-50 transition-colors ${isTotal ? 'bg-slate-100/80 font-bold text-slate-900' : 'text-slate-700'}`}>
                      <td className="py-2.5 px-3">{row.item}</td>
                      <td className="py-2.5 px-3 text-right tabular-nums text-slate-600">{formatIDR(row.fy2024)}</td>
                      <td className="py-2.5 px-3 text-right tabular-nums text-slate-900">{formatIDR(row.fy2025)}</td>
                      <td className={`py-2.5 px-3 text-right tabular-nums ${nominal >= 0 ? 'text-emerald-700' : 'text-rose-600'}`}>
                        {nominal >= 0 ? `+${formatIDR(nominal)}` : formatIDR(nominal)}
                      </td>
                      <td className={`py-2.5 px-3 text-right tabular-nums font-medium ${pct >= 0 ? 'text-emerald-700' : 'text-rose-600'}`}>
                        {pct >= 0 ? `+${formatPercent(pct)}` : formatPercent(pct)}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Academic Disclosures */}
      <div className="p-3.5 bg-slate-50 border-t border-slate-200 text-slate-500 text-[11px] flex items-center gap-2">
        <Info className="w-3.5 h-3.5 text-slate-400 shrink-0" />
        <span>
          <strong>Ethical Disclosure:</strong> Dataset generated for academic modeling and portfolio evaluation. No proprietary company data was used or disclosed.
        </span>
      </div>
    </div>
  );
}
