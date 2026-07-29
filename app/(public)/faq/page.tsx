import { ScrollRevealController } from "@/components/common/scroll-reveal-controller";
import { FAQBlock, PageHero } from "@/components/common/static-design";

export default function FaqPage() {
  return <><ScrollRevealController /><PageHero title="Frequently asked questions" crumb="FAQs" /><section className="bg-[#f4f4f4] py-24" data-scroll-reveal="fade-left"><div className="mx-auto max-w-[760px] px-6"><FAQBlock /><div className="mt-16" data-reveal-child="right"><FAQBlock /></div><div className="mt-16" data-reveal-child="left"><FAQBlock /></div></div></section></>;
}
