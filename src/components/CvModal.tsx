import { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { X, Download, Printer, FileText, CheckCircle2, ExternalLink, Settings, Copy, Check } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onOpenDeployGuide: () => void;
}

export default function CvModal({ isOpen, onClose, onOpenDeployGuide }: Props) {
  const { profile } = PORTFOLIO_DATA;
  const [copiedLink, setCopiedLink] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyPath = () => {
    navigator.clipboard.writeText(profile.cvConfig.filePath);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/75 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-fade-in">
      <div 
        className="bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[92vh] flex flex-col border border-slate-200 overflow-hidden"
        role="dialog"
        aria-modal="true"
        aria-labelledby="cv-modal-title"
      >
        {/* Header bar */}
        <div className="bg-slate-900 text-white px-6 py-4 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-3">
            <FileText className="w-5 h-5 text-emerald-400" />
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                <span>Curriculum Vitae</span>
                <span>·</span>
                <span>PDF & ATS-Friendly Format</span>
              </div>
              <h3 id="cv-modal-title" className="text-base font-bold text-white">
                {profile.name} — Resume
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg text-xs font-medium border border-slate-700 inline-flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Print / Save as PDF</span>
            </button>

            <a
              href={profile.cvConfig.filePath}
              download={profile.cvConfig.fileName}
              className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-xs font-semibold inline-flex items-center gap-1.5 transition-colors cursor-pointer"
              title="Download configured PDF file"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>

            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
              aria-label="Close CV viewer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Configuration notice banner */}
        <div className="bg-slate-100 px-6 py-2.5 border-b border-slate-200 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-600">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-slate-800">Target Path:</span>
            <code className="bg-white px-2 py-0.5 rounded border border-slate-300 font-mono text-[11px] text-slate-700">
              {profile.cvConfig.filePath}
            </code>
            <button
              onClick={handleCopyPath}
              className="p-1 text-slate-400 hover:text-slate-800"
              title="Copy path"
            >
              {copiedLink ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
            </button>
          </div>

          <button
            onClick={onOpenDeployGuide}
            className="text-[11px] text-slate-700 hover:text-slate-950 font-medium underline inline-flex items-center gap-1"
          >
            <Settings className="w-3 h-3" />
            <span>How to swap with your actual PDF</span>
          </button>
        </div>

        {/* Formatted ATS Printable Resume Layout */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-10 bg-slate-50">
          <div className="max-w-2xl mx-auto bg-white p-8 sm:p-10 rounded-xl shadow-xs border border-slate-200 text-slate-800 space-y-6 print:border-none print:shadow-none print:p-0">
            {/* Resume Top Header */}
            <div className="border-b border-slate-200 pb-5 text-center sm:text-left">
              <h1 className="text-2xl font-black text-slate-900 tracking-tight">
                {profile.name}
              </h1>
              <p className="text-sm font-semibold text-slate-700 mt-0.5">
                {profile.title}
              </p>
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-3 gap-y-1 text-xs text-slate-500 mt-2 font-mono">
                <span>{profile.location}</span>
                <span>·</span>
                <a href={`mailto:${profile.email}`} className="text-slate-700 hover:underline">{profile.email}</a>
                <span>·</span>
                <a href={profile.linkedin} target="_blank" rel="noreferrer" className="text-slate-700 hover:underline">LinkedIn Profile</a>
              </div>
            </div>

            {/* Professional Summary */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1 mb-2 font-mono">
                Professional Profile
              </h2>
              <p className="text-xs text-slate-700 leading-relaxed">
                Economics graduate (S.E.) from IPB University with a cumulative GPA of 3.53/4.00, targeting entry-level Finance Staff, Accounting Staff, and Treasury Operations. Academic foundation in corporate finance, financial statement analysis, cost accounting, and budgeting. Proven leadership in managing project funding proposals, operational disbursements, and accountability reporting. Advanced in Microsoft Excel and familiar with Accurate 5 accounting cycles.
              </p>
            </div>

            {/* Education */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1 mb-2 font-mono">
                Education
              </h2>
              <div className="flex justify-between items-baseline text-xs">
                <div>
                  <strong className="text-slate-900">IPB University (Institut Pertanian Bogor)</strong>
                  <p className="text-slate-600">Bachelor of Economics (Sarjana Ekonomi - S.E.)</p>
                </div>
                <div className="text-right">
                  <span className="font-mono font-bold text-slate-900">GPA: 3.53 / 4.00</span>
                  <p className="text-slate-500 text-[11px]">Graduated</p>
                </div>
              </div>
            </div>

            {/* Technical Skills */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1 mb-2 font-mono">
                Core Competencies & Tools
              </h2>
              <div className="text-xs text-slate-700 space-y-1.5 leading-relaxed">
                <div>
                  <strong className="text-slate-900">Finance & Accounting:</strong> Corporate Finance, Financial Statement Analysis (Vertical/Horizontal/Ratios), Cost Accounting, Cash Flow Modeling (PSAK 2), Budget Planning & Variance Control, Tax & Audit Fundamentals.
                </div>
                <div>
                  <strong className="text-slate-900">Software & Tools:</strong> Microsoft Excel (Advanced: XLOOKUP, Pivot Tables, SUMIFS, Nested IFs, Model Building), Accurate 5 (Setup, COA, Sales/Purchases, Journals, Trial Balance), Word, PowerPoint.
                </div>
                <div>
                  <strong className="text-slate-900">Data Analytics:</strong> SQL, Google BigQuery, Power BI, Looker Studio, Data Cleaning & Verification.
                </div>
              </div>
            </div>

            {/* Leadership & Transferable Finance Experience */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1 mb-2 font-mono">
                Organizational Leadership Experience
              </h2>
              <div className="space-y-3 text-xs">
                <div>
                  <div className="flex justify-between font-semibold text-slate-900">
                    <span>UXER Indonesia (PMW IPB) — Team Leader</span>
                    <span className="text-slate-500 font-mono text-[11px]">Jan 2024 – Feb 2025</span>
                  </div>
                  <ul className="list-disc list-inside text-slate-600 mt-1 space-y-0.5">
                    <li>Authored funding proposal securing university entrepreneurship grant funding.</li>
                    <li>Oversaw operational budgeting, disbursement tracking, and financial justification reports.</li>
                  </ul>
                </div>

                <div>
                  <div className="flex justify-between font-semibold text-slate-900">
                    <span>The 15th Greenbase — Chief of Committee</span>
                    <span className="text-slate-500 font-mono text-[11px]">Apr 2023 – Nov 2023</span>
                  </div>
                  <ul className="list-disc list-inside text-slate-600 mt-1 space-y-0.5">
                    <li>Led 30+ committee members, managing division expenditure against budget limits.</li>
                    <li>Supervised sponsorship fund inflow tracking and final accountability report (LPJ).</li>
                  </ul>
                </div>

                <div>
                  <div className="flex justify-between font-semibold text-slate-900">
                    <span>PPK Ormawa REESA — Vice Team Leader</span>
                    <span className="text-slate-500 font-mono text-[11px]">Jan 2023 – Dec 2023</span>
                  </div>
                  <ul className="list-disc list-inside text-slate-600 mt-1 space-y-0.5">
                    <li>Supported program grant budget disbursements compliant with ministry standards.</li>
                    <li>Achieved 1st Place nationally in PPK Ormawa 2023.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Certifications & Awards */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1 mb-2 font-mono">
                Certifications & Awards
              </h2>
              <div className="text-xs text-slate-600 space-y-1">
                <p>· <strong>MySkill:</strong> Corporate Finance, Financial Statement Analysis, Financial Accounting, Cost Accounting, Intensive Accounting/Tax Bootcamp, SQL for Data Analysis.</p>
                <p>· <strong>Microsoft & LinkedIn:</strong> Career Essentials in Generative AI</p>
                <p>· <strong>EF SET:</strong> English Proficiency — B2 Upper Intermediate</p>
                <p>· <strong>Awards:</strong> 1st Place PPK Ormawa 2023 (Kemendikbudristek), PMW IPB Grant Awardee 2024.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-slate-900 text-slate-400 px-6 py-3 border-t border-slate-800 flex items-center justify-between text-xs">
          <span>Configurable CV Path: <code className="text-slate-200 font-mono">{profile.cvConfig.filePath}</code></span>
          <button
            onClick={onClose}
            className="text-white hover:underline font-semibold"
          >
            Close Viewer
          </button>
        </div>
      </div>
    </div>
  );
}
