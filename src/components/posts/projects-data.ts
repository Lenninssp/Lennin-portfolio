import { Project } from "@/types/project";

export const projectsData: ReadonlyArray<Project> = [
  {
    slug: "portfolio-lennin",
    title: "My Portfolio",
    subtitle: "And is a great portfolio",
    date: "2025-09-08",
    description: "Portfolio that shows my must relevant projects",
    tags: ["react", "frontend", "personal"],
  },
  {
    slug: "portfolio-lennin2",
    title: "My Portfolio",
    subtitle: "And is a great portfolio",
    date: "2025-09-08",
    description: "Portfolio that shows my must relevant projects",
    tags: ["react", "frontend", "personal"],
  },
] as const