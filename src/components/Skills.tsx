import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { 
  DollarSign, 
  Laptop, 
  BarChart3, 
  Users, 
  CheckCircle2, 
  FileSpreadsheet, 
  Database, 
  BookOpen, 
  Brain,
  ShieldCheck
} from 'lucide-react';

export default function Skills() {
  const { skillsCategories } = PORTFOLIO_DATA;
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'finance-accounting':
        return <DollarSign className="w-4 h-4 text-emerald-700" />;
      case 'software-productivity':
        return <Laptop className="w-4 h-4 text-slate-800" />;
      case 'data-analytics':
        return <BarChart3 className="w-4 h-4 text-slate-850" />;
      case 'professional-competencies':
        return <Users className="w-4 h-4 text-slate-700" />;
      default:
        return <CheckCircle2 className="w-4 h-4 text-slate-700" />;
    }
  };

  const displayedCategories = activeCategory === 'all'
    ? skillsCategories
    : skillsCategories.filter(c => c.id === activeCategory);

  return (
    <section id="skills" className="py-16 md:py-24 bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div className="max-w-3xl">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold">
              02. Technical & Behavioral Competencies
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
              Skills & Methodological Toolkit
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2">
              Structured across 4 key dimensions with honest, transparent foundational labeling.
            </p>
          </div>

          {/* Interactive Filter Tabs (functional buttons permitted by skill guidelines) */}
          <div className="flex flex-wrap gap-1 bg-slate-100 p-1 rounded-lg border border-slate-200 self-start">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                activeCategory === 'all'
                  ? 'bg-white text-slate-900 shadow-2xs font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              All Skills ({skillsCategories.reduce((acc, c) => acc + c.skills.length, 0)})
            </button>
            {skillsCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                  activeCategory === cat.id
                    ? 'bg-white text-slate-900 shadow-2xs font-semibold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>
        </div>

        {/* Categories Stack */}
        <div className="space-y-10">
          {displayedCategories.map((category) => (
            <div key={category.id} className="space-y-4">
              {/* Category Header */}
              <div className="flex items-center gap-2.5 pb-2 border-b border-slate-200">
                <div className="p-1.5 bg-slate-100 rounded-md border border-slate-200">
                  {getCategoryIcon(category.id)}
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 tracking-tight">
                    {category.title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    {category.subtitle}
                  </p>
                </div>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="p-4 bg-slate-50 hover:bg-slate-50/80 border border-slate-200 rounded-xl transition-all hover:border-slate-300 flex flex-col justify-between group shadow-2xs"
                  >
                    <div>
                      <div className="flex items-start justify-between gap-2 mb-1.5">
                        <h4 className="text-xs font-bold text-slate-900 group-hover:text-slate-950 transition-colors leading-snug">
                          {skill.name}
                        </h4>
                        {skill.levelBadge && (
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white text-slate-700 border border-slate-200 shrink-0 font-medium">
                            {skill.levelBadge}
                          </span>
                        )}
                      </div>
                      <p className="text-[11px] text-slate-600 leading-relaxed">
                        {skill.description}
                      </p>
                    </div>

                    <div className="mt-3 pt-2 border-t border-slate-200/80 flex items-center justify-between text-[10px] text-slate-400 font-mono">
                      <span>Verified Knowledge</span>
                      <CheckCircle2 className="w-3 h-3 text-emerald-700" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Honesty & Transparency Footer Callout */}
        <div className="mt-12 p-4 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-600 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-700 shrink-0" />
            <span>
              <strong>Ethics in Presentation:</strong> All competencies accurately reflect university coursework, intensive bootcamps (MySkill), and academic organizational leadership. No inflated mastery or misleading progress bars.
            </span>
          </div>
          <span className="text-[11px] text-slate-400 font-mono shrink-0">
            Entry-Level Portfolio Standard
          </span>
        </div>
      </div>
    </section>
  );
}
