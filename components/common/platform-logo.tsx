import Image from "next/image";
import { cn } from "@/lib/utils";

type PlatformLogoProps = {
  className?: string;
  imageClassName?: string;
  showName?: boolean;
};

export function PlatformLogo({
  className,
  imageClassName,
  showName = false,
}: PlatformLogoProps) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <Image
        src="/logo.svg"
        alt="Achebe Hope Foundation"
        width={64}
        height={64}
        className={cn("h-12 w-12 shrink-0 object-contain", imageClassName)}
        priority
      />
      {showName && (
        <div className="leading-tight">
          <p className="text-[13px] font-bold text-[#1e2635]">Achebe Hope</p>
          <p className="text-[10px] font-medium text-muted-foreground">Foundation</p>
        </div>
      )}
    </div>
  );
}
