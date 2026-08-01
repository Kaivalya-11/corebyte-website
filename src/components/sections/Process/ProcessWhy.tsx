"use client";

import { Layers01Icon, MessageMultiple01Icon, Share01Icon } from "hugeicons-react";
import { Container } from "@/components/ui/Container";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeader } from "@/components/shared";
import { StaggerChildren, StaggerItem } from "@/components/animations";

const WHY_REASONS = [
  {
    icon: Layers01Icon,
    title: "Predictable Delivery",
    description: "Our structured methodology ensures milestones are hit on time without compromising on quality or architectural integrity."
  },
  {
    icon: MessageMultiple01Icon,
    title: "Transparent Communication",
    description: "Stay in the loop with regular updates, clear documentation, and direct access to the engineers building your product."
  },
  {
    icon: Share01Icon,
    title: "Scalable Engineering",
    description: "We don't just build for launch. We architect foundations designed to handle growth, traffic spikes, and future feature expansions."
  }
];

export function ProcessWhy() {
  return (
    <section className="relative py-16 lg:py-24 bg-surface/30">
      <Container>
        <SectionHeader
          eyebrow="Why It Works"
          title="Engineered for Success"
          description="A rigid process doesn't mean inflexible development. It means we have the foundation required to execute your vision flawlessly."
          align="center"
          className="mb-16"
        />

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {WHY_REASONS.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <StaggerItem key={index}>
                <GlassCard hover className="p-8 h-full flex flex-col items-start gap-6 border-white/5">
                  <div className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center border border-primary/20 shadow-glow">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-bold text-white mb-3">
                      {reason.title}
                    </h3>
                    <p className="text-white/70 font-body leading-relaxed">
                      {reason.description}
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
