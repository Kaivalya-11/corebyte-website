"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/shared";
import { GlassCard } from "@/components/ui/GlassCard";
import { Badge } from "@/components/ui/Badge";

export interface TechCategory {
  name: string;
  chips: string[];
}

interface TechnologyShowcaseProps {
  eyebrow: string;
  title: string;
  description: string;
  categories: TechCategory[];
}

export function TechnologyShowcase({ eyebrow, title, description, categories }: TechnologyShowcaseProps) {
  return (
    <section className="relative py-16 lg:py-24">
      <Container>
        <SectionHeader
          eyebrow={eyebrow}
          title={title}
          description={description}
          align="center"
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <GlassCard className="p-8 h-full border-white/5 bg-white/[0.02]">
                <h3 className="text-lg font-heading font-bold text-white mb-6">
                  {category.name}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.chips.map((chip) => (
                    <Badge key={chip} variant="outline" className="bg-white/5 border-white/10 hover:border-primary/50 transition-colors cursor-default">
                      {chip}
                    </Badge>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
