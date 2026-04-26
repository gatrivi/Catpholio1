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
  heroBackground: "https://picsum.photos/seed/tree-night/1920/1080",
  
  // 👤 PROFILE PICTURE:
  profilePicture: "https://picsum.photos/seed/profile-man/800/800",

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
    image: 'https://picsum.photos/seed/zen-garden/800/600',
    tags: ['React', 'Tailwind', 'Sanctuary']
  },
  {
    title: 'Cat Int Assist',
    description: 'Intelligent assistance and task management tailored for your daily workflow.',
    link: 'https://catintassist.gatrivi.com',
    // 🖼️ PROJECT THUMBNAIL:
    image: 'https://picsum.photos/seed/laptop-snow/800/600',
    tags: ['AI', 'Productivity', 'Assistant']
  },
  {
    title: 'Rosario',
    description: 'A beautiful, elegant, and responsive web experience with a focus on typography.',
    link: 'https://rosario.gatrivi.com',
    // 🖼️ PROJECT THUMBNAIL:
    image: 'https://picsum.photos/seed/bougainvillea/800/600',
    tags: ['Design', 'Typography', 'Portfolio']
  },
  {
    title: 'Cat Reader',
    description: 'Your favorite reading companion, offering a distraction-free environment.',
    link: 'https://catreader.gatrivi.com',
    // 🖼️ PROJECT THUMBNAIL:
    image: 'https://picsum.photos/seed/typewriter/800/600',
    tags: ['Reading', 'Minimalist', 'Web App']
  }
];

// 🖼️ BENTO GRID GALLERY:
// I've set this up as a "Bento Box" grid. The `span` property controls how much space an image takes.
// Replace these with your uploaded images (the angel sketch, yorkie, red sunglasses, etc.)
export const GALLERY = [
  { 
    src: 'https://picsum.photos/seed/tree-night/800/800', 
    alt: 'Tree at night in fog', 
    span: 'md:col-span-2 md:row-span-2' // Large feature image
  },
  { 
    src: 'https://picsum.photos/seed/green-trees/600/600', 
    alt: 'Looking up at green trees', 
    span: 'col-span-1' 
  },
  { 
    src: 'https://picsum.photos/seed/car-night/800/600', 
    alt: 'Car parked at night', 
    span: 'col-span-1' 
  },
  { 
    src: 'https://picsum.photos/seed/red-sunglasses/800/400', 
    alt: 'Person with red sunglasses', 
    span: 'md:col-span-2' // Wide image
  },
  { 
    src: 'https://picsum.photos/seed/stacked-stones/600/800', 
    alt: 'Stacked black stones', 
    span: 'col-span-1 md:row-span-2' // Tall image
  },
  { 
    src: 'https://picsum.photos/seed/colorful-decorations/800/600', 
    alt: 'Colorful decorations', 
    span: 'col-span-1' 
  },
  { 
    src: 'https://picsum.photos/seed/yorkie-roof/600/600', 
    alt: 'Yorkshire Terrier on roof', 
    span: 'col-span-1' 
  },
  { 
    src: 'https://picsum.photos/seed/catboard/800/400', 
    alt: 'Catboard longboard', 
    span: 'md:col-span-2' // Wide image
  },
  { 
    src: 'https://picsum.photos/seed/angel-sketch/600/600', 
    alt: 'Pencil sketch of angel', 
    span: 'col-span-1' 
  },
  { 
    src: 'https://picsum.photos/seed/snowboard-legs/1200/600', 
    alt: 'Snowboard overlooking mountain', 
    span: 'md:col-span-3' // Full width footer image
  },
];
