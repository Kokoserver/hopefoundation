import Link from "next/link";
import {
  ArrowUpRight,
  CalendarDays,
  HeartHandshake,
  Landmark,
  Mail,
  Phone,
  Play,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedCollapsible } from "@/components/common/animated-collapsible";
import { OptimizedImage } from "@/components/common/optimized-image";

export const designImages = [
  "/images/generated/foundation-outreach-branded.png",
  "/images/generated/foundation-child-welfare-branded.png",
  "/images/generated/foundation-food-relief-branded.png",
  "/images/generated/foundation-healthcare-branded.png",
  "/images/generated/foundation-volunteers-branded.png",
  "/images/generated/foundation-education-branded.png",
  "/images/generated/foundation-partners-branded.png",
  "/images/generated/foundation-women-skills-branded.png",
  "/images/new/chief.a.u.achebe_20260722_p_3946737021547120023_1_3946737021547120023.webp",
  "/images/generated/foundation-digital-academy-branded.png",
];

export const services = [
  "Education Support Programs",
  "Community Healthcare Services",
  "Food & Nutrition Assistance",
  "Shelter & Housing Support",
  "Emergency & Disaster Relief",
  "Women Empowerment Program",
];

export const programs = [
  {
    category: "Education",
    title: "Annual Fundraising Gala for Education & Healthcare Support",
  },
  {
    category: "Healthcare",
    title: "Rural Outreach Medical Camp & Free Health Screening Initiative",
  },
  {
    category: "Disaster Relief",
    title: "Hope for All Mega Fundraising Drive for Underprivileged Families",
  },
  {
    category: "Hunger Relief",
    title: "Monthly Food Distribution & Nutrition Support Program",
  },
  {
    category: "Healthcare",
    title: "Free Community Health Check-Up & Medical Awareness Outreach",
  },
  {
    category: "Disaster Relief",
    title: "Emergency Shelter Support & Disaster Relief Assistance Program",
  },
];

export const blogs = [
  "Empowering Women Through Skill Development",
  "Building Safe Homes for Families in Need",
  "Partnering with Local Businesses for Greater Impact",
  "Annual Fundraising Gala: Making a Difference Together",
  "Healthcare Camps: Reaching Those in Need",
  "Volunteer Stories: Creating Impact Together",
];

export const volunteers = [
  ["Brooklyn Simmons", "Program Manager"],
  ["Eleanor Pena", "Operations Head"],
  ["Guy Hawkins", "Volunteer Coordinator"],
  ["Annette Black", "Finance & Compliance Manager"],
  ["Arlene McCoy", "Community Outreach Manager"],
  ["Cameron Williamson", "Healthcare Program Coordinator"],
];

export function PageHero({
  title,
  crumb,
  plain = false,
}: {
  title: string;
  crumb: string;
  plain?: boolean;
}) {
  return (
    <section className="relative h-[420px] overflow-hidden bg-footer text-white">
      {!plain ? (
        <div className="absolute inset-0">
          <OptimizedImage
            src="/images/generated/foundation-outreach-branded.png"
            alt=""
            fill
            priority
            quality={90}
            className="object-cover object-[62%_center]"
            showPlaceholder={false}
          />
          <div className="absolute inset-y-0 left-0 w-[58%] bg-[#120800]/42 backdrop-blur-[3px] [mask-image:linear-gradient(to_right,black_0%,black_62%,transparent_100%)]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#120800]/30 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#120800]/20 via-transparent to-transparent" />
        </div>
      ) : (
        <div className="absolute inset-0 bg-gradient-to-r from-[#374151] via-[#d6d6d6] to-white" />
      )}
      <div className="relative mx-auto flex h-full max-w-[1300px] flex-col justify-center px-6 pt-24 sm:px-10">
        <h1 className="text-[44px] font-semibold leading-none tracking-[-0.045em] sm:text-[58px]">
          {title}
        </h1>
        <p className="mt-5 text-[13px] font-semibold text-white/88">
          Home <span className="mx-2 text-white/45">/</span> {crumb}
        </p>
      </div>
    </section>
  );
}

export function SectionKicker({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-[11px] font-semibold text-[#697084]">
      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
      {children}
    </span>
  );
}

export function StaticServiceGrid() {
  return (
    <section className="bg-[#f4f4f4] py-24">
      <div className="mx-auto grid max-w-[1180px] gap-8 px-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <Link
            key={service}
            href={`/services/${service.toLowerCase().replaceAll(" ", "-").replaceAll("&", "and")}`}
            className="rounded-[12px] bg-white p-7 shadow-sm transition hover:-translate-y-1"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white">
              <HeartHandshake className="h-4 w-4" />
            </span>
            <h3 className="mt-7 text-[15px] font-semibold text-[#2A1708]">{service}</h3>
            <p className="mt-2 min-h-14 text-[12px] leading-5 text-[#697084]">
              We offer practical support and outreach services for communities in need.
            </p>
            <div className="mt-14 border-t border-[#e9e9e9] pt-5 text-[12px] font-semibold text-[#2A1708]">
              Read More <ArrowUpRight className="ml-1 inline h-3.5 w-3.5" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export function StaticProgramGrid({
  variant = "programs",
}: {
  variant?: "programs" | "blog" | "gallery" | "video" | "volunteers";
}) {
  const gallery = designImages.slice(0, 9);

  if (variant === "gallery" || variant === "video") {
    return (
      <section className="bg-[#f4f4f4] py-24" data-scroll-reveal="fade-left">
        <div className="mx-auto grid max-w-[1180px] gap-8 px-6 sm:grid-cols-2 lg:grid-cols-3">
          {gallery.map((image, index) => (
            <div
              key={`${variant}-${image}`}
              className="group relative h-[320px] overflow-hidden rounded-[12px] bg-white"
              data-reveal-child="zoom"
              style={{ "--reveal-index": index } as React.CSSProperties}
            >
              <OptimizedImage src={image} alt="" fill quality={90} className="object-cover" />
              {variant === "video" ? (
                <span className="absolute inset-0 m-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white opacity-95">
                  <Play className="h-5 w-5 fill-current" />
                </span>
              ) : null}
              {index === 0 && variant === "gallery" ? <span className="sr-only">Gallery image</span> : null}
            </div>
          ))}
        </div>
      </section>
    );
  }

  if (variant === "volunteers") {
    return (
      <section className="bg-[#f4f4f4] py-24" data-scroll-reveal="fade-left">
        <div className="mx-auto grid max-w-[1180px] gap-8 px-6 sm:grid-cols-2 lg:grid-cols-3">
          {volunteers.map(([name, role], index) => (
            <Link
              key={name}
              href={`/volunteer/${name.toLowerCase().replaceAll(" ", "-")}`}
              className="relative h-[430px] overflow-hidden rounded-[12px] bg-white"
              data-reveal-child="zoom"
              style={{ "--reveal-index": index } as React.CSSProperties}
            >
              <OptimizedImage src={designImages[index % designImages.length]} alt={name} fill quality={90} className="object-cover" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#120800] via-[#120800]/68 to-transparent p-8 pt-28 text-white">
                <h3 className="text-[19px] font-semibold">{name}</h3>
                <p className="mt-6 text-[14px] text-white/75">{role}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    );
  }

  const items = variant === "blog" ? blogs : programs.map((item) => item.title);

  return (
    <section className="bg-[#f4f4f4] py-24" data-scroll-reveal="fade-left">
      <div className="mx-auto grid max-w-[1180px] gap-8 px-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((title, index) => (
          <Link
            key={title}
            href={variant === "blog" ? `/blog/${index + 1}` : `/programs/${index + 1}`}
            className="overflow-hidden rounded-[12px] bg-white shadow-sm"
            data-reveal-child="zoom"
            style={{ "--reveal-index": index } as React.CSSProperties}
          >
            <div className="relative h-[300px]">
              <OptimizedImage src={designImages[index % designImages.length]} alt={title} fill quality={90} />
              {variant === "blog" ? (
                <div className="absolute inset-0 bg-gradient-to-t from-[#120800]/90 via-[#120800]/20 to-transparent" />
              ) : null}
              {variant === "blog" ? (
                <div className="absolute bottom-8 left-8 right-8 text-white">
                  <p className="mb-4 flex items-center gap-2 text-[12px]">
                    <CalendarDays className="h-4 w-4" /> April 22, 2026
                  </p>
                  <h3 className="text-[18px] font-semibold leading-snug">{title}</h3>
                </div>
              ) : null}
            </div>
            {variant !== "blog" ? (
              <div className="p-7">
                <p className="flex items-center gap-2 text-[13px] text-[#697084]">
                  <Landmark className="h-4 w-4" />
                  {programs[index]?.category ?? "Education"}
                </p>
                <h3 className="mt-7 min-h-14 text-[19px] font-semibold leading-snug text-[#2A1708]">
                  {title}
                </h3>
                <div className="mt-8 border-t border-[#e9e9e9] pt-5 text-[13px] font-semibold text-[#2A1708]">
                  Read More <ArrowUpRight className="ml-1 inline h-3.5 w-3.5" />
                </div>
              </div>
            ) : null}
          </Link>
        ))}
      </div>
    </section>
  );
}

export function DetailLayout({ title = "Education Support Programs" }: { title?: string }) {
  return (
    <section className="bg-[#f4f4f4] py-24" data-scroll-reveal="fade-left">
      <div className="mx-auto grid max-w-[1180px] gap-8 px-6 lg:grid-cols-[260px_1fr]">
        <aside className="space-y-5 lg:sticky lg:top-28 lg:self-start">
          <div className="overflow-hidden rounded-[12px] bg-white">
            <h3 className="primary-cta bg-primary px-6 py-4 text-[14px] font-semibold text-white">
              Explore Our Services
            </h3>
            {services.slice(0, 5).map((service) => (
              <Link key={service} href="/services/education-support-programs" className="flex items-center justify-between border-b border-[#e9e9e9] px-6 py-4 text-[12px] font-semibold text-[#2A1708]">
                {service}
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            ))}
          </div>
          <div className="relative overflow-hidden rounded-[12px] p-7 text-white">
            <OptimizedImage src="/images/generated/foundation-partners-branded.png" alt="" fill quality={90} className="object-cover" />
            <div className="absolute inset-0 bg-[#120800]/70" />
            <div className="relative">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary">
                <Phone className="h-4 w-4" />
              </span>
              <h3 className="mt-8 text-[17px] font-semibold">Contact Us</h3>
              <p className="mt-2 text-[12px] leading-5 text-white/80">
                Join our growing community of supporters.
              </p>
              <p className="mt-10 text-[12px]">Email Us: info@domainname.com</p>
            </div>
          </div>
        </aside>
        <article data-reveal-child="right" style={{ "--reveal-index": 1 } as React.CSSProperties}>
          <div className="relative h-[350px] overflow-hidden rounded-[12px]">
            <OptimizedImage src="/images/generated/foundation-education-branded.png" alt={title} fill quality={90} />
          </div>
          <div className="mt-8 space-y-6 text-[13px] leading-7 text-[#697084]">
            <p>
              Our {title} are designed to break barriers and create equal learning opportunities for children from underserved communities. We believe practical support can unlock long-term change.
            </p>
            <p>
              You can be part of this mission by donating, sponsoring a student, or volunteering your time and skills.
            </p>
          </div>
          <h2 className="mt-10 text-[40px] font-semibold tracking-[-0.04em] text-[#2A1708]">
            How You Can Contribute
          </h2>
          <p className="mt-4 text-[13px] leading-7 text-[#697084]">
            Your support can make a lasting difference. Together, we can make a meaningful opportunity for those in need.
          </p>
          <div className="relative mt-8 grid overflow-hidden rounded-[12px] sm:grid-cols-2">
            <OptimizedImage src="/images/generated/foundation-food-relief-branded.png" alt="" fill quality={90} className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#120800]/88 to-[#120800]/10" />
            {["Emergency & Disaster Relief", "Emergency & Disaster Relief"].map((item, index) => (
              <div key={`${item}-${index}`} className="relative min-h-[220px] p-8 text-white">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary">
                  <HeartHandshake className="h-4 w-4" />
                </span>
                <h3 className="mt-20 text-[16px] font-semibold">{item}</h3>
                <p className="mt-2 text-[12px] leading-5 text-white/80">
                  Our rapid response teams provide immediate support during natural disasters.
                </p>
              </div>
            ))}
          </div>
          <h2 className="mt-12 text-[40px] font-semibold tracking-[-0.04em] text-[#2A1708]">
            Our Impact So Far
          </h2>
          <p className="mt-4 text-[13px] leading-7 text-[#697084]">
            Our impact reflects the collective efforts of donors, volunteers, and partners.
          </p>
          <div className="mt-8 grid gap-4 rounded-[12px] bg-white p-8 sm:grid-cols-2">
            {[
              ["1500+", "Children Enrolled in Programs"],
              ["200+", "Volunteers Support Education"],
            ].map(([value, label]) => (
              <div key={label}>
                <p className="text-[34px] font-semibold text-[#2A1708]">{value}</p>
                <div className="my-4 h-px bg-[#e9e9e9]" />
                <h3 className="text-[13px] font-semibold text-[#2A1708]">{label}</h3>
                <p className="mt-2 text-[12px] leading-5 text-[#697084]">
                  Practical community support and development programs.
                </p>
              </div>
            ))}
          </div>
          <FAQBlock compact />
        </article>
      </div>
    </section>
  );
}

export function FAQBlock({ compact = false }: { compact?: boolean }) {
  const questions = [
    "Can I make a recurring monthly donation?",
    "How do I know my donation is being used effectively?",
    "Can I volunteer with your organization?",
    "How can I make a donation?",
    "How do I get updates about the causes I support?",
  ];

  return (
    <div className={compact ? "mt-12" : ""}>
      <h2 className="mb-7 text-[40px] font-semibold tracking-[-0.04em] text-[#2A1708]">
        Frequently asked questions
      </h2>
      <div className="space-y-4">
        <AnimatedCollapsible
          name="shared-faq"
          items={questions.map((question) => ({
            title: question,
            content:
              "Yes, we offer a monthly giving program that allows you to contribute automatically each month and continuously support your chosen cause.",
          }))}
          itemClassName="rounded-[10px] bg-white px-6 py-5"
          titleClassName="text-[13px] font-semibold text-[#2A1708]"
          contentClassName="border-t border-[#e9e9e9] pt-5 text-[12px] leading-6 text-[#697084]"
        />
      </div>
    </div>
  );
}

export function ContactInfoOverlay() {
  return (
    <div className="absolute inset-x-0 bottom-0 grid bg-gradient-to-t from-[#120800] to-transparent p-8 text-white sm:grid-cols-2">
      <div className="flex items-center gap-4">
        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary">
          <Phone className="h-5 w-5" />
        </span>
        <div>
          <p className="text-[12px] text-white/70">Emergency Call</p>
          <p className="text-[17px] font-semibold">+(123) 456-789</p>
        </div>
      </div>
      <div className="mt-4 flex items-center gap-4 sm:mt-0">
        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary">
          <Mail className="h-5 w-5" />
        </span>
        <div>
          <p className="text-[12px] text-white/70">E-mail Us</p>
          <p className="text-[17px] font-semibold">info@domain.com</p>
        </div>
      </div>
    </div>
  );
}

export function BackHomeButton() {
  return (
    <Button asChild className="h-12 rounded-[6px] bg-primary px-6 text-[14px] font-semibold text-white hover:bg-accent">
      <Link href="/">
        Back To Homepage <ArrowUpRight className="ml-3 h-5 w-5 rounded bg-white p-1 text-[#2A1708]" />
      </Link>
    </Button>
  );
}
