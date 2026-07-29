import Link from "next/link";
import {
  ArrowUpRight,
  CalendarDays,
  CheckCircle2,
  GraduationCap,
  Heart,
  HeartHandshake,
  Home as HomeIcon,
  Phone,
  ShieldCheck,
  Star,
  Stethoscope,
  Users,
  Utensils,
} from "lucide-react";
import { AnimatedCollapsible } from "@/components/common/animated-collapsible";
import { OptimizedImage } from "@/components/common/optimized-image";
import { ProgramCarousel } from "@/components/common/program-carousel";
import { ScrollRevealController } from "@/components/common/scroll-reveal-controller";
import { StoryVideoButton, StoryVideoPlayButton } from "@/components/common/story-video-button";
import { TestimonialCardCarousel } from "@/components/common/testimonial-card-carousel";
import { Button } from "@/components/ui/button";

const images = {
  hero: "/images/generated/foundation-outreach-branded.png",
  collageA: "/images/generated/foundation-outreach-branded.png",
  collageB: "/images/generated/foundation-healthcare-branded.png",
  collageC: "/images/generated/foundation-partners-branded.png",
  child: "/images/generated/foundation-child-welfare-branded.png",
  children: "/images/generated/foundation-education-branded.png",
  childWelfare: "/images/generated/foundation-child-welfare-branded.png",
  foodRelief: "/images/generated/foundation-food-relief-branded.png",
  partners: "/images/generated/foundation-partners-branded.png",
  volunteers: "/images/generated/foundation-volunteers-branded.png",
  womenSkills: "/images/generated/foundation-women-skills-branded.png",
  founder: "/images/new/chief.a.u.achebe_20260722_p_3946737021547120023_1_3946737021547120023.webp",
  outreach: "/images/generated/foundation-food-relief-branded.png",
  relief: "/images/generated/foundation-healthcare-branded.png",
};

const services = [
  {
    title: "Education Support Programs",
    description: "We offer scholarship, school supply distribution, digital learning access & mentorship.",
    icon: GraduationCap,
  },
  {
    title: "Emergency & Disaster Relief",
    description: "Our healthcare initiatives include free medical camps, health check-ups, and other services.",
    icon: HeartHandshake,
  },
  {
    title: "Food & Nutrition Assistance",
    description: "Through food drives & nutrition programs we distribute essential groceries.",
    icon: Utensils,
  },
  {
    title: "Shelter & Housing Support",
    description: "We assist vulnerable families with emergency shelter kits, housing repairs.",
    icon: HomeIcon,
  },
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
    image: images.foodRelief,
  },
  {
    title: "Community Health and Medical Aid",
    description: "Health screenings, medical outreach, and care coordination for families.",
    image: images.relief,
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
    icon: Stethoscope,
  },
];

const stats = [
  ["18K+", "Lives impacted"],
  ["$3.8M+", "Funds raised"],
  ["1200+", "Children supported"],
  ["35+", "Communities reached"],
];

const programs = [
  {
    category: "Hope Kids",
    title: "Hope for All Mega Fundraising Drive for Underprivileged Families",
    image: images.childWelfare,
  },
  {
    category: "Food Relief",
    title: "Monthly Food Distribution & Nutrition Support Program",
    image: images.foodRelief,
  },
  {
    category: "Healthcare",
    title: "Free Community Health Check-Up & Medical Awareness Outreach",
    image: images.relief,
  },
  {
    category: "Hunger Relief",
    title: "Monthly Food Distribution & Nutrition Support Program",
    image: images.foodRelief,
  },
  {
    category: "Healthcare",
    title: "Rural Outreach Medical Camp & Free Health Screening Initiative",
    image: images.relief,
  },
  {
    category: "Disaster Relief",
    title: "Emergency Shelter Support & Disaster Relief Assistance Program",
    image: images.outreach,
  },
];

const questions = [
  "Can I make a recurring monthly donation?",
  "How do I know my donation is being used effectively?",
  "Can I volunteer with your organization?",
  "How can I make a donation?",
  "How do I get updates about the causes I support?",
];

const blogPosts = [
  {
    title: "Empowering Women Through Skill Development",
    date: "April 22, 2026",
    image: images.womenSkills,
  },
  {
    title: "Building Safe Homes for Families in Need",
    date: "April 22, 2026",
    image: images.childWelfare,
  },
  {
    title: "Partnering with Local Businesses for Greater Impact",
    date: "April 22, 2026",
    image: images.partners,
  },
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

function ReadMore({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-1 text-[12px] font-semibold ${className}`}>
      Read More <ArrowUpRight className="h-3.5 w-3.5" />
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

function ProgramCarouselPrompt() {
  return (
    <div className="mt-10 text-center text-[#2A1708]">
      <p className="flex flex-wrap items-center justify-center gap-3 text-[14px] leading-6">
        <span className="rounded-full bg-primary px-4 py-1 text-[13px] font-semibold text-white">Free</span>
        <span>Join Our Upcoming Programs and Be Part of Meaningful Change.</span>
      </p>
      <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-[14px]">
        <span>
          Trusted By <strong className="text-[18px] font-semibold">58,900+</strong> Users
        </span>
        <span className="h-5 w-px bg-[#d9dadd]" aria-hidden="true" />
        <span className="flex items-center gap-1 text-primary">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star key={star} className="h-4 w-4 fill-current" />
          ))}
          <strong className="ml-1 text-[14px] font-semibold text-[#2A1708]">4.9/5</strong>
        </span>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <ScrollRevealController />
      <section className="relative min-h-[770px] overflow-hidden bg-[#381800] text-white">
        <div className="absolute inset-0">
          <OptimizedImage src={images.hero} alt="Smiling child" fill priority quality={90} className="object-cover object-center md:object-[62%_center]" />
          <div className="absolute inset-y-0 left-0 w-[62%] bg-[#120800]/42 backdrop-blur-[3px] [mask-image:linear-gradient(to_right,black_0%,black_62%,transparent_100%)]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#120800]/34 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#120800]/24 via-transparent to-transparent" />
        </div>
        <div className="relative mx-auto flex min-h-[770px] max-w-[1300px] px-6 pt-[170px] sm:px-10 lg:px-12">
          <div className="flex w-full flex-col">
            <div className="max-w-[430px]">
              <div className="inline-flex items-center rounded-full bg-white/12 py-1 pl-1 pr-4 text-[13px] font-medium text-white/82 backdrop-blur">
                <span className="mr-3 flex -space-x-2">
                  {[images.childWelfare, images.foodRelief, images.volunteers, images.children].map((image) => (
                    <span key={image} className="relative h-7 w-7 overflow-hidden rounded-full border border-white">
                      <OptimizedImage src={image} alt="" fill quality={80} />
                    </span>
                  ))}
                </span>
                Hopes Begins With You
              </div>
              <p className="mt-6 text-[15px] leading-7 text-white/76">
                Every contribution adds up to real change providing children with school supplies, families with essentials, & communities with sustainable support programs.
              </p>
            </div>

            <div className="mt-auto grid items-end gap-8 pb-20 md:grid-cols-[1fr_340px]">
              <h1 className="max-w-[680px] text-[40px] font-bold leading-[1.08] tracking-[-0.045em] sm:text-[58px] lg:text-[64px]">
                Turning small contributions into meaningful impact every day
              </h1>
              <div className="mb-5 hidden max-w-[250px] rounded-[28px] border border-white/14 bg-white/8 px-7 py-6 text-white backdrop-blur-sm md:block">
                <p className="text-[20px] font-semibold">
                  4.9<span className="text-[14px] text-white/72">/5.0</span> <Star className="ml-1 inline h-4 w-4 fill-current" />
                </p>
                <p className="mt-7 text-[18px] font-semibold leading-7">Trusted by thousands of supporters</p>
              </div>
            </div>
          </div>
        </div>
        <StoryVideoButton />
      </section>

      <section className="bg-white py-20" data-scroll-reveal="fade-left">
        <div className="mx-auto grid max-w-[1120px] items-center gap-12 px-6 md:grid-cols-[0.94fr_1.06fr] lg:gap-16" data-reveal-child="left">
          <div className="relative mx-auto h-[520px] w-full max-w-[470px]">
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
          <div className="max-w-[560px]">
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
                    More About Us
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

      <section className="relative overflow-hidden bg-white py-20" data-scroll-reveal="fade-right">
        <div className="absolute left-0 bottom-0 hidden h-[260px] w-[180px] border border-[#e5e7eb] opacity-40 lg:block" />
        <div className="absolute right-8 top-0 hidden text-[92px] leading-none text-[#e5e7eb] opacity-70 lg:block">♡</div>
        <div className="mx-auto max-w-[1120px] px-6" data-reveal-child="right">
          <div className="mb-20 grid gap-8 md:grid-cols-2 md:items-start">
            <div>
              <Kicker>Our Services</Kicker>
              <h2 className="mt-5 max-w-[520px] text-[34px] font-semibold leading-[1.08] tracking-[-0.045em] text-[#2A1708] sm:text-[46px]">
                Delivering support where it&apos;s needed most
              </h2>
            </div>
            <div className="max-w-[520px] md:pt-4">
              <p className="text-[15px] leading-7 text-[#697084]">
                Delivering support where it&apos;s needed most, we focus on reaching vulnerable communities with timely assistance and sustainable programs.
              </p>
              <Button asChild className="mt-7 h-11 rounded-[5px] bg-primary px-4 text-[13px] font-semibold text-white hover:bg-accent">
                <Link href="/services" className="primary-cta">
                  View All Services
                  <span className="ml-3 flex h-8 w-8 items-center justify-center rounded-[5px] bg-white text-[#2A1708]">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </Link>
              </Button>
            </div>
          </div>
          <div className="grid items-start gap-10 lg:grid-cols-[1fr_330px]">
            <div className="grid sm:grid-cols-2">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <Link
                    key={service.title}
                    href="/services"
                    className="flex min-h-[210px] flex-col border-[#e8e8e8] p-6 transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_18px_45px_rgba(15,23,42,0.08)] [&:not(:last-child)]:border-b sm:[&:not(:last-child)]:border-b-0 sm:odd:border-r sm:[&:nth-child(-n+2)]:border-b"
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-white">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="mt-6 text-[17px] font-semibold text-[#2A1708]">{service.title}</h3>
                    <p className="mt-3 max-w-[300px] text-[14px] leading-7 text-[#697084]">{service.description}</p>
                    <ReadMore className="mt-5 text-[#2A1708]" />
                  </Link>
                );
              })}
            </div>
            <div className="rounded-[14px] bg-[#381800] px-8 pb-0 pt-9 text-center text-white">
              <div className="flex justify-center -space-x-3">
                {[images.founder, images.foodRelief, images.childWelfare, images.children, images.volunteers].map((image) => (
                  <span key={image} className="relative h-11 w-11 overflow-hidden rounded-full border-2 border-[#381800]">
                    <OptimizedImage src={image} alt="" fill quality={80} />
                  </span>
                ))}
              </div>
              <div className="mt-8 border-t border-white/10 pt-6">
                <div className="flex justify-center gap-1 text-white">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="mx-auto mt-6 max-w-[230px] text-[17px] font-semibold leading-7">
                  Trust Score 4.9 (Based on 4500 Reviews)
                </p>
              </div>
              <Button asChild className="mt-7 h-11 rounded-[5px] bg-primary px-4 text-[13px] font-semibold text-white hover:bg-accent">
                <Link href="/contact" className="primary-cta">
                  Contact Now
                  <span className="ml-3 flex h-8 w-8 items-center justify-center rounded-[5px] bg-white text-[#2A1708]">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </Link>
              </Button>
              <div className="mt-8 flex h-[110px] items-end justify-center gap-3 overflow-hidden text-white/18">
                {["h-9", "h-[70px]", "h-12", "h-[82px]", "h-14", "h-24", "h-16"].map((heightClass, index) => (
                  <span key={`${heightClass}-${index}`} className="flex w-7 flex-col items-center gap-1">
                    <Heart className="h-4 w-4 fill-current" />
                    <span className={`w-3 rounded-t-full bg-current ${heightClass}`} />
                  </span>
                ))}
              </div>
            </div>
          </div>
          <p className="mt-12 flex flex-wrap items-center justify-center gap-2 text-center text-[13px] font-medium text-[#697084]">
            <span className="relative h-8 w-8 overflow-hidden rounded-full">
              <OptimizedImage src={images.founder} alt="" fill quality={80} />
            </span>
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-white">
              <Phone className="h-3.5 w-3.5" />
            </span>
            Let&apos;s make something great work together.
            <Link href="/contact" className="font-semibold text-primary underline underline-offset-2">
              Get Free Quote
            </Link>
          </p>
        </div>
      </section>

      <section className="bg-[#f4f4f4] py-20" data-scroll-reveal="zoom-up">
        <div className="mx-auto grid max-w-[1120px] items-center gap-12 px-6 md:grid-cols-[0.95fr_1.05fr] lg:gap-16" data-reveal-child="zoom">
          <div className="relative mx-auto h-[520px] w-full max-w-[500px]">
            <div className="absolute left-[10%] top-0 h-[480px] w-[390px] overflow-hidden rounded-[10px]">
              <OptimizedImage src={images.child} alt="Child holding donated teddy bears" fill quality={90} />
            </div>
            <div className="absolute left-0 top-4 rounded-[10px] bg-white px-5 py-5 shadow-[0_14px_40px_rgba(15,23,42,.12)]">
              <p className="text-[18px] font-semibold leading-tight text-[#2A1708]">3,500+ Active</p>
              <p className="text-[18px] font-semibold leading-tight text-[#2A1708]">Volunteers</p>
              <div className="mt-7 flex -space-x-2">
                {[images.founder, images.foodRelief, images.volunteers, images.children].map((image) => (
                  <span key={image} className="relative h-8 w-8 overflow-hidden rounded-full border-2 border-white">
                    <OptimizedImage src={image} alt="" fill quality={80} />
                  </span>
                ))}
              </div>
            </div>
            <div className="absolute bottom-10 right-0 h-[160px] w-[220px] overflow-hidden rounded-[12px] border-[6px] border-white shadow-[0_14px_40px_rgba(15,23,42,.16)]">
              <OptimizedImage src={images.foodRelief} alt="Family receiving food support" fill quality={90} />
            </div>
          </div>
          <div className="max-w-[580px]">
            <Kicker>Why Donate?</Kicker>
            <h2 className="mt-4 text-[34px] font-semibold leading-[1.08] tracking-[-0.045em] text-[#2A1708] sm:text-[46px]">
              Transforming generosity into meaningful change
            </h2>
            <p className="mt-6 max-w-[560px] text-[15px] leading-7 text-[#697084]">
              We design and implement sustainable programs in education, healthcare, hunger relief, and disaster response to uplift underserved communities & create lasting social impact.
            </p>
            <div className="mt-8 grid overflow-hidden rounded-[16px] bg-white p-6 sm:grid-cols-[1fr_220px] sm:gap-7">
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

      <section className="sticky top-0 z-0 bg-[#381800]">
        <div className="relative h-[660px] min-h-[78vh] overflow-hidden text-center text-white">
          <OptimizedImage src="/images/generated/foundation-volunteers-branded.png" alt="Volunteers sharing relief supplies with children" fill quality={90} className="object-cover object-center" showPlaceholder={false} />
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

      <section className="relative z-10 bg-white py-16" data-scroll-reveal="fade-left">
        <div className="mx-auto max-w-[930px] px-6" data-reveal-child>
          <div className="mb-8 grid gap-5 md:grid-cols-2 md:items-end">
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
                  View Services <ArrowUpRight className="ml-1 h-3 w-3" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {causes.map((cause) => (
              <Link key={cause.title} href="/services" className="group overflow-hidden rounded-[10px] bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(15,23,42,0.14)]">
                <div className="relative h-[230px]">
                  <OptimizedImage src={cause.image} alt={cause.title} fill quality={90} className="transition duration-700 group-hover:scale-105" />
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

      <section className="relative z-10 bg-[#f4f4f4] py-16" data-scroll-reveal="fade-right">
        <div className="mx-auto max-w-[930px] px-6" data-reveal-child="right">
          <div className="mx-auto mb-8 max-w-[520px] text-center">
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
                <div key={highlight.title} className="rounded-[10px] bg-white p-5 transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(15,23,42,0.08)]">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white">
                    <Icon className="h-4 w-4" />
                  </span>
                  <h3 className="mt-4 text-[13px] font-semibold text-[#2A1708]">{highlight.title}</h3>
                  <p className="mt-2 text-[11px] leading-5 text-[#697084]">{highlight.description}</p>
                </div>
              );
            })}
          </div>
          <div className="mt-8 rounded-[10px] bg-[#381800] p-5 text-white">
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

      <section className="relative z-10 bg-white py-20 md:py-24" data-scroll-reveal="zoom-up">
        <div className="mx-auto max-w-[930px] px-6" data-reveal-child="zoom">
          <div className="mb-9 grid gap-5 md:grid-cols-2 md:items-end">
            <div>
              <Kicker>Latest Programs</Kicker>
              <h2 className="mt-4 text-[26px] font-semibold leading-[1.05] tracking-[-0.04em] text-[#2A1708]">
                Join us in creating change that matters
              </h2>
            </div>
            <div>
              <p className="text-[12px] leading-6 text-[#697084]">
                Each of our fundraising drives, aid-community outreach programs, field services and events supports measurable outcomes.
              </p>
              <Button asChild className="mt-4 h-9 rounded-[5px] bg-primary px-4 text-[11px] font-semibold text-white">
                <Link href="/programs" className="primary-cta">
                  View Upcoming Programs <ArrowUpRight className="ml-1 h-3 w-3" />
                </Link>
              </Button>
            </div>
          </div>
          <ProgramCarousel programs={programs} />
          <ProgramCarouselPrompt />
        </div>
      </section>

      <section className="relative z-10 brand-dark-pattern py-32 text-white md:py-40" data-scroll-reveal="soft-rise">
        <div className="mx-auto grid max-w-[1040px] items-center gap-10 px-6 md:grid-cols-2" data-reveal-child="zoom">
          <div>
            <Kicker dark>Donate Now</Kicker>
            <h2 className="mt-5 text-[34px] font-semibold leading-[1.05] tracking-[-0.04em] md:text-[38px]">
              Your kindness can change a life today
            </h2>
            <p className="mt-5 text-[15px] leading-7 text-white/68">
              Every contribution helps provide education support, relief, skills training, and care.
            </p>
            <div className="mt-8 grid gap-4 text-[14px] text-white/75 sm:grid-cols-2">
              {["Secure & simple giving", "Transparent reporting", "One-time and recurring gifts", "Direct community support"].map((item) => (
                <span key={item} className="flex items-center gap-2">
                  <ShieldCheck className="h-5 w-5 text-primary" /> {item}
                </span>
              ))}
            </div>
          </div>
          <div className="rounded-[10px] bg-white p-7 text-[#2A1708] transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_60px_rgba(0,0,0,0.18)]">
            <p className="text-center text-[16px] font-semibold">How much would you like to donate today?</p>
            <p className="mt-4 text-[13px] leading-6 text-[#697084]">All donations directly support our organization and help us further our mission.</p>
            <div className="mt-6 grid grid-cols-3 gap-3">
              {["$10.00", "$25.00", "$50.00", "$100.00", "$250.00", "Custom"].map((amount, index) => (
                <button key={amount} className={`rounded-[5px] border px-4 py-3 text-[13px] font-semibold ${index === 0 ? "border-primary bg-primary text-white" : "border-[#e8e8e8] bg-[#f4f4f4]"}`} type="button">
                  {amount}
                </button>
              ))}
            </div>
            <button className="mt-6 h-12 w-full rounded-[5px] bg-primary text-[14px] font-semibold text-white" type="button">
              Donate now
            </button>
          </div>
        </div>
      </section>

      <section className="relative z-10 bg-white py-16" data-scroll-reveal="fade-left">
        <div className="mx-auto grid max-w-[930px] items-center gap-8 px-6 md:grid-cols-[0.8fr_1.2fr]" data-reveal-child="left">
          <div className="relative h-[330px]">
            <div className="absolute inset-0 overflow-hidden rounded-[10px]">
              <OptimizedImage src={images.partners} alt="Foundation partners reviewing support plans" fill quality={90} />
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
          <div>
            <Kicker>Popular Questions</Kicker>
            <h2 className="mt-4 text-[26px] font-semibold leading-[1.05] tracking-[-0.04em] text-[#2A1708]">
              Your questions answered with transparency & care
            </h2>
            <div className="mt-6 space-y-3">
              <AnimatedCollapsible
                name="homepage-faq"
                items={questions.map((question) => ({
                  title: question,
                  content: "Yes, we offer monthly giving so you can support your chosen cause consistently.",
                }))}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 min-h-[720px] overflow-hidden bg-[#381800] py-20 text-white md:py-0" data-scroll-reveal="fade-right">
        <div className="testimonial-image-wrap absolute inset-0 overflow-hidden">
          <OptimizedImage src={images.volunteers} alt="Testimonials from community supporters" fill quality={90} />
          <div className="absolute inset-0 bg-gradient-to-r from-[#120800]/38 via-[#120800]/20 to-[#120800]/54" />
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#120800]/86 to-transparent" />
        </div>
        <div className="relative mx-auto grid min-h-[720px] max-w-[1180px] items-center gap-10 px-6 md:grid-cols-[0.95fr_1.05fr]" data-reveal-child="right">
          <div className="self-end pb-16 md:pb-28">
            <div className="inline-flex items-center rounded-full bg-white/12 py-1 pl-1 pr-4 text-[13px] font-medium text-white/86 backdrop-blur">
              <span className="mr-3 flex -space-x-2">
                {[images.founder, images.foodRelief, images.volunteers, images.children].map((image) => (
                  <span key={image} className="relative h-7 w-7 overflow-hidden rounded-full border border-white">
                    <OptimizedImage src={image} alt="" fill quality={80} />
                  </span>
                ))}
              </span>
              What People Say
            </div>
            <h2 className="mt-6 max-w-[520px] text-[38px] font-semibold leading-[1.12] tracking-[-0.045em] md:text-[50px]">
              Building trust through real experiences
            </h2>
          </div>
          <div className="min-h-[560px] rounded-[18px] bg-white p-10 text-[#2A1708] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(0,0,0,0.22)] md:p-12">
            <TestimonialCardCarousel />
          </div>
        </div>
      </section>

      <section className="relative z-10 bg-white py-24 md:py-32" data-scroll-reveal="zoom-up">
        <div className="mx-auto max-w-[1040px] px-6" data-reveal-child="zoom">
          <div className="mb-16 grid gap-8 md:grid-cols-2 md:items-start">
            <div>
              <Kicker>Latest Blogs</Kicker>
              <h2 className="mt-5 max-w-[520px] text-[38px] font-semibold leading-[1.08] tracking-[-0.045em] text-[#2A1708] md:text-[48px]">
                Stories, updates and impact that inspire change
              </h2>
            </div>
            <div className="md:pt-5">
              <p className="max-w-[500px] text-[15px] leading-7 text-[#697084]">
                Stay informed with the latest updates from our community initiatives, inspiring success story, awareness campaigns, and transparent impact reports.
              </p>
              <Button asChild className="mt-7 h-11 rounded-[5px] bg-primary px-4 text-[13px] font-semibold text-white">
                <Link href="/blog" className="primary-cta">
                  View All Blogs
                  <span className="ml-3 flex h-8 w-8 items-center justify-center rounded-[5px] bg-white text-[#2A1708]">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </Link>
              </Button>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {blogPosts.map((post, index) => (
              <Link key={post.title} href={`/blog/${index + 1}`} className="group relative h-[320px] overflow-hidden rounded-[10px] bg-[#381800] shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_60px_rgba(15,23,42,0.18)]">
                <OptimizedImage src={post.image} alt={post.title} fill quality={90} className="transition duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#120800]/96 via-[#120800]/42 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8 z-10 text-white">
                  <p className="mb-4 flex items-center gap-2 text-[13px] font-medium text-white/88">
                    <CalendarDays className="h-4 w-4" />
                    {post.date}
                  </p>
                  <h3 className="max-w-[280px] text-[20px] font-semibold leading-[1.25] tracking-[-0.035em] text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.55)]">
                    {post.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
