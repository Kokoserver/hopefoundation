import { OptimizedImage } from "@/components/common/optimized-image";
import { TestimonialCardCarousel } from "@/components/common/testimonial-card-carousel";

const testimonialImages = {
  children: "/images/new/18d3102e58527d82295a9d108a101405.jpg.jpeg",
  founder: "/images/new/chief.a.u.achebe_20260722_p_3946737021547120023_1_3946737021547120023.webp",
  collageA: "/images/generated/foundation-outreach-branded.png",
  outreach: "/images/new/c07c29641a2d90d19da14525b548a863.jpg.jpeg",
};

export function HomeTestimonialSection() {
  return (
    <section className="relative z-10 min-h-[720px] overflow-hidden bg-[#381800] py-20 text-white md:py-0" data-scroll-reveal="fade-right">
      <div className="testimonial-image-wrap absolute inset-0 overflow-hidden">
        <OptimizedImage src={testimonialImages.children} alt="Testimonials from community supporters" fill quality={90} />
        <div className="absolute inset-0 bg-gradient-to-r from-[#120800]/38 via-[#120800]/20 to-[#120800]/54" />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#120800]/86 to-transparent" />
      </div>
      <div className="relative mx-auto grid min-h-[720px] max-w-[1180px] items-center gap-10 px-6 md:grid-cols-[0.95fr_1.05fr]" data-reveal-child="right">
        <div className="self-end pb-16 md:pb-28">
          <div className="inline-flex items-center rounded-full bg-white/12 py-1 pl-1 pr-4 text-[13px] font-medium text-white/86 backdrop-blur">
            <span className="mr-3 flex -space-x-2">
              {[testimonialImages.founder, testimonialImages.collageA, testimonialImages.outreach, testimonialImages.children].map((image) => (
                <span key={image} className="relative h-7 w-7 overflow-hidden rounded-full border border-white">
                  <OptimizedImage src={image} alt="" fill quality={80} />
                </span>
              ))}
            </span>
            What People Say
          </div>
          <h2 className="mt-6 max-w-[520px] text-[38px] font-semibold leading-[1.12] tracking-[-0.045em] md:text-[50px]">
            Building trust through real experiences
          </h2>
        </div>
        <div className="min-h-[560px] rounded-[18px] bg-white p-10 text-[#2A1708] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(0,0,0,0.22)] md:p-12">
          <TestimonialCardCarousel />
        </div>
      </div>
    </section>
  );
}
