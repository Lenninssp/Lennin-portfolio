"use client";
import type { Metadata } from "next";
import { Pixelify_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { PageProvider } from "@/contexts/selected-page";
import { Toaster } from "sonner";
import { TextLine } from "@/components/general/text/text-line";
import { PageColorProvider } from "@/contexts/selected-color";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main>
          <PageColorProvider>
            <PageProvider>
              {children}
            </PageProvider>
          </PageColorProvider>
        </main>
        <Toaster />
      </body>
    </html>
  );
}
