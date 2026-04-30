# Catpholio1 - Project Status Overview

## 🚀 Project Vision
**Catpholio1** is a premium, high-performance portfolio website designed for **Gatrivi**. It blends a minimalist Brutalist aesthetic with cinematic animations and playful "easter eggs." The site is built to be "Configuration-First," making it extremely easy to update content without touching the core UI logic.

---

## 🛠️ Technology Stack
- **Framework:** [React](https://reactjs.org/) (via [Vite](https://vitejs.dev/))
- **Language:** TypeScript
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) (Vanilla CSS approach with utility classes)
- **Animations:** [Framer Motion](https://www.framer.com/motion/) (motion/react)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Architecture:** Component-based, centralized content configuration.

---

## 📦 Core Components & Features

### 1. **Hero Section** (`Hero.tsx`)
- **Visuals:** Cinematic background image with a parallax scroll effect.
- **Profile:** Circular profile picture with hover and click interactions.
- **Dynamic Content:** Displays name, bio, and social links from `content.ts`.
- **Easter Eggs:**
    - Clicking the **Title** toggles between the professional title and a secret "Zen Master" title.
    - Clicking the **Profile Picture** spawns running cat emojis (🐈) across the screen.

### 2. **Projects Section** (`Projects.tsx`)
- **Layout:** A grid of project cards.
- **Details:** Each project features a thumbnail, title, description, and technology tags.
- **Interactions:** Hover effects on cards and links to external project sites.

### 3. **Bento Gallery** (`Gallery.tsx`)
- **Layout:** A responsive "Bento Box" grid of curated images.
- **Dynamic Spans:** Images can occupy multiple columns or rows (defined in `content.ts`) for a modern, asymmetrical look.
- **Visuals:** High-quality imagery from the user's personal collection.

### 4. **Footer** (`Footer.tsx`)
- **Design:** Clean, minimalist exit section with copyright information and secondary links.

---

## 📄 File Structure
```text
/
├── index.html          # Entry HTML
├── src/
│   ├── App.tsx         # Main Application wrapper & layout
│   ├── content.ts      # SINGLE SOURCE OF TRUTH for all site data
│   ├── main.tsx        # React mounting point
│   ├── index.css       # Global styles and Tailwind imports
│   ├── components/     # UI Building Blocks
│   │   ├── Hero.tsx
│   │   ├── Projects.tsx
│   │   ├── Gallery.tsx
│   │   └── Footer.tsx
│   └── lib/
│       └── utils.ts    # Class name merging utility (cn)
├── public/             # Static assets (images, etc.)
└── DOCUMENTATION.md    # Guide for future developers
```

---

## 🎨 Design System
- **Colors:** Primary palette is `zinc` (Zinc-950 background, Zinc-50 text) for an "expensive" dark-mode feel.
- **Typography:** Sans-serif with `tracking-tighter` on headings and `leading-relaxed` on body text.
- **Aesthetics:** "Glassmorphism" touches, subtle radial gradients, and smooth transitions.

---

## ✅ Current State
- [x] Base architecture established.
- [x] All 4 main sections (Hero, Projects, Gallery, Footer) implemented.
- [x] Centralized content management (`content.ts`) functional.
- [x] Responsive design for Mobile, Tablet, and Desktop.
- [x] Interactive elements and animations polished.
