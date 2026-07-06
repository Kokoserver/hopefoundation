import { HeroSection } from "@/components/home/hero-section";
import { TrustBadgesSection } from "@/components/home/trust-badges-section";
import { ImpactStatsSection } from "@/components/home/impact-stats-section";
import { QuoteBannerSection } from "@/components/home/quote-banner-section";
import { HopeGrowsSection } from "@/components/home/hope-grows-section";
import { OpportunitySection } from "@/components/home/opportunity-section";
import { WhatWeDoSection } from "@/components/home/what-we-do-section";
import { VideoSection } from "@/components/home/video-section";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import { ProgramsSection } from "@/components/home/programs-section";
import { PartnerTestimonialsSection } from "@/components/home/partner-testimonials-section";
import { PartnerLogosSection } from "@/components/home/partner-logos-section";
import { MessageSection } from "@/components/home/message-section";
import { ClosingCtaSection } from "@/components/home/closing-cta-section";

export default function Home() {
  return (
    <>
      <div className="relative">
        <HeroSection />
        <TrustBadgesSection />
      </div>
      <ImpactStatsSection />
      <QuoteBannerSection />
      <HopeGrowsSection />
      <OpportunitySection />
      <WhatWeDoSection />
      <VideoSection />
      <TestimonialsSection />
      <ProgramsSection />
      <PartnerTestimonialsSection />
      <PartnerLogosSection />
      <MessageSection />
      <ClosingCtaSection />
    </>
  );
}
