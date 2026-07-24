import Link from "next/link";
import { Button } from "@/components/ui/button";
import { OptimizedImage } from "@/components/common/optimized-image";

export function HopeGrowsSection() {
  return (
    <section className="relative overflow-hidden bg-olive text-olive-foreground xl:min-h-[640px]">
      <div className="absolute inset-y-0 right-0 hidden w-[36.5vw] min-w-[526px] border-l-[6px] border-white xl:block">
        <OptimizedImage
          src="/images/new/c07c29641a2d90d19da14525b548a863.jpg.jpeg"
          alt="Children in the community supported by Achebe Hope Foundation"
          fill
          priority
          quality={90}
          sizes="526px"
          className="object-cover object-center"
        />
      </div>

      <div className="absolute left-[80px] top-[101px] z-10 hidden max-w-[620px] xl:block">
        <h2 className="max-w-[500px] text-[48px] font-bold leading-[1.16] tracking-normal text-white">
          Hope grows where opportunity begins
        </h2>
        <div className="mt-[26px] space-y-[14px] text-[16px] leading-[1.5] text-white">
          <p>
            Achebe Hope Foundation was established with a simple belief: lasting
            change begins by strengthening families.
          </p>
          <p>
            Across many communities, countless mothers, children, and vulnerable
            individuals possess extraordinary potential but lack access to the
            opportunities that allow them to thrive.
          </p>
        </div>
        <Button
          asChild
          className="mt-[23px] h-[48px] rounded-full bg-white px-[24px] text-[14px] font-semibold !text-[#b5792b] hover:bg-white/90"
        >
          <Link href="/about">Read Our Story</Link>
        </Button>
      </div>

      <div className="absolute right-158 top-50 z-20 hidden h-90.25 w-70 overflow-hidden rounded-[38px] border-4 border-white shadow-[0_26px_52px_rgba(0,0,0,0.28)] xl:block">
        <OptimizedImage
          src="/images/new/chief.a.u.achebe_20220403_p_2808307974990542593_8_2808307969093477935.webp.jpeg"
          alt="Founder of Achebe Hope Foundation"
          fill
          priority
          quality={90}
          sizes="280px"
          className="object-cover object-center"
        />
      </div>

      <div className="relative z-10 px-6 py-12 sm:py-16 xl:hidden">
        <div className="mx-auto max-w-md space-y-5">
          <h2 className="text-[32px] font-bold leading-tight text-white sm:text-4xl">
            Hope grows where opportunity begins
          </h2>
          <p className="text-[16px] leading-6 text-white">
            Achebe Hope Foundation was established with a simple belief: lasting
            change begins by strengthening families.
          </p>
          <p className="text-[16px] leading-6 text-white">
            Across many communities, countless mothers, children, and vulnerable
            individuals possess extraordinary potential but lack access to the
            opportunities that allow them to thrive.
          </p>
          <Button
            asChild
            className="h-12 rounded-full bg-white px-6 text-[14px] font-semibold !text-[#b5792b] hover:bg-white/90"
          >
            <Link href="/about">Read Our Story</Link>
          </Button>
        </div>
        <div className="relative mx-auto mt-10 h-[300px] max-w-md overflow-hidden rounded-3xl sm:h-90">
          <OptimizedImage
            src="/images/new/c07c29641a2d90d19da14525b548a863.jpg.jpeg"
            alt="Children in the community supported by Achebe Hope Foundation"
            fill
            loading="eager"
            quality={90}
          />
        </div>
      </div>
    </section>
  );
}
