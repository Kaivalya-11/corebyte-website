import { GridBackground, NoiseTexture } from "@/components/brand";
import { CTA } from "@/components/sections/CTA";
import { TechnologyShowcase } from "@/components/shared";
import { 
  AboutHero,
  AboutPhilosophy,
  AboutPrinciples,
  AboutStats
} from "@/components/sections/About";

export const metadata = {
  title: "About | CoreByte Studios",
  description: "Learn about CoreByte Studios' engineering philosophy, core principles, and the standards we live by to deliver exceptional digital products.",
};

export default function AboutPage() {
  return (
    <main id="main-content" className="relative bg-bg text-text overflow-hidden pt-[104px]">
      {/* Universal Canvas Backgrounds */}
      <GridBackground mask="fade-bottom" />
      <NoiseTexture opacity={0.02} />
      
      <AboutHero />
      <AboutPhilosophy />
      <AboutPrinciples />
      <AboutStats />
      
      <TechnologyShowcase 
        eyebrow="Technology Mindset"
        title="Tools Chosen for Purpose, Not Trends"
        description="We don't chase the latest hype. We evaluate and select enterprise-grade technologies based on their ability to solve specific architectural challenges, ensure long-term stability, and deliver unparalleled performance."
        categories={[
          {
            name: "Frontend",
            chips: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"]
          },
          {
            name: "Backend",
            chips: ["Node.js", "Python", "Go", "GraphQL", "REST APIs"]
          },
          {
            name: "Database",
            chips: ["PostgreSQL", "MongoDB", "Redis", "Supabase"]
          },
          {
            name: "Cloud & Ops",
            chips: ["AWS", "Vercel", "Docker", "CI/CD", "Kubernetes"]
          },
          {
            name: "AI & ML",
            chips: ["OpenAI", "LangChain", "Vector Databases", "Local LLMs"]
          },
          {
            name: "Mobile",
            chips: ["React Native", "Expo", "Swift", "Kotlin"]
          }
        ]}
      />
      
      <CTA 
        badge="Our Promise"
        title={
          <>
            Your Vision. <br className="hidden sm:inline" />
            <span className="gradient-text">Built Properly.</span>
          </>
        }
        description="Whether it's a startup MVP or an enterprise platform, we approach every project with the same attention to quality, scalability, and user experience."
        primaryAction={{ label: "Start Your Project", href: "mailto:hello@corebytestudios.com" }}
      />
    </main>
  );
}
