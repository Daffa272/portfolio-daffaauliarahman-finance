import { PORTFOLIO_DATA } from '../data/portfolioData';
import { ArrowRight, FileDown, MapPin, Mail, GraduationCap, CheckCircle2 } from 'lucide-react';

interface Props {
  onOpenCvModal: () => void;
}

export default function Hero({ onOpenCvModal }: Props) {
  const { profile } = PORTFOLIO_DATA;

  return (
    <section id="home" className="relative pt-12 pb-16 md:pt-20 md:pb-24 border-b border-slate-200 bg-white">
      {/* Subtle grid pattern background for financial consulting feel */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-70 pointer-events-none" 
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Main Hero Column */}
          <div className="lg:col-span-8 space-y-6">
            {/* Candidate metadata header - Clean unboxed text with typographic separators */}
            <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs font-medium text-slate-600">
              <span className="text-slate-900 font-semibold">{profile.name}</span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span>{profile.title}</span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span className="inline-flex items-center gap-1 text-slate-600">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                {profile.location}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              {profile.heroHeadline}
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-normal">
              {profile.heroSupportingText}
            </p>

            {/* Direct Contact Metadata row */}
            <div className="pt-1 flex flex-wrap items-center gap-y-2 gap-x-4 text-xs text-slate-600">
              <a 
                href={`mailto:${profile.email}`} 
                className="inline-flex items-center gap-1.5 text-slate-800 hover:text-slate-950 font-medium underline underline-offset-4 decoration-slate-300"
              >
                <Mail className="w-3.5 h-3.5 text-slate-400" />
                <span>{profile.email}</span>
              </a>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span className="inline-flex items-center gap-1.5">
                <GraduationCap className="w-3.5 h-3.5 text-slate-400" />
                <span>{profile.university} (GPA {profile.gpa}/{profile.gpaScale})</span>
              </span>
            </div>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-semibold rounded-lg transition-colors shadow-2xs group"
              >
                <span>Explore My Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>

              <button
                onClick={onOpenCvModal}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white hover:bg-slate-50 text-slate-800 text-xs sm:text-sm font-semibold rounded-lg border border-slate-300 hover:border-slate-400 transition-colors shadow-2xs"
              >
                <FileDown className="w-4 h-4 text-emerald-700" />
                <span>Download CV</span>
              </button>
            </div>

            {/* Compact Skill Highlights Bar */}
            <div className="pt-4 border-t border-slate-200">
              <span className="text-xs uppercase tracking-wider font-semibold text-slate-400 block mb-2.5">
                Core Competency Highlights
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {profile.compactSkills.map((skill) => (
                  <div
                    key={skill}
                    className="p-2.5 bg-slate-50 border border-slate-200 rounded-lg flex items-center gap-2 text-xs font-semibold text-slate-800"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                    <span className="truncate">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Recruiter Profile Card */}
          <div className="lg:col-span-4">
            <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-7 shadow-lg border border-slate-800 space-y-6">
              {/* Header */}
              <div>
                <span className="text-[11px] font-mono tracking-wider uppercase text-emerald-400">
                  Target Entry Roles
                </span>
                <h3 className="text-xl font-bold text-white mt-1">
                  Candidate Profile
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Ready for corporate finance, treasury & accounting operations in Indonesia.
                </p>
              </div>

              {/* Target Positions List */}
              <div className="space-y-2 pt-1">
                {profile.targetRoles.map((role, idx) => (
                  <div 
                    key={role} 
                    className="flex items-center justify-between p-2.5 bg-slate-800/80 rounded-lg border border-slate-700 text-xs"
                  >
                    <span className="font-medium text-slate-200">{role}</span>
                    <span className="font-mono text-[10px] text-emerald-400">Target</span>
                  </div>
                ))}
              </div>

              {/* Academic Ledger Summary */}
              <div className="pt-3 border-t border-slate-800 space-y-2 text-xs">
                <div className="flex justify-between text-slate-400">
                  <span>Degree Status</span>
                  <span className="font-medium text-slate-200">S.E. (Economics)</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>Institution</span>
                  <span className="font-medium text-slate-200">IPB University</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>Cumulative GPA</span>
                  <span className="font-bold text-emerald-400 font-mono">3.53 / 4.00</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>Availability</span>
                  <span className="font-medium text-slate-200">Immediate / Full-time</span>
                </div>
              </div>

              {/* Micro callout */}
              <div className="p-3 bg-slate-800/60 rounded-lg border border-slate-700 text-[11px] text-slate-300 leading-relaxed">
                Prepared with rigorous academic accounting foundations and hands-on spreadsheet modeling for data-backed business decisions.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
