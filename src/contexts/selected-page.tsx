import { PagesEnum } from "@/enums/pages";
import { createContext, useCallback, useContext, useMemo, useState } from "react";

interface PageContextType {
  selectedPage: PagesEnum;
  handlePageChange: (newPage: PagesEnum) => void;
}
const PageContext = createContext<PageContextType | undefined>(undefined);

export const PageProvider = ({ children }: { children: React.ReactNode }) => {
  const [selectedPage, setSelectedPage] = useState<PagesEnum>(
    PagesEnum.ABOUT_ME,
  );

  const handlePageChange = useCallback((newPage: PagesEnum) => {
    setSelectedPage(newPage);
  }, []);

  const value = useMemo(
    () => ({ selectedPage, handlePageChange }),
    [selectedPage, handlePageChange],
  );
  return <PageContext.Provider value={value}>{children}</PageContext.Provider>;
};

export const usePageContext = () => {
  const context = useContext(PageContext);
  if (!context) {
    throw new Error("usePageContext must be used within an PageProvider");
  }
  return context;
};
