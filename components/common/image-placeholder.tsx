import { cn } from "@/lib/utils";
import { ImageIcon } from "lucide-react";

interface ImagePlaceholderProps {
  aspectRatio?: "video" | "square" | "auto";
  className?: string;
  label?: string;
}

export function ImagePlaceholder({
  aspectRatio = "video",
  className,
  label = "Image placeholder",
}: ImagePlaceholderProps) {
  const aspectClasses = {
    video: "aspect-video",
    square: "aspect-square",
    auto: "",
  };

  return (
    <div
      className={cn(
        "flex items-center justify-center rounded-2xl bg-gradient-to-br from-muted to-secondary",
        aspectClasses[aspectRatio],
        className
      )}
    >
      <div className="flex flex-col items-center gap-2 text-center">
        <ImageIcon className="h-8 w-8 text-muted-foreground" />
        <p className="text-sm text-muted-foreground">{label}</p>
      </div>
    </div>
  );
}
