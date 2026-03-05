import { cn } from "@/lib/utils";
import { Icon } from "@iconify/react";
import { OptionalLink } from "../optional-link";
import { LinkSize } from "@/types/sizes";
import React from "react";
import { usePageColor } from "@/contexts/selected-color";
import { buttonColor, TextColor } from "../color-format-router";

export interface RoundedLinkInterface {
  icon: string;
  text?: string;
  link?: string;
  size?: LinkSize;
  color?: TextColor;
  onClick?: () => void;
  className?: string;
  children?: React.ReactNode;
}

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
  color = "primary",
  onClick,
  className,
  children,
}: RoundedLinkInterface) => {
  const { selectedColor } = usePageColor()
  const iconOnly = !text && !children;

  return (
    <OptionalLink link={link}>
      <button
        className={cn(
          "inline-fle max-w-60 flex flex-row gap-2 truncate items-center justify-center rounded-full select-none transition outline-none px-2 py-1 focus-visible:ring-2 focus-visible:ring-white/50",
          onClick && "hover:opacity-80 cursor-pointer transition-opacity",
          buttonColor[selectedColor][color],
          className,
        )}
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
