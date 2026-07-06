import { OptimizedImage } from "@/components/common/optimized-image";

const logos = [
  {
    name: "Deepalaya NGO",
    src: "/images/logos/deepalaya_ngo_id4zTykPUQ.jpeg.png",
  },
  {
    name: "Guaranty Trust Bank",
    src: "/images/logos/guaranty_trust_bank_logo.png.png",
  },
  {
    name: "Bank of America",
    src: "/images/logos/bank_of_america_logo.png.png",
  },
  {
    name: "UNICEF",
    src: "/images/logos/unicef_logo.png.png",
  },
  {
    name: "Access Bank",
    src: "/images/logos/access_bank_logo.png.png",
  },
  {
    name: "Dangote Group",
    src: "/images/logos/dangote_group_logo.png.png",
  },
];

export function PartnerLogosSection() {
  return (
    <section className="bg-white py-10 lg:py-16">
      <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-2 items-center gap-x-6 gap-y-8 sm:grid-cols-3 lg:flex lg:flex-nowrap lg:justify-between lg:gap-10">
          {logos.map((logo, index) => (
            <div
              key={`${logo.name}-${index}`}
              className="relative mx-auto h-8 w-[108px] sm:h-10 sm:w-[134px] lg:h-12 lg:w-[160px]"
            >
              <OptimizedImage
                src={logo.src}
                alt={`${logo.name} logo`}
                fill
                quality={90}
                sizes="(min-width: 1024px) 160px, 134px"
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
