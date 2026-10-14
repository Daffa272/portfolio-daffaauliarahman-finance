import { useState } from 'react';
import { X, BookOpen, FileCode, Upload, Globe, CheckCircle2, Copy, Check } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function DeploymentGuideModal({ isOpen, onClose }: Props) {
  const [activeTab, setActiveTab] = useState<'content' | 'cv' | 'certificates' | 'deploy'>('content');
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleCopy = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/75 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-fade-in">
      <div 
        className="bg-white rounded-xl shadow-2xl max-w-3xl w-full max-h-[90vh] flex flex-col border border-slate-200 overflow-hidden"
        role="dialog"
        aria-modal="true"
        aria-labelledby="guide-title"
      >
        {/* Header */}
        <div className="bg-slate-900 text-white px-6 py-4 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            <BookOpen className="w-5 h-5 text-emerald-400" />
            <div>
              <h3 id="guide-title" className="text-base font-bold text-white">
                Portfolio Owner & Setup Guide
              </h3>
              <p className="text-xs text-slate-400">
                How to update projects, upload certificates, configure CV PDF, and deploy.
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-slate-400 hover:text-white rounded"
            aria-label="Close guide"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab buttons */}
        <div className="bg-slate-100 px-6 py-2 border-b border-slate-200 flex gap-2 overflow-x-auto">
          <button
            onClick={() => setActiveTab('content')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors ${
              activeTab === 'content' ? 'bg-slate-900 text-white shadow-2xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            1. Update Projects & Data
          </button>
          <button
            onClick={() => setActiveTab('cv')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors ${
              activeTab === 'cv' ? 'bg-slate-900 text-white shadow-2xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            2. Change CV PDF
          </button>
          <button
            onClick={() => setActiveTab('certificates')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors ${
              activeTab === 'certificates' ? 'bg-slate-900 text-white shadow-2xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            3. Upload Certificates
          </button>
          <button
            onClick={() => setActiveTab('deploy')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors ${
              activeTab === 'deploy' ? 'bg-slate-900 text-white shadow-2xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            4. Deploying Live
          </button>
        </div>

        {/* Body content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4 text-xs text-slate-700 leading-relaxed">
          {activeTab === 'content' && (
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-bold text-slate-900 mb-1">
                  How to Update Content & Add New Projects
                </h4>
                <p>
                  All personal data, skills, leadership experiences, and financial project models are cleanly centralized in a single TypeScript configuration file:
                </p>
                <code className="block p-2 bg-slate-100 rounded text-slate-800 font-mono my-2 text-[11px]">
                  src/data/portfolioData.ts
                </code>
              </div>

              <div className="space-y-2">
                <span className="font-semibold text-slate-900 block">Steps to add or change a project:</span>
                <ol className="list-decimal list-inside space-y-1.5 text-slate-600 pl-1">
                  <li>Open <code className="text-slate-800 font-mono">src/data/portfolioData.ts</code> in your code editor.</li>
                  <li>Locate the <code className="text-slate-800 font-mono">projects</code> array.</li>
                  <li>When you have completed a planned project, switch its <code className="text-slate-800 font-mono">status</code> from <code className="text-slate-800 font-mono">"Planned Project"</code> to <code className="text-slate-800 font-mono">"Verified Project"</code> or <code className="text-slate-800 font-mono">"Completed Project"</code>.</li>
                  <li>To update monthly budget or cash flow figures, edit <code className="text-slate-800 font-mono">BUDGET_SAMPLE_DATA</code> or <code className="text-slate-800 font-mono">CASH_FLOW_SAMPLE_DATA</code>. The dashboard calculations and charts will automatically re-render without breaking!</li>
                </ol>
              </div>
            </div>
          )}

          {activeTab === 'cv' && (
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-bold text-slate-900 mb-1">
                  How to Replace the CV with Your Actual PDF
                </h4>
                <p>
                  The website includes both an ATS-friendly in-browser printable resume and a direct download link configured for your PDF file.
                </p>
              </div>

              <div className="space-y-2">
                <span className="font-semibold text-slate-900 block">To connect your PDF:</span>
                <ol className="list-decimal list-inside space-y-1.5 text-slate-600 pl-1">
                  <li>Create a folder named <code className="text-slate-800 font-mono">public/cv/</code> in the root directory if it does not already exist.</li>
                  <li>Copy your resume PDF into that folder (e.g., <code className="text-slate-800 font-mono">public/cv/CV_Daffa_Aulia_Rahman_SE.pdf</code>).</li>
                  <li>In <code className="text-slate-800 font-mono">src/data/portfolioData.ts</code>, update the <code className="text-slate-800 font-mono">cvConfig</code> section:</li>
                </ol>

                <div className="p-3 bg-slate-900 text-slate-100 rounded-lg font-mono text-[11px] relative">
                  <pre>{`cvConfig: {
  fileName: "CV_Daffa_Aulia_Rahman_SE.pdf",
  filePath: "/cv/CV_Daffa_Aulia_Rahman_SE.pdf", // or an external Google Drive / Cloud link
  lastUpdated: "October 2026"
}`}</pre>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'certificates' && (
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-bold text-slate-900 mb-1">
                  How to Upload & Link Physical Certificates
                </h4>
                <p>
                  To uphold recruitment integrity, the portfolio displays verified certification titles from MySkill, Microsoft, and EF SET without generating fake verification links.
                </p>
              </div>

              <div className="space-y-2">
                <span className="font-semibold text-slate-900 block">Adding certificate documents:</span>
                <ol className="list-decimal list-inside space-y-1.5 text-slate-600 pl-1">
                  <li>Place your certificate scan images or PDF files in <code className="text-slate-800 font-mono">public/certificates/</code>.</li>
                  <li>Add a <code className="text-slate-800 font-mono">fileUrl: "/certificates/myskill-corp-finance.pdf"</code> property to any certificate object inside <code className="text-slate-800 font-mono">src/data/portfolioData.ts</code>.</li>
                  <li>The modal viewer will automatically display a direct download and preview link for recruiters.</li>
                </ol>
              </div>
            </div>
          )}

          {activeTab === 'deploy' && (
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-bold text-slate-900 mb-1">
                  Deploying to Production (Free Hosting Options)
                </h4>
                <p>
                  This project is a high-performance React + Vite Single Page Application (SPA) with Tailwind CSS. It builds into pure static assets via <code className="text-slate-800 font-mono">npm run build</code> and can be hosted anywhere.
                </p>
              </div>

              <div className="space-y-3">
                <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg">
                  <span className="font-bold text-slate-900 block mb-1">Option A: Vercel (Recommended)</span>
                  <p className="text-slate-600">
                    Push this code to GitHub, connect your repository at <code className="text-slate-800 font-mono">vercel.com</code>, and click <strong>Deploy</strong>. Framework preset is automatically detected as Vite.
                  </p>
                </div>

                <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg">
                  <span className="font-bold text-slate-900 block mb-1">Option B: Netlify</span>
                  <p className="text-slate-600">
                    Drag and drop the generated <code className="text-slate-800 font-mono">dist</code> folder to Netlify Drop, or connect via Git with Build command: <code className="text-slate-800 font-mono">npm run build</code> and Publish directory: <code className="text-slate-800 font-mono">dist</code>.
                  </p>
                </div>

                <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg">
                  <span className="font-bold text-slate-900 block mb-1">Option C: Google Cloud Run</span>
                  <p className="text-slate-600">
                    Use the standard Node container configuration already included in this project workspace.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="bg-slate-50 px-6 py-3 border-t border-slate-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-900 text-white rounded-lg text-xs font-semibold hover:bg-slate-800"
          >
            Close Guide
          </button>
        </div>
      </div>
    </div>
  );
}
