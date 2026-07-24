import Link from "next/link";
import { Code2, Users, Globe, Mail } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Logo } from "@/components/brand";
import { Container } from "@/components/ui/Container";
import { NAV_LINKS } from "@/content/navigation";
import { SERVICES } from "@/content/services";
import { SOCIALS } from "@/content/socials";
import { cn } from "@/lib/cn";

// ─────────────────────────────────────────────────────────────
// Icon resolver for social links
// ─────────────────────────────────────────────────────────────

const SOCIAL_ICON_MAP: Record<string, LucideIcon> = {
  Github: Code2,
  Linkedin: Users,
  Instagram: Globe,
  Mail,
};

// ─────────────────────────────────────────────────────────────
// Footer Column Component
// ─────────────────────────────────────────────────────────────

function FooterColumn({
  title,
  children,
  className,
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col gap-4", className)}>
      <h3 className="font-heading font-semibold text-xs text-text/90 tracking-wider uppercase">
        {title}
      </h3>
      {children}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────────────────────

/**
 * Footer — site-wide footer component (Creative Director Refinement).
 *
 * Story Question: "How can you reach us?"
 * Narrative Role: Act V — Structural Bedrock
 *
 * Refined layout properties:
 * - Logo sizing: crisp 160px width proportion
 * - Grid column gap: gap-10 sm:gap-12 lg:gap-16 py-16 lg:py-24
 * - Typography hierarchy: text-xs uppercase headers, text-sm links
 * - Bottom bar: py-6 sm:py-8 with subtle border-t
 */
function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface border-t border-border">
      {/* ── Main Footer Grid ──────────────────────── */}
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12 lg:gap-16 py-16 lg:py-24">
          {/* Brand Column */}
          <div className="sm:col-span-2 lg:col-span-1 flex flex-col gap-5">
            <Link href="/" aria-label="CoreByte Studios — Home">
              <Logo variant="full" theme="dark" width={160} />
            </Link>
            <p className="text-text-muted text-sm leading-relaxed font-body max-w-xs">
              A premium software studio crafting modern websites, custom
              applications, and AI-powered digital solutions.
            </p>
          </div>

          {/* Navigation Column */}
          <FooterColumn title="Navigation">
            <ul className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-muted font-body transition-colors duration-200 hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </FooterColumn>

          {/* Services Column */}
          <FooterColumn title="Services">
            <ul className="flex flex-col gap-3">
              {SERVICES.map((service) => (
                <li key={service.id}>
                  <Link
                    href={`#${service.id}`}
                    className="text-sm text-text-muted font-body transition-colors duration-200 hover:text-primary"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </FooterColumn>

          {/* Contact Column */}
          <FooterColumn title="Contact">
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href="mailto:hello@corebytestudios.com"
                  className="text-sm text-text-muted font-body transition-colors duration-200 hover:text-primary"
                >
                  hello@corebytestudios.com
                </a>
              </li>
              <li>
                <p className="text-sm text-text-muted font-body">
                  Available for new projects
                </p>
              </li>
            </ul>
          </FooterColumn>
        </div>
      </Container>

      {/* ── Bottom Bar ────────────────────────────── */}
      <div className="border-t border-border/80">
        <Container>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-6 sm:py-8">
            {/* Copyright */}
            <p className="text-xs text-text-subtle font-body">
              © {currentYear} CoreByte Studios. All rights reserved.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-5">
              {SOCIALS.map((social) => {
                const IconComponent = SOCIAL_ICON_MAP[social.icon];
                if (!IconComponent) return null;

                return (
                  <a
                    key={social.id}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="text-text-muted transition-colors duration-200 hover:text-primary"
                  >
                    <IconComponent className="w-4.5 h-4.5" />
                  </a>
                );
              })}
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}

Footer.displayName = "Footer";

export { Footer };
