import { ScrollRevealController } from "@/components/common/scroll-reveal-controller";
import { PageHero, StaticProgramGrid } from "@/components/common/static-design";

export default function VolunteerPage() {
  return <><ScrollRevealController /><PageHero title="Our volunteers" crumb="Our Volunteers" /><StaticProgramGrid variant="volunteers" /></>;
}
