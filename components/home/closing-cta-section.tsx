import { Button } from "@/components/ui/button";
import { OptimizedImage } from "@/components/common/optimized-image";
import Link from "next/link";
import type { HomepageContent } from "@/lib/homepage-content";

export function ClosingCtaSection({ content }: { content: HomepageContent["closing"] }) {
  return (
    <section className="group relative overflow-hidden">
      <div className="relative h-[520px] w-full bg-white sm:h-[520px] lg:h-[560px]">
        <OptimizedImage
          src={content.image}
          alt="Children celebrating with hope for the future"
          fill
          quality={90}
          className="image-soft-zoom object-cover object-center"
        />
      </div>

      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/45">
        <div className="animate-fade-up px-6 text-center text-white">
          <h2 className="mx-auto mb-[12px] max-w-[520px] text-[30px] font-bold leading-[1.08] sm:text-[42px] sm:leading-[1.05]">
            {content.title}
          </h2>
          <p className="mx-auto mb-[24px] max-w-[520px] whitespace-pre-line text-[12px] leading-[1.45] text-white">
            {content.description}
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Button asChild className="h-[38px] rounded-full bg-gold px-[22px] text-[12px] font-bold text-white hover:bg-gold/90">
              <Link href={content.primaryButton.href}>{content.primaryButton.label}</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="h-[38px] rounded-full border-white bg-transparent px-[22px] text-[12px] font-bold text-white hover:bg-white/10 hover:text-white"
            >
              <Link href={content.secondaryButton.href}>{content.secondaryButton.label}</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
