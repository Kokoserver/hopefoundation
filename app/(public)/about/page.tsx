import Link from "next/link";
import {
  ArrowUpRight,
  CheckCircle2,
  Eye,
  GraduationCap,
  Heart,
  HeartHandshake,
  ShieldCheck,
  Star,
  Target,
  Users,
  Utensils,
} from "lucide-react";
import { AnimatedCollapsible } from "@/components/common/animated-collapsible";
import { HomeTestimonialSection } from "@/components/common/home-testimonial-section";
import { OptimizedImage } from "@/components/common/optimized-image";
import { ScrollRevealController } from "@/components/common/scroll-reveal-controller";
import { StoryVideoPlayButton } from "@/components/common/story-video-button";
import { PageHero } from "@/components/common/static-design";
import { Button } from "@/components/ui/button";

const images = {
  hero: "/images/generated/foundation-outreach-branded.png",
  collageA: "/images/generated/foundation-outreach-branded.png",
  collageB: "/images/generated/foundation-healthcare-branded.png",
  collageC: "/images/new/400ca5bd72399daefb3ba1ed0da11072.jpg.jpeg",
  child: "/images/new/8c7e6f87be07cbf3341a2cdd6184c25d.jpg.jpeg",
  children: "/images/generated/foundation-education-branded.png",
  founder: "/images/new/chief.a.u.achebe_20260722_p_3946737021547120023_1_3946737021547120023.webp",
  outreach: "/images/new/c07c29641a2d90d19da14525b548a863.jpg.jpeg",
  relief: "/images/generated/foundation-healthcare-branded.png",
};

const approachCards = [
  {
    title: "Our Mission",
    description: "To create a more compassionate society by providing practical assistance, education, healthcare, and relief to underserved communities.",
    image: images.collageA,
    icon: Target,
  },
  {
    title: "Our Vision",
    description: "A future where every family has access to the essentials, opportunities, and support needed to live with dignity.",
    image: images.outreach,
    icon: Eye,
  },
  {
    title: "Our Values",
    description: "We are guided by compassion, transparency, accountability, dignity, and meaningful service to others.",
    image: images.child,
    icon: ShieldCheck,
  },
];

const highlights = [
  {
    title: "Access to Emergency Education",
    description: "We provide critical learning materials, uniforms, and support to keep children in school.",
    icon: GraduationCap,
  },
  {
    title: "Food Drive Impact Tracking",
    description: "Food relief is organized around real family needs, distribution records, and follow-up.",
    icon: Utensils,
  },
  {
    title: "MASH Cause Support",
    description: "Health programs connect underserved communities with practical care and referrals.",
    icon: HeartHandshake,
  },
];

const whatWeDoCards = [
  {
    title: "Education Support",
    description: "We help children and young people stay in school through learning materials, scholarships, and mentoring.",
    href: "/education",
    icon: GraduationCap,
  },
  {
    title: "Community Health",
    description: "We bring practical health outreach, awareness, screening, and care support closer to underserved families.",
    href: "/community-health-outreach",
    icon: HeartHandshake,
  },
  {
    title: "Humanitarian Relief",
    description: "We respond to urgent needs with food, care packages, and timely support delivered with dignity.",
    href: "/food-humanitarian-relief",
    icon: Heart,
  },
  {
    title: "Skills Development",
    description: "We provide digital, vocational, and livelihood training that helps people build self-reliance.",
    href: "/skills-development",
    icon: Users,
  },
];

const stats = [
  ["18K+", "Lives impacted"],
  ["$3.8M+", "Funds raised"],
  ["1200+", "Children supported"],
  ["35+", "Communities reached"],
];

const causes = [
  {
    title: "Education for Disadvantaged Children",
    description: "Scholarships, supplies, and mentoring for children who need a stronger start.",
    image: images.children,
  },
  {
    title: "Hunger Relief and Food Security",
    description: "Nutritious food distribution and family support for underserved communities.",
    image: images.outreach,
  },
  {
    title: "Community Health and Medical Aid",
    description: "Health screenings, medical outreach, and care coordination for families.",
    image: images.child,
  },
];

const volunteers = [
  ["Courtney Henry", "Medical volunteer", images.collageC],
  ["Dianne Russell", "Program volunteer", images.founder],
  ["Arlene McCoy", "Community volunteer", images.children],
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

function SliderPrompt() {
  return (
    <p className="mt-7 text-center text-[11px] font-medium text-[#697084]">
      <span className="mr-2 inline-flex gap-1 align-middle">
        <span className="h-2 w-2 rounded-full bg-primary" />
        <span className="h-2 w-2 rounded-full bg-primary/50" />
      </span>
      Let&apos;s make something great again!{" "}
      <Link href="/contact" className="font-semibold text-primary">
        Get In Touch
      </Link>
    </p>
  );
}

export default function AboutPage() {
  return (
    <>
      <ScrollRevealController />
      <PageHero title="About us" crumb="About Us" />

      <section className="relative z-10 bg-white py-20" data-scroll-reveal="fade-left">
        <div className="mx-auto grid max-w-[1120px] items-center gap-12 px-6 md:grid-cols-[0.94fr_1.06fr] lg:gap-16">
          <div className="relative mx-auto h-[520px] w-full max-w-[470px]" data-reveal-child="left">
            <div className="absolute left-[18%] top-[92px] h-[300px] w-[310px] overflow-hidden rounded-[10px]">
              <OptimizedImage src={images.collageA} alt="Volunteers packing relief supplies" fill quality={90} />
            </div>
            <div className="absolute right-0 top-0 h-[168px] w-[210px] overflow-hidden rounded-[10px] border-[6px] border-white">
              <OptimizedImage src={images.children} alt="Children receiving folded clothes" fill quality={90} />
            </div>
            <div className="absolute bottom-0 left-0 h-[230px] w-[245px] overflow-hidden rounded-[10px] border-[6px] border-white">
              <OptimizedImage src={images.child} alt="Smiling child with food support" fill quality={90} />
            </div>
          </div>
          <div className="max-w-[560px]" data-reveal-child="right" style={{ "--reveal-index": 1 } as React.CSSProperties}>
            <Kicker>About Us</Kicker>
            <h2 className="mt-4 max-w-[560px] text-[34px] font-semibold leading-[1.08] tracking-[-0.045em] text-[#2A1708] sm:text-[46px]">
              Growing together to create lasting impact
            </h2>
            <p className="mt-6 max-w-[560px] text-[15px] leading-7 text-[#697084]">
              From grassroots initiatives to large scale community programs, we continue to grow with one purpose to serve those in need with integrity and compassion.
            </p>

            <div className="mt-9 rounded-[18px] bg-white px-8 py-7 shadow-[0_18px_55px_rgba(15,23,42,.06)]">
              {[
                {
                  title: "Mission Driven Organization",
                  description: "We are committed to creating meaningful and sustainable change in the lives of underserved communities.",
                  icon: GraduationCap,
                },
                {
                  title: "Transparent, Trusted, and Impactful",
                  description: "We operate with full transparency and accountability, ensuring that every contribution is used efficiently to deliver results.",
                  icon: ShieldCheck,
                },
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className={index === 0 ? "border-b border-[#e8e8e8] pb-7" : "pt-7"}>
                    <div className="flex items-start gap-5">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary text-white">
                        <Icon className="h-5 w-5" />
                      </span>
                      <div>
                        <h3 className="text-[18px] font-semibold tracking-[-0.02em] text-[#2A1708]">{item.title}</h3>
                        <p className="mt-3 text-[14px] leading-7 text-[#697084]">{item.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-9 border-t border-[#dcdcdc] pt-8">
              <div className="flex flex-wrap items-center gap-8">
                <Button asChild className="h-11 rounded-[5px] bg-primary px-4 text-[13px] font-semibold text-white hover:bg-accent">
                  <Link href="/about" className="primary-cta">
                    Contact Us
                    <span className="ml-3 flex h-8 w-8 items-center justify-center rounded-[5px] bg-white text-[#2A1708]">
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </Link>
                </Button>
                <div className="flex items-center gap-4">
                  <span className="relative h-12 w-12 overflow-hidden rounded-full">
                    <OptimizedImage src={images.founder} alt="Kathryn Murphy" fill quality={90} />
                  </span>
                  <div>
                    <p className="text-[16px] font-semibold text-[#2A1708]">Kathryn Murphy</p>
                    <p className="mt-1 text-[13px] text-[#697084]">CEO & Founder</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 bg-[#f4f4f4] py-20" data-scroll-reveal="fade-right">
        <div className="mx-auto grid max-w-[1120px] items-center gap-12 px-6 md:grid-cols-[1.06fr_0.94fr] lg:gap-16">
          <div data-reveal-child="left">
            <div className="max-w-[560px]">
              <Kicker>What We Do</Kicker>
              <h2 className="mt-4 text-[28px] font-semibold leading-[1.08] tracking-[-0.045em] text-[#2A1708] sm:text-[38px]">
                Practical programs that meet real community needs
              </h2>
              <p className="mt-4 text-[13px] leading-6 text-[#697084]">
                Our work focuses on education, health, relief, and skills support so families can move from immediate help to lasting stability.
              </p>
            </div>
            <div className="mt-9 grid gap-5 sm:grid-cols-2">
              {whatWeDoCards.map((card, index) => {
                const Icon = card.icon;
                return (
                  <Link
                    key={card.title}
                    href={card.href}
                    className="flex min-h-[250px] flex-col rounded-[12px] bg-white p-6 shadow-sm transition hover:-translate-y-1"
                    data-reveal-child="zoom"
                    style={{ "--reveal-index": index + 1 } as React.CSSProperties}
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="mt-7 text-[15px] font-semibold text-[#2A1708]">{card.title}</h3>
                    <p className="mt-3 text-[12px] leading-6 text-[#697084]">{card.description}</p>
                    <span className="mt-auto inline-flex items-center gap-1 border-t border-[#e9e9e9] pt-5 text-[12px] font-semibold text-[#2A1708]">
                      Read More <ArrowUpRight className="h-3.5 w-3.5" />
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="relative mx-auto h-[540px] w-full max-w-[480px]" data-reveal-child="right" style={{ "--reveal-index": 1 } as React.CSSProperties}>
            <div className="absolute left-0 top-16 h-[360px] w-[315px] overflow-hidden rounded-[10px]">
              <OptimizedImage src={images.outreach} alt="Community outreach support" fill quality={90} />
            </div>
            <div className="absolute right-0 top-0 h-[185px] w-[215px] overflow-hidden rounded-[10px] border-[6px] border-[#f4f4f4] shadow-[0_14px_40px_rgba(15,23,42,.12)]">
              <OptimizedImage src={images.collageC} alt="Volunteers preparing food support" fill quality={90} />
            </div>
            <div className="absolute bottom-0 right-6 h-[205px] w-[280px] overflow-hidden rounded-[10px] border-[6px] border-[#f4f4f4] shadow-[0_14px_40px_rgba(15,23,42,.12)]">
              <OptimizedImage src={images.children} alt="Children supported by foundation programs" fill quality={90} />
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#f4f4f4] py-20" data-scroll-reveal="fade-right">
        <div className="mx-auto max-w-[1120px] px-6">
          <div className="mx-auto mb-10 max-w-[560px] text-center" data-reveal-child="zoom">
            <Kicker>Our Approach</Kicker>
            <h2 className="mt-4 text-[28px] font-semibold leading-[1.08] tracking-[-0.045em] text-[#2A1708] sm:text-[36px]">
              Smart solutions for real impact
            </h2>
            <p className="mt-4 text-[13px] leading-6 text-[#697084]">
              We combine practical support, accountable delivery, and community partnerships to create lasting change.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {approachCards.map((card) => {
              const Icon = card.icon;
              return (
                <Link
                  key={card.title}
                  href="/about"
                  className="rounded-[10px] bg-white p-5 shadow-sm"
                  data-reveal-child="zoom"
                  style={{ "--reveal-index": approachCards.indexOf(card) + 1 } as React.CSSProperties}
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white">
                    <Icon className="h-4 w-4" />
                  </span>
                  <div className="relative mt-4 h-[170px] overflow-hidden rounded-[8px]">
                    <OptimizedImage src={card.image} alt={card.title} fill quality={90} />
                  </div>
                  <h3 className="mt-5 text-[15px] font-semibold text-[#2A1708]">{card.title}</h3>
                  <p className="mt-2 text-[12px] leading-5 text-[#697084]">{card.description}</p>
                </Link>
              );
            })}
          </div>
          <SliderPrompt />
        </div>
      </section>

      <section className="bg-white py-20" data-scroll-reveal="zoom-up">
        <div className="mx-auto grid max-w-[1120px] items-center gap-12 px-6 md:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <div className="relative mx-auto h-[520px] w-full max-w-[500px]" data-reveal-child="left">
            <div className="absolute left-[10%] top-0 h-[480px] w-[390px] overflow-hidden rounded-[10px]">
              <OptimizedImage src={images.child} alt="Child holding donated teddy bears" fill quality={90} />
            </div>
            <div className="absolute left-0 top-4 rounded-[10px] bg-white px-5 py-5 shadow-[0_14px_40px_rgba(15,23,42,.12)]">
              <p className="text-[18px] font-semibold leading-tight text-[#2A1708]">3,500+ Active</p>
              <p className="text-[18px] font-semibold leading-tight text-[#2A1708]">Volunteers</p>
              <div className="mt-7 flex -space-x-2">
                {[images.founder, images.collageA, images.outreach, images.children].map((image) => (
                  <span key={image} className="relative h-8 w-8 overflow-hidden rounded-full border-2 border-white">
                    <OptimizedImage src={image} alt="" fill quality={80} />
                  </span>
                ))}
              </div>
            </div>
            <div className="absolute bottom-10 right-0 h-[160px] w-[220px] overflow-hidden rounded-[12px] border-[6px] border-white shadow-[0_14px_40px_rgba(15,23,42,.16)]">
              <OptimizedImage src={images.relief} alt="Child receiving food support" fill quality={90} />
            </div>
          </div>
          <div className="max-w-[580px]" data-reveal-child="right" style={{ "--reveal-index": 1 } as React.CSSProperties}>
            <Kicker>Why Donate?</Kicker>
            <h2 className="mt-4 text-[34px] font-semibold leading-[1.08] tracking-[-0.045em] text-[#2A1708] sm:text-[46px]">
              Transforming generosity into meaningful change
            </h2>
            <p className="mt-6 max-w-[560px] text-[15px] leading-7 text-[#697084]">
              We design and implement sustainable programs in education, healthcare, hunger relief, and disaster response to uplift underserved communities & create lasting social impact.
            </p>
            <div className="mt-8 grid overflow-hidden rounded-[16px] bg-[#f4f4f4] p-6 sm:grid-cols-[1fr_220px] sm:gap-7">
              <div>
                <h3 className="text-[17px] font-semibold text-[#2A1708]">Real Time Impact Tracking</h3>
                <div className="mt-7 space-y-4">
                  {[
                    "Transparent, easy to read reports",
                    "Track the ongoing status of donation",
                    "Access your own dashboard monitor",
                  ].map((item) => (
                    <p key={item} className="flex items-center gap-3 text-[14px] text-[#697084]">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" /> {item}
                    </p>
                  ))}
                </div>
              </div>
              <div className="relative mt-6 h-[160px] overflow-hidden rounded-[12px] sm:mt-0">
                <OptimizedImage src={images.children} alt="Children supported by donation tracking" fill quality={90} />
              </div>
            </div>
            <div className="mt-8 border-t border-[#dcdcdc] pt-8">
              <Button asChild className="h-11 rounded-[5px] bg-primary px-4 text-[13px] font-semibold text-white hover:bg-accent">
                <Link href="/contact" className="primary-cta">
                  Contact Us
                  <span className="ml-3 flex h-8 w-8 items-center justify-center rounded-[5px] bg-white text-[#2A1708]">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f4f4f4] py-20" data-scroll-reveal="soft-rise">
        <div className="mx-auto max-w-[1120px] px-6">
          <div className="mx-auto mb-8 max-w-[520px] text-center" data-reveal-child="zoom">
            <Kicker>Highlights</Kicker>
            <h2 className="mt-4 text-[26px] font-semibold leading-[1.05] tracking-[-0.04em] text-[#2A1708]">
              Highlights our impactful work
            </h2>
            <p className="mt-4 text-[12px] leading-6 text-[#697084]">
              Each initiative is planned, delivered, and reviewed to ensure our programs reach the communities that need them most.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {highlights.map((highlight) => {
              const Icon = highlight.icon;
              return (
                <div
                  key={highlight.title}
                  className="rounded-[10px] bg-white p-5"
                  data-reveal-child="zoom"
                  style={{ "--reveal-index": highlights.indexOf(highlight) + 1 } as React.CSSProperties}
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
          <div className="mx-auto mt-8 max-w-[860px] rounded-[10px] bg-[#381800] p-5 text-white" data-reveal-child="zoom" style={{ "--reveal-index": 4 } as React.CSSProperties}>
            <div className="grid gap-5 sm:grid-cols-4">
              {stats.map(([value, label]) => (
                <div key={label}>
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary">
                    <Users className="h-4 w-4" />
                  </span>
                  <p className="mt-5 text-[24px] font-semibold">{value}</p>
                  <p className="mt-1 text-[11px] text-white/60">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 bg-white py-20" data-scroll-reveal="fade-left">
        <div className="mx-auto max-w-[1120px] px-6">
          <div className="mb-8 grid gap-5 md:grid-cols-2 md:items-end" data-reveal-child>
            <div>
              <Kicker>Our Causes</Kicker>
              <h2 className="mt-4 max-w-[420px] text-[26px] font-semibold leading-[1.05] tracking-[-0.04em] text-[#2A1708]">
                Dedicated to meaningful & lasting change
              </h2>
            </div>
            <div>
              <p className="text-[12px] leading-6 text-[#697084]">
                Our causes are built around immediate needs and long-term outcomes for vulnerable families.
              </p>
              <Button asChild className="mt-4 h-9 rounded-[5px] bg-primary px-4 text-[11px] font-semibold text-white">
                <Link href="/services" className="primary-cta">
                  Our Services <ArrowUpRight className="ml-1 h-3 w-3" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {causes.map((cause) => (
              <Link
                key={cause.title}
                href="/services"
                className="overflow-hidden rounded-[10px] bg-white shadow-sm"
                data-reveal-child="zoom"
                style={{ "--reveal-index": causes.indexOf(cause) + 1 } as React.CSSProperties}
              >
                <div className="relative h-[230px]">
                  <OptimizedImage src={cause.image} alt={cause.title} fill quality={90} />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#120800]/90 via-[#120800]/24 to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5 text-white">
                    <h3 className="text-[14px] font-semibold leading-snug">{cause.title}</h3>
                    <p className="mt-2 text-[10px] leading-4 text-white/70">{cause.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <SliderPrompt />
        </div>
      </section>

      <section className="sticky top-0 z-0 bg-[#381800]">
        <div className="relative h-[660px] min-h-[78vh] overflow-hidden text-center text-white">
          <OptimizedImage src="/images/video-banner.png" alt="Volunteers sharing relief supplies with children" fill quality={90} className="object-cover object-center" showPlaceholder={false} />
          <div className="absolute inset-0 bg-[#120800]/34" />
          <div className="absolute inset-0 bg-radial-[circle_at_center] from-transparent via-[#120800]/16 to-[#120800]/42" />
          <div className="relative z-10 mx-auto flex h-full max-w-[930px] -translate-y-8 flex-col items-center justify-center px-6">
            <Kicker dark>Watch Our Story</Kicker>
            <h2 className="mt-7 text-[34px] font-bold leading-[1.04] tracking-[-0.045em] sm:text-[44px]">
              Together we&apos;re changing lives
            </h2>
            <p className="mx-auto mt-5 max-w-[620px] text-[13px] leading-6 text-white/80">
              Through the collective support of donors, volunteers, and partners, we provide education, healthcare, food, and emergency relief to communities in need creating hope, dignity.
            </p>
            <StoryVideoPlayButton />
          </div>
        </div>
      </section>

      <section className="relative z-10 bg-white py-20" data-scroll-reveal="fade-right">
        <div className="mx-auto max-w-[1120px] px-6">
          <div className="mb-8 grid gap-5 md:grid-cols-2 md:items-end" data-reveal-child>
            <div>
              <Kicker>Meet Our Team</Kicker>
              <h2 className="mt-4 max-w-[420px] text-[26px] font-semibold leading-[1.05] tracking-[-0.04em] text-[#2A1708]">
                Working together to build a better future
              </h2>
            </div>
            <div>
              <p className="text-[12px] leading-6 text-[#697084]">
                Our team combines strategy, field work, and volunteer energy to keep each program moving forward.
              </p>
              <Button asChild className="mt-4 h-9 rounded-[5px] bg-primary px-4 text-[11px] font-semibold text-white">
                <Link href="/volunteer" className="primary-cta">
                  Join Our Team <ArrowUpRight className="ml-1 h-3 w-3" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="grid gap-5 md:grid-cols-4">
            <div className="hidden rounded-[10px] bg-gradient-to-b from-[#f4f4f4] to-[#120800] md:block" data-reveal-child="left" />
            {volunteers.map(([name, role, image], index) => (
              <Link
                key={name}
                href="/volunteer"
                className="relative h-[260px] overflow-hidden rounded-[10px] bg-[#381800]"
                data-reveal-child="zoom"
                style={{ "--reveal-index": index + 1 } as React.CSSProperties}
              >
                <OptimizedImage src={image} alt={name} fill quality={90} />
                <div className="absolute inset-0 bg-gradient-to-t from-[#120800]/92 via-[#120800]/20 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <h3 className="text-[14px] font-semibold">{name}</h3>
                  <p className="mt-2 text-[11px] text-white/70">{role}</p>
                </div>
              </Link>
            ))}
          </div>
          <SliderPrompt />
        </div>
      </section>

      <HomeTestimonialSection />

      <section className="relative z-10 bg-white py-20" data-scroll-reveal="fade-left">
        <div className="mx-auto grid max-w-[1120px] items-center gap-8 px-6 md:grid-cols-[0.8fr_1.2fr]">
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
              <p className="text-[11px] text-white/60">Trusted by volunteers</p>
            </div>
          </div>
          <div data-reveal-child="right" style={{ "--reveal-index": 1 } as React.CSSProperties}>
            <Kicker>Popular Questions</Kicker>
            <h2 className="mt-4 text-[26px] font-semibold leading-[1.05] tracking-[-0.04em] text-[#2A1708]">
              Your questions answered with transparency & care
            </h2>
            <div className="mt-6 space-y-3">
              <AnimatedCollapsible
                name="about-faq"
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
