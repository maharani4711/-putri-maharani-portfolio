import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Calendar, MapPin, Globe, CheckCircle2 } from 'lucide-react';

export const Experience: React.FC = () => {
  const { experiences } = portfolioData;

  return (
    <section id="experience" className="py-20 border-b border-[#23272B]/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-2.5 rounded-full bg-[#A3E635]" />
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#F2F4F3] font-mono">
              // Professional Experience
            </h2>
          </div>
          <span className="text-xs font-mono text-[#969DA3] hidden sm:inline">
            CHRONOLOGICAL TIMELINE
          </span>
        </div>

        {/* Timeline Layout */}
        <div className="space-y-8 relative before:absolute before:inset-0 before:left-3 sm:before:left-4 before:w-0.5 before:bg-[#23272B]">
          {experiences.map((exp, idx) => (
            <div key={exp.id} className="relative pl-8 sm:pl-10 group">
              
              {/* Timeline marker */}
              <div className="absolute left-1.5 sm:left-2.5 top-2 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-[#141719] border-2 border-[#23272B] group-hover:border-[#A3E635] transition-colors flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-[#A3E635]" />
              </div>

              {/* Experience Card */}
              <div className="bg-[#141719] border border-[#23272B] rounded-lg p-6 hover:border-[#A3E635]/40 transition-all duration-200">
                
                {/* Header row: Position & Organization */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#23272B] pb-4 mb-4">
                  <div>
                    <span className="text-xs font-mono text-[#A3E635] uppercase tracking-wider block mb-1">
                      Experience 0{idx + 1}
                    </span>
                    <h3 className="text-xl font-bold text-[#F2F4F3]">
                      {exp.position}
                    </h3>
                    <p className="text-sm font-medium text-[#969DA3]">
                      {exp.organization}
                    </p>
                  </div>

                  {/* Metadata pills */}
                  <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-[#969DA3]">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#0B0D0F] border border-[#23272B]">
                      <Calendar className="w-3.5 h-3.5 text-[#A3E635]" />
                      {exp.period}
                    </span>
                    {exp.workArrangement && (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#0B0D0F] border border-[#23272B]">
                        <Globe className="w-3.5 h-3.5 text-[#A3E635]" />
                        {exp.workArrangement}
                      </span>
                    )}
                    {exp.location && (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#0B0D0F] border border-[#23272B]">
                        <MapPin className="w-3.5 h-3.5 text-[#A3E635]" />
                        {exp.location}
                      </span>
                    )}
                  </div>
                </div>

                {/* Responsibilities list */}
                <div className="space-y-2.5">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#969DA3] block mb-2">
                    Key Responsibilities:
                  </span>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((resp, rIdx) => (
                      <li key={rIdx} className="flex items-start gap-2.5 text-sm text-[#969DA3] leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-[#A3E635]/80 shrink-0 mt-0.5" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
