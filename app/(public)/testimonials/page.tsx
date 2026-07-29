import { ScrollRevealController } from "@/components/common/scroll-reveal-controller";
import { PageHero } from "@/components/common/static-design";
import { RebrandCards, TestimonialBand } from "@/components/common/rebrand-sections";

export default function TestimonialsPage() {
  return <><ScrollRevealController /><PageHero title="Testimonials" crumb="Testimonials" /><RebrandCards eyebrow="Testimonials" title="Building trust through real experiences" cards={["Transparent, consistent, and deeply committed.", "Practical support made a real difference.", "A trusted team with clear communication.", "A partner that measures impact seriously.", "Campaigns are handled with dignity.", "Volunteering showed me real impact."].map((description, index) => ({ title: `Community Partner ${index + 1}`, description }))} /><TestimonialBand /></>;
}
