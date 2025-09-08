import { SidebarFrame } from "./frame";
import { SidebarButton } from "./sidebar-button";

export const Sidebar = () => {
  return (
    <SidebarFrame>
      <SidebarButton text="Projects" />
      <SidebarButton text="About me" />
      <SidebarButton text=" Contact me" />
    </SidebarFrame>
  );
};
