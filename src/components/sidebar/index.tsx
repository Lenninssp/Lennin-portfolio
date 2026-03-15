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
import { buttonColor, PageColor } from "../general/color-format-router";
import { usePageColor } from "@/contexts/selected-color";

export const Sidebar = () => {
  const { selectedPage, handlePageChange } = usePageContext();
  const { selectedColor } = usePageColor();
  const [hidden, setHidden] = useState<boolean>(false);

  const handleHidden = () => {
    setHidden((prev) => !prev);
  };

  const sidebarColors: Record<PageColor, string> = {
    light: "border-vintage-300/70 bg-white/80 text-zinc-700 hover:bg-white",
    dark: "border-white/10 bg-white/5 text-white hover:bg-white/10",
  };

  const OpenSidebarButton = ({ className }: { className?: string }) => (
    <Button
      onClick={handleHidden}
      className={cn(
        "glass-panel h-11 rounded-2xl border px-3 shadow-[0_12px_24px_rgba(15,23,42,0.10)] transition-all duration-300 hover:-translate-y-0.5 hover:scale-105", sidebarColors[selectedColor],
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
      <div className="absolute left-2 top-2 z-20 flex h-full items-start md:relative">
        <OpenSidebarButton />
      </div>
    );

  return (
    <SidebarFrame className={cn("absolute left-0 top-0 z-10 flex w-[18rem] flex-col justify-between gap-6 md:relative md:w-72", buttonColor[selectedColor]["primary"])}>
      <div className="flex w-full flex-col items-start gap-3">
        <OpenSidebarButton />
        <div className="px-2 pt-2">
          <p className="text-xs uppercase tracking-[0.28em] text-red-500 dark:text-orange-300">
            Explore
          </p>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
            Developer, builder, and entrepreneur crafting practical products with personality.
          </p>
        </div>
        <SidebarButton
          text="About me"
          selected={selectedPage === PagesEnum.ABOUT_ME}
          onClick={() => handlePageChange(PagesEnum.ABOUT_ME)}
        />
        <SidebarButton
          text="Projects"
          selected={selectedPage === PagesEnum.PROJECTS}
          onClick={() => handlePageChange(PagesEnum.PROJECTS)}
        />
        <SidebarButton
          text="Contact me"
          selected={selectedPage === PagesEnum.CONTACT}
          onClick={() => handlePageChange(PagesEnum.CONTACT)}
        />
      </div>
      <div className="flex w-full items-center gap-3 pt-3">
        <RoundedLink
          icon="ic:baseline-email"
          className="animate-float"
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
