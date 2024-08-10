"use client";

import { cn } from "@/lib/utils";
import { Icon } from "@iconify/react";
import Link from "next/link";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";
import { MenuItem, Technology } from "@/utils/types";
import { MenuComponent } from "@/components/menu/menu";
import useMyTheme from "@/components/ui/colorStyle";

export default function Home() {
  const isMobile = useMediaQuery({ query: "(max-width: 640px)" });

  const { style } = useMyTheme();

  const technologies: Technology[] = [
    {
      name: !isMobile ? "React JS" : "Re..",
      icon: "ri:reactjs-fill",
      color: "text-blue-300",
    },
    {
      name: !isMobile ? "TypeScript" : "Ty..",
      icon: "bxl:typescript",
      color: "text-blue-300",
    },
    {
      name: !isMobile ? "Python" : "Py..",
      icon: "teenyicons:python-solid",
      color: "text-yellow-300",
    },
    {
      name: !isMobile ? "Kotlin" : "Ko..",
      icon: "cib:kotlin",
      color: "text-purple-300",
    },
  ];

  const menuItems: MenuItem[] = [
    { name: "Projects", link: "/projects" },
    { name: "Experiences", link: "/experience" },
    { name: "Social", link: "/social" },
    { name: "About Me", link: "/about" },
  ];

  const experiences = [
    {
      title: "FrontEnd Developer",
      time: "Present",
      company: "Hadaly",
      location: "Montreal, QC, Canada",
      company_link: "https://hadaly.ca/",
      link: "",
    },
    {
      title: "Android Developer",
      time: "2023",
      company: "Serinpet",
      location: "Bogota, Colmobia",
      company_link: "https://www.serinpet.com/index_ing.php",
      link: "",
    },
    {
      title: "Software Developer",
      time: "2022",
      company: "Campus Naranja",
      location: "Ibague, Colombia",
      company_link: "https://www.instagram.com/campusnaranja/?hl=en",
      link: "",
    },
  ];

  const education = [
    {
      title: "DEC in compueter science",
      time: "Present",
      company: "College LaSalle",
      location: "Montreal, QC, Canada",
      company_link: "https://lasallecollege.lcieducation.com/en/",
    },
  ];

  return (
    <>
      <div className={cn("col-span-4 grid grid-cols-2 h-full", style)}>
        <div className={cn("p-3 flex h-full flex-col justify-around", style)}>
          {technologies.map((tech) => (
            <div key={tech.name} className="flex items-center gap-2 truncate">
              - {tech.name}
              <Icon
                icon={tech.icon}
                className={cn(tech.color, {
                  "text-xl": isMobile,
                  "text-2xl": !isMobile,
                })}
              />
            </div>
          ))}
        </div>
        <div className={cn("p-3 h-full  flex items-center", style)}>
          <Image
            src="./images/cartoon.jpeg"
            alt="cartoon"
            width={isMobile ? 200 : 500}
            height={isMobile ? 150 : 300}
            unoptimized
          />
        </div>
      </div>
      <div className={cn("col-span-2 p-0 h-full", style)}>
        <MenuComponent menuItems={menuItems} />
      </div>
      <div
        className={cn(
          "col-span-6 h-20 bg-gradient-to-r px-3 from-pink-900 via-indigo-500 to-pink-900 items-center text-center justify-center flex",
          style
        )}
      >
        &quot;Scalable and sustaible code impacts the the world not for what it
        does, but for what it doesn&apos;t&quot;
      </div>
      <div className={cn("col-span-3 p-3", style)}>
        <div className=" flex justify-center mb-2">Experience</div>
        {experiences.map((experience) => (
          <div
            key={experience.title}
            className="flex flex-col bg-gray-900 border border-gray-700 p-3 hover:animate-wiggle hover:animate-infinite hover:animate-delay-0"
          >
            <Link
              href={experience.company_link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className=" flex justify-center">{experience.title}</div>
              <div className="flex justify-around text-gray-400">
                {experience.company} ({experience.time})
              </div>
              <div className="flex justify-center text-sm text-gray-500">
                {experience.location}
              </div>
              <div></div>
            </Link>
          </div>
        ))}
      </div>
      <div className={cn("col-span-3 p-3", style)}>
        <div className=" flex justify-center mb-2">Education</div>
        {education.map((experience) => (
          <div
            key={experience.title}
            className="flex flex-col bg-gray-900 border border-gray-700 p-3 hover:animate-wiggle hover:animate-infinite hover:animate-delay-0"
          >
            <Link
              href={experience.company_link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className=" flex justify-center">{experience.title}</div>
              <div className="flex justify-around text-gray-400">
                {experience.company} ({experience.time}){" "}
              </div>
              <div className="flex justify-center text-sm text-gray-500">
                {experience.location}
              </div>
              <div></div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
