// ─────────────────────────────────────────────
// CoreByte Studios — Navigation Content
// Source: Homepage Blueprint.md / Navbar spec
// ─────────────────────────────────────────────

import type { NavLink } from "@/types/content";

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const NAV_CTA: NavLink = {
  label: "Start Your Project",
  href: "#contact",
};
