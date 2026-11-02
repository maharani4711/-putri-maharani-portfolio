import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-[#0E1113] border-t border-[#23272B] font-mono text-xs text-[#969DA3]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Brand & Tagline */}
        <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
          <div className="w-8 h-8 rounded bg-[#141719] border border-[#23272B] flex items-center justify-center font-mono font-bold text-[#A3E635] text-xs">
            &gt;_
          </div>
          <div>
            <div className="font-bold text-[#F2F4F3] text-sm">
              {portfolioData.personal.fullName}
            </div>
            <div className="text-[#A3E635] text-xs">
              &quot;{portfolioData.footer.quote}&quot;
            </div>
          </div>
        </div>

        {/* Dynamic Year & Copyright */}
        <div className="flex items-center gap-4 text-center">
          <span>&copy; {currentYear} Putri Maharani.S. All rights reserved.</span>
          <span className="hidden md:inline text-[#23272B]">•</span>
          <span className="hidden md:inline text-[11px] text-[#969DA3]/70">
            PORTFOLIO.V1
          </span>
        </div>

        {/* Back to top */}
        <button
          onClick={scrollToTop}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#141719] border border-[#23272B] hover:border-[#A3E635] hover:text-[#F2F4F3] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A3E635]"
          aria-label="Back to top"
        >
          <span>Top</span>
          <ArrowUp className="w-3.5 h-3.5 text-[#A3E635]" />
        </button>

      </div>
    </footer>
  );
};
