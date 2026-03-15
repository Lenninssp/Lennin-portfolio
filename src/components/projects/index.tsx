import { GeneralContentFrame } from "../general/frame/content-frame";
import { TextLine } from "../general/text/text-line";
import { getAllProjects } from "../posts/projects";
import { ProjectCard } from "./project-card";

export const Projects = () => {
  const projects = getAllProjects();
  return (
    <GeneralContentFrame className="flex-col gap-5">
      <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div className="space-y-2">
          <TextLine text="Projects" type="subTitle" color="secondary" />
          <TextLine text="Selected work and experiments" type="title" />
        </div>
        <TextLine
          text={`${projects.length} projects`}
          type="smallText"
          className="rounded-full border border-white/30 bg-white/40 px-4 py-2 dark:border-white/10 dark:bg-white/[0.03]"
        />
      </div>
      <div className="grid gap-4 xl:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </GeneralContentFrame>
  );
};
