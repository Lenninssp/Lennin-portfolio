"use client";
import { useMediaQuery } from "react-responsive";
import { MenuItem } from "@/utils/types";
import { MenuComponent } from "@/components/menu/menu";
import useMyTheme from "@/components/ui/colorStyle";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface Project {
  id: number,
  title: string,
  description: string,
  technologies: {
    title: string,
    description: string
  }[],
  picture: string,
  link: string,
  source: string
}

export default function Projects() {
  const isMobile = useMediaQuery({ query: "(max-width: 600px)" });
  const { style } = useMyTheme();

  const menuItems: MenuItem[] = [
    { name: "Home", link: "/" },
    { name: "Social", link: "/social" },
    { name: "Experiences", link: "/experience" },
    { name: "About Me", link: "/about" },
  ];

  const projectsList: Project[] = [
    {
      id: 1,
      title: "Newtflix, a Netflix clone",
      description:
        "A Netflix clone that i did using only react, meant for my own educationla porpuses and with no intention of menetization of the product",
      technologies: [
        { title: "Firebase", description: "" },
        { title: "React JS", description: "" },
      ],
      picture: "",
      link: "https://newtflix-clone.netlify.app/login",
      source: "https://newtflix-clone.netlify.app/login",
    },
    {
      id: 2,
      title: "Newtflix, a Netflix clone",
      description:
        "A Netflix clone that i did using only react, meant for my own educationla porpuses and with no intention of menetization of the product",
      technologies: [
        { title: "Firebase", description: "" },
        { title: "React JS", description: "" },
      ],
      picture: "",
      link: "https://newtflix-clone.netlify.app/login",
      source: "https://newtflix-clone.netlify.app/login",
    },
    {
      id: 3,
      title: "Newtflix, a Netflix clone",
      description:
        "A Netflix clone that i did using only react, meant for my own educationla porpuses and with no intention of menetization of the product",
      technologies: [
        { title: "Firebase", description: "" },
        { title: "React JS", description: "" },
      ],
      picture: "",
      link: "https://newtflix-clone.netlify.app/login",
      source: "https://newtflix-clone.netlify.app/login",
    },
  ];

  const projectGrid = (project: Project ) => {
    if (!isMobile){
      return(

        <div className={cn("p-3 grid grid-cols-3 gap-2", style)}>
          <div className="col-span-2">{project.description}</div>
          <div className={cn("col-span-1 p-3", style)}>
            {project.technologies.map((technologie) => (
              <div key={technologie.title}>-{technologie.title}</div>
            ))}
          </div>
        </div>
      )
    }
    if (isMobile){
      return(

        <div className={cn("p-3 flex flex-col gap-2", style)}>
          <div className="">{project.description}</div>
          <div className={cn("", style)}>
            {project.technologies.map((technologie) => (
              <div key={technologie.title}>-{technologie.title}</div>
            ))}
          </div>
        </div>
      )
    }
  }

  return (
    <>
      <div className={cn("col-span-4 row-span-4 overflow-y-auto ", style)}>
        {projectsList.map((project) => (
          <div key={project.id} className={cn("p-3", style)}>
            <div className="flex justify-between">
              <div className={cn("w-fit py-1 px-3", style)}>
                <Link href={project.link}>{project.title}</Link>
              </div>
              <div className={cn("w-fit py-1 px-3", style)}>
                <Link href={project.source}>Source</Link>
              </div>
            </div>
            {projectGrid(project)}
          </div>
        ))}
      </div>
      <div className={cn("col-span-2 p-0 h-full", style)}>
        <MenuComponent menuItems={menuItems} />
      </div>
      <div
        className={cn(
          "col-span-2 h-full flex flex-col items-center row-span-3 gap-3",
          style,
          isMobile ? ("p-0") : ("p-3")
        )}
      >
        <div>Next Project(s)?</div>
        <div className={cn(" w-full h-1/2 overflow-y-auto", style, isMobile ? ("p-0") : ("p-2"))}>
          In the next weeks I will start with the creation the new web page for
          the Artist Alejandro Ladeguev, who has just released his latest album
          called &quot;Cosmosinfonica&quot;
        </div>
      </div>
    </>
  );
}

