import { BackHomeButton, PageHero } from "@/components/common/static-design";

export default function NotFound() {
  return (
    <>
      <PageHero title="Page not found" crumb="404 Error Page" plain />
      <section className="bg-[#f4f4f4] py-24 text-center">
        <div className="mx-auto max-w-[760px] px-6">
          <div className="text-[120px] font-black leading-none tracking-[-0.08em] text-[#2A1708]">
            4<span className="text-primary">♥</span>4
          </div>
          <h2 className="mt-8 text-[42px] font-bold tracking-[-0.045em] text-[#2A1708]">
            Oops! page not found
          </h2>
          <p className="mx-auto mt-4 max-w-[480px] text-[14px] leading-6 text-[#697084]">
            The page you are looking for may have been moved, deleted, or never
            existed.
          </p>
          <div className="mt-8">
            <BackHomeButton />
          </div>
        </div>
      </section>
    </>
  );
}
