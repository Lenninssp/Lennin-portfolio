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
        "inline-block overflow-hidden", 
        framed && "border border-white",
        rounded,
        className
      )}
      style={{ lineHeight: 0 }} 
    >
      <Image
        src={src}
        alt={alt}
        {...size}
        loading={loading}
        priority={priority}
        style={{ objectFit: "cover" }}  
        unoptimized
      />
    </div>
  );
};