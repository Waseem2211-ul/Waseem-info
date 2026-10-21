export type ProjectCategory = 
  | 'All'
  | 'AI & Career Tools'
  | 'Web Applications'
  | 'UI/UX Concepts'
  | 'Business Websites'
  | 'Archive';

export interface Project {
  id: string;
  name: string;
  tagline: string;
  category: ProjectCategory;
  description: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  canEmbed?: boolean;
  purpose: string;
  intendedUsers: string;
  keyFeatures: string[];
  designAndTechDecisions: string[];
  accentColor: string;
}

export interface SkillGroup {
  category: string;
  description: string;
  skills: Array<{
    name: string;
    level?: 'Learning' | 'Core' | 'Practicing';
    highlight?: boolean;
  }>;
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  duration: string;
  periodText?: string;
  type: 'internship' | 'education' | 'activity' | 'certification';
  summary: string;
  highlights: string[];
  credentialAsset?: string;
  credentialType?: 'image' | 'pdf';
  isExternalLink?: boolean;
  externalLink?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  deliverables: string[];
  idealFor: string;
}

export interface JournalNote {
  id: string;
  title: string;
  tag: string;
  readingTime: string;
  date: string;
  excerpt: string;
  fullContent: string[];
}

export interface ContactFormData {
  name: string;
  email: string;
  projectType: string;
  budgetRange: string;
  timeline: string;
  message: string;
}
