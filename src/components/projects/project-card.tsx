import { Project } from "@/types/project";
import { GeneralImage } from "../general/media/general-image";
import { TextLine } from "../general/text/text-line";
import { RoundedLink } from "../general/rounded-link/rounded-link";
import { cn } from "@/lib/utils";
import { usePageColor } from "@/contexts/selected-color";
import { borderColor } from "../general/color-format-router";

interface ProjectCardInterface {
  project: Project;
}
export const ProjectCard = ({ project }: ProjectCardInterface) => {
  const {selectedColor} = usePageColor();
  return (
    <div className={cn("flex flex-col sm:flex-row w-full h-fit border-2 rounded-2xl p-3 gap-3", borderColor[selectedColor]["primary"])}>
      {project.imageUrl && (
        <GeneralImage
          src={project.imageUrl}
          alt={project.title}
          size={{ width: 150, height: 150 }}
        />
      )}
      <div className=" flex flex-col h-full">
        <TextLine text={project.title} type="title" />
        {project.subtitle && (
          <TextLine text={project.subtitle} type="subTitle" color="secondary" />
        )}
        <TextLine text={project.description} type="text" />
        <div className=" flex ">
          <RoundedLink
            link={project.repoUrl}
            text="Repositorie link"
            icon="grommet-icons:github"
          />
          <RoundedLink
            link={project.demoUrl}
            text="Live demo"
            icon="token:dweb"
          />
        </div>
      </div>
    </div>
  );
};
