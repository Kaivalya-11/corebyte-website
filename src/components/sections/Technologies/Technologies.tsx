"use client";

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { GlassCard } from "@/components/ui/Glasscard";
import { SectionHeader } from "@/components/shared";
import { TECHNOLOGIES } from "@/content/technologies";

/**
 * CoreByte Studios Technologies Section — Creative Director Redesign
 *
 * Story Question: "How do we build it?"
 * Narrative Role: Act III — Showcase of Production Engineering Mastery
 *
 * Visual Craftsmanship:
 * - Generous section vertical rhythm (py-28 lg:py-36)
 * - Self-contained framed engineering stage (border-y border-white/10 bg-surface/40)
 * - High-contrast tech badges with subtle hover physics and gradient borders
 */
export function Technologies() {
  // Double the list for infinite seamless marquee loop
  const marqueeItems = [...TECHNOLOGIES, ...TECHNOLOGIES];

  return (
    <section id="technologies" className="relative py-28 lg:py-36 bg-bg text-text overflow-hidden">
      <Container>
        {/* Section Header Stage */}
        <SectionHeader
          eyebrow="Engineering Stack"
          title="Technologies We Master"
          description="Powered by modern, production-proven frameworks and artificial intelligence."
          align="center"
          className="mb-0"
        />
      </Container>

      {/* Production Engineering Marquee Stage (Framed Band with 64–80px offset) */}
      <div className="mt-16 lg:mt-20 relative w-full border-y border-white/10 bg-surface/40 py-8 lg:py-10 overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_12%,white_88%,transparent)]">
        <div className="animate-marquee flex items-center gap-4 sm:gap-6">
          {marqueeItems.map((tech, index) => (
            <GlassCard
              key={`${tech.id}-${index}`}
              className="flex items-center gap-3.5 px-6 py-3.5 shrink-0 glow-border bg-surface/90 opacity-90 hover:opacity-100 hover:scale-105 hover:border-primary/50 transition-all duration-300 select-none cursor-pointer shadow-sm"
            >
              <div className="relative w-7 h-7 flex items-center justify-center shrink-0">
                <Image
                  src={tech.icon}
                  alt={`${tech.name} logo`}
                  width={28}
                  height={28}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-heading text-sm sm:text-base font-medium text-text whitespace-nowrap">
                {tech.name}
              </span>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
