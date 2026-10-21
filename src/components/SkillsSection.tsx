import React, { useState } from 'react';
import { SKILL_GROUPS } from '../data/portfolioData';
import { 
  Sparkles, 
  Code2, 
  Terminal, 
  Database, 
  Palette, 
  Wrench, 
  Cpu, 
  CheckCircle2 
} from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('all');

  const categoryIcons: Record<string, React.ReactNode> = {
    'Programming Languages': <Code2 className="w-4 h-4 text-amber-400" />,
    'Front-End Development': <Palette className="w-4 h-4 text-sky-400" />,
    'Back-End & APIs': <Database className="w-4 h-4 text-emerald-400" />,
    'AI & API Integration': <Cpu className="w-4 h-4 text-purple-400" />,
    'UI/UX & Digital Design': <Palette className="w-4 h-4 text-pink-400" />,
    'Tools, Workflow & Blockchain Learning': <Wrench className="w-4 h-4 text-amber-400" />,
  };

  const displayedGroups =
    activeTab === 'all'
      ? SKILL_GROUPS
      : SKILL_GROUPS.filter((g) => g.category === activeTab);

  return (
    <section
      id="skills"
      className="py-24 px-4 sm:px-6 lg:px-8 border-t border-neutral-900 relative"
      aria-label="Technical Skills and Proficiencies"
    >
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-amber-400 uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>03 / Capabilities &amp; Stack</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold font-display tracking-tight text-white">
              Skills &amp; technologies.
            </h2>
            <p className="text-sm font-mono text-neutral-400 max-w-xl">
              Transparent, categorized technical abilities. Presented as active capabilities and learning vectors without arbitrary percentage bars.
            </p>
          </div>

          {/* Legend */}
          <div className="flex items-center gap-3 text-xs font-mono">
            <span className="flex items-center gap-1.5 text-neutral-300">
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              Core Competency
            </span>
            <span className="flex items-center gap-1.5 text-neutral-400">
              <span className="w-2 h-2 rounded-full bg-neutral-600" />
              Active Learning
            </span>
          </div>
        </div>

        {/* Tab Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          <button
            type="button"
            onClick={() => setActiveTab('all')}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-colors cursor-pointer ${
              activeTab === 'all'
                ? 'bg-amber-500 text-neutral-950 font-bold'
                : 'bg-neutral-900 text-neutral-400 hover:text-white'
            }`}
          >
            All Disciplines
          </button>
          {SKILL_GROUPS.map((group) => (
            <button
              key={group.category}
              type="button"
              onClick={() => setActiveTab(group.category)}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono whitespace-nowrap transition-colors cursor-pointer ${
                activeTab === group.category
                  ? 'bg-amber-500 text-neutral-950 font-bold'
                  : 'bg-neutral-900 text-neutral-400 hover:text-white'
              }`}
            >
              {group.category}
            </button>
          ))}
        </div>

        {/* Skill Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedGroups.map((group) => (
            <div
              key={group.category}
              className="p-6 rounded-2xl bg-neutral-900/60 border border-neutral-800 hover:border-neutral-700 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2 mb-2">
                  {categoryIcons[group.category] || <Code2 className="w-4 h-4 text-amber-400" />}
                  <h3 className="text-base font-bold font-display text-white">
                    {group.category}
                  </h3>
                </div>
                <p className="text-xs text-neutral-400 font-mono mb-5 leading-relaxed">
                  {group.description}
                </p>

                {/* Skill Pills */}
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                        skill.level === 'Core'
                          ? 'bg-neutral-950 text-neutral-200 border border-neutral-800 hover:border-amber-500/40'
                          : 'bg-neutral-950/40 text-neutral-400 border border-neutral-800/60'
                      }`}
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${
                          skill.level === 'Core' ? 'bg-amber-400' : 'bg-neutral-500'
                        }`}
                      />
                      <span>{skill.name}</span>
                      {skill.level === 'Learning' && (
                        <span className="text-[10px] text-neutral-500 uppercase ml-1">
                          (learning)
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-neutral-800/80 flex items-center justify-between text-[11px] font-mono text-neutral-500">
                <span>{group.skills.length} competencies listed</span>
                <CheckCircle2 className="w-3.5 h-3.5 text-neutral-600" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
