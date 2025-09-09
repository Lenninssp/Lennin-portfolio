import { Project } from "@/types/project"
import { GeneralImage } from "../general/media/general-image";
import { TextLine } from "../general/text/text-line";
import { RoundedLink } from "../general/rounded-link/rounded-link";

interface ProjectCardInterface {
  project: Project;
}
export const ProjectCard = ({project}: ProjectCardInterface) => {
  return (
    <div className=" flex w-full h-fit border-2 border-white rounded-2xl p-3">
      {project.imageUrl && <GeneralImage src={project.imageUrl} alt={project.title} />}
      <div className=" flex flex-col h-full">
        <TextLine text={project.title} type="title" />
        {project.subtitle && <TextLine text={project.subtitle} type="subTitle" color="red" />}
        <TextLine text={project.description} type="text"/>
        <RoundedLink link={project.repoUrl} text="repositorie link" icon="grommet-icons:github" />
      </div>
    </div>
  )
}