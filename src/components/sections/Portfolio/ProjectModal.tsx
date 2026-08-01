import { useEffect, useRef } from "react";
import Image from "next/image";
import { Cancel01Icon, CheckmarkCircle01Icon, CodeIcon, LinkSquare01Icon, LockKeyIcon } from "hugeicons-react";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import type { PortfolioProject } from "@/types/content";
import { cn } from "@/lib/cn";

interface ProjectModalProps {
  project: PortfolioProject | null;
  onClose: () => void;
}

// Map status to badge colors
const getStatusColor = (status: string) => {
  switch (status.toLowerCase()) {
    case "live":
      return "bg-green-500/20 text-green-400 border-green-500/20";
    case "beta":
      return "bg-blue-500/20 text-blue-400 border-blue-500/20";
    case "in development":
      return "bg-yellow-500/20 text-yellow-400 border-yellow-500/20";
    case "legacy project":
      return "bg-gray-500/20 text-gray-400 border-gray-500/20";
    case "coming soon":
      return "bg-purple-500/20 text-purple-400 border-purple-500/20";
    default:
      return "bg-primary/20 text-primary border-primary/20";
  }
};

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  // Lock body scroll and handle ESC key
  useEffect(() => {
    if (!project) return;

    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = originalStyle;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  // Handle click outside
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {project && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-md"
            onClick={handleBackdropClick}
          />

          {/* Modal Container */}
          <motion.div
            ref={modalRef}
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-4xl max-h-[90vh] bg-surface border border-white/10 rounded-3xl shadow-2xl overflow-hidden flex flex-col"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/40 hover:bg-black/60 border border-white/10 text-white/70 hover:text-white transition-colors backdrop-blur-md"
              aria-label="Close modal"
            >
              <Cancel01Icon className="w-5 h-5" />
            </button>

            {/* Scrollable Content */}
            <div className="overflow-y-auto w-full custom-scrollbar">
              
              {/* Hero Image */}
              <div className="relative w-full h-[250px] sm:h-[350px]">
                <Image
                  src={project.image}
                  alt={`${project.title} hero`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1200px) 100vw, 1200px"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/40 to-transparent" />
              </div>

              {/* Body */}
              <div className="relative z-10 px-6 sm:px-10 pb-10 -mt-16 sm:-mt-24">
                
                {/* Header */}
                <div className="flex flex-col gap-4 mb-10">
                  <div className="flex flex-wrap items-center gap-3">
                    <Badge variant="outline" className="bg-white/5 border-white/10 backdrop-blur-md">
                      {project.category}
                    </Badge>
                    <Badge variant="outline" className={cn("backdrop-blur-md", getStatusColor(project.status))}>
                      {project.status}
                    </Badge>
                  </div>
                  
                  <h2 id="modal-title" className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-white">
                    {project.title}
                  </h2>
                  <p className="text-lg text-white/70 font-body max-w-2xl">
                    {project.description}
                  </p>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                  
                  {/* Left Column: Overview & Features */}
                  <div className="md:col-span-2 space-y-10">
                    
                    {/* Section 1: Overview */}
                    <section>
                      <h3 className="text-xl font-heading font-bold text-white mb-4">Overview</h3>
                      <p className="text-white/70 font-body leading-relaxed">
                        {project.overview}
                      </p>
                    </section>

                    {/* Section 2: Key Features */}
                    <section>
                      <h3 className="text-xl font-heading font-bold text-white mb-4">Key Features</h3>
                      <ul className="space-y-3">
                        {project.features.map((feature, index) => (
                          <motion.li 
                            key={index}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 + index * 0.1 }}
                            className="flex items-start gap-3"
                          >
                            <CheckmarkCircle01Icon className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                            <span className="text-white/80 font-body">{feature}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </section>
                  </div>

                  {/* Right Column: Meta & Actions */}
                  <div className="space-y-8 bg-white/5 border border-white/10 rounded-2xl p-6 h-fit">
                    
                    {/* Section 3: Tech Stack */}
                    <section>
                      <h3 className="text-sm font-heading font-bold text-white/50 uppercase tracking-wider mb-4">
                        Tech Stack
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech) => (
                          <Badge key={tech} variant="outline" size="sm" className="bg-white/5">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </section>

                    {/* Section 5: Project Actions */}
                    <section className="space-y-4 pt-4 border-t border-white/10">
                      {project.primaryAction === "Coming Soon" || project.status === "Coming Soon" ? (
                        <Button variant="secondary" className="w-full justify-between opacity-50 cursor-not-allowed group">
                          Coming Soon
                          <LockKeyIcon className="w-4 h-4 text-white/50" />
                        </Button>
                      ) : (
                        <a 
                          href={project.liveUrl} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="block"
                        >
                          <Button variant="primary" className="w-full justify-between group">
                            Live Demo
                            <LinkSquare01Icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                          </Button>
                        </a>
                      )}

                      {project.githubUrl && (
                        <a 
                          href={project.githubUrl} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="block"
                        >
                          <Button variant="outline" className="w-full justify-between group">
                            View Source
                            <CodeIcon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                          </Button>
                        </a>
                      )}
                    </section>
                  </div>

                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
