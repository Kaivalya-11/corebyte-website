"use client";

import { useState } from "react";
import * as Accordion from "@radix-ui/react-accordion";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown01Icon } from "hugeicons-react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/shared";
import { DURATION, EASE } from "@/animations";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { FAQ_ITEMS } from "@/content";

export function FAQ() {
  const [value, setValue] = useState<string>("");
  const prefersReduced = useReducedMotion();

  const animationProps = prefersReduced
    ? {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        transition: { duration: DURATION.fast },
      }
    : {
        initial: { height: 0, opacity: 0 },
        animate: { height: "auto", opacity: 1 },
        exit: { height: 0, opacity: 0 },
        transition: { duration: DURATION.normal, ease: EASE.smooth },
      };

  return (
    <section id="faq" className="relative py-16 lg:py-20 overflow-hidden">
      {/* Subtle Background Glow */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[200px] pointer-events-none -z-10"
      />

      <Container className="max-w-4xl">
        <SectionHeader
          eyebrow="FAQ"
          title="Common Questions"
          description="Everything you need to know about working with us."
          align="center"
          className="mb-16 lg:mb-20"
        />

        <Accordion.Root
          type="single"
          collapsible
          value={value}
          onValueChange={setValue}
          className="w-full space-y-4"
        >
          {FAQ_ITEMS.map((item) => (
            <Accordion.Item
              key={item.id}
              value={item.id}
              className="bg-surface/40 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 data-[state=open]:border-primary/30 data-[state=open]:shadow-[0_8px_30px_rgba(0,0,0,0.4)] data-[state=open]:bg-surface/60"
            >
              <Accordion.Header className="flex">
                <Accordion.Trigger className="group flex flex-1 items-center justify-between py-6 px-6 sm:px-8 text-left transition-colors hover:bg-white/[0.02]">
                  <h3 className="text-base sm:text-lg font-medium text-text group-hover:text-primary transition-colors duration-300 pr-8">
                    {item.question}
                  </h3>
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/5 border border-white/10 transition-transform duration-300 group-data-[state=open]:rotate-180 group-data-[state=open]:bg-primary/20 group-data-[state=open]:border-primary/30 group-data-[state=open]:text-primary">
                    <ArrowDown01Icon className="h-4 w-4" />
                  </div>
                </Accordion.Trigger>
              </Accordion.Header>
              <AnimatePresence initial={false}>
                {value === item.id && (
                  <Accordion.Content forceMount asChild>
                    <motion.div
                      {...animationProps}
                      className="overflow-hidden text-sm sm:text-base text-text-muted font-body leading-relaxed"
                    >
                      <div className="pb-6 px-6 sm:px-8 pt-0">
                        {item.answer}
                      </div>
                    </motion.div>
                  </Accordion.Content>
                )}
              </AnimatePresence>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </Container>
    </section>
  );
}
