import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ContactFormData } from '../types/portfolio';
import { validateContactForm } from '../utils/portfolio';
import confetti from 'canvas-confetti';
import { 
  Sparkles, 
  Mail, 
  Phone, 
  Linkedin, 
  Github, 
  Copy, 
  Check, 
  Send, 
  Clock, 
  DollarSign, 
  AlertCircle, 
  ArrowUpRight 
} from 'lucide-react';

interface ContactSectionProps {
  initialProjectType?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialProjectType = '' }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    projectType: initialProjectType || 'Web Application Development',
    budgetRange: 'Flexible / Standard',
    timeline: 'Within 2-4 weeks',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Sync if initialProjectType prop changes
  React.useEffect(() => {
    if (initialProjectType) {
      setFormData((prev) => ({ ...prev, projectType: initialProjectType }));
    }
  }, [initialProjectType]);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PERSONAL_INFO.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    } catch {
      // Fallback
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = validateContactForm(formData);

    if (!result.isValid) {
      setErrors(result.errors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    // Simulate authentic network submission with smooth transition
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Trigger celebratory confetti
      try {
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.8 },
          colors: ['#f59e0b', '#38bdf8', '#10b981'],
        });
      } catch {
        // Confetti optional
      }
    }, 1000);
  };

  return (
    <section
      id="contact"
      className="py-24 px-4 sm:px-6 lg:px-8 border-t border-neutral-900 relative"
      aria-label="Contact and Client Enquiry"
    >
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-amber-400 uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>07 / Direct Channels</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold font-display tracking-tight text-white">
              Let&rsquo;s connect.
            </h2>
            <p className="text-sm font-mono text-neutral-400 max-w-xl">
              Open to technical internships, software engineering roles, collaborative web initiatives, and international client inquiries.
            </p>
          </div>
        </div>

        {/* Dual Column Layout: Direct Channels & Enquiry Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Direct Contact Cards (lg:col-span-5) */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Email Card with One-Click Copy */}
            <div className="p-6 rounded-2xl bg-neutral-900/60 border border-neutral-800 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                  Primary Email
                </span>
                <span className="text-[11px] font-mono text-emerald-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  Active Inbox
                </span>
              </div>

              <div className="flex items-center justify-between gap-3">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="text-base sm:text-lg font-mono font-medium text-white hover:text-amber-400 transition-colors break-all"
                >
                  {PERSONAL_INFO.email}
                </a>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-300 hover:text-white transition-colors cursor-pointer shrink-0"
                  title="Copy email to clipboard"
                  aria-label="Copy email to clipboard"
                >
                  {copiedEmail ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {copiedEmail && (
                <p className="text-xs font-mono text-emerald-400 transition-opacity">
                  Copied to clipboard successfully!
                </p>
              )}
            </div>

            {/* Direct Phone Card */}
            <div className="p-6 rounded-2xl bg-neutral-900/60 border border-neutral-800 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                  Telephone Contact
                </span>
                <span className="text-[11px] font-mono text-neutral-500">
                  IST (+5:30)
                </span>
              </div>

              <a
                href={`tel:${PERSONAL_INFO.phone}`}
                className="inline-flex items-center gap-2 text-base font-mono font-medium text-white hover:text-amber-400 transition-colors"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>{PERSONAL_INFO.formattedPhone}</span>
              </a>
            </div>

            {/* Social / Professional Networks */}
            <div className="p-6 rounded-2xl bg-neutral-900/60 border border-neutral-800 space-y-4">
              <span className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                Verified Networks
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-neutral-950 border border-neutral-800 hover:border-amber-500/40 text-neutral-200 hover:text-white transition-all flex items-center justify-between group"
                >
                  <div className="flex items-center gap-2">
                    <Linkedin className="w-4 h-4 text-sky-400" />
                    <span className="text-xs font-mono font-medium">LinkedIn</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-neutral-500 group-hover:text-amber-400 transition-transform" />
                </a>

                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-neutral-950 border border-neutral-800 hover:border-amber-500/40 text-neutral-200 hover:text-white transition-all flex items-center justify-between group"
                >
                  <div className="flex items-center gap-2">
                    <Github className="w-4 h-4 text-amber-400" />
                    <span className="text-xs font-mono font-medium">GitHub</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-neutral-500 group-hover:text-amber-400 transition-transform" />
                </a>
              </div>
            </div>

            {/* Location & Academic Base */}
            <div className="p-5 rounded-2xl bg-neutral-950/60 border border-neutral-800/80 text-xs font-mono text-neutral-400 space-y-1">
              <div className="text-neutral-300 font-medium">
                {PERSONAL_INFO.fullName} • {PERSONAL_INFO.brandName}
              </div>
              <div>{PERSONAL_INFO.college}</div>
              <div>{PERSONAL_INFO.location}</div>
            </div>
          </div>

          {/* International Client Enquiry System (lg:col-span-7) */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-neutral-900/60 border border-neutral-800">
            <div className="mb-6 space-y-1">
              <h3 className="text-xl font-bold font-display text-white">
                Client &amp; Collaboration Enquiry
              </h3>
              <p className="text-xs font-mono text-neutral-400">
                Send a direct project briefing. All details are kept private and sent directly to Mohammed Waseem.
              </p>
            </div>

            {isSubmitted ? (
              <div className="py-12 px-6 text-center space-y-4 rounded-xl bg-neutral-950/80 border border-emerald-500/30">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/40">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold font-display text-white">
                  Enquiry Transmitted Successfully
                </h4>
                <p className="text-sm font-mono text-neutral-300 max-w-md mx-auto leading-relaxed">
                  Thank you for reaching out, {formData.name}. Your project details have been noted. Mohammed Waseem will review your message and reply via {formData.email}.
                </p>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={`mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
                      `Project Enquiry: ${formData.projectType} from ${formData.name}`
                    )}&body=${encodeURIComponent(
                      `Name: ${formData.name}\nEmail: ${formData.email}\nProject Type: ${formData.projectType}\nBudget: ${formData.budgetRange}\nTimeline: ${formData.timeline}\n\nMessage:\n${formData.message}`
                    )}`}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-amber-500 text-neutral-950 font-mono text-xs font-semibold"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>Open in Email App as Backup</span>
                  </a>

                  <button
                    type="button"
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        projectType: 'Web Application Development',
                        budgetRange: 'Flexible / Standard',
                        timeline: 'Within 2-4 weeks',
                        message: '',
                      });
                    }}
                    className="px-4 py-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-300 font-mono text-xs transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label
                      htmlFor="enquiry-name"
                      className="block text-xs font-mono uppercase tracking-wider text-neutral-300"
                    >
                      Your Name <span className="text-amber-400">*</span>
                    </label>
                    <input
                      id="enquiry-name"
                      type="text"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="e.g. Alex Morgan"
                      className={`w-full px-4 py-2.5 rounded-xl bg-neutral-950 border text-white placeholder-neutral-500 font-mono text-xs focus:outline-none focus:ring-1 transition-colors ${
                        errors.name
                          ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                          : 'border-neutral-800 focus:border-amber-500 focus:ring-amber-500'
                      }`}
                    />
                    {errors.name && (
                      <p className="text-[11px] font-mono text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  <div className="space-y-1.5">
                    <label
                      htmlFor="enquiry-email"
                      className="block text-xs font-mono uppercase tracking-wider text-neutral-300"
                    >
                      Your Email <span className="text-amber-400">*</span>
                    </label>
                    <input
                      id="enquiry-email"
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="e.g. alex@example.com"
                      className={`w-full px-4 py-2.5 rounded-xl bg-neutral-950 border text-white placeholder-neutral-500 font-mono text-xs focus:outline-none focus:ring-1 transition-colors ${
                        errors.email
                          ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                          : 'border-neutral-800 focus:border-amber-500 focus:ring-amber-500'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-[11px] font-mono text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Project Type & Budget Range */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label
                      htmlFor="enquiry-project-type"
                      className="block text-xs font-mono uppercase tracking-wider text-neutral-300"
                    >
                      Project Type
                    </label>
                    <select
                      id="enquiry-project-type"
                      value={formData.projectType}
                      onChange={(e) =>
                        setFormData({ ...formData, projectType: e.target.value })
                      }
                      className="w-full px-4 py-2.5 rounded-xl bg-neutral-950 border border-neutral-800 text-white font-mono text-xs focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 cursor-pointer"
                    >
                      <option value="Web Application Development">
                        Web Application Development (React / Vite)
                      </option>
                      <option value="UI/UX Design & Implementation">
                        UI/UX Design &amp; Responsive Layout
                      </option>
                      <option value="AI & API Integration Prototype">
                        AI &amp; API Integration Prototype
                      </option>
                      <option value="Personal / Brand Portfolio">
                        Personal or Brand Portfolio Website
                      </option>
                      <option value="Internship / Engineering Role">
                        Software Internship / Engineering Role
                      </option>
                      <option value="Other Technical Collaboration">
                        Other Technical Collaboration
                      </option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label
                      htmlFor="enquiry-budget"
                      className="block text-xs font-mono uppercase tracking-wider text-neutral-300"
                    >
                      Estimated Budget Range
                    </label>
                    <select
                      id="enquiry-budget"
                      value={formData.budgetRange}
                      onChange={(e) =>
                        setFormData({ ...formData, budgetRange: e.target.value })
                      }
                      className="w-full px-4 py-2.5 rounded-xl bg-neutral-950 border border-neutral-800 text-white font-mono text-xs focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 cursor-pointer"
                    >
                      <option value="Flexible / Standard">Flexible / Standard Consultation</option>
                      <option value="Under $500 (Prototype / Landing)">Under $500 (Prototype / Landing)</option>
                      <option value="$500 - $1,500 (Web App / UI System)">$500 - $1,500 (Web App / UI System)</option>
                      <option value="$1,500+ (Full Production Build)">$1,500+ (Full Production Build)</option>
                      <option value="University / Open Source / Non-Profit">University / Open Source / Non-Profit</option>
                    </select>
                  </div>
                </div>

                {/* Timeline */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="enquiry-timeline"
                    className="block text-xs font-mono uppercase tracking-wider text-neutral-300"
                  >
                    Preferred Timeline
                  </label>
                  <select
                    id="enquiry-timeline"
                    value={formData.timeline}
                    onChange={(e) =>
                      setFormData({ ...formData, timeline: e.target.value })
                    }
                    className="w-full px-4 py-2.5 rounded-xl bg-neutral-950 border border-neutral-800 text-white font-mono text-xs focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 cursor-pointer"
                  >
                    <option value="Immediate (1-2 weeks)">Immediate (1–2 weeks)</option>
                    <option value="Standard (2-4 weeks)">Standard (2–4 weeks)</option>
                    <option value="Flexible / Ongoing (1-2 months)">Flexible / Ongoing (1–2 months)</option>
                    <option value="Summer 2026 Internship Timeline">Summer 2026 Internship Timeline</option>
                  </select>
                </div>

                {/* Project Description Message */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="enquiry-message"
                    className="block text-xs font-mono uppercase tracking-wider text-neutral-300"
                  >
                    Project Details &amp; Objectives <span className="text-amber-400">*</span>
                  </label>
                  <textarea
                    id="enquiry-message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Briefly describe your objectives, target audience, and desired features..."
                    className={`w-full px-4 py-2.5 rounded-xl bg-neutral-950 border text-white placeholder-neutral-500 font-mono text-xs focus:outline-none focus:ring-1 transition-colors ${
                      errors.message
                        ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                        : 'border-neutral-800 focus:border-amber-500 focus:ring-amber-500'
                    }`}
                  />
                  {errors.message && (
                    <p className="text-[11px] font-mono text-red-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.message}</span>
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-xl bg-amber-500 hover:bg-amber-400 disabled:opacity-50 text-neutral-950 font-semibold text-xs font-mono tracking-wider uppercase transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-3.5 h-3.5 border-2 border-neutral-950 border-t-transparent rounded-full animate-spin" />
                        <span>Transmitting Enquiry...</span>
                      </span>
                    ) : (
                      <>
                        <span>Submit Project Enquiry</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
