import React, { useState, useEffect, useRef } from 'react';
import { 
  Search, 
  X, 
  Home, 
  User, 
  Briefcase, 
  Cpu, 
  GraduationCap, 
  FileText, 
  Mail, 
  Sun, 
  Moon, 
  Terminal as TerminalIcon, 
  BookOpen, 
  Sparkles,
  ArrowRight
} from 'lucide-react';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (sectionId: string) => void;
  onToggleTheme: () => void;
  onOpenTerminal: () => void;
  onOpenResume: () => void;
  currentTheme: 'dark' | 'light';
}

interface CommandItem {
  id: string;
  title: string;
  category: 'Navigation' | 'Actions' | 'Tools';
  icon: React.ReactNode;
  shortcut?: string;
  action: () => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({
  isOpen,
  onClose,
  onNavigate,
  onToggleTheme,
  onOpenTerminal,
  onOpenResume,
  currentTheme,
}) => {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const commands: CommandItem[] = [
    {
      id: 'home',
      title: 'Go to Home / Hero',
      category: 'Navigation',
      icon: <Home className="w-4 h-4 text-amber-400" />,
      action: () => {
        onNavigate('home');
        onClose();
      },
    },
    {
      id: 'about',
      title: 'About Mohammed Waseem A',
      category: 'Navigation',
      icon: <User className="w-4 h-4 text-sky-400" />,
      action: () => {
        onNavigate('about');
        onClose();
      },
    },
    {
      id: 'projects',
      title: 'Explore Projects & Prototypes',
      category: 'Navigation',
      icon: <Briefcase className="w-4 h-4 text-emerald-400" />,
      action: () => {
        onNavigate('projects');
        onClose();
      },
    },
    {
      id: 'skills',
      title: 'View Technical Skills & Technologies',
      category: 'Navigation',
      icon: <Cpu className="w-4 h-4 text-purple-400" />,
      action: () => {
        onNavigate('skills');
        onClose();
      },
    },
    {
      id: 'experience',
      title: 'Internships & Practical Experience',
      category: 'Navigation',
      icon: <Briefcase className="w-4 h-4 text-amber-400" />,
      action: () => {
        onNavigate('experience');
        onClose();
      },
    },
    {
      id: 'education',
      title: 'Education, Degrees & Certifications',
      category: 'Navigation',
      icon: <GraduationCap className="w-4 h-4 text-blue-400" />,
      action: () => {
        onNavigate('education');
        onClose();
      },
    },
    {
      id: 'journal',
      title: 'Journal & Technical Reflections',
      category: 'Navigation',
      icon: <BookOpen className="w-4 h-4 text-pink-400" />,
      action: () => {
        onNavigate('journal');
        onClose();
      },
    },
    {
      id: 'contact',
      title: 'Contact & Collaboration Enquiry',
      category: 'Navigation',
      icon: <Mail className="w-4 h-4 text-emerald-400" />,
      action: () => {
        onNavigate('contact');
        onClose();
      },
    },
    {
      id: 'resume',
      title: 'View & Download Resume PDF',
      category: 'Actions',
      icon: <FileText className="w-4 h-4 text-amber-400" />,
      shortcut: 'CV',
      action: () => {
        onClose();
        onOpenResume();
      },
    },
    {
      id: 'terminal',
      title: 'Launch Interactive Developer Terminal',
      category: 'Tools',
      icon: <TerminalIcon className="w-4 h-4 text-amber-400" />,
      shortcut: '>_',
      action: () => {
        onClose();
        onOpenTerminal();
      },
    },
    {
      id: 'theme',
      title: `Toggle Theme (Switch to ${currentTheme === 'dark' ? 'Light' : 'Dark'} Mode)`,
      category: 'Actions',
      icon: currentTheme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-neutral-400" />,
      action: () => {
        onToggleTheme();
        onClose();
      },
    },
  ];

  const filteredCommands = commands.filter((cmd) =>
    cmd.title.toLowerCase().includes(query.toLowerCase()) ||
    cmd.category.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Open palette on Cmd+K or Ctrl+K
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else onClose(); // handoff handled by App
      }

      if (!isOpen) return;

      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % (filteredCommands.length || 1));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((prev) =>
          prev === 0 ? (filteredCommands.length || 1) - 1 : prev - 1
        );
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (filteredCommands[selectedIndex]) {
          filteredCommands[selectedIndex].action();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, filteredCommands, selectedIndex, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-neutral-950/80 backdrop-blur-md"
      role="dialog"
      aria-modal="true"
      aria-label="Command Palette"
      onClick={onClose}
    >
      <div
        className="w-full max-w-xl rounded-2xl bg-neutral-900 border border-neutral-800 shadow-2xl overflow-hidden flex flex-col max-h-[75vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="relative flex items-center px-4 py-3.5 border-b border-neutral-800 bg-neutral-950">
          <Search className="w-4 h-4 text-neutral-400 mr-3 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            placeholder="Type a command or navigate..."
            className="w-full bg-transparent text-sm font-mono text-white placeholder-neutral-500 focus:outline-none"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery('')}
              className="p-1 rounded-md text-neutral-400 hover:text-white"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
          <kbd className="hidden sm:inline-block ml-2 px-2 py-0.5 text-[10px] font-mono text-neutral-400 bg-neutral-800 border border-neutral-700 rounded">
            ESC
          </kbd>
        </div>

        {/* Command List */}
        <div className="p-2 overflow-y-auto space-y-1">
          {filteredCommands.length === 0 ? (
            <div className="py-8 text-center text-xs font-mono text-neutral-500">
              No commands matching &ldquo;{query}&rdquo;
            </div>
          ) : (
            filteredCommands.map((cmd, idx) => {
              const isSelected = idx === selectedIndex;
              return (
                <button
                  key={cmd.id}
                  type="button"
                  onClick={cmd.action}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-left transition-colors cursor-pointer ${
                    isSelected
                      ? 'bg-amber-500/10 text-white border border-amber-500/30'
                      : 'text-neutral-300 hover:bg-neutral-800/60 border border-transparent'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="p-1.5 rounded-lg bg-neutral-950 border border-neutral-800 shrink-0">
                      {cmd.icon}
                    </div>
                    <div>
                      <p className="text-xs font-mono font-medium text-white">
                        {cmd.title}
                      </p>
                      <span className="text-[10px] font-mono text-neutral-500 uppercase">
                        {cmd.category}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    {cmd.shortcut && (
                      <span className="px-2 py-0.5 rounded bg-neutral-950 border border-neutral-800 text-[10px] font-mono text-neutral-400">
                        {cmd.shortcut}
                      </span>
                    )}
                    <ArrowRight className={`w-3.5 h-3.5 transition-transform ${isSelected ? 'text-amber-400 translate-x-0.5' : 'text-neutral-600'}`} />
                  </div>
                </button>
              );
            })
          )}
        </div>

        {/* Footer info */}
        <div className="px-4 py-2 bg-neutral-950/80 border-t border-neutral-800 flex items-center justify-between text-[11px] font-mono text-neutral-500">
          <div className="flex items-center gap-3">
            <span>&uarr;&darr; to navigate</span>
            <span>&crarr; to select</span>
          </div>
          <span>WASEEM Command Engine</span>
        </div>
      </div>
    </div>
  );
};
