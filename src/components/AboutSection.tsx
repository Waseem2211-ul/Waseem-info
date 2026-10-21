import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GraduationCap, Code, Palette, Globe, Layers, Sparkles } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      className="py-24 px-4 sm:px-6 lg:px-8 border-t border-neutral-900 relative"
      aria-label="About Mohammed Waseem"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-amber-400 uppercase mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>01 / Identity &amp; Foundations</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold font-display tracking-tight text-white">
              Behind the code.
            </h2>
          </div>
          <p className="text-sm font-mono text-neutral-400 max-w-sm">
            Merging analytical rigor with modern design principles to build deliberate digital products.
          </p>
        </div>

        {/* Narrative & Metric Grids */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Story Column (lg:col-span-7) */}
          <div className="lg:col-span-7 space-y-6 text-neutral-300 font-light leading-relaxed text-base sm:text-lg">
            <p>
              I am <span className="text-white font-medium">{PERSONAL_INFO.fullName}</span>, 
              an undergraduate pursuing my Bachelor of Engineering in{' '}
              <span className="text-amber-400 font-medium">Computer Science and Engineering</span> at{' '}
              <span className="text-neutral-100 font-medium">{PERSONAL_INFO.college}</span> in Melvisharam, Tamil Nadu, India (2024–2028).
            </p>

            <p>
              My computational foundation started in school under the Tamil Nadu State Board curriculum with a specialized focus on{' '}
              <strong className="font-medium text-white">Computer Science and Mathematics</strong>. 
              Writing early programs in C and Python ignited a genuine curiosity about how lines of logic transform into interfaces that people actually use.
            </p>

            <p>
              Rather than viewing software engineering and visual design as separate tracks, I explore where they intersect:
              how clean front-end component architectures (React, Vite, Tailwind CSS) work together with purposeful UI/UX wireframes,
              restrained typography, and robust backend microservices (Node.js, Express.js).
            </p>

            <p>
              With project initiatives like <strong className="font-medium text-amber-300">CareerVerse AI</strong> and{' '}
              <strong className="font-medium text-amber-300">Jobora</strong>, I integrate practical AI endpoints (such as OpenRouter) to build accessible tools that guide students through real-world career preparation and skill mapping.
            </p>
          </div>

          {/* Quick Facts & Core Pillars Column (lg:col-span-5) */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Academic Pillar */}
            <div className="p-6 rounded-2xl bg-neutral-900/60 border border-neutral-800 hover:border-amber-500/30 transition-colors">
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-sm font-mono uppercase tracking-wider text-neutral-400">
                    Academic Degree
                  </h3>
                  <p className="text-white font-semibold text-base">
                    B.E. Computer Science &amp; Engineering
                  </p>
                  <p className="text-xs text-neutral-400">
                    {PERSONAL_INFO.college} • 2024–2028
                  </p>
                </div>
              </div>
            </div>

            {/* Front-End & Logic Pillar */}
            <div className="p-6 rounded-2xl bg-neutral-900/60 border border-neutral-800 hover:border-amber-500/30 transition-colors">
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-xl bg-sky-500/10 text-sky-400 border border-sky-500/20">
                  <Code className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-sm font-mono uppercase tracking-wider text-neutral-400">
                    Engineering Focus
                  </h3>
                  <p className="text-white font-semibold text-base">
                    Full-Stack Web &amp; AI Integration
                  </p>
                  <p className="text-xs text-neutral-400">
                    React, Node.js, Express, Python, OpenRouter AI
                  </p>
                </div>
              </div>
            </div>

            {/* UI/UX Pillar */}
            <div className="p-6 rounded-2xl bg-neutral-900/60 border border-neutral-800 hover:border-amber-500/30 transition-colors">
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <Palette className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-sm font-mono uppercase tracking-wider text-neutral-400">
                    Design Discipline
                  </h3>
                  <p className="text-white font-semibold text-base">
                    UI/UX Wireframing &amp; Systems
                  </p>
                  <p className="text-xs text-neutral-400">
                    Editorial layouts, typographic hierarchy, responsive ergonomics
                  </p>
                </div>
              </div>
            </div>

            {/* Languages & Location */}
            <div className="p-6 rounded-2xl bg-neutral-900/60 border border-neutral-800 hover:border-amber-500/30 transition-colors">
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
                  <Globe className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-sm font-mono uppercase tracking-wider text-neutral-400">
                    Communication &amp; Location
                  </h3>
                  <p className="text-white font-semibold text-base">
                    {PERSONAL_INFO.languages.join(' & ')}
                  </p>
                  <p className="text-xs text-neutral-400">
                    {PERSONAL_INFO.location}
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
