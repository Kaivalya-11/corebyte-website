import { GridBackground, NoiseTexture } from "@/components/brand";
import { Container } from "@/components/ui/Container";
import { 
  ContactHero,
  ContactForm,
  ContactMethods,
  ContactAvailability,
  ContactFAQShortcut
} from "@/components/sections/Contact";

export const metadata = {
  title: "Contact Us | CoreByte Studios",
  description: "Get in touch with CoreByte Studios. We are available for new projects including enterprise web applications, AI integrations, and digital products.",
};

export default function ContactPage() {
  return (
    <main id="main-content" className="relative bg-bg text-text overflow-hidden pt-[104px] pb-24">
      {/* Universal Canvas Backgrounds */}
      <GridBackground mask="fade-bottom" />
      <NoiseTexture opacity={0.02} />
      
      <ContactHero />
      
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 mt-8">
          
          {/* Left Column: Context & Methods */}
          <div className="lg:col-span-5 flex flex-col gap-8 order-2 lg:order-1">
            <ContactAvailability />
            <ContactMethods />
            <ContactFAQShortcut />
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <ContactForm />
          </div>

        </div>
      </Container>
    </main>
  );
}
