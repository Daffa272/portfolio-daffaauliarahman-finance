import { useState } from 'react';
import { PORTFOLIO_DATA, CertificationItem, AchievementItem } from '../data/portfolioData';
import { Award, CheckCircle2, ShieldCheck, Trophy, ExternalLink, FileText, Info, X } from 'lucide-react';

interface Props {
  onOpenUploadGuide: () => void;
}

export default function Certifications({ onOpenUploadGuide }: Props) {
  const { certifications, achievements } = PORTFOLIO_DATA;
  const [selectedCert, setSelectedCert] = useState<CertificationItem | null>(null);

  return (
    <section id="certifications" className="py-16 md:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold">
            05. Credentials & Recognition
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
            Certifications & University Achievements
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            Professional development certificates from recognized providers alongside competitive student awards.
          </p>
        </div>

        {/* 2-Column Grid: Left Certifications, Right Achievements */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Certifications (Col 7) */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-slate-200">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-700" />
                <h3 className="text-base font-bold text-slate-900">
                  Professional Certifications ({certifications.length})
                </h3>
              </div>
              <span className="text-xs text-slate-500">Verified Bootcamps & Tests</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {certifications.map((cert) => (
                <div
                  key={cert.id}
                  onClick={() => setSelectedCert(cert)}
                  className="p-4 bg-white border border-slate-200 rounded-xl hover:border-slate-300 transition-all cursor-pointer shadow-2xs group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between text-[11px] text-slate-500 font-mono mb-1.5">
                      <span className="font-semibold text-slate-800">{cert.issuer}</span>
                      <span className="text-emerald-700 font-medium">{cert.category}</span>
                    </div>

                    <h4 className="text-xs font-bold text-slate-900 group-hover:text-slate-950 transition-colors leading-snug">
                      {cert.title}
                    </h4>

                    <p className="text-[11px] text-slate-600 mt-1.5 line-clamp-2 leading-relaxed">
                      {cert.description}
                    </p>
                  </div>

                  <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                    <span className="flex items-center gap-1 text-emerald-800 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" />
                      {cert.status}
                    </span>
                    <span className="text-slate-400 group-hover:text-slate-700 transition-colors">
                      View info →
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-3 bg-white border border-slate-200 rounded-lg text-xs text-slate-500 flex items-center justify-between">
              <span>Looking for physical certificates or verification docs?</span>
              <button
                onClick={onOpenUploadGuide}
                className="text-xs text-slate-800 font-semibold underline underline-offset-2 hover:text-slate-950"
              >
                Upload / Config Guide
              </button>
            </div>
          </div>

          {/* Achievements (Col 5) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-slate-200">
              <div className="flex items-center gap-2">
                <Trophy className="w-4 h-4 text-slate-900" />
                <h3 className="text-base font-bold text-slate-900">
                  Key Achievements & Grants
                </h3>
              </div>
              <span className="text-xs text-slate-500 font-mono">2023 – 2024</span>
            </div>

            <div className="space-y-3">
              {achievements.map((ach) => (
                <div
                  key={ach.id}
                  className="p-4 bg-white border border-slate-200 rounded-xl shadow-2xs space-y-2"
                >
                  <div className="flex items-start justify-between gap-2">
                    <h4 className="text-xs font-bold text-slate-900 leading-snug">
                      {ach.title}
                    </h4>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-700 shrink-0 font-medium">
                      {ach.year}
                    </span>
                  </div>

                  <p className="text-[11px] text-slate-500 font-medium">
                    Organizer: {ach.organizer}
                  </p>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {ach.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Certificate Detail Modal */}
      {selectedCert && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-xl max-w-lg w-full p-6 border border-slate-200 space-y-4 animate-fade-in">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-xs font-mono text-emerald-700 uppercase tracking-wide">
                  {selectedCert.category} · {selectedCert.issuer}
                </span>
                <h3 className="text-base font-bold text-slate-900 mt-1">
                  {selectedCert.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedCert(null)}
                className="p-1 text-slate-400 hover:text-slate-800 rounded"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-4 bg-slate-50 rounded-lg border border-slate-200 text-xs text-slate-700 leading-relaxed">
              <span className="font-semibold text-slate-900 block mb-1">Curriculum & Scope:</span>
              <p>{selectedCert.description}</p>
            </div>

            <div className="space-y-2 text-xs text-slate-600">
              <div className="flex justify-between py-1 border-b border-slate-100">
                <span className="text-slate-500">Issuer</span>
                <span className="font-medium text-slate-900">{selectedCert.issuer}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-100">
                <span className="text-slate-500">Validation Status</span>
                <span className="font-medium text-emerald-700">{selectedCert.status}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-100">
                <span className="text-slate-500">Recipient</span>
                <span className="font-medium text-slate-900">Daffa Aulia Rahman, S.E.</span>
              </div>
            </div>

            <div className="p-3 bg-amber-50/70 border border-amber-200 rounded-lg text-xs text-amber-900 flex items-start gap-2">
              <Info className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
              <span>
                <strong>Verification Policy:</strong> In compliance with strict recruitment integrity guidelines, original certificate PDF/image files can be made available upon request during HR interview stages.
              </span>
            </div>

            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setSelectedCert(null)}
                className="px-4 py-2 bg-slate-900 text-white rounded-lg text-xs font-medium hover:bg-slate-800"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
