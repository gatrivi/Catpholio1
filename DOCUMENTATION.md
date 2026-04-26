# The Craft of Modern Web Development

Welcome to the "innards" of your new website. This document is designed to help you understand the architectural decisions made here and how you can take it further.

## 1. The Configuration-First Pattern (`src/config.ts`)
Instead of hunting through components to change your name or bio, we've centralized everything in `config.ts`. 
- **Why?** It separates "Data" from "View". This makes the site incredibly easy to maintain.
- **How to use:** Simply update the strings in that file, and the entire site updates instantly.

## 2. The Atomic Utility Pattern (`src/lib/utils.ts`)
We use a function called `cn` (Class Name). 
- **Why?** Tailwind classes can sometimes conflict (e.g., having two different `p-4` and `p-8` on the same element). `twMerge` ensures the last one defined wins, preventing bugs.

## 3. Motion as a First-Class Citizen (`motion/react`)
Animations aren't just "eye candy"; they provide spatial awareness.
- **Initial/Animate:** Defines where an element starts and where it ends.
- **WhileInView:** Triggers animations only when the user scrolls to that section, improving performance and engagement.

## 4. Typography & Spacing
- **Tracking-tighter:** Large headings look more professional when the letters are slightly closer together.
- **Leading-relaxed:** Body text needs room to breathe for better readability.
- **Zinc Palette:** We used the `zinc` scale because it's more neutral and "expensive" looking than standard gray.

## 5. Responsive Design
Notice the use of `md:` and `lg:` prefixes in Tailwind.
- `px-6 md:px-12 lg:px-24`: This creates a fluid horizontal margin that grows with the screen size, keeping your content perfectly centered and readable.

## 6. Personalizing Images
Look for the `img` tags in `Projects.tsx`. They use `picsum.photos` with a `seed`. 
- **Pro Tip:** Replace those URLs with your own hosted images or local assets in `/public`.

---

Build with intent. Stay authentic.
