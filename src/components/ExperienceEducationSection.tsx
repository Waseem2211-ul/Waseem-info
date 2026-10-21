import React, { useState } from 'react';
import { TIMELINE_ITEMS } from '../data/portfolioData';
import { ExperienceItem } from '../types/portfolio';
import { 
  Sparkles, 
  Briefcase, 
  GraduationCap, 
  Award, 
  Users2, 
  Eye, 
  Calendar, 
  CheckCircle2, 
  ShieldCheck 
} from 'lucide-react';

interface ExperienceEducationSectionProps {
  onViewCertificate: (item: ExperienceItem) => void;
}

export const ExperienceEducationSection: React.FC<ExperienceEducationSectionProps> = ({
  onViewCertificate,
}) => {
  const [filterType, setFilterType] = useState<string>('all');

  const filteredItems =
    filterType === 'all'
      ? TIMELINE_ITEMS
      : TIMELINE_ITEMS.filter((item) => item.type === filterType);

  const getIcon = (type: ExperienceItem['type']) => {
    switch (type) {
      case 'internship':
        return <Briefcase className="w-4 h-4 text-amber-400" />;
      case 'education':
        return <GraduationCap className="w-4 h-4 text-sky-400" />;
      case 'certification':
        return <Award className="w-4 h-4 text-emerald-400" />;
      case 'activity':
        return <Users2 className="w-4 h-4 text-purple-400" />;
    }
  };

  const getBadgeColor = (type: ExperienceItem['type']) => {
    switch (type) {
      case 'internship':
        return 'text-amber-400 bg-amber-500/10 border-amber-500/30';
      case 'education':
        return 'text-sky-400 bg-sky-500/10 border-sky-500/30';
      case 'certification':
        return 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30';
      case 'activity':
        return 'text-purple-400 bg-purple-500/10 border-purple-500/30';
    }
  };

  return (
    <section
      id="experience"
      className="py-24 px-4 sm:px-6 lg:px-8 border-t border-neutral-900 relative"
      aria-label="Experience, Education and Certifications"
    >
      <div className="max-w-7xl mx-auto space-y-12">
        <div id="education" className="sr-only" aria-hidden="true" />
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-amber-400 uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>04 / Journey &amp; Credentials</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold font-display tracking-tight text-white">
              Experience &amp; education.
            </h2>
            <p className="text-sm font-mono text-neutral-400 max-w-xl">
              Chronological milestones across engineering internships, academic rigor at C. Abdul Hakeem College, industry certifications, and national hackathons.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-neutral-950/80 border border-neutral-800 text-xs font-mono">
            {[
              { id: 'all', label: 'All Records' },
              { id: 'internship', label: 'Internships' },
              { id: 'education', label: 'Education' },
              { id: 'certification', label: 'Certifications' },
              { id: 'activity', label: 'Activities' },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setFilterType(tab.id)}
                className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                  filterType === tab.id
                    ? 'bg-amber-500 text-neutral-950 font-semibold'
                    : 'text-neutral-400 hover:text-white hover:bg-neutral-900'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Timeline Layout */}
        <div className="relative pl-6 sm:pl-8 border-l border-neutral-800 space-y-10">
          {filteredItems.map((item) => (
            <div key={item.id} className="relative group">
              {/* Timeline Node Bullet */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-6 h-6 rounded-full bg-neutral-950 border border-neutral-700 flex items-center justify-center group-hover:border-amber-400 transition-colors">
                <div className="w-2 h-2 rounded-full bg-amber-400" />
              </div>

              {/* Card Container */}
              <div className="p-6 rounded-2xl bg-neutral-900/60 border border-neutral-800 hover:border-neutral-700 transition-all space-y-4">
                
                {/* Header: Role, Duration, Badge */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className={`px-2 py-0.5 rounded text-[10px] font-mono uppercase tracking-wider border ${getBadgeColor(item.type)}`}>
                        {item.type}
                      </span>
                      <span className="text-xs font-mono text-neutral-400 flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {item.duration}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold font-display text-white">
                      {item.role}
                    </h3>
                    <p className="text-sm font-mono text-neutral-300">
                      {item.organization} {item.periodText && `• ${item.periodText}`}
                    </p>
                  </div>

                  {/* If item has a real certificate asset, show button */}
                  {item.credentialAsset && (
                    <button
                      type="button"
                      onClick={() => onViewCertificate(item)}
                      className="self-start sm:self-auto inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-mono rounded-lg bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 border border-amber-500/30 transition-colors cursor-pointer"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Inspect Credential</span>
                    </button>
                  )}
                </div>

                {/* Summary */}
                <p className="text-sm text-neutral-300 font-light leading-relaxed">
                  {item.summary}
                </p>

                {/* Highlights List */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 border-t border-neutral-800/80">
                  {item.highlights.map((hl, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-neutral-400 leading-relaxed font-mono">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-500/80 mt-0.5 shrink-0" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>

                {/* Verified Tag if available */}
                {item.credentialAsset && (
                  <div className="pt-2 flex items-center gap-1.5 text-[11px] font-mono text-emerald-400">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Official verified asset attached</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
