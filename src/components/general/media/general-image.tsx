import { usePageColor } from "@/contexts/selected-color";
import { cn } from "@/lib/utils";
import { LinkSize } from "@/types/sizes";
import Image from "next/image";
import { borderColor, TextColor } from "../color-format-router";

interface GeneralImageInterface {
  src: string;
  alt: string;
  color?: TextColor;
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
  color = "primary",
  size,
  framed,
  rounded = "rounded-lg",
  priority = false,
  loading = "lazy",
  className,
}: GeneralImageInterface) => {
  const { selectedColor } = usePageColor()
  return (
    <div
      className={cn(
        "inline-block overflow-hidden", 
        framed && "border" && borderColor[selectedColor][color],
        rounded,
        className
      )}
      style={{ lineHeight: 0, minHeight: size?.height, minWidth: size?.width }} 
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