export type TextType = "title" | "subTitle" | "text" | "smallText" | "link";
export type TextColor = "white" | "red";

export const textFormat: Record<TextType, string> = {
  title: "text-2xl",
  subTitle: "text-lg text-red-500",
  text: "text-base",
  smallText: "text-sm",
  link: "italic",
};

export const textColor: Record<TextColor, string> = {
  white: "text-white",
  red: "text-red-500",
};


export const buttonColor: Record<TextColor, string> = {
  white: "bg-white",
  red: "bg-red-500",
};
