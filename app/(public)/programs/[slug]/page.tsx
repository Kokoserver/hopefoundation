import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CheckCircle2, Target, ArrowRight, Users, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { OptimizedImage } from "@/components/common/optimized-image";
import { allPrograms, getProgramBySlug } from "@/lib/programs-data";

export function generateStaticParams() {
  return allPrograms.map((program) => ({ slug: program.slug }));
}

export default async function ProgramPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const program = getProgramBySlug(slug);
  if (!program) notFound();

  return (
    <div className="bg-background">
      {/* Hero */}
      <section className="relative overflow-hidden bg-footer pt-28 text-white sm:pt-32">
        <div className="absolute inset-0">
          <OptimizedImage
            src={program.image}
            alt={program.title}
            fill
            priority
            quality={90}
            className="object-cover object-center opacity-50"
            showPlaceholder={false}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-footer" />
        </div>

        <div className="relative mx-auto max-w-[1180px] px-6 pb-16 pt-16 sm:px-10 sm:pb-24 sm:pt-20 lg:px-[72px]">
          <Link
            href="/programs"
            className="mb-6 inline-flex items-center gap-1.5 text-[12px] font-medium text-white/70 transition hover:text-white"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Back to programmes
          </Link>
          <div className="animate-fade-up max-w-3xl">
            <span
              className={`mb-4 inline-flex rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wider ${
                program.tag === "Ongoing"
                  ? "bg-green-500/20 text-green-300"
                  : program.tag === "Upcoming"
                    ? "bg-amber-500/20 text-amber-300"
                    : "bg-gray-500/20 text-gray-300"
              }`}
            >
              {program.tag}
            </span>
            <h1 className="mt-3 text-[30px] font-bold leading-[1.12] sm:text-[42px] lg:text-[48px]">
              {program.title}
            </h1>
            <p className="mt-4 text-[15px] leading-[1.65] text-white/80 sm:text-[17px]">
              {program.description}
            </p>
            <div className="mt-5 flex flex-wrap gap-4 text-[12px] text-white/70">
              <span className="flex items-center gap-1.5">
                <Users className="h-4 w-4" />
                {program.beneficiaries}
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="h-4 w-4" />
                {program.location}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-[1180px] px-6 sm:px-10 lg:px-12">
          <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr]">
            <div>
              <h2 className="mb-5 text-[24px] font-bold text-[#17191f] sm:text-[28px]">
                About this programme
              </h2>
              {program.fullDescription.split("\n\n").map((paragraph, i) => (
                <p
                  key={i}
                  className="mb-4 text-[15px] leading-[1.75] text-[#4f4a43]"
                >
                  {paragraph}
                </p>
              ))}

              <div className="mt-10">
                <div className="mb-6 flex items-center gap-3">
                  <Target className="h-5 w-5 text-primary" />
                  <h3 className="text-[18px] font-bold text-[#17191f]">
                    Goals
                  </h3>
                </div>
                <ul className="space-y-3">
                  {program.goals.map((goal) => (
                    <li key={goal} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span className="text-[14px] leading-[1.6] text-[#4f4a43]">
                        {goal}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-10">
                <h3 className="mb-6 text-[18px] font-bold text-[#17191f]">
                  Expected outcomes
                </h3>
                <ul className="space-y-3">
                  {program.outcomes.map((outcome) => (
                    <li
                      key={outcome}
                      className="rounded-[14px] border border-[#eadfcd] bg-[#fffaf2] px-4 py-3 text-[14px] leading-[1.5] text-[#4f4a43]"
                    >
                      {outcome}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sidebar */}
            <aside>
              <div className="sticky top-24 space-y-5 rounded-[20px] border border-[#efdcc4] bg-[#fffaf2] p-6">
                <h3 className="text-[16px] font-bold text-[#17191f]">
                  Quick info
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-wider text-gold">
                      Status
                    </p>
                    <p className="mt-1 text-[14px] font-semibold text-[#17191f]">
                      {program.tag}
                    </p>
                  </div>
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-wider text-gold">
                      Beneficiaries
                    </p>
                    <p className="mt-1 text-[14px] font-semibold text-[#17191f]">
                      {program.beneficiaries}
                    </p>
                  </div>
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-wider text-gold">
                      Location
                    </p>
                    <p className="mt-1 text-[14px] font-semibold text-[#17191f]">
                      {program.location}
                    </p>
                  </div>
                </div>
                <Button
                  asChild
                  className="mt-2 w-full rounded-full bg-gold text-[12px] font-bold text-white hover:bg-gold/90"
                >
                  <Link href="/volunteer">Support This Programme</Link>
                </Button>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-footer py-16 text-white sm:py-20">
        <div className="mx-auto max-w-[800px] px-6 text-center sm:px-10 lg:px-12">
          <h2 className="text-[28px] font-bold leading-tight sm:text-[36px]">
            Want to make a difference?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-[14px] leading-[1.65] text-white/72">
            Whether you volunteer, donate, or partner with us, your support
            helps us reach more families and create lasting change.
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
                Donate Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
