import { cn } from "@/lib/utils";
import {
  TextColor,
  textColor,
  textFormat,
  TextType,
} from "../color-format-router";

export interface TextLineInterface
  extends React.HTMLAttributes<HTMLDivElement> {
  text: string;
  type?: TextType;
  color?: TextColor;
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
  return (
    <div
      className={cn("", textFormat[type], textColor[color], className)}
      {...props}
    >
      {text}
      {children}
    </div>
  );
};
