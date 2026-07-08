import { OptimizedImage } from "@/components/common/optimized-image";
import type { HomepageContent } from "@/lib/homepage-content";

export function MessageSection({ content }: { content: HomepageContent["message"] }) {
  return (
    <section className="bg-white py-0">
      <div className="grid lg:min-h-[580px] lg:grid-cols-[39fr_61fr]">
        <div className="relative min-h-[300px] sm:min-h-[380px] lg:min-h-[580px]">
          <OptimizedImage
            src={content.image}
            alt="Children supported by the foundation"
            fill
            loading="eager"
            quality={90}
            className="object-cover object-center"
          />
        </div>
        <div className="flex items-center bg-olive px-6 py-14 text-white sm:px-10 lg:px-[76px] lg:py-20">
          <div className="max-w-[650px]">
            <div className="mb-5 h-1 w-10 rounded-full bg-primary" />
            <h2 className="mb-[22px] max-w-[520px] text-[30px] font-bold leading-[1.1] sm:mb-[26px] sm:text-[36px] sm:leading-[1.08]">
              {content.title}
            </h2>
            <div className="space-y-[15px] text-[12px] leading-[1.45] text-white">
              {content.paragraphs.map((paragraph) => (
                <p key={paragraph} className="whitespace-pre-line">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
