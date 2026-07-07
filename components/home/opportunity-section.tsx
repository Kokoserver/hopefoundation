import { Card, CardContent } from "@/components/ui/card";

const opportunities = [
  {
    title: "Education",
    description:
      "Many children continue to face barriers to quality education due to limited resources and underfunded schools.",
  },
  {
    title: "Mothers",
    description:
      "Thousands of mothers require access to support, skills, and opportunities needed to provide sustainable futures for their families.",
  },
  {
    title: "Communities",
    description:
      "Entire communities remain underserved, limiting access to healthcare, economic opportunities, and social development.",
  },
];

export function OpportunitySection() {
  return (
    <section className="bg-background py-[52px]">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-10">
        <h2 className="mb-6 max-w-[760px] text-[30px] font-bold leading-[1.16] tracking-normal text-foreground sm:text-[36px]">
          Opportunity should never depend on where a child is born
        </h2>

        <div className="grid gap-4 md:grid-cols-3">
          {opportunities.map((opp, index) => (
            <Card
              key={index}
              className="hover-lift min-h-[118px] rounded-[16px] border-0 bg-[#f7ebe8] shadow-none"
            >
              <CardContent className="p-6">
                <h3 className="mb-3 text-[18px] font-bold leading-none text-[#1f1d1a]">
                  {opp.title}
                </h3>
                <p className="text-[15px] leading-[1.5] text-[#342b25]">
                  {opp.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <p className="mt-6 text-[14px] leading-normal text-[#4f4a43]">
          These challenges are interconnected. Our work addresses them{" "}
          <span className="font-semibold text-primary">
            together—not in isolation.
          </span>
        </p>
      </div>
    </section>
  );
}
