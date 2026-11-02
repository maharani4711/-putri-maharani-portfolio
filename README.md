# Putri Maharani.S — Cybersecurity & QA Portfolio

A modern, minimalist personal portfolio website built with **React**, **Vite**, **TypeScript**, and **Tailwind CSS**. Specifically designed for entry-level cybersecurity roles (**Junior Penetration Tester**, **Junior Security Analyst**) while accurately representing hands-on **Quality Assurance** and **IT Systems** experience.

---

## 🛡️ Design Philosophy

- **Modern Minimalist Cybersecurity Aesthetic**:
  - Near-black canvas: `#0B0D0F`
  - Dark charcoal surfaces: `#141719`
  - Off-white primary typography: `#F2F4F3`
  - Muted secondary text: `#969DA3`
  - Subtle terminal-green accents: `#A3E635`
  - Understated borders: `#23272B`
- **Zero Fiction & Full Credibility**: Strictly represents verified experience, academic background, lab focus, and training credentials without fabricated CVEs, fake statistics, or exaggerated proficiency percentages.
- **Accessible & Responsive**: Keyboard-navigable, screen-reader friendly, semantic HTML, and fully responsive across mobile, tablet, laptop, and desktop viewports.

---

## 📁 Project Structure

```
putri-maharani-portfolio/
├── index.html                   # HTML entry point with metadata & PM favicon
├── package.json                 # Project dependencies & scripts
├── postcss.config.js            # PostCSS configuration
├── tailwind.config.js           # Tailwind CSS theme & color configuration
├── tsconfig.json                # TypeScript project configuration
├── tsconfig.node.json           # TypeScript configuration for Vite
├── vite.config.ts               # Vite configuration
├── README.md                    # Documentation & operational guide
├── public/
│   ├── resume.pdf               # Authentic resume PDF (served at /resume.pdf)
│   └── certificates/           # Authentic credential PDF documents
└── src/
    ├── App.tsx                  # Root application view
    ├── main.tsx                 # React entry mount
    ├── index.css                # Global stylesheet & animations
    ├── types/
    │   └── portfolio.ts         # TypeScript interfaces & data contracts
    ├── data/
    │   └── portfolioData.ts     # Centralized, single-source-of-truth portfolio data
    └── components/
        ├── Navbar.tsx           # Full name "Putri Maharani.S", descriptor, & ">_ CLI" button
        ├── Hero.tsx             # Cybersecurity badge, headline, CTAs, & whoami panel
        ├── About.tsx            # Verbatim biography & verified profile card
        ├── Experience.tsx       # Chronological QA & IT internship timeline
        ├── Skills.tsx           # 6 structured categories (Cybersecurity, QA, Network, DB, Tools, Lang)
        ├── Projects.tsx         # Featured project cards
        ├── ProjectModal.tsx     # Deep-dive inspector with methodology, scope, & observations
        ├── Certifications.tsx   # Credential cards distinguishing professional vs course completions
        ├── Education.tsx        # Higher & secondary education cards
        ├── Contact.tsx          # Balanced 3-card dispatch (Email, Location, LinkedIn)
        ├── Footer.tsx           # Full name, quote, dynamic year, & back-to-top
        └── InteractiveTerminal.tsx # Harmless client-side CLI (help, about, skills, projects, certifications, contact, clear)
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher recommended; v20 LTS preferred)
- npm (v9 or higher)

### 1. Installation
Install project dependencies:
```bash
npm install
```

### 2. Development Server
Start the local Vite development server:
```bash
npm run dev
```
Open your browser at `http://localhost:3000` (or the port indicated in terminal).

### 3. Production Build
Generate an optimized static production bundle:
```bash
npm run build
```
The compiled output will be generated inside the `dist/` directory.

### 4. Local Production Preview
Preview the production build locally:
```bash
npm run preview
```

---

## ⚙️ Content Management Guide

All personal and portfolio content is strictly decoupled from the UI components and maintained inside `src/data/portfolioData.ts`.

### 1. Updating Personal Information & Contact
Open `src/data/portfolioData.ts` and modify the `contact` object:
```typescript
contact: {
  heading: "Let's Connect",
  description: "...",
  email: "maharaniputri34711@gmail.com",
  location: "Makassar, Indonesia",
  linkedinUrl: "https://linkedin.com/in/your-profile", // Paste your profile URL
  phone: {
    enabled: true, // Set to true if you wish to display phone number publicly
    number: "+62 ...",
  },
}
```

### 2. Updating Resume PDF
1. Save your latest resume PDF as `resume.pdf`.
2. Place it directly inside `public/resume.pdf`.
3. The "Download Resume" button on the hero section automatically serves and downloads `/resume.pdf`.

### 3. Adding or Updating Certifications
Add entries into `certifications` array in `src/data/portfolioData.ts`:
```typescript
{
  id: "cert-09",
  name: "New Certification Name",
  issuer: "Issuing Organization", // Omit if unspecified
  type: "Professional Certification", // or "Course Completion" | "Technical Training"
  isVerifiedFile: true,
  fileUrl: "/certificates/new-certificate.pdf", // Place PDF in public/certificates/
}
```

### 4. Adding or Updating Projects
Add entries into `projects` array in `src/data/portfolioData.ts`:
```typescript
{
  id: "proj-03",
  title: "New Project Title",
  category: "Offensive Security",
  description: "High-level summary of the lab or assessment...",
  focusAreas: ["Area 1", "Area 2"],
  tools: ["Tool 1", "Tool 2"],
  status: "Hands-on Lab Practice",
  details: {
    overview: "...",
    objectives: ["..."],
    scopeAndAuthorization: ["..."],
    labMethodology: ["..."],
    toolsUsed: ["..."],
    technicalObservations: ["..."],
    lessonsLearned: ["..."],
    evidenceNote: "Detailed write-up coming soon.",
  },
}
```

---

## 🌐 Deployment Instructions

### Vercel / Netlify
1. Push this repository to GitHub or GitLab.
2. Connect your repository to **Vercel** or **Netlify**.
3. Build Settings:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
4. Deploy!
