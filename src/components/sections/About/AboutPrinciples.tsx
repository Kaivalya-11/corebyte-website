"use client";

import { CompassIcon, CodeIcon, FlashIcon, RefreshIcon } from "hugeicons-react";
import { Container } from "@/components/ui/Container";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeader } from "@/components/shared";
import { StaggerChildren, StaggerItem } from "@/components/animations";

const PRINCIPLES = [
  {
    icon: CompassIcon,
    title: "Design with Purpose",
    description: "Every interface should solve problems elegantly, without superfluous distractions."
  },
  {
    icon: CodeIcon,
    title: "Engineering Excellence",
    description: "Clean architecture and maintainable code bases over fragile shortcuts."
  },
  {
    icon: FlashIcon,
    title: "Performance First",
    description: "Fast, responsive experiences create trust and maximize user engagement."
  },
  {
    icon: RefreshIcon,
    title: "Continuous Improvement",
    description: "Great digital products are never truly finished; they evolve and adapt after launch."
  }
];

export function AboutPrinciples() {
  return (
    <section className="relative py-16 lg:py-24 bg-surface/30">
      <Container>
        <SectionHeader
          eyebrow="Core Principles"
          title="The Standards We Live By"
          description="These four pillars dictate every design decision, code commit, and client interaction we make."
          align="center"
          className="mb-16"
        />

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRINCIPLES.map((principle, index) => {
            const Icon = principle.icon;
            return (
              <StaggerItem key={index}>
                <GlassCard hover className="p-8 h-full flex flex-col items-center text-center gap-6 border-white/5">
                  <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center border border-primary/20 shadow-glow transition-transform duration-300 group-hover:scale-110">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-heading font-bold text-white mb-3">
                      {principle.title}
                    </h3>
                    <p className="text-white/70 font-body text-sm leading-relaxed">
                      {principle.description}
                    </p>
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
