import Link from "next/link";
import { ArrowRight, Calendar, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { OptimizedImage } from "@/components/common/optimized-image";
import { allStories } from "@/lib/stories-data";

export default function BlogPage() {
  return (
    <div className="bg-background">
      <section className="bg-footer pt-28 text-white sm:pt-32">
        <div className="mx-auto max-w-[1180px] px-6 py-16 sm:px-10 lg:px-12">
          <p className="text-[12px] font-bold uppercase tracking-[0.22em] text-gold">
            Blog
          </p>
          <h1 className="mt-4 max-w-3xl text-[38px] font-bold leading-tight sm:text-[56px]">
            Updates, field notes, and practical stories from our work.
          </h1>
          <p className="mt-5 max-w-2xl text-[15px] leading-[1.75] text-white/78">
            Read recent articles from Achebe Hope Foundation, including
            beneficiary stories, volunteer reflections, community updates, and
            programme lessons from the field.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-[1180px] px-6 sm:px-10 lg:px-12">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-primary">
                Latest Posts
              </p>
              <h2 className="mt-2 text-[28px] font-bold text-[#17191f] sm:text-[36px]">
                Blog articles
              </h2>
            </div>
            <span className="text-[13px] text-muted-foreground">
              {allStories.length} post{allStories.length === 1 ? "" : "s"}
            </span>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {allStories.map((post) => (
              <Link key={post.slug} href={`/stories/${post.slug}`}>
                <Card className="group hover-lift h-full overflow-hidden rounded-[14px] border border-[#efdcc4] bg-[#fffaf2] shadow-[0_4px_16px_rgba(105,77,32,0.08)]">
                  <CardContent className="flex h-full flex-col p-0">
                    <div className="relative h-[190px] overflow-hidden">
                      <OptimizedImage
                        src={post.image}
                        alt={post.title}
                        fill
                        quality={90}
                        className="image-soft-zoom object-cover object-center"
                      />
                    </div>
                    <div className="flex flex-1 flex-col p-5">
                      <span className="mb-3 inline-flex self-start rounded-full bg-primary/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-primary">
                        {post.category}
                      </span>
                      <h3 className="text-[17px] font-bold leading-snug text-[#17191f]">
                        {post.title}
                      </h3>
                      <p className="mt-2 line-clamp-3 text-[13px] leading-[1.65] text-[#4f4a43]">
                        {post.excerpt}
                      </p>
                      <div className="mt-auto flex items-center justify-between pt-5">
                        <span className="flex items-center gap-1 text-[12px] text-muted-foreground">
                          <Calendar className="h-3.5 w-3.5" />
                          {post.date}
                        </span>
                        <span className="inline-flex items-center gap-1 text-[12px] font-bold text-primary">
                          Read post
                          <ChevronRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          <div className="mt-12 rounded-[18px] bg-footer p-7 text-white sm:p-9">
            <h2 className="text-[26px] font-bold leading-tight">
              Have a story or update to share?
            </h2>
            <p className="mt-3 max-w-2xl text-[14px] leading-[1.7] text-white/72">
              Send field updates, beneficiary stories, volunteer reflections, or
              programme notes to the Foundation team for review before they are
              published.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center rounded-full bg-gold px-7 py-3 text-[12px] font-bold text-white hover:bg-gold/90"
            >
              Contact Us
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
