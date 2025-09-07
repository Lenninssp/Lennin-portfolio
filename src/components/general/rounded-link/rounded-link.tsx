import { cn } from "@/lib/utils";
import { Icon } from "@iconify/react";
import Link from "next/link";

type LinkSize = "xs" | "sm" | "md" | "lg" | "xl";

interface RoundedLinkInterface {
  icon: string;
  text?: string;
  link?: string;
  size?: LinkSize;
  className?: string;
  children?: React.ReactNode;
}
export const RoundedLink = ({
  icon,
  text,
  link,
  size = "sm",
  className,
  children,
}: RoundedLinkInterface) => {
  const RoundedSize: Record<LinkSize, string> = {
    xs: "w-3 h-3 p-1",
    sm: "w-5 h-5 p-2",
    md: "w-7 h-7 p-3",
    lg: "w-10 h-10 p-4",
    xl: "w-12 h-12 p-5",
  };

  const content = (
    <div className={cn("flex items-center w-fit", className)}>
      <Icon icon={icon} className={cn(RoundedSize[size])} />
      {text && <span className="ml-2">{text}</span>}
      {children}
    </div>
  );

  if (!link) return content;

  return (
    <Link href={link} className="hover:opacity-80 cursor-pointer transition-opacity">
      {content}
    </Link>
  );
};
