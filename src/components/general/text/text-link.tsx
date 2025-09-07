import { cn } from "@/lib/utils";
import { TextLine, TextLineInterface } from "./text-line";
import Link from "next/link";

interface TextLinkInterface extends TextLineInterface {
  link: string;
}

export const TexttLink = ({ text, className, link, children }: TextLinkInterface) => {
  return (
    <Link href={link}>
      <TextLine text={text} className={cn(" italic text-blue-500", className)} aria-label={text}>
        {children}
      </TextLine>
    </Link>
  );
};
