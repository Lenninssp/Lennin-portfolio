import type { Metadata } from "next";
import { Pixelify_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("bg-black text-white font-ltmono")}>
        <main>
          <div className="h-screen w-screen">
            <div className="flex flex-col justify-center items-center w-full h-full">
              <div
                className={cn(
                  "bg-opacity-60 h-full md:h-5/6 md:w-10/12 lg:w-1/2 border  flex justify-center overflow-auto"
                )}
              >
                <div className="h-full w-full flex p-10">
                  {children}
                </div>
              </div>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
