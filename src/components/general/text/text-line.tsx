import { cn } from "@/lib/utils";

type TextType = "title" | "subTitle" | "text" | "link" | "importantText";
type TextColor = "white" | "red";

export interface TextLineInterface
  extends React.HTMLAttributes<HTMLDivElement> {
  text: string;
  type?: TextType;
  color?: TextColor
  className?: string;
  children?: React.ReactNode;
}

export const TextLine = ({
  text,
  type = "text",
  color = "white",
  className,
  children,
  ...props
}: TextLineInterface) => {
  const textFormat: Record<TextType, string> = {
    title: "text-2xl",
    subTitle: "text-lg text-red-500",
    text: "text-base",
    importantText: "text-red-500",
    link: "italic",
  };
  
  const textColor: Record<TextColor, string> = {
    white: "text-white",
    red: "text-red-500",
  }

  return (
    <div className={cn("", textFormat[type], textColor[color], className)} {...props}>
      {text}
      {children}
    </div>
  );
};
