import Link from "next/link";
import {
  Headphones,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { OptimizedImage } from "@/components/common/optimized-image";
import { ScrollRevealController } from "@/components/common/scroll-reveal-controller";
import { PageHero } from "@/components/common/static-design";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const profile = {
  name: "Brooklyn Simmons",
  role: "Dedicated Program Manager",
  portrait: "/images/94e1204421b9dc987ed980d38d79ae0374fc1c72.jpg",
  supportImage: "/images/generated/foundation-volunteers-branded.png",
  skillsImage: "/images/generated/foundation-women-skills-branded.png",
};

const contactCards = [
  { label: "Phone Number", value: "+(123) 456-789", icon: Phone },
  { label: "Email Address", value: "info@domainname.com", icon: Mail },
  { label: "My Location", value: "85 Preston Rd. Inglewood", icon: MapPin },
  { label: "My Experience", value: "More Than 8+ Years", icon: Headphones },
];

const skills = [
  ["Community Needs Assessment", "90%"],
  ["Monitoring Evaluation", "95%"],
  ["Program Planning & Execution", "85%"],
  ["Strategic Resource Allocation", "90%"],
];

function QuotePrompt() {
  return (
    <p className="mt-8 flex flex-wrap items-center justify-center gap-2 text-center text-[12px] font-medium text-[#697084]">
      <span className="relative h-8 w-8 overflow-hidden rounded-full">
        <OptimizedImage src={profile.portrait} alt="" fill quality={80} />
      </span>
      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-white">
        <Phone className="h-3.5 w-3.5" />
      </span>
      Let&apos;s make something great work together.
      <Link href="/contact" className="font-semibold text-primary underline underline-offset-2">
        Get Free Quote
      </Link>
    </p>
  );
}

export default function VolunteerDetailPage() {
  return (
    <>
      <ScrollRevealController />
      <PageHero title={profile.name} crumb={`Our Volunteers / ${profile.name}`} />

      <section className="bg-[#f4f4f4] py-20" data-scroll-reveal="fade-left">
        <div className="mx-auto grid max-w-[930px] items-start gap-8 px-6 lg:grid-cols-[260px_1fr]">
          <aside className="space-y-5 lg:sticky lg:top-28 lg:self-start">
            <div className="relative h-[315px] overflow-hidden rounded-[10px] bg-white">
              <OptimizedImage src={profile.portrait} alt={profile.name} fill quality={90} />
            </div>

            <div className="relative overflow-hidden rounded-[10px] p-6 text-white">
              <OptimizedImage src={profile.supportImage} alt="" fill quality={90} />
              <div className="absolute inset-0 bg-[#120800]/72" />
              <div className="relative">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary">
                  <Headphones className="h-4 w-4" />
                </span>
                <h2 className="mt-8 text-[17px] font-semibold">Contact Us</h2>
                <p className="mt-2 text-[12px] leading-5 text-white/80">
                  Join our growing community of supporters. Contact us to explore opportunities.
                </p>
                <p className="mt-10 text-[11px] text-white/85">Email Us: info@domainname.com</p>
              </div>
            </div>
          </aside>

          <article>
            <section data-reveal-child="right">
              <h2 className="text-[38px] font-semibold leading-tight tracking-[-0.045em] text-[#2A1708]">
                About me
              </h2>
              <div className="mt-5 space-y-5 text-[12px] leading-6 text-[#697084]">
                <p>
                  Brooklyn Simmons is a dedicated Program Manager with over 8 years of experience in planning, implementing, & monitoring community development initiatives. He specializes in designing education and healthcare programs that create measurable impact and empower underserved communities.
                </p>
                <p>
                  Brooklyn specializes in needs assessment, strategic planning, and fostering strong relationships with community members, volunteers, and partners to create sustainable solutions.
                </p>
              </div>

              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                {contactCards.map((card) => {
                  const Icon = card.icon;
                  return (
                    <div key={card.label} className="flex items-center gap-4 rounded-[10px] bg-white p-5">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-white">
                        <Icon className="h-4 w-4" />
                      </span>
                      <div>
                        <p className="text-[11px] text-[#697084]">{card.label}</p>
                        <p className="mt-1 text-[13px] font-semibold text-[#2A1708]">{card.value}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-y border-[#dedede] py-6">
                <p className="text-[13px] font-semibold text-[#2A1708]">Follow On Socials</p>
                <div className="flex gap-3">
                  {["p", "𝕏", "f", "in"].map((item) => (
                    <span key={item} className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[11px] font-semibold text-[#2A1708]">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </section>

            <section className="mt-10" data-reveal-child="right">
              <h2 className="text-[38px] font-semibold leading-tight tracking-[-0.045em] text-[#2A1708]">
                My skills & expertise
              </h2>
              <p className="mt-5 text-[12px] leading-6 text-[#697084]">
                Brooklyn Simmons brings a diverse set of skills and expertise that drive the success of our programs. From strategic planning and community needs assessment to volunteer coordination and impact measurement, he combines practical knowledge with leadership and collaboration.
              </p>

              <div className="mt-8 grid gap-5 md:grid-cols-[220px_1fr]">
                <div className="relative h-[220px] overflow-hidden rounded-[10px]">
                  <OptimizedImage src={profile.skillsImage} alt="Skill development support" fill quality={90} />
                </div>
                <div className="rounded-[10px] bg-white p-6">
                  <div className="space-y-5">
                    {skills.map(([skill, value]) => (
                      <div key={skill}>
                        <div className="mb-2 flex justify-between text-[12px] font-semibold text-[#2A1708]">
                          <span>{skill}</span>
                          <span>{value}</span>
                        </div>
                        <div className="h-1.5 rounded-full bg-[#e9e9e9]">
                          <div className="h-full rounded-full bg-primary" style={{ width: value }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <QuotePrompt />
            </section>

            <section className="mt-12 rounded-[10px] bg-white p-8 sm:p-10" data-reveal-child="zoom">
              <h2 className="text-[38px] font-semibold leading-tight tracking-[-0.045em] text-[#2A1708]">
                Get In Touch
              </h2>
              <p className="mt-5 text-[12px] leading-6 text-[#697084]">
                We&apos;d love to hear from you. Whether you have questions, ready to start your coaching journey, our volunteers is here to help.
              </p>
              <form className="mt-8">
                <div className="grid gap-5 sm:grid-cols-2">
                  <Input placeholder="First Name" className="h-12 rounded-[8px] border-0 bg-[#f4f4f4]" />
                  <Input placeholder="Last Name" className="h-12 rounded-[8px] border-0 bg-[#f4f4f4]" />
                  <Input placeholder="Phone Number" className="h-12 rounded-[8px] border-0 bg-[#f4f4f4]" />
                  <Input placeholder="E-mail Address" className="h-12 rounded-[8px] border-0 bg-[#f4f4f4]" />
                </div>
                <Textarea placeholder="Write Message..." className="mt-5 min-h-36 rounded-[8px] border-0 bg-[#f4f4f4]" />
                <Button type="button" className="primary-cta mt-7 h-10 rounded-[5px] bg-primary px-5 text-[12px] font-semibold text-white hover:bg-accent">
                  Submit Message
                </Button>
              </form>
            </section>
          </article>
        </div>
      </section>
    </>
  );
}
