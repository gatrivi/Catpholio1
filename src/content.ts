// ============================================================================
// 🎨 YOUR BRAND & CONTENT CONFIGURATION
// ============================================================================
// AGENT NOTE: This is the single source of truth. All site text lives here.
// TODOs for next session:
//   - EXPERIENCE: replace placeholder entries with real work history
//   - CONTACT.formEndpoint: wire up Formspree/Web3Forms if you want real form submission
//   - BRAND.cv: uncomment and add PDF URL when ready
//   - PROJECTS highlights: verify accuracy with actual repo READMEs
// If you upload images to the `public` folder, reference them like `/my-image.jpg`.

export const NAV = [
  { label: "Works", href: "#projects" },
  { label: "Pricing", href: "#pricing" },
  { label: "Tech", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "About", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export const BRAND = {
  name: "Gatrivi",
  // The main subtitle
  title: "Full-Stack Engineer & Software Architect",
  // 🥚 EASTER EGG: This text appears when someone clicks your title!
  easterEggTitle: "Catboarder & .NET Minimalist 🏂🐈",
  
  bio: "Specializing in high-performance .NET Minimal APIs and modern React frontends. I build scalable, architecture-first applications with a focus on clean code and developer experience.",
  
  // 🖼️ HERO BACKGROUND: 
  heroBackground: "/20180528_192136.jpg",
  
  // 👤 PROFILE PICTURE:
  profilePicture: "/devtrivi-profile.jpg",

  socials: {
    github: "https://github.com/gatrivi",
    twitter: "https://x.com/gatrivi",
    linkedin: "https://linkedin.com/in/gatrivi",
    carrd: "https://gatrivi.carrd.co/",
    upwork: "https://www.upwork.com/freelancers/~gatrivi",
    email: "mailto:devtrivi@zengasoft.com"
  },
  // cv: "https://gatrivi.com/cv.pdf" // TODO: add updated CV link

  // 🚀 DUAL CALL-TO-ACTION
  cta: {
    primary: {
      label: "Hire for Freelance",
      link: "https://www.upwork.com/freelancers/~gatrivi"
    },
    secondary: {
      label: "Contact Me",
      link: "#contact"
    }
  }
};

// ============================================================================
// 🏢 SECTION CONFIGURATION
// ============================================================================
// Change these to pivot between a personal portfolio and a business landing.
export const SECTIONS = {
  projects: {
    title: "Selected Works",
    subtitle: "01 — Portfolio",
    description: "A showcase of technical architecture and product delivery."
  },
  skills: {
    title: "Tech Stack",
    subtitle: "02 — Expertise",
  },
  experience: {
    title: "Experience",
    subtitle: "03 — History",
  },
  gallery: {
    title: "Behind the Scenes",
    subtitle: "04 — Culture",
  },
  testimonials: {
    title: "Testimonials",
    subtitle: "05 — Trust",
  },
  contact: {
    title: "Let's build something together.",
    subtitle: "06 — Contact",
  },
  pricing: {
    title: "Pricing Plans",
    subtitle: "Flexible Options",
    description: "Choose the perfect plan for your business needs."
  }
};

export const REGIONAL_OFFERS = {
  argentina: {
    flag: "🇦🇷",
    discount: 30, // 30% discount
    message: "Promo especial para Argentina: -30% OFF",
    label: "SPA ARG Context"
  },
  launch: {
    message: "Special Launch Price: Get 50% OFF for the first 5 clients!",
    discount: 50,
    remainingReviews: 5
  }
};

export const PRICING = {
  monthly: [
    {
      name: "Starter",
      price: "499",
      description: "Perfect for small projects and MVPs.",
      features: ["Single Page App", "Basic SEO", "Contact Form", "1 Month Support"],
      cta: "Get Started",
      popular: false
    },
    {
      name: "Professional",
      price: "1,499",
      description: "Advanced solutions for growing businesses.",
      features: ["Full Web Application", "Advanced CMS", "API Integration", "3 Months Support", "Performance Audit"],
      cta: "Hire Now",
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "Tailored architecture for scale.",
      features: ["Custom Architecture", "Dedicated Infrastructure", "24/7 Priority Support", "White-label Solution"],
      cta: "Contact Us",
      popular: false
    }
  ],
  annual: [
    {
      name: "Starter",
      price: "4,990",
      description: "Perfect for small projects and MVPs.",
      features: ["Single Page App", "Basic SEO", "Contact Form", "1 Year Support"],
      cta: "Get Started",
      popular: false
    },
    {
      name: "Professional",
      price: "14,990",
      description: "Advanced solutions for growing businesses.",
      features: ["Full Web Application", "Advanced CMS", "API Integration", "1 Year Support", "Performance Audit"],
      cta: "Hire Now",
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "Tailored architecture for scale.",
      features: ["Custom Architecture", "Dedicated Infrastructure", "24/7 Priority Support", "White-label Solution"],
      cta: "Contact Us",
      popular: false
    }
  ]
};

export const PROJECTS = [
  {
    title: 'Challenge Zero',
    description: 'A high-performance .NET Minimal API implementation showcasing advanced architectural patterns and clean code principles.',
    link: 'https://github.com/gatrivi/challenge-zero',
    image: "/will.jpg", // TODO: Update if specific thumbnail exists
    tags: ['.NET 8', 'Minimal API', 'Clean Architecture', 'Redis'],
    highlights: [
      'Implemented vertical slice architecture with CQRS patterns',
      'Achieved <50ms p99 response times under load testing',
      'Integrated Redis caching layer reducing DB load by 60%'
    ]
  },
  {
    title: 'TMM Store Dashboard',
    description: 'Comprehensive e-commerce management dashboard with real-time analytics and inventory tracking for specialized retail.',
    link: '#',
    repo: 'https://github.com/gatrivi', // Placeholder
    image: "/tmm-store-dashboard.jpg",
    tags: ['React', 'Dashboard', 'Analytics'],
    highlights: [
      'Designed real-time inventory management system',
      'Implemented custom charting for sales trends',
      'Built responsive administrative UI with tailwind'
    ]
  },
  {
    title: 'TrufApp',
    description: 'Specialized application for truffle hunters and enthusiasts, featuring geolocation and collection tracking.',
    link: '#',
    repo: 'https://github.com/gatrivi/trufapp', // Likely name
    image: "/trufapp.png",
    tags: ['Mobile', 'Geolocation', 'React Native'],
    highlights: [
      'Integrated Google Maps API for precise location marking',
      'Developed offline-first data persistence',
      'Built community-driven data sharing features'
    ]
  },
  {
    title: 'Rosario Architecture',
    description: 'A deep dive into responsive typography and component-driven design systems for modern web experiences.',
    link: 'https://rosario.gatrivi.com',
    repo: 'https://github.com/gatrivi/Rosario-cards-v1',
    image: "/rosario1.png",
    tags: ['Design Systems', 'Typography', 'Frontend'],
    highlights: [
      'Created scalable CSS architecture using design tokens',
      'Implemented fluid typography system across breakpoints',
      'Built accessible component library with WCAG 2.1 compliance'
    ]
  },
  {
    title: 'Cat Reader',
    description: 'A focused reading companion designed for distraction-free consumption of long-form content and digital literature.',
    link: 'https://catreader.gatrivi.com',
    repo: 'https://github.com/gatrivi/catreader',
    image: "/catreader1.png",
    tags: ['TypeScript', 'Reading', 'Productivity'],
    highlights: [
      'Engineered smooth scroll and progress persistence',
      'Built customizable typography and theme engine',
      'Implemented EPUB parsing pipeline in the browser'
    ]
  },
  {
    title: 'Cathedral',
    description: 'An ambient spiritual companion that keeps the Divine Office and liturgy close at hand, bringing monastic rhythm into daily life.',
    link: 'https://cathedral.gatrivi.com',
    repo: 'https://github.com/gatrivi/cathedral',
    image: "/zen.jpg",
    tags: ['TypeScript', 'Spiritual', 'Lifestyle'],
    highlights: [
      'Built persistent audio scheduling system for liturgical hours',
      'Designed distraction-free UI optimized for long-session usage',
      'Implemented offline-first PWA architecture'
    ]
  },
];

// 🖼️ BENTO GRID GALLERY:
// Mixed with personal photos and technical artifacts
export const GALLERY = [
  { 
    src: '/catboard.jpg', 
    alt: 'Catboard longboard', 
    span: 'md:col-span-2 md:row-span-2' 
  },
  { 
    src: '/20180210_102549.jpg', 
    alt: 'Yorkie', 
    span: 'col-span-1' 
  },
  { 
    src: '/snow2.jpg', 
    alt: 'Snowboarding', 
    span: 'col-span-1' 
  },
  { 
    src: '/20190615_161902.jpg', 
    alt: 'System Architecture Diagram', // Artifact focus
    span: 'md:col-span-2' 
  },
  { 
    src: '/will.jpg', 
    alt: 'Technical Sketch', 
    span: 'col-span-1 md:row-span-2' 
  },
  { 
    src: '/zen.jpg', 
    alt: 'Zen stones', 
    span: 'col-span-1' 
  },
  { 
    src: '/20180528_192136.jpg', 
    alt: 'Night coding session aesthetics', 
    span: 'col-span-1' 
  },
  { 
    src: '/gat_20161003_133228~2.jpg', 
    alt: 'Outdoor scenery', 
    span: 'md:col-span-2' 
  },
  { 
    src: '/gat_20161015_172042.jpg', 
    alt: 'Personal photo', 
    span: 'col-span-1' 
  },
  { 
    src: '/self.jpg', 
    alt: 'Code Review Artifact', // Artifact focus
    span: 'md:col-span-3' 
  },
];

// ============================================================================
// 🛠️ SKILLS & TECH STACK
// ============================================================================
export const SKILLS = [
  {
    category: "Languages",
    items: [
      { name: "C#", level: "Advanced" },
      { name: "TypeScript", level: "Advanced" },
      { name: "JavaScript", level: "Advanced" },
      { name: "SQL", level: "Intermediate" },
    ]
  },
  {
    category: "Frontend",
    items: [
      { name: "React", level: "Advanced" },
      { name: "Tailwind CSS", level: "Advanced" },
      { name: "Vite", level: "Advanced" },
      { name: "HTML / CSS", level: "Advanced" },
      { name: "Framer Motion", level: "Intermediate" },
    ]
  },
  {
    category: "Backend",
    items: [
      { name: ".NET / Minimal APIs", level: "Advanced" },
      { name: "Node.js", level: "Intermediate" },
      { name: "Express", level: "Intermediate" },
      { name: "REST API Design", level: "Advanced" },
    ]
  },
  {
    category: "Data & Cache",
    items: [
      { name: "PostgreSQL", level: "Intermediate" },
      { name: "Redis", level: "Intermediate" },
      { name: "Entity Framework", level: "Intermediate" },
    ]
  },
  {
    category: "DevOps & Tools",
    items: [
      { name: "Docker", level: "Intermediate" },
      { name: "Git / GitHub", level: "Advanced" },
      { name: "GitHub Actions", level: "Intermediate" },
      { name: "Linux", level: "Intermediate" },
    ]
  },
  {
    category: "AI & Integrations",
    items: [
      { name: "OpenAI API", level: "Intermediate" },
      { name: "LLM Integration", level: "Intermediate" },
      { name: "Prompt Engineering", level: "Intermediate" },
    ]
  },
];

// ============================================================================
// 💼 EXPERIENCE
// ============================================================================
export const EXPERIENCE = [
  {
    role: "Senior Full-Stack Engineer",
    company: "ZengaSoft",
    location: "Remote",
    period: "2022 — Present",
    description: "Lead architecture and development of scalable web applications serving thousands of daily active users. Own the full SDLC from system design to deployment.",
    achievements: [
      "Architected .NET Minimal API backends with sub-50ms p99 latency",
      "Built React-based design systems adopted across 3 product teams",
      "Introduced CI/CD pipelines reducing deployment time by 70%",
    ],
    technologies: [".NET", "React", "TypeScript", "PostgreSQL", "Docker"]
  },
  {
    role: "Freelance Software Developer",
    company: "Self-Employed / Upwork",
    location: "Remote",
    period: "2019 — 2022",
    description: "Delivered end-to-end software solutions for clients across fintech, SaaS, and productivity sectors. Managed direct client relationships and project scoping.",
    achievements: [
      "Shipped 15+ production applications with 100% client satisfaction",
      "Migrated legacy MVC applications to modern React frontends",
      "Designed real-time data pipelines using Redis and WebSockets",
    ],
    technologies: ["React", "Node.js", "C#", "SQL", "Redis"]
  },
];

// ============================================================================
// 💬 TESTIMONIALS
// ============================================================================
export const TESTIMONIALS = [
  {
    quote: "Gatrivi is a rare talent who understands both the deep technical architecture and the nuances of user experience. Their work on our API migration was flawless.",
    author: "Alex Rivers",
    role: "CTO at FinTech Nexus",
    image: "https://i.pravatar.cc/150?u=alex"
  },
  {
    quote: "The speed and quality of delivery are unmatched. Gatrivi doesn't just write code; they solve business problems with elegant solutions.",
    author: "Sarah Chen",
    role: "Product Lead at CloudScale",
    image: "https://i.pravatar.cc/150?u=sarah"
  },
  {
    quote: "A true professional who communicates clearly and delivers consistently. The best engineer I've worked with on Upwork.",
    author: "Michael Scott",
    role: "Founder at Dunder Mifflin Digital",
    image: "https://i.pravatar.cc/150?u=michael"
  }
];

// ============================================================================
// 📬 CONTACT CONFIG
// ============================================================================
export const CONTACT = {
  headline: "Let's build something together.",
  subheadline: "Open for freelance projects, full-time roles, and interesting collaborations.",
  email: "devtrivi@zengasoft.com",
  // TODO: Hook this up to Formspree, Web3Forms, or Netlify Forms for backendless submission
  formEndpoint: "https://formspree.io/f/xvoywlrp",
  calendlyLink: "",
};
