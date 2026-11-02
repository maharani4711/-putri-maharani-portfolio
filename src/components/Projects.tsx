import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { ProjectItem } from '../types/portfolio';
import { ProjectModal } from './ProjectModal';
import { Terminal, Shield, ArrowUpRight } from 'lucide-react';

export const Projects: React.FC = () => {
  const { projects } = portfolioData;
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  return (
    <section id="projects" className="py-20 border-b border-[#23272B]/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-2.5 rounded-full bg-[#A3E635]" />
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#F2F4F3] font-mono">
              // Featured Projects
            </h2>
          </div>
          <span className="text-xs font-mono text-[#969DA3] hidden sm:inline">
            LABS &amp; QA CASE STUDIES
          </span>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((proj, idx) => (
            <div
              key={proj.id}
              className="bg-[#141719] border border-[#23272B] rounded-xl p-6 flex flex-col justify-between hover:border-[#A3E635]/50 transition-all duration-300 group shadow-lg shadow-black/20"
            >
              <div className="space-y-4">
                
                {/* Category & Status pill */}
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#0B0D0F] border border-[#23272B] text-xs font-mono text-[#A3E635]">
                    {proj.category === 'Offensive Security' ? (
                      <Terminal className="w-3.5 h-3.5" />
                    ) : (
                      <Shield className="w-3.5 h-3.5" />
                    )}
                    {proj.category}
                  </span>
                  <span className="text-[11px] font-mono text-[#969DA3]">
                    PROJECT 0{idx + 1}
                  </span>
                </div>

                {/* Project Title */}
                <h3 className="text-xl font-bold text-[#F2F4F3] group-hover:text-[#A3E635] transition-colors">
                  {proj.title}
                </h3>

                {/* Project Description */}
                <p className="text-sm text-[#969DA3] leading-relaxed">
                  {proj.description}
                </p>

                {/* Focus Areas */}
                <div className="space-y-1.5 pt-2">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#969DA3] block">
                    Focus Areas:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {proj.focusAreas.map((area) => (
                      <span
                        key={area}
                        className="px-2 py-0.5 rounded bg-[#0B0D0F] border border-[#23272B] text-xs font-mono text-[#F2F4F3]"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Tools */}
                <div className="space-y-1.5 pt-2">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#969DA3] block">
                    Tools &amp; Stack:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {proj.tools.map((tool) => (
                      <span
                        key={tool}
                        className="px-2 py-0.5 rounded bg-[#0B0D0F] border border-[#23272B]/60 text-xs font-mono text-[#969DA3]"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

              {/* Card Footer: Status & Details Action */}
              <div className="pt-6 mt-6 border-t border-[#23272B] flex items-center justify-between">
                <span className="text-xs font-mono text-[#969DA3] flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#A3E635]" />
                  {proj.status}
                </span>

                <button
                  onClick={() => setSelectedProject(proj)}
                  className="inline-flex items-center gap-1 text-xs font-mono text-[#F2F4F3] group-hover:text-[#A3E635] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A3E635] rounded px-1"
                  aria-label={`View detailed documentation for ${proj.title}`}
                >
                  <span>View Details</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
