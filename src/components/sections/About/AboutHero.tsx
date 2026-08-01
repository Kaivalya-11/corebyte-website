"use client";

import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Badge } from "@/components/ui/Badge";
import { FadeUp } from "@/components/animations";

export function AboutHero() {
  return (
    <section className="relative pt-32 pb-16 lg:pt-48 lg:pb-24 overflow-hidden">
      <Container>
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          <FadeUp delay={0.1}>
            <Badge variant="primary" size="sm" className="mb-8 px-4 py-1.5 text-xs font-bold tracking-widest uppercase shadow-glow">
              About CoreByte
            </Badge>
          </FadeUp>
          
          <FadeUp delay={0.2}>
            <Heading level="h1" variant="display" align="center" className="mb-8 leading-[1.15]">
              Engineering Digital <br className="hidden sm:block" />
              <span className="gradient-text">Experiences That Matter</span>
            </Heading>
          </FadeUp>
          
          <FadeUp delay={0.3}>
            <p className="text-text-muted/90 text-lg md:text-xl lg:text-2xl leading-relaxed font-body max-w-3xl text-balance">
              We believe exceptional software is created where thoughtful design, scalable engineering, and relentless attention to detail meet.
            </p>
          </FadeUp>
        </div>
      </Container>
    </section>
  );
}
