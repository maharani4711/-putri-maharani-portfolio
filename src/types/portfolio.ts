export interface NavItem {
  label: string;
  href: string;
}

export interface TerminalInfo {
  command: string;
  output: {
    label: string;
    value: string;
  }[];
}

export interface HeroData {
  badge: string;
  name: string;
  headline: string;
  supportingText: string;
  primaryCta: {
    label: string;
    href: string;
  };
  secondaryCta: {
    label: string;
    href: string;
  };
  terminal: TerminalInfo;
}

export interface CompactProfileItem {
  label: string;
  value: string;
}

export interface AboutData {
  title: string;
  biography: string[];
  profile: CompactProfileItem[];
}

export interface ExperienceItem {
  id: string;
  position: string;
  organization: string;
  period: string;
  location?: string;
  workArrangement?: string;
  responsibilities: string[];
}

export interface SkillCategory {
  title: string;
  skills: string[];
  note?: string;
}

export interface ProjectDetail {
  overview: string;
  objectives: string[];
  scopeAndAuthorization?: string[];
  labMethodology?: string[];
  toolsUsed: string[];
  technicalObservations?: string[];
  lessonsLearned: string[];
  evidenceNote?: string;
  statusNote?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  description: string;
  focusAreas: string[];
  tools: string[];
  status: string;
  details: ProjectDetail;
}

export type CredentialClassification =
  | 'Professional Certification'
  | 'Course Completion'
  | 'Technical Training';

export interface CertificationItem {
  id: string;
  name: string;
  issuer?: string;
  type: CredentialClassification;
  isVerifiedFile?: boolean;
  fileUrl?: string;
  previewImage?: string;
  certificateId?: string;
  verificationUrl?: string;
  date?: string;
  description?: string;
  note?: string;
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  location: string;
  isPrimary?: boolean;
}

export interface ContactConfig {
  heading: string;
  description: string;
  email: string;
  location: string;
  linkedinUrl: string; // configurable
  phone?: {
    enabled: boolean;
    number: string;
  };
}

export interface PortfolioConfig {
  personal: {
    monogram: string;
    fullName: string;
    tagline: string;
  };
  hero: HeroData;
  about: AboutData;
  experiences: ExperienceItem[];
  skillCategories: SkillCategory[];
  projects: ProjectItem[];
  certifications: CertificationItem[];
  education: EducationItem[];
  contact: ContactConfig;
  footer: {
    quote: string;
  };
}
