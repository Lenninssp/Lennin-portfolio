import { cn } from "@/lib/utils";
import { LinkSize } from "@/types/sizes";
import Image from "next/image";

interface GeneralImageInterface {
  src: string;
  alt: string;
  size?: LinkSize;
  framed?: boolean;
  rounded?: string; 
  priority?: boolean;
  loading?: "lazy" | "eager";
  className?: string;
}

const imageSize: Record<LinkSize, { width: number; height: number }> = {
  xs: { width: 10, height: 10 },
  sm: { width: 20, height: 20 },
  md: { width: 30, height: 30 },
  lg: { width: 40, height: 40 },
  xl: { width: 50, height: 50 },
};

export const GeneralImage = ({
  src,
  alt,
  size = "md",
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
        {...imageSize[size]}
        loading={loading}
        priority={priority}
      />
    </div>
  );
};