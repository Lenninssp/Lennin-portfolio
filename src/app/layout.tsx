"use client";
import { PageProvider } from "@/contexts/selected-page";
import { Toaster } from "sonner";
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
