"use client";

import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/shared";
import { StaggerChildren, StaggerItem } from "@/components/animations";
import { useState } from "react";
import { PORTFOLIO_PROJECTS } from "@/content/portfolio";
import { ProjectCard } from "./ProjectCard";
import { ProjectModal } from "./ProjectModal";
import type { PortfolioProject } from "@/types/content";
import { cn } from "@/lib/cn";

export function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);

  return (
    <section id="portfolio" className="relative py-16 lg:py-24">
      {/* Subtle Background Glow */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 right-0 translate-x-1/3 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[150px] pointer-events-none -z-10"
      />

      <Container>
        <StaggerChildren>
          <SectionHeader
            eyebrow="Our Work"
            title="Selected Projects"
            description="World-class engineering meets pixel-perfect design. Explore how we transform complex problems into elegant digital solutions."
            align="left"
            className="mb-12 lg:mb-16"
          />

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
            {PORTFOLIO_PROJECTS.map((project) => {
              // Map custom colSpan to Tailwind grid classes
              const colClasses = cn(
                project.colSpan === "featured" && "lg:col-span-8",
                project.colSpan === "half" && "lg:col-span-6",
                // Special case: if it's the second item (index 1), make it span 4 so it completes the 8+4 row
                project.id === "wavex" && "lg:col-span-4"
              );

              return (
                <StaggerItem key={project.id} className={colClasses}>
                  <ProjectCard 
                    project={project} 
                    onViewDetails={setSelectedProject}
                  />
                </StaggerItem>
              );
            })}
          </div>
        </StaggerChildren>
      </Container>

      {/* Project Details Modal */}
      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </section>
  );
}
