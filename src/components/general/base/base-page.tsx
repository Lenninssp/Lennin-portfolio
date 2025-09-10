import { cn } from "@/lib/utils";
import { TextLine } from "../text/text-line";
import { GeneralSwitch } from "../button/general-switch";
import { useState } from "react";

interface BasePageProps {
  children: React.ReactNode;
}

export const BasePage = ({ children }: BasePageProps) => {
  const [activated, setActivated] = useState<boolean>(false);
  return (
    <div className="h-screen w-screen">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <TextLine
          className=" hidden md:inline-block absolute top-3 left-3"
          text="Lennin's Portfolio"
          type="title"
          color="red"
        />

        <GeneralSwitch
          activated={activated}
          onToggle={() => setActivated((prev) => !prev)}
          className="absolute top-3 right-3"
          icon1="material-symbols:clear-day-rounded"
          icon2="material-symbols:mode-night"
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
  );
};
