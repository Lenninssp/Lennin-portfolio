import { cn } from "@/lib/utils";
import { LinkSize } from "@/types/sizes";
import Image from "next/image";

interface GeneralImageInterface {
  src: string;
  alt: string;
  framed?: boolean;
  rounded?: string; 
  priority?: boolean;
  size?: {width: number, height: number};
  loading?: "lazy" | "eager";
  className?: string;
}

const imageSize: Record<LinkSize, { width: number; height: number }> = {
  xs: { width: 20, height: 20 },
  sm: { width: 40, height: 40 },
  md: { width: 70, height: 70 },
  lg: { width: 90, height: 90 },
  xl: { width: 300, height: 300 },
};

export const GeneralImage = ({
  src,
  alt,
  size,
  framed,
  rounded = "rounded-lg",
  priority = false,
  loading = "lazy",
  className,
}: GeneralImageInterface) => {
  return (
    <div
      className={cn(
        "inline-block", 
        framed && "border border-white",
        rounded,
        className
      )}
    >
      <Image
        src={src}
        alt={alt}
        {...size}
        loading={loading}
        priority={priority}
        unoptimized
      />
    </div>
  );
};