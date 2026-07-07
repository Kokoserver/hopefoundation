import { BadgeCheck, HeartHandshake } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { OptimizedImage } from "@/components/common/optimized-image";

export function TrustBadgesSection() {
  return (
    <section className="bg-background px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1160px]">
        <div className="grid gap-5 md:grid-cols-[1.7fr_0.9fr_0.9fr]">
          <Card className="group hover-lift relative min-h-[150px] overflow-hidden rounded-[24px] border-0 shadow-none sm:min-h-[176px]">
            <OptimizedImage
              src="/images/c49f4fcac50c2b6acba8314d8377904627f83cac.jpg"
              alt="Community gathering — founding year 2026"
              fill
              className="image-soft-zoom"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/40">
              <div className="text-center text-white">
                <p className="text-[13px] font-semibold leading-none text-white">
                  Founded in
                </p>
                <p className="mt-2 text-[54px] font-bold leading-none">2026</p>
              </div>
            </div>
          </Card>

          <Card className="hover-lift min-h-[150px] rounded-[24px] border border-[#eadfcd] bg-white shadow-none sm:min-h-[176px]">
            <CardContent className="flex h-full flex-col items-center justify-center gap-5 p-8 text-center">
              <div className="flex h-7 w-7 items-center justify-center">
                <BadgeCheck className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-[16px] font-medium leading-[1.15] text-[#17191f]">
                  Registered Nonprofit
                </p>
                <p className="mt-1 text-[16px] leading-[1.15] text-[#17191f]">
                  (CAC)
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="hover-lift min-h-[150px] rounded-[24px] border border-[#eadfcd] bg-white shadow-none sm:min-h-[176px]">
            <CardContent className="flex h-full flex-col items-center justify-center gap-5 p-8 text-center">
              <div className="flex h-7 w-7 items-center justify-center">
                <HeartHandshake className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-[16px] font-medium leading-[1.15] text-[#17191f]">
                  Community-Led
                </p>
                <p className="mt-1 text-[16px] leading-[1.15] text-[#17191f]">
                  Programs
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
