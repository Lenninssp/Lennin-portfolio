import { Badge, badgeVariants } from "@/components/ui/badge";
import { RoundedLinkInterface } from "../rounded-link/rounded-link";
import { VariantProps } from "class-variance-authority";
import { Icon } from "@iconify/react/dist/iconify.js";
import { OptionalLink } from "../optional-link";
import { cn } from "@/lib/utils";

interface GeneralTagInterface extends VariantProps<typeof badgeVariants> {
  text: string;
  icon?: string;
  link?: string;
  className?: string;
}

export const GeneralTag = ({
  text,
  icon,
  link,
  variant,
  className,
}: GeneralTagInterface) => {
  return (
    <OptionalLink link={link}>
      <Badge variant={variant} className={cn("", className)}>
        {icon && <Icon icon={icon} />}
        <span className={cn(icon && "ml-2")}>{text}</span>
      </Badge>
    </OptionalLink>
  );
};
