const stats = [
  { value: "35", label: "Communities Reached" },
  { value: "72+", label: "Families Supported" },
  { value: "1,600+", label: "Children Empowered" },
  { value: "200+", label: "Women Trained" },
  { value: "44+", label: "Projects Completed" },
];

export function ImpactStatsSection() {
  return (
    <section className="py-10 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="mb-8 grid grid-cols-2 items-start justify-center gap-x-6 gap-y-8 sm:flex sm:flex-wrap sm:gap-x-12">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="animate-fade-up text-center"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <p className="text-[30px] font-bold text-primary sm:text-[38px]">
                {stat.value}
              </p>
              <p className="mt-2 text-[12px] text-muted-foreground sm:text-[13px]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
        <div className="text-center">
          <span className="inline-flex rounded-full bg-gold px-4 py-1.5 text-[12px] font-semibold text-white">
            Our Impact
          </span>
        </div>
      </div>
    </section>
  );
}
