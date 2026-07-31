# Sprint 6.2 — Motion System Report

## Motion Philosophy

Our motion philosophy adheres to four core principles:
1. **Smooth**: Transitions use a carefully tuned cubic-bezier `[0.25, 0.46, 0.45, 0.94]` for natural acceleration and deceleration.
2. **Fast**: Animations are punchy. We avoid sluggish delays. Core timing uses `200ms` for interactions, `300ms` for standard reveals, and `500ms` for slow structural changes.
3. **Purposeful**: Motion is used to draw attention, indicate interactivity, or establish hierarchy. We avoid animating for the sake of animation (e.g., no dramatic scaling or unnecessary bouncing).
4. **Consistent**: All components consume a unified set of Framer Motion variants, ensuring the entire application feels cohesive.

## Animation Inventory

All reusable variants are centralized in `src/animations/variants.ts`:
- `fadeUp`, `fadeDown`, `fadeLeft`, `fadeRight`
- `scaleIn`, `reveal`
- `staggerContainer`, `staggerItem`

Every variant has a corresponding `*Reduced` counterpart that degrades gracefully to simple opacity fades for accessibility.

## Components Animated & Timing System

- **Hero**: Executes a precise sequence: Navbar → Badge → Headline → Paragraph → Buttons → Trust Row → Browser Mockup → Floating Widgets.
- **Services**: Triggered on scroll using `StaggerChildren`. Cards lift subtly (`-translate-y-1`) with a `shadow-glow` on hover.
- **Why Partner**: Left column enters via `FloatIn` (left), right column triggers a staggered card entrance.
- **Technologies**: Unified `StaggerChildren` heading reveal. Technology pills use a subtle lift and glow hover state without excessive scaling.
- **FAQ**: Radix Accordion was upgraded with `framer-motion` `AnimatePresence`. Heights animate smoothly from `0` to `auto` while content fades in. Chevron rotation is hardware accelerated.
- **CTA**: Viewport reveal via `FadeUp`. Primary button hover now features a gradient shift (`bg-[length:200%_auto]`), 1.02 scale, and enhanced glow.
- **Navbar / Footer**: Link hover states now include CSS-driven animated underlines (`origin-bottom-right` to `origin-bottom-left`), smooth opacity shifts, and subtle logo fades.

## Accessibility Considerations

Accessibility is treated as a first-class citizen. 
The `useReducedMotion` hook automatically intercepts users with OS-level reduced motion preferences (`prefers-reduced-motion: reduce`). 
When enabled, all translational animations (slides, floats, bounces) are disabled, falling back to accessible `200ms` opacity fades.

## Performance Considerations

- **Transform & Opacity**: All heavy animations exclusively use `transform` and `opacity` properties, avoiding layout thrashing.
- **Intersection Observers**: `useInView` triggers animations only when elements enter the viewport, saving CPU cycles on off-screen components.
- **Hardware Acceleration**: The `easeOut` and custom `cubic-bezier` timings are highly optimized for the compositor thread.

## Files Modified
- `src/animations/variants.ts` (NEW)
- `src/animations/index.ts` (NEW)
- `src/constants/animation.ts` (DELETED)
- `src/components/animations/FadeUp/FadeUp.tsx`
- `src/components/animations/FloatIn/FloatIn.tsx`
- `src/components/animations/StaggerChildren/StaggerChildren.tsx`
- `src/components/sections/Hero/Hero.tsx`
- `src/components/sections/Services/Services.tsx`
- `src/components/sections/WhyCoreByte/WhyCoreByte.tsx`
- `src/components/sections/Technologies/Technologies.tsx`
- `src/components/sections/FAQ/FAQ.tsx`
- `src/components/sections/CTA/CTA.tsx`
- `src/components/ui/Button/Button.tsx`
- `src/components/layout/Navbar/Navbar.tsx`
- `src/components/layout/Footer/Footer.tsx`

## Remaining Motion Ideas
- **Page Transitions**: Implement exit animations for full-page route changes when expanding beyond a single-page layout.
- **Mouse Tracking**: Add subtle mouse-tracking spotlight effects to `GlassCard` for ultra-premium hover feedback.
