import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { OptimizedImage } from "@/components/common/optimized-image";
import { ArrowRight } from "lucide-react";
import { getCachedPrograms } from "@/db/cached-queries";

export async function ProgramsSection() {
  const programs = (await getCachedPrograms()).slice(0, 3);

  return (
    <section className="bg-[#f8e4e1] py-13.5 min-h-100 lg:min-h-125">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <div className="mb-6.5 flex items-center justify-between gap-4">
          <h2 className="text-[32px] font-bold leading-none text-[#17191f]">
            Programmes
          </h2>
          <Button
            asChild
            className="hidden h-[34px] rounded-full bg-gold px-[18px] text-[11px] font-bold !text-white hover:bg-gold/90 sm:inline-flex"
          >
            <Link href="/programs">Our Programmes</Link>
          </Button>
        </div>

        <div className="grid gap-[20px] md:grid-cols-3">
          {programs.map((program) => (
            <Link key={program.slug} href={`/programs/${program.slug}`}>
              <Card className="group hover-lift overflow-hidden rounded-[12px] border border-[#efdcc4] bg-[#fffaf2] shadow-[0_4px_16px_rgba(105,77,32,0.08)] transition-all duration-300 hover:shadow-[0_8px_24px_rgba(105,77,32,0.15)]">
                <CardContent className="flex h-full flex-col p-0">
                  <div className="relative h-[184px]">
                    <OptimizedImage
                      src={program.coverImageUrl}
                      alt={program.title}
                      fill
                      quality={90}
                      className="image-soft-zoom object-cover object-center"
                    />
                  </div>
                  <div className="flex flex-1 items-center justify-between gap-3 px-[18px] py-[16px]">
                    <div className="min-w-0">
                      <h3 className="mb-[6px] text-[16px] font-bold leading-none text-[#17191f]">
                        {program.title}
                      </h3>
                      <p className="truncate text-[11px] leading-none text-[#17191f]/70">
                        {program.description}
                      </p>
                    </div>
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-gold/30 text-gold transition group-hover:bg-gold group-hover:text-white">
                      <ArrowRight className="h-3 w-3" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
