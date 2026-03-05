"use client";

import { BasePage } from "@/components/general/base/base-page";
import { borderColor } from "@/components/general/color-format-router";
import { GeneralImage } from "@/components/general/media/general-image";
import { RoundedLink } from "@/components/general/rounded-link/rounded-link";
import { TextLine } from "@/components/general/text/text-line";
import { getProjectBySlug } from "@/components/posts/projects";
import { usePageColor } from "@/contexts/selected-color";
import { cn } from "@/lib/utils";

interface ProjectPageProps {
  params: { id: string };
}

const ProjectPage = ({ params }: ProjectPageProps) => {
  const { selectedColor } = usePageColor();
  const { id } = params;

  const project = getProjectBySlug(id);

  if (!project) {
    return (
      <BasePage>
        <h1>Not valid link</h1>
      </BasePage>
    );
  }

  return (
    <BasePage>
      <div className="w-full flex flex-col gap-4 relative">
        <h1 className="text-3xl font-bold">Project ID: {id}</h1>

        <div
          className={cn(
            "flex  w-full h-full flex-col items-center text-center border-2 rounded-2xl p-3 gap-3",
            borderColor[selectedColor]["primary"],
          )}
        >
          {project.imageUrl && (
            <GeneralImage
              src={project.imageUrl}
              alt={project.title}
              size={{ width: 300, height: 300 }}
            />
          )}
          <div className=" flex flex-col h-full gap-10">
            <TextLine text={project.title} type="title" />
            {project.subtitle && (
              <TextLine
                text={project.subtitle}
                type="subTitle"
                color="secondary"
              />
            )}
            <TextLine text={project.description} type="text" />
            <div className="flex w-full  justify-center items-center">
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
      </div>
    </BasePage>
  );
};

export default ProjectPage;
