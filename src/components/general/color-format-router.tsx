export type TextType = "title" | "subTitle" | "text" | "smallText" | "link";
export type TextColor = "primary" | "secondary";

export type PageColor = "dark" | "light";

export const textFormat: Record<TextType, string> = {
  title: "text-2xl font-semibold tracking-tight md:text-4xl",
  subTitle: "text-sm font-medium uppercase tracking-[0.22em] md:text-base",
  text: "text-sm leading-7 md:text-base md:leading-8",
  smallText: "text-xs leading-6 md:text-sm md:leading-7",
  link: "italic",
};

export const textColor: Record<PageColor, Record<TextColor, string>> = {
  light: {
    primary: "text-zinc-700",
    secondary: "text-red-600",
  },
  dark: {
    primary: "text-zinc-100",
    secondary: "text-orange-300",
  },
};

export const buttonColor: Record<PageColor, Record<TextColor, string>> = {
  light: {
    primary: "border border-vintage-300/80 bg-white/80 text-zinc-700 shadow-[0_10px_30px_rgba(120,53,15,0.08)] backdrop-blur-md hover:bg-white",
    secondary: "border border-red-500/20 bg-red-500 text-white shadow-[0_10px_30px_rgba(220,38,38,0.18)] hover:bg-red-600",
  },
  dark: {
    primary: "border border-white/10 bg-white/5 text-zinc-100 shadow-[0_12px_30px_rgba(0,0,0,0.28)] backdrop-blur-md hover:bg-white/10",
    secondary: "border border-orange-300/20 bg-orange-300 text-zinc-900 shadow-[0_10px_30px_rgba(253,186,116,0.16)] hover:bg-orange-200",
  },
};

export const borderColor: Record<PageColor, Record<TextColor, string>> = {
  light: {
    primary: "border-vintage-300/80",
    secondary: "border-red-500/70",
  },
  dark: {
    primary: "border-white/10",
    secondary: "border-orange-300/40",
  },
};

export const backgroundColor: Record<PageColor, string> = {
  light: "bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.95),_rgba(255,237,214,0.92)_45%,_rgba(255,216,168,0.9)_100%)] text-zinc-700",
  dark: "bg-[radial-gradient(circle_at_top,_rgba(39,39,42,1),_rgba(24,24,27,1)_45%,_rgba(9,9,11,1)_100%)] text-white",
};
