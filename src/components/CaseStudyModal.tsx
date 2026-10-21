import React, { useState, useEffect } from 'react';
import { Project } from '../types/portfolio';
import { 
  X, 
  ExternalLink, 
  Github, 
  Monitor, 
  Smartphone, 
  CheckCircle2, 
  Sparkles, 
  Layers, 
  Cpu, 
  AlertCircle 
} from 'lucide-react';

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ project, onClose }) => {
  const [deviceView, setDeviceView] = useState<'desktop' | 'mobile' | 'specs'>('specs');
  const [iframeError, setIframeError] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  useEffect(() => {
    setIframeError(false);
    // If project has a live embed, default to specs or desktop
    if (project?.canEmbed && project.liveUrl) {
      setDeviceView('specs');
    } else {
      setDeviceView('specs');
    }
  }, [project]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-neutral-950/85 backdrop-blur-md overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-title"
    >
      <div className="relative w-full max-w-5xl my-auto rounded-2xl bg-neutral-900 border border-neutral-800 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Modal Top Header Bar */}
        <div className="px-6 py-4 bg-neutral-950/90 border-b border-neutral-800 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 min-w-0">
            <span
              className="w-3 h-3 rounded-full shrink-0"
              style={{ backgroundColor: project.accentColor }}
            />
            <div className="min-w-0">
              <h3
                id="case-study-title"
                className="text-lg font-bold font-display text-white truncate"
              >
                {project.name}
              </h3>
              <p className="text-xs font-mono text-neutral-400 truncate">
                {project.category}
              </p>
            </div>
          </div>

          {/* Device / View Switcher (if liveUrl exists) */}
          <div className="flex items-center gap-2">
            {project.liveUrl && (
              <div className="hidden sm:flex items-center bg-neutral-900 rounded-lg p-0.5 border border-neutral-800 text-xs font-mono">
                <button
                  type="button"
                  onClick={() => setDeviceView('specs')}
                  className={`px-2.5 py-1 rounded-md transition-colors ${
                    deviceView === 'specs'
                      ? 'bg-amber-500 text-neutral-950 font-semibold'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  Tech Specs
                </button>
                <button
                  type="button"
                  onClick={() => setDeviceView('desktop')}
                  className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-md transition-colors ${
                    deviceView === 'desktop'
                      ? 'bg-amber-500 text-neutral-950 font-semibold'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  <Monitor className="w-3.5 h-3.5" />
                  <span>Desktop</span>
                </button>
                <button
                  type="button"
                  onClick={() => setDeviceView('mobile')}
                  className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-md transition-colors ${
                    deviceView === 'mobile'
                      ? 'bg-amber-500 text-neutral-950 font-semibold'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  <Smartphone className="w-3.5 h-3.5" />
                  <span>Mobile</span>
                </button>
              </div>
            )}

            {/* Close Button */}
            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500 cursor-pointer"
              aria-label="Close case study"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="overflow-y-auto p-6 space-y-8 flex-1">
          
          {/* Interactive Live Embed Mode */}
          {project.liveUrl && (deviceView === 'desktop' || deviceView === 'mobile') && (
            <div className="flex flex-col items-center justify-center p-4 bg-neutral-950 rounded-xl border border-neutral-800">
              <div className="w-full flex items-center justify-between text-xs font-mono text-neutral-400 pb-3 border-b border-neutral-800/80 mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span>Live Sandbox: {project.liveUrl}</span>
                </div>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-amber-400 hover:underline"
                >
                  <span>Open full tab</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Simulated Device Frame */}
              <div
                className={`relative transition-all duration-300 rounded-xl overflow-hidden border border-neutral-700 bg-neutral-900 shadow-2xl ${
                  deviceView === 'desktop'
                    ? 'w-full h-[520px]'
                    : 'w-[360px] h-[640px] border-4 border-neutral-700 rounded-3xl'
                }`}
              >
                {!iframeError ? (
                  <iframe
                    src={project.liveUrl}
                    title={`${project.name} Live Demo`}
                    className="w-full h-full border-0"
                    sandbox="allow-scripts allow-same-origin allow-forms"
                    onError={() => setIframeError(true)}
                  />
                ) : (
                  <div className="h-full flex flex-col items-center justify-center p-6 text-center text-neutral-300 space-y-3">
                    <AlertCircle className="w-8 h-8 text-amber-400" />
                    <p className="text-sm">
                      This website protects its preview frame from third-party embedding.
                    </p>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-lg bg-amber-500 text-neutral-950 font-semibold text-xs inline-flex items-center gap-1.5"
                    >
                      <span>Launch External Website</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Specs & Architecture Mode */}
          {(deviceView === 'specs' || !project.liveUrl) && (
            <div className="space-y-8">
              {/* Tagline & Links banner */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 rounded-xl bg-neutral-950/60 border border-neutral-800">
                <div className="space-y-1">
                  <span className="text-xs font-mono uppercase tracking-widest text-amber-400">
                    Project Overview
                  </span>
                  <p className="text-base sm:text-lg text-white font-medium">
                    {project.tagline}
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-neutral-950 font-semibold text-xs tracking-wide transition-colors"
                    >
                      <span>Launch Live Site</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-white font-medium text-xs tracking-wide transition-colors border border-neutral-700"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>Repository</span>
                    </a>
                  )}
                </div>
              </div>

              {/* Technologies Badges */}
              <div className="space-y-2">
                <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 flex items-center gap-2">
                  <Cpu className="w-3.5 h-3.5 text-amber-400" />
                  <span>Verified Technologies &amp; Stack</span>
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-mono rounded-md bg-neutral-800/80 border border-neutral-700 text-neutral-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Two Column Breakdown: Purpose & Intended Audience */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-5 rounded-xl bg-neutral-950/40 border border-neutral-800 space-y-2">
                  <h4 className="text-sm font-semibold font-display text-white flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-amber-400" />
                    <span>Project Purpose</span>
                  </h4>
                  <p className="text-sm text-neutral-300 leading-relaxed">
                    {project.purpose}
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-neutral-950/40 border border-neutral-800 space-y-2">
                  <h4 className="text-sm font-semibold font-display text-white flex items-center gap-2">
                    <Layers className="w-4 h-4 text-sky-400" />
                    <span>Intended Users &amp; Audience</span>
                  </h4>
                  <p className="text-sm text-neutral-300 leading-relaxed">
                    {project.intendedUsers}
                  </p>
                </div>
              </div>

              {/* Key Features Overview */}
              <div className="space-y-3">
                <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                  Core Implemented Features
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {project.keyFeatures.map((feature, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-lg bg-neutral-950/60 border border-neutral-800/80 flex items-start gap-3"
                    >
                      <CheckCircle2 className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" />
                      <span className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Design & Architecture Decisions */}
              <div className="space-y-3">
                <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                  Design &amp; Technical Decisions
                </h4>
                <div className="space-y-2">
                  {project.designAndTechDecisions.map((decision, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-lg bg-neutral-950/60 border border-neutral-800/80 text-xs sm:text-sm text-neutral-300 leading-relaxed"
                    >
                      • {decision}
                    </div>
                  ))}
                </div>
              </div>

              {/* Concept Note if Atelier */}
              {project.id === 'atelier' && (
                <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs leading-relaxed">
                  <strong>Concept Note:</strong> Atelier is presented as an editorial UI/UX concept developed to explore luxury spatial typography, asymmetric layout grids, and tactile visual restraint. In accordance with honest portfolio presentation, no fictional public URL is generated.
                </div>
              )}
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-neutral-950 border-t border-neutral-800 flex items-center justify-between text-xs font-mono text-neutral-400">
          <span>Press ESC or click close</span>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-white font-medium transition-colors"
          >
            Close Case Study
          </button>
        </div>
      </div>
    </div>
  );
};
