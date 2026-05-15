# Catpholio1 - Project Status Overview

## 🚀 Project Vision
**Catpholio1** is a premium, high-performance multi-view application designed for **Gatrivi**. It serves as a unified platform for a **Developer Portfolio** and an **App Store** for digital products (like "Carta Digital"). The site blends a minimalist Brutalist aesthetic with cinematic animations.

---

## 🛠️ Technology Stack
- **Framework:** [React](https://reactjs.org/) (via [Vite](https://vitejs.dev/))
- **Routing:** [React Router DOM](https://reactrouter.com/)
- **Language:** TypeScript
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/) (motion/react)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Architecture:** Multi-view, Configuration-First (data-driven content).

---

## 📦 Core Views

### 1. **Developer Portfolio** (`/`)
- **Hero:** Personal branding and social links.
- **Projects:** Grid of featured work.
- **Gallery:** Bento-style photo collection.

### 2. **App Store** (`/store`)
- **Listing:** Catalog of digital products and solutions.
- **Cards:** Clean product previews with pricing and links.

### 3. **Digital Menu Product Page** (`/store/digital-menu`)
- **Product Landing:** Full feature set for the "Carta Digital" solution.
- **Sections:** Pain Points, How It Works, Pricing, and Contact.

---

## 📄 File Structure
```text
/
├── src/
│   ├── App.tsx         # Routing & Global Layout
│   ├── content.ts      # Main content exports
│   ├── data/           # View-specific configuration files
│   │   ├── portfolio.ts
│   │   ├── app-store.ts
│   │   └── digital-menu.ts
│   ├── pages/          # View components
│   │   ├── Portfolio.tsx
│   │   ├── AppStore.tsx
│   │   └── DigitalMenu.tsx
│   ├── components/     # Shared & Product-specific UI Building Blocks
│   └── lib/            # Utilities
├── public/             # Static assets
└── GEMINI.md           # System Instructions & Versioning
```

---

## ✅ Current State
- [x] Multi-view routing established.
- [x] Developer Portfolio view implemented.
- [x] App Store catalog implemented.
- [x] Digital Menu landing page fully functional.
- [x] Dynamic Navbar (context-aware navigation).
- [x] Versioning (v2.0.0-multi) visible in UI.
- [x] Vercel-ready build verified.
