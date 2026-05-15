export const PORTFOLIO_CONTENT = {
  VERSION: "1.0.0-portfolio",
  BRAND: {
    name: "Gatrivi",
    title: "Software Engineer & Builder",
    bio: "I build high-performance web applications and digital products. Specialized in React, TypeScript, and cinematic user experiences.",
    heroHeadline: [
      { text: "Building the", highlight: false },
      { text: "digital future", highlight: true },
      { text: "one pixel at a time.", highlight: false },
    ],
    heroBackground: "/self.jpg",
    profilePicture: "/devtrivi-profile.jpg",
    socials: {
      github: "https://github.com/gatrivi",
      linkedin: "https://linkedin.com/in/gatrivi",
      instagram: "https://instagram.com/gatrivi",
      email: "mailto:devtrivi@zengasoft.com"
    }
  },
  PROJECTS: [
    {
      title: "Carta Digital",
      description: "A digital menu system for restaurants with WhatsApp integration.",
      image: "/tmm-store0.png",
      tags: ["React", "Vite", "Framer Motion"],
      link: "/store/digital-menu"
    },
    {
      title: "Zengatrivi Pymes",
      description: "Business management solutions for small enterprises.",
      image: "/tmm-store-dashboard.jpg",
      tags: ["Next.js", "Tailwind", "PostgreSQL"],
      link: "#"
    }
  ],
  GALLERY: [
    { src: "/20140319_231227.jpg", span: "col-span-1" },
    { src: "/20180210_102549.jpg", span: "col-span-2" },
    { src: "/20190615_161902.jpg", span: "col-span-1" },
    { src: "/catboard.jpg", span: "col-span-1" }
  ]
};
