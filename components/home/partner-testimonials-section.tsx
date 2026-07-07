import { Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const partners = [
  {
    name: "Uchenna Chuks",
    quote:
      "I came to give my time, but I left inspired by the resilience of the families we served.",
  },
  {
    name: "Amina Jibril",
    quote:
      "They didn’t simply donate resources—they stayed to build lasting solutions.",
  },
  {
    name: "Amina Jibril",
    quote:
      "Through mentorship and support, they empowered communities to thrive independently.",
  },
  {
    name: "Elias Mwanga",
    quote:
      "By fostering innovation and creativity, they transformed traditional industries into modern solutions.",
  },
  {
    name: "Sofia Ramirez",
    quote:
      "Through education and advocacy, they raised awareness about sustainable practices and their importance.",
  },
  {
    name: "Raj Patel",
    quote:
      "With strategic partnerships and collaboration, they built networks that strengthened local economies.",
  },
];

export function PartnerTestimonialsSection() {
  return (
    <section className="bg-white py-12 sm:py-[74px]">
      <div className="mx-auto max-w-[1160px] px-6 sm:px-10">
        <div className="grid gap-y-10 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-[54px] lg:grid-cols-3 lg:gap-x-[96px]">
          {partners.map((partner, index) => (
            <Card key={index} className="border-0 bg-transparent shadow-none">
              <CardContent className="p-0">
                <Quote className="mb-[18px] h-6 w-6 fill-primary text-primary" />
                <p className="mb-[14px] text-[16px] leading-[1.3] text-[#17191f] sm:text-[18px] sm:leading-[1.22]">
                  {partner.quote}
                </p>
                <p className="text-[11px] font-bold leading-none text-[#17191f]">
                  {partner.name}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
