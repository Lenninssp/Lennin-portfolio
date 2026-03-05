"use client";

import type { ReactNode } from "react";
import { PageProvider } from "@/contexts/selected-page";
import { PageColorProvider } from "@/contexts/selected-color";
import { Toaster } from "sonner";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <>
      <main>
        <PageColorProvider>
          <PageProvider>{children}</PageProvider>
        </PageColorProvider>
      </main>

      <Toaster />
    </>
  );
}