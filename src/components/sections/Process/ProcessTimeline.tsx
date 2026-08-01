"use client";

import { motion } from "framer-motion";
import { CheckmarkCircle01Icon } from "hugeicons-react";
import { Container } from "@/components/ui/Container";
import { GlassCard } from "@/components/ui/GlassCard";
import { cn } from "@/lib/cn";

const TIMELINE_STEPS = [
  {
    id: "01",
    title: "Discovery",
    features: ["Understand business goals", "Stakeholder meetings", "Research", "Requirement gathering"]
  },
  {
    id: "02",
    title: "Planning",
    features: ["Architecture", "Roadmap", "Technical decisions", "Project timeline"]
  },
  {
    id: "03",
    title: "Design",
    features: ["Wireframes", "UI Design", "UX Validation", "Interactive prototypes"]
  },
  {
    id: "04",
    title: "Development",
    features: ["Frontend", "Backend", "APIs", "Database", "AI Integration"]
  },
  {
    id: "05",
    title: "Testing",
    features: ["Quality Assurance", "Performance", "Accessibility", "Cross-browser testing", "Bug fixing"]
  },
  {
    id: "06",
    title: "Launch & Support",
    features: ["Deployment", "Monitoring", "Optimization", "Maintenance", "Future improvements"]
  }
];

export function ProcessTimeline() {
  return (
    <section className="relative py-16 lg:py-24">
      <Container>
        <div className="relative max-w-5xl mx-auto">
          
          {/* Central Line for Desktop / Left Line for Mobile */}
          <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent md:-translate-x-1/2" />

          <div className="flex flex-col gap-12 md:gap-24">
            {TIMELINE_STEPS.map((step, index) => {
              const isEven = index % 2 === 0;

              return (
                <div 
                  key={step.id} 
                  className={cn(
                    "relative flex flex-col md:flex-row items-start md:items-center w-full gap-8 md:gap-0",
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  )}
                >
                  
                  {/* Timeline Node/Number */}
                  <div className="absolute left-0 md:left-1/2 top-0 md:top-1/2 -translate-y-0 md:-translate-y-1/2 md:-translate-x-1/2 w-14 h-14 rounded-full bg-surface border border-white/20 flex items-center justify-center z-10 shadow-glow">
                    <span className="font-heading font-bold text-primary">{step.id}</span>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block md:w-1/2" />

                  {/* Card Content */}
                  <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className={cn(
                      "w-full md:w-1/2 pl-20 md:pl-0",
                      isEven ? "md:pr-16 lg:pr-24" : "md:pl-16 lg:pl-24"
                    )}
                  >
                    <GlassCard hover className="p-8 md:p-10">
                      <h3 className="text-2xl font-heading font-bold text-white mb-6">
                        {step.title}
                      </h3>
                      <ul className="space-y-4">
                        {step.features.map((feature, fIndex) => (
                          <li key={fIndex} className="flex items-start gap-3">
                            <CheckmarkCircle01Icon className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                            <span className="text-white/70 font-body">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </GlassCard>
                  </motion.div>

                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
