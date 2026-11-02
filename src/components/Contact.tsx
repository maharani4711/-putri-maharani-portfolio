import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Mail, MapPin, Linkedin, Copy, Check, Send, ExternalLink, Phone } from 'lucide-react';

export const Contact: React.FC = () => {
  const { contact } = portfolioData;
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-20 border-b border-[#23272B]/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-2.5 rounded-full bg-[#A3E635]" />
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#F2F4F3] font-mono">
              // {contact.heading}
            </h2>
          </div>
          <span className="text-xs font-mono text-[#969DA3] hidden sm:inline">
            COMMUNICATION DISPATCH
          </span>
        </div>

        {/* Supporting Description */}
        <p className="text-base sm:text-lg text-[#969DA3] leading-relaxed max-w-2xl mb-10">
          {contact.description}
        </p>

        {/* Balanced 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Official Email */}
          <div className="bg-[#141719] border border-[#23272B] rounded-xl p-6 flex flex-col justify-between hover:border-[#A3E635]/40 transition-colors group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="p-2.5 rounded bg-[#0B0D0F] border border-[#23272B] text-[#A3E635] group-hover:border-[#A3E635]/50 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-[#0B0D0F] border border-[#23272B] text-[#A3E635]">
                  PRIMARY CHANNEL
                </span>
              </div>

              <div>
                <span className="text-xs font-mono text-[#969DA3] block mb-1">Official Email</span>
                <a
                  href={`mailto:${contact.email}`}
                  className="text-sm font-mono font-medium text-[#F2F4F3] hover:text-[#A3E635] transition-colors break-all focus:outline-none focus-visible:underline"
                >
                  {contact.email}
                </a>
              </div>

              <p className="text-xs text-[#969DA3] leading-relaxed">
                Direct channel for entry-level opportunities, technical security discussions, and inquiries.
              </p>
            </div>

            <div className="pt-5 mt-5 border-t border-[#23272B] flex items-center gap-2">
              <button
                onClick={copyEmail}
                className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded bg-[#0B0D0F] border border-[#23272B] text-xs font-mono text-[#969DA3] hover:text-[#F2F4F3] hover:border-[#A3E635]/50 transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-[#A3E635]"
                aria-label="Copy email address"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-[#A3E635]" />
                    <span className="text-[#A3E635]">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>

              <a
                href={`mailto:${contact.email}`}
                className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded bg-[#A3E635] text-[#0B0D0F] text-xs font-mono font-semibold hover:bg-[#8fd128] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A3E635]"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Send Mail</span>
              </a>
            </div>
          </div>

          {/* Card 2: Current Location */}
          <div className="bg-[#141719] border border-[#23272B] rounded-xl p-6 flex flex-col justify-between hover:border-[#A3E635]/40 transition-colors group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="p-2.5 rounded bg-[#0B0D0F] border border-[#23272B] text-[#A3E635] group-hover:border-[#A3E635]/50 transition-colors">
                  <MapPin className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-[#0B0D0F] border border-[#23272B] text-[#969DA3]">
                  BASE LOCATION
                </span>
              </div>

              <div>
                <span className="text-xs font-mono text-[#969DA3] block mb-1">Location &amp; Mobility</span>
                <span className="text-sm sm:text-base font-semibold text-[#F2F4F3] block">
                  {contact.location}
                </span>
              </div>

              <p className="text-xs text-[#969DA3] leading-relaxed">
                Ready to explore opportunities where I can learn, contribute, and grow professionally.
              </p>
            </div>

            <div className="pt-5 mt-5 border-t border-[#23272B]">
              <div className="flex items-center gap-2 text-xs font-mono text-[#A3E635]">
                <span className="w-2 h-2 rounded-full bg-[#A3E635] animate-pulse" />
                <span>Available for Opportunities</span>
              </div>
            </div>
          </div>

          {/* Card 3: LinkedIn Profile */}
          <div className="bg-[#141719] border border-[#23272B] rounded-xl p-6 flex flex-col justify-between hover:border-[#A3E635]/40 transition-colors group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="p-2.5 rounded bg-[#0B0D0F] border border-[#23272B] text-[#A3E635] group-hover:border-[#A3E635]/50 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-[#0B0D0F] border border-[#23272B] text-[#969DA3]">
                  PROFESSIONAL NETWORK
                </span>
              </div>

              <div>
                <span className="text-xs font-mono text-[#969DA3] block mb-1">LinkedIn Profile</span>
                <span className="text-sm sm:text-base font-semibold text-[#F2F4F3] block">
                  Putri Maharani.S
                </span>
              </div>

              <p className="text-xs text-[#969DA3] leading-relaxed">
                Connect for professional networking, career updates, and industry engagement.
              </p>
            </div>

            <div className="pt-5 mt-5 border-t border-[#23272B]">
              {contact.linkedinUrl ? (
                <a
                  href={contact.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded bg-[#0B0D0F] border border-[#23272B] text-xs font-mono text-[#A3E635] hover:border-[#A3E635] transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-[#A3E635]"
                >
                  <span>Connect on LinkedIn</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              ) : (
                <div className="w-full text-center py-2 px-3 rounded bg-[#0B0D0F] border border-[#23272B] text-xs font-mono text-[#969DA3]/80">
                  Profile URL Configurable
                </div>
              )}
            </div>
          </div>

        </div>

        {/* Optional Phone if enabled */}
        {contact.phone?.enabled && (
          <div className="mt-6 p-4 rounded-lg bg-[#141719] border border-[#23272B] flex items-center gap-3">
            <Phone className="w-4 h-4 text-[#A3E635]" />
            <span className="text-xs font-mono text-[#969DA3]">Telephone:</span>
            <span className="text-xs font-mono text-[#F2F4F3]">{contact.phone.number}</span>
          </div>
        )}

      </div>
    </section>
  );
};
