# CoreByte Studios

## Project Overview

CoreByte Studios is a premium software studio website built with:

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion

The goal is to create a world-class, modern, responsive, and scalable website.

---

## Coding Standards

- Use TypeScript everywhere.
- Use functional React components.
- Prefer reusable components.
- Keep components small and modular.
- Avoid duplicate code.
- Use Tailwind CSS for styling.
- Use Framer Motion for animations.
- Use accessibility best practices.
- Follow clean architecture.

---

## Design Principles

- Dark-first UI
- Premium look and feel
- Spacious layouts
- Smooth animations
- Consistent spacing
- Minimal but modern

---

## Folder Rules

### components/ui/
Primitive UI atoms. Small, single-purpose, fully reusable.
Examples: Button, Badge, Card, Heading, Container, GlassCard, Section.
Rules:
- No business logic.
- No hardcoded content.
- Always accept props and forward className.
- Every component exports from its own index.ts.

### components/layout/
Structural shell components that wrap every page.
Contains: Navbar, Footer, MobileMenu.
Rules:
- Only components that appear on every page.
- May read from src/content/ for navigation links and socials.
- Do not put one-off section layouts here.

### components/sections/
Homepage section assemblies. Each folder is one section.
Examples: Hero, Services, Technologies, Portfolio, Process, WhyCoreByte, FAQ, CTA.
Rules:
- Sections are composed from components/ui/ primitives.
- Sections read their data from src/content/.
- Sections are not reused across pages — they are page-specific assemblies.

### components/shared/
Cross-page components that are not layout and not atomic UI.
Use this folder for components that appear on more than one page
but are not universal enough to belong in layout/.
Examples: SectionHeader, AnimatedText, PageHero, Breadcrumb.
Rules:
- Must be used on at least two different pages to justify living here.
- If a component is only used on the homepage, it belongs in sections/.
- If it is a pure primitive, it belongs in ui/.

### components/animations/
Framer Motion wrapper components that add animation behaviour to any child.
Use this folder for reusable animation shells — not for variants or constants.
Examples: FadeUp, StaggerChildren, CountUp, ScrollReveal, ParallaxLayer.
Rules:
- Each component wraps children with a Framer Motion motion element.
- Animation variants are imported from src/constants/animation.ts.
- All wrappers must respect useReducedMotion() — no exceptions.
- Do not hardcode durations or easings; use the DURATION and EASE constants.

### content/
Single source of truth for all static site copy and structured data.
Files: navigation.ts, services.ts, portfolio.ts, faq.ts, process.ts,
       technologies.ts, socials.ts, index.ts.
Rules:
- All content is strongly typed via src/types/content.d.ts.
- Components never hardcode strings that belong here.
- This folder replaces src/data/ (deleted Sprint 2 Phase 1).

### constants/
Raw typed primitive values — not structured content objects.
Files: colors.ts (hex palette), animation.ts (Framer variants + DURATION/EASE).
Rules:
- No strings that are user-visible copy.
- No React components or JSX.
- Values here mirror the CSS custom properties in globals.css.

### config/
Runtime configuration used by Next.js metadata exports and OG tags.
Files: site.ts (SITE_CONFIG — name, URL, description, email, OG image).
Rules:
- One file only. Do not fragment config across multiple files.
- Values here are operational, not design primitives.

### hooks/
Custom React hooks only.
Examples: useScrolled, useScrollAnimation, useReducedMotion, useMediaQuery.
Rules:
- Each hook is a single file named useXxx.ts.
- No JSX inside hooks.

### lib/
Pure utility functions with no React dependency.
Files: cn.ts (clsx + tailwind-merge), metadata.ts (Next.js metadata helper).
Rules:
- Functions only — no classes, no constants, no types.
- Must have zero side effects.

### types/
TypeScript type and interface definitions.
Files: content.d.ts (content data shapes), components.d.ts (shared prop types).
Rules:
- No runtime code — declaration files only where possible.
- Types used in more than one file must live here, not be redeclared locally.

### utils/
Miscellaneous helper functions that don't fit in lib/.
Examples: formatDate, truncateText, slugify.
Rules:
- Pure functions only.
- Must be independently testable.

### styles/
Reserved for additional CSS files beyond globals.css.
Currently empty — use only if a module requires CSS that cannot be
expressed as Tailwind utilities or globals.css utility classes.

---

## Animation Rules

Animations should feel:

- Fast
- Smooth
- Purposeful

Avoid flashy effects.

---

## Component Rules

Every component should:

- Be reusable
- Accept props
- Be typed
- Be responsive

---

## Before Writing Code

Always:

1. Reuse existing components.
2. Check if a utility already exists.
3. Follow the Design System.
4. Keep performance in mind.

Never create duplicate UI patterns.