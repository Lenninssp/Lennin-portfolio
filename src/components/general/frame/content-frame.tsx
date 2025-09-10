import { usePageColor } from "@/contexts/selected-color";
import { cn } from "@/lib/utils";
import { borderColor, TextColor } from "../color-format-router";

interface GeneralContentFrameProps {
  color?: TextColor;
  className?: string;
  children?: React.ReactNode;
}
export const GeneralContentFrame = ({
  color = "primary", 
  className,
  children,
}: GeneralContentFrameProps) => {
  const { selectedColor } = usePageColor();
  return (
    <div
      className={cn(
        "rounded-2xl border-2  p-5 flex flex-col w-full h-full overflow-auto custom-scrollbar",
        borderColor[selectedColor][color],
        className
      )}
    >
      {children}
    </div>
  );
};
