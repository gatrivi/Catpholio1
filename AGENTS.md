# AGENTS.md — read this first

**Single source of truth for all agents** (Cursor, Kimi, Gemini, etc.).  
Other instruction files defer here.

## Project
- **Name:** Catpholio (`gatrivi` developer portfolio)
- **Repo:** `gatrivi/Catpholio1`
- **User:** `gatrivi` (GitHub/X/LinkedIn; legacy GH: `devtrivi`)
- **Goal:** Get hired ASAP by proving real production work via CatIntAssist flagship case study

## Deploy
- **Branch:** `main` (principal branch for this repo)
- **Host:** Vercel — push to `main` auto-deploys
- **Domain:** `https://devtrivi.gatrivi.com` (production = test; sole dev)
- **Before push:** `npm run lint` && `npm run build`

## Stack
- React 19 + Vite 6 + TypeScript + Tailwind v4 + Framer Motion (`motion/react`)
- Content in `src/data/*.ts`, re-exported via `src/content.ts`
- Routes: `/` portfolio, `/store` app store, `/store/digital-menu` legacy product page

## Flagship project: CatIntAssist
- First entry in `FEATURED_PROJECTS` (`src/data/portfolio.ts`)
- Proof-of-work fields: `proof`, `workflow`, `features`, `badges`
- Thumbnail source: `public/catintassist-thumb.png`
- Hero image: `public/catintassist-hero.jpg`
- Social preview: `public/og-share.jpg` (meta in `index.html`, absolute URLs)

## Coding rules
1. Minimal scope — smallest correct diff
2. Match existing conventions in surrounding code
3. Content changes → edit `src/data/portfolio.ts`, not components
4. Never stretch small images to fill tall layouts
5. OG/Twitter images need absolute URLs + safe-zone text

## Reference docs (open only when needed)
| File | Contents |
|------|----------|
| `docs/SESSION_CONTEXT.md` | Session history, file map, open items |
| `HIRING_PATH_CATINTASSIST.md` | Hiring strategy around CatIntAssist |
| `PROJECT_AUDIT.md` | Full repo audit |
| `APP_STATUS.md` | Multi-view app overview |

## Data still to fill
- `EXPERIENCE` → replace `20XX — Present` with real dates
- `CONTACT.formEndpoint` → Formspree/Web3Forms if wanted
- CV PDF link when ready

## Last updated
2026-06-05 — flagship proof view, image quality fix, unified agent instructions
