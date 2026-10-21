import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Home, Briefcase, ArrowLeft, Terminal } from 'lucide-react';

interface NotFoundPageProps {
  onGoHome: () => void;
  onGoProjects: () => void;
  onOpenTerminal: () => void;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({
  onGoHome,
  onGoProjects,
  onOpenTerminal,
}) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-950 text-neutral-100 px-4 py-16 font-mono">
      <div className="max-w-md w-full text-center space-y-6 p-8 rounded-2xl bg-neutral-900/60 border border-neutral-800 shadow-2xl">
        <div className="inline-block px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs">
          HTTP 404 — ROUTE NOT FOUND
        </div>

        <h1 className="text-6xl sm:text-7xl font-bold font-display text-white">
          404
        </h1>

        <p className="text-sm text-neutral-400 leading-relaxed">
          The requested coordinate does not exist in the {PERSONAL_INFO.brandName} directory. The page may have been moved, updated, or re-indexed.
        </p>

        <div className="pt-4 flex flex-col gap-2.5">
          <button
            type="button"
            onClick={onGoHome}
            className="w-full py-3 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-neutral-950 font-semibold text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer"
          >
            <Home className="w-4 h-4" />
            <span>Return to Portfolio Home</span>
          </button>

          <button
            type="button"
            onClick={onGoProjects}
            className="w-full py-3 px-4 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-white font-medium text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer"
          >
            <Briefcase className="w-4 h-4 text-amber-400" />
            <span>Browse Selected Projects</span>
          </button>

          <button
            type="button"
            onClick={onOpenTerminal}
            className="w-full py-2.5 px-4 rounded-xl bg-neutral-950 border border-neutral-800 hover:border-neutral-700 text-neutral-400 hover:text-white font-medium text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer"
          >
            <Terminal className="w-3.5 h-3.5" />
            <span>Open Terminal Diagnostic</span>
          </button>
        </div>
      </div>
    </div>
  );
};
