import React from 'react';
import { SERVICES } from '../data/portfolioData';
import { ServiceItem } from '../types/portfolio';
import { Sparkles, ArrowRight, CheckCircle2, Send } from 'lucide-react';

interface ServicesSectionProps {
  onSelectService: (service: ServiceItem) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  return (
    <section
      id="services"
      className="py-24 px-4 sm:px-6 lg:px-8 border-t border-neutral-900 relative"
      aria-label="Engineering & Design Offerings"
    >
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-amber-400 uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>05 / Offerings &amp; Collaboration</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold font-display tracking-tight text-white">
              Areas of collaboration.
            </h2>
            <p className="text-sm font-mono text-neutral-400 max-w-xl">
              Practical capabilities for freelance collaborations, engineering internships, and early-stage prototype development.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="p-8 rounded-2xl bg-neutral-900/60 border border-neutral-800 hover:border-amber-500/40 transition-all flex flex-col justify-between space-y-6 group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold font-display text-white group-hover:text-amber-400 transition-colors">
                    {service.title}
                  </h3>
                  <span className="w-8 h-8 rounded-full bg-neutral-950 flex items-center justify-center text-xs font-mono text-neutral-400 border border-neutral-800">
                    &bull;
                  </span>
                </div>

                <p className="text-sm text-neutral-300 font-light leading-relaxed">
                  {service.shortDesc}
                </p>

                {/* Deliverables list */}
                <div className="space-y-2 pt-2 border-t border-neutral-800/80">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400">
                    Key Deliverables:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {service.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-neutral-300 font-mono">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="text-xs text-neutral-400 font-mono pt-2">
                  <span className="text-amber-400 font-semibold">Ideal for: </span>
                  {service.idealFor}
                </div>
              </div>

              {/* Action Button */}
              <button
                type="button"
                onClick={() => onSelectService(service)}
                className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-neutral-950 hover:bg-amber-500 text-neutral-300 hover:text-neutral-950 font-mono text-xs font-semibold tracking-wider uppercase border border-neutral-800 hover:border-amber-500 transition-all duration-200 cursor-pointer"
              >
                <span>Enquire About {service.title.split(' ')[0]}</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
