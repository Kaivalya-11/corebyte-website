"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BackgroundGlow } from "@/components/brand";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { GlassCard } from "@/components/ui/Glasscard";
import { Heading } from "@/components/ui/Heading";
import { FadeUp } from "@/components/animations";

/**
 * CoreByte Studios Final CTA Section
 *
 * Spec: CTA.md
 * Positioned as the pre-footer call to action chapter.
 * Features blue-to-purple background radial glow, glass container,
 * Space Grotesk display heading, and primary project start CTA.
 */
export function CTA() {
  return (
    <section id="contact" className="relative py-24 lg:py-32 bg-bg text-text overflow-hidden">
      <Container>
        <FadeUp>
          <GlassCard className="relative p-10 sm:p-16 lg:p-20 text-center overflow-hidden border-white/15 shadow-[0_20px_60px_rgba(0,0,0,0.7)]">
            {/* Ambient Inner Card Glow */}
            <BackgroundGlow position="center" intensity="high" />

            <div className="relative z-10 max-w-3xl mx-auto space-y-6 sm:space-y-8">
              {/* Display Heading */}
              <Heading level="h2" variant="display" align="center">
                Let&apos;s Build Something <br className="hidden sm:inline" />
                <span className="gradient-text">Great Together</span>
              </Heading>

              {/* Subheading */}
              <p className="text-text-muted text-base sm:text-lg lg:text-xl leading-relaxed font-body max-w-xl mx-auto">
                Ready to transform your ideas into digital reality? Partner with
                our team for design, development, and scalable engineering.
              </p>

              {/* Dominant Primary Action Button */}
              <div className="pt-6 sm:pt-8 flex justify-center">
                <Link href="mailto:hello@corebytestudios.com">
                  <Button variant="primary" size="lg" className="group px-10 py-5 text-base md:text-lg">
                    <span>Start Project</span>
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
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
