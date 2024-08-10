"use client";

import { cn } from "@/lib/utils";
import { Icon } from "@iconify/react";
import Link from "next/link";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";
import { useEffect, useState } from "react";
import { MenuItem } from "@/utils/types";
import { MenuComponent } from "@/components/menu/menu";
import { GridStructure } from "@/components/grid/grid";

export default function Projects() {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const [theme, setTheme] = useState("dark");

  const menuItems: MenuItem[] = [
    { name: "Home", link: "/" },
    { name: "Social", link: "/social" },
    { name: "Experiences", link: "" },
    { name: "About Me", link: "" },
  ];

  return (
    <GridStructure>
      <MenuComponent menuItems={menuItems} />
    </GridStructure>
  );
}
