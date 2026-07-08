import type { HomepageContent } from "@/lib/homepage-content";

export function QuoteBannerSection({ content }: { content: HomepageContent["quote"] }) {
  return (
    <section className="bg-white py-8">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <div className="space-y-2">
          <p className="text-2xl font-bold leading-none text-primary">“</p>
          <p className="whitespace-pre-line text-base italic leading-relaxed text-foreground sm:text-lg">
            {content.text}
          </p>
          <p className="text-[12px] font-medium text-muted-foreground">
            {content.attribution}
          </p>
        </div>
      </div>
    </section>
  );
}
