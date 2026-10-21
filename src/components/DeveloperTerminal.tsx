import React, { useState, useEffect, useRef } from 'react';
import { executeTerminalCommand, TerminalOutputLine } from '../utils/portfolio';
import { Terminal as TerminalIcon, X, Maximize2, Minimize2, CornerDownLeft, Sparkles } from 'lucide-react';

interface DeveloperTerminalProps {
  isOpen: boolean;
  onClose: () => void;
  onToggleTheme: () => void;
  onOpenResume: () => void;
}

export const DeveloperTerminal: React.FC<DeveloperTerminalProps> = ({
  isOpen,
  onClose,
  onToggleTheme,
  onOpenResume,
}) => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [lines, setLines] = useState<TerminalOutputLine[]>([
    { text: 'WASEEM DEVELOPER TERMINAL v2.6.0 [Interactive Shell]', type: 'accent' },
    { text: 'Type "help" to display supported commands or "about" to view developer details.', type: 'standard' },
    { text: '─────────────────────────────────────────────────────────────', type: 'standard' },
  ]);

  const [isExpanded, setIsExpanded] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [lines]);

  const handleCommand = (rawCommand: string) => {
    const trimmed = rawCommand.trim();
    if (!trimmed) return;

    // Add command to history
    setHistory((prev) => [trimmed, ...prev]);
    setHistoryIndex(-1);

    // Echo the command
    const newLines: TerminalOutputLine[] = [
      ...lines,
      { text: `waseem@portfolio:~$ ${trimmed}`, type: 'command' },
    ];

    if (trimmed.toLowerCase() === 'clear') {
      setLines([
        { text: 'Terminal cleared. Type "help" for commands.', type: 'accent' },
      ]);
      setInput('');
      return;
    }

    if (trimmed.toLowerCase() === 'resume') {
      onOpenResume();
    }

    if (trimmed.toLowerCase().startsWith('theme')) {
      onToggleTheme();
      newLines.push({ text: 'Theme toggled successfully.', type: 'success' });
      setLines(newLines);
      setInput('');
      return;
    }

    const commandOutput = executeTerminalCommand(trimmed);
    setLines([...newLines, ...commandOutput]);
    setInput('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleCommand(input);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (history.length > 0 && historyIndex < history.length - 1) {
        const nextIdx = historyIndex + 1;
        setHistoryIndex(nextIdx);
        setInput(history[nextIdx]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const nextIdx = historyIndex - 1;
        setHistoryIndex(nextIdx);
        setInput(history[nextIdx]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInput('');
      }
    } else if (e.key === 'Escape') {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-neutral-950/80 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label="Developer Terminal"
    >
      <div
        className={`relative w-full rounded-2xl bg-neutral-950 border border-neutral-800 shadow-2xl flex flex-col font-mono text-xs transition-all duration-300 ${
          isExpanded ? 'max-w-5xl h-[90vh]' : 'max-w-3xl h-[580px]'
        }`}
      >
        {/* Terminal Header Bar */}
        <div className="px-4 py-3 bg-neutral-900 border-b border-neutral-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5 mr-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
            </div>
            <TerminalIcon className="w-3.5 h-3.5 text-amber-400" />
            <span className="text-neutral-300 font-medium">
              bash - waseem@portfolio:~
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setIsExpanded(!isExpanded)}
              className="p-1 rounded text-neutral-400 hover:text-white transition-colors"
              title={isExpanded ? 'Minimize' : 'Expand'}
              aria-label={isExpanded ? 'Minimize terminal' : 'Expand terminal'}
            >
              {isExpanded ? (
                <Minimize2 className="w-3.5 h-3.5" />
              ) : (
                <Maximize2 className="w-3.5 h-3.5" />
              )}
            </button>
            <button
              type="button"
              onClick={onClose}
              className="p-1 rounded text-neutral-400 hover:text-white transition-colors cursor-pointer"
              aria-label="Close developer terminal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Output Screen */}
        <div
          className="flex-1 p-4 overflow-y-auto space-y-1.5 text-neutral-300 scrollbar-thin select-text"
          onClick={() => inputRef.current?.focus()}
        >
          {lines.map((line, idx) => {
            let color = 'text-neutral-300';
            if (line.type === 'accent') color = 'text-amber-400 font-bold';
            if (line.type === 'command') color = 'text-sky-300 font-semibold';
            if (line.type === 'success') color = 'text-emerald-400';
            if (line.type === 'error') color = 'text-red-400';
            if (line.type === 'warning') color = 'text-orange-400';

            return (
              <div key={idx} className={`${color} whitespace-pre-wrap leading-relaxed`}>
                {line.text}
              </div>
            );
          })}
          <div ref={bottomRef} />
        </div>

        {/* Command Input Prompt */}
        <div className="px-4 py-3 bg-neutral-900/90 border-t border-neutral-800 flex items-center gap-2">
          <span className="text-emerald-400 font-semibold whitespace-nowrap">
            waseem@portfolio:~$
          </span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type 'help' for commands..."
            className="flex-1 bg-transparent text-white focus:outline-none font-mono text-xs placeholder-neutral-600"
          />
          <button
            type="button"
            onClick={() => handleCommand(input)}
            className="p-1 text-neutral-400 hover:text-amber-400 cursor-pointer"
            aria-label="Execute command"
          >
            <CornerDownLeft className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
