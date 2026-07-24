"use client";

import Link from "next/link";
import { Logo } from "@/components/brand";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { NAV_LINKS, NAV_CTA } from "@/content/navigation";
import { useScrolled } from "@/hooks/useScrolled";
import { cn } from "@/lib/cn";

// ─────────────────────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────────────────────

/**
 * Navbar — sticky site navigation header.
 *
 * Spec (Navbar.md):
 * - 80px height, fixed, full-width, z-50
 * - Transparent at top → glassmorphism after 20px scroll
 * - Left: Logo (hover rotate 3°)
 * - Center: Nav links (Inter 16px/500, primary hover, animated underline)
 * - Right: CTA button
 * - Mobile: Hide nav links, show Logo + CTA only (MobileMenu is Sprint 3)
 */
function Navbar() {
  const scrolled = useScrolled(20);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 h-20 flex items-center transition-all duration-300",
        scrolled
          ? "glass-strong shadow-md"
          : "bg-transparent"
      )}
    >
      <Container>
        <nav
          className="flex items-center justify-between"
          aria-label="Main navigation"
        >
          {/* ── Logo ──────────────────────────────────── */}
          <Link
            href="/"
            className="transition-transform duration-300 hover:rotate-3 focus-visible:rotate-3"
            aria-label="CoreByte Studios — Home"
          >
            <Logo variant="full" theme="dark" priority />
          </Link>

          {/* ── Desktop Nav Links ─────────────────────── */}
          <ul className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "relative font-body text-base font-medium text-text-muted",
                    "transition-colors duration-200 hover:text-primary",
                    // Animated underline
                    "after:absolute after:left-0 after:-bottom-1 after:h-[2px]",
                    "after:w-0 after:bg-primary after:rounded-full",
                    "after:transition-all after:duration-300 after:ease-out",
                    "hover:after:w-full"
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* ── CTA Button ────────────────────────────── */}
          <Link href={NAV_CTA.href}>
            <Button variant="primary" size="sm">
              {NAV_CTA.label}
            </Button>
          </Link>
        </nav>
      </Container>
    </header>
  );
}

Navbar.displayName = "Navbar";

export { Navbar };
