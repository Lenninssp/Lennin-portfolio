import { PageColor } from "@/components/general/color-format-router";
import { createContext, useMemo, useState } from "react";

interface PageColorContextProps {
  selectedColor: PageColor;
  handleSelectColor: (selectedColor: PageColor) => void;
}

export const PageColorContext = createContext<PageColorContextProps | undefined>(undefined);

export const PageColorProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [selectedColor, setSelectedColor] = useState<PageColor>("light");

  const handleSelectColor = (selectedColor: PageColor) => {
    setSelectedColor(selectedColor);
  };
  const value = useMemo(
    () => ({ selectedColor, handleSelectColor }),
    [selectedColor, handleSelectColor]
  );

  return (
    <PageColorContext.Provider value={value}>
      {children}
    </PageColorContext.Provider>
  );
};
