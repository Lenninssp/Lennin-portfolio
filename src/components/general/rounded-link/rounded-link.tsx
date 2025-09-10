import { cn } from "@/lib/utils";
import { Icon } from "@iconify/react";
import { OptionalLink } from "../optional-link";
import { LinkSize } from "@/types/sizes";
import React from "react";

export interface RoundedLinkInterface {
  icon: string;
  text?: string;
  link?: string;
  size?: LinkSize;
  onClick?: () => void;
  className?: string;
  children?: React.ReactNode;
  ariaLabel?: string;
  variant?: "ghost" | "solid" | "outline";
}

const circleSize: Record<LinkSize, string> = {
  xs: "h-6 w-6",
  sm: "h-8 w-8",
  md: "h-10 w-10",
  lg: "h-12 w-12",
  xl: "h-14 w-14",
};

const pillPadding: Record<LinkSize, string> = {
  xs: "px-2 py-1",
  sm: "px-2.5 py-1.5",
  md: "px-3 py-2",
  lg: "px-3.5 py-2.5",
  xl: "px-4 py-3",
};

const iconSize: Record<LinkSize, string> = {
  xs: "h-3 w-3",
  sm: "h-4 w-4",
  md: "h-5 w-5",
  lg: "h-6 w-6",
  xl: "h-7 w-7",
};

const textSize: Record<LinkSize, string> = {
  xs: "text-xs",
  sm: "text-sm",
  md: "text-base",
  lg: "text-lg",
  xl: "text-xl",
};


export const RoundedLink = ({
  icon,
  text,
  link,
  size = "sm",
  onClick,
  className,
  children,
  ariaLabel,
}: RoundedLinkInterface) => {
  const iconOnly = !text && !children;

  const base =
    "inline-flex items-center justify-center rounded-full select-none transition outline-none focus-visible:ring-2 focus-visible:ring-white/50";

  return (
    <OptionalLink link={link}>
      <button
        className={cn(
          base,
          onClick && "hover:opacity-80 cursor-pointer transition-opacity",
          iconOnly ? circleSize[size] : cn("w-fit", pillPadding[size], "gap-2"),
          className,
        )}
        aria-label={iconOnly ? ariaLabel ?? icon : undefined}
        role="link"
        onClick={onClick}
      >
        <Icon className={cn(iconSize[size], "shrink-0")} icon={icon} />
        {text && (
          <span className={cn("font-medium", textSize[size])}>{text}</span>
        )}
        {children}
      </button>
    </OptionalLink>
  );
};
