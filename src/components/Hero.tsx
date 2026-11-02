import React, { useState } from 'react';
import { ArrowDown, Download, Check } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Hero: React.FC = () => {
  const { hero } = portfolioData;
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const handleResumeDownload = () => {
    // Triggers download of the actual resume.pdf located in the public directory
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Putri_Maharani_S_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 3000);
  };

  const scrollToProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.querySelector('#projects');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center pt-24 pb-16 overflow-hidden border-b border-[#23272B]/60"
    >
      {/* Subtle grid pattern background */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#F2F4F3 1px, transparent 1px), linear-gradient(90deg, #F2F4F3 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Portrait Showcase (Clean, No Card/Frame/Box) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-start items-center">
            <div className="relative w-full max-w-[300px] sm:max-w-[340px] lg:max-w-[380px] flex items-center justify-center">
              <img
                src="/portrait.png"
                alt="Putri Maharani.S - Professional Portrait"
                className="w-full h-auto max-h-[480px] object-contain rounded-2xl transition-transform duration-500 hover:scale-[1.01]"
                loading="eager"
              />
            </div>
          </div>

          {/* Right Column: Introduction Copy */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Minimalist Cybersecurity Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#141719] border border-[#23272B] text-xs font-mono tracking-wider text-[#A3E635]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#A3E635] animate-pulse" />
              <span>{hero.badge}</span>
            </div>

            {/* Main Name Heading */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#F2F4F3]">
                {hero.name}
              </h1>
              <p className="text-lg sm:text-xl font-mono text-[#A3E635] font-medium tracking-tight">
                {hero.headline}
              </p>
            </div>

            {/* Supporting Bio Description */}
            <p className="text-base sm:text-lg text-[#969DA3] leading-relaxed max-w-xl">
              {hero.supportingText}
            </p>

            {/* Action CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                onClick={scrollToProjects}
                className="inline-flex items-center gap-2 px-5 py-3 rounded bg-[#A3E635] text-[#0B0D0F] font-mono text-sm font-semibold hover:bg-[#8fd128] transition-all duration-200 shadow-md shadow-[#A3E635]/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#A3E635] focus-visible:ring-offset-[#0B0D0F]"
              >
                <span>{hero.primaryCta.label}</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <button
                onClick={handleResumeDownload}
                className="inline-flex items-center gap-2 px-5 py-3 rounded bg-[#141719] text-[#F2F4F3] border border-[#23272B] font-mono text-sm font-medium hover:border-[#A3E635]/50 hover:text-[#A3E635] transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A3E635]"
                aria-label="Download Putri Maharani's resume as PDF"
              >
                {downloadSuccess ? (
                  <>
                    <Check className="w-4 h-4 text-[#A3E635]" />
                    <span className="text-[#A3E635]">Downloaded!</span>
                  </>
                ) : (
                  <>
                    <Download className="w-4 h-4" />
                    <span>{hero.secondaryCta.label}</span>
                  </>
                )}
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
