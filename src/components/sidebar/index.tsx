import { usePageContext } from "@/contexts/selected-page";
import { SidebarFrame } from "./frame";
import { SidebarButton } from "./sidebar-button";
import { PagesEnum } from "@/enums/pages";

export const Sidebar = () => {
  const { selectedPage, handlePageChange } = usePageContext();
  return (
    <SidebarFrame>
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
    </SidebarFrame>
  );
};
