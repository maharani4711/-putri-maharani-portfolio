import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { GraduationCap, MapPin, Building2, School } from 'lucide-react';

export const Education: React.FC = () => {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-20 border-b border-[#23272B]/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-2.5 rounded-full bg-[#A3E635]" />
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#F2F4F3] font-mono">
              // Education
            </h2>
          </div>
          <span className="text-xs font-mono text-[#969DA3] hidden sm:inline">
            ACADEMIC FOUNDATION
          </span>
        </div>

        {/* Education Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {education.map((item) => (
            <div
              key={item.id}
              className="bg-[#141719] border border-[#23272B] rounded-lg p-6 hover:border-[#A3E635]/40 transition-colors group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2 rounded bg-[#0B0D0F] border border-[#23272B] group-hover:border-[#A3E635]/40 transition-colors">
                    {item.isPrimary ? (
                      <GraduationCap className="w-5 h-5 text-[#A3E635]" />
                    ) : (
                      <School className="w-5 h-5 text-[#A3E635]" />
                    )}
                  </div>
                  <span className="text-xs font-mono px-2 py-0.5 rounded bg-[#0B0D0F] border border-[#23272B] text-[#969DA3]">
                    {item.isPrimary ? 'HIGHER EDUCATION' : 'SECONDARY EDUCATION'}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[#F2F4F3] group-hover:text-[#A3E635] transition-colors mb-1">
                  {item.degree}
                </h3>

                <p className="text-sm font-medium text-[#969DA3] flex items-center gap-2 mb-2">
                  <Building2 className="w-4 h-4 text-[#A3E635]" />
                  {item.institution}
                </p>
              </div>

              <div className="pt-4 border-t border-[#23272B] mt-4 flex items-center gap-2 text-xs font-mono text-[#969DA3]">
                <MapPin className="w-3.5 h-3.5 text-[#A3E635]" />
                <span>{item.location}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
