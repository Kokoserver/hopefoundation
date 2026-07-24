import { HeroSection } from "@/components/home/hero-section";
import { TrustBadgesSection } from "@/components/home/trust-badges-section";
import { ImpactStatsSection } from "@/components/home/impact-stats-section";
import { QuoteBannerSection } from "@/components/home/quote-banner-section";
import { HopeGrowsSection } from "@/components/home/hope-grows-section";
import { OpportunitySection } from "@/components/home/opportunity-section";
import { WhatWeDoSection } from "@/components/home/what-we-do-section";
import { AadaFeatureSection } from "@/components/home/aada-feature-section";
import { VideoSection } from "@/components/home/video-section";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import { ProgramsSection } from "@/components/home/programs-section";
import { PartnerTestimonialsSection } from "@/components/home/partner-testimonials-section";
import { PartnerLogosSection } from "@/components/home/partner-logos-section";
import { MessageSection } from "@/components/home/message-section";
import { ClosingCtaSection } from "@/components/home/closing-cta-section";
import { getCachedHomepageContent } from "@/db/cached-queries";

export default async function Home() {
  const content = await getCachedHomepageContent();

  return (
    <>
      <div className="relative">
        <HeroSection content={content.hero} />
        <TrustBadgesSection />
      </div>
      <ImpactStatsSection content={content.impact} />
      <QuoteBannerSection content={content.quote} />
      <HopeGrowsSection />
      <OpportunitySection content={content.opportunity} />
      <WhatWeDoSection />
      <AadaFeatureSection content={content.aada} />
      <VideoSection content={content.video} />
      <TestimonialsSection />
      <ProgramsSection />
      <PartnerTestimonialsSection />
      <PartnerLogosSection logos={content.partnerLogos} />
      <MessageSection content={content.message} />
      <ClosingCtaSection content={content.closing} />
    </>
  );
}
