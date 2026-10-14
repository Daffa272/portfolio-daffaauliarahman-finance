import { PORTFOLIO_DATA } from '../data/portfolioData';
import { GraduationCap, Award, BookOpen, Target, CheckCircle2 } from 'lucide-react';

export default function About() {
  const { profile } = PORTFOLIO_DATA;

  const academicFoundations = [
    {
      title: "Corporate Finance",
      desc: "Capital structure, time value of money, working capital cycles, and capital budgeting appraisal."
    },
    {
      title: "Financial Accounting",
      desc: "Debit-credit mechanics, accruals, prepayments, trial balance reconciliation, and financial statement preparation."
    },
    {
      title: "Cost Accounting",
      desc: "Cost behavior (fixed vs variable), overhead allocation, job-order costing, and variance analysis."
    },
    {
      title: "Financial Statement Analysis",
      desc: "Horizontal & vertical common-size analysis, liquidity ratios, solvency ratios, and profitability assessment."
    }
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold">
            01. Professional Profile
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
            Economics Graduate with Strong Financial Foundation
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            Disciplined entry-level candidate targeting Finance Staff, Accounting Staff, and Treasury Operations.
          </p>
        </div>

        {/* 2-Column Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Narrative Bio */}
          <div className="lg:col-span-7 space-y-4">
            <div className="bg-white p-6 sm:p-7 rounded-xl border border-slate-200 shadow-2xs space-y-4 text-sm text-slate-700 leading-relaxed">
              {profile.aboutBio.map((paragraph, index) => (
                <p key={index}>
                  {paragraph}
                </p>
              ))}

              <div className="pt-3 border-t border-slate-100 flex flex-wrap gap-y-2 gap-x-4 text-xs font-medium text-slate-600">
                <span className="text-slate-900 font-semibold">Core Competencies:</span>
                <span>· Analytical Thinking</span>
                <span>· High Attention to Detail</span>
                <span>· Team Leadership</span>
                <span>· Adaptability</span>
              </div>
            </div>

            {/* Transferable Organizational Impact Callout */}
            <div className="p-5 bg-white border border-slate-200 rounded-xl shadow-2xs">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-900 uppercase tracking-wider mb-2">
                <Target className="w-4 h-4 text-emerald-700" />
                <span>Organizational Financial Leadership Experience</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Led funding proposals securing university business grants, managed operational committee budgets of 30+ members, and executed post-event accountability reports (LPJ) with transparent invoice verification.
              </p>
            </div>
          </div>

          {/* Right Column: Academic & Foundation Highlights */}
          <div className="lg:col-span-5 space-y-4">
            {/* Degree Card */}
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-2xs">
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-xs font-mono text-slate-500 uppercase tracking-wider">Academic Degree</span>
                  <h3 className="text-base font-bold text-slate-900 mt-0.5">
                    Bachelor of Economics (S.E.)
                  </h3>
                  <p className="text-xs text-slate-600 mt-0.5">IPB University (Institut Pertanian Bogor)</p>
                </div>
                <div className="text-right">
                  <span className="text-xs text-slate-500 block">GPA</span>
                  <span className="text-xl font-extrabold text-slate-900 font-mono tabular-nums">
                    3.53 <span className="text-xs text-slate-400 font-normal">/ 4.00</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Academic Coursework Foundation Grid */}
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-2xs">
              <div className="flex items-center gap-2 mb-4">
                <BookOpen className="w-4 h-4 text-slate-700" />
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-800">
                  Key Academic Finance Subjects
                </h4>
              </div>

              <div className="space-y-3">
                {academicFoundations.map((foundation) => (
                  <div key={foundation.title} className="p-3 bg-slate-50 rounded-lg border border-slate-200 text-xs">
                    <span className="font-bold text-slate-900 block mb-0.5">{foundation.title}</span>
                    <span className="text-slate-600 leading-normal">{foundation.desc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Career Positioning Disclaimer */}
            <div className="p-4 bg-slate-100 rounded-lg border border-slate-200 text-xs text-slate-600 leading-relaxed">
              <strong className="text-slate-900">Career Positioning Note:</strong> I am actively seeking an entry-level position as <strong>Finance Staff, Accounting Staff, or Treasury Operations</strong> where I can apply rigorous analytical skills, execute disciplined reconciliations, and grow into long-term financial leadership.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
