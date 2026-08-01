import { GridBackground, NoiseTexture } from "@/components/brand";
import { CTA } from "@/components/sections/CTA";
import { 
  ProcessHero, 
  ProcessTimeline, 
  ProcessWhy,
} from "@/components/sections/Process";
import { TechnologyShowcase } from "@/components/shared";

export const metadata = {
  title: "Our Process | CoreByte Studios",
  description: "Learn how CoreByte Studios transforms ideas into production-ready digital products through a structured engineering process.",
};

export default function ProcessPage() {
  return (
    <main id="main-content" className="relative bg-bg text-text overflow-hidden pt-[104px]">
      {/* Universal Canvas Backgrounds */}
      <GridBackground mask="fade-bottom" />
      <NoiseTexture opacity={0.02} />
      
      <ProcessHero />
      <ProcessTimeline />
      <ProcessWhy />
      <TechnologyShowcase 
        eyebrow="Our Stack"
        title="Technologies Used Throughout"
        description="We leverage enterprise-grade, modern frameworks to ensure security, performance, and long-term maintainability."
        categories={[
          {
            name: "Frontend",
            chips: ["React", "Next.js", "TypeScript", "Tailwind CSS"]
          },
          {
            name: "Backend",
            chips: ["Node.js", "Express", "Python", "Go"]
          },
          {
            name: "Database",
            chips: ["PostgreSQL", "MongoDB", "Redis", "Prisma"]
          },
          {
            name: "AI & Machine Learning",
            chips: ["OpenAI", "LangChain", "TensorFlow", "HuggingFace"]
          },
          {
            name: "Deployment & Ops",
            chips: ["Vercel", "AWS", "Docker", "GitHub Actions"]
          },
          {
            name: "Motion & UI",
            chips: ["Framer Motion", "Radix UI", "Three.js", "Figma"]
          }
        ]}
      />
      
      <CTA  
        badge="Take The Next Step"
        title={
          <>
            Ready to Build Something <br className="hidden sm:inline" />
            <span className="gradient-text">Exceptional?</span>
          </>
        }
        description="Let's turn your idea into a world-class digital experience. Partner with our elite engineering team today."
        primaryAction={{ label: "Start Your Project", href: "mailto:hello@corebytestudios.com" }}
        secondaryAction={{ label: "View Portfolio", href: "/#portfolio" }}
      />
    </main>
  );
}
