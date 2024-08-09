"use client";

import { cn } from "@/lib/utils";
import { Icon } from "@iconify/react";
import Link from "next/link";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";
import { useEffect, useState } from "react";
import { MenuItem } from "@/utils/types";
import { MenuComponent } from "@/components/menu/menu";


export default function Social() {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const [theme, setTheme] = useState("dark");


  const menuItems: MenuItem[] = [
    { name: "Home" , link: "/" },
    { name: "Projects" , link: "" },
    { name: "Experiences", link: "" },
    { name: "About Me" , link: ""},
  ];


  useEffect(() => {
    if (typeof window !== "undefined") {
      setTheme(
        window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light"
      );
    }
  }, []);
  const style =
    theme === "light"
      ? "bg-gray-100 border border-gray-300"
      : "bg-gray-800 border border-gray-700";

  return (
    <div className="h-screen w-screen">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div
          className={cn(
            "bg-opacity-60 h-full md:h-5/6 md:w-10/12 lg:w-1/2 border flex justify-center overflow-auto",
            style
          )}
        >
          <div className="h-fit w-full grid grid-cols-6 p-5 gap-5">
            <div className={cn("col-span-4 grid grid-cols-2 h-full", style)}>
              <div
                className={cn("p-3 flex h-full flex-col justify-around", style)}
              >
              </div>
              <div className={cn("p-3 h-full  flex items-center", style)}>
              </div>
            </div>
            <div className={cn("col-span-2 p-0 h-full", style)}>
             <MenuComponent menuItems={menuItems}/>
            </div>
            
            <div className={cn("col-span-3 p-3", style)}>
              <div className=" flex justify-center mb-2"></div>
            </div>
            <div className={cn("col-span-3 p-3", style)}>
              <div className=" flex justify-center mb-2"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
