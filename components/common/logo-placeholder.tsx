import { cn } from "@/lib/utils";
import { Building2 } from "lucide-react";

interface LogoPlaceholderProps {
  className?: string;
  label?: string;
}

export function LogoPlaceholder({
  className,
  label = "Partner Logo",
}: LogoPlaceholderProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-center rounded-lg border border-border bg-card",
        className
      )}
    >
      <div className="flex flex-col items-center gap-2">
        <Building2 className="h-6 w-6 text-muted-foreground" />
        <p className="text-xs text-muted-foreground">{label}</p>
      </div>
    </div>
  );
}
