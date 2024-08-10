"use client";
import { useMediaQuery } from "react-responsive";
import { MenuItem } from "@/utils/types";
import { MenuComponent } from "@/components/menu/menu";

export default function Projects() {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  const menuItems: MenuItem[] = [
    { name: "Home", link: "/" },
    { name: "Social", link: "/social" },
    { name: "Experiences", link: "/experience" },
    { name: "About Me", link: "/about" },
  ];

  return (
    <>
      <MenuComponent menuItems={menuItems} />
    </>
  );
}
