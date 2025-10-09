import { Input } from "@/components/ui/input"
import { textColor, TextColor } from "../color-format-router";
import { cn } from "@/lib/utils";
import { usePageColor } from "@/contexts/selected-color";

interface GeneralInputProps {
  placeholder?: string;
  text?: string;
  className?: string;
  color: TextColor;
}
export const GeneralInput = ({placeholder, text = "", className, color = "primary"}: GeneralInputProps) => {
    const { selectedColor } = usePageColor()
  
  return (
    <Input className={cn("border bg-black", textColor[selectedColor][color] ,className)} content={text} placeholder={placeholder} />
  )
}