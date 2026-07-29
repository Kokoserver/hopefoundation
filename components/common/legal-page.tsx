import type { PublicPageSection } from "@/components/common/public-page";

type LegalPageProps = {
  title: string;
  description: string;
  sections: PublicPageSection[];
};

export function LegalPage({ title, description, sections }: LegalPageProps) {
  return (
    <div className="bg-background pt-28 sm:pt-32">
      <section className="mx-auto max-w-4xl px-6 py-14 sm:px-10 sm:py-20">
        <p className="mb-4 text-[12px] font-bold uppercase tracking-[0.22em] text-primary">
          Policy
        </p>
        <h1 className="text-[38px] font-bold leading-tight text-[#1e2635] sm:text-[56px]">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-[15px] leading-[1.7] text-muted-foreground">
          {description}
        </p>
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-16 sm:px-10 sm:pb-24">
        <div className="space-y-4">
          {sections.map((section) => (
            <article
              key={section.title}
              className="rounded-[22px] border border-border bg-white p-6 shadow-[0_12px_38px_rgba(30,38,53,0.06)]"
            >
              <h2 className="mb-3 text-[20px] font-bold text-[#1e2635]">
                {section.title}
              </h2>
              <p className="text-[14px] leading-[1.7] text-[#697084]">
                {section.body}
              </p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
