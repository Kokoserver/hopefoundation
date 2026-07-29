import { ContactInfoOverlay, PageHero, SectionKicker } from "@/components/common/static-design";
import { ScrollRevealController } from "@/components/common/scroll-reveal-controller";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { OptimizedImage } from "@/components/common/optimized-image";

export default function ContactPage() {
  return (
    <>
      <ScrollRevealController />
      <PageHero title="Contact us" crumb="Contact Us" />
      <section className="bg-[#f4f4f4] py-24">
        <div className="mx-auto grid max-w-[1180px] items-center gap-10 px-6 lg:grid-cols-2">
          <div data-scroll-reveal="fade-right">
            <SectionKicker>Contact Us</SectionKicker>
            <h2 className="mt-5 text-[42px] font-black leading-[1.05] tracking-[-0.045em] text-[#2A1708]">Growing together to create lasting impact</h2>
            <p className="mt-5 text-[14px] leading-7 text-[#697084]">From grassroots initiatives to large scale community programs, we continue to grow with one purpose to serve those in need.</p>
            <div className="relative mt-8 h-[310px] overflow-hidden rounded-[12px]"><OptimizedImage src="/images/generated/foundation-outreach-branded.png" alt="Contact support team" fill quality={90} /><ContactInfoOverlay /></div>
          </div>
          <form className="rounded-[16px] bg-white p-10" data-scroll-reveal="fade-left">
            <h2 className="text-[42px] font-black tracking-[-0.045em] text-[#2A1708]">Get In Touch</h2>
            <p className="mt-4 text-[14px] leading-6 text-[#697084]">We’d love to hear from you. Whether you have questions or need help, our volunteers are here.</p>
            <div className="mt-8 grid gap-8 sm:grid-cols-2"><Input placeholder="First Name" className="h-14 rounded-[10px] border-0 bg-[#f4f4f4]" /><Input placeholder="Last Name" className="h-14 rounded-[10px] border-0 bg-[#f4f4f4]" /><Input placeholder="Phone Number" className="h-14 rounded-[10px] border-0 bg-[#f4f4f4]" /><Input placeholder="E-mail Address" className="h-14 rounded-[10px] border-0 bg-[#f4f4f4]" /></div>
            <Textarea placeholder="Write Message..." className="mt-5 min-h-36 rounded-[10px] border-0 bg-[#f4f4f4]" />
            <Button type="button" className="mt-8 h-12 rounded-[6px] bg-primary px-6 text-[14px] font-black text-white hover:bg-accent">Submit Message</Button>
          </form>
        </div>

        <div className="mx-auto mt-24 max-w-[1180px] px-6" data-scroll-reveal="fade-up">
          <div className="mx-auto max-w-[560px] text-center">
            <SectionKicker>Our Locations</SectionKicker>
            <h2 className="mt-5 text-[38px] font-black leading-[1.08] tracking-[-0.045em] text-[#2A1708] sm:text-[44px]">
              Serving communities across multiple regions
            </h2>
          </div>
          <div className="mt-14 overflow-hidden rounded-[12px] bg-white shadow-sm">
            <iframe
              title="London Eye location map"
              src="https://www.google.com/maps?q=London%20Eye,%20London&output=embed"
              className="h-[430px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}
