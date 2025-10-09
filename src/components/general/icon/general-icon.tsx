import { Icon } from "@iconify/react/dist/iconify.js";
import { textColor, TextColor } from "../color-format-router";
import { cn } from "@/lib/utils";
import { usePageColor } from "@/contexts/selected-color";

interface GeneralIconProps {
  icon: string;
  className?: string;
  color?: TextColor;
}

export const GeneralIcon = ({
  icon,
  color = "primary",
  className,
}: GeneralIconProps) => {
  const { selectedColor } = usePageColor();
  return <Icon icon={icon} className={cn(textColor[selectedColor][color], className)} />;
};
