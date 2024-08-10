import { cn } from "@/lib/utils";
import useMyTheme from "../ui/colorStyle";
import { FC, ReactNode } from "react";

interface GridStructureProps {
  children: ReactNode;
}

export const GridStructure: FC<GridStructureProps> = ({ children }) => {
  const { style } = useMyTheme();

  return (
    <div className="h-screen w-screen">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div
          className={cn(
            "bg-opacity-60 h-full md:h-5/6 md:w-10/12 lg:w-1/2 border flex justify-center overflow-auto",
            style
          )}
        >
          <div className="h-fit w-full grid grid-cols-6 p-5 gap-5">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};
