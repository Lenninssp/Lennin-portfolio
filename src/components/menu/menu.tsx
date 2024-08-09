import { cn } from "@/lib/utils"
import { MenuItem } from "@/utils/types"
import { Icon } from "@iconify/react";
import Link from "next/link"
import { FC } from "react"
import { useMediaQuery } from "react-responsive"

interface MenuComponentProps {
    menuItems: MenuItem[]
}

export const MenuComponent  : FC<MenuComponentProps>= ({menuItems}) => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
    return(
        <div className="h-full flex p-3 flex-col justify-around items-start truncate">
        {menuItems.map((item) => (
          <div key={item.name} className="flex items-center truncate p-3">
            <Link href={item.link} className="flex">
              <div className="hover:underline cursor-pointer flex items-center gap-2">
                <Icon
                  icon="tabler:hand-click"
                  className={cn("text-white", {
                    "text-lg": isMobile,
                    "text-xl": !isMobile,
                  })}
                />
                {item.name}
              </div>
            </Link>
          </div>
        ))}

      </div>

    )
}