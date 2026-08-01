import Image from "next/image";
import { Badge } from "@/components/ui/Badge";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";
import type { PortfolioProject } from "@/types/content";
import { cn } from "@/lib/cn";

interface ProjectCardProps {
  project: PortfolioProject;
  onViewDetails: (project: PortfolioProject) => void;
  className?: string;
}

export function ProjectCard({ project, onViewDetails, className }: ProjectCardProps) {
  const isComingSoon = project.primaryAction === "Coming Soon";

  const primaryBtn = (
    <Button 
      variant="primary" 
      size="sm" 
      disabled={isComingSoon} 
      className="w-full sm:w-auto shadow-md"
    >
      {project.primaryAction}
    </Button>
  );

  return (
    <GlassCard
      className={cn(
        "group relative overflow-hidden h-[400px] flex flex-col justify-end",
        "border-white/10 hover:border-primary/50 transition-colors duration-500",
        className
      )}
    >
      {/* Background Image */}
      <Image
        src={project.image}
        alt={`${project.title} mockup`}
        fill
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />

      {/* Gradient Overlay for Text Contrast */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />

      {/* Content */}
      <div className="relative z-10 p-8 flex flex-col gap-3">
        <div className="flex flex-wrap items-center gap-3 mb-2">
          <Badge variant="primary" size="sm" className="bg-primary/20 text-primary border-primary/20 backdrop-blur-md">
            {project.category}
          </Badge>
          <div className="flex items-center gap-2">
            {project.techStack.slice(0, 2).map((tech) => (
              <span 
                key={tech} 
                className="text-xs font-medium text-white/70 group-hover:text-white transition-colors duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <h3 className="text-2xl md:text-3xl font-heading font-bold text-white leading-tight transition-transform duration-500 ease-out group-hover:-translate-y-1">
          {project.title}
        </h3>

        {/* Description & Actions (Reveals on Hover) */}
        <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-out">
          <div className="overflow-hidden">
            <div className="opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out delay-75">
              <p className="text-white/80 font-body text-sm md:text-base leading-relaxed pt-2">
                {project.description}
              </p>
              
              <div className="pt-6 flex flex-wrap items-center gap-3">
                {/* Primary Action */}
                {isComingSoon ? (
                  primaryBtn
                ) : (
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-full"
                  >
                    {primaryBtn}
                  </a>
                )}

                {/* Secondary Action */}
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => onViewDetails(project)}
                  className="w-full sm:w-auto backdrop-blur-md"
                >
                  {project.secondaryAction}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </GlassCard>
  );
}
