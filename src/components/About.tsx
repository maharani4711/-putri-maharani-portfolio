import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { UserCheck, Shield, GraduationCap, Briefcase, Target, Cpu } from 'lucide-react';

export const About: React.FC = () => {
  const { about } = portfolioData;

  const getProfileIcon = (label: string) => {
    switch (label.toLowerCase()) {
      case 'education':
        return <GraduationCap className="w-4 h-4 text-[#A3E635]" />;
      case 'professional experience':
        return <Briefcase className="w-4 h-4 text-[#A3E635]" />;
      case 'internship':
        return <Briefcase className="w-4 h-4 text-[#A3E635]" />;
      case 'cybersecurity focus':
        return <Target className="w-4 h-4 text-[#A3E635]" />;
      case 'learning approach':
        return <Cpu className="w-4 h-4 text-[#A3E635]" />;
      default:
        return <UserCheck className="w-4 h-4 text-[#A3E635]" />;
    }
  };

  return (
    <section id="about" className="py-20 border-b border-[#23272B]/60 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-10">
          <div className="w-2.5 h-2.5 rounded-full bg-[#A3E635]" />
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#F2F4F3] font-mono">
            // {about.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Biography Paragraphs */}
          <div className="lg:col-span-7 space-y-5 text-[#969DA3] text-base leading-relaxed">
            {about.biography.map((paragraph, index) => (
              <p key={index} className="border-l-2 border-[#23272B] pl-4 hover:border-[#A3E635]/60 transition-colors">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Compact Professional Profile */}
          <div className="lg:col-span-5">
            <div className="bg-[#141719] border border-[#23272B] rounded-lg p-6 space-y-4">
              <div className="flex items-center justify-between border-b border-[#23272B] pb-3">
                <span className="font-mono text-xs font-semibold text-[#F2F4F3] uppercase tracking-wider flex items-center gap-2">
                  <Shield className="w-4 h-4 text-[#A3E635]" />
                  Verified Profile Summary
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#0B0D0F] text-[#A3E635] border border-[#23272B]">
                  ACADEMIC &amp; INDUSTRY
                </span>
              </div>

              <div className="space-y-3 pt-1">
                {about.profile.map((item) => (
                  <div
                    key={item.label}
                    className="p-3 rounded bg-[#0B0D0F]/60 border border-[#23272B]/70 flex flex-col sm:flex-row sm:items-center justify-between gap-1"
                  >
                    <span className="text-xs font-mono text-[#969DA3] flex items-center gap-2">
                      {getProfileIcon(item.label)}
                      {item.label}
                    </span>
                    <span className="text-xs font-medium text-[#F2F4F3] font-sans sm:text-right">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
