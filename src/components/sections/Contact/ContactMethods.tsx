"use client";

import { motion } from "framer-motion";
import { Mail01Icon, Briefcase01Icon, Location01Icon, Copy01Icon, CheckmarkCircle01Icon } from "hugeicons-react";
import { useState } from "react";
import { GlassCard } from "@/components/ui/GlassCard";

const CONTACT_INFO = [
  {
    icon: Mail01Icon,
    title: "Email",
    value: "hello@corebytestudios.com",
    isCopyable: true,
  },
  {
    icon: Briefcase01Icon,
    title: "LinkedIn",
    value: "linkedin.com/company/corebyte",
    href: "https://linkedin.com",
  },
  {
    icon: Location01Icon,
    title: "Location",
    value: "Remote / India",
    isCopyable: false,
  }
];

export function ContactMethods() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="flex flex-col gap-4">
      {CONTACT_INFO.map((info, index) => {
        const Icon = info.icon;
        const isCopied = copiedIndex === index;

        const CardContent = (
          <GlassCard hover className="p-6 border-white/5 flex items-center justify-between group cursor-pointer transition-colors hover:border-primary/30">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20 group-hover:bg-primary/20 transition-colors">
                <Icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="text-sm font-heading font-bold text-white/50 mb-0.5 uppercase tracking-wider">
                  {info.title}
                </h4>
                <p className="text-white font-body font-medium">
                  {info.value}
                </p>
              </div>
            </div>
            
            {info.isCopyable && (
              <div className="text-white/40 group-hover:text-white transition-colors">
                {isCopied ? <CheckmarkCircle01Icon className="w-5 h-5 text-green-400" /> : <Copy01Icon className="w-5 h-5" />}
              </div>
            )}
          </GlassCard>
        );

        return (
          <motion.div
            key={info.title}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 + index * 0.1 }}
          >
            {info.href ? (
              <a href={info.href} target="_blank" rel="noopener noreferrer" className="block">
                {CardContent}
              </a>
            ) : info.isCopyable ? (
              <div onClick={() => handleCopy(info.value, index)}>
                {CardContent}
              </div>
            ) : (
              <div>{CardContent}</div>
            )}
          </motion.div>
        );
      })}
    </div>
  );
}
