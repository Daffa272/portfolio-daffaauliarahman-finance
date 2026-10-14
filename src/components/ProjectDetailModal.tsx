import React, { useState } from 'react';
import { ProjectItem } from '../data/portfolioData';
import { X, FileText, Download, CheckCircle2, AlertCircle, Calculator, Database, ShieldAlert, ArrowLeft, Printer } from 'lucide-react';
import InteractiveBudgetDashboard from './InteractiveBudgetDashboard';
import InteractiveCashFlowTracker from './InteractiveCashFlowTracker';
import InteractiveFinancialAnalysis from './InteractiveFinancialAnalysis';
import AccurateWorkflowDemo from './AccurateWorkflowDemo';

interface Props {
  project: ProjectItem | null;
  onClose: () => void;
}

export default function ProjectDetailModal({ project, onClose }: Props) {
  const [activeTab, setActiveTab] = useState<'overview' | 'interactive' | 'methodology' | 'findings'>('overview');

  if (!project) return null;

  const renderInteractiveModel = () => {
    switch (project.id) {
      case 'budget-vs-actual':
        return <InteractiveBudgetDashboard />;
      case 'cash-flow-monitoring':
        return <InteractiveCashFlowTracker />;
      case 'financial-statement-analysis':
        return <InteractiveFinancialAnalysis />;
      case 'accurate-5-accounting':
        return <AccurateWorkflowDemo />;
      default:
        return null;
    }
  };

  const handlePrintReport = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-fade-in">
      <div 
        className="bg-white rounded-xl shadow-2xl max-w-5xl w-full max-h-[92vh] flex flex-col border border-slate-200 overflow-hidden"
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
      >
        {/* Modal Top Bar */}
        <div className="bg-slate-900 text-white px-6 py-4 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="text-slate-400 hover:text-white p-1 rounded-md transition-colors"
              aria-label="Back to projects"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div>
              <div className="flex items-center gap-2 text-xs">
                <span className="font-mono text-emerald-400 uppercase tracking-wider">{project.status}</span>
                <span className="text-slate-500">·</span>
                <span className="text-slate-300">Portfolio Case Study</span>
              </div>
              <h3 id="project-modal-title" className="text-lg font-bold text-white mt-0.5">
                {project.title}
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrintReport}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg text-xs font-medium border border-slate-700 transition-colors"
              title="Print / Save as PDF summary"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print Summary</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-slate-100 px-6 py-2.5 border-b border-slate-200 flex items-center justify-between overflow-x-auto">
          <div className="flex items-center gap-1 bg-white p-1 rounded-lg border border-slate-200 shadow-2xs">
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                activeTab === 'overview'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              1. Overview & Problem
            </button>
            <button
              onClick={() => setActiveTab('interactive')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors flex items-center gap-1.5 ${
                activeTab === 'interactive'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span>2. Interactive Model & Preview</span>
            </button>
            <button
              onClick={() => setActiveTab('methodology')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                activeTab === 'methodology'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              3. Dataset & Calculations
            </button>
            <button
              onClick={() => setActiveTab('findings')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                activeTab === 'findings'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              4. Findings, Limitations & Outcomes
            </button>
          </div>

          <span className="text-xs text-slate-500 font-mono hidden md:inline-block">
            Tools: {project.tools.join(', ')}
          </span>
        </div>

        {/* Modal Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* Tab 1: Overview & Problem */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              {/* 1. Project Overview */}
              <div className="bg-slate-50 p-5 rounded-xl border border-slate-200">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  1. Project Overview & Executive Summary
                </span>
                <p className="text-sm text-slate-700 mt-2 leading-relaxed font-normal">
                  {project.objective}
                </p>
                <div className="mt-4 p-3.5 bg-white border border-slate-200 rounded-lg">
                  <span className="text-xs font-semibold text-slate-900">Executive Summary: </span>
                  <span className="text-xs text-slate-600">{project.executiveSummary}</span>
                </div>
              </div>

              {/* 2. Business Problem */}
              <div className="p-5 bg-white rounded-xl border border-slate-200">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  2. Business Problem Addressed
                </span>
                <p className="text-sm text-slate-700 mt-2 leading-relaxed">
                  {project.problemStatement}
                </p>
                <div className="mt-4 flex flex-wrap gap-2 text-xs text-slate-600">
                  <span className="font-semibold text-slate-900">Target Operational Objectives:</span>
                  <span>· Improve variance detection speed</span>
                  <span>· Provide zero-error arithmetic checks</span>
                  <span>· Enable data-backed budgeting allocations</span>
                </div>
              </div>

              {/* Tools Used */}
              <div className="p-5 bg-slate-50 rounded-xl border border-slate-200">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Core Tools & Technical Application
                </span>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.tools.map(tool => (
                    <span key={tool} className="px-3 py-1 bg-white border border-slate-300 rounded-md text-xs font-medium text-slate-800">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Tab 2: Interactive Model */}
          {activeTab === 'interactive' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs text-slate-500 px-1">
                <span>6. Live Interactive Dashboard Simulator & Model Demonstration</span>
                <span className="font-mono text-emerald-700 font-medium">Fully Responsive Spreadsheet Engine</span>
              </div>
              {renderInteractiveModel()}
            </div>
          )}

          {/* Tab 3: Dataset & Calculations */}
          {activeTab === 'methodology' && (
            <div className="space-y-6">
              {/* 3. Dataset Description */}
              <div className="p-5 bg-slate-50 rounded-xl border border-slate-200">
                <div className="flex items-center gap-2">
                  <Database className="w-4 h-4 text-slate-700" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-600">
                    3. Dataset Description & Provenance
                  </span>
                </div>
                <p className="text-xs text-slate-700 mt-2 leading-relaxed">
                  {project.datasetDescription}
                </p>
                <div className="mt-3 p-3 bg-amber-50/70 border border-amber-200 rounded-lg text-xs text-amber-900 flex items-start gap-2">
                  <ShieldAlert className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                  <span>
                    <strong>Integrity Notice:</strong> In strict alignment with ethical finance practices, all figures in this model are synthesized sample records or standard case scenarios. No client or confidential enterprise records are fabricated.
                  </span>
                </div>
              </div>

              {/* 4. Methodology */}
              <div className="p-5 bg-white rounded-xl border border-slate-200">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  4. Step-by-Step Methodology
                </span>
                <div className="mt-3 space-y-2.5">
                  {project.methodology.map((m, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-xs text-slate-700">
                      <span className="w-5 h-5 rounded-full bg-slate-900 text-white flex items-center justify-center font-mono text-[10px] shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <span>{m}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 5. Calculations and Formulas */}
              <div className="p-5 bg-slate-50 rounded-xl border border-slate-200">
                <div className="flex items-center gap-2 mb-3">
                  <Calculator className="w-4 h-4 text-slate-700" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-600">
                    5. Calculations, Formulas & Logic
                  </span>
                </div>
                <div className="space-y-2">
                  {project.keyCalculations.map((calc, idx) => (
                    <div key={idx} className="p-3 bg-white border border-slate-200 rounded-lg font-mono text-xs text-slate-800">
                      <code>{calc}</code>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Tab 4: Findings, Limitations & Outcomes */}
          {activeTab === 'findings' && (
            <div className="space-y-6">
              {/* 7. Key Findings */}
              <div className="p-5 bg-white rounded-xl border border-slate-200">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  7. Key Analytical Findings
                </span>
                <div className="mt-3 space-y-2">
                  {project.findings.map((finding, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                      <span>{finding}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 8. Recommendations */}
              <div className="p-5 bg-slate-50 rounded-xl border border-slate-200">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  8. Management Recommendations
                </span>
                <div className="mt-3 space-y-2">
                  {project.recommendations.map((rec, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-900 shrink-0 mt-1.5" />
                      <span>{rec}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 9. Limitations & Learning Outcomes */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-800 mb-2">
                    <AlertCircle className="w-4 h-4 text-amber-700" />
                    <span>9A. Limitations & Scope Constraints</span>
                  </div>
                  <ul className="space-y-1.5 text-xs text-slate-600 list-disc list-inside">
                    {project.limitations.map((lim, idx) => (
                      <li key={idx}>{lim}</li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-800 mb-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                    <span>9B. Learning Outcomes</span>
                  </div>
                  <ul className="space-y-1.5 text-xs text-slate-600 list-disc list-inside">
                    {project.learningOutcomes.map((outcome, idx) => (
                      <li key={idx}>{outcome}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* 10. Downloadable Report */}
              <div className="p-5 bg-slate-900 text-white rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-mono text-emerald-400 uppercase tracking-wide">
                    10. Documentation Deliverable
                  </span>
                  <h4 className="text-sm font-semibold text-white mt-1">Project Summary & Worksheets</h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Structured financial model sheet documentation and executive presentation ready for recruiter review.
                  </p>
                </div>
                <button
                  onClick={handlePrintReport}
                  className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-medium rounded-lg inline-flex items-center gap-2 self-start sm:self-center transition-colors shadow-xs"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Export Case Study (PDF)</span>
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="bg-slate-50 px-6 py-3 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
          <span>Prepared by Daffa Aulia Rahman, S.E.</span>
          <button
            onClick={onClose}
            className="text-slate-700 hover:text-slate-900 font-medium"
          >
            Close Viewer
          </button>
        </div>
      </div>
    </div>
  );
}
