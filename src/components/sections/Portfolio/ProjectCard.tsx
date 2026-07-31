import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { GlassCard } from "@/components/ui/GlassCard";
import type { PortfolioProject } from "@/types/content";
import { cn } from "@/lib/cn";

interface ProjectCardProps {
  project: PortfolioProject;
  className?: string;
}

export function ProjectCard({ project, className }: ProjectCardProps) {
  const isComingSoon = !project.liveUrl;

  const CardContent = (
    <GlassCard
      className={cn(
        "group relative overflow-hidden h-[400px] flex flex-col justify-end",
        isComingSoon ? "cursor-default" : "cursor-pointer",
        "border-white/10 hover:border-primary/50 transition-colors duration-500",
        className
      )}
    >
      {/* Background Image */}
      <Image
        src={project.image}
        alt={`${project.title} mockup`}
        fill
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />

      {/* Gradient Overlay for Text Contrast */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />

      {/* External Link Icon (Only show if not coming soon) */}
      {!isComingSoon && (
        <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center border border-white/10 opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
          <ArrowUpRight className="w-5 h-5 text-white" />
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 p-8 flex flex-col gap-3">
        <div className="flex flex-wrap items-center gap-3 mb-2">
          <Badge variant="primary" size="sm" className="bg-primary/20 text-primary border-primary/20 backdrop-blur-md">
            {project.category}
          </Badge>
          <div className="flex items-center gap-2">
            {project.technologies.slice(0, 2).map((tech) => (
              <span key={tech} className="text-xs font-medium text-white/70">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <h3 className="text-2xl md:text-3xl font-heading font-bold text-white leading-tight">
          {project.title}
        </h3>

        {/* Description (Reveals on Hover) */}
        <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-out">
          <div className="overflow-hidden">
            <p className="text-white/70 font-body text-sm md:text-base leading-relaxed pt-2">
              {project.description}
            </p>
            <div className="pt-4 flex items-center gap-2">
              <span className={cn(
                "inline-flex items-center text-sm font-semibold tracking-wide uppercase",
                isComingSoon ? "text-white/50" : "text-primary"
              )}>
                {project.buttonLabel}
              </span>
            </div>
          </div>
        </div>
      </div>
    </GlassCard>
  );

  if (isComingSoon) {
    return CardContent;
  }

  return (
    <a 
      href={project.liveUrl} 
      target="_blank" 
      rel="noopener noreferrer"
      className="block outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-3xl"
    >
      {CardContent}
    </a>
  );
}
