import { ScrollRevealController } from "@/components/common/scroll-reveal-controller";
import { PageHero, StaticProgramGrid } from "@/components/common/static-design";

export default function ProjectsPage() {
  return (
    <>
      <ScrollRevealController />
      <PageHero title="Our Programs" crumb="Programs" />
      <StaticProgramGrid />
    </>
  );
}
