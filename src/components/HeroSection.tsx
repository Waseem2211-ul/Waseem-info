import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { 
  ArrowRight, 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  FileText, 
  ChevronDown, 
  Sparkles, 
  Code2, 
  Compass 
} from 'lucide-react';

interface HeroSectionProps {
  onOpenResume: () => void;
  onOpenTerminal: () => void;
  onExploreProjects: () => void;
  onContactClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenResume,
  onOpenTerminal,
  onExploreProjects,
  onContactClick,
}) => {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
      aria-label="Hero Introduction"
    >
      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* Left Column: Editorial Identity & Pitch (lg:col-span-7) */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-6 z-10">
          {/* Status & Category pill */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono tracking-wider uppercase">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
              <span>Available for Internships & Projects</span>
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-neutral-900/60 border border-neutral-800 text-neutral-400 text-xs font-mono">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Portfolio '26</span>
            </div>
          </div>

          {/* Main Title & Brand Identity */}
          <div className="space-y-3">
            <div className="text-xs sm:text-sm font-mono tracking-[0.25em] text-neutral-400 uppercase">
              {PERSONAL_INFO.fullName}
            </div>

            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-bold font-display tracking-tight text-white leading-[1.08]">
              Building digital <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-300 to-amber-200">
                experiences
              </span>{' '}
              with code &amp; craft.
            </h1>
          </div>

          {/* Mobile-Only Prominent Portrait Card (visible only on < lg screens) */}
          <div className="lg:hidden w-full max-w-sm mx-auto my-2">
            <div className="relative rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900 shadow-xl">
              <div className="h-7 bg-neutral-950 px-3 flex items-center justify-between border-b border-neutral-800 text-[10px] font-mono text-neutral-400">
                <span className="text-amber-400 font-semibold">{PERSONAL_INFO.brandName}</span>
                <span>PORTRAIT_STUDIO.RAW</span>
              </div>
              <div className="relative aspect-[4/5] w-full bg-neutral-950">
                <img
                  src={PERSONAL_INFO.portraitAsset}
                  alt={`${PERSONAL_INFO.fullName} - ${PERSONAL_INFO.brandName}`}
                  className="w-full h-full object-cover object-top filter grayscale contrast-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-2.5 left-2.5 right-2.5 p-2 rounded-lg bg-neutral-950/80 backdrop-blur-md border border-neutral-800 text-left">
                  <p className="text-xs font-mono font-bold text-white">
                    {PERSONAL_INFO.fullName}
                  </p>
                  <p className="text-[10px] text-amber-400 font-mono">
                    {PERSONAL_INFO.degree}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Genuine Narrative & Positioning */}
          <p className="text-base sm:text-lg text-neutral-300 max-w-2xl font-light leading-relaxed">
            Computer Science and Engineering student at{' '}
            <span className="text-neutral-100 font-medium">C. Abdul Hakeem College of Engineering &amp; Technology</span>{' '}
            (2024–2028). Passionate about front-end architecture, AI API integration, and thoughtful UI/UX systems.
          </p>

          {/* Verified Technical Tags */}
          <div className="flex flex-wrap items-center gap-2 pt-1 font-mono text-xs text-neutral-400">
            <span className="px-2.5 py-1 rounded-md bg-neutral-900 border border-neutral-800 text-neutral-200">
              Python
            </span>
            <span className="px-2.5 py-1 rounded-md bg-neutral-900 border border-neutral-800 text-neutral-200">
              React
            </span>
            <span className="px-2.5 py-1 rounded-md bg-neutral-900 border border-neutral-800 text-neutral-200">
              Node.js
            </span>
            <span className="px-2.5 py-1 rounded-md bg-neutral-900 border border-neutral-800 text-neutral-200">
              Tailwind CSS
            </span>
            <span className="px-2.5 py-1 rounded-md bg-neutral-900 border border-neutral-800 text-neutral-200">
              OpenRouter AI
            </span>
            <span className="px-2.5 py-1 rounded-md bg-neutral-900 border border-neutral-800 text-amber-400/90">
              UI/UX Design
            </span>
          </div>

          {/* Call-to-Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              type="button"
              onClick={onExploreProjects}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-amber-500 hover:bg-amber-400 text-neutral-950 font-semibold text-sm tracking-wide transition-all duration-200 shadow-lg shadow-amber-500/20 hover:shadow-amber-500/40 hover:-translate-y-0.5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-amber-500"
            >
              <Compass className="w-4 h-4" />
              <span>Explore Projects</span>
              <ArrowRight className="w-4 h-4 ml-0.5" />
            </button>

            <button
              type="button"
              onClick={onOpenResume}
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full bg-neutral-900/80 hover:bg-neutral-800 border border-neutral-700 hover:border-amber-500/50 text-neutral-200 hover:text-white font-medium text-sm transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-amber-500/50"
            >
              <FileText className="w-4 h-4 text-amber-400" />
              <span>Resume PDF</span>
            </button>

            <button
              type="button"
              onClick={onContactClick}
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full bg-transparent hover:bg-neutral-800/40 border border-neutral-800 hover:border-neutral-700 text-neutral-300 font-medium text-sm transition-all duration-200 cursor-pointer"
            >
              <Mail className="w-4 h-4 text-neutral-400" />
              <span>Get in Touch</span>
            </button>
          </div>

          {/* Social Proof Channels & Developer Terminal Shortcut */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-neutral-900 text-xs font-mono text-neutral-400">
            <div className="flex items-center gap-4">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-amber-400 transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-amber-400 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex items-center gap-1.5 hover:text-amber-400 transition-colors"
                aria-label="Direct Email"
              >
                <Mail className="w-4 h-4" />
                <span>Email</span>
              </a>

              <a
                href={`tel:${PERSONAL_INFO.phone}`}
                className="hidden sm:flex items-center gap-1.5 hover:text-amber-400 transition-colors"
                aria-label="Phone"
              >
                <Phone className="w-4 h-4" />
                <span>{PERSONAL_INFO.formattedPhone}</span>
              </a>
            </div>

            <button
              type="button"
              onClick={onOpenTerminal}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-neutral-900/60 hover:bg-neutral-800 border border-neutral-800 text-neutral-400 hover:text-amber-400 transition-colors cursor-pointer"
            >
              <Code2 className="w-3.5 h-3.5 text-amber-400" />
              <span>Terminal `&gt;_`</span>
            </button>
          </div>
        </div>

        {/* Right Column: Prominent Real Portrait Photo (lg:col-span-5) */}
        {/* Requirements: 45–55% visual area on desktop, real uploaded photograph, high editorial framing */}
        <div className="lg:col-span-5 flex justify-center items-center relative z-10">
          <div className="relative w-full max-w-md lg:max-w-none group">
            
            {/* Subtle glow rim backdrop */}
            <div className="absolute -inset-2 bg-gradient-to-tr from-amber-500/20 via-orange-500/10 to-transparent rounded-3xl blur-2xl opacity-50 group-hover:opacity-80 transition duration-700 pointer-events-none" />

            {/* Editorial Frame Container */}
            <div className="relative rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900/70 shadow-2xl transition-transform duration-500 group-hover:scale-[1.01]">
              
              {/* Top Accent Header Bar */}
              <div className="h-8 bg-neutral-950/80 px-4 flex items-center justify-between border-b border-neutral-800/80 text-[11px] font-mono text-neutral-400">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <span className="font-semibold tracking-wider text-neutral-300">
                    PORTRAIT_STUDIO.RAW
                  </span>
                </div>
                <span className="tracking-widest uppercase text-amber-500/80">
                  {PERSONAL_INFO.brandName}
                </span>
              </div>

              {/* The Real Portrait Image */}
              <div className="relative aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5] w-full overflow-hidden bg-neutral-950">
                <img
                  src={PERSONAL_INFO.portraitAsset}
                  alt={`${PERSONAL_INFO.fullName} - ${PERSONAL_INFO.brandName}`}
                  className="w-full h-full object-cover object-top filter grayscale contrast-105 brightness-95 group-hover:contrast-100 group-hover:brightness-100 transition-all duration-700"
                  loading="eager"
                />

                {/* Subtle vignette gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-transparent to-neutral-950/20 pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/40 via-transparent to-neutral-950/40 pointer-events-none" />

                {/* Inset Label Badge */}
                <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-neutral-950/80 backdrop-blur-md border border-neutral-800/80 text-left">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-mono font-bold text-white tracking-wider">
                        {PERSONAL_INFO.fullName}
                      </p>
                      <p className="text-[11px] text-neutral-400 font-mono">
                        B.E. Computer Science &amp; Engineering
                      </p>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/40 uppercase">
                      Verified
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Corner Decorative Crosshairs */}
            <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-amber-500/50 pointer-events-none" />
            <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-amber-500/50 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Subtle Scroll Down Prompt */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-neutral-500 hover:text-amber-400 transition-colors pointer-events-none">
        <span className="text-[10px] font-mono tracking-widest uppercase">Scroll Down</span>
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </div>
    </section>
  );
};
