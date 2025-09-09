import { ContentFrame } from "../content/content-frame";
import { TextLine } from "../general/text/text-line";
import { getAllProjects } from "../posts/projects";
import { ProjectCard } from "./project-card";

export const Projects = () => {
  const projects = getAllProjects();
  return (
    <ContentFrame className=" gap-3 flex-col">
      <TextLine text="Projects page" type="title" />
      {projects.map((project) => (
        <ProjectCard key={project.slug} project={project} />
      ))}
    </ContentFrame>
  );
};
