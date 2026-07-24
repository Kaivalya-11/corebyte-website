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
 * CoreByte Studios Services Section
 *
 * Spec: Services.md
 * Desktop: 4 columns | Tablet: 2 columns | Mobile: 1 column
 * Hover interaction: Card lift 8px, Glow Border, and Icon 8° rotation.
 */
export function Services() {
  return (
    <section id="services" className="relative py-20 lg:py-28 bg-bg text-text">
      {/* Background Section Separation Glow */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[140px] pointer-events-none -z-10"
      />

      <Container>
        {/* Section Header */}
        <SectionHeader
          eyebrow="Capabilities"
          title="What We Build"
          description="Modern digital solutions crafted for businesses of every size."
        />

        {/* 4-Column Responsive Grid */}
        <StaggerChildren
          staggerDelay={0.1}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {SERVICES.map((service) => {
            const IconComponent = SERVICE_ICON_MAP[service.icon];

            return (
              <StaggerItem key={service.id} className="h-full">
                <GlassCard
                  hover
                  className="group flex flex-col justify-between p-6 lg:p-8 h-full glow-border transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="space-y-5">
                    {/* Service Icon Container */}
                    <div className="inline-flex items-center justify-center p-3.5 rounded-xl bg-primary/10 text-primary border border-primary/20 shadow-sm transition-transform duration-300 group-hover:rotate-8 group-hover:scale-110">
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
                  <div className="pt-6 mt-6 border-t border-white/10 space-y-2.5">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2.5 text-xs text-text/90 font-body">
                        <div className="p-0.5 rounded-full bg-primary/20 text-primary shrink-0">
                          <Check className="w-3 h-3" />
                        </div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </GlassCard>
              </StaggerItem>
            );
          })}
        </StaggerChildren>
      </Container>
    </section>
  );
}
