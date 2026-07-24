import Link from "next/link";
import { ArrowRight, CheckCircle2, GraduationCap } from "lucide-react";
import type { HomepageContent } from "@/lib/homepage-content";
import { Button } from "@/components/ui/button";

export function AadaFeatureSection({
  content,
}: {
  content: HomepageContent["aada"];
}) {
  return (
    <section id="aada" className="bg-footer py-16 text-white sm:py-20 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:px-12">
        <div className="rounded-[28px] border border-white/10 bg-white/[0.06] p-7 shadow-[0_20px_60px_rgba(0,0,0,0.2)] sm:p-9">
          <div className="mb-8 inline-flex h-14 w-14 items-center justify-center rounded-full bg-gold/20 text-gold">
            <GraduationCap className="h-7 w-7" />
          </div>
          <p className="text-[12px] font-bold uppercase tracking-[0.22em] text-gold">
            {content.eyebrow}
          </p>
          <h2 className="mt-4 text-[34px] font-bold leading-tight sm:text-[44px]">
            {content.title}
          </h2>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button
              asChild
              className="h-11 rounded-full bg-gold px-7 text-[12px] font-bold text-white hover:bg-gold/90"
            >
              <Link href={content.primaryButton.href}>
                {content.primaryButton.label}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="h-11 rounded-full border-white/40 bg-transparent px-7 text-[12px] font-bold text-white hover:bg-white/10 hover:text-white"
            >
              <Link href={content.secondaryButton.href}>
                {content.secondaryButton.label}
              </Link>
            </Button>
          </div>
        </div>

        <div className="self-center">
          <div className="space-y-5 text-[15px] leading-[1.75] text-white/78">
            {content.description.split("\n\n").map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {content.highlights.map((highlight) => (
              <div
                key={highlight}
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-3 text-[13px] font-semibold text-white"
              >
                <CheckCircle2 className="h-4 w-4 shrink-0 text-gold" />
                {highlight}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
