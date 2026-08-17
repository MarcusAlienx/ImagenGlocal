import { LiveHeader } from "@/components/live/live-header";
import { HeroVideo } from "@/components/live/hero-video";
import { EventDiscovery, FeaturedEvent } from "@/components/live/event-discovery";
import { HowItWorks, ProductDemo, QRExperience } from "@/components/live/product-experience";
import { OrganizerSection, SocialProof } from "@/components/live/organizer-experience";
import { LiveFooter } from "@/components/live/live-footer";
import { LeadForm } from "@/components/lead-form";

export default function Home() {
  return <main id="top" className="live-page">
    <LiveHeader />
    <HeroVideo />
    <EventDiscovery />
    <FeaturedEvent />
    <HowItWorks />
    <QRExperience />
    <ProductDemo />
    <OrganizerSection />
    <SocialProof />
    <LeadForm />
    <LiveFooter />
  </main>;
}
