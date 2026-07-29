import { MediaModalGrid } from "@/components/common/media-modal-grid";
import { ScrollRevealController } from "@/components/common/scroll-reveal-controller";
import { PageHero } from "@/components/common/static-design";

const videoItems = [
  {
    title: "Education Support Outreach",
    image: "/images/generated/foundation-education-branded.png",
    videoUrl: "https://www.youtube.com/embed/Y-x0efG1seA?autoplay=1",
  },
  {
    title: "Community Relief Program",
    image: "/images/generated/foundation-food-relief-branded.png",
    videoUrl: "https://www.youtube.com/embed/Y-x0efG1seA?autoplay=1",
  },
  {
    title: "Healthcare Camp Highlights",
    image: "/images/generated/foundation-healthcare-branded.png",
    videoUrl: "https://www.youtube.com/embed/Y-x0efG1seA?autoplay=1",
  },
  {
    title: "Food Distribution Story",
    image: "/images/generated/foundation-food-relief-branded.png",
    videoUrl: "https://www.youtube.com/embed/Y-x0efG1seA?autoplay=1",
  },
  {
    title: "Volunteer Impact",
    image: "/images/generated/foundation-volunteers-branded.png",
    videoUrl: "https://www.youtube.com/embed/Y-x0efG1seA?autoplay=1",
  },
  {
    title: "Hope In Action",
    image: "/images/generated/foundation-outreach-branded.png",
    videoUrl: "https://www.youtube.com/embed/Y-x0efG1seA?autoplay=1",
  },
];

export default function VideosPage() {
  return (
    <>
      <ScrollRevealController />
      <PageHero title="Our video" crumb="Video Gallery" />
      <section className="bg-white py-24" data-scroll-reveal="fade-left">
        <div className="mx-auto max-w-[930px] px-6">
          <MediaModalGrid items={videoItems} mode="video" />
        </div>
      </section>
    </>
  );
}
