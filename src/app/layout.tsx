import type { Metadata } from "next";
import { Pixelify_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

type Theme = 'light' | 'dark';

interface ThemeStyles {
  light: string;
  dark: string;
}

interface UseThemeReturn {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  style: string;
}

const themeStyles: ThemeStyles = {
  light: 'bg-gray-100 border border-gray-300',
  dark: 'bg-gray-800 border border-gray-700'
};



const pixelifySans = Pixelify_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lennin's Portfolio",
  description: "Portfolio website created with Next.js",
};

const Header = () => (
  <div className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl absolute h-screen text-yellow-400 font-bold flex justify-center animate-fade-down -z-10 animate-delay-1000">
    <div className="h-1/3 w-screen justify-center items-center flex">
      Lennin&apos;s Portfolio
    </div>
  </div>
);

const BackgroundGrid = () => (
  <>
    <div className="bg-grid-mask " />
    <div className="bg-grid animate-jump-in">
      <div className="bg-grid-lines" />
    </div>
  </>
);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const  style  =  themeStyles.dark;
  return (
    <html lang="en">
      <body className={cn("bg-black text-white", pixelifySans.className)}>
        <Header />
        <BackgroundGrid />
        <main> <div className="h-screen w-screen">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div
          className={cn(
            "bg-opacity-60 h-full md:h-5/6 md:w-10/12 lg:w-1/2 border animate-fade-up animate-delay-[2000ms] flex justify-center overflow-auto",
            style
          )}
        >
          <div className="h-fit w-full grid grid-cols-6 p-5 gap-5">{children}</div></div></div></div></main>
      </body>
    </html>
  );
}