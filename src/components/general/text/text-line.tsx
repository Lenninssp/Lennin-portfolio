import { cn } from "@/lib/utils";
import {
  TextColor,
  textColor,
  textFormat,
  TextType,
} from "../color-format-router";
import { usePageColor } from "@/contexts/selected-color";

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
  color = "primary",
  className,
  children,
  ...props
}: TextLineInterface) => {
  const { selectedColor } = usePageColor();

  return (
    <div
      className={cn(
        "",
        textFormat[type],
        textColor[selectedColor][color],
        className
      )}
      {...props}
    >
      {text}
      {children}
    </div>
  );
};
