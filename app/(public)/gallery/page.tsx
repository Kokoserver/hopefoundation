import { MediaModalGrid } from "@/components/common/media-modal-grid";
import { ScrollRevealController } from "@/components/common/scroll-reveal-controller";
import { PageHero } from "@/components/common/static-design";

const galleryItems = [
  { title: "gallery-1", image: "/images/generated/foundation-women-skills-branded.png" },
  { title: "gallery-2", image: "/images/generated/foundation-education-branded.png" },
  { title: "gallery-3", image: "/images/generated/foundation-outreach-branded.png" },
  { title: "gallery-4", image: "/images/generated/foundation-child-welfare-branded.png" },
  { title: "gallery-5", image: "/images/generated/foundation-healthcare-branded.png" },
  { title: "gallery-6", image: "/images/generated/foundation-food-relief-branded.png" },
  { title: "gallery-7", image: "/images/generated/foundation-volunteers-branded.png" },
  { title: "gallery-8", image: "/images/generated/foundation-outreach-branded.png" },
  { title: "gallery-9", image: "/images/generated/foundation-partners-branded.png" },
];

export default function GalleryPage() {
  return (
    <>
      <ScrollRevealController />
      <PageHero title="Our gallery" crumb="Image Gallery" />
      <section className="bg-white py-24" data-scroll-reveal="fade-left">
        <div className="mx-auto max-w-[930px] px-6">
          <MediaModalGrid items={galleryItems} mode="gallery" />
        </div>
      </section>
    </>
  );
}
