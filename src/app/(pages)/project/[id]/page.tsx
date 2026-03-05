import ProjectClientPage from "./ProjectClientPage";
import { projectsData } from "@/components/posts/projects-data"; 

export async function generateStaticParams() {
  return projectsData.map((p) => ({ id: p.slug }));
}

export const dynamicParams = false;

// 1. Define the correct Next.js 15 Page Props
interface PageProps {
  params: Promise<{ id: string }>;
}

// 2. Apply the interface here
export default function Page({ params }: PageProps) {
  // 3. Pass the Promise directly to your client component!
  return <ProjectClientPage params={params} />;
}