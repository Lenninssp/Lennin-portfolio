import { Switch } from "@/components/ui/switch";
import { Icon } from "@iconify/react/dist/iconify.js";
import { cn } from "@/lib/utils";
interface GeneralSwitchProps {
  activated: boolean;
  onToggle: (value: boolean) => void;
  icon1?: string;
  icon2?: string;
  className?: string
}

export const GeneralSwitch = ({
  activated,
  onToggle,
  icon1,
  icon2,
  className
}: GeneralSwitchProps) => {
  return (
    <div className={cn("glass-panel flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-2 shadow-[0_10px_35px_rgba(15,23,42,0.12)]", className)}>
      {icon1 && <Icon icon={icon1} className={cn("h-4 w-4 transition-transform", activated && "scale-110 text-amber-400")} />}
      <Switch
        checked={activated}
        onCheckedChange={onToggle}
        className="data-[state=checked]:bg-amber-400 data-[state=unchecked]:bg-zinc-300 dark:data-[state=unchecked]:bg-zinc-700"
      />
      {icon2 && <Icon icon={icon2} className={cn("h-4 w-4 transition-transform", !activated && "scale-110 text-orange-300")} />}
    </div>
  );
};
