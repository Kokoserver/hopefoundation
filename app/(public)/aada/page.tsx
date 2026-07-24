import Link from "next/link";
import {
  ArrowRight,
  BriefcaseBusiness,
  CheckCircle2,
  GraduationCap,
  Handshake,
  Lightbulb,
  Network,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { OptimizedImage } from "@/components/common/optimized-image";

const courses = [
  "Digital Literacy",
  "Web Design & Development",
  "Data Analysis",
  "Product Design",
  "Digital Marketing",
  "No-Code Tools",
  "Content Creation",
  "Entrepreneurship",
];

const pillars = [
  {
    id: "digital-courses",
    title: "Practical Digital Courses",
    description:
      "Hands-on training focused on job-ready digital skills, portfolio building, and real-world project delivery.",
    icon: <GraduationCap className="h-6 w-6 text-primary" />,
  },
  {
    id: "mentorship",
    title: "Mentorship & Mentors",
    description:
      "Learners receive guidance from experienced professionals who support learning, confidence, and career direction.",
    icon: <Users className="h-6 w-6 text-primary" />,
  },
  {
    id: "scholarships",
    title: "Scholarships",
    description:
      "Scholarship pathways help underserved learners join cohorts without financial barriers limiting their access.",
    icon: <CheckCircle2 className="h-6 w-6 text-primary" />,
  },
  {
    id: "career-opportunities",
    title: "Career Opportunities",
    description:
      "AADA connects learners to internships, freelance pathways, employment readiness, and professional networks.",
    icon: <BriefcaseBusiness className="h-6 w-6 text-primary" />,
  },
  {
    id: "entrepreneurship",
    title: "Entrepreneurship Support",
    description:
      "Participants learn how to turn skills into income through business basics, client acquisition, and service packaging.",
    icon: <Lightbulb className="h-6 w-6 text-primary" />,
  },
  {
    id: "learning-communities",
    title: "Learning Communities",
    description:
      "Peer-led learning circles help students stay accountable, collaborate, share resources, and keep growing.",
    icon: <Network className="h-6 w-6 text-primary" />,
  },
  {
    id: "success-stories",
    title: "Success Stories",
    description:
      "AADA will document learner journeys, portfolio growth, business launches, and employment outcomes as cohorts progress.",
    icon: <CheckCircle2 className="h-6 w-6 text-primary" />,
  },
  {
    id: "partner",
    title: "Partner With AADA",
    description:
      "Companies, mentors, schools, and donors can sponsor cohorts, provide instructors, or create career pipelines.",
    icon: <Handshake className="h-6 w-6 text-primary" />,
  },
];

export default function AadaPage() {
  return (
    <div className="bg-background">
      <section className="relative overflow-hidden bg-footer pt-28 text-white sm:pt-32">
        <div className="absolute inset-0">
          <OptimizedImage
            src="/images/new/de27638f019a31c8b293f7ccc96dce4e.jpg.jpeg"
            alt="Young Africans learning digital skills"
            fill
            priority
            quality={90}
            className="object-cover object-center opacity-50"
            showPlaceholder={false}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/55 to-footer" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/25 to-transparent" />
        </div>

        <div className="relative mx-auto max-w-[1280px] px-6 pb-16 pt-16 sm:px-10 sm:pb-24 sm:pt-20 lg:px-[72px]">
          <div className="max-w-4xl animate-fade-up">
            <p className="mb-4 text-[12px] font-bold uppercase tracking-[0.22em] text-gold">
              Flagship Initiative
            </p>
            <h1 className="max-w-5xl text-[38px] font-bold leading-[1.08] sm:text-[56px] lg:text-[64px]">
              Achebe Africa Digital Academy (AADA)
            </h1>
            <p className="mt-6 max-w-3xl text-[15px] leading-[1.7] text-white/88 sm:text-[17px]">
              AADA tackles unemployment by equipping young Africans with
              practical digital skills, mentorship, entrepreneurship support,
              and pathways to meaningful work.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button
                asChild
                className="h-11 rounded-full bg-gold px-7 text-[12px] font-bold text-white hover:bg-gold/90"
              >
                <Link href="https://achebecampus.com/">
                  Join the Academy
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                className="h-11 rounded-full border border-white/30 bg-transparent px-7 text-[12px] font-bold text-white hover:bg-white/10"
              >
                <Link href="/contact">Partner With AADA</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto grid max-w-[1180px] gap-10 px-6 sm:px-10 lg:grid-cols-[0.9fr_1.1fr] lg:px-12">
          <div>
            <span className="inline-flex rounded-full bg-gold px-4 py-1.5 text-[12px] font-semibold text-white">
              About AADA
            </span>
            <h2 className="mt-5 text-[30px] font-bold leading-tight text-[#17191f] sm:text-[42px]">
              Solving unemployment through education and digital transformation.
            </h2>
          </div>
          <div className="space-y-5 text-[15px] leading-[1.75] text-[#4f4a43]">
            <p>
              Rather than simply addressing the symptoms of poverty, Achebe
              Africa Digital Academy addresses one of its root causes: limited
              access to market-relevant education and employable skills.
            </p>
            <p>
              As the flagship initiative of Achebe Hope Foundation, AADA
              represents the Foundation&apos;s long-term commitment to solving
              unemployment through practical training, innovation, mentorship,
              and career pathways.
            </p>
            <p>
              By combining humanitarian intervention with digital education,
              the Foundation is restoring hope for today while creating durable
              opportunities for tomorrow.
            </p>
          </div>
        </div>
      </section>

      <section id="courses" className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-[1180px] px-6 sm:px-10 lg:px-12">
          <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="inline-flex rounded-full bg-gold px-4 py-1.5 text-[12px] font-semibold text-white">
                Digital Courses
              </span>
              <h2 className="mt-5 text-[30px] font-bold leading-tight text-[#17191f] sm:text-[40px]">
                Practical skills for modern work.
              </h2>
            </div>
            <p className="max-w-md text-[13px] leading-[1.6] text-muted-foreground">
              Course tracks are reviewed with instructors, partners, and cohort
              capacity so learners receive practical, relevant training.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {courses.map((course) => (
              <div
                key={course}
                className="flex items-center gap-3 rounded-2xl border border-[#eadfcd] bg-[#fffaf2] px-4 py-4 text-[13px] font-semibold text-[#241E18]"
              >
                <CheckCircle2 className="h-4 w-4 shrink-0 text-gold" />
                {course}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1180px] px-6 sm:px-10 lg:px-12">
          <div className="mb-10">
            <span className="inline-flex rounded-full bg-gold px-4 py-1.5 text-[12px] font-semibold text-white">
              Inside AADA
            </span>
            <h2 className="mt-5 max-w-2xl text-[30px] font-bold leading-tight text-[#17191f] sm:text-[40px]">
              Training, mentorship, scholarships, and career support in one
              academy.
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {pillars.map((pillar) => (
              <Card
                key={pillar.title}
                id={pillar.id}
                className="hover-lift rounded-[22px] border border-[#eadfcd] bg-white shadow-[0_10px_30px_rgba(105,77,32,0.06)]"
              >
                <CardContent className="p-6">
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-gold/10">
                    {pillar.icon}
                  </div>
                  <h3 className="mb-3 text-[18px] font-bold text-[#17191f]">
                    {pillar.title}
                  </h3>
                  <p className="text-[13px] leading-[1.65] text-[#4f4a43]">
                    {pillar.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-footer py-16 text-white sm:py-20">
        <div className="mx-auto max-w-[820px] px-6 text-center sm:px-10 lg:px-12">
          <h2 className="text-[30px] font-bold leading-tight sm:text-[40px]">
            Reserve your slot or support an AADA cohort.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[15px] leading-[1.7] text-white/72">
            Learners, mentors, donors, schools, and corporate partners can help
            AADA expand access to practical digital education across Africa.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button
              asChild
              className="h-11 rounded-full bg-gold px-7 text-[12px] font-bold text-white hover:bg-gold/90"
            >
              <Link href="https://achebecampus.com/">Join the Academy</Link>
            </Button>
            <Button
              asChild
              className="h-11 rounded-full border border-white/30 bg-transparent px-7 text-[12px] font-bold text-white hover:bg-white/10"
            >
              <Link href="/donate#aada">Support AADA</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
