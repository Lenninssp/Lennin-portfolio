import { usePageColor } from "@/contexts/selected-color";
import { cn } from "@/lib/utils";
import { borderColor } from "../general/color-format-router";

interface SidebarFrameProps {
  className?: string;
  children: React.ReactNode;
}
export const SidebarFrame = ({ className, children }: SidebarFrameProps) => {
  const { selectedColor } = usePageColor()
  return (
    <div
      className={cn(
        " w-fit max-w-52 h-full border-2 rounded-2xl p-4 flex flex-col",
        borderColor[selectedColor]["primary"],
        className
      )}
    >
      {children}
    </div>
  );
};
