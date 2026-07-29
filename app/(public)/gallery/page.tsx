import { MediaModalGrid } from "@/components/common/media-modal-grid";
import { ScrollRevealController } from "@/components/common/scroll-reveal-controller";
import { PageHero } from "@/components/common/static-design";

const galleryItems = [
  { title: "gallery-1", image: "/images/new/8c7e6f87be07cbf3341a2cdd6184c25d.jpg.jpeg" },
  { title: "gallery-2", image: "/images/generated/foundation-education-branded.png" },
  { title: "gallery-3", image: "/images/generated/foundation-outreach-branded.png" },
  { title: "gallery-4", image: "/images/new/19092f3ac4376805a624bbdad23eb895.jpg.jpeg" },
  { title: "gallery-5", image: "/images/new/cd7684054ec5036b88f97615ab12d5a2.jpg.jpeg" },
  { title: "gallery-6", image: "/images/new/400ca5bd72399daefb3ba1ed0da11072.jpg.jpeg" },
  { title: "gallery-7", image: "/images/new/18d3102e58527d82295a9d108a101405.jpg.jpeg" },
  { title: "gallery-8", image: "/images/generated/foundation-outreach-branded.png" },
  { title: "gallery-9", image: "/images/new/c07c29641a2d90d19da14525b548a863.jpg.jpeg" },
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
