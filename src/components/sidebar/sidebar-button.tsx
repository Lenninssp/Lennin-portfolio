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
    <Button
      className={cn(
        "group h-auto w-full justify-between rounded-2xl border border-transparent bg-transparent px-4 py-3 transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.01] hover:bg-black/[0.03] dark:hover:bg-white/[0.04]",
        selected && "border-red-500/20 bg-red-500/10 shadow-[0_8px_24px_rgba(220,38,38,0.10)] dark:border-orange-300/20 dark:bg-orange-300/10",
        className
      )}
      onClick={onClick}
    >
      <TextLine text={text} type="text" color={selected ? "secondary" : "primary"} className="text-left" />
      <Icon icon={"material-symbols:arrow-back-rounded"} className={cn("rotate-180 transition-transform duration-300 group-hover:translate-x-1", selected && "text-red-500 dark:text-orange-300")} />
    </Button>
  )
}
