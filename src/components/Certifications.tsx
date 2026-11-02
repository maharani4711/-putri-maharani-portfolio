import React, { useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Award, FileText, ShieldCheck, Eye, Download, X, ExternalLink } from 'lucide-react';
import { CertificationItem } from '../types/portfolio';

export const Certifications: React.FC = () => {
  const { certifications } = portfolioData;
  const [activeModalCert, setActiveModalCert] = useState<CertificationItem | null>(null);

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveModalCert(null);
    };
    if (activeModalCert) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeModalCert]);

  const getClassificationBadge = (type: string) => {
    switch (type) {
      case 'Professional Certification':
        return (
          <span className="text-[10px] font-mono font-medium text-[#A3E635] bg-[#A3E635]/10 border border-[#A3E635]/30 px-2 py-0.5 rounded">
            Professional Certification
          </span>
        );
      case 'Course Completion':
        return (
          <span className="text-[10px] font-mono text-[#969DA3] bg-[#0B0D0F] border border-[#23272B] px-2 py-0.5 rounded">
            Course Completion
          </span>
        );
      case 'Technical Training':
      default:
        return (
          <span className="text-[10px] font-mono text-[#969DA3] bg-[#0B0D0F] border border-[#23272B] px-2 py-0.5 rounded">
            Technical Training
          </span>
        );
    }
  };

  return (
    <section id="certifications" className="py-20 border-b border-[#23272B]/60 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-2.5 rounded-full bg-[#A3E635]" />
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#F2F4F3] font-mono">
              // Certifications &amp; Training
            </h2>
          </div>
          <span className="text-xs font-mono text-[#969DA3] hidden sm:inline">
            VERIFIED CREDENTIAL ARCHIVE
          </span>
        </div>

        {/* Credentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              id={cert.id}
              className="bg-[#141719] border border-[#23272B] rounded-xl p-5 flex flex-col justify-between hover:border-[#A3E635]/50 transition-all duration-200 group scroll-mt-28"
            >
              <div className="space-y-4">
                
                {/* Preview Image Thumbnail (if available) */}
                {cert.previewImage && (
                  <div
                    onClick={() => setActiveModalCert(cert)}
                    className="relative overflow-hidden rounded-lg border border-[#23272B] bg-[#0B0D0F] cursor-pointer aspect-[16/10] flex items-center justify-center group-hover:border-[#A3E635]/60 transition-all"
                  >
                    <img
                      src={cert.previewImage}
                      alt={`Certificate preview for ${cert.name}`}
                      className="w-full h-full object-cover object-top opacity-90 group-hover:opacity-100 group-hover:scale-[1.02] transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                      <span className="px-3 py-1.5 rounded-md bg-[#0B0D0F]/90 border border-[#A3E635] text-[#A3E635] text-xs font-mono flex items-center gap-1.5 shadow-lg">
                        <Eye className="w-3.5 h-3.5" />
                        <span>Inspect Preview</span>
                      </span>
                    </div>
                  </div>
                )}

                {/* Header row: Icon & Classification badge */}
                <div className="flex items-center justify-between gap-2">
                  <div className="p-1.5 rounded bg-[#0B0D0F] border border-[#23272B] text-[#A3E635]">
                    <Award className="w-4 h-4" />
                  </div>
                  {getClassificationBadge(cert.type)}
                </div>

                {/* Credential Name */}
                <div>
                  <h3 className="text-base font-bold text-[#F2F4F3] group-hover:text-[#A3E635] transition-colors leading-snug">
                    {cert.name}
                  </h3>
                  
                  {/* Issuing Organization */}
                  {cert.issuer && (
                    <p className="text-xs font-mono text-[#969DA3] mt-1.5">
                      Issuer: <span className="text-[#F2F4F3] font-medium">{cert.issuer}</span>
                    </p>
                  )}

                  {/* Date & ID metadata */}
                  {(cert.date || cert.certificateId) && (
                    <div className="flex flex-wrap gap-x-3 gap-y-1 mt-2 text-[11px] font-mono text-[#969DA3]">
                      {cert.date && <span>Date: {cert.date}</span>}
                      {cert.certificateId && <span>ID: {cert.certificateId}</span>}
                    </div>
                  )}
                </div>

                {/* Short verified description */}
                {cert.description && (
                  <p className="text-xs text-[#969DA3] leading-relaxed pt-1">
                    {cert.description}
                  </p>
                )}
              </div>

              {/* Action Buttons: View Certificate & Open PDF */}
              <div className="pt-4 mt-5 border-t border-[#23272B] flex items-center justify-between gap-2">
                {cert.previewImage ? (
                  <button
                    onClick={() => setActiveModalCert(cert)}
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-[#F2F4F3] hover:text-[#A3E635] transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-[#A3E635] rounded px-1.5 py-1"
                    aria-label={`View certificate image for ${cert.name}`}
                  >
                    <Eye className="w-3.5 h-3.5 text-[#A3E635]" />
                    <span>View Certificate</span>
                  </button>
                ) : (
                  <span className="text-xs font-mono text-[#969DA3] flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#A3E635]" />
                    <span>Verified</span>
                  </span>
                )}

                {cert.fileUrl && (
                  <a
                    href={cert.fileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#0B0D0F] border border-[#23272B] text-xs font-mono text-[#969DA3] hover:text-[#A3E635] hover:border-[#A3E635]/50 transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-[#A3E635]"
                    aria-label={`Open original PDF for ${cert.name}`}
                  >
                    <FileText className="w-3.5 h-3.5" />
                    <span>Open PDF</span>
                  </a>
                )}
              </div>

            </div>
          ))}
        </div>

        {/* Footer Note */}
        <p className="text-xs font-mono text-[#969DA3] text-center mt-10">
          All preview images and documentation are rendered directly from authentic credential documents on file.
        </p>

      </div>

      {/* Lightbox / Certificate Image Modal */}
      {activeModalCert && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="cert-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-sm animate-fadeIn"
          onClick={() => setActiveModalCert(null)}
        >
          <div
            className="bg-[#141719] border border-[#23272B] rounded-xl max-w-4xl w-full overflow-hidden shadow-2xl relative flex flex-col max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="px-6 py-4 bg-[#0E1113] border-b border-[#23272B] flex items-center justify-between z-10 shrink-0">
              <div className="space-y-0.5">
                <span className="text-[11px] font-mono text-[#A3E635] uppercase tracking-wider block">
                  {activeModalCert.type} // Verified Credential
                </span>
                <h3 id="cert-modal-title" className="text-base sm:text-lg font-bold text-[#F2F4F3]">
                  {activeModalCert.name}
                </h3>
              </div>
              
              <button
                onClick={() => setActiveModalCert(null)}
                className="p-1.5 rounded bg-[#141719] border border-[#23272B] text-[#969DA3] hover:text-[#F2F4F3] hover:border-[#A3E635] transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-[#A3E635]"
                aria-label="Close certificate inspector"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Image Body */}
            <div className="p-4 sm:p-6 overflow-y-auto flex-1 flex items-center justify-center bg-[#0B0D0F]">
              {activeModalCert.previewImage ? (
                <img
                  src={activeModalCert.previewImage}
                  alt={`Full verified certificate for ${activeModalCert.name}`}
                  className="max-h-[70vh] w-auto max-w-full object-contain rounded border border-[#23272B] shadow-lg"
                />
              ) : (
                <div className="py-12 text-center text-sm font-mono text-[#969DA3]">
                  Original document available via PDF viewer.
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-3 bg-[#0E1113] border-t border-[#23272B] flex flex-wrap items-center justify-between gap-3 shrink-0">
              <div className="text-xs font-mono text-[#969DA3]">
                {activeModalCert.issuer && <span>Issuer: {activeModalCert.issuer}</span>}
              </div>

              <div className="flex items-center gap-3">
                {activeModalCert.verificationUrl && (
                  <a
                    href={activeModalCert.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#141719] border border-[#23272B] text-xs font-mono text-[#A3E635] hover:border-[#A3E635] transition-colors"
                  >
                    <span>Verify on Web</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}

                {activeModalCert.fileUrl && (
                  <a
                    href={activeModalCert.fileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded bg-[#A3E635] text-[#0B0D0F] text-xs font-mono font-semibold hover:bg-[#8fd128] transition-colors"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Open Original PDF</span>
                  </a>
                )}
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
