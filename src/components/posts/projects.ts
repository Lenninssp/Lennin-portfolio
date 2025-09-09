
import { Project, ProjectTag } from "@/types/project";
import { projectsData } from "./projects-data";

export function getAllProjects(): Project[] {
  return [...projectsData].sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projectsData.find((p) => p.slug === slug);
}

export function getProjectsByTag(tag: ProjectTag): Project[] {
  return getAllProjects().filter((p) => p.tags?.includes(tag));
}

export function getAllSlugs(): string[] {
  return projectsData.map((p) => p.slug);
}

function assertUniqueSlugs() {
  if (process.env.NODE_ENV === "development") {
    const set = new Set<string>();
    for (const p of projectsData) {
      if (set.has(p.slug)) {
        throw new Error(`Duplicate post slug detected: ${p.slug}`);
      }
      set.add(p.slug);
    }
  }
}
assertUniqueSlugs();