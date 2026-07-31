# Project Log

## Sprint 5.4 — Image Optimization Pass
**Files modified:**
- `src/components/brand/Logo/Logo.tsx`
- `src/components/brand/BrandMark/BrandMark.tsx`
- `src/components/sections/Technologies/Technologies.tsx`
- `src/components/sections/FAQ/FAQ.tsx`
- `src/components/sections/WhyCoreByte/WhyCoreByte.tsx`

**Warnings resolved:**
- Next.js Image component aspect ratio and invalid style warnings (replaced `style` with `className="w-* h-auto"` preserving aspect ratio).
- Added `priority` property for the hero brand logo (`/images/brand/Full-logo-white-nobg.png`) which acts as the LCP element.
- ESLint: Unused variables/imports (`useState`, `Heading`, `SectionHeader`, `index`).
- ESLint: Unescaped entities (`'` changed to `&apos;`).

**Remaining Next.js warnings:**
- None. Build completed successfully.
