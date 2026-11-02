import React, { useState, useRef, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Terminal as TerminalIcon, X, ExternalLink, ArrowDown, FileText, CheckCircle2 } from 'lucide-react';

interface InteractiveTerminalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface CertOutputData {
  title: string;
  issuer?: string;
  date?: string;
  certId?: string;
  previewImage?: string;
  pdfUrl: string;
  sectionAnchor: string;
  verificationUrl?: string;
}

interface CommandLog {
  id: string;
  command?: string;
  type?: 'text' | 'cert-preview' | 'banner';
  output?: string | string[];
  certData?: CertOutputData;
  isError?: boolean;
}

export const InteractiveTerminal: React.FC<InteractiveTerminalProps> = ({ isOpen, onClose }) => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);
  const [logs, setLogs] = useState<CommandLog[]>([
    {
      id: 'initial-banner',
      type: 'banner',
      output: [
        '╔═════════════════════════════════════════════════════════════════╗',
        '║  Putri Maharani.S — Security & Quality Assurance Terminal CLI  ║',
        '║  Type "help" to display all available commands.                 ║',
        '╚═════════════════════════════════════════════════════════════════╝',
      ],
    },
  ]);

  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 80);
    }
  }, [isOpen]);

  // Auto scroll to bottom of terminal
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [logs]);

  if (!isOpen) return null;

  // Handle command submission
  const handleCommandSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const rawCmd = input;
    const cleanCmd = input.trim();
    if (!cleanCmd) return;

    // Add to command history
    setHistory((prev) => [...prev, cleanCmd]);
    setHistoryIndex(-1);
    setInput('');

    const lowerCmd = cleanCmd.toLowerCase();
    const logId = `log-${Date.now()}-${Math.random().toString(36).substr(2, 5)}`;

    // Command Dispatcher
    switch (lowerCmd) {
      case 'help':
        setLogs((prev) => [
          ...prev,
          {
            id: logId,
            command: cleanCmd,
            output: [
              'Available Portfolio Commands:',
              '  help           — Display all available commands and descriptions',
              '  about          — Show portfolio introduction and career background',
              '  whoami         — Display concise identity summary',
              '  skills         — List verified technical skills and categories',
              '  experience     — Display professional QA & IT internship history',
              '  projects       — List security labs and QA case studies',
              '  certifications — List all verified certifications & credentials',
              '  cert udemy     — Display Udemy cybersecurity certificate preview & PDF',
              '  cert idsecconf — Display IDSECCONF certificate preview & PDF',
              '  education      — Display academic education history',
              '  contact        — Display official contact & dispatch channels',
              '  resume         — Open / download the official resume PDF',
              '  date           — Display current date & time',
              '  banner         — Display welcome greeting and instructions',
              '  clear          — Clear all terminal logs',
            ],
          },
        ]);
        break;

      case 'about':
        setLogs((prev) => [
          ...prev,
          {
            id: logId,
            command: cleanCmd,
            output: [
              '=== ABOUT PUTRI MAHARANI.S ===',
              `Name: ${portfolioData.hero.name}`,
              'Field: Cybersecurity and Quality Assurance',
              'Education: Informatics / Computer Science (Universitas Muslim Indonesia)',
              'Career Interests: Cybersecurity, penetration testing, vulnerability analysis, and security operations.',
              '',
              portfolioData.about.biography[0],
              '',
              portfolioData.about.biography[2],
            ],
          },
        ]);
        break;

      case 'whoami':
        setLogs((prev) => [
          ...prev,
          {
            id: logId,
            command: cleanCmd,
            output: [
              'User: Putri Maharani.S',
              'Background: Computer Science Graduate | Universitas Muslim Indonesia',
              'Experience: Quality Assurance (Episoden) & IT Intern (PT PLN Persero)',
              'Focus: Entry-Level Penetration Testing & Junior Security Analyst',
              'Status: Available for Remote & Local Opportunities (Makassar, Indonesia)',
            ],
          },
        ]);
        break;

      case 'skills':
        setLogs((prev) => [
          ...prev,
          {
            id: logId,
            command: cleanCmd,
            output: [
              '=== TECHNICAL SKILLS ===',
              ...portfolioData.skillCategories.map(
                (c) => `[${c.title}]: ${c.skills.join(', ')}`
              ),
            ],
          },
        ]);
        break;

      case 'experience':
        setLogs((prev) => [
          ...prev,
          {
            id: logId,
            command: cleanCmd,
            output: [
              '=== PROFESSIONAL EXPERIENCE ===',
              ...portfolioData.experiences.flatMap((exp) => [
                `* ${exp.position} — ${exp.organization} (${exp.period})`,
                `  Work Arrangement: ${exp.workArrangement || exp.location}`,
                '  Key Responsibilities:',
                ...exp.responsibilities.map((r) => `    - ${r}`),
                '',
              ]),
            ],
          },
        ]);
        break;

      case 'projects':
        setLogs((prev) => [
          ...prev,
          {
            id: logId,
            command: cleanCmd,
            output: [
              '=== FEATURED PROJECTS & SECURITY LABS ===',
              ...portfolioData.projects.flatMap((p) => [
                `* ${p.title} [${p.category}]`,
                `  Status: ${p.status}`,
                `  Description: ${p.description}`,
                `  Tools: ${p.tools.join(', ')}`,
                '',
              ]),
              'Tip: Click "View Details" on the project cards for full methodology and observations.',
            ],
          },
        ]);
        break;

      case 'certifications':
        setLogs((prev) => [
          ...prev,
          {
            id: logId,
            command: cleanCmd,
            output: [
              '=== VERIFIED CERTIFICATIONS & CREDENTIAL ARCHIVE ===',
              ...portfolioData.certifications.map((c) => {
                const issuerInfo = c.issuer ? ` [Issuer: ${c.issuer}]` : '';
                const typeInfo = ` (${c.type})`;
                return `* ${c.name}${typeInfo}${issuerInfo}`;
              }),
              '',
              'Specialized views available: "cert udemy" or "cert idsecconf"',
            ],
          },
        ]);
        break;

      case 'cert udemy': {
        const udemyCert = portfolioData.certifications.find((c) => c.id === 'cert-udemy');
        setLogs((prev) => [
          ...prev,
          {
            id: logId,
            command: cleanCmd,
            type: 'cert-preview',
            certData: {
              title: udemyCert?.name || 'Cyber Security Fundamental by RWID',
              issuer: udemyCert?.issuer || 'Udemy (Remote Worker Indonesia)',
              date: udemyCert?.date || '3 February 2025',
              certId: udemyCert?.certificateId || 'UC-daf352d6-84a8-4958-85ea-f0a63c386d97',
              previewImage: udemyCert?.previewImage || '/certificates/previews/udemy-cybersecurity-preview.png',
              pdfUrl: udemyCert?.fileUrl || '/certificates/udemy-cybersecurity.pdf',
              sectionAnchor: '#cert-udemy',
              verificationUrl: udemyCert?.verificationUrl,
            },
          },
        ]);
        break;
      }

      case 'cert idsecconf': {
        const idsecCert = portfolioData.certifications.find((c) => c.id === 'cert-idsecconf');
        setLogs((prev) => [
          ...prev,
          {
            id: logId,
            command: cleanCmd,
            type: 'cert-preview',
            certData: {
              title: idsecCert?.name || 'IDSECCONF 2025 — Conference Participant',
              issuer: idsecCert?.issuer || 'IDSECCONF Council & COCONUT Computer Club',
              date: idsecCert?.date || '8–9 November 2025',
              previewImage: idsecCert?.previewImage || '/certificates/previews/idsecconf-2025-preview.png',
              pdfUrl: idsecCert?.fileUrl || '/certificates/idsecconf-2025.pdf',
              sectionAnchor: '#cert-idsecconf',
            },
          },
        ]);
        break;
      }

      case 'education':
        setLogs((prev) => [
          ...prev,
          {
            id: logId,
            command: cleanCmd,
            output: [
              '=== EDUCATION ===',
              ...portfolioData.education.map(
                (edu) => `* ${edu.degree} — ${edu.institution} (${edu.location})`
              ),
            ],
          },
        ]);
        break;

      case 'contact':
        setLogs((prev) => [
          ...prev,
          {
            id: logId,
            command: cleanCmd,
            output: [
              '=== CONTACT INFORMATION ===',
              `Email: ${portfolioData.contact.email}`,
              `Location: ${portfolioData.contact.location}`,
              `LinkedIn: ${portfolioData.contact.linkedinUrl || 'Putri Maharani.S (Configurable profile)'}`,
            ],
          },
        ]);
        break;

      case 'resume':
        setLogs((prev) => [
          ...prev,
          {
            id: logId,
            command: cleanCmd,
            output: [
              '=== RESUME PDF ===',
              'Official Resume: Putri_Maharani_S_Resume.pdf',
              'Download location: /resume.pdf (Available on disk)',
            ],
            type: 'cert-preview',
            certData: {
              title: 'Putri Maharani.S — Official Resume',
              issuer: 'Verified Curriculum Vitae',
              pdfUrl: '/resume.pdf',
              sectionAnchor: '#home',
            },
          },
        ]);
        break;

      case 'date':
        setLogs((prev) => [
          ...prev,
          {
            id: logId,
            command: cleanCmd,
            output: `Current Browser Timestamp: ${new Date().toLocaleString()}`,
          },
        ]);
        break;

      case 'banner':
        setLogs((prev) => [
          ...prev,
          {
            id: logId,
            command: cleanCmd,
            type: 'banner',
            output: [
              '╔═════════════════════════════════════════════════════════════════╗',
              '║  Welcome to Putri Maharani.S Portfolio Terminal                ║',
              '║  Learning · Testing · Securing                                  ║',
              '║  Type "help" to see all commands or "cert udemy" / "cert idsecconf" ║',
              '╚═════════════════════════════════════════════════════════════════╝',
            ],
          },
        ]);
        break;

      case 'clear':
        setLogs([]);
        return;

      default:
        setLogs((prev) => [
          ...prev,
          {
            id: logId,
            command: cleanCmd,
            isError: true,
            output: `Command not recognized: "${rawCmd}". Type "help" to view all available commands.`,
          },
        ]);
        break;
    }
  };

  // Up/Down Arrow Command History Navigation
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (history.length === 0) return;
      const nextIndex = historyIndex === -1 ? history.length - 1 : Math.max(0, historyIndex - 1);
      setHistoryIndex(nextIndex);
      setInput(history[nextIndex] || '');
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (history.length === 0 || historyIndex === -1) return;
      const nextIndex = historyIndex + 1;
      if (nextIndex >= history.length) {
        setHistoryIndex(-1);
        setInput('');
      } else {
        setHistoryIndex(nextIndex);
        setInput(history[nextIndex]);
      }
    }
  };

  // Scroll to section on page
  const scrollToAnchor = (anchor: string) => {
    const el = document.querySelector(anchor);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Interactive Cybersecurity Portfolio Terminal"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-[96vw] sm:w-[580px] h-[420px] sm:h-[480px] bg-[#0B0D0F] border border-[#23272B] rounded-xl shadow-2xl flex flex-col overflow-hidden font-mono text-xs animate-fadeIn"
    >
      {/* Title Bar */}
      <div className="px-4 py-2.5 bg-[#141719] border-b border-[#23272B] flex items-center justify-between shrink-0 select-none">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/70 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#A3E635]/70 inline-block" />
          </div>
          <span className="ml-2 font-semibold text-[11px] text-[#F2F4F3] flex items-center gap-1.5">
            <TerminalIcon className="w-3.5 h-3.5 text-[#A3E635]" />
            putri@portfolio:~$
          </span>
        </div>
        <button
          onClick={onClose}
          className="p-1 rounded text-[#969DA3] hover:text-[#F2F4F3] hover:bg-[#23272B] transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-[#A3E635]"
          aria-label="Close terminal"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Terminal Output Stream */}
      <div ref={scrollRef} className="flex-1 p-4 overflow-y-auto space-y-4 text-[#969DA3]">
        {logs.map((log) => (
          <div key={log.id} className="space-y-2">
            {/* Command Echo */}
            {log.command && (
              <div className="flex items-center gap-1.5 text-[#F2F4F3] font-medium">
                <span className="text-[#A3E635]">putri@portfolio:~$</span>
                <span>{log.command}</span>
              </div>
            )}

            {/* Standard Text or Banner Output */}
            {log.output && (
              <div className={log.isError ? 'text-red-400 pl-2 border-l border-red-500/50' : 'text-[#969DA3]'}>
                {Array.isArray(log.output) ? (
                  log.output.map((line, idx) => (
                    <div key={idx} className="leading-relaxed">
                      {line}
                    </div>
                  ))
                ) : (
                  <div className="leading-relaxed">{log.output}</div>
                )}
              </div>
            )}

            {/* Rich HTML Component for Certificate Previews */}
            {log.type === 'cert-preview' && log.certData && (
              <div className="p-3 rounded-lg bg-[#141719] border border-[#23272B] space-y-3 mt-2">
                <div className="flex items-start justify-between gap-2 border-b border-[#23272B] pb-2">
                  <div>
                    <span className="text-[10px] font-mono text-[#A3E635] uppercase tracking-wider block">
                      VERIFIED CREDENTIAL PREVIEW
                    </span>
                    <h4 className="text-xs font-bold text-[#F2F4F3]">
                      {log.certData.title}
                    </h4>
                    {log.certData.issuer && (
                      <p className="text-[11px] text-[#969DA3]">Issuer: {log.certData.issuer}</p>
                    )}
                    {log.certData.date && (
                      <p className="text-[10px] text-[#969DA3]/70">Date: {log.certData.date}</p>
                    )}
                  </div>
                  <CheckCircle2 className="w-4 h-4 text-[#A3E635] shrink-0" />
                </div>

                {/* Actual Certificate Preview Image */}
                {log.certData.previewImage && (
                  <div className="rounded border border-[#23272B] overflow-hidden bg-[#0B0D0F] max-w-sm">
                    <img
                      src={log.certData.previewImage}
                      alt={log.certData.title}
                      className="w-full h-auto object-contain max-h-48"
                      loading="lazy"
                    />
                  </div>
                )}

                {/* Interactive Action Buttons */}
                <div className="flex flex-wrap items-center gap-2 pt-1">
                  <a
                    href={log.certData.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#A3E635] text-[#0B0D0F] font-semibold text-[11px] hover:bg-[#8fd128] transition-colors"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    <span>Open PDF Document</span>
                  </a>

                  <button
                    onClick={() => scrollToAnchor(log.certData!.sectionAnchor)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#0B0D0F] border border-[#23272B] text-[11px] text-[#F2F4F3] hover:border-[#A3E635] hover:text-[#A3E635] transition-colors"
                  >
                    <ArrowDown className="w-3.5 h-3.5 text-[#A3E635]" />
                    <span>View Card in Gallery</span>
                  </button>

                  {log.certData.verificationUrl && (
                    <a
                      href={log.certData.verificationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded bg-[#0B0D0F] border border-[#23272B] text-[11px] text-[#969DA3] hover:text-[#A3E635] hover:border-[#A3E635]"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Verify</span>
                    </a>
                  )}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Terminal Input Form */}
      <form
        onSubmit={handleCommandSubmit}
        className="p-2.5 bg-[#141719] border-t border-[#23272B] flex items-center gap-2 shrink-0"
      >
        <span className="text-[#A3E635] font-bold select-none">&gt;</span>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="type help, about, skills, cert udemy, cert idsecconf..."
          className="flex-1 bg-transparent text-[#F2F4F3] focus:outline-none placeholder:text-[#969DA3]/40 text-xs font-mono"
          aria-label="Portfolio terminal command prompt"
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck="false"
        />
        <button
          type="submit"
          className="px-2.5 py-1 rounded bg-[#0B0D0F] border border-[#23272B] text-[10px] font-mono text-[#A3E635] hover:border-[#A3E635] focus:outline-none focus-visible:ring-1 focus-visible:ring-[#A3E635]"
        >
          ENTER
        </button>
      </form>
    </div>
  );
};
