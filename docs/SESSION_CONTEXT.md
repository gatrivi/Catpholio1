# Session Context (reference only)

> Agents: read `AGENTS.md` first. Open this file only when you need history.

## Goal
Turn Catpholio into a hiring asset. CatIntAssist is the flagship proof-of-work project for a solo developer with no formal dev job history.

## Live URLs
- Portfolio/test/prod: `https://devtrivi.gatrivi.com`
- Principal branch: `main` (Vercel auto-deploys on push)
- Other live projects: `rosario.gatrivi.com`, `cathedral.gatrivi.com`

## Deploy rule
Push to `main`. Vercel updates deploy + custom domain. No separate staging; production and test are the same.

## Work completed (2026-06-05)
1. Flagship proof view for CatIntAssist (`proof` data model, featured card, gallery proof panel)
2. Hiring roadmap → `HIRING_PATH_CATINTASSIST.md`
3. Social preview fixes (OG/Twitter meta, absolute URLs, `og-share.jpg`)
4. Image quality fixes:
   - Featured card stopped stretching small screenshots to content height
   - `catintassist-hero.jpg` for portfolio card
   - `catintassist-thumb.png` canonical thumbnail source (= live dual-column UI)
   - Removed broken gallery paths (`catintassist-feature-7.png` … `16` never existed)

## Key files
| File | Purpose |
|------|---------|
| `src/data/portfolio.ts` | All portfolio content, CatIntAssist flagship data |
| `src/components/ProjectCard.tsx` | Featured + standard project cards |
| `src/components/ProjectGallery.tsx` | Proof/details modal |
| `index.html` | OG + Twitter Card meta |
| `public/catintassist-thumb.png` | Canonical thumbnail screenshot |
| `public/catintassist-hero.jpg` | Featured card hero |
| `public/og-share.jpg` | Social share image |

## Image rules
- Never stretch low-res screenshots to match text column height
- Featured card: fixed aspect, `object-contain`, `lg:self-start`
- OG image: absolute URL, text in top safe zone, cache-bust with `?v=N`
- Thumbnail source: `catintassist-thumb.png` (dual-column live session UI)

## Open items
- Replace `20XX — Present` in Medical Interpreter experience
- Add CV PDF download when ready
- Dedicated `/projects/catintassist` case study route
- CatIntAssist repo README polish
- User may supply updated CatIntAssist copy/material

## GitHub
- Repo: `gatrivi/Catpholio1`
- User: `gatrivi` (legacy: `devtrivi`)
- Email: `devtrivi@zengasoft.com`
