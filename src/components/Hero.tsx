import React, { useState } from 'react';
import { ArrowDown, Download, ShieldCheck, Check } from 'lucide-react';
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Copy */}
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

          {/* Professional Portrait Showcase */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-none">
              
              {/* Refined Cybersecurity Frame */}
              <div className="relative rounded-2xl bg-[#141719] border border-[#23272B] p-3 sm:p-3.5 shadow-2xl shadow-black/80 overflow-hidden group">
                
                {/* Top Verification Status Bar */}
                <div className="px-2 pb-2.5 mb-2.5 border-b border-[#23272B] flex items-center justify-between text-xs font-mono">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#A3E635] animate-pulse" />
                    <span className="text-[11px] text-[#969DA3] tracking-wider uppercase">IDENTITY_VERIFIED</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] text-[#969DA3]">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#A3E635]" />
                    <span className="font-sans text-[11px] text-[#F2F4F3]">Putri Maharani.S</span>
                  </div>
                </div>

                {/* Portrait Image Container */}
                <div className="relative rounded-xl overflow-hidden bg-[#0E1113] border border-[#23272B]/80 aspect-[3/4] max-h-[460px] flex items-center justify-center">
                  <img
                    src="/portrait.png"
                    alt="Putri Maharani.S - Professional Portrait"
                    className="h-full w-auto max-w-full max-h-full object-contain object-center mx-auto my-auto block transition-transform duration-500 group-hover:scale-[1.02]"
                    loading="eager"
                  />

                  {/* Subtle gradient vignette at the bottom */}
                  <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#0E1113]/95 via-[#0E1113]/50 to-transparent pointer-events-none" />

                  {/* Floating status badge */}
                  <div className="absolute bottom-3 left-3 right-3 p-2.5 rounded-lg bg-[#141719]/90 backdrop-blur-md border border-[#23272B] flex items-center justify-between font-mono text-[11px]">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#A3E635]" />
                      <span className="text-[#F2F4F3] font-medium">SecOps &amp; QA Focus</span>
                    </div>
                    <span className="text-[#A3E635] text-[10px] tracking-wider font-semibold">AVAILABLE</span>
                  </div>
                </div>

                {/* Bottom Metadata Summary */}
                <div className="mt-3 pt-2.5 border-t border-[#23272B]/70 flex items-center justify-between text-[11px] font-mono text-[#969DA3] px-1">
                  <span className="text-[10px] tracking-tight text-[#969DA3]">Makassar, ID · Open to Relocate / Remote</span>
                  <span className="text-[#A3E635] text-[10px] font-semibold tracking-wider">ENTRY_LEVEL</span>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
