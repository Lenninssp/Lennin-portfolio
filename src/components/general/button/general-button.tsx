import { cn } from "@/lib/utils";
import { buttonColor, TextColor } from "../color-format-router";
import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react/dist/iconify.js";
import { GeneralIcon } from "../icon/general-icon";
import { usePageColor } from "@/contexts/selected-color";

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
  color = "primary",
  className,
}: GeneralButtonProps) => {
  const { selectedColor } = usePageColor()
  return (
    <Button className={cn("flex gap-4", buttonColor[selectedColor][color], className)} onClick={onClick}>
      {icon && <GeneralIcon icon={icon} className="h-4 w-4" color={color} />}
      <span>{text}</span>
    </Button>
  );
};
