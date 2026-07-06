import Link from "next/link";
import {
  ArrowRight,
  Heart,
  Calendar,
  Building2,
  ShieldCheck,
  TrendingUp,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { OptimizedImage } from "@/components/common/optimized-image";
import { publicPages } from "@/lib/public-pages";

const cardIcons: Record<string, React.ReactNode> = {
  "One-time gifts": <Heart className="mb-5 h-6 w-6 text-gold" />,
  "Monthly support": <Calendar className="mb-5 h-6 w-6 text-gold" />,
  "Corporate giving": <Building2 className="mb-5 h-6 w-6 text-gold" />,
};

const gifticons: Record<string, React.ReactNode> = {
  "Where gifts go": <TrendingUp className="h-6 w-6 text-gold" />,
  "Donor updates": <ShieldCheck className="h-6 w-6 text-gold" />,
  "Corporate support": <Users className="h-6 w-6 text-gold" />,
};

export default function DonatePage() {
  const page = publicPages.donate;

  return (
    <div className="bg-background">
      {/* Hero */}
      <section className="relative overflow-hidden bg-footer pt-28 text-white sm:pt-32">
        <div className="absolute inset-0">
          <OptimizedImage
            src={page.image}
            alt={page.imageAlt}
            fill
            priority
            quality={90}
            className="object-cover object-center opacity-55"
            showPlaceholder={false}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-footer" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/20 to-transparent" />
        </div>

        <div className="relative mx-auto max-w-[1280px] px-6 pb-16 pt-16 sm:px-10 sm:pb-24 sm:pt-20 lg:px-[72px]">
          <div className="max-w-3xl animate-fade-up">
            <p className="mb-4 text-[12px] font-bold uppercase tracking-[0.22em] text-gold">
              {page.eyebrow}
            </p>
            <h1 className="max-w-4xl text-[38px] font-bold leading-[1.08] sm:text-[56px] lg:text-[64px]">
              {page.title}
            </h1>
            <p className="mt-6 max-w-2xl text-[15px] leading-[1.65] text-white/88 sm:text-[17px]">
              {page.description}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button className="h-11 rounded-full bg-gold px-7 text-[12px] font-bold text-white hover:bg-gold/90">
                Donate Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="bg-footer border-t border-white/10 py-14">
        <div className="mx-auto max-w-[1180px] px-6 sm:px-10 lg:px-12">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { value: "\u20A610M+", label: "Raised to Date" },
              { value: "500+", label: "Donors" },
              { value: "15+", label: "Projects Funded" },
              { value: "95%", label: "Goes to Programmes" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-[34px] font-bold text-gold sm:text-[40px]">
                  {stat.value}
                </p>
                <p className="mt-1 text-[13px] font-medium uppercase tracking-wider text-white/72">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ways to Give */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1180px] px-6 sm:px-10 lg:px-12">
          <div className="mb-10 text-center">
            <span className="inline-flex rounded-full bg-gold px-4 py-1.5 text-[12px] font-semibold text-white">
              {page.overviewKicker}
            </span>
            <h2 className="mt-5 text-[30px] font-bold leading-tight text-[#17191f] sm:text-[40px]">
              {page.overviewTitle}
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-[14px] leading-[1.65] text-[#4f4a43]">
              {page.cardsDescription}
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {page.cards.map((card) => (
              <Card
                key={card.title}
                className="hover-lift rounded-[20px] border-0 bg-[#f7ebe8] shadow-none"
              >
                <CardContent className="p-6">
                  {cardIcons[card.title]}
                  <h3 className="mb-3 text-[18px] font-bold text-[#17191f]">
                    {card.title}
                  </h3>
                  <p className="text-[13px] leading-[1.6] text-[#342b25]">
                    {card.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Bank Details */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-[800px] px-6 text-center sm:px-10 lg:px-12">
          <h2 className="text-[30px] font-bold leading-tight text-[#17191f] sm:text-[40px]">
            Bank transfer details
          </h2>
          <p className="mx-auto mt-3 max-w-md text-[14px] leading-[1.65] text-[#4f4a43]">
            You can also make a direct transfer to our foundation account.
          </p>

          <div className="mt-8 rounded-[22px] border border-[#eadfcd] bg-[#fffaf2] p-6 text-left shadow-[0_10px_30px_rgba(105,77,32,0.06)] sm:p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { label: "Bank", value: "First Bank of Nigeria" },
                { label: "Account Name", value: "Achebe Hope Foundation" },
                { label: "Account Number", value: "1234567890" },
                { label: "Sort Code", value: "011" },
              ].map((detail) => (
                <div key={detail.label}>
                  <p className="text-[12px] font-bold uppercase tracking-wider text-gold">
                    {detail.label}
                  </p>
                  <p className="mt-1 text-[15px] font-semibold text-[#17191f]">
                    {detail.value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <p className="mt-6 text-[12px] leading-[1.6] text-muted-foreground">
            After your transfer, please email us at{" "}
            <Link
              href="mailto:AchebeHopeFoundation@gmail.com"
              className="font-semibold text-gold underline"
            >
              AchebeHopeFoundation@gmail.com
            </Link>{" "}
            with your transaction details so we can acknowledge your gift.
          </p>
        </div>
      </section>

      {/* How Gifts Are Used */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1180px] px-6 sm:px-10 lg:px-12">
          <div className="mb-10">
            <span className="inline-flex rounded-full bg-gold px-4 py-1.5 text-[12px] font-semibold text-white">
              Transparency
            </span>
            <h2 className="mt-5 max-w-2xl text-[30px] font-bold leading-tight text-[#17191f] sm:text-[40px]">
              How your donations are used
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {page.sections.map((section) => (
              <div
                key={section.title}
                className="rounded-[22px] border border-[#eadfcd] bg-white p-6 shadow-[0_10px_30px_rgba(105,77,32,0.06)] sm:p-8"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-gold/10">
                  {gifticons[section.title]}
                </div>
                <h3 className="mb-3 text-[18px] font-bold text-[#17191f]">
                  {section.title}
                </h3>
                <p className="text-[14px] leading-[1.65] text-[#4f4a43]">
                  {section.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-footer py-16 text-white sm:py-20">
        <div className="mx-auto max-w-[800px] px-6 text-center sm:px-10 lg:px-12">
          <h2 className="text-[30px] font-bold leading-tight sm:text-[40px]">
            Every gift matters
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-[15px] leading-[1.65] text-white/72">
            Whether you give once, monthly, or as a corporate partner, your
            support directly strengthens families and builds lasting hope.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button className="h-11 rounded-full bg-gold px-7 text-[12px] font-bold text-white hover:bg-gold/90">
              Donate Now
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              asChild
              className="h-11 rounded-full border border-white/30 bg-transparent px-7 text-[12px] font-bold text-white hover:bg-white/10"
            >
              <Link href="/contact">
                Questions? Contact Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
