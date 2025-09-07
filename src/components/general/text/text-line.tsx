import { cn } from "@/lib/utils";

export interface TextLineInterface extends React.HTMLAttributes<HTMLDivElement> {
  text: string;
  className?: string;
  children?: React.ReactNode;
}

export const TextLine = ({
  text,
  className,
  children,
  ...props
}: TextLineInterface) => {

  return (
    <div className={cn("",className)} {...props}>
      {text}
      {children}
    </div>
  )
}