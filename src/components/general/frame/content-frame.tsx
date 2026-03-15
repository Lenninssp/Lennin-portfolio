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
        "glass-panel flex h-full w-full animate-pop-in flex-col overflow-auto rounded-[1.75rem] border bg-white/45 p-5 shadow-[0_18px_60px_rgba(15,23,42,0.08)] custom-scrollbar md:p-7",
        selectedColor === "dark" && "bg-white/[0.03] shadow-[0_20px_65px_rgba(0,0,0,0.3)]",
        borderColor[selectedColor][color],
        className
      )}
    >
      {children}
    </div>
  );
};
