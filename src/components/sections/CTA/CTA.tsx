"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BackgroundGlow } from "@/components/brand";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { GlassCard } from "@/components/ui/Glasscard";
import { Heading } from "@/components/ui/Heading";
import { FadeUp } from "@/components/animations";

/**
 * CoreByte Studios Final CTA Section — Creative Director Redesign
 *
 * Story Question: "Why should you contact us?"
 * Narrative Role: Act IV — Emotional Conversion Climax
 *
 * Visual Craftsmanship:
 * - Concentric glass sanctuary with high-contrast inner glow
 * - Perfect vertical hierarchy: Badge → Display Heading → Subtitle → Action Button
 * - Content-driven height eliminating empty voids
 */
export function CTA() {
  return (
    <section id="contact" className="relative py-28 lg:py-36 bg-bg text-text overflow-hidden">
      <Container>
        <FadeUp>
          <GlassCard className="relative p-10 sm:p-14 lg:p-16 text-center overflow-hidden border-white/15 shadow-[0_25px_70px_rgba(0,0,0,0.7)]">
            {/* Ambient Radial High-Intensity Glow */}
            <BackgroundGlow position="center" intensity="high" className="opacity-95" />

            <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
              {/* Eyebrow Badge */}
              <div className="mb-4 flex justify-center w-full">
                <Badge variant="primary" size="sm" className="px-3.5 py-1 text-xs font-semibold tracking-wider uppercase">
                  Get Started
                </Badge>
              </div>

              {/* Display Heading */}
              <Heading level="h2" variant="display" align="center" className="text-balance">
                Let&apos;s Build Something <br className="hidden sm:inline" />
                <span className="gradient-text">Great Together</span>
              </Heading>

              {/* Subtitle Paragraph */}
              <p className="mt-4 text-text-muted/90 text-base sm:text-lg lg:text-xl leading-relaxed font-body max-w-xl text-balance mx-auto">
                Ready to transform your ideas into digital reality? Partner with
                our team for design, development, and scalable engineering.
              </p>

              {/* Dominant Primary Action Button */}
              <div className="mt-8 flex justify-center">
                <Link href="mailto:hello@corebytestudios.com">
                  <Button variant="primary" size="lg" className="group px-10 py-4.5 text-base md:text-lg shadow-glow">
                    <span>Start Project</span>
                    <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </div>
          </GlassCard>
        </FadeUp>
      </Container>
    </section>
  );
}
