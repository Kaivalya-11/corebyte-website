"use client";

import Link from "next/link";
import { ArrowRight01Icon } from "hugeicons-react";
import { BackgroundGlow } from "@/components/brand";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { GlassCard } from "@/components/ui/GlassCard";
import { Heading } from "@/components/ui/Heading";
import { FadeUp } from "@/components/animations";

/**
 * CoreByte Studios Final CTA Section — Sprint 5.1 Editorial Redesign
 *
 * Story Question: "Why should you contact us?"
 * Narrative Role: Act IV — Emotional Conversion Climax
 *
 * Visual Craftsmanship:
 * - Concentric glass sanctuary with high-contrast inner glow
 * - Perfect vertical hierarchy: Badge → Display Heading → Subtitle → Action Button
 * - Content-driven height eliminating empty voids
 */
export interface CTAProps {
  badge?: string;
  title?: React.ReactNode;
  description?: string;
  primaryAction?: { label: string; href: string };
  secondaryAction?: { label: string; href: string };
}

export function CTA({
  badge = "Start Your Journey",
  title = (
    <>
      Let&apos;s Build Something <br className="hidden sm:inline" />
      <span className="gradient-text">Extraordinary</span>
    </>
  ),
  description = "Ready to transform your vision into a digital masterpiece? Partner with our elite team for world-class design, robust engineering, and AI integration.",
  primaryAction = { label: "Start Project", href: "mailto:hello@corebytestudios.com" },
  secondaryAction
}: CTAProps) {
  return (
    <section id="contact" className="relative py-16 lg:py-20">
      <Container>
        <FadeUp>
          <GlassCard className="relative p-10 sm:p-14 lg:p-20 text-center overflow-hidden border-white/15 shadow-[0_30px_80px_rgba(0,0,0,0.8)] rounded-3xl">
            {/* Ambient Radial High-Intensity Glow */}
            <BackgroundGlow position="center" intensity="high" className="opacity-100" />
            
            {/* Decorative Floating Elements */}
            <div className="absolute top-10 left-10 hidden lg:block opacity-50 animate-pulse">
              <div className="w-12 h-12 rounded-full bg-primary/20 blur-xl absolute -z-10" />
              <Badge variant="outline" className="border-white/10 bg-white/5 backdrop-blur-md">
                <span className="text-white/70">Next.js</span>
              </Badge>
            </div>
            <div className="absolute bottom-16 right-12 hidden lg:block opacity-50 animate-bounce" style={{ animationDuration: '3s' }}>
              <div className="w-16 h-16 rounded-full bg-primary/20 blur-xl absolute -z-10" />
              <Badge variant="outline" className="border-white/10 bg-white/5 backdrop-blur-md">
                <span className="text-white/70">AI-Powered</span>
              </Badge>
            </div>

            <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
              {/* Eyebrow Badge */}
              <div className="mb-6 flex justify-center w-full">
                <Badge variant="primary" size="sm" className="px-4 py-1.5 text-xs font-bold tracking-widest uppercase shadow-glow">
                  {badge}
                </Badge>
              </div>

              {/* Display Heading */}
              <Heading level="h2" variant="display" align="center" className="leading-[1.15] py-2">
                {title}
              </Heading>

              {/* Subtitle Paragraph */}
              <p className="mt-6 text-text-muted/90 text-base sm:text-lg lg:text-xl leading-relaxed font-body max-w-2xl text-balance mx-auto">
                {description}
              </p>

              {/* Dominant Primary Action Button */}
              <div className="mt-10 flex flex-wrap justify-center items-center gap-4">
                <Link href={primaryAction.href}>
                  <Button variant="primary" size="lg" className="group px-12 py-5 text-base md:text-lg shadow-glow relative overflow-hidden">
                    <span className="relative z-10 flex items-center gap-2 font-semibold">
                      {primaryAction.label}
                      <ArrowRight01Icon className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                  </Button>
                </Link>

                {secondaryAction && (
                  <Link href={secondaryAction.href}>
                    <Button variant="outline" size="lg" className="px-12 py-5 text-base md:text-lg backdrop-blur-md">
                      {secondaryAction.label}
                    </Button>
                  </Link>
                )}
              </div>
            </div>
          </GlassCard>
        </FadeUp>
      </Container>
    </section>
  );
}
