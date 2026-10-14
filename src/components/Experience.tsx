import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Briefcase, Calendar, CheckCircle2, TrendingUp, Users, ArrowUpRight } from 'lucide-react';

export default function Experience() {
  const { experiences } = PORTFOLIO_DATA;

  return (
    <section id="experience" className="py-16 md:py-24 bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold">
            04. Transferable Leadership & Organizational Experience
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
            Leadership, Budgeting & Project Management
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            Demonstrated competence in funding proposals, expense tracking, and team coordination in university initiatives.
          </p>
        </div>

        {/* Timeline / Experience Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {experiences.map((exp, idx) => (
            <div
              key={exp.id}
              className="bg-slate-50 border border-slate-200 rounded-xl p-6 shadow-2xs hover:border-slate-300 transition-colors flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Organization & Period */}
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-500 font-mono mb-1">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      {exp.period}
                    </span>
                    <span className="text-slate-400">Transferable Experience</span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 leading-snug">
                    {exp.role}
                  </h3>
                  <div className="text-xs font-semibold text-slate-700 mt-0.5">
                    {exp.organization}
                  </div>
                  <div className="text-[11px] text-slate-500">
                    {exp.program}
                  </div>
                </div>

                {/* Responsibilities */}
                <div>
                  <span className="text-[11px] font-semibold text-slate-800 uppercase tracking-wider block mb-2">
                    Key Contributions & Responsibilities:
                  </span>
                  <div className="space-y-2">
                    {exp.responsibilities.map((resp, rIdx) => (
                      <div key={rIdx} className="flex items-start gap-2 text-xs text-slate-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-900 shrink-0 mt-1.5" />
                        <span className="leading-relaxed">{resp}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Transferable Finance Skills Box */}
              <div className="mt-5 pt-4 border-t border-slate-200">
                <span className="text-[11px] font-mono text-emerald-800 uppercase tracking-wider block mb-2 font-semibold">
                  Transferable Financial Competencies:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {exp.transferableFinanceSkills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2 py-0.5 bg-white border border-slate-200 rounded text-[11px] text-slate-700 font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Transferability Context Footer */}
        <div className="mt-8 p-4 bg-slate-100/70 border border-slate-200 rounded-xl text-xs text-slate-600 leading-relaxed">
          <strong className="text-slate-900">Transferability Note:</strong> Organizational leadership provided hands-on accountability in formulating initial proposal budgets, tracking cash outlays against receipts, ensuring funding grant compliance, and synthesizing transparent accountability documentation (LPJ).
        </div>
      </div>
    </section>
  );
}
