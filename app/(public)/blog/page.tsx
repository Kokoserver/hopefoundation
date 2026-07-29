import Link from "next/link";
import { CalendarDays } from "lucide-react";
import { OptimizedImage } from "@/components/common/optimized-image";
import { ScrollRevealController } from "@/components/common/scroll-reveal-controller";
import { PageHero } from "@/components/common/static-design";

const posts = [
  {
    title: "Empowering Women Through Skill Development",
    image: "/images/new/400ca5bd72399daefb3ba1ed0da11072.jpg.jpeg",
  },
  {
    title: "Building Safe Homes for Families in Need",
    image: "/images/generated/foundation-outreach-branded.png",
  },
  {
    title: "Partnering with Local Businesses for Greater Impact",
    image: "/images/new/18d3102e58527d82295a9d108a101405.jpg.jpeg",
  },
  {
    title: "Annual Fundraising Gala: Making a Difference Together",
    image: "/images/new/c07c29641a2d90d19da14525b548a863.jpg.jpeg",
  },
  {
    title: "Healthcare Camps: Reaching Those in Need",
    image: "/images/new/cd7684054ec5036b88f97615ab12d5a2.jpg.jpeg",
  },
  {
    title: "Volunteer Stories: Creating Impact Together",
    image: "/images/generated/foundation-education-branded.png",
  },
];

export default function BlogPage() {
  return (
    <>
      <ScrollRevealController />
      <PageHero title="Our blog" crumb="Blog" />
      <section className="bg-[#f4f4f4] py-24" data-scroll-reveal="fade-left">
        <div className="mx-auto grid max-w-[930px] gap-8 px-6 md:grid-cols-3">
          {posts.map((post, index) => (
            <Link
              key={post.title}
              href={`/blog/${index + 1}`}
              className="group relative h-[300px] overflow-hidden rounded-[10px] bg-[#381800] shadow-sm"
              data-reveal-child="zoom"
              style={{ "--reveal-index": index } as React.CSSProperties}
            >
              <OptimizedImage src={post.image} alt={post.title} fill quality={90} className="image-soft-zoom" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#120800]/94 via-[#120800]/24 to-transparent" />
              <div className="absolute bottom-7 left-7 right-7 text-white">
                <p className="mb-4 flex items-center gap-2 text-[12px] font-semibold text-white/82">
                  <CalendarDays className="h-4 w-4" />
                  April 22, 2026
                </p>
                <h2 className="text-[18px] font-semibold leading-snug tracking-[-0.035em]">
                  {post.title}
                </h2>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
