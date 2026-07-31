"use client";

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeader } from "@/components/shared";
import { TECHNOLOGIES } from "@/content/technologies";

/**
 * CoreByte Studios Technologies Section — Sprint 5.1 Editorial Redesign
 *
 * Story Question: "How do we build it?"
 * Narrative Role: Act III — Showcase of Production Engineering Mastery
 *
 * Visual Craftsmanship:
 * - Generous section vertical rhythm (py-28 lg:py-36)
 * - Self-contained framed engineering stage (border-y border-white/12 bg-surface/50 py-8 lg:py-12 shadow-inner)
 * - Gradient mask fades emerging from left and dissolving on right
 * - High-contrast tech badges with subtle hover physics and gradient borders
 */
export function Technologies() {
  // Double the list for infinite seamless marquee loop
  const marqueeItems = [...TECHNOLOGIES, ...TECHNOLOGIES];

  return (
    <section id="technologies" className="relative py-16 lg:py-20">
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
      <div className="mt-16 lg:mt-20 relative w-full border-y border-white/12 bg-surface/50 py-10 lg:py-16 overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_15%,white_85%,transparent)] shadow-inner flex flex-col gap-6">
        {/* Row 1: Forward Marquee */}
        <div className="animate-marquee flex items-center gap-4 sm:gap-6 w-max">
          {marqueeItems.map((tech, index) => (
            <GlassCard
              key={`row1-${tech.id}-${index}`}
              hover
              className="flex items-center gap-3.5 px-6 py-3.5 shrink-0 bg-surface/90 opacity-90 hover:opacity-100 hover:-translate-y-1 hover:shadow-glow hover:border-primary/50 transition-all duration-300 select-none cursor-pointer"
            >
              <div className="relative w-7 h-7 flex items-center justify-center shrink-0">
                <Image
                  src={tech.icon}
                  alt={`${tech.name} logo`}
                  width={28}
                  height={28}
                  className="w-full h-auto object-contain"
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
              <span className="font-heading text-sm sm:text-base font-medium text-text whitespace-nowrap">
                {tech.name}
              </span>
            </GlassCard>
          ))}
        </div>
        
        {/* Row 2: Reverse Marquee */}
        <div className="animate-marquee flex items-center gap-4 sm:gap-6 w-max" style={{ animationDirection: "reverse" }}>
          {marqueeItems.map((tech, index) => (
            <GlassCard
              key={`row2-${tech.id}-${index}`}
              hover
              className="flex items-center gap-3.5 px-6 py-3.5 shrink-0 bg-surface/90 opacity-90 hover:opacity-100 hover:-translate-y-1 hover:shadow-glow hover:border-primary/50 transition-all duration-300 select-none cursor-pointer"
            >
              <div className="relative w-7 h-7 flex items-center justify-center shrink-0">
                <Image
                  src={tech.icon}
                  alt={`${tech.name} logo`}
                  width={28}
                  height={28}
                  className="w-full h-auto object-contain"
                  style={{ width: "100%", height: "auto" }}
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
