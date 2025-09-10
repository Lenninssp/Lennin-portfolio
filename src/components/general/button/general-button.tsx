import { cn } from "@/lib/utils";
import { buttonColor, TextColor } from "../color-format-router";
import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react/dist/iconify.js";
import { GeneralIcon } from "../icon/general-icon";

interface GeneralButtonProps {
  text: string;
  onClick: () => void;
  icon?: string;
  color?: TextColor;
  className?: string;
}

export const GeneralButton = ({
  text,
  onClick,
  icon,
  color = "white",
  className,
}: GeneralButtonProps) => {
  return (
    <Button className={cn("flex gap-4", buttonColor[color], className)} onClick={onClick}>
      {icon && <GeneralIcon icon={icon} className="h-4 w-4" color={color} />}
      <span>{text}</span>
    </Button>
  );
};
