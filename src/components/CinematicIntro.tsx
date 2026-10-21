import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowRight, Sparkles } from 'lucide-react';

interface CinematicIntroProps {
  onComplete: () => void;
}

export const CinematicIntro: React.FC<CinematicIntroProps> = ({ onComplete }) => {
  const [phase, setPhase] = useState<1 | 2 | 3 | 4>(1);

  useEffect(() => {
    // Check for autostart query parameter or reduced motion
    const params = new URLSearchParams(window.location.search);
    if (params.get('autostart') === '1') {
      onComplete();
      return;
    }

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      onComplete();
      return;
    }

    const t1 = setTimeout(() => setPhase(2), 700);
    const t2 = setTimeout(() => setPhase(3), 1600);
    const t3 = setTimeout(() => setPhase(4), 2600);
    const t4 = setTimeout(() => onComplete(), 3400);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-neutral-950 text-neutral-100 overflow-hidden select-none"
      role="dialog"
      aria-modal="true"
      aria-label="Welcome intro sequence"
    >
      {/* Background ambient light */}
      <div className="absolute inset-0 bg-radial from-amber-500/10 via-transparent to-transparent pointer-events-none" />

      {/* Skip Button */}
      <button
        type="button"
        onClick={onComplete}
        className="absolute top-6 right-6 z-20 flex items-center gap-2 px-4 py-2 text-xs font-mono tracking-wider uppercase text-neutral-400 hover:text-amber-400 border border-neutral-800 hover:border-amber-500/40 rounded-full transition-all duration-200 bg-neutral-900/60 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-amber-500/50 cursor-pointer"
        aria-label="Skip introduction"
      >
        <span>Skip Intro</span>
        <ArrowRight className="w-3.5 h-3.5" />
      </button>

      {/* Center Content Sequence */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-2xl">
        {/* Phase 2: Portrait reveal */}
        <div className="relative w-28 h-28 sm:w-36 sm:h-36 mb-6">
          <AnimatePresence>
            {phase >= 2 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8, filter: 'blur(10px)' }}
                animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-full h-full rounded-2xl overflow-hidden border border-amber-500/30 shadow-[0_0_30px_rgba(245,158,11,0.2)]"
              >
                <img
                  src={PERSONAL_INFO.portraitAsset}
                  alt={PERSONAL_INFO.fullName}
                  className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/70 via-transparent to-transparent" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Phase 1 & 2: WASEEM Typography */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="space-y-2"
        >
          <div className="flex items-center justify-center gap-2">
            <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" />
            <span className="text-xs font-mono tracking-[0.3em] uppercase text-amber-400/90">
              Creative Engineering
            </span>
          </div>

          <h1 className="text-5xl sm:text-7xl font-bold font-display tracking-tight text-white">
            {PERSONAL_INFO.brandName}
          </h1>

          <p className="text-sm sm:text-base font-mono tracking-widest text-neutral-400 uppercase">
            {PERSONAL_INFO.fullName}
          </p>
        </motion.div>

        {/* Phase 3: Core Philosophy Headline */}
        <AnimatePresence>
          {phase >= 3 && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-6 pt-4 border-t border-neutral-800/80"
            >
              <p className="text-neutral-300 text-sm sm:text-base font-light italic tracking-wide max-w-lg">
                &ldquo;Building digital experiences with code, creativity, and curiosity.&rdquo;
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Phase indicator dots */}
        <div className="flex items-center gap-1.5 mt-8" aria-hidden="true">
          {[1, 2, 3, 4].map((step) => (
            <div
              key={step}
              className={`h-1 rounded-full transition-all duration-300 ${
                phase >= step ? 'w-6 bg-amber-400' : 'w-2 bg-neutral-800'
              }`}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};
