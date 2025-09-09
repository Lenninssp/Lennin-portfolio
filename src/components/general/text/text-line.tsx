import { cn } from "@/lib/utils";

type TextType = "title" | "subTitle" | "text" | "link" | "importantText"

export interface TextLineInterface extends React.HTMLAttributes<HTMLDivElement> {
  text: string;
  type?: TextType ;
  className?: string;
  children?: React.ReactNode;
}

export const TextLine = ({
  text,
  type = "text",
  className,
  children,
  ...props
}: TextLineInterface) => {

  const textFormat: Record<TextType, string> = {
    title: "text-2xl",
    subTitle: "text-xl text-red-500",
    text: "",
    importantText: "text-red-500",
    link: "italic"
  }
 
  return (
    <div className={cn("", textFormat[type] ,className)} {...props}>
      {text}
      {children}
    </div>
  )
}