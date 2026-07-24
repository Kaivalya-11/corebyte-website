"use client";

import {
  Check,
  Globe,
  LayoutDashboard,
  Palette,
  Sparkles,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { GlassCard } from "@/components/ui/Glasscard";
import { Heading } from "@/components/ui/Heading";
import { SectionHeader } from "@/components/shared";
import { StaggerChildren, StaggerItem } from "@/components/animations";
import { SERVICES } from "@/content/services";

// ─────────────────────────────────────────────────────────────
// Icon Resolver
// ─────────────────────────────────────────────────────────────

const SERVICE_ICON_MAP: Record<string, LucideIcon> = {
  Globe,
  LayoutDashboard,
  Palette,
  Sparkles,
};

/**
 * CoreByte Studios Services Section — Creative Director Redesign
 *
 * Story Question: "What do we build?"
 * Narrative Role: Act II — Editorial Gallery of Core Capabilities
 *
 * Visual Craftsmanship:
 * - Generous editorial section padding (py-28 lg:py-36)
 * - Centered, balanced section title stage
 * - 4-column responsive grid with stretch-height card alignment
 * - Ambient card lift, micro-glow borders, and crisp feature checklists
 */
export function Services() {
  return (
    <section id="services" className="relative py-28 lg:py-36 bg-bg text-text">
      {/* Subtle Background Separation Radial Glow */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-primary/5 rounded-full blur-[160px] pointer-events-none -z-10"
      />

      <Container>
        {/* Section Header Stage */}
        <SectionHeader
          eyebrow="Capabilities"
          title="What We Build"
          description="Modern digital solutions crafted for businesses of every size."
          align="center"
          className="mb-0"
        />

        {/* Editorial Layout Offset to Cards Grid (64–80px spacing rhythm) */}
        <div className="mt-16 lg:mt-20">
          <StaggerChildren
            staggerDelay={0.1}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 xl:gap-10 items-stretch"
          >
            {SERVICES.map((service) => {
              const IconComponent = SERVICE_ICON_MAP[service.icon];

              return (
                <StaggerItem key={service.id} className="h-full">
                  <GlassCard
                    hover
                    className="group flex flex-col justify-between p-7 lg:p-8 h-full glow-border transition-all duration-300 hover:-translate-y-2.5 hover:border-primary/40 hover:shadow-[0_20px_40px_rgba(0,0,0,0.6)]"
                  >
                    <div className="space-y-6">
                      {/* Service Icon Container */}
                      <div className="inline-flex items-center justify-center p-3.5 rounded-xl bg-primary/10 text-primary border border-primary/20 shadow-sm transition-all duration-300 group-hover:rotate-6 group-hover:scale-110 group-hover:bg-primary/20">
                        {IconComponent && <IconComponent className="w-6 h-6" />}
                      </div>

                      {/* Service Title */}
                      <Heading level="h3" variant="card" className="group-hover:text-primary transition-colors duration-300">
                        {service.title}
                      </Heading>

                      {/* Service Description */}
                      <p className="text-text-muted text-sm leading-relaxed font-body">
                        {service.description}
                      </p>
                    </div>

                    {/* Feature Checklist */}
                    <div className="pt-6 mt-6 border-t border-white/10 space-y-3">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2.5 text-xs text-text/90 font-body">
                          <div className="p-0.5 rounded-full bg-primary/20 text-primary shrink-0">
                            <Check className="w-3 h-3" />
                          </div>
                          <span className="font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </GlassCard>
                </StaggerItem>
              );
            })}
          </StaggerChildren>
        </div>
      </Container>
    </section>
  );
}
