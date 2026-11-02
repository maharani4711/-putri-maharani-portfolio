import React, { useEffect } from 'react';
import { ProjectItem } from '../types/portfolio';
import { X, ShieldAlert, CheckCircle2, Terminal, Info, ShieldCheck, FileCheck } from 'lucide-react';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const { details } = project;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="bg-[#141719] border border-[#23272B] rounded-xl w-full max-w-3xl max-h-[90vh] overflow-y-auto shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="sticky top-0 bg-[#0E1113]/95 backdrop-blur-md px-6 py-4 border-b border-[#23272B] flex items-center justify-between z-10">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#A3E635]" />
            <span className="text-xs font-mono uppercase tracking-wider text-[#969DA3]">
              {project.category} // {project.status}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded bg-[#141719] border border-[#23272B] text-[#969DA3] hover:text-[#F2F4F3] hover:border-[#A3E635] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A3E635]"
            aria-label="Close project details"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 space-y-8">
          
          {/* Title & Status */}
          <div>
            <h3 id="modal-title" className="text-2xl sm:text-3xl font-bold text-[#F2F4F3] mb-2">
              {project.title}
            </h3>
            <p className="text-[#969DA3] text-sm leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Tools & Focus Areas */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-lg bg-[#0B0D0F] border border-[#23272B]">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-[#969DA3] block mb-2">
                Tools &amp; Environment:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {project.tools.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 rounded bg-[#141719] border border-[#23272B] text-xs font-mono text-[#A3E635]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-[#969DA3] block mb-2">
                Core Focus Areas:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {project.focusAreas.map((f) => (
                  <span
                    key={f}
                    className="px-2 py-0.5 rounded bg-[#141719] border border-[#23272B] text-xs font-mono text-[#F2F4F3]"
                  >
                    {f}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Section: Overview */}
          <div className="space-y-3">
            <h4 className="text-sm font-mono uppercase tracking-wider text-[#A3E635] flex items-center gap-2">
              <Terminal className="w-4 h-4" />
              Overview &amp; Scope
            </h4>
            <p className="text-sm text-[#969DA3] leading-relaxed pl-3 border-l-2 border-[#23272B]">
              {details.overview}
            </p>
          </div>

          {/* Section: Objectives */}
          <div className="space-y-3">
            <h4 className="text-sm font-mono uppercase tracking-wider text-[#A3E635] flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" />
              Lab Objectives
            </h4>
            <ul className="space-y-2">
              {details.objectives.map((obj, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-[#969DA3]">
                  <span className="text-[#A3E635] font-mono mt-0.5">&gt;</span>
                  <span>{obj}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Section: Scope & Authorization (if present) */}
          {details.scopeAndAuthorization && (
            <div className="space-y-3">
              <h4 className="text-sm font-mono uppercase tracking-wider text-[#A3E635] flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" />
                Scope &amp; Authorization
              </h4>
              <ul className="space-y-2">
                {details.scopeAndAuthorization.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-[#969DA3]">
                    <span className="text-[#A3E635] font-mono mt-0.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Section: Methodology */}
          {details.labMethodology && (
            <div className="space-y-3">
              <h4 className="text-sm font-mono uppercase tracking-wider text-[#A3E635] flex items-center gap-2">
                <ShieldAlert className="w-4 h-4" />
                Methodology &amp; Workflow
              </h4>
              <ul className="space-y-2">
                {details.labMethodology.map((m, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-[#969DA3]">
                    <span className="text-[#A3E635] font-mono mt-0.5">[{i + 1}]</span>
                    <span>{m}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Section: Tools Used */}
          <div className="space-y-3">
            <h4 className="text-sm font-mono uppercase tracking-wider text-[#A3E635] flex items-center gap-2">
              <FileCheck className="w-4 h-4" />
              Tools Used
            </h4>
            <ul className="space-y-2">
              {details.toolsUsed.map((tool, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-[#969DA3]">
                  <span className="text-[#A3E635] font-mono mt-0.5">&gt;</span>
                  <span>{tool}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Section: Technical Observations */}
          {details.technicalObservations && (
            <div className="space-y-3">
              <h4 className="text-sm font-mono uppercase tracking-wider text-[#A3E635] flex items-center gap-2">
                <Info className="w-4 h-4" />
                Technical Observations
              </h4>
              <ul className="space-y-2">
                {details.technicalObservations.map((obs, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-[#969DA3]">
                    <span className="text-[#A3E635] font-mono mt-0.5">•</span>
                    <span>{obs}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Section: Lessons Learned */}
          <div className="space-y-3">
            <h4 className="text-sm font-mono uppercase tracking-wider text-[#A3E635] flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" />
              Lessons Learned
            </h4>
            <ul className="space-y-2">
              {details.lessonsLearned.map((l, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-[#969DA3]">
                  <span className="text-[#A3E635] font-mono mt-0.5">&gt;</span>
                  <span>{l}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Documentation & Evidence Notice */}
          {details.evidenceNote && (
            <div className="p-4 rounded bg-[#0B0D0F] border border-[#23272B] flex items-start gap-3">
              <Info className="w-4 h-4 text-[#A3E635] shrink-0 mt-0.5" />
              <div className="space-y-1">
                <span className="text-xs font-mono uppercase text-[#F2F4F3] font-semibold block">
                  Evidence &amp; Documentation Note
                </span>
                <p className="text-xs font-mono text-[#969DA3] leading-relaxed">
                  {details.evidenceNote}
                </p>
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-[#0E1113] border-t border-[#23272B] flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded bg-[#141719] border border-[#23272B] text-xs font-mono text-[#F2F4F3] hover:border-[#A3E635] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A3E635]"
          >
            Close Inspector
          </button>
        </div>
      </div>
    </div>
  );
};
