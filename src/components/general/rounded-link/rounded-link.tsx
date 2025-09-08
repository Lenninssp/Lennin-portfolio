import { cn } from "@/lib/utils";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { OptionalLink } from "../optional-link";
import { LinkSize } from "@/types/sizes";


export interface RoundedLinkInterface {
  icon: string;
  text?: string;
  link?: string;
  size?: LinkSize;
  className?: string;
  children?: React.ReactNode;
}
export const RoundedLink = ({
  icon,
  text,
  link,
  size = "sm",
  className,
  children,
}: RoundedLinkInterface) => {
  const RoundedSize: Record<LinkSize, string> = {
    xs: "w-3 h-3 p-1",
    sm: "w-5 h-5 p-2",
    md: "w-7 h-7 p-3",
    lg: "w-10 h-10 p-4",
    xl: "w-12 h-12 p-5",
  };

  const TextSize: Record<LinkSize, string> = {
    xs: "text-xs",
    sm: "text-sm",
    md: "text-md",
    lg: "text-lg",
    xl: "text-xl",
  };

  return (
    <OptionalLink link={link}>
      <div
        className={cn(
          "flex items-center w-fit",
          cn(RoundedSize[size]),
          className
        )}
      >
        <Icon icon={icon} className=" h-full w-full" />
        {text && (
          <span className={cn("ml-2 text", TextSize[size])}>{text}</span>
        )}
        {children}
      </div>
    </OptionalLink>
  );
};
