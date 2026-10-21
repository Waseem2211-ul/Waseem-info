import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { 
  Terminal, 
  Command, 
  Sun, 
  Moon, 
  Menu, 
  X, 
  FileText, 
  ArrowUpRight 
} from 'lucide-react';

interface NavbarProps {
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
  onOpenCommandPalette: () => void;
  onOpenTerminal: () => void;
  onOpenResume: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  theme,
  onToggleTheme,
  onOpenCommandPalette,
  onOpenTerminal,
  onOpenResume,
  activeSection,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Education', href: '#education' },
    { label: 'Services', href: '#services' },
    { label: 'Journal', href: '#journal' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const [easterEggClicks, setEasterEggClicks] = useState(0);

  const handleBrandClick = (e: React.MouseEvent) => {
    e.preventDefault();
    handleLinkClick('#home');
    const nextClicks = easterEggClicks + 1;
    setEasterEggClicks(nextClicks);
    if (nextClicks === 3) {
      onOpenTerminal();
      setEasterEggClicks(0);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? theme === 'dark'
            ? 'bg-neutral-950/85 backdrop-blur-md border-b border-neutral-800/80 shadow-lg shadow-black/20'
            : 'bg-white/85 backdrop-blur-md border-b border-neutral-200/80 shadow-md shadow-neutral-200/50'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        {/* Brand Monogram */}
        <a
          href="#home"
          onClick={handleBrandClick}
          className="group flex flex-col focus:outline-none focus:ring-2 focus:ring-amber-500/50 rounded-lg p-1 cursor-pointer"
          aria-label={`${PERSONAL_INFO.brandName} - Return to top`}
          title="Click to return home (or 3x for terminal easter egg)"
        >
          <div className="flex items-center gap-2">
            <span className="font-display font-bold text-2xl tracking-tight transition-colors duration-200 group-hover:text-amber-500">
              {PERSONAL_INFO.brandName}
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-amber-500 animate-pulse" />
          </div>
          <span className="text-[10px] font-mono tracking-widest text-neutral-400 uppercase -mt-0.5">
            {PERSONAL_INFO.fullName}
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav
          className="hidden lg:flex items-center space-x-1 font-medium text-xs tracking-wider uppercase font-mono"
          aria-label="Main Navigation"
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className={`relative px-3 py-1.5 rounded-full transition-colors duration-200 ${
                  isActive
                    ? 'text-amber-400 font-semibold'
                    : 'text-neutral-400 hover:text-neutral-100 hover:bg-neutral-800/40'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-amber-400 rounded-full" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Actions Cluster: Resume, Terminal, Command Palette, Theme, Mobile Toggle */}
        <div className="flex items-center gap-2">
          {/* Resume button */}
          <button
            type="button"
            onClick={onOpenResume}
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-medium rounded-full border border-neutral-700 hover:border-amber-500/50 hover:bg-amber-500/10 transition-colors duration-200 text-neutral-200 cursor-pointer"
            aria-label="View Resume PDF"
          >
            <FileText className="w-3.5 h-3.5 text-amber-400" />
            <span>Resume</span>
          </button>

          {/* Terminal Launcher */}
          <button
            type="button"
            onClick={onOpenTerminal}
            className="p-2 rounded-full text-neutral-400 hover:text-amber-400 hover:bg-neutral-800/60 transition-colors border border-transparent hover:border-neutral-700 focus:outline-none focus:ring-2 focus:ring-amber-500/50 cursor-pointer"
            title="Open Developer Terminal (`_`)"
            aria-label="Open Developer Terminal"
          >
            <Terminal className="w-4 h-4" />
          </button>

          {/* Command Palette Launcher */}
          <button
            type="button"
            onClick={onOpenCommandPalette}
            className="hidden md:inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-mono text-neutral-400 hover:text-neutral-200 bg-neutral-900/60 hover:bg-neutral-800 border border-neutral-800 rounded-full transition-colors cursor-pointer"
            title="Open Command Palette (Ctrl+K or ⌘K)"
            aria-label="Open Command Palette"
          >
            <Command className="w-3.5 h-3.5 text-amber-400" />
            <span>⌘K</span>
          </button>

          {/* Theme Toggle */}
          <button
            type="button"
            onClick={onToggleTheme}
            className="p-2 rounded-full text-neutral-400 hover:text-amber-400 hover:bg-neutral-800/60 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500/50 cursor-pointer"
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4" />
            ) : (
              <Moon className="w-4 h-4 text-neutral-700" />
            )}
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-neutral-300 hover:text-white hover:bg-neutral-800/60 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500/50 cursor-pointer"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          className={`lg:hidden border-b transition-all duration-300 px-6 py-6 ${
            theme === 'dark'
              ? 'bg-neutral-950/95 backdrop-blur-xl border-neutral-800'
              : 'bg-white/95 backdrop-blur-xl border-neutral-200'
          }`}
          role="dialog"
          aria-label="Mobile Navigation Menu"
        >
          <div className="flex flex-col space-y-3 font-mono text-sm">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className={`py-2 px-3 rounded-lg transition-colors flex items-center justify-between ${
                  activeSection === link.href.substring(1)
                    ? 'bg-amber-500/10 text-amber-400 font-semibold'
                    : 'text-neutral-400 hover:text-white hover:bg-neutral-800/40'
                }`}
              >
                <span>{link.label}</span>
                <ArrowUpRight className="w-4 h-4 opacity-50" />
              </a>
            ))}

            <div className="pt-4 mt-2 border-t border-neutral-800/80 flex flex-col gap-2">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="w-full py-2.5 px-3 rounded-lg border border-amber-500/40 bg-amber-500/10 text-amber-400 font-medium flex items-center justify-center gap-2 text-xs"
              >
                <FileText className="w-4 h-4" />
                <span>View Full Resume (PDF)</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCommandPalette();
                }}
                className="w-full py-2.5 px-3 rounded-lg border border-neutral-800 bg-neutral-900 text-neutral-300 font-medium flex items-center justify-center gap-2 text-xs"
              >
                <Command className="w-4 h-4 text-amber-400" />
                <span>Open Command Palette (⌘K)</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
