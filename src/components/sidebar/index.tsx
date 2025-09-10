import { usePageContext } from "@/contexts/selected-page";
import { SidebarFrame } from "./frame";
import { SidebarButton } from "./sidebar-button";
import { PagesEnum } from "@/enums/pages";
import { useState } from "react";
import { RoundedLink } from "../general/rounded-link/rounded-link";
import { handleEmailClick } from "../contact";
import { GeneralIcon } from "../general/icon/general-icon";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { buttonColor, PageColor, TextColor } from "../general/color-format-router";
import { usePageColor } from "@/contexts/selected-color";

export const Sidebar = () => {
  const { selectedPage, handlePageChange } = usePageContext();
  const { selectedColor } = usePageColor();
  const [hidden, setHidden] = useState<boolean>(false);

  const handleHidden = () => {
    setHidden((prev) => !prev);
  };

  const sidebarColors: Record<PageColor, string> = {
    light: "hover:border-zinc-900 bg-white hover:bg-white",
    dark:"hover:border-white bg-zinc-900 hover:bg-zinc-900",
  };

  const OpenSidebarButton = ({ className }: { className?: string }) => (
    <Button
      onClick={handleHidden}
      className={cn(
        " border-transparent rounded-xl border opacity-60 hover:opacity-100 p-1 px-3", sidebarColors[selectedColor],
        className
      )}
    >
      <GeneralIcon
        icon={"material-symbols:view-sidebar-sharp"}
        color="secondary"
        className=" h-5 w-5"
      />
    </Button>
  );

  if (hidden)
    return (
      <div className="absolute top-2 left-2 md:relative h-full flex items-start">
        <OpenSidebarButton />
      </div>
    );

  return (
    <SidebarFrame className={cn("absolute top-0 left-0 md:relative flex flex-col justify-between", buttonColor[selectedColor]["primary"])}>
      <div className=" w-full flex flex-col items-start">
        <OpenSidebarButton />
        <SidebarButton
          text="Projects"
          selected={selectedPage === PagesEnum.PROJECTS}
          onClick={() => handlePageChange(PagesEnum.PROJECTS)}
        />
        <SidebarButton
          text="About me"
          selected={selectedPage === PagesEnum.ABOUT_ME}
          onClick={() => handlePageChange(PagesEnum.ABOUT_ME)}
        />
        <SidebarButton
          text=" Contact me"
          selected={selectedPage === PagesEnum.CONTACT}
          onClick={() => handlePageChange(PagesEnum.CONTACT)}
        />
      </div>
      <div className=" flex flex-row w-fit justify-around">
        <RoundedLink
          icon="ic:baseline-email"
          className=" cursor-pointer"
          onClick={handleEmailClick}
        />

        <RoundedLink
          icon="grommet-icons:github"
          link="https://github.com/Lenninssp"
        />
        <RoundedLink
          icon="grommet-icons:linkedin"
          link="https://www.linkedin.com/in/lennin-sabogal/"
        />
      </div>
    </SidebarFrame>
  );
};
