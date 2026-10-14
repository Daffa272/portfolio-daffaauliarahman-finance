import { useState } from 'react';
import { PORTFOLIO_DATA, ProjectItem } from '../data/portfolioData';
import { 
  ArrowUpRight, 
  FileText, 
  Calculator, 
  Layers, 
  CheckCircle2, 
  SlidersHorizontal,
  ExternalLink,
  Table,
  Eye,
  Info
} from 'lucide-react';
import InteractiveBudgetDashboard from './InteractiveBudgetDashboard';

interface Props {
  onSelectProject: (project: ProjectItem) => void;
  onOpenReport: (project: ProjectItem) => void;
}

export default function Projects({ onSelectProject, onOpenReport }: Props) {
  const { projects } = PORTFOLIO_DATA;
  const [filter, setFilter] = useState<'All' | 'Sample Project' | 'Planned Project'>('All');
  const [showEmbeddedDemo, setShowEmbeddedDemo] = useState(true);

  const filteredProjects = projects.filter(p => filter === 'All' || p.status === filter);

  return (
    <section id="projects" className="py-16 md:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div className="max-w-3xl">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold">
              03. Featured Finance Projects
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
              Practical Financial Models & Practice Portfolios
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2">
              Designed with clearly marked fictional/sample datasets illustrating analytical methodologies, variance analysis, and accounting workflows.
            </p>
          </div>

          {/* Filter segment */}
          <div className="flex flex-wrap gap-1 bg-white p-1 rounded-lg border border-slate-200 self-start shadow-2xs">
            <button
              onClick={() => setFilter('All')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                filter === 'All' ? 'bg-slate-900 text-white font-semibold' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              All Projects ({projects.length})
            </button>
            <button
              onClick={() => setFilter('Sample Project')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                filter === 'Sample Project' ? 'bg-slate-900 text-white font-semibold' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Sample Projects (3)
            </button>
            <button
              onClick={() => setFilter('Planned Project')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                filter === 'Planned Project' ? 'bg-slate-900 text-white font-semibold' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Planned Practice (1)
            </button>
          </div>
        </div>

        {/* Live Interactive Model Showcase Callout (Budget vs Actual) */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-slate-900 uppercase tracking-wide">
                Live Featured Model: Budget vs. Actual Dashboard
              </span>
              <span className="text-[11px] font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                Interactive Simulation
              </span>
            </div>
            <button
              onClick={() => setShowEmbeddedDemo(!showEmbeddedDemo)}
              className="text-xs text-slate-600 hover:text-slate-900 font-medium underline underline-offset-4"
            >
              {showEmbeddedDemo ? 'Hide Inline Simulator' : 'Show Inline Simulator'}
            </button>
          </div>

          {showEmbeddedDemo && (
            <div className="shadow-xs rounded-xl overflow-hidden">
              <InteractiveBudgetDashboard />
            </div>
          )}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-2xs hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div className="p-6 space-y-4">
                {/* Header metadata */}
                <div className="flex items-start justify-between gap-3">
                  <div>
                    {/* Quiet metadata line without pills */}
                    <div className="flex items-center gap-2 text-xs font-mono text-slate-500 mb-1">
                      <span className={project.status === 'Sample Project' ? 'text-emerald-700 font-medium' : 'text-slate-600'}>
                        {project.status}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span>Excel & ERP Modeling</span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 leading-snug">
                      {project.title}
                    </h3>
                  </div>

                  <button
                    onClick={() => onSelectProject(project)}
                    className="p-2 text-slate-400 hover:text-slate-900 rounded-lg hover:bg-slate-100 transition-colors"
                    title="View Full Case Study"
                    aria-label={`View full details for ${project.title}`}
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </button>
                </div>

                {/* Problem statement */}
                <div className="text-xs text-slate-600 space-y-1">
                  <span className="font-semibold text-slate-800 uppercase tracking-wider text-[11px] block">
                    Business Problem:
                  </span>
                  <p className="leading-relaxed line-clamp-2">{project.problemStatement}</p>
                </div>

                {/* Objective */}
                <div className="text-xs text-slate-600 space-y-1">
                  <span className="font-semibold text-slate-800 uppercase tracking-wider text-[11px] block">
                    Objective:
                  </span>
                  <p className="leading-relaxed line-clamp-2">{project.objective}</p>
                </div>

                {/* Tools used */}
                <div>
                  <span className="font-semibold text-slate-800 uppercase tracking-wider text-[11px] block mb-1.5">
                    Tools & Methods:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tools.map((t) => (
                      <span key={t} className="px-2.5 py-1 bg-slate-100 rounded text-[11px] font-medium text-slate-700">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Calculations Sample */}
                <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg font-mono text-[11px] text-slate-700">
                  <span className="text-[10px] uppercase font-semibold text-slate-400 block mb-1">
                    Primary Calculation Formula:
                  </span>
                  <code>{project.keyCalculations[0]}</code>
                </div>

                {/* Findings & Recommendations highlight */}
                <div className="pt-2 border-t border-slate-100 text-xs text-slate-600 space-y-1">
                  <div className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 shrink-0 mt-0.5" />
                    <span className="line-clamp-2 leading-relaxed">
                      <strong>Key Finding:</strong> {project.findings[0]}
                    </span>
                  </div>
                </div>
              </div>

              {/* Bottom Action Footer */}
              <div className="px-6 py-3.5 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
                <button
                  onClick={() => onSelectProject(project)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-900 hover:text-slate-700 transition-colors"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>View Details & Model</span>
                </button>

                {project.reportAvailable ? (
                  <button
                    onClick={() => onOpenReport(project)}
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-emerald-700 hover:text-emerald-800 transition-colors"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    <span>View Report</span>
                  </button>
                ) : (
                  <span className="text-[11px] text-slate-400 font-mono">
                    Report In Practice
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Ethical disclaimer footer */}
        <div className="mt-10 p-4 bg-white border border-slate-200 rounded-xl text-xs text-slate-500 flex items-start sm:items-center gap-3">
          <Info className="w-4 h-4 text-slate-400 shrink-0 mt-0.5 sm:mt-0" />
          <p>
            <strong>Transparent Candidate Disclosure:</strong> These models represent self-directed and academic projects created to validate practical competence in budgeting, cash flow forecasting, and financial ratio analysis. No real corporate figures have been simulated or claimed as commercial employment.
          </p>
        </div>
      </div>
    </section>
  );
}
