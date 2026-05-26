# Catpholio1 — Complete Project Audit

> Generated: 2026-05-25 | Branch: `main`

---

## 1. Project Identity & Purpose

This repo serves **dual purposes** that are currently conflicting:

1. **Primary (intended):** A developer portfolio for `gatrivi` targeting recruiters/clients. Route `/`.
2. **Secondary (legacy):** A Spanish-language landing page for "Carta Digital" (digital menu SaaS for restaurants). Route `/store/digital-menu`.
3. **Tertiary:** An "App Store" page listing digital products. Route `/store`.

**The conflict:** `index.html` meta tags, `package.json` name, and several components are still branded for the PyMEs/restaurant business rather than the dev portfolio.

---

## 2. Tech Stack

| Layer | Technology | Version |
|-------|-----------|---------|
| Framework | React | 19.0.0 |
| Bundler | Vite | 6.2.0 |
| Language | TypeScript | ~5.8.2 |
| Styling | Tailwind CSS | 4.1.14 |
| Animation | Framer Motion | 12.23.24 (package: `motion`) |
| Icons | Lucide React | 0.546.0 |
| Router | React Router DOM | 7.15.1 |
| Build Plugin | @tailwindcss/vite | 4.1.14 |

### Build Config (`vite.config.ts`)
- Plugins: `react()`, `tailwindcss()`
- Alias: `@/` → project root
- Defines `process.env.GEMINI_API_KEY` from `.env`
- HMR disabled when `DISABLE_HMR=true`

### TypeScript Config (`tsconfig.json`)
- Target: ES2022
- JSX: `react-jsx`
- Module resolution: `bundler`
- `noEmit: true`
- Paths: `@/*` maps to `./*`

---

## 3. File Structure

```
src/
├── components/
│   ├── Contact.tsx          # Digital-menu contact section (hardcoded to DIGITAL_MENU_CONTENT)
│   ├── Footer.tsx           # Digital-menu footer (hardcoded to DIGITAL_MENU_CONTENT)
│   ├── Hero.tsx             # Digital-menu hero (hardcoded to DIGITAL_MENU_CONTENT)
│   ├── HowItWorks.tsx       # Digital-menu 4-step process
│   ├── Navbar.tsx           # Universal navbar; adapts brand/nav based on route
│   ├── PainPoints.tsx       # Digital-menu pain points grid
│   ├── Pricing.tsx          # Digital-menu pricing card
│   └── WhatsAppFloat.tsx    # Fixed WhatsApp FAB
├── data/
│   ├── app-store.ts         # App Store product listings
│   ├── digital-menu.ts      # Full content for /store/digital-menu
│   └── portfolio.ts         # Full content for /
├── pages/
│   ├── AppStore.tsx         # /store
│   ├── DigitalMenu.tsx      # /store/digital-menu
│   └── Portfolio.tsx        # /
├── App.tsx                  # Router + layout + scroll-to-top
├── content.ts               # Central re-export hub
├── index.css                # Tailwind v4 theme + fonts
└── main.tsx                 # React root with StrictMode

public/
├── flavor/                  # Personal photos (gallery assets)
├── catintassist*.png        # 6 CatIntAssist screenshots
├── catreader*.png           # 3 CatReader screenshots
├── tmm-store*.png/jpg       # 7 Tmm Store screenshots
├── cathedral.png            # Cathedral project asset
├── rosario1.png             # Rosario project asset
├── trufapp*.png             # Trufapp assets
├── devtrivi-profile.jpg     # OG image / profile pic
├── self.jpg                 # Portfolio hero background
└── ...misc personal photos
```

---

## 4. Routing

| Route | Page Component | Purpose |
|-------|---------------|---------|
| `/` | `Portfolio` | Dev portfolio (recruiter-facing) |
| `/store` | `AppStore` | Product listings |
| `/store/digital-menu` | `DigitalMenu` | Restaurant SaaS landing page |

**Navigation (`MAIN_NAV`):**
- Portfolio → `/`
- App Store → `/store`

**Navbar behavior:**
- On `/store/digital-menu`: uses `DIGITAL_MENU_CONTENT.NAV` + CTA button
- Everywhere else: uses `MAIN_NAV`
- Scroll-triggered blur backdrop
- Full-screen mobile overlay

---

## 5. Data Architecture

All content is centralized in `src/data/*.ts` and re-exported via `src/content.ts`.

### `portfolio.ts`
```
PORTFOLIO_CONTENT
├── VERSION: string
├── BRAND
│   ├── name: "Gatrivi"
│   ├── title: "Software Engineer & Builder"
│   ├── bio: string
│   ├── heroHeadline: Array<{ text, highlight }>
│   ├── heroBackground: "/self.jpg"
│   ├── profilePicture: "/devtrivi-profile.jpg"
│   └── socials: { github, linkedin, instagram, email }
├── PROJECTS: Array<{
│   id, title, description, image, tags[],
│   demo?, repo?, highlights[]
│ }>
└── GALLERY: Array<{ src, span }>
```

**Current Projects (3):**
1. `catintassist` — `/catintassist.png`
2. `catreader` — `/catreader0.png`
3. `tmm-store` — `/tmm-store0.png`

### `app-store.ts`
```
APP_STORE_CONTENT
├── VERSION: "1.0.0-store"
├── TITLE: "App Store"
├── SUBTITLE: string
└── APPS: Array<{ id, name, description, image, price, link }>
```

**Current Apps (2 placeholders):**
1. `digital-menu` — "Carta Digital" — $20.000/mo
2. `pymes-manager` — "Pymes Manager" — Coming Soon

### `digital-menu.ts`
```
DIGITAL_MENU_CONTENT
├── VERSION: "1.2.0-carta"
├── NAV: [{ label, href }]
├── BRAND: { name, title, bio, heroHeadline[], heroBackground, profilePicture, whatsapp, whatsappMessage, socials, cta }
├── SECTIONS: { painPoints, howItWorks, pricing, contact }
├── PAIN_POINTS: [{ text, emoji }]
├── HOW_IT_WORKS: [{ step, title, description, icon }]
├── PRICING: { plan: { name, price, period, annualNote, description, features[], cta, promo } }
├── CONTACT: { headline, subheadline, email, formEndpoint, calendlyLink }
└── UI: { pricing, footer, contact }
```

---

## 6. Components Deep Dive

### `Navbar.tsx` ✅ Functional
- Route-aware brand switching
- Scroll state for glassmorphism
- Mobile hamburger → full-screen overlay
- Imports: `MAIN_NAV`, `PORTFOLIO_CONTENT`, `DIGITAL_MENU_CONTENT`

### `Portfolio.tsx` ⚠️ Partial
**Sections present:**
1. **Hero** — Two-column: text (headline, bio, social icons) + profile image
2. **Featured Projects** — 2-col grid of project cards with image, title, description, highlights, tags, repo/demo buttons
3. **Snapshots (Gallery)** — 4-col masonry-ish grid

**Sections MISSING (referenced in AGENTS.md but not implemented):**
- ❌ Skills grid
- ❌ Experience timeline
- ❌ Contact form
- ❌ Footer on this page (global Footer renders instead)

### `DigitalMenu.tsx` ✅ Functional
Assembles: Hero → PainPoints → HowItWorks → Pricing → Contact → WhatsAppFloat

### `AppStore.tsx` ⚠️ Placeholder
- Grid of app cards with image, name, price, description
- Links to `/store/digital-menu`
- Only 2 apps, both using Tmm Store images

### `Footer.tsx` ❌ Broken on Portfolio
- **Always** renders `DIGITAL_MENU_CONTENT.BRAND.name` + digital-menu tagline
- On `/` it says "Carta digital para restaurantes y locales de barrio. Sin comisiones." — wrong context

### `Contact.tsx` ❌ Digital-menu only
- Hardcoded headline: "Tu carta lista mañana mismo."
- WhatsApp-centric CTA
- Renders only on `/store/digital-menu` route, but content is restaurant-focused

### `Hero.tsx` / `PainPoints.tsx` / `HowItWorks.tsx` / `Pricing.tsx` / `WhatsAppFloat.tsx`
- All hardcoded to `DIGITAL_MENU_CONTENT`
- Only relevant for `/store/digital-menu`

---

## 7. Assets Inventory

### Portfolio-relevant images
| File | Used By | Status |
|------|---------|--------|
| `/self.jpg` | Portfolio hero | ✅ |
| `/devtrivi-profile.jpg` | OG meta, profile pic | ✅ |
| `/catintassist.png` | CatIntAssist project | ✅ |
| `/catreader0.png` | CatReader project | ✅ |
| `/tmm-store0.png` | Tmm Store project | ✅ |
| `/cathedral.png` | Unused | 🔄 |
| `/rosario1.png` | Unused | 🔄 |

### Digital-menu images
| File | Used By | Status |
|------|---------|--------|
| `/tmm-store0.png` | Hero mockup, AppStore | ✅ |
| `/20180528_192136.jpg` | DigitalMenu hero bg | ✅ |

### Spare screenshots available for future feature galleries
- `catintassist-dashboard.png`, `catintassist1-4.png`, `catintassist-habit-pills.png`
- `catreader1.png`, `catreader-cover-select.png`
- `tmm-store-dashboard1-4.jpg`, `tmm-store1.png`, `tmm-menu-editor.png`

---

## 8. Known Issues

### 🔴 Critical / Wrong Context
1. **`index.html` meta is Spanish/PyMEs focused**
   - Title: "Gatrivi | Soluciones Digitales para PyMEs"
   - Description: Spanish restaurant-tech copy
   - Should be English dev-portfolio copy

2. **`package.json` name mismatch**
   - `"name": "gatrivi-pymes-castellano"`
   - Should reflect portfolio identity

3. **`Footer.tsx` always uses digital-menu branding**
   - Shows restaurant tagline on portfolio page
   - Needs route-aware content switch or separate footer

4. **`App.tsx` TypeScript error**
   - `key` prop on `<Routes>` is invalid TS
   - `tsc --noEmit` fails (Vite build passes because it doesn't type-check)
   - Fix: move `key` to wrapper or use `useLocation` pattern correctly

### 🟡 Medium
5. **AGENTS.md is outdated**
   - References `src/content.ts` `EXPERIENCE`, `SKILLS`, `CONTACT` — these don't exist in `content.ts`
   - References section order "Hero → Skills → Experience → Projects → Gallery → Contact → Footer" that doesn't match current `Portfolio.tsx`
   - Mentions `BRAND.cv` which doesn't exist in `portfolio.ts`

6. **README is outdated**
   - Lists old projects ("Challenge Zero", "Cat Monastery", etc.)
   - Says "Cat Reader (coming soon)" — it's already live

7. **`Portfolio.tsx` missing sections**
   - No Skills section
   - No Experience section
   - No Contact section
   - Only Hero + Projects + Gallery

8. **`AppStore` is low-value**
   - Only 2 placeholder products
   - Uses same images as projects
   - "View Product" text is hardcoded English while rest of site has Spanish elements

### 🟢 Low / Polish
9. **WhatsApp number hardcoded in multiple places**
   - `digital-menu.ts` → `BRAND.whatsapp`
   - Used in Pricing, Contact, WhatsAppFloat

10. **Gallery in Portfolio uses personal photos**
    - May not be recruiter-appropriate without curation

---

## 9. What's Working Well

- ✅ Vite build succeeds (`npm run build` passes)
- ✅ Tailwind v4 + `@tailwindcss/vite` integration is clean
- ✅ Framer Motion page transitions (`AnimatePresence`) work
- ✅ Navbar route adaptation works
- ✅ Project cards with dual links (repo + demo) render correctly
- ✅ All 3 restored projects have complete data + highlights + images
- ✅ Responsive grid layouts (mobile → desktop)
- ✅ Dark zinc aesthetic is consistent across pages

---

## 10. Recommended Next Actions

### Immediate (this session)
1. **Fix `index.html` meta** — switch to English dev-portfolio copy
2. **Fix `Footer.tsx`** — make it route-aware or create a portfolio footer
3. **Fix `App.tsx` TS error** — move `key` off `<Routes>`
4. **Update `package.json` name**

### Short-term
5. **Restore missing Portfolio sections** — Skills, Experience, Contact
   - Add data to `portfolio.ts`
   - Build components or inline them in `Portfolio.tsx`
6. **Update README**
7. **Update AGENTS.md** to reflect current reality

### Medium-term
8. **Kill or rebuild AppStore** — either populate with real products or remove
9. **Audit DigitalMenu page** — decide if it stays or gets extracted to its own repo
10. **Add feature-screenshot galleries** to project cards (user already mentioned this)

---

## 11. Content Gaps

| Data Field | Exists? | Location |
|-----------|---------|----------|
| `BRAND.cv` | ❌ | AGENTS.md mentions it; not in `portfolio.ts` |
| `EXPERIENCE` array | ❌ | AGENTS.md mentions it; not in `portfolio.ts` |
| `SKILLS` array | ❌ | AGENTS.md mentions it; not in `portfolio.ts` |
| `CONTACT.formEndpoint` | ⚠️ | Exists in `digital-menu.ts` but empty; no portfolio contact form |
| `PORTFOLIO_CONTENT.BRAND.socials.x/twitter` | ❌ | Only github, linkedin, instagram, email |
