"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Calendar,
  ChevronRight,
  Mail,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { OptimizedImage } from "@/components/common/optimized-image";
import { publicPages } from "@/lib/public-pages";
import { allStories, storyCategories } from "@/lib/stories-data";

export default function StoriesPage() {
  const page = publicPages.stories;
  const [activeCategory, setActiveCategory] = useState("all");
  const [subscribed, setSubscribed] = useState(false);

  const filtered = allStories.filter(
    (s) => activeCategory === "all" || s.category === activeCategory
  );

  return (
    <div className="bg-background">
      {/* Hero */}
      <section className="relative overflow-hidden bg-footer pt-28 text-white sm:pt-32">
        <div className="absolute inset-0">
          <OptimizedImage
            src={page.image}
            alt={page.imageAlt}
            fill
            priority
            quality={90}
            className="object-cover object-center opacity-55"
            showPlaceholder={false}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-footer" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/20 to-transparent" />
        </div>

        <div className="relative mx-auto max-w-[1280px] px-6 pb-16 pt-16 sm:px-10 sm:pb-24 sm:pt-20 lg:px-[72px]">
          <div className="max-w-3xl animate-fade-up">
            <p className="mb-4 text-[12px] font-bold uppercase tracking-[0.22em] text-gold">
              {page.eyebrow}
            </p>
            <h1 className="max-w-4xl text-[38px] font-bold leading-[1.08] sm:text-[56px] lg:text-[64px]">
              {page.title}
            </h1>
            <p className="mt-6 max-w-2xl text-[15px] leading-[1.65] text-white/88 sm:text-[17px]">
              Real stories of hope, resilience, and transformation from the
              communities we serve.
            </p>
          </div>
        </div>
      </section>

      {/* Stories Grid */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1180px] px-6 sm:px-10 lg:px-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_280px]">
            {/* Main */}
            <div>
              <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
                <h2 className="text-[28px] font-bold leading-tight text-[#17191f] sm:text-[34px]">
                  {activeCategory === "all"
                    ? "All stories"
                    : activeCategory}
                </h2>
                <span className="text-[12px] text-muted-foreground">
                  {filtered.length} story{filtered.length !== 1 ? "ies" : "y"}
                </span>
              </div>

              {filtered.length === 0 ? (
                <p className="py-12 text-center text-[14px] text-muted-foreground">
                  No stories in this category yet.
                </p>
              ) : (
                <div className="grid gap-[20px] sm:grid-cols-2">
                  {filtered.map((story) => (
                    <Link key={story.slug} href={`/stories/${story.slug}`}>
                      <Card className="group hover-lift flex cursor-pointer flex-col overflow-hidden rounded-[12px] border border-[#efdcc4] bg-[#fffaf2] shadow-[0_4px_16px_rgba(105,77,32,0.08)]">
                      <CardContent className="flex h-full flex-col p-0">
                        <div className="relative h-[180px] overflow-hidden">
                          <OptimizedImage
                            src={story.image}
                            alt={story.title}
                            fill
                            quality={90}
                            className="image-soft-zoom object-cover object-center"
                          />
                        </div>
                        <div className="flex flex-1 flex-col px-[18px] pb-[16px] pt-[14px]">
                          <span className="mb-2 inline-flex self-start rounded-full bg-primary/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-primary">
                            {story.category}
                          </span>
                          <h3 className="mb-[6px] text-[15px] font-bold leading-snug text-[#17191f]">
                            {story.title}
                          </h3>
                          <p className="line-clamp-2 text-[13px] leading-[1.5] text-[#17191f]/70">
                            {story.excerpt}
                          </p>
                          <div className="mt-auto flex items-center justify-between pt-3">
                            <div className="flex items-center gap-3 text-[11px] text-muted-foreground">
                              <span className="flex items-center gap-1">
                                <Calendar className="h-3 w-3" />
                                {story.date}
                              </span>
                            </div>
                            <span className="flex items-center gap-0.5 text-[12px] font-semibold text-primary opacity-0 transition group-hover:opacity-100">
                              Read
                              <ChevronRight className="h-3.5 w-3.5" />
                            </span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Sidebar */}
            <aside>
              <div className="sticky top-24 space-y-6">
                <div className="rounded-[20px] border border-[#efdcc4] bg-[#fffaf2] p-6">
                  <h3 className="mb-4 text-[15px] font-bold text-[#17191f]">
                    Categories
                  </h3>
                  <ul className="space-y-1">
                    {storyCategories.map((cat) => {
                      const count =
                        cat.key === "all"
                          ? allStories.length
                          : allStories.filter((s) => s.category === cat.key)
                              .length;
                      return (
                        <li key={cat.key}>
                          <button
                            onClick={() => setActiveCategory(cat.key)}
                            className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-[13px] transition ${
                              activeCategory === cat.key
? "bg-primary/10 font-semibold text-primary"
              : "text-[#4f4a43] hover:bg-primary/5 hover:text-primary"
                            }`}
                          >
                            <span>{cat.name}</span>
                            <span className="text-[11px] text-muted-foreground">
                              {count}
                            </span>
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                <div className="rounded-[20px] border border-[#efdcc4] bg-[#fffaf2] p-6">
                  <h3 className="mb-2 text-[15px] font-bold text-[#17191f]">
                    Stay updated
                  </h3>
                  <p className="mb-4 text-[12px] leading-[1.5] text-[#4f4a43]">
                    Get new stories delivered to your inbox.
                  </p>
                  {subscribed ? (
                    <p className="text-[13px] font-semibold text-green-700">
                      You&apos;re subscribed!
                    </p>
                  ) : (
                    <div className="flex gap-2">
                      <Input
                        placeholder="your@email.com"
                        className="h-9 rounded-xl border-[#efdcc4] text-[12px]"
                      />
                      <Button
                        onClick={() => setSubscribed(true)}
                        className="h-9 rounded-xl bg-gold px-3 text-[11px] font-bold text-white hover:bg-gold/90"
                      >
                        <Mail className="h-3.5 w-3.5" />
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-footer py-16 text-white sm:py-20">
        <div className="mx-auto max-w-[800px] px-6 text-center sm:px-10 lg:px-12">
          <h2 className="text-[30px] font-bold leading-tight sm:text-[40px]">
            {page.ctaLabel || "Become Part of a Story"}
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-[15px] leading-[1.65] text-white/72">
            Every story of hope starts with someone who decided to help. Join us
            and be part of the next transformation.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button
              asChild
              className="h-11 rounded-full bg-gold px-7 text-[12px] font-bold text-white hover:bg-gold/90"
            >
              <Link href={page.ctaHref || "/volunteer"}>
                {page.ctaLabel || "Become Part of a Story"}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              className="h-11 rounded-full border border-white/30 bg-transparent px-7 text-[12px] font-bold text-white hover:bg-white/10"
            >
              <Link href="/contact">
                Share Your Story
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
