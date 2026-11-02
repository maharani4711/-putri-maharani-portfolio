import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { id: 'home', label: 'Home', href: '#home' },
    { id: 'about', label: 'About', href: '#about' },
    { id: 'experience', label: 'Experience', href: '#experience' },
    { id: 'skills', label: 'Skills', href: '#skills' },
    { id: 'projects', label: 'Projects', href: '#projects' },
    { id: 'certifications', label: 'Certifications', href: '#certifications' },
    { id: 'education', label: 'Education', href: '#education' },
    { id: 'contact', label: 'Contact', href: '#contact' },
  ];

  // Track scroll position for header blur and active section tracking
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Determine active section based on scroll offset
      const scrollPosition = window.scrollY + 120;
      for (const link of navLinks) {
        const section = document.querySelector(link.href) as HTMLElement | null;
        if (section) {
          const top = section.offsetTop;
          const height = section.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(link.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, id: string) => {
    e.preventDefault();
    setActiveSection(id);
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0B0D0F]/95 backdrop-blur-md border-b border-[#23272B] py-2.5 sm:py-3 shadow-lg shadow-black/60'
          : 'bg-[#0B0D0F]/70 backdrop-blur-sm py-4'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-4">
        
        {/* Full Professional Name */}
        <a
          href="#home"
          onClick={(e) => handleLinkClick(e, '#home', 'home')}
          className="group flex items-center text-decoration-none focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A3E635] rounded-md px-1 py-0.5 shrink-0"
          aria-label="Putri Maharani.S Home"
        >
          <span className="font-mono font-bold text-sm sm:text-base text-[#F2F4F3] group-hover:text-[#A3E635] transition-colors tracking-tight whitespace-nowrap">
            Putri Maharani.S
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-5 xl:gap-6">
          <nav className="flex items-center gap-1 xl:gap-2" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href, link.id)}
                  className={`relative text-xs font-mono uppercase tracking-wider px-2 py-1 transition-colors rounded focus:outline-none focus-visible:ring-1 focus-visible:ring-[#A3E635] ${
                    isActive
                      ? 'text-[#A3E635] font-semibold'
                      : 'text-[#969DA3] hover:text-[#F2F4F3]'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {link.label}
                  {/* Subtle active-section indicator underline */}
                  {isActive && (
                    <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-[#A3E635] rounded-full animate-fadeIn" />
                  )}
                </a>
              );
            })}
          </nav>
        </div>

        {/* Mobile & Tablet Hamburger Button */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 rounded bg-[#141719] border border-[#23272B] text-[#F2F4F3] hover:border-[#A3E635] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A3E635]"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0B0D0F]/98 backdrop-blur-xl border-b border-[#23272B] px-4 pt-3 pb-6 animate-fadeIn shadow-2xl">
          <nav className="flex flex-col gap-2" aria-label="Mobile Navigation">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href, link.id)}
                  className={`flex items-center justify-between text-xs font-mono uppercase tracking-wider py-2.5 px-3 rounded border transition-colors ${
                    isActive
                      ? 'bg-[#A3E635]/10 border-[#A3E635]/40 text-[#A3E635] font-semibold'
                      : 'border-transparent text-[#969DA3] hover:text-[#F2F4F3] hover:bg-[#141719]'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#A3E635]" />}
                </a>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
};
