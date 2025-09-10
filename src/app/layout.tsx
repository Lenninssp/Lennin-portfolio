"use client";
import type { Metadata } from "next";
import { Pixelify_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { PageProvider } from "@/contexts/selected-page";
import { Toaster } from "sonner";
import { TextLine } from "@/components/general/text/text-line";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("bg-black text-white font-ltmono")}>
        <main>
          <PageProvider>
            <div className="h-screen w-screen">
              <div className="flex flex-col justify-center items-center w-full h-full">
                <TextLine
                  className=" hidden md:inline-block absolute top-3 left-3"
                  text="Lennin's Portfolio"
                  type="title"
                  color="red"
                />

                <div
                  className={cn(
                    "bg-opacity-60 relative w-full h-full md:h-5/6 md:w-10/12 lg:w-2/3 border rounded-2xl  flex justify-center overflow-auto"
                  )}
                >
                  <div className="h-full w-full flex p-10">{children}</div>
                </div>
              </div>
            </div>
          </PageProvider>
        </main>
        <Toaster />
      </body>
    </html>
  );
}
