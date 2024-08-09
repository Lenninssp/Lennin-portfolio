import type { Metadata } from "next";
import { Pixelify_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

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
  return (
    <html lang="en">
      <body className={cn("bg-black text-white", pixelifySans.className)}>
        <Header />
        <BackgroundGrid />
        <main>{children}</main>
      </body>
    </html>
  );
}