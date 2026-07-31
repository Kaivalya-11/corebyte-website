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
 * CoreByte Studios Services Section — Sprint 5.1 Editorial Redesign
 *
 * Story Question: "What do we build?"
 * Narrative Role: Act II — Editorial Capabilities Gallery
 *
 * Visual Craftsmanship:
 * - Wide low-opacity radial ambient glow (bg-primary/8 blur-[180px])
 * - Generous section vertical rhythm (py-28 lg:py-36)
 * - Centered SectionHeader stage (mb-0) with mt-16 lg:mt-20 layout gap
 * - 4-column responsive grid with stretch-height card alignment
 * - Ambient card lift, micro-glow borders, 8° icon rotation, and crisp feature checklists
 */
export function Services() {
  return (
    <section id="services" className="relative py-16 lg:py-20">
      {/* Ambient Background Glow for Section Depth */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/8 rounded-full blur-[180px] pointer-events-none -z-10"
      />

      <Container>
        {/* Center-Aligned Section Header Stage */}
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
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch"
          >
            {SERVICES.map((service, index) => {
              const IconComponent = SERVICE_ICON_MAP[service.icon];
              // Bento box styling: First and last items span 2 columns on large screens
              const isWide = index === 0 || index === 3;

              return (
                <StaggerItem key={service.id} className={isWide ? "lg:col-span-2 h-full" : "lg:col-span-1 h-full"}>
                  <GlassCard
                    hover
                    className="group flex flex-col justify-between p-7 sm:p-8 md:p-10 h-full glow-border transition-all duration-300 hover:-translate-y-3 hover:border-primary/50 hover:shadow-[0_24px_50px_rgba(0,0,0,0.7)]"
                  >
                    <div className="space-y-6">
                      {/* Service Icon Container */}
                      <div className="inline-flex items-center justify-center p-3.5 rounded-xl bg-primary/10 text-primary border border-primary/20 shadow-sm transition-all duration-300 group-hover:rotate-8 group-hover:scale-110 group-hover:bg-primary/25">
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
                    <div className={`pt-6 mt-6 border-t border-white/12 grid gap-3 ${isWide ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-1'}`}>
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2.5 text-xs text-text/90 font-body">
                          <div className="p-0.5 rounded-full bg-primary/20 text-primary shrink-0">
                            <Check className="w-3.5 h-3.5" />
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
