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
        "glass-panel flex h-full w-full max-w-full flex-col rounded-[1.75rem] border p-4 shadow-[0_18px_60px_rgba(15,23,42,0.08)] md:max-w-72",
        selectedColor === "light" ? "bg-white/70" : "bg-white/[0.04]",
        borderColor[selectedColor]["primary"],
        className
      )}
    >
      {children}
    </div>
  );
};
