# Swati Mohanty — Portfolio

Personal portfolio site for **Swati Mohanty**, Full Stack Developer. Single-page, dark-themed, with 3D animations, smooth scroll, and parallax effects.

**Live sections:** Hero → About → Skills → Projects → Experience → Open Source → Contact

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| UI | React 19, TypeScript |
| Styling | Tailwind CSS v4, shadcn/ui (base-nova) |
| Animation | Framer Motion |
| 3D | React Three Fiber, Three.js, @react-three/drei |
| Smooth Scroll | Lenis |
| Background FX | OGL (Silk, Threads, Aurora, Particles), custom WebGL |
| Icons | Lucide React |
| Fonts | Geist Sans, Geist Mono (next/font) |

---

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build    # production build
npm run start    # serve production build
npm run lint     # ESLint
```

---

## Project Structure

```
app/
  layout.tsx        # Root layout — applies fonts, dark class, wraps in SmoothScroll
  page.tsx          # Single route — composes all sections
  globals.css       # Tailwind v4 config + CSS custom properties (palette, theme tokens)

components/
  sections/         # One component per portfolio section
  ui/               # FloatingNav, ScrollProgress, SmoothScroll, shadcn primitives
  three/            # Three.js / R3F components (SkillsConstellation)
  backgrounds/      # Animated background effects (Aurora, Galaxy, Hyperspeed, Particles, Silk, Threads)

data/
  portfolio.ts      # All portfolio content — single source of truth

lib/
  utils.ts          # cn() utility (clsx + tailwind-merge)
```

---

## Updating Content

**All portfolio content lives in `data/portfolio.ts`.** Edit only that file to update bio, skills, projects, experience, open source contributions, or contact details.

Exported objects/arrays:
- `hero` — name, role, tagline
- `about` — bio, traits, location, availability
- `skills: Skill[]` — name, category (`frontend` | `backend` | `infra` | `tools`), level (0–1)
- `projects: Project[]` — title, description, tech, links, highlight
- `experience: Experience[]` — company, role, period, impact, type
- `openSource: OpenSourceContrib[]` — repo, description, link, type
- `contact` — headline, subline, social links

---

## Key Design Decisions

**Dark-only** — `<html>` always carries the `dark` class; no light mode toggle exists.

**Tailwind v4 config** — there is no `tailwind.config.*` file. All theme customization is inside `app/globals.css` via `@theme inline {}`. The portfolio palette is defined as CSS custom properties (`--bg-deep`, `--accent-primary`, `--accent-secondary`, `--accent-glow`, `--text-primary`, `--text-muted`) and used directly in inline styles throughout components.

**Smooth scroll** — Lenis instance lives in `components/ui/SmoothScroll.tsx`, initialized once in the root layout. All `scrollIntoView` calls in `FloatingNav` coexist with it.

**3D Skills section** — `SkillsConstellation` distributes skill nodes across a sphere using a golden-angle Fibonacci spiral, draws proximity edges between nodes closer than 1.8 units, and auto-rotates. Node size and emissive intensity encode skill level.

**Floating navigation** — right-side vertical dot nav with `IntersectionObserver` (40% threshold) for active-section tracking. Hover shows a tooltip label.

---

## Deployment

Deployed on [Vercel](https://vercel.com). Push to `main` triggers automatic deployment.

```bash
# Manual preview build check before pushing
npm run build
```
