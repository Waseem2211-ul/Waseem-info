import { Project, ContactFormData } from '../types/portfolio';
import { PERSONAL_INFO, PROJECTS, SKILL_GROUPS, TIMELINE_ITEMS } from '../data/portfolioData';

export function filterProjects(
  projects: Project[],
  category: string,
  searchQuery: string
): Project[] {
  const query = searchQuery.trim().toLowerCase();

  return projects.filter((project) => {
    const matchesCategory =
      category === 'All' || project.category === category;

    if (!matchesCategory) return false;

    if (!query) return true;

    const inName = project.name.toLowerCase().includes(query);
    const inTagline = project.tagline.toLowerCase().includes(query);
    const inDesc = project.description.toLowerCase().includes(query);
    const inTech = project.technologies.some((tech) =>
      tech.toLowerCase().includes(query)
    );

    return inName || inTagline || inDesc || inTech;
  });
}

export interface ValidationResult {
  isValid: boolean;
  errors: Record<string, string>;
}

export function validateContactForm(data: ContactFormData): ValidationResult {
  const errors: Record<string, string> = {};

  if (!data.name || data.name.trim().length < 2) {
    errors.name = 'Please enter your full name (at least 2 characters).';
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email || !emailRegex.test(data.email.trim())) {
    errors.email = 'Please provide a valid email address.';
  }

  if (!data.message || data.message.trim().length < 10) {
    errors.message = 'Please provide project details (at least 10 characters).';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

export interface TerminalOutputLine {
  text: string;
  type?: 'standard' | 'success' | 'warning' | 'error' | 'accent' | 'command';
}

export function executeTerminalCommand(
  rawInput: string
): TerminalOutputLine[] {
  const input = rawInput.trim().toLowerCase();
  if (!input) return [];

  const [cmd, ...args] = input.split(' ');

  switch (cmd) {
    case 'help':
      return [
        { text: 'AVAILABLE TERMINAL COMMANDS:', type: 'accent' },
        { text: '  about        Display Mohammed Waseem profile summary' },
        { text: '  projects     List verified portfolio projects & live links' },
        { text: '  skills       View categorized technical proficiencies' },
        { text: '  experience   Show internships at CodSoft & CodeAlpha' },
        { text: '  education    Display college and degree background' },
        { text: '  certs        List certifications (Infosys, Microsoft, CodSoft)' },
        { text: '  contact      Print direct email, phone, and social handles' },
        { text: '  resume       View resume link and credentials' },
        { text: '  clear        Wipe the terminal screen' },
        { text: '  easteregg    Unlock a hidden easter egg' },
        { text: '  theme <mode> Switch theme (dark, light)' },
      ];

    case 'about':
      return [
        { text: `=== ${PERSONAL_INFO.fullName.toUpperCase()} (${PERSONAL_INFO.brandName}) ===`, type: 'accent' },
        { text: PERSONAL_INFO.positioning },
        { text: `Academic: ${PERSONAL_INFO.degree} (2024–2028)` },
        { text: `Institution: ${PERSONAL_INFO.college}` },
        { text: `Languages: ${PERSONAL_INFO.languages.join(', ')}` },
      ];

    case 'projects':
      return [
        { text: `CURRENT PORTFOLIO PROJECTS (${PROJECTS.length}):`, type: 'accent' },
        ...PROJECTS.map((p) => ({
          text: `• [${p.category}] ${p.name}: ${p.tagline} ${p.liveUrl ? `-> ${p.liveUrl}` : '(Concept)'}`,
          type: 'standard' as const,
        })),
        { text: 'Tip: Click any project card on the page to open its full case study preview.', type: 'accent' },
      ];

    case 'skills':
      return [
        { text: 'CORE TECHNICAL PROFICIENCIES:', type: 'accent' },
        ...SKILL_GROUPS.map((g) => ({
          text: `${g.category.toUpperCase()}: ${g.skills.map((s) => s.name).join(', ')}`,
          type: 'standard' as const,
        })),
      ];

    case 'experience':
      return [
        { text: 'INTERNSHIP & PRACTICAL EXPERIENCE:', type: 'accent' },
        { text: '1. CodSoft — UI/UX Designer Intern (4 Weeks, July 2026)', type: 'standard' },
        { text: '   -> User interface design, wireframing, layout usability, and front-end translation.' },
        { text: '2. CodeAlpha — Front-End Development Intern (1 Month)', type: 'standard' },
        { text: '   -> Responsive component development, HTML/CSS/JS client-side architecture.' },
      ];

    case 'education':
      return [
        { text: 'ACADEMIC BACKGROUND:', type: 'accent' },
        { text: `• ${PERSONAL_INFO.degree} (2024–2028)`, type: 'standard' },
        { text: `  ${PERSONAL_INFO.college}, Melvisharam, Tamil Nadu, India` },
        { text: '• State Board: Computer Science with Mathematics', type: 'standard' },
      ];

    case 'certs':
    case 'certifications':
      return [
        { text: 'OFFICIAL CERTIFICATIONS & COURSES:', type: 'accent' },
        { text: '• Infosys Springboard — HTML5 - The Language (Verified)', type: 'standard' },
        { text: '• Infosys Springboard — CSS3 (Verified)', type: 'standard' },
        { text: '• Microsoft & Great Learning — Digital Marketing (Verified)', type: 'standard' },
        { text: '• CodSoft — UI/UX Design Virtual Internship Completion (Verified)', type: 'standard' },
      ];

    case 'contact':
      return [
        { text: 'DIRECT CONTACT CHANNELS:', type: 'accent' },
        { text: `• Email:    ${PERSONAL_INFO.email}` },
        { text: `• Phone:    ${PERSONAL_INFO.phone}` },
        { text: `• LinkedIn: ${PERSONAL_INFO.linkedin}` },
        { text: `• GitHub:   ${PERSONAL_INFO.github}` },
      ];

    case 'resume':
      return [
        { text: `Official Resume PDF: ${PERSONAL_INFO.resumeAsset}`, type: 'success' },
        { text: 'Use the "View / Download Resume" button in the navigation or hero to view full credentials.' },
      ];

    case 'sudo':
      return [
        { text: 'Permission denied: WASEEM engineering protocol requires curious minds, not elevated root privileges.', type: 'warning' },
      ];

    case 'whoami':
      return [
        { text: 'Guest Explorer at WASEEM Creative Engineering Portal.', type: 'standard' },
      ];

    case 'easteregg':
      return [
        { text: '🎉 EASTER EGG UNLOCKED! "Code is like humor. When you have to explain it, it is bad." - Cory House', type: 'accent' },
        { text: 'Thank you for exploring the interactive terminal. Mohammed Waseem built this with genuine dedication.', type: 'success' },
      ];

    default:
      return [
        { text: `Command not recognized: "${rawInput}". Type "help" to list available commands.`, type: 'error' },
      ];
  }
}
