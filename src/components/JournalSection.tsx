import React, { useState } from 'react';
import { JOURNAL_NOTES } from '../data/portfolioData';
import { JournalNote } from '../types/portfolio';
import { Sparkles, BookOpen, Clock, Calendar, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';

export const JournalSection: React.FC = () => {
  const [expandedNoteId, setExpandedNoteId] = useState<string | null>(null);

  const toggleNote = (id: string) => {
    setExpandedNoteId(expandedNoteId === id ? null : id);
  };

  return (
    <section
      id="journal"
      className="py-24 px-4 sm:px-6 lg:px-8 border-t border-neutral-900 relative"
      aria-label="Engineering Notes & Architecture Reflections"
    >
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-amber-400 uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>06 / Technical Insights</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold font-display tracking-tight text-white">
              Journal &amp; reflections.
            </h2>
            <p className="text-sm font-mono text-neutral-400 max-w-xl">
              Authentic engineering notes documenting learnings from building full-stack web applications, AI integrations, and UI/UX design.
            </p>
          </div>
        </div>

        {/* Notes Grid / List */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {JOURNAL_NOTES.map((note) => {
            const isExpanded = expandedNoteId === note.id;
            return (
              <div
                key={note.id}
                className="p-6 rounded-2xl bg-neutral-900/60 border border-neutral-800 hover:border-neutral-700 transition-all flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono text-neutral-400">
                    <span className="px-2 py-0.5 rounded bg-neutral-950 text-amber-400 border border-neutral-800">
                      {note.tag}
                    </span>
                    <span className="flex items-center gap-1 text-[11px]">
                      <Clock className="w-3 h-3" />
                      {note.readingTime}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold font-display text-white leading-snug">
                    {note.title}
                  </h3>

                  <p className="text-sm text-neutral-300 font-light leading-relaxed">
                    {note.excerpt}
                  </p>

                  {/* Expanded full content */}
                  {isExpanded && (
                    <div className="pt-4 mt-4 border-t border-neutral-800/80 space-y-3 text-xs sm:text-sm text-neutral-300 leading-relaxed font-light">
                      {note.fullContent.map((paragraph, idx) => (
                        <p key={idx}>{paragraph}</p>
                      ))}
                    </div>
                  )}
                </div>

                {/* Read more toggle */}
                <button
                  type="button"
                  onClick={() => toggleNote(note.id)}
                  className="pt-4 border-t border-neutral-800/80 inline-flex items-center justify-between text-xs font-mono text-amber-400 hover:text-amber-300 transition-colors w-full cursor-pointer"
                >
                  <span>{isExpanded ? 'Collapse Note' : 'Read Full Note'}</span>
                  {isExpanded ? (
                    <ChevronUp className="w-4 h-4" />
                  ) : (
                    <ChevronDown className="w-4 h-4" />
                  )}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
