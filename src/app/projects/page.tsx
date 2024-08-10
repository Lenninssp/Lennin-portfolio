"use client";
import { useMediaQuery } from "react-responsive";
import { MenuItem } from "@/utils/types";
import { MenuComponent } from "@/components/menu/menu";
import useMyTheme from "@/components/ui/colorStyle";
import { cn } from "@/lib/utils";

export default function Projects() {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const {style} = useMyTheme()


  const menuItems: MenuItem[] = [
    { name: "Home", link: "/" },
    { name: "Social", link: "/social" },
    { name: "Experiences", link: "/experience" },
    { name: "About Me", link: "/about" },
  ];

  return (
    <div className={cn("col-span-2 p-0 h-full", style)}>

      <MenuComponent menuItems={menuItems} />
    </div>
  );
}
