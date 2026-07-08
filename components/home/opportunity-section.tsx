import { Card, CardContent } from "@/components/ui/card";

import type { HomepageContent } from "@/lib/homepage-content";

export function OpportunitySection({ content }: { content: HomepageContent["opportunity"] }) {
  return (
    <section className="bg-background py-[52px]">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-10">
        <h2 className="mb-6 max-w-[760px] text-[30px] font-bold leading-[1.16] tracking-normal text-foreground sm:text-[36px]">
          {content.title}
        </h2>

        <div className="grid gap-4 md:grid-cols-3">
          {content.cards.map((opp, index) => (
            <Card
              key={index}
              className="hover-lift min-h-[118px] rounded-[16px] border-0 bg-[#f7ebe8] shadow-none"
            >
              <CardContent className="p-6">
                <h3 className="mb-3 text-[18px] font-bold leading-none text-[#1f1d1a]">
                  {opp.title}
                </h3>
                <p className="whitespace-pre-line text-[15px] leading-[1.5] text-[#342b25]">
                  {opp.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <p className="mt-6 whitespace-pre-line text-[14px] leading-normal text-[#4f4a43]">
          {content.footer}
        </p>
      </div>
    </section>
  );
}
