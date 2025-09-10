import { PageColor } from "@/components/general/color-format-router";
import { useCallback } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { createContext, useMemo, useState } from "react";

interface PageColorContextProps {
  selectedColor: PageColor;                 
  setSelectedColor: (c: PageColor) => void; 
  toggle: () => void;                       
}


export const PageColorContext = createContext<PageColorContextProps | undefined>(undefined);

export const PageColorProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [selectedColor, setSelectedColorState] = useState<PageColor>("light");

  useEffect(() => {
    const saved = (localStorage.getItem("pageColor") as PageColor) || null;
    const prefersDark =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-color-scheme: dark)").matches;

    setSelectedColorState(saved ?? (prefersDark ? "dark" : "light"));
  }, []);

  const setSelectedColor = useCallback((c: PageColor) => {
    setSelectedColorState(c);
    localStorage.setItem("pageColor", c);
    const root = document.documentElement;
    if (c === "dark") root.classList.add("dark");
    else root.classList.remove("dark");
  }, []);

  const toggle = useCallback(
    () => setSelectedColor(selectedColor === "dark" ? "light" : "dark"),
    [selectedColor, setSelectedColor]
  );

  const value = useMemo(
    () => ({ selectedColor, setSelectedColor, toggle }),
    [selectedColor, setSelectedColor, toggle]
  );

  return (
    <PageColorContext.Provider value={value}>
      {children}
    </PageColorContext.Provider>
  );
};


export const usePageColor = () => {
  const ctx = useContext(PageColorContext);
  if (!ctx) throw new Error("usePageColor must be used within PageColorProvider");
  return ctx;
}