export interface FeaturedProject {
  id: string;
  title: string;
  tagline: string;
  description: string;
  tech: string[];
  repoUrl: string;
  liveUrl: string;
  image: string;
  screenshots: { src: string; caption: string }[];
  workflow?: string[];
  features?: string[];
  badges?: string[];
  proof?: {
    heading: string;
    role: string;
    status: string;
    summary: string;
    metrics: { label: string; value: string; detail: string }[];
    evidence: { label: string; detail: string }[];
    decisions: { label: string; detail: string }[];
  };
}

export const BRAND = {
  name: 'gatrivi',
  title: 'React Developer · Medical Interpreter · Product Builder',
  bio: "I build software I depend on to do my job — and ship it well enough that others can depend on it too. CatIntAssist runs my interpreting sessions. CatReader syncs my library. Tmm Store, Rosario, and Cathedral serve real users daily. When production breaks, I fix it. That's the standard I code to.",
  socials: {
    github: 'https://github.com/gatrivi',
    linkedin: 'https://linkedin.com/in/gatrivi',
    instagram: '',
    email: 'devtrivi@zengasoft.com',
    carrd: 'https://gatrivi.carrd.co',
  },
};

export const SKILLS = [
  { category: 'Frontend', items: ['React 19', 'TypeScript', 'Vite', 'Tailwind CSS v4', 'Framer Motion'] },
  { category: 'Backend & APIs', items: ['Node.js', 'REST APIs', 'Deepgram', 'Google Translate', 'Gemini API'] },
  { category: 'Tools & Platforms', items: ['Git', 'Vercel', 'Netlify', 'kvdb.io', 'idb-keyval'] },
  { category: 'Design', items: ['UI/UX', 'Responsive Design', 'Glassmorphism', 'Dark Mode'] },
];

export const EXPERIENCE = [
  {
    role: 'Founding Developer & End User',
    company: 'CatIntAssist (Self-built Production Tool)',
    period: '2024 — Present',
    description:
      'Built and shipped a real-time medical interpreter dashboard used daily in live clinical sessions. Acted as both developer and primary user, which forced ruthless prioritization of stability, speed, and zero-downtime deployments.',
    bullets: [
      'Shipped features to a live production environment where downtime = lost income',
      'Developed a "safe deploy" workflow: small atomic changes, instant rollback plan, zero breaking releases in 12+ months',
      'Debugged under pressure during active interpreting calls, building intuition for which bugs are cosmetic vs. session-fatal',
      'Iterated on UX by observing my own stress responses during high-stakes medical calls',
      'Managed API costs and rate limits (Deepgram, Google Translate) in a real budget-constrained environment',
      'Handled full-stack incident response: from transcription dropouts to translation fallback cascades, without a dedicated ops team',
    ],
  },
  {
    role: 'Medical Interpreter',
    company: 'Freelance / Contract',
    period: '20XX — Present',
    description:
      'Provided bilingual medical interpretation in high-acuity clinical settings. This domain expertise directly shaped the product requirements for CatIntAssist.',
    bullets: [
      'Deep familiarity with medical terminology, HIPAA-adjacent workflows, and the cognitive load of simultaneous interpretation',
      'Experienced the pain points that CatIntAssist solves firsthand: juggling tabs, tracking billable minutes, verifying translations under time pressure',
    ],
  },
];

export const CONTACT = {
  email: 'devtrivi@zengasoft.com',
  headline: "Let's build something that stays up.",
  subline: 'Available for freelance, collaboration, or full-stack roles where shipping matters.',
};

export const FEATURED_PROJECTS: FeaturedProject[] = [
  {
    id: 'catintassist',
    title: 'CatIntAssist',
    tagline: 'Real-time medical interpreter workspace — press green, capture audio, earn',
    description:
      'Press the green button. Select the browser tab where the medical call is running. The AI captures the audio, detects English and Spanish in real time, and renders both languages in parallel columns — transcription on the left, translation on the right, with font and color cues so you instantly know which is which. Your call timer runs. Your cash total ticks up. When the call ends, a money bag explodes and the earnings drop into your daily total. This is not a toy. I use it to work.',
    tech: ['React', 'TypeScript', 'Deepgram', 'Tailwind', 'Framer Motion'],
    repoUrl: 'https://github.com/gatrivi/catintassist',
    liveUrl: '',
    image: '/catintassist-hero.jpg',
    badges: ['Used in live clinical sessions', '16 interpreter-first features', 'Production-hardened'],
    proof: {
      heading: 'Flagship proof-of-work case study',
      role: 'Solo developer, product owner, QA, and daily end user',
      status: 'Production tool used in live medical interpreting sessions',
      summary:
        'CatIntAssist is the clearest evidence that I can identify a painful workflow, design the product around real constraints, build the interface, connect live AI services, and keep it stable while my own work depends on it.',
      metrics: [
        {
          label: 'Ownership',
          value: 'Solo-built',
          detail: 'Product decisions, UI, data flow, integrations, deployments, and fixes handled end to end.',
        },
        {
          label: 'Reality test',
          value: 'Daily-use tool',
          detail: 'Designed from actual interpreter pressure: speed, clarity, no tab juggling, no fragile flows.',
        },
        {
          label: 'Feature depth',
          value: '16+ workflows',
          detail: 'Beyond a demo: timers, earnings, goals, holds, notes, phrase replay, and compliance helpers.',
        },
      ],
      evidence: [
        {
          label: 'Repo trail',
          detail: 'Public GitHub repository linked from the card so reviewers can inspect the code directly.',
        },
        {
          label: 'Workflow receipts',
          detail: 'The screenshot sequence follows the actual session loop from start button to month-end totals.',
        },
        {
          label: 'Domain fit',
          detail: 'The feature list reflects interpreter-specific edge cases that only show up through real use.',
        },
        {
          label: 'Production pressure',
          detail: 'The app has to stay useful during paid calls, so regressions are felt immediately and fixed fast.',
        },
      ],
      decisions: [
        {
          label: 'Browser-tab capture',
          detail: 'Start with the green button, select the call tab, and stream live audio into transcription.',
        },
        {
          label: 'Parallel language lanes',
          detail: 'English and Spanish stay visible at the same time to reduce context switching under pressure.',
        },
        {
          label: 'Interpreter stays in control',
          detail: 'AI provides suggested translation and terminology support; the human chooses what to say.',
        },
        {
          label: 'Work economics in the UI',
          detail: 'Timers, earnings, breaks, goals, and logoff totals make the app useful beyond transcription.',
        },
      ],
    },
    workflow: [
      'Press the green button to start a session',
      'Select the browser tab where the medical call is running (or use YouTube to test)',
      'Audio is captured and streamed to the AI engine in real time',
      'AI detects language (ENG/SPA) and renders transcription in the appropriate column',
      'Suggested translation appears beside the transcription, on the correct language side',
      'Left column = English, Right column = Spanish. Font weight and color cues distinguish transcription from translation',
      'Call timer runs continuously. Cash amount increases per minute worked',
      'When the call ends, a money bag animation explodes and adds earnings to the daily total',
      'At day logoff, daily total rolls into the monthly accumulation',
    ],
    features: [
      'Dual-language parallel streams — both languages visible simultaneously, no lag on speaker switch',
      'Side-by-side suggested translation — read when stuck, ignore when translating by ear',
      'Adaptive goal system — monthly/weekly/daily targets in cash or minutes, 5/6/7-day schedules',
      'Live earnings & break tracking — worked minutes, money earned, hold time, off-call gaps',
      'Three-tier progress bars — blue (on-call), orange (off-call), daily/week-sprint/monthly',
      'Auto hold timer + disconnect reminder — detects silence, starts hold, nudges if still connected',
      'Number protector — auto-detects phone numbers, one-click copy, purges post-call for HIPAA',
      'Post-call summary — critical data lingers 30s after hang-up for clean logging',
      'Habit tracker — reminders to stretch, eat, clean, pray between calls',
      'Quick notes — manual override when transcription misses context',
      'Soundboard — prerecorded greetings and formal phrases to prevent vocal fatigue',
      'Dictionary / dialect cover — lookup for regional terms and misheard medical words',
      'Scrollable & pinned posts — save and replay recurring statements without re-speaking',
      'Repetition & stutter protection — algorithm suppresses duplicate phrases from fast transcription',
      'Word count guard — live meter to comply with relay length policies',
      'Inline number editor — correct misheard digits without breaking flow',
    ],
    screenshots: [
      { src: '/catintassist-thumb.png', caption: 'Live dual-column workspace: English and Spanish streams side by side with suggested translation, soundboard, and session metrics.' },
      { src: '/catintassist-dashboard.png', caption: 'Production scoreboard: daily goals, earnings, off-call tracking, and sprint progress in one interpreter-first dashboard.' },
      { src: '/catintassist.png', caption: 'Full session HUD with live transcript, dialer context, and gamified earnings view during an active call.' },
      { src: '/catintassist2.png', caption: 'Medical terminology support: uncommon orthopedics terms get suggested equivalents so the interpreter can decide fast.' },
      { src: '/catintassist3.png', caption: 'Call timer and earnings tick up in real time while the interpreter stays in control of what gets said.' },
      { src: '/catintassist4.png', caption: 'End-of-call flow: earnings roll into daily totals and monthly accumulation for real work tracking.' },
      { src: '/catintassist-habit-pills.png', caption: 'Habit tracker and progress bars for on-call, off-call, and sprint targets between sessions.' },
    ],
  },
  {
    id: 'catreader',
    title: 'CatReader',
    tagline: 'Cross-device PDF & TXT reader with zero-auth sync',
    description:
      'An industry-standard e-reader that syncs progress across devices without login. Features AI-powered library enrichment, Google Drive integration, and smooth PDF pre-buffering.',
    tech: ['React 18', 'Vite', 'Tailwind', 'react-pdf', 'kvdb.io', 'Gemini API'],
    repoUrl: 'https://github.com/gatrivi/catreader',
    liveUrl: '',
    image: '/catreader0.png',
    screenshots: [
      { src: '/catreader0.png', caption: 'Library grid with auto-generated SVG covers' },
      { src: '/catreader1.png', caption: 'PDF reader with edge-tap navigation & theme switcher' },
      { src: '/catreader-cover-select.png', caption: 'AI cover generation via Gemini multimodal OCR' },
    ],
  },
  {
    id: 'tmm-store',
    title: 'Tmm Store',
    tagline: 'Zero-backend WhatsApp ordering SPA for SMBs',
    description:
      'A static-site menu and cart system that turns any WhatsApp chat into a sales channel. No database, no backend, no SaaS fees — just menu.json and a build step.',
    tech: ['React 19', 'Vite 6', 'TypeScript', 'Tailwind v4', 'WhatsApp API'],
    repoUrl: 'https://github.com/gatrivi/Tmm-store',
    liveUrl: '',
    image: '/tmm-store0.png',
    screenshots: [
      { src: '/tmm-store0.png', caption: 'Dark minimal menu landing for Pizzería Trufi' },
      { src: '/tmm-store1.png', caption: 'Product cards with one-tap add-to-cart' },
      { src: '/tmm-menu-editor.png', caption: 'Menu editor / JSON configuration view' },
    ],
  },
  {
    id: 'rosario',
    title: 'Rosario Cards',
    tagline: 'Digital prayer companion — interactive Catholic rosary',
    description:
      'A contemplative web app for praying the rosary digitally. Clean card-based UI, progress tracking across mysteries, and a calm, distraction-free experience designed for daily devotion.',
    tech: ['React', 'Vite', 'Tailwind', 'Framer Motion'],
    repoUrl: 'https://github.com/gatrivi/Rosario-cards-v1',
    liveUrl: 'https://rosario.gatrivi.com',
    image: '/rosario1.png',
    screenshots: [
      { src: '/rosario1.png', caption: 'Interactive rosary interface with mystery selection and prayer progress' },
    ],
  },
  {
    id: 'cathedral',
    title: 'Cathedral',
    tagline: 'Liturgical companion for the Divine Office',
    description:
      'A web app for Catholic liturgical prayer — structuring the daily Divine Office into a readable, navigable format. Built for contemplative rhythm and textual clarity.',
    tech: ['React', 'Vite', 'Tailwind'],
    repoUrl: 'https://github.com/gatrivi/cathedral',
    liveUrl: 'https://cathedral.gatrivi.com',
    image: '/cathedral.png',
    screenshots: [
      { src: '/cathedral.png', caption: 'Divine Office layout with structured prayers and liturgical readings' },
    ],
  },
];

// Backward-compatible monolith for existing consumers (Navbar, Footer, etc.)
export const PORTFOLIO_CONTENT = {
  VERSION: '1.0.0-portfolio',
  BRAND: {
    name: BRAND.name,
    title: BRAND.title,
    bio: BRAND.bio,
    heroHeadline: [
      { text: 'Building the', highlight: false },
      { text: 'digital future', highlight: true },
      { text: 'one pixel at a time.', highlight: false },
    ],
    heroBackground: '/devtrivi-profile.jpg',
    profilePicture: '/devtrivi-profile.jpg',
    socials: {
      github: BRAND.socials.github,
      linkedin: BRAND.socials.linkedin,
      instagram: BRAND.socials.instagram,
      email: `mailto:${BRAND.socials.email}`,
      carrd: BRAND.socials.carrd,
    },
  },
  PROJECTS: FEATURED_PROJECTS.map((p) => ({
    id: p.id,
    title: p.title,
    description: p.description,
    image: p.image,
    tags: p.tech,
    demo: p.liveUrl || undefined,
    repo: p.repoUrl || undefined,
    highlights: p.features,
  })),
  GALLERY: [
    { src: '/20140319_231227.jpg', span: 'col-span-1' },
    { src: '/20180210_102549.jpg', span: 'col-span-2' },
    { src: '/20190615_161902.jpg', span: 'col-span-1' },
    { src: '/catboard.jpg', span: 'col-span-1' },
  ],
};
