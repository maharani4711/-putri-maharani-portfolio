import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { 
  Bug, 
  Network, 
  ShieldAlert, 
  Database, 
  FolderKanban, 
  Languages as LanguagesIcon 
} from 'lucide-react';

export const Skills: React.FC = () => {
  const { skillCategories } = portfolioData;

  const getCategoryIcon = (title: string) => {
    switch (title.toLowerCase()) {
      case 'cybersecurity tools':
        return <ShieldAlert className="w-4 h-4 text-[#A3E635]" />;
      case 'networking fundamentals':
        return <Network className="w-4 h-4 text-[#A3E635]" />;
      case 'quality assurance and testing':
        return <Bug className="w-4 h-4 text-[#A3E635]" />;
      case 'database fundamentals':
        return <Database className="w-4 h-4 text-[#A3E635]" />;
      case 'development and productivity tools':
        return <FolderKanban className="w-4 h-4 text-[#A3E635]" />;
      case 'languages':
        return <LanguagesIcon className="w-4 h-4 text-[#A3E635]" />;
      default:
        return <ShieldAlert className="w-4 h-4 text-[#A3E635]" />;
    }
  };

  return (
    <section id="skills" className="py-20 border-b border-[#23272B]/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-2.5 rounded-full bg-[#A3E635]" />
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#F2F4F3] font-mono">
              // Technical Skills
            </h2>
          </div>
          <span className="text-xs font-mono text-[#969DA3] hidden sm:inline">
            STRUCTURED COMPETENCIES
          </span>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="bg-[#141719] border border-[#23272B] rounded-lg p-5 flex flex-col justify-between hover:border-[#A3E635]/40 transition-colors group"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-2.5 border-b border-[#23272B] pb-3 mb-4">
                  <div className="p-1.5 rounded bg-[#0B0D0F] border border-[#23272B] group-hover:border-[#A3E635]/60 transition-colors">
                    {getCategoryIcon(category.title)}
                  </div>
                  <h3 className="text-xs font-mono font-bold tracking-wider text-[#F2F4F3]">
                    {category.title}
                  </h3>
                </div>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded bg-[#0B0D0F] border border-[#23272B] text-xs font-mono text-[#969DA3] hover:text-[#A3E635] hover:border-[#A3E635]/40 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {category.note && (
                <p className="mt-4 pt-3 border-t border-[#23272B]/60 text-[11px] font-mono text-[#969DA3]">
                  {category.note}
                </p>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
