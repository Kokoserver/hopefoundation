import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, User, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { OptimizedImage } from "@/components/common/optimized-image";
import { allStories, getStoryBySlug, getRelatedStories } from "@/lib/stories-data";

export function generateStaticParams() {
  return allStories.map((story) => ({ slug: story.slug }));
}

export default async function StoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const story = getStoryBySlug(slug);
  if (!story) notFound();

  const related = getRelatedStories(slug);

  return (
    <div className="bg-background">
      {/* Hero */}
      <section className="relative overflow-hidden bg-footer pt-28 text-white sm:pt-32">
        <div className="absolute inset-0">
          <OptimizedImage
            src={story.image}
            alt={story.title}
            fill
            priority
            quality={90}
            className="object-cover object-center opacity-50"
            showPlaceholder={false}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-footer" />
        </div>

        <div className="relative mx-auto max-w-[800px] px-6 pb-16 pt-16 sm:px-10 sm:pb-24 sm:pt-20 lg:px-[72px]">
          <Link
            href="/stories"
            className="mb-6 inline-flex items-center gap-1.5 text-[12px] font-medium text-white/70 transition hover:text-white"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Back to stories
          </Link>
          <div className="animate-fade-up">
            <span className="mb-4 inline-flex rounded-full bg-gold px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white">
              {story.category}
            </span>
            <h1 className="mt-3 max-w-3xl text-[30px] font-bold leading-[1.12] sm:text-[42px] lg:text-[48px]">
              {story.title}
            </h1>
            <div className="mt-4 flex flex-wrap items-center gap-4 text-[12px] text-white/70">
              <span className="flex items-center gap-1.5">
                <User className="h-3.5 w-3.5" />
                {story.author}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="h-3.5 w-3.5" />
                {story.date}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-[800px] px-6 sm:px-10 lg:px-[72px]">
          <div className="prose prose-sm max-w-none">
            {story.content.split("\n\n").map((paragraph, i) => (
              <p
                key={i}
                className="mb-5 whitespace-pre-line text-[15px] leading-[1.75] text-[#4f4a43] sm:text-[16px]"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Related Stories */}
      {related.length > 0 && (
        <section className="bg-[#f8e4e1] py-16 sm:py-20">
          <div className="mx-auto max-w-[1180px] px-6 sm:px-10 lg:px-12">
            <h2 className="mb-8 text-[26px] font-bold leading-tight text-[#17191f] sm:text-[32px]">
              Related stories
            </h2>
            <div className="grid gap-[20px] sm:grid-cols-2 lg:grid-cols-3">
              {related.map((relatedStory) => (
                <Link key={relatedStory.slug} href={`/stories/${relatedStory.slug}`}>
                  <Card className="group hover-lift overflow-hidden rounded-[12px] border border-[#efdcc4] bg-[#fffaf2] shadow-[0_4px_16px_rgba(105,77,32,0.08)]">
                    <CardContent className="flex h-full flex-col p-0">
                      <div className="relative h-[160px]">
                        <OptimizedImage
                          src={relatedStory.image}
                          alt={relatedStory.title}
                          fill
                          quality={90}
                          className="image-soft-zoom object-cover object-center"
                        />
                      </div>
                      <div className="flex flex-1 flex-col px-[18px] pb-[16px] pt-[14px]">
                        <span className="mb-2 inline-flex self-start rounded-full bg-primary/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-primary">
                          {relatedStory.category}
                        </span>
                        <h3 className="mb-[6px] text-[14px] font-bold leading-snug text-[#17191f]">
                          {relatedStory.title}
                        </h3>
                        <p className="line-clamp-2 text-[12px] leading-[1.5] text-[#17191f]/70">
                          {relatedStory.excerpt}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="bg-footer py-16 text-white sm:py-20">
        <div className="mx-auto max-w-[800px] px-6 text-center sm:px-10 lg:px-12">
          <h2 className="text-[28px] font-bold leading-tight sm:text-[36px]">
            Want to be part of stories like this?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-[14px] leading-[1.65] text-white/72">
            Your support makes these stories possible. Join us in creating more
            moments of hope and transformation.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button
              asChild
              className="h-11 rounded-full bg-gold px-7 text-[12px] font-bold text-white hover:bg-gold/90"
            >
              <Link href="/volunteer">
                Get Involved
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              className="h-11 rounded-full border border-white/30 bg-transparent px-7 text-[12px] font-bold text-white hover:bg-white/10"
            >
              <Link href="/donate">
                Support Our Work
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
