import { GridBackground, NoiseTexture } from "@/components/brand";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { WhyCoreByte } from "@/components/sections/WhyCoreByte";
import { Technologies } from "@/components/sections/Technologies";
import { FAQ } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";

export default function Home() {
  return (
    <main className="relative bg-bg text-text overflow-hidden">
      {/* Universal Canvas Backgrounds */}
      <GridBackground mask="fade-bottom" />
      <NoiseTexture opacity={0.02} />
      
      <Hero />
      <Services />
      <WhyCoreByte />
      <Technologies />
      <FAQ />
      <CTA />
    </main>
  );
}
