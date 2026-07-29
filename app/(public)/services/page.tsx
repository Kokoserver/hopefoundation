import Link from "next/link";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  CheckCircle2,
  GraduationCap,
  HandHeart,
  Heart,
  HeartHandshake,
  Home,
  ShieldCheck,
  Star,
  Stethoscope,
  Users,
  Utensils,
} from "lucide-react";
import { AnimatedCollapsible } from "@/components/common/animated-collapsible";
import { HomeTestimonialSection } from "@/components/common/home-testimonial-section";
import { OptimizedImage } from "@/components/common/optimized-image";
import { ScrollRevealController } from "@/components/common/scroll-reveal-controller";
import { PageHero } from "@/components/common/static-design";
import { Button } from "@/components/ui/button";

const images = {
  collageA: "/images/generated/foundation-outreach-branded.png",
  collageC: "/images/new/400ca5bd72399daefb3ba1ed0da11072.jpg.jpeg",
  child: "/images/new/8c7e6f87be07cbf3341a2cdd6184c25d.jpg.jpeg",
  children: "/images/generated/foundation-education-branded.png",
  founder: "/images/new/chief.a.u.achebe_20260722_p_3946737021547120023_1_3946737021547120023.webp",
  outreach: "/images/new/c07c29641a2d90d19da14525b548a863.jpg.jpeg",
  relief: "/images/generated/foundation-healthcare-branded.png",
};

const services = [
  {
    title: "Education Support Programs",
    description: "We offer scholarship, school supply distribution, digital learning access & mentorship.",
    icon: GraduationCap,
  },
  {
    title: "Community Healthcare Services",
    description: "Our healthcare initiatives include free medical camps, health check-ups, and other services.",
    icon: Stethoscope,
  },
  {
    title: "Food & Nutrition Assistance",
    description: "Through food drives and nutrition programs, we distribute essential groceries.",
    icon: Utensils,
  },
  {
    title: "Shelter & Housing Support",
    description: "We assist vulnerable families with emergency shelter kits, housing repairs.",
    icon: Home,
  },
  {
    title: "Emergency & Disaster Relief",
    description: "Our rapid response teams provide immediate support during natural disasters.",
    icon: HandHeart,
  },
  {
    title: "Women Empowerment Program",
    description: "We offer skill development training, financial literacy workshops, & small business.",
    icon: BriefcaseBusiness,
  },
];

const highlights = [
  {
    title: "Secure & Encrypted Donations",
    description: "We use advanced SSL encryption and trusted payment gateways to ensure.",
    icon: ShieldCheck,
  },
  {
    title: "Real-Time Impact Tracking",
    description: "Track how your contribution is creating a difference through live campaigns.",
    icon: CheckCircle2,
  },
  {
    title: "Multi-Cause Support",
    description: "Choose from a variety of verified campaigns include education, healthcare, etc.",
    icon: HeartHandshake,
  },
];

const stats = [
  ["18K+", "Lives impacted"],
  ["$3.8M+", "Funds Raised"],
  ["1200+", "Children Supported"],
];

const questions = [
  "Can I make a recurring monthly donation?",
  "How do I know my donation is being used effectively?",
  "Can I volunteer with your organization?",
  "How can I make a donation?",
  "How do I get updates about the causes I support?",
];

function Kicker({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] font-semibold ${
        dark ? "bg-white/10 text-white/78" : "bg-white text-[#697084] shadow-sm"
      }`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
      {children}
    </span>
  );
}

function ReadMore() {
  return (
    <span className="mt-auto inline-flex items-center gap-1 border-t border-[#e9e9e9] pt-5 text-[12px] font-semibold text-[#2A1708]">
      Read More <ArrowUpRight className="h-3.5 w-3.5" />
    </span>
  );
}

export default function ServicesPage() {
  return (
    <>
      <ScrollRevealController />
      <PageHero title="Our Services" crumb="Services" />

      <section className="bg-[#f4f4f4] py-20" data-scroll-reveal="fade-left">
        <div className="mx-auto grid max-w-[930px] gap-6 px-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.title}
                href={`/services/${service.title.toLowerCase().replaceAll(" ", "-").replaceAll("&", "and")}`}
                className="flex min-h-[250px] flex-col rounded-[10px] bg-white p-6 shadow-sm"
                data-reveal-child="zoom"
                style={{ "--reveal-index": index } as React.CSSProperties}
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-white">
                  <Icon className="h-4 w-4" />
                </span>
                <h3 className="mt-6 text-[14px] font-semibold text-[#2A1708]">{service.title}</h3>
                <p className="mt-3 text-[11px] leading-5 text-[#697084]">{service.description}</p>
                <ReadMore />
              </Link>
            );
          })}
        </div>
      </section>

      <section className="bg-white py-20" data-scroll-reveal="soft-rise">
        <div className="mx-auto max-w-[930px] px-6">
          <div className="mx-auto mb-8 max-w-[520px] text-center" data-reveal-child="zoom">
            <Kicker>Our Core Features</Kicker>
            <h2 className="mt-4 text-[26px] font-semibold leading-[1.05] tracking-[-0.04em] text-[#2A1708]">
              Highlights our impactful work
            </h2>
            <p className="mt-4 text-[12px] leading-6 text-[#697084]">
              From seamless giving experiences to real-time impact tracking, our core features are built to connect generosity with meaningful results in the communities we serve.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <div
                  key={highlight.title}
                  className="rounded-[10px] bg-white p-5"
                  data-reveal-child="zoom"
                  style={{ "--reveal-index": index + 1 } as React.CSSProperties}
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white">
                    <Icon className="h-4 w-4" />
                  </span>
                  <h3 className="mt-4 text-[13px] font-semibold text-[#2A1708]">{highlight.title}</h3>
                  <p className="mt-2 text-[11px] leading-5 text-[#697084]">{highlight.description}</p>
                </div>
              );
            })}
          </div>
          <div className="mx-auto mt-8 max-w-[820px] rounded-[10px] bg-[#381800] p-7 text-white" data-reveal-child="zoom" style={{ "--reveal-index": 4 } as React.CSSProperties}>
            <div className="grid gap-7 sm:grid-cols-3">
              {stats.map(([value, label]) => (
                <div key={label}>
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary">
                    <Users className="h-4 w-4" />
                  </span>
                  <p className="mt-7 text-[24px] font-semibold">{value}</p>
                  <div className="my-4 h-px bg-white/10" />
                  <p className="text-[12px] font-semibold">{label}</p>
                  <p className="mt-2 text-[11px] leading-5 text-white/58">Through education, healthcare, food support, and emergency response.</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f4f4f4] py-20" data-scroll-reveal="zoom-up">
        <div className="mx-auto grid max-w-[930px] items-center gap-12 px-6 md:grid-cols-[0.9fr_1.1fr]">
          <div className="relative mx-auto h-[430px] w-full max-w-[360px]" data-reveal-child="left">
            <div className="absolute inset-0 overflow-hidden rounded-[10px]">
              <OptimizedImage src={images.child} alt="Child holding donated teddy bears" fill quality={90} />
            </div>
            <div className="absolute left-[-32px] top-5 rounded-[10px] bg-white px-4 py-4 shadow-[0_14px_40px_rgba(15,23,42,.12)]">
              <p className="text-[13px] font-semibold text-[#2A1708]">3,500+ Active</p>
              <p className="text-[13px] font-semibold text-[#2A1708]">Volunteers</p>
              <div className="mt-4 flex -space-x-2">
                {[images.founder, images.collageA, images.outreach].map((image) => (
                  <span key={image} className="relative h-7 w-7 overflow-hidden rounded-full border-2 border-white">
                    <OptimizedImage src={image} alt="" fill quality={80} />
                  </span>
                ))}
              </div>
            </div>
            <div className="absolute bottom-10 right-[-40px] h-[145px] w-[185px] overflow-hidden rounded-[12px] border-[6px] border-white shadow-[0_14px_40px_rgba(15,23,42,.16)]">
              <OptimizedImage src={images.relief} alt="Child receiving food support" fill quality={90} />
            </div>
          </div>
          <div data-reveal-child="right" style={{ "--reveal-index": 1 } as React.CSSProperties}>
            <Kicker>Why Choose Us</Kicker>
            <h2 className="mt-4 text-[34px] font-semibold leading-[1.08] tracking-[-0.045em] text-[#2A1708] sm:text-[42px]">
              Transforming generosity into meaningful change
            </h2>
            <p className="mt-5 max-w-[540px] text-[13px] leading-6 text-[#697084]">
              We design and implement sustainable programs in education, healthcare, hunger relief, and disaster response to uplift underserved communities & create lasting social impact.
            </p>
            <div className="mt-8 grid overflow-hidden rounded-[16px] bg-white p-5 sm:grid-cols-[1fr_170px] sm:gap-5">
              <div>
                <h3 className="text-[14px] font-semibold text-[#2A1708]">Real Time Impact Tracking</h3>
                <div className="mt-5 space-y-3">
                  {["Transparent, easy to read reports", "Track the ongoing status of donation", "Access your own dashboard monitor"].map((item) => (
                    <p key={item} className="flex items-center gap-3 text-[11px] text-[#697084]">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" /> {item}
                    </p>
                  ))}
                </div>
              </div>
              <div className="relative mt-5 h-[140px] overflow-hidden rounded-[12px] sm:mt-0">
                <OptimizedImage src={images.children} alt="Children supported by donation tracking" fill quality={90} />
              </div>
            </div>
            <Button asChild className="mt-7 h-9 rounded-[5px] bg-primary px-4 text-[11px] font-semibold text-white">
              <Link href="/contact" className="primary-cta">
                Contact Us <ArrowUpRight className="ml-1 h-3 w-3" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <HomeTestimonialSection />

      <section className="bg-white py-20" data-scroll-reveal="fade-left">
        <div className="mx-auto grid max-w-[930px] items-center gap-8 px-6 md:grid-cols-[0.8fr_1.2fr]">
          <div className="relative h-[330px]" data-reveal-child="left">
            <div className="absolute inset-0 overflow-hidden rounded-[10px]">
              <OptimizedImage src={images.collageC} alt="Food support" fill quality={90} />
            </div>
            <div className="absolute -right-4 top-10 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white shadow-xl">
              <Heart className="h-7 w-7 fill-current" />
            </div>
            <div className="absolute bottom-5 left-5 rounded-[10px] bg-[#381800] p-5 text-white shadow-xl">
              <div className="mb-3 flex gap-0.5 text-primary">{[1, 2, 3, 4, 5].map((star) => <Star key={star} className="h-3 w-3 fill-current" />)}</div>
              <p className="text-[20px] font-semibold">4.9/5</p>
              <p className="text-[11px] text-white/60">Trusted by our volunteers for transparency</p>
            </div>
          </div>
          <div data-reveal-child="right" style={{ "--reveal-index": 1 } as React.CSSProperties}>
            <Kicker>Frequently Asked Questions</Kicker>
            <h2 className="mt-4 text-[26px] font-semibold leading-[1.05] tracking-[-0.04em] text-[#2A1708]">
              Your questions answers with transparency & care
            </h2>
            <div className="mt-6 space-y-3">
              <AnimatedCollapsible
                name="services-faq"
                items={questions.map((question) => ({
                  title: question,
                  content: "Yes, we offer monthly giving so you can support your chosen cause consistently.",
                }))}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
