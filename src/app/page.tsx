"use client";

import { cn } from "@/lib/utils";
import { Icon } from "@iconify/react";
import Link from "next/link";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";
import { useEffect, useState } from "react";

interface Technology {
  name: string;
  icon: string;
  color: string;
}

interface MenuItem {
  name: string;
}

export default function Home() {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const [theme, setTheme] = useState("dark");

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

  const technologies: Technology[] = [
    { name: "React JS", icon: "ri:reactjs-fill", color: "text-blue-300" },
    { name: "TypeScript", icon: "bxl:typescript", color: "text-blue-300" },
    {
      name: "Python",
      icon: "teenyicons:python-solid",
      color: "text-yellow-300",
    },
    { name: "Kotlin", icon: "cib:kotlin", color: "text-purple-300" },
  ];

  const menuItems: MenuItem[] = [
    { name: "Projects" },
    { name: "Experiences" },
    { name: "Social" },
    { name: "About Me" },
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
    },]

  return (
    <div className="h-screen w-screen">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div
          className={cn(
            "bg-opacity-60 h-full md:h-5/6 md:w-10/12 lg:w-1/2 border animate-fade-up animate-delay-[2000ms] flex justify-center overflow-auto",
            style
          )}
        >
          <div className="h-fit w-full grid grid-cols-6 p-5 gap-5">
            <div className={cn("col-span-4 grid grid-cols-2 h-full", style)}>
              <div className={cn("p-3 flex h-full flex-col justify-around", style)}>
                {technologies.map((tech) => (
                  <div
                    key={tech.name}
                    className="flex items-center gap-2 truncate"
                  >
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
              <div className="h-full flex p-3 flex-col justify-around items-start truncate">
                {menuItems.map((item) => (
                  <div key={item.name} className="flex items-center truncate p-3">
                    <Link href="/" className="flex">
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
            </div>
            <div
              className={cn(
                "col-span-6 h-20 bg-gradient-to-r px-3 from-pink-900 via-indigo-500 to-pink-900 items-center text-center justify-center flex",
                style
              )}
            >
              &quot;Scalable and sustaible code impacts the the world not for
              what it does, but for what it doesn&apos;t&quot;
            </div>
            <div className={cn("col-span-3 p-3", style)}>
              <div className=" flex justify-center mb-2">Experience</div>
              {experiences.map((experience) => (
                <div
                  key={experience.title}
                  className="flex flex-col bg-gray-900 border border-gray-700 p-3 hover:animate-shake hover:animate-once hover:animate-delay-0"
                >
                  <Link href={experience.company_link} target="_blank" rel="noopener noreferrer">
                    <div className=" flex justify-center">
                      {experience.title}
                    </div>
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
            <div className={cn("col-span-3 p-3", style)}>
            <div className=" flex justify-center mb-2">Education</div>
              {education.map((experience) => (
                <div
                  key={experience.title}
                  className="flex flex-col bg-gray-900 border border-gray-700 p-3 hover:animate-shake hover:animate-once hover:animate-delay-0"
                >
                  <Link href={experience.company_link} target="_blank" rel="noopener noreferrer">
                    <div className=" flex justify-center">
                      {experience.title}
                    </div>
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
          </div>
        </div>
      </div>
    </div>
  );
}
