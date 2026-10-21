import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { 
  ArrowUp, 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  Sparkles, 
  Code2 
} from 'lucide-react';

interface FooterProps {
  onOpenTerminal: () => void;
  onOpenResume: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenTerminal, onOpenResume }) => {
  const [istTime, setIstTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Format time in Asia/Kolkata (IST)
      const formatted = new Intl.DateTimeFormat('en-US', {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      }).format(now);
      setIstTime(formatted);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-neutral-900 bg-neutral-950 text-neutral-400 py-16 px-4 sm:px-6 lg:px-8 relative font-mono text-xs">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Top Tier: Monogram & Philosophy */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-10 border-b border-neutral-900">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="font-display font-bold text-2xl tracking-tight text-white">
                {PERSONAL_INFO.brandName}
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
            </div>
            <p className="text-xs text-neutral-400">
              {PERSONAL_INFO.fullName} &bull; {PERSONAL_INFO.positioning}
            </p>
          </div>

          {/* Live India Time Clock */}
          <div className="flex items-center gap-3 px-4 py-2 rounded-xl bg-neutral-900/60 border border-neutral-800 text-xs self-start md:self-auto">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-neutral-300 font-medium">India (IST):</span>
            <span className="text-amber-400 font-semibold">{istTime || 'Live IST'}</span>
          </div>
        </div>

        {/* Middle Tier: Links Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
          {/* Navigation */}
          <div className="space-y-3">
            <h4 className="text-white font-semibold uppercase tracking-wider text-[11px]">
              Explore
            </h4>
            <ul className="space-y-2 text-neutral-400">
              <li><a href="#about" className="hover:text-amber-400 transition-colors">About</a></li>
              <li><a href="#projects" className="hover:text-amber-400 transition-colors">Projects</a></li>
              <li><a href="#skills" className="hover:text-amber-400 transition-colors">Skills</a></li>
              <li><a href="#experience" className="hover:text-amber-400 transition-colors">Experience</a></li>
              <li><a href="#education" className="hover:text-amber-400 transition-colors">Education</a></li>
            </ul>
          </div>

          {/* Projects Quick Jump */}
          <div className="space-y-3">
            <h4 className="text-white font-semibold uppercase tracking-wider text-[11px]">
              Selected Works
            </h4>
            <ul className="space-y-2 text-neutral-400">
              <li>
                <a
                  href="https://careerverseai-one.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-400 transition-colors"
                >
                  CareerVerse AI
                </a>
              </li>
              <li>
                <a
                  href="https://joboraa.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-400 transition-colors"
                >
                  Jobora
                </a>
              </li>
              <li>
                <a
                  href="https://waseem-gym.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-400 transition-colors"
                >
                  Waseem Gym
                </a>
              </li>
              <li>
                <a
                  href="https://enviesalon.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-400 transition-colors"
                >
                  Envie Salon
                </a>
              </li>
            </ul>
          </div>

          {/* Social Profiles */}
          <div className="space-y-3">
            <h4 className="text-white font-semibold uppercase tracking-wider text-[11px]">
              Connect
            </h4>
            <ul className="space-y-2 text-neutral-400">
              <li>
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-400 transition-colors flex items-center gap-1.5"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>
              </li>
              <li>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-400 transition-colors flex items-center gap-1.5"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                  <span>LinkedIn</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="hover:text-amber-400 transition-colors flex items-center gap-1.5"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Email</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${PERSONAL_INFO.phone}`}
                  className="hover:text-amber-400 transition-colors flex items-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>{PERSONAL_INFO.phone}</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Developer Tools */}
          <div className="space-y-3">
            <h4 className="text-white font-semibold uppercase tracking-wider text-[11px]">
              Toolkit
            </h4>
            <ul className="space-y-2 text-neutral-400">
              <li>
                <button
                  type="button"
                  onClick={onOpenTerminal}
                  className="hover:text-amber-400 transition-colors flex items-center gap-1.5 cursor-pointer text-left"
                >
                  <Code2 className="w-3.5 h-3.5 text-amber-400" />
                  <span>Interactive Terminal</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenResume}
                  className="hover:text-amber-400 transition-colors cursor-pointer text-left"
                >
                  Resume PDF
                </button>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#journal" className="hover:text-amber-400 transition-colors">
                  Journal
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Tier: Copyright & Back-to-Top */}
        <div className="pt-8 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-neutral-500 text-[11px]">
          <div>
            &copy; {new Date().getFullYear()} {PERSONAL_INFO.fullName} ({PERSONAL_INFO.brandName}). Built with React, TypeScript &amp; Tailwind CSS.
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-neutral-400 hover:text-white transition-colors cursor-pointer"
            aria-label="Back to top"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-amber-400" />
          </button>
        </div>
      </div>
    </footer>
  );
};
