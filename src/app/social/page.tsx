"use client";

import { cn } from "@/lib/utils";
import { useMediaQuery } from "react-responsive";
import { MenuItem } from "@/utils/types";
import { MenuComponent } from "@/components/menu/menu";
import useMyTheme from "@/components/ui/colorStyle";
import { GridStructure } from "@/components/grid/grid";

export default function Social() {
  const { style } = useMyTheme();
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  const menuItems: MenuItem[] = [
    { name: "Home", link: "/" },
    { name: "Projects", link: "/projects" },
    { name: "Experiences", link: "/experience" },
    { name: "About Me", link: "/about" },
  ];

  return (
    <GridStructure>
      <div className={cn("col-span-4 grid grid-cols-2 h-full", style)}>
        <div
          className={cn("p-3 flex h-full flex-col justify-around", style)}
        ></div>
        <div className={cn("p-3 h-full  flex items-center", style)}></div>
      </div>
      <div className={cn("col-span-2 p-0 h-full", style)}>
        <MenuComponent menuItems={menuItems} />
      </div>

      <div className={cn("col-span-3 p-3", style)}>
        <div className=" flex justify-center mb-2"></div>
      </div>
      <div className={cn("col-span-3 p-3", style)}>
        <div className=" flex justify-center mb-2"></div>
      </div>
    </GridStructure>
  );
}
