import { cn } from "@/lib/utils";
import Link from "next/link";

interface OptionalLinkProps {
  link?: string;
  children: React.ReactNode;
  className?: string;
}

export const OptionalLink = ({
  link,
  children,
  className,
}: OptionalLinkProps) => {
  if (!link) return children;

  return (
    <Link
      href={link}
      className={cn("hover:opacity-80 cursor-pointer transition-opacity", className)}
    >
      <span>{children}</span>
    </Link>
  );
};
