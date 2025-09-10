import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils";
import { Icon } from "@iconify/react/dist/iconify.js";
import { TextLine } from "../general/text/text-line";

interface SidebarButtonProps {
  text: string
  onClick?: () => void;
  selected?: boolean;
  className?: string;
}
export const SidebarButton = ({text, onClick, selected = false, className}: SidebarButtonProps) => {
  return (
    <Button className={cn("text-white hover:bg-transparent border-transparent bg-transparent gap-4 hover:scale-105", className)} onClick={onClick}>
      <TextLine text={text} type="text" color={selected ? "secondary" : "primary"} />
      <Icon icon={"material-symbols:arrow-back-rounded"} className={cn("rotate-180", selected && "text-red-500")} />
    </Button>
  )
}