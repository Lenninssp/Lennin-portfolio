import { Input } from "@/components/ui/input"
import { textColor, TextColor } from "../color-format-router";
import { cn } from "@/lib/utils";

interface GeneralInputProps {
  placeholder?: string;
  text?: string;
  className?: string;
  color: TextColor;
}
export const GeneralInput = ({placeholder, text = "", className, color = "white"}: GeneralInputProps) => {
  return (
    <Input className={cn("border bg-black", textColor[color] ,className)} content={text} placeholder={placeholder} />
  )
}