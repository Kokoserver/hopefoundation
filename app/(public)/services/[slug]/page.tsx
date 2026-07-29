import Link from "next/link";
import {
  ArrowUpRight,
  HeartHandshake,
  Mail,
  Phone,
} from "lucide-react";
import { AnimatedCollapsible } from "@/components/common/animated-collapsible";
import { OptimizedImage } from "@/components/common/optimized-image";
import { ScrollRevealController } from "@/components/common/scroll-reveal-controller";
import { PageHero } from "@/components/common/static-design";

const services = [
  "Education Support Programs",
  "Community Healthcare Services",
  "Food & Nutrition Assistance",
  "Shelter & Housing Support",
  "Emergency & Disaster Relief",
];

const questions = [
  "Can I make a recurring monthly donation?",
  "How do I know my donation is being used effectively?",
  "Can I volunteer with your organization?",
  "How can I make a donation?",
  "How do I get updates about the causes I support?",
];

function serviceHref(service: string) {
  return `/services/${service.toLowerCase().replaceAll(" ", "-").replaceAll("&", "and")}`;
}

export default function ServiceDetailPage() {
  const title = "Education Support Programs";

  return (
    <>
      <ScrollRevealController />
      <PageHero title={title} crumb={`Services / ${title}`} />

      <section className="bg-[#f4f4f4] py-20" data-scroll-reveal="fade-left">
        <div className="mx-auto grid max-w-[930px] items-start gap-8 px-6 lg:grid-cols-[260px_1fr]">
          <aside className="space-y-5 lg:sticky lg:top-28 lg:self-start">
            <div className="overflow-hidden rounded-[8px] bg-white">
              <h2 className="primary-cta bg-primary px-6 py-4 text-[13px] font-semibold text-white">
                Explore Our Services
              </h2>
              <nav aria-label="Service categories">
                {services.map((service) => (
                  <Link
                    key={service}
                    href={serviceHref(service)}
                    className="flex items-center justify-between border-b border-[#e9e9e9] px-6 py-4 text-[11px] font-semibold text-[#2A1708] last:border-b-0 hover:text-primary"
                  >
                    {service}
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                ))}
              </nav>
            </div>

            <div className="relative overflow-hidden rounded-[10px] p-6 text-white">
              <OptimizedImage src="/images/new/400ca5bd72399daefb3ba1ed0da11072.jpg.jpeg" alt="" fill quality={90} />
              <div className="absolute inset-0 bg-[#120800]/72" />
              <div className="relative">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary">
                  <Phone className="h-4 w-4" />
                </span>
                <h2 className="mt-8 text-[17px] font-semibold">Contact Us</h2>
                <p className="mt-2 text-[12px] leading-5 text-white/80">
                  Join our growing community of supporters. Contact us to explore opportunities.
                </p>
                <p className="mt-10 flex items-center gap-2 text-[11px] text-white/85">
                  <Mail className="h-3.5 w-3.5 text-primary" />
                  info@domainname.com
                </p>
              </div>
            </div>
          </aside>

          <article data-reveal-child="right" style={{ "--reveal-index": 1 } as React.CSSProperties}>
            <div className="relative h-[350px] overflow-hidden rounded-[10px]">
              <OptimizedImage src="/images/generated/foundation-education-branded.png" alt={title} fill quality={90} />
            </div>

            <div className="mt-7 space-y-5 text-[12px] leading-6 text-[#697084]">
              <p>
                Our Education Support Programs are designed to break barriers and create equal learning opportunities for children from underserved communities. We believe that education is the most powerful tool for long-term change, and our initiatives focus on providing not just resources, but also guidance, mentorship, and a supportive environment for holistic development.
              </p>
              <p>
                Education is more than just learning; it is the foundation for opportunity, independence, and a better future. By investing in education today, we empower the next generation to break the cycle of poverty and contribute positively to society.
              </p>
            </div>

            <h2 className="mt-10 text-[38px] font-semibold leading-tight tracking-[-0.045em] text-[#2A1708]">
              How You Can Contribute
            </h2>
            <div className="mt-5 space-y-5 text-[12px] leading-6 text-[#697084]">
              <p>
                Your support can make a lasting difference in a child’s life. By donating, sponsoring a student, or volunteering your time, you can help us expand our reach and create more opportunities for children to succeed.
              </p>
              <p>
                You can be a part of this mission by contributing in ways that suit you best. Whether through donations, volunteering your time, sponsoring a child, or spreading awareness, every effort helps expand our reach and create meaningful opportunities for those in need. Together, we can make a lasting difference.
              </p>
            </div>

            <div className="relative mt-8 grid overflow-hidden rounded-[10px] sm:grid-cols-2">
              <OptimizedImage src="/images/new/cd7684054ec5036b88f97615ab12d5a2.jpg.jpeg" alt="Hands holding donations" fill quality={90} />
              <div className="absolute inset-0 bg-gradient-to-t from-[#120800]/90 via-[#120800]/30 to-transparent" />
              {["Emergency & Disaster Relief", "Emergency & Disaster Relief"].map((item, index) => (
                <div key={`${item}-${index}`} className="relative min-h-[210px] p-7 text-white">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary">
                    <HeartHandshake className="h-4 w-4" />
                  </span>
                  <h3 className="mt-20 text-[14px] font-semibold">{item}</h3>
                  <p className="mt-2 text-[11px] leading-5 text-white/78">
                    Our rapid response teams provide immediate support during natural disasters.
                  </p>
                </div>
              ))}
            </div>

            <h2 className="mt-12 text-[38px] font-semibold leading-tight tracking-[-0.045em] text-[#2A1708]">
              Our Impact So Far
            </h2>
            <div className="mt-5 space-y-5 text-[12px] leading-6 text-[#697084]">
              <p>
                Our impact so far reflects the collective efforts of our donors, volunteers, and partners. Through dedicated programs and community support, we have reached thousands of lives, delivered essential resources, and created opportunities that continue to drive positive and lasting change.
              </p>
              <p>
                From providing essential supplies and services to empowering individuals with opportunities for growth, our efforts continue to build stronger, more resilient communities. As we expand our reach, we remain committed to creating sustainable change that leaves a lasting impact for generations to come.
              </p>
            </div>

            <div className="mt-8 grid gap-4 rounded-[10px] bg-white p-7 sm:grid-cols-2">
              {[
                ["1500+", "Children Enrolled in Programs"],
                ["200+", "Volunteers Support Education"],
              ].map(([value, label]) => (
                <div key={label}>
                  <p className="text-[34px] font-semibold text-[#2A1708]">{value}</p>
                  <div className="my-4 h-px bg-[#e9e9e9]" />
                  <h3 className="text-[13px] font-semibold text-[#2A1708]">{label}</h3>
                  <p className="mt-2 text-[12px] leading-5 text-[#697084]">
                    Children currently supported through our education and development programs.
                  </p>
                </div>
              ))}
            </div>

            <section className="mt-12" aria-labelledby="service-faq-heading">
              <h2 id="service-faq-heading" className="text-[38px] font-semibold leading-tight tracking-[-0.045em] text-[#2A1708]">
                Frequently asked questions
              </h2>
              <p className="mt-4 text-[12px] leading-6 text-[#697084]">
                Find answers to common questions about our programs, donations, volunteering opportunities, and how we create impact.
              </p>
              <div className="mt-7 space-y-4">
                <AnimatedCollapsible
                  name="service-detail-faq"
                  items={questions.map((question) => ({
                    title: question,
                    content:
                      "Yes, we offer a monthly giving program that allows you to contribute automatically each month and continuously support your chosen cause.",
                  }))}
                  itemClassName="rounded-[10px] bg-white px-5 py-4"
                  contentClassName="border-t border-[#e9e9e9] pt-4 text-[12px] leading-6 text-[#697084]"
                />
              </div>
            </section>
          </article>
        </div>
      </section>
    </>
  );
}
