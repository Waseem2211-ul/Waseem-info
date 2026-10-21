/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Project, ExperienceItem, ServiceItem } from './types/portfolio';
import { PERSONAL_INFO } from './data/portfolioData';

// Core Components
import { Navbar } from './components/Navbar';
import { CinematicIntro } from './components/CinematicIntro';
import { ThreeBackground } from './components/ThreeBackground';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ProjectsSection } from './components/ProjectsSection';
import { CaseStudyModal } from './components/CaseStudyModal';
import { SkillsSection } from './components/SkillsSection';
import { ExperienceEducationSection } from './components/ExperienceEducationSection';
import { CertificateModal } from './components/CertificateModal';
import { ResumeModal } from './components/ResumeModal';
import { ServicesSection } from './components/ServicesSection';
import { JournalSection } from './components/JournalSection';
import { ContactSection } from './components/ContactSection';
import { CommandPalette } from './components/CommandPalette';
import { DeveloperTerminal } from './components/DeveloperTerminal';
import { CustomCursor } from './components/CustomCursor';
import { ScrollProgressBar } from './components/ScrollProgressBar';
import { Footer } from './components/Footer';
import { NotFoundPage } from './components/NotFoundPage';

export default function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [introCompleted, setIntroCompleted] = useState<boolean>(() => {
    // Check if user has already seen the intro or if autostart=1 is present
    const params = new URLSearchParams(window.location.search);
    if (params.get('autostart') === '1') return true;
    return sessionStorage.getItem('waseem_intro_seen') === 'true';
  });

  const [activeSection, setActiveSection] = useState('home');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedCert, setSelectedCert] = useState<{
    title: string;
    issuer: string;
    assetPath: string;
    assetType: 'image' | 'pdf';
  } | null>(null);

  const [resumeModalOpen, setResumeModalOpen] = useState(false);
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [contactProjectType, setContactProjectType] = useState('');
  const [is404, setIs404] = useState(false);

  // Initialize theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('waseem_theme') as 'dark' | 'light' | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.className = savedTheme;
    } else {
      document.documentElement.className = 'dark';
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    localStorage.setItem('waseem_theme', nextTheme);
    document.documentElement.className = nextTheme;
  };

  // Keyboard shortcut for Command Palette (Cmd+K / Ctrl+K)
  useEffect(() => {
    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setCommandPaletteOpen((prev) => !prev);
      }
      // Backtick or tilde to toggle terminal
      if (e.key === '`' && !['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement)?.tagName)) {
        e.preventDefault();
        setTerminalOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleGlobalKeyDown);
    return () => window.removeEventListener('keydown', handleGlobalKeyDown);
  }, []);

  // Section observer to update active navbar state
  useEffect(() => {
    const sections = ['home', 'about', 'projects', 'skills', 'experience', 'education', 'services', 'journal', 'contact'];
    const handleScroll = () => {
      const scrollY = window.scrollY;
      for (const sectionId of [...sections].reverse()) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop - 150;
          if (scrollY >= top) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleIntroComplete = () => {
    setIntroCompleted(true);
    sessionStorage.setItem('waseem_intro_seen', 'true');
  };

  const handleNavigate = (sectionId: string) => {
    setIs404(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleViewCertificate = (item: ExperienceItem) => {
    if (item.credentialAsset) {
      setSelectedCert({
        title: item.role,
        issuer: item.organization,
        assetPath: item.credentialAsset,
        assetType: item.credentialType || 'image',
      });
    }
  };

  const handleSelectService = (service: ServiceItem) => {
    setContactProjectType(service.title);
    handleNavigate('contact');
  };

  if (is404) {
    return (
      <NotFoundPage
        onGoHome={() => setIs404(false)}
        onGoProjects={() => {
          setIs404(false);
          handleNavigate('projects');
        }}
        onOpenTerminal={() => {
          setIs404(false);
          setTerminalOpen(true);
        }}
      />
    );
  }

  return (
    <div className={`min-h-screen bg-neutral-950 text-neutral-100 transition-colors duration-300 relative ${theme === 'light' ? 'light bg-neutral-50 text-neutral-900' : ''}`}>
      {/* Cinematic Intro (Only shows once or if requested) */}
      {!introCompleted && (
        <CinematicIntro onComplete={handleIntroComplete} />
      )}

      {/* Subtle Three.js 3D Wireframe Scene */}
      <ThreeBackground theme={theme} />

      {/* Top Scroll Progress Bar */}
      <ScrollProgressBar />

      {/* Custom Desktop Follower Cursor */}
      <CustomCursor />

      {/* Navigation Header */}
      <Navbar
        theme={theme}
        onToggleTheme={toggleTheme}
        onOpenCommandPalette={() => setCommandPaletteOpen(true)}
        onOpenTerminal={() => setTerminalOpen(true)}
        onOpenResume={() => setResumeModalOpen(true)}
        activeSection={activeSection}
      />

      {/* Main Content Sections */}
      <main className="relative z-10" id="main-content">
        <HeroSection
          onOpenResume={() => setResumeModalOpen(true)}
          onOpenTerminal={() => setTerminalOpen(true)}
          onExploreProjects={() => handleNavigate('projects')}
          onContactClick={() => handleNavigate('contact')}
        />

        <AboutSection />

        <ProjectsSection
          onSelectProject={(project) => setSelectedProject(project)}
        />

        <SkillsSection />

        <ExperienceEducationSection
          onViewCertificate={handleViewCertificate}
        />

        <ServicesSection
          onSelectService={handleSelectService}
        />

        <JournalSection />

        <ContactSection
          initialProjectType={contactProjectType}
        />
      </main>

      {/* Footer */}
      <Footer
        onOpenTerminal={() => setTerminalOpen(true)}
        onOpenResume={() => setResumeModalOpen(true)}
      />

      {/* Modals & Overlays */}
      <CaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {selectedCert && (
        <CertificateModal
          isOpen={true}
          onClose={() => setSelectedCert(null)}
          title={selectedCert.title}
          issuer={selectedCert.issuer}
          assetPath={selectedCert.assetPath}
          assetType={selectedCert.assetType}
        />
      )}

      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />

      <CommandPalette
        isOpen={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
        onNavigate={handleNavigate}
        onToggleTheme={toggleTheme}
        onOpenTerminal={() => setTerminalOpen(true)}
        onOpenResume={() => setResumeModalOpen(true)}
        currentTheme={theme}
      />

      <DeveloperTerminal
        isOpen={terminalOpen}
        onClose={() => setTerminalOpen(false)}
        onToggleTheme={toggleTheme}
        onOpenResume={() => setResumeModalOpen(true)}
      />
    </div>
  );
}
