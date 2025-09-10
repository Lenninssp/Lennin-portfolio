import { Icon } from "@iconify/react/dist/iconify.js";
import { textColor, TextColor } from "../color-format-router";
import { cn } from "@/lib/utils";

interface GeneralIconProps{
  icon: string;
  className?: string;
  color?: TextColor;
}

export const GeneralIcon = ({icon, color = "white", className}: GeneralIconProps) => {
  return (
    <Icon icon={icon} className={cn(textColor[color], className)} />
  )
}