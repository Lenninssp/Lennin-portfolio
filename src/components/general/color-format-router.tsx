export type TextType = "title" | "subTitle" | "text" | "smallText" | "link";
export type TextColor = "primary" | "secondary";

export type PageColor = "dark" | "light";

export const textFormat: Record<TextType, string> = {
  title: "text-2xl",
  subTitle: "text-lg text-red-500",
  text: "text-base",
  smallText: "text-sm",
  link: "italic",
};

export const textColor: Record<PageColor, Record<TextColor, string>> = {
  light: {
    primary: "text-zinc-500",
    secondary: "text-red-600",
  },
  dark: {
    primary: "text-zinc-100",
    secondary: "text-red-400",
  },
};

export const buttonColor: Record<PageColor, Record<TextColor, string>> = {
  light: {
    primary: "bg-vintage-200 text-vintage-500",
    secondary: "bg-red-600 text-white",
  },
  dark: {
    primary: "bg-zinc-900 hover:bg-zinc-700 text-white",
    secondary: "bg-red-500 hover:bg-red-600 text-zinc-100",
  },
};

export const borderColor: Record<PageColor, Record<TextColor, string>> = {
  light: {
    primary: "border-vintage-400",
    secondary: "border-red-600 ",
  },
  dark: {
    primary: "border-white ",
    secondary: "border-red-500 ",
  },
};

export const backgroundColor: Record<PageColor, string> = {
  light: "bg-vintage-100 text-zinc-400",
  dark: "bg-zinc-900 text-white",
};
