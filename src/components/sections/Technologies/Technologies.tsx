"use client";

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { GlassCard } from "@/components/ui/Glasscard";
import { SectionHeader } from "@/components/shared";
import { TECHNOLOGIES } from "@/content/technologies";

/**
 * CoreByte Studios Technologies Section
 *
 * Spec: Technology Marquee.md
 * Continuous horizontal marquee showcase of our production stack.
 * Duplicates technology items for an uninterrupted 360° scroll loop.
 * Pauses animation on hover; falls back gracefully for reduced motion.
 */
export function Technologies() {
  // Double the list for infinite seamless marquee loop
  const marqueeItems = [...TECHNOLOGIES, ...TECHNOLOGIES];

  return (
    <section id="technologies" className="relative py-24 lg:py-32 bg-bg text-text overflow-hidden">
      <Container>
        {/* Section Header */}
        <SectionHeader
          eyebrow="Engineering Stack"
          title="Technologies We Master"
          description="Powered by modern, production-proven frameworks and artificial intelligence."
        />
      </Container>

      {/* Grounded Marquee Frame with Border Boundaries */}
      <div className="relative w-full border-y border-white/5 bg-surface/30 py-8 lg:py-10 overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
        <div className="animate-marquee flex items-center gap-4 sm:gap-6">
          {marqueeItems.map((tech, index) => (
            <GlassCard
              key={`${tech.id}-${index}`}
              className="flex items-center gap-3.5 px-5 py-3 shrink-0 glow-border bg-surface/80 opacity-85 hover:opacity-100 hover:scale-105 transition-all duration-300 select-none cursor-pointer"
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
