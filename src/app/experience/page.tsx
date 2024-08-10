"use client";
import { useMediaQuery } from "react-responsive";
import { MenuItem } from "@/utils/types";
import { MenuComponent } from "@/components/menu/menu";
import { cn } from "@/lib/utils";
import useMyTheme from "@/components/ui/colorStyle";

export default function Experience() {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const {style} = useMyTheme()

  const menuItems: MenuItem[] = [
    { name: "Home", link: "/" },
    { name: "Social", link: "/social" },
    { name: "projects", link: "/projects" },
    { name: "About Me", link: "/about" },
  ];

  return (
    <div className={cn("col-span-2 p-0 h-full", style)}>

      <MenuComponent menuItems={menuItems} />
    </div>
  );
}
