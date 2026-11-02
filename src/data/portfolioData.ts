import { PortfolioConfig } from '../types/portfolio';

export const portfolioData: PortfolioConfig = {
  personal: {
    monogram: 'PM.',
    fullName: 'Putri Maharani.S',
    tagline: 'Learning. Testing. Securing.',
  },
  hero: {
    badge: 'CYBERSECURITY • QUALITY ASSURANCE • IT',
    name: 'Putri Maharani.S',
    headline: 'Computer Science Graduate | Aspiring Penetration Tester',
    supportingText:
      'Computer Science graduate with professional experience in Quality Assurance, software testing, and platform monitoring. Developing practical cybersecurity skills through hands-on labs, technical training, and independent learning.',
    primaryCta: {
      label: 'Explore My Work',
      href: '#projects',
    },
    secondaryCta: {
      label: 'Download Resume',
      href: '/resume.pdf',
    },
    terminal: {
      command: 'whoami && cat profile.txt',
      output: [
        { label: 'whoami', value: 'Putri Maharani.S' },
        { label: 'background', value: 'Computer Science' },
        { label: 'experience', value: 'Quality Assurance & IT Internship' },
        { label: 'focus', value: 'Cybersecurity & Penetration Testing' },
      ],
    },
  },
  about: {
    title: 'About Me',
    biography: [
      "I'm a Computer Science graduate from Universitas Muslim Indonesia with professional experience in Quality Assurance and an IT internship at PT PLN (Persero).",
      'My experience includes testing application workflows, identifying and reporting software bugs, verifying audio and video performance, and assisting with platform monitoring.',
      "Alongside my professional experience, I'm developing my cybersecurity knowledge through hands-on lab practice, technical training, and independent learning.",
      'My current interests include penetration testing, network reconnaissance, vulnerability identification, and understanding how software and systems can be made more secure.',
    ],
    profile: [
      { label: 'Education', value: 'Bachelor of Computer Science' },
      { label: 'Professional Experience', value: 'Quality Assurance' },
      { label: 'Internship', value: 'PT PLN (Persero)' },
      { label: 'Cybersecurity Focus', value: 'Penetration Testing' },
      { label: 'Learning Approach', value: 'Hands-on Practice' },
    ],
  },
  experiences: [
    {
      id: 'exp-01',
      position: 'Quality Assurance',
      organization: 'Episoden',
      period: 'January 2026 – July 2026',
      workArrangement: 'Remote',
      responsibilities: [
        'Tested platform user flows, including onboarding, session entry, and matching systems.',
        'Identified and reported bugs affecting user experience and feature functionality.',
        'Verified audio and video performance during live sessions.',
        'Assisted in monitoring system behavior to support stable platform performance.',
      ],
    },
    {
      id: 'exp-02',
      position: 'IT Intern',
      organization: 'PT PLN (Persero)',
      period: 'June 2025 – July 2026',
      location: 'Makassar, Indonesia',
      responsibilities: [
        'Assisted with IT-related activities within the Information Technology Systems (STI) division.',
        'Supported daily operations and collaborated with team members to complete assigned tasks.',
        'Demonstrated teamwork, initiative, and responsibility in a professional work environment.',
      ],
    },
  ],
  skillCategories: [
    {
      title: 'Cybersecurity Tools',
      skills: [
        'Kali Linux',
        'Nmap',
        'Gobuster',
        'Burp Suite',
        'Metasploit',
        'Responder',
      ],
    },
    {
      title: 'Networking Fundamentals',
      skills: ['Basic IP Addressing', 'Introduction to Routing Concepts'],
    },
    {
      title: 'Quality Assurance and Testing',
      skills: [
        'Manual Testing',
        'Bug Reporting',
        'Test Scenario Execution',
        'Usability Testing',
      ],
    },
    {
      title: 'Database Fundamentals',
      skills: [
        'SQL',
        'MySQL',
        'phpMyAdmin',
        'CRUD Operations',
        'Basic Database Management',
      ],
    },
    {
      title: 'Development and Productivity Tools',
      skills: [
        'Google Docs',
        'Spreadsheets',
        'Online Collaboration Platforms',
      ],
    },
    {
      title: 'Languages',
      skills: ['Bahasa Indonesia', 'English'],
    },
  ],
  projects: [
    {
      id: 'proj-01',
      title: 'Hack The Box — Cybersecurity Labs',
      category: 'Offensive Security',
      description:
        'Practiced reconnaissance, enumeration, and basic vulnerability identification in cybersecurity lab environments. Explored web security and basic exploitation techniques while gaining hands-on experience with Kali Linux and common cybersecurity tools.',
      focusAreas: [
        'Reconnaissance',
        'Enumeration',
        'Basic vulnerability identification',
        'Web security exploration',
        'Basic exploitation techniques in lab environments',
      ],
      tools: ['Kali Linux', 'Nmap', 'Gobuster', 'Burp Suite', 'Metasploit', 'Responder'],
      status: 'Hands-on Lab Practice',
      details: {
        overview:
          'Applied fundamental penetration testing and ethical hacking concepts across structured lab environments. The exercises focus on systematic reconnaissance, directory and service enumeration, and analyzing security postures using Kali Linux utility suites.',
        objectives: [
          'Develop a methodical approach to target enumeration and service discovery.',
          'Practice analyzing web application attack surfaces and request/response workflows.',
          'Understand privilege boundaries and basic exploitation concepts in controlled environments.',
          'Reinforce offensive security theory with practical tool execution.',
        ],
        scopeAndAuthorization: [
          'All testing performed strictly within authorized, isolated Hack The Box lab subnets.',
          'Adherence to strict rules of engagement and ethical security guidelines.',
          'Zero activity conducted outside assigned lab target boundaries.',
        ],
        labMethodology: [
          'Passive and active reconnaissance to map open ports and running network services.',
          'Web surface discovery using automated directory brute-forcing and manual inspection.',
          'Identifying configuration missteps and exposed application endpoints.',
          'Testing security controls within authorized, isolated sandbox labs.',
        ],
        toolsUsed: [
          'Kali Linux',
          'Nmap (Network exploration & port scanning)',
          'Gobuster (URI and DNS enumeration)',
          'Burp Suite (HTTP request interception & traffic analysis)',
          'Metasploit Framework (Lab testing & verification)',
          'Responder (LLMNR/NBT-NS research in lab setups)',
        ],
        technicalObservations: [
          'Enumeration thoroughness directly dictates testing efficacy; overlooked subdirectories or ports often conceal critical security insights.',
          'Understanding underlying protocol mechanics (TCP/IP, HTTP headers, authentication handshakes) is vital before running automated tooling.',
          'Strict adherence to authorized testing boundaries and ethical guidelines is fundamental to all offensive security operations.',
        ],
        lessonsLearned: [
          'Documentation and reproducibility are as critical as technical execution.',
          'Combining QA precision with offensive curiosity yields deeper vulnerability insights.',
          'Continued lab engagement builds necessary intuition for security assessment roles.',
        ],
        evidenceNote: 'Detailed write-up and evidence coming soon. Specific machine documentation will be published as individual lab exercises are completed and verified.',
      },
    },
    {
      id: 'proj-02',
      title: 'Application Quality Assurance & Testing',
      category: 'Software Quality Assurance',
      description:
        'Professional experience testing application workflows, identifying and reporting bugs, verifying live-session audio and video performance, and assisting with platform monitoring.',
      focusAreas: [
        'User workflow testing',
        'Functional testing',
        'Bug identification and reporting',
        'Audio and video verification',
        'Platform behavior monitoring',
      ],
      tools: ['Manual Testing', 'Bug Tracking', 'Spreadsheets', 'Live Session Testing'],
      status: 'Professional Case Study',
      details: {
        overview:
          'A retrospective case study reflecting professional QA practices conducted in live and staging environments. Emphasizes end-to-end user journey integrity, multimedia stream reliability, and structured bug lifecycle tracking without disclosing proprietary or confidential organizational data.',
        objectives: [
          'Verify core user journeys from onboarding through live interactive sessions.',
          'Detect visual, functional, and communication regressions prior to release cycles.',
          'Document high-fidelity bug reports with reproducible steps and environment logs.',
          'Support platform stability through proactive system behavior monitoring.',
        ],
        labMethodology: [
          'Manual test scenario execution covering edge-case matching states.',
          'Real-time verification of WebRTC/streaming audio and video latency and clarity.',
          'Cross-environment verification across varied network conditions and browsers.',
          'Systematic reporting using standardized bug templates for developer handoff.',
        ],
        toolsUsed: [
          'Manual Test Suites & Edge Cases',
          'Standardized Bug Reporting Frameworks',
          'Live Multimedia Diagnostics',
          'Spreadsheets & Documentation Suites',
        ],
        technicalObservations: [
          'Early bug detection substantially reduces release cycle remediation costs.',
          'Audio/video testing requires multi-variable checks including network jitter and device permissions.',
          'Precision in reproduction steps builds trust and velocity between QA and engineering teams.',
        ],
        lessonsLearned: [
          'QA methodology provides a rigorous foundation for cybersecurity vulnerability assessment.',
          'Both fields require an investigative mindset, boundary-value analysis, and attention to detail.',
          'Ethical data handling and respect for confidential systems are paramount.',
        ],
        evidenceNote:
          'Presented as a professional methodology case study. Proprietary code, internal dashboards, and confidential metrics are intentionally omitted to maintain non-disclosure integrity.',
      },
    },
  ],
  certifications: [
    {
      id: 'cert-udemy',
      name: 'Cyber Security Fundamental by RWID',
      issuer: 'Udemy (Remote Worker Indonesia — Adhitya Priyanka)',
      type: 'Course Completion',
      isVerifiedFile: true,
      fileUrl: '/certificates/udemy-cybersecurity.pdf',
      previewImage: '/certificates/previews/udemy-cybersecurity-preview.png',
      certificateId: 'UC-daf352d6-84a8-4958-85ea-f0a63c386d97',
      verificationUrl: 'https://ude.my/UC-daf352d6-84a8-4958-85ea-f0a63c386d97',
      date: '3 February 2025',
      description: 'Foundational training in cybersecurity fundamentals, threat models, and secure computing workflows (6.5 total hours).',
    },
    {
      id: 'cert-idsecconf',
      name: 'IDSECCONF 2025 — Conference Participant',
      issuer: 'IDSECCONF Council & COCONUT Computer Club',
      type: 'Technical Training',
      isVerifiedFile: true,
      fileUrl: '/certificates/idsecconf-2025.pdf',
      previewImage: '/certificates/previews/idsecconf-2025-preview.png',
      date: '8–9 November 2025',
      description: 'Participant at the Indonesia IT Security Conference 2025 in Makassar, exploring offensive security, vulnerability research, and incident analysis.',
    },
    {
      id: 'cert-03',
      name: 'MikroTik Certified Network Associate (MTCNA)',
      issuer: 'MikroTik',
      type: 'Professional Certification',
      isVerifiedFile: true,
      fileUrl: '/certificates/MTCNA.pdf',
      previewImage: '/certificates/previews/MTCNA.png',
    },
    {
      id: 'cert-01',
      name: 'Computer Network Basic — ITBOX',
      issuer: 'ITBOX',
      type: 'Course Completion',
      isVerifiedFile: true,
      fileUrl: '/certificates/ITBox-Certificate_Computer-Network-Course-Level-Basic_Putri-Maharani.S (1).pdf',
      previewImage: '/certificates/previews/ITBox-Certificate_Computer-Network-Course-Level-Basic_Putri-Maharani.S (1).png',
    },
    {
      id: 'cert-02',
      name: 'Computer Network Intermediate — ITBOX',
      issuer: 'ITBOX',
      type: 'Course Completion',
      isVerifiedFile: true,
      fileUrl: '/certificates/ITBox-Certificate_Computer-Network-Course-Level-Intermediate_Putri-Maharani.S.pdf',
      previewImage: '/certificates/previews/ITBox-Certificate_Computer-Network-Course-Level-Intermediate_Putri-Maharani.S.png',
    },
    {
      id: 'cert-04',
      name: 'Windows Privilege Escalation for Beginners',
      type: 'Technical Training',
      isVerifiedFile: true,
      fileUrl: '/certificates/Windows Privilege Escalation for Beginners.pdf',
      previewImage: '/certificates/previews/Windows Privilege Escalation for Beginners.png',
    },
    {
      id: 'cert-05',
      name: 'Practical Ethical Hacking',
      type: 'Technical Training',
      isVerifiedFile: true,
      fileUrl: '/certificates/Practical Ethical Hacking.pdf',
      previewImage: '/certificates/previews/Practical Ethical Hacking.png',
    },
    {
      id: 'cert-07',
      name: 'Linux Privilege Escalation for Beginners',
      type: 'Technical Training',
      isVerifiedFile: true,
      fileUrl: '/certificates/Linux Privilege Escalation for Beginners.pdf',
      previewImage: '/certificates/previews/Linux Privilege Escalation for Beginners.png',
    },
    {
      id: 'cert-08',
      name: 'Open-Source Intelligence (OSINT) Fundamentals',
      type: 'Technical Training',
      isVerifiedFile: true,
      fileUrl: '/certificates/Open-Source Intelligence (OSINT) Fundamentals.pdf',
      previewImage: '/certificates/previews/Open-Source Intelligence (OSINT) Fundamentals.png',
    },
  ],
  education: [
    {
      id: 'edu-01',
      degree: 'Bachelor of Computer Science',
      institution: 'Universitas Muslim Indonesia',
      location: 'Makassar, Indonesia',
      isPrimary: true,
    },
    {
      id: 'edu-02',
      degree: 'Science Major',
      institution: 'SMAN 1 Tolitoli',
      location: 'Tolitoli, Indonesia',
      isPrimary: false,
    },
  ],
  contact: {
    heading: "Let's Connect",
    description:
      "I'm interested in cybersecurity, penetration testing, technical problem-solving, and opportunities to continue developing my skills in the security field.",
    email: 'maharaniputri34711@gmail.com',
    location: 'Makassar, Indonesia',
    linkedinUrl: '', // Configurable: enter LinkedIn profile URL when ready
    phone: {
      enabled: false, // Privacy default: disabled unless explicitly enabled by owner
      number: '',
    },
  },
  footer: {
    quote: 'Learning. Testing. Securing.',
  },
};
