import { Badge, badgeVariants } from "@/components/ui/badge";
import { RoundedLinkInterface } from "../rounded-link/rounded-link";
import { VariantProps } from "class-variance-authority";
import { Icon } from "@iconify/react/dist/iconify.js";
import { OptionalLink } from "../optional-link";

interface GeneralTagInterface {
  text: string;
  variant?: typeof badgeVariants.arguments;
  icon?: string;
  link?: string;
  className?: string;
}

export const GeneralTag = ({
  text,
  icon,
  variant,
  link,
  className,
}: GeneralTagInterface) => {
  return (
    <OptionalLink link={link}>
      <Badge variant={variant}>
        {icon && <Icon icon={icon} />}
        <span className={icon && "ml-2"}>{text}</span>
      </Badge>
    </OptionalLink>
  );
};
