import { useState } from 'react';
import { CheckCircle2, ChevronRight, BookOpen, Layers, ShieldCheck, Database, FileSpreadsheet, ArrowRight } from 'lucide-react';

export default function AccurateWorkflowDemo() {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      step: "01",
      title: "Company Setup & Preferences",
      module: "Setup Wizard (Persiapan Singkat)",
      objective: "Initialize the corporate database, base currency (IDR), fiscal calendar year, and basic tax profiles.",
      details: [
        "Create standard .GDB database file with proper collation and currency symbol (Rp).",
        "Configure company tax info, address, fiscal period start date, and fiscal year rollover.",
        "Set default valuation method (FIFO or Moving Average) for perpetual inventory tracking.",
        "Define invoice layout templates, default aging periods, and payment term definitions (e.g. Net 30, COD, 2/10 n/30)."
      ],
      sampleOutput: "Verified company profile initialized with default accounts configured."
    },
    {
      step: "02",
      title: "Chart of Accounts (COA) Architecture",
      module: "List → Chart of Accounts (Daftar Akun)",
      objective: "Establish 5-digit structured account coding hierarchy compliant with Indonesian SAK standards.",
      details: [
        "1-0000: Current & Non-Current Assets (Cash in Bank, AR, Merchandise Inventory, Prepaid Expenses, Fixed Assets).",
        "2-0000: Liabilities (Trade Accounts Payable, Accrued Payroll, Tax Payables PPh 21/23/Final, PPN Keluaran).",
        "3-0000: Equity (Modal Disetor, Laba Ditahan / Retained Earnings).",
        "4-0000: Revenues (Operating Sales, Sales Discounts, Sales Returns).",
        "5-0000 / 6-0000: Cost of Goods Sold & Operational Expenses (Salaries, Rent, Utilities, Depreciation)."
      ],
      sampleOutput: "Full COA master table verified with parent-child sub-account linkage."
    },
    {
      step: "03",
      title: "Purchasing & Vendor Payable Cycle",
      module: "Activities → Purchase (Aktivitas Pembelian)",
      objective: "Record procurement transactions from purchase requisition to vendor settlement.",
      details: [
        "Purchase Order (PO): Input ordered items, quantities, agreed supplier unit prices, and estimated delivery dates.",
        "Receive Item (Penerimaan Barang): Match receiving report against PO; automatically generates unbilled AP accrual.",
        "Purchase Invoice (Faktur Pembelian): Verify vendor bill, calculate PPN Masukan (11%), and establish Accounts Payable liability.",
        "Purchase Payment (Pembayaran Pembelian): Clear vendor liability via Bank Transfer or Giro; print payment voucher."
      ],
      sampleOutput: "Debit: Merchandise Inventory (1-1300) + PPN Masukan (1-1500) | Credit: Accounts Payable (2-1100)"
    },
    {
      step: "04",
      title: "Sales & Accounts Receivable Cycle",
      module: "Activities → Sales (Aktivitas Penjualan)",
      objective: "Execute complete revenue workflow with customer billing, invoice generation, and receivables collection.",
      details: [
        "Sales Order (Pesanan Penjualan): Confirm customer order volume, price tier, and credit limit check.",
        "Delivery Order (Pengiriman Pesanan): Dispatch goods from warehouse; triggers COGS and Inventory relief journal.",
        "Sales Invoice (Faktur Penjualan): Generate tax invoice (Faktur Pajak), recognize Net Sales Revenue and PPN Keluaran (11%).",
        "Customer Receipt (Penerimaan Penjualan): Receive payment via bank transfer; match invoice and recognize any early settlement discount."
      ],
      sampleOutput: "Debit: Accounts Receivable (1-1200) | Credit: Sales Revenue (4-1000) + PPN Keluaran (2-1400)"
    },
    {
      step: "05",
      title: "Cash, Bank & Journal Adjustments",
      module: "Activities → Cash & Bank / General Journal",
      objective: "Record non-routine transactions, petty cash reimbursements, and month-end adjusting entries.",
      details: [
        "Other Deposit & Payment: Record non-sales receipts, petty cash disbursements, and administrative bank fees.",
        "Bank Reconciliation: Match bank statement line items against internal Accurate 5 bank ledger records.",
        "Adjusting Journal Entries (Jurnal Penyesuaian): Monthly fixed asset depreciation (Straight-line method), prepaid insurance amortization, and payroll accruals."
      ],
      sampleOutput: "Debit: Beban Penyusutan (6-1400) | Credit: Akumulasi Penyusutan (1-2200)"
    },
    {
      step: "06",
      title: "Trial Balance & Financial Report Extraction",
      module: "Reports → Financial Statements (Laporan Keuangan)",
      objective: "Verify total debits match total credits and produce standard financial reports.",
      details: [
        "Generate Trial Balance (Neraca Saldo) to confirm equality: Total Debit = Total Credit (Rp 0 discrepancy).",
        "Extract Profit & Loss Statement (Laba Rugi) comparing operating revenue vs cost of goods sold and operating expenses.",
        "Extract Balance Sheet (Neraca) verifying Assets = Liabilities + Equity.",
        "Export reports to formatted Microsoft Excel workbooks for managerial audit and review."
      ],
      sampleOutput: "Complete audited trial balance and standardized financial statements generated."
    }
  ];

  const current = steps[activeStep];

  return (
    <div className="bg-white border border-slate-200 rounded-xl shadow-xs overflow-hidden">
      {/* Header */}
      <div className="bg-slate-900 text-white p-5 border-b border-slate-800">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 tracking-wide uppercase">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400" />
              <span>Accurate 5 Practical Workflow Demonstration</span>
            </div>
            <h4 className="text-lg font-semibold text-white mt-1">End-to-End Accounting Transaction Cycle</h4>
            <p className="text-xs text-slate-400 mt-0.5">
              Structured walkthrough of standard Indonesian ERP bookkeeping workflows studied and practiced
            </p>
          </div>
          <div className="text-right">
            <span className="text-xs px-2.5 py-1 bg-slate-800 border border-slate-700 text-slate-300 rounded font-mono">
              Status: Practical Knowledge
            </span>
          </div>
        </div>
      </div>

      {/* Stepper bar */}
      <div className="p-3 bg-slate-50 border-b border-slate-200 overflow-x-auto">
        <div className="flex items-center gap-1 min-w-max">
          {steps.map((s, idx) => (
            <button
              key={s.step}
              onClick={() => setActiveStep(idx)}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                activeStep === idx
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/70'
              }`}
            >
              <span className="font-mono text-[11px] opacity-75">{s.step}.</span>
              <span>{s.title.split('&')[0].trim()}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Main Step Content */}
      <div className="p-5 sm:p-6">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 pb-4 border-b border-slate-200">
          <div>
            <span className="text-xs font-mono text-slate-500 uppercase tracking-wide">
              Module Step {current.step} of 06 · {current.module}
            </span>
            <h5 className="text-base font-bold text-slate-900 mt-1">{current.title}</h5>
            <p className="text-xs text-slate-600 mt-1">{current.objective}</p>
          </div>

          <div className="flex items-center gap-2 self-start">
            <button
              disabled={activeStep === 0}
              onClick={() => setActiveStep(prev => Math.max(0, prev - 1))}
              className="px-2.5 py-1 text-xs border border-slate-300 rounded text-slate-700 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-100"
            >
              Previous
            </button>
            <button
              disabled={activeStep === steps.length - 1}
              onClick={() => setActiveStep(prev => Math.min(steps.length - 1, prev + 1))}
              className="px-2.5 py-1 text-xs bg-slate-900 text-white rounded disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-800"
            >
              Next Step
            </button>
          </div>
        </div>

        {/* Workflow Procedures */}
        <div className="mt-5">
          <h6 className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
            Detailed Workflow Procedures
          </h6>
          <div className="space-y-2">
            {current.details.map((detail, dIdx) => (
              <div key={dIdx} className="flex items-start gap-2.5 p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                <span>{detail}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Output / Journal Result */}
        <div className="mt-5 p-3.5 bg-slate-900 text-white rounded-lg">
          <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 mb-1">
            <Database className="w-3.5 h-3.5" />
            <span>Accounting Verification / Journal Output:</span>
          </div>
          <p className="text-xs font-mono text-slate-200">{current.sampleOutput}</p>
        </div>
      </div>
    </div>
  );
}
