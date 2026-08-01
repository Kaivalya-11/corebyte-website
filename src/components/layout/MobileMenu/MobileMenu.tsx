"use client";

import { useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight01Icon, Cancel01Icon } from "hugeicons-react";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/brand";
import { NAV_LINKS } from "@/content/navigation";
import { cn } from "@/lib/cn";

export interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  activeSection: string;
}

/**
 * MobileMenu — premium full-overlay mobile navigation.
 *
 * Implements accessible modal behavior:
 * - Locks body scroll when active
 * - Listens for ESC key to close
 * - Smooth Framer Motion entrance & exit transitions
 * - Staggered link animation
 */
export function MobileMenu({ isOpen, onClose, activeSection }: MobileMenuProps) {
  // Lock body scroll & listen for ESC key
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="fixed inset-0 z-50 flex flex-col bg-bg/95 backdrop-blur-2xl text-text p-6 lg:hidden overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Menu"
        >
          {/* Header Row */}
          <div className="flex items-center justify-between pb-6 border-b border-white/10">
            <Link href="/" onClick={onClose} aria-label="CoreByte Studios — Home">
              <Logo variant="full" theme="dark" priority />
            </Link>
            <button
              onClick={onClose}
              className="p-2.5 rounded-full bg-white/5 border border-white/10 text-text-muted hover:text-text hover:bg-white/10 transition-colors focus-visible:outline-2 focus-visible:outline-primary"
              aria-label="Close navigation menu"
            >
              <Cancel01Icon className="w-5 h-5" />
            </button>
          </div>

          {/* Nav Links Stack */}
          <div className="flex-1 flex flex-col justify-center py-8 space-y-3">
            {NAV_LINKS.map((link, idx) => {
              const linkSectionId = link.href.replace("#", "");
              const isActive =
                (link.href === "/" && !activeSection) ||
                (linkSectionId && activeSection === linkSectionId);

              return (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * idx, duration: 0.2 }}
                >
                  <Link
                    href={link.href}
                    onClick={onClose}
                    className={cn(
                      "block text-2xl font-heading font-semibold py-2.5 px-4 rounded-xl transition-all duration-200",
                      isActive
                        ? "bg-primary/15 text-primary border border-primary/20"
                        : "text-text-muted hover:text-text hover:bg-white/5"
                    )}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {/* Bottom Action Area */}
          <div className="pt-6 border-t border-white/10 space-y-4">
            <Link href="#contact" onClick={onClose} className="block w-full">
              <Button variant="primary" size="lg" className="w-full justify-between text-base py-4">
                <span>Start Project</span>
                <ArrowRight01Icon className="w-4 h-4" />
              </Button>
            </Link>
            <p className="text-xs text-text-muted text-center font-body">
              CoreByte Studios · Design. Develop. Scale.
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
