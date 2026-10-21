import React, { useEffect } from 'react';
import { X, ExternalLink, Download, Award, ShieldCheck } from 'lucide-react';

interface CertificateModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  issuer: string;
  assetPath: string;
  assetType: 'image' | 'pdf';
}

export const CertificateModal: React.FC<CertificateModalProps> = ({
  isOpen,
  onClose,
  title,
  issuer,
  assetPath,
  assetType,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-neutral-950/90 backdrop-blur-md"
      role="dialog"
      aria-modal="true"
      aria-labelledby="cert-modal-title"
    >
      <div className="relative w-full max-w-4xl rounded-2xl bg-neutral-900 border border-neutral-800 shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
        {/* Top Bar */}
        <div className="px-6 py-4 bg-neutral-950 border-b border-neutral-800 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <div className="p-1.5 rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/20">
              <Award className="w-4 h-4" />
            </div>
            <div>
              <h3 id="cert-modal-title" className="text-sm sm:text-base font-bold font-display text-white">
                {title}
              </h3>
              <p className="text-xs font-mono text-neutral-400">
                Issued by {issuer} • Verified Credential
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={assetPath}
              download
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-200 transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Download</span>
            </a>

            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500 cursor-pointer"
              aria-label="Close certificate viewer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Certificate Display Area */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1 flex items-center justify-center bg-neutral-950">
          {assetType === 'image' ? (
            <div className="relative max-w-full max-h-[70vh] rounded-xl overflow-hidden border border-neutral-800 shadow-xl">
              <img
                src={assetPath}
                alt={`${title} - Certificate of Completion`}
                className="w-full h-auto max-h-[70vh] object-contain mx-auto"
              />
            </div>
          ) : (
            <div className="w-full h-[65vh] rounded-xl overflow-hidden border border-neutral-800 bg-neutral-900 flex flex-col">
              <iframe
                src={assetPath}
                title={`${title} Certificate PDF`}
                className="w-full h-full border-0"
              />
            </div>
          )}
        </div>

        {/* Bottom Verification Note */}
        <div className="px-6 py-3 bg-neutral-950/80 border-t border-neutral-800 flex items-center justify-between text-xs font-mono text-neutral-400">
          <div className="flex items-center gap-2 text-emerald-400">
            <ShieldCheck className="w-4 h-4" />
            <span>Official Authentic Asset from Mohammed Waseem</span>
          </div>

          <a
            href={assetPath}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-amber-400 hover:underline"
          >
            <span>Open in raw viewer</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </div>
  );
};
