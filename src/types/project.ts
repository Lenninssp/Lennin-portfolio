export type ProjectTag =
  | "nextjs"
  | "react"
  | "typescript"
  | "design"
  | "devops"
  | "personal"
  | "frontend"
  | "backend"
  | "fun"
  | "fullstack"
  | "django"
  | "deno" 
  | "python"
  | "node"
  | "postgresql"
  | "docker"
  | "ai"
  | "php"
  | "swift" | "ios" | "mobile" | "java"

export type Project = {
  slug: string;                // unique id used in routes (/projects/[slug])
  title: string;
  subtitle?: string;
  description: string;
  date: string;                // ISO string "2025-09-08"
  imageUrl?: string;           // cover image
  repoUrl?: RepoUrl;
  demoUrl?: Url;
  tags?: ProjectTag[];
};


type Url = `http${"s" | ""}://${string}`;
type RepoUrl = `https://github.com/${string}/${string}`;