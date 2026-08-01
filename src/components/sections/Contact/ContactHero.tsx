"use client";

import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Badge } from "@/components/ui/Badge";
import { FadeUp } from "@/components/animations";

export function ContactHero() {
  return (
    <section className="relative pt-32 pb-8 lg:pt-48 lg:pb-12 overflow-hidden">
      <Container>
        <div className="max-w-4xl">
          <FadeUp delay={0.1}>
            <Badge variant="primary" size="sm" className="mb-6 px-4 py-1.5 text-xs font-bold tracking-widest uppercase shadow-glow">
              Let&apos;s Connect
            </Badge>
          </FadeUp>
          
          <FadeUp delay={0.2}>
            <Heading level="h1" variant="display" align="left" className="mb-6 leading-[1.15]">
              Ready to Build Something <br className="hidden sm:block" />
              <span className="gradient-text">Extraordinary?</span>
            </Heading>
          </FadeUp>
          
          <FadeUp delay={0.3}>
            <p className="text-text-muted/90 text-lg md:text-xl leading-relaxed font-body max-w-2xl text-balance">
              Whether you need a full-scale enterprise application, a high-converting marketing site, or an AI integration—we&apos;re ready to help bring your vision to life.
            </p>
          </FadeUp>
        </div>
      </Container>
    </section>
  );
}
