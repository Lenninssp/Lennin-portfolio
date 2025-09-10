import { cn } from "@/lib/utils";
import { TextLine } from "../text/text-line";
import { GeneralSwitch } from "../button/general-switch";
import { useState } from "react";
import { usePageColor } from "@/contexts/selected-color";
import { backgroundColor, borderColor } from "../color-format-router";

interface BasePageProps {
  children: React.ReactNode;
}

export const BasePage = ({ children }: BasePageProps) => {
  const [activated, setActivated] = useState<boolean>(false);
  const { selectedColor, toggle } = usePageColor();
  return (
    <div className={cn("h-screen w-screen font-ltmono", backgroundColor[selectedColor])}>
      <div className="flex flex-col justify-center items-center w-full h-full">
        <TextLine
          className=" hidden md:inline-block absolute top-3 left-3"
          text="Lennin's Portfolio"
          type="title"
          color="secondary"
        />

        <GeneralSwitch
          activated={selectedColor === "light"}
          onToggle={toggle}
          className="absolute top-3 right-3"
          icon1="material-symbols:clear-day-rounded"
          icon2="material-symbols:mode-night"
        />

        <div
          className={cn(
            "bg-opacity-60 relative w-full h-full md:h-5/6 md:w-10/12 lg:w-2/3 border rounded-2xl flex justify-center overflow-auto",
            borderColor[selectedColor]["primary"]
          )}
        >
          <div className="h-full w-full flex p-10">{children}</div>
        </div>
      </div>
    </div>
  );
};
