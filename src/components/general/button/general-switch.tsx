import { Switch } from "@/components/ui/switch";
import { Icon } from "@iconify/react/dist/iconify.js";
import { cn } from "@/lib/utils";
import * as SwitchPrimitives from "@radix-ui/react-switch"


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
    <div className={cn("flex w-fit gap-1 items-center", className)}>
      {icon1 && <Icon icon={icon1} />}
      <Switch
        checked={activated}
        onCheckedChange={onToggle}
        className=""
      />
      {icon2 && <Icon icon={icon2} />}
    </div>
  );
};
