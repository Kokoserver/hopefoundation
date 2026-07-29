"use client";

import Image, { ImageProps } from "next/image";
import { cn } from "@/lib/utils";
import { ImagePlaceholder } from "./image-placeholder";

interface OptimizedImageProps
  extends Omit<ImageProps, "src" | "alt" | "priority" | "quality"> {
  src?: string;
  alt: string;
  priority?: boolean;
  quality?: 75 | 80 | 85 | 90;
  aspectRatio?: "video" | "square" | "auto";
  showPlaceholder?: boolean;
  placeholderLabel?: string;
  className?: string;
  hoverFlash?: boolean;
}

export function OptimizedImage({
  src,
  alt,
  priority = false,
  quality = 75,
  aspectRatio = "auto",
  showPlaceholder = true,
  placeholderLabel,
  className,
  hoverFlash,
  ...props
}: OptimizedImageProps) {
  // Fallback to ImagePlaceholder if no src provided
  if (!src) {
    if (!showPlaceholder) {
      return null;
    }
    return (
      <ImagePlaceholder
        aspectRatio={aspectRatio}
        className={className}
        label={placeholderLabel || "Image placeholder"}
      />
    );
  }

  const aspectClasses = {
    video: "aspect-video",
    square: "aspect-square",
    auto: "",
  };
  const shouldHoverFlash = hoverFlash ?? (!priority && showPlaceholder);

  // For fill mode (background-like images)
  if (props.fill) {
    return (
      <span className={cn("optimized-image-shell absolute inset-0", shouldHoverFlash && "image-hover-flash")}>
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          quality={quality}
          className={cn("object-cover object-center", className)}
          sizes={
            props.sizes ||
            "(min-width: 1920px) 1920px, (min-width: 1280px) 1280px, (min-width: 768px) 768px, 100vw"
          }
          {...props}
        />
      </span>
    );
  }

  // For explicit width/height mode (card images, etc.)
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-lg",
        shouldHoverFlash && "image-hover-flash",
        aspectClasses[aspectRatio],
        !aspectRatio && !props.width && !props.height && "w-full"
      )}
    >
      <Image
        src={src}
        alt={alt}
        priority={priority}
        quality={quality}
        className={cn("h-full w-full object-cover object-center", className)}
        sizes={
          props.sizes ||
          "(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
        }
        {...(props.width && { width: props.width })}
        {...(props.height && { height: props.height })}
        {...props}
      />
    </div>
  );
}
