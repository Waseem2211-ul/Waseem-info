import React, { useState, useMemo } from 'react';
import { Project, ProjectCategory } from '../types/portfolio';
import { PROJECTS } from '../data/portfolioData';
import { filterProjects } from '../utils/portfolio';
import { 
  ExternalLink, 
  Github, 
  ArrowUpRight, 
  Search, 
  Sparkles, 
  Layers, 
  BookOpen, 
  Filter 
} from 'lucide-react';

interface ProjectsSectionProps {
  onSelectProject: (project: Project) => void;
}

const CATEGORIES: ProjectCategory[] = [
  'All',
  'AI & Career Tools',
  'Web Applications',
  'UI/UX Concepts',
  'Business Websites',
  'Archive',
];

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onSelectProject }) => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProjects = useMemo(() => {
    return filterProjects(PROJECTS, selectedCategory, searchQuery);
  }, [selectedCategory, searchQuery]);

  return (
    <section
      id="projects"
      className="py-24 px-4 sm:px-6 lg:px-8 border-t border-neutral-900 relative"
      aria-label="Portfolio Projects"
    >
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-amber-400 uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>02 / Work &amp; Prototypes</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold font-display tracking-tight text-white">
              Selected projects.
            </h2>
            <p className="text-sm font-mono text-neutral-400 max-w-xl">
              Explorations across AI integration, full-stack architecture, responsive client engineering, and luxury UI/UX concepts.
            </p>
          </div>

          {/* Quick Counter */}
          <div className="text-xs font-mono px-3 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-400 self-start md:self-auto">
            Showing <span className="text-amber-400 font-bold">{filteredProjects.length}</span> of {PROJECTS.length} Works
          </div>
        </div>

        {/* Filter Bar & Search Input */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 p-2 rounded-2xl bg-neutral-950/70 border border-neutral-800/80">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 lg:pb-0 scrollbar-none" role="tablist">
            {CATEGORIES.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-2 text-xs font-mono rounded-xl whitespace-nowrap transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? 'bg-amber-500 text-neutral-950 font-semibold shadow-md shadow-amber-500/20'
                      : 'text-neutral-400 hover:text-white hover:bg-neutral-900'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="relative min-w-[240px]">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter by tech or keyword..."
              className="w-full pl-9 pr-3 py-2 text-xs font-mono bg-neutral-900/80 border border-neutral-800 focus:border-amber-500 rounded-xl text-white placeholder-neutral-500 focus:outline-none focus:ring-1 focus:ring-amber-500 transition-colors"
            />
          </div>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length === 0 ? (
          <div className="py-20 text-center space-y-3 bg-neutral-900/30 rounded-2xl border border-dashed border-neutral-800">
            <Filter className="w-8 h-8 text-neutral-600 mx-auto" />
            <p className="text-sm text-neutral-400 font-mono">
              No projects found matching &ldquo;{searchQuery}&rdquo;.
            </p>
            <button
              type="button"
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="px-4 py-1.5 text-xs font-mono rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/30 hover:bg-amber-500/20 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group relative flex flex-col justify-between p-6 rounded-2xl bg-neutral-900/60 border border-neutral-800 hover:border-neutral-700 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/40 overflow-hidden"
              >
                {/* Accent Top Border Indicator */}
                <div
                  className="absolute top-0 left-0 right-0 h-1 transition-opacity duration-300 opacity-60 group-hover:opacity-100"
                  style={{ backgroundColor: project.accentColor }}
                />

                {/* Top Details & Category */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="px-2.5 py-0.5 rounded-full bg-neutral-950 text-neutral-400 border border-neutral-800">
                      {project.category}
                    </span>

                    {project.featured && (
                      <span className="text-[10px] font-mono tracking-wider text-amber-400 uppercase font-semibold">
                        Featured
                      </span>
                    )}
                  </div>

                  <div>
                    <h3 className="text-xl font-bold font-display text-white group-hover:text-amber-400 transition-colors flex items-center justify-between">
                      <span>{project.name}</span>
                      <ArrowUpRight className="w-4 h-4 text-neutral-500 group-hover:text-amber-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </h3>
                    <p className="mt-1 text-xs font-mono text-neutral-400 line-clamp-1">
                      {project.tagline}
                    </p>
                  </div>

                  <p className="text-sm text-neutral-300 font-light leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technology Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 text-[11px] font-mono rounded bg-neutral-950 text-neutral-400 border border-neutral-800/80"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-1.5 py-0.5 text-[10px] font-mono rounded bg-neutral-950 text-neutral-500">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>
                </div>

                {/* Bottom Actions Cluster */}
                <div className="pt-6 mt-6 border-t border-neutral-800/80 flex items-center justify-between gap-2">
                  <button
                    type="button"
                    onClick={() => onSelectProject(project)}
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-amber-400 hover:text-amber-300 transition-colors cursor-pointer"
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>Case Study</span>
                  </button>

                  <div className="flex items-center gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
                        title="View GitHub Repository"
                        aria-label={`View ${project.name} repository`}
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}

                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-3 py-1 text-xs font-mono rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-200 hover:text-white transition-colors"
                        title="Open Live Website"
                        aria-label={`Open ${project.name} live demo`}
                      >
                        <span>Demo</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
