import { PORTFOLIO_DATA } from '../data/portfolioData';
import { ArrowUp, BookOpen, FileDown, Mail, Linkedin } from 'lucide-react';

interface Props {
  onOpenCvModal: () => void;
  onOpenDeployGuide: () => void;
}

export default function Footer({ onOpenCvModal, onOpenDeployGuide }: Props) {
  const { profile } = PORTFOLIO_DATA;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-white border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start pb-10 border-b border-slate-800">
          {/* Identity Col */}
          <div className="md:col-span-5 space-y-3">
            <h4 className="text-base font-bold text-white tracking-tight">
              {profile.name}
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Bachelor of Economics (S.E.) from IPB University. Entry-level candidate targeting Finance Staff, Accounting Staff, Treasury Staff, and Financial Operations in Indonesia.
            </p>
            <div className="pt-1 flex items-center gap-3 text-xs text-slate-400">
              <a
                href={`mailto:${profile.email}`}
                className="hover:text-emerald-400 transition-colors inline-flex items-center gap-1.5"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>{profile.email}</span>
              </a>
              <span className="text-slate-700">·</span>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="hover:text-emerald-400 transition-colors inline-flex items-center gap-1.5"
              >
                <Linkedin className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-4 space-y-2 text-xs">
            <span className="font-semibold text-slate-300 uppercase tracking-wider text-[11px] block font-mono">
              Quick Navigation
            </span>
            <div className="grid grid-cols-2 gap-2 text-slate-400">
              <a href="#about" className="hover:text-white transition-colors">About Me</a>
              <a href="#skills" className="hover:text-white transition-colors">Skills & Toolkit</a>
              <a href="#projects" className="hover:text-white transition-colors">Finance Projects</a>
              <a href="#experience" className="hover:text-white transition-colors">Leadership Experience</a>
              <a href="#certifications" className="hover:text-white transition-colors">Certifications</a>
              <a href="#contact" className="hover:text-white transition-colors">Contact</a>
            </div>
          </div>

          {/* Actions & Setup */}
          <div className="md:col-span-3 space-y-3 text-xs">
            <span className="font-semibold text-slate-300 uppercase tracking-wider text-[11px] block font-mono">
              Recruiter Resources
            </span>
            <div className="flex flex-col gap-2">
              <button
                onClick={onOpenCvModal}
                className="w-full text-left py-2 px-3 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg inline-flex items-center justify-between transition-colors border border-slate-700 cursor-pointer"
              >
                <span>Curriculum Vitae (PDF)</span>
                <FileDown className="w-3.5 h-3.5 text-emerald-400" />
              </button>

              <button
                onClick={onOpenDeployGuide}
                className="w-full text-left py-2 px-3 bg-slate-800/60 hover:bg-slate-800 text-slate-300 rounded-lg inline-flex items-center justify-between transition-colors border border-slate-700/60 cursor-pointer"
              >
                <span>Owner & Setup Guide</span>
                <BookOpen className="w-3.5 h-3.5 text-slate-400" />
              </button>
            </div>
          </div>
        </div>

        {/* Quiet Bottom Copyright & Back to Top */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} Daffa Aulia Rahman, S.E. All professional portfolio assets and models reserved.
          </p>

          <div className="flex items-center gap-4">
            <span className="text-[11px] text-slate-500">
              Sample datasets marked for academic/practice demonstration.
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 text-slate-400 hover:text-white rounded hover:bg-slate-800 transition-colors inline-flex items-center gap-1"
              aria-label="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span className="text-[11px]">Top</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
