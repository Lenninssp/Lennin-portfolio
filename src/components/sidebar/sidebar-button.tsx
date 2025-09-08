import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils";
import { Icon } from "@iconify/react/dist/iconify.js";

interface SidebarButtonProps {
  text: string
  onClick?: () => void;
  selected?: boolean;
  className?: string;
}
export const SidebarButton = ({text, onClick, selected = false, className}: SidebarButtonProps) => {
  return (
    <Button className={cn("text-white border-transparent bg-transparent gap-4 hover:scale-105", selected && "text-red-500", className)} onClick={onClick}>
      {text}
      <Icon icon={"material-symbols:arrow-back-rounded"} className="rotate-180" />
    </Button>
  )
}