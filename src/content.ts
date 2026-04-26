// ============================================================================
// 🎨 YOUR BRAND & CONTENT CONFIGURATION
// ============================================================================
// I've centralized all your content here. 
// To replace the placeholders with your actual images, simply update the URLs below.
// If you upload images to the `public` folder, you can reference them like `/my-image.jpg`.

export const BRAND = {
  name: "Gatrivi",
  // The main subtitle
  title: "Software Engineer & Creator",
  // 🥚 EASTER EGG: This text appears when someone clicks your title!
  easterEggTitle: "Catboarder & Zen Master 🏂🐈",
  
  bio: "I craft thoughtful, performant, and beautiful web applications. Exploring the intersection of design, engineering, and art.",
  
  // 🖼️ HERO BACKGROUND: 
  // A moody, cinematic image works best here (e.g., your 'tree at night in fog' or 'car parked at night')
  heroBackground: "/20180528_192136.jpg",
  
  // 👤 PROFILE PICTURE:
  profilePicture: "/devtrivi-profile.jpg",

  socials: {
    github: "https://github.com",
    twitter: "https://twitter.com",
    linkedin: "https://linkedin.com",
    email: "mailto:bastademailscareta@gmail.com"
  }
};

export const PROJECTS = [
  {
    title: 'Cat Monastery',
    description: 'A peaceful digital retreat and sanctuary for feline friends and their admirers.',
    link: 'https://catmonastery.gatrivi.com',
    // 🖼️ PROJECT THUMBNAIL:
    image: "/zen.jpg",
    tags: ['React', 'Tailwind', 'Sanctuary']
  },
  {
    title: 'Cat Int Assist',
    description: 'Intelligent assistance and task management tailored for your daily workflow.',
    link: 'https://catintassist.gatrivi.com',
    // 🖼️ PROJECT THUMBNAIL:
    image: "/will.jpg",
    tags: ['AI', 'Productivity', 'Assistant']
  },
  {
    title: 'Rosario',
    description: 'A beautiful, elegant, and responsive web experience with a focus on typography.',
    link: 'https://rosario.gatrivi.com',
    // 🖼️ PROJECT THUMBNAIL:
    image: "/20190615_161902.jpg",
    tags: ['Design', 'Typography', 'Portfolio']
  },
  {
    title: 'Cat Reader',
    description: 'Your favorite reading companion, offering a distraction-free environment.',
    link: 'https://catreader.gatrivi.com',
    // 🖼️ PROJECT THUMBNAIL:
    image: "/snow2.jpg",
    tags: ['Reading', 'Minimalist', 'Web App']
  }
];

// 🖼️ BENTO GRID GALLERY:
// I've set this up as a "Bento Box" grid. The `span` property controls how much space an image takes.
// Replace these with your uploaded images (the angel sketch, yorkie, red sunglasses, etc.)
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
    alt: 'Safari cake', 
    span: 'md:col-span-2' 
  },
  { 
    src: '/will.jpg', 
    alt: 'Sketch', 
    span: 'col-span-1 md:row-span-2' 
  },
  { 
    src: '/zen.jpg', 
    alt: 'Zen stones', 
    span: 'col-span-1' 
  },
  { 
    src: '/20180528_192136.jpg', 
    alt: 'Street at night', 
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
    alt: 'Self portrait', 
    span: 'md:col-span-3' 
  },
];
