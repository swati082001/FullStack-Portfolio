# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
npm run dev        # dev server (localhost:3000)
npm run build      # production build
npm run lint       # ESLint
```

No test suite configured.

## Stack

- **Next.js 16** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS v4** — config lives entirely in `app/globals.css` via `@theme inline {}`, no `tailwind.config.*` file
- **shadcn/ui** (`style: base-nova`) — components added via `npx shadcn add <component>`
- **Framer Motion** — animations on section components
- **Lenis** — smooth scroll, wrapped globally in `components/ui/SmoothScroll.tsx`
- **React Three Fiber / Three.js / @react-three/drei** — 3D canvas in `components/three/`

## Architecture

Single-page portfolio. One route (`app/page.tsx`) composes all sections in order.

**Data layer** — `data/portfolio.ts` is the single source of truth for all portfolio content (bio, skills, projects, experience, open source, contact). All section components import from here. To update content, edit only this file.

**Section components** (`components/sections/`) — each maps directly to a named portfolio section. They pull typed data from `data/portfolio.ts`.

**UI components** (`components/ui/`) — `FloatingNav`, `ScrollProgress`, `SmoothScroll`, and shadcn primitives. `SmoothScroll` wraps the entire layout in `app/layout.tsx`.

**3D components** (`components/three/`) — all Three.js work. `SkillsConstellation` renders skills as an interactive 3D sphere; `"use client"` required.

**Background components** (`components/backgrounds/`) — decorative animated backgrounds (Aurora, Galaxy, Hyperspeed, etc.), all client components.

## CSS conventions

Custom portfolio palette defined as CSS vars in `:root` inside `globals.css`:
- `--bg-deep`, `--accent-primary` (`#6366f1`), `--accent-secondary` (`#a855f7`), `--accent-glow`, `--text-primary`, `--text-muted`

Dark mode is forced — `<html>` always has class `dark`. No light mode.

## Path aliases

`@/` maps to project root (configured in `tsconfig.json`).
