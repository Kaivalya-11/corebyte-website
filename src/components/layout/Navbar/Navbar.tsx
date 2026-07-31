"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Logo } from "@/components/brand";
import { Button } from "@/components/ui/Button";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { NAV_LINKS, NAV_CTA } from "@/content/navigation";
import { useScrolled } from "@/hooks/useScrolled";
import { useActiveSection } from "@/hooks/useActiveSection";
import { cn } from "@/lib/cn";

const SECTION_IDS = ["services", "portfolio", "process", "about", "contact"];

/**
 * CoreByte Studios Floating Navigation Header (Final 10% Polish)
 *
 * Design Refinements:
 * - Desktop Viewport Width: ~88% on desktop (max 88-90%), ~86% on 2xl ultra-wide.
 * - Logo Scaling: Reduced logo width ~9% (152px) with generous breathing room.
 * - Increased Padding & Spacing: `px-6 sm:px-9 lg:px-10`, nav item gap `gap-9 lg:gap-11 xl:gap-14`.
 * - Active Underline: 1.5px thin gradient underline (`primary → accent`), extended slightly beyond text bounds.
 * - Inward-set CTA button with margin buffer.
 * - Full accessibility, keyboard focus states, and mobile drawer support.
 */
function Navbar() {
  const scrolled = useScrolled(20);
  const activeSection = useActiveSection(SECTION_IDS);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <header className="fixed top-4 left-0 right-0 z-50 flex justify-center pointer-events-none px-3 sm:px-4">
        <div
          className={cn(
            "pointer-events-auto w-[94%] sm:w-[90%] lg:w-[88%] 2xl:w-[86%] rounded-full",
            "px-6 sm:px-9 lg:px-10 py-3.5 flex items-center justify-between min-h-[70px]",
            "border transition-all duration-500 ease-out",
            scrolled
              ? "bg-surface/85 backdrop-blur-xl border-white/15 shadow-[0_12px_40px_rgba(0,0,0,0.65)]"
              : "bg-surface/60 backdrop-blur-md border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.3)]"
          )}
        >
          {/* ── Logo with Refined Size & Breathing Room ── */}
          <Link
            href="/"
            className="shrink-0 transition-transform duration-300 hover:rotate-3 focus-visible:rotate-3 focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-4 rounded-lg"
            aria-label="CoreByte Studios — Home"
          >
            <Logo variant="full" theme="dark" priority width={152} />
          </Link>

          {/* ── Desktop Navigation Links ────────────────── */}
          <nav aria-label="Main navigation" className="hidden lg:flex items-center gap-9 lg:gap-11 xl:gap-14">
            {NAV_LINKS.map((link) => {
              const linkSectionId = link.href.replace("#", "");
              const isActive =
                (link.href === "/" && !activeSection) ||
                (linkSectionId && activeSection === linkSectionId);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative font-body text-sm font-medium transition-colors duration-200",
                    isActive ? "text-text" : "text-text-muted hover:text-text",
                    // Thinner, smoother accent gradient underline extending slightly wider than text
                    "after:absolute after:-left-2 after:-right-2 after:-bottom-1.5 after:h-[1.5px]",
                    "after:bg-gradient-to-r after:from-primary after:to-accent after:rounded-full after:transition-all after:duration-300 after:ease-out",
                    isActive ? "after:opacity-100 after:scale-x-100" : "after:opacity-0 after:scale-x-0 hover:after:opacity-100 hover:after:scale-x-100"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* ── Right Actions (Inward-set CTA + Mobile Toggle) ── */}
          <div className="flex items-center gap-4 shrink-0">
            <Link href="#contact" className="hidden sm:inline-flex">
              <Button variant="primary" size="sm" className="px-5 py-2 text-xs lg:text-sm font-semibold shadow-glow/20 hover:-translate-y-0.5 hover:shadow-glow/40 transition-all duration-300">
                {NAV_CTA.label}
              </Button>
            </Link>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-text-muted hover:text-text hover:bg-white/10 transition-colors focus-visible:outline-2 focus-visible:outline-primary"
              aria-label="Open Navigation Menu"
              aria-expanded={mobileOpen}
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <MobileMenu
        isOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
        activeSection={activeSection}
      />
    </>
  );
}

Navbar.displayName = "Navbar";

export { Navbar };
