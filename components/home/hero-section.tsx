import { Button } from "@/components/ui/button";
import { OptimizedImage } from "@/components/common/optimized-image";

export function HeroSection() {
  return (
    <section className="relative mb-8 bg-background px-2 pt-2 sm:mb-10">
      <div className="group relative min-h-[560px] w-full overflow-hidden rounded-b-[34px] sm:min-h-[680px] sm:rounded-b-[56px] lg:min-h-[760px]">
        <OptimizedImage
          src="/images/hero/hero-main.png"
          alt="Adult teaching child — Achebe Hope Foundation"
          fill
          priority
          quality={75}
          sizes="(min-width: 1920px) 1920px, (min-width: 1280px) 1280px, (min-width: 768px) 768px, 100vw"
          className="image-soft-zoom rounded-none"
          showPlaceholder={false}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/40 to-black/65" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/35 via-black/20 to-transparent" />
        <div className="absolute right-[70px] top-[230px] hidden h-[126px] w-px overflow-hidden rounded-full bg-white/80 lg:block">
          <div className="h-[48px] w-full bg-gold" />
        </div>
        <div className="absolute inset-0 flex flex-col justify-end">
          <div className="mx-auto grid w-full max-w-[1280px] gap-6 px-5 pb-12 text-white sm:gap-8 sm:px-8 sm:pb-[88px] lg:grid-cols-[1.08fr_0.92fr] lg:px-[72px]">
            <div className="max-w-xl animate-fade-up">
              <p className="mb-[18px] text-[11px] font-medium text-white">
                Registered Humanitarian
                Foundation&nbsp;&nbsp;•&nbsp;&nbsp;Nigeria
              </p>
              <h1 className="text-[34px] font-bold leading-[1.12] tracking-normal sm:text-[52px] lg:text-[56px]">
                Changing Lives,
                <br />
                One Family At A Time
              </h1>
            </div>
            <div className="animate-fade-up animate-delay-200 max-w-[510px] space-y-[22px] self-end lg:justify-self-end">
              <p className="text-[14px] leading-[1.45] text-white">
                Achebe Hope Foundation works alongside underserved communities
                across Africa to expand access to education, empower women,
                support vulnerable children, and build sustainable pathways
                toward lasting independence.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Button className="h-[42px] rounded-full bg-gold px-[20px] text-[12px] font-bold text-white hover:bg-gold/90 sm:px-[24px]">
                  Support Our Mission
                </Button>
                <Button
                  variant="outline"
                  className="h-[42px] rounded-full border-white bg-black/10 px-[20px] text-[12px] font-bold text-white hover:bg-white/10 hover:text-white sm:px-[24px]"
                >
                  Explore Our Programs
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
