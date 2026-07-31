# ADR-002: UI Design System Standardization

## Status
Accepted

## Context
As the CoreByte Studios website codebase grows, maintaining a strictly typed and standardized design system is critical for preventing tech debt and UI inconsistencies. The initial UI primitives lacked `forwardRef` integration and had loose structural guidelines.

## Decision
We are standardizing all `src/components/ui` primitive components under the following rigorous rules:

### 1. Ref Forwarding is Mandatory
All UI components **must** be wrapped in `React.forwardRef`.
- **Why?** This is an industry standard (e.g., Radix UI, Headless UI, shadcn/ui). It ensures UI primitives can be seamlessly animated by libraries like Framer Motion, wrapped by tooltips, and accessed by focus management systems.

### 2. Naming Conventions
- **Component Folders:** `PascalCase` (e.g., `GlassCard`, not `Glasscard`).
- **Component Files:** `PascalCase` (e.g., `GlassCard.tsx`).
- **Export Pattern:** `index.ts` must export the component using named exports only (e.g., `export { Button } from "./Button";`). Default exports are strictly forbidden to aid in reliable automated refactoring and tree-shaking.

### 3. Styling Configuration
- **Tailwind v4 `@layer` directves:**
  - Base resets MUST be wrapped in `@layer base` to prevent overriding Tailwind utility classes.
  - Custom utilities MUST be wrapped in `@layer utilities`.
- **`cn()` Utility:** All components must use the `cn()` utility (`clsx` + `tailwind-merge`) to safely merge internal styles with `className` props from callers, preventing specificity collisions.

### 4. Prop Signatures
- **Base Extension:** Props interfaces must extend the appropriate standard HTML attributes (e.g., `ButtonHTMLAttributes<HTMLButtonElement>`).
- **Polymorphism:** Layout components that dictate structure without tying to semantics (like `Container`) must implement polymorphic type signatures using an `as` prop.

## Consequences
- **Positive:** Smooth interoperability with Framer Motion. Zero specificity bugs. Consistent API surface across the entire team.
- **Negative:** Slightly increased boilerplate for polymorphic components.
