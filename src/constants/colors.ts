// ─────────────────────────────────────────────
// CoreByte Studios — Color Palette Reference
//
// These values mirror the CSS custom properties in globals.css.
// Use CSS variables (via Tailwind) in components whenever possible.
// Use these typed values only when raw hex/rgba is needed in JS
// (e.g. Framer Motion inline styles, canvas, SVG attributes).
// ─────────────────────────────────────────────

export const COLORS = {
  // Brand
  primary: "#2563EB",
  primaryHover: "#3b74f5",
  secondary: "#7C3AED",
  accent: "#5b5cf6",

  // Backgrounds
  bg: "#050816",
  surface: "#0d1117",
  surfaceRaised: "#161b22",

  // Text
  text: "#f0f4ff",
  textMuted: "#8892a4",
  textSubtle: "#4b5563",

  // Borders
  border: "rgba(255, 255, 255, 0.08)",
  borderStrong: "rgba(255, 255, 255, 0.16)",

  // Semantic
  success: "#22c55e",
  warning: "#f59e0b",
  error: "#ef4444",
} as const;

export type ColorKey = keyof typeof COLORS;
