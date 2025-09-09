import { usePageContext } from "@/contexts/selected-page";
import { SidebarFrame } from "./frame";
import { SidebarButton } from "./sidebar-button";
import { PagesEnum } from "@/enums/pages";
import { Fragment } from "react";
import { RoundedLink } from "../general/rounded-link/rounded-link";
import { handleEmailClick } from "../contact";

export const Sidebar = () => {
  const { selectedPage, handlePageChange } = usePageContext();
  return (
    <SidebarFrame className=" flex flex-col justify-between">
      <div className=" w-full">
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
