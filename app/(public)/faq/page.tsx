import Link from "next/link";
import { ArrowRight, HelpCircle, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { faqItems } from "@/lib/faq";
import { siteConfig } from "@/lib/site-config";

export default function FaqPage() {
  const categories = Array.from(new Set(faqItems.map((item) => item.category)));

  return (
    <div className="bg-background">
      <section className="relative overflow-hidden bg-[#3a1600] pt-28 text-white sm:pt-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(217,149,22,0.28),transparent_36%),linear-gradient(135deg,#3a1600,#160700)]" />
        <div className="relative mx-auto max-w-[1180px] px-6 py-16 sm:px-10 lg:px-12 lg:py-20">
          <div className="max-w-3xl">
            <p className="mb-4 text-[12px] font-bold uppercase tracking-[0.22em] text-[#d99516]">
              Help Centre
            </p>
            <h1 className="text-[40px] font-bold leading-tight sm:text-[58px]">
              Frequently Asked Questions
            </h1>
            <p className="mt-5 max-w-2xl text-[15px] leading-[1.75] text-white/78">
              Clear answers about support requests, referrals, volunteering,
              donations, partnerships, and how Achebe Hope Foundation works.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-20">
        <div className="mx-auto grid max-w-[1180px] gap-8 px-6 sm:px-10 lg:grid-cols-[280px_1fr] lg:px-12">
          <aside className="space-y-5 lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-[22px] bg-[#fff8ec] p-6">
              <HelpCircle className="mb-4 h-7 w-7 text-[#c77a05]" />
              <h2 className="text-[22px] font-bold text-[#3a1600]">
                FAQ Categories
              </h2>
              <div className="mt-5 flex flex-wrap gap-2 lg:grid">
                {categories.map((category) => (
                  <span
                    key={category}
                    className="rounded-full border border-[#ead7b8] bg-white px-4 py-2 text-[12px] font-semibold text-[#5a2605]"
                  >
                    {category}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-[22px] bg-[#3a1600] p-6 text-white">
              <h2 className="text-[20px] font-bold">Need direct help?</h2>
              <div className="mt-4 space-y-3 text-[13px] leading-[1.6] text-white/75">
                <a
                  href={`tel:${siteConfig.contact.phoneHref}`}
                  className="flex items-center gap-2 transition hover:text-[#d99516]"
                >
                  <Phone className="h-4 w-4" />
                  {siteConfig.contact.phone}
                </a>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="flex items-center gap-2 transition hover:text-[#d99516]"
                >
                  <Mail className="h-4 w-4" />
                  {siteConfig.contact.email}
                </a>
              </div>
              <Button
                asChild
                className="mt-6 h-10 rounded-full bg-[#c77a05] px-5 text-[12px] font-bold text-white hover:bg-[#c77a05]/90"
              >
                <Link href="/contact">
                  Contact Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </aside>

          <div className="space-y-4">
            {faqItems.map((item) => (
              <details
                key={item.question}
                className="group rounded-[18px] border border-[#ead7b8] bg-white p-5 shadow-[0_10px_30px_rgba(105,77,32,0.06)]"
              >
                <summary className="cursor-pointer list-none">
                  <span className="mb-2 inline-flex rounded-full bg-[#fff8ec] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-[#c77a05]">
                    {item.category}
                  </span>
                  <span className="flex items-center justify-between gap-4">
                    <span className="text-[18px] font-bold text-[#3a1600]">
                      {item.question}
                    </span>
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#fff8ec] text-[#c77a05] transition group-open:rotate-45">
                      +
                    </span>
                  </span>
                </summary>
                <p className="mt-4 text-[14px] leading-[1.8] text-[#6d5542]">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
