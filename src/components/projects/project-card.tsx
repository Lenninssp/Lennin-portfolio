import { Project } from "@/types/project";
import { GeneralImage } from "../general/media/general-image";
import { TextLine } from "../general/text/text-line";
import { cn } from "@/lib/utils";
import { usePageColor } from "@/contexts/selected-color";
import { borderColor } from "../general/color-format-router";
import Link from "next/link";

interface ProjectCardInterface {
  project: Project;
}
export const ProjectCard = ({ project }: ProjectCardInterface) => {
  const { selectedColor } = usePageColor();
  return (
    <Link href={`/project/${project.slug}`} className="group">
      <div
        className={cn(
          "glass-panel flex h-full flex-col gap-4 rounded-[1.6rem] border bg-white/55 p-4 shadow-[0_18px_50px_rgba(15,23,42,0.08)] transition-all duration-300 hover:-translate-y-1 hover:scale-[1.01] hover:shadow-[0_24px_60px_rgba(15,23,42,0.12)] sm:flex-row",
          selectedColor === "dark" && "bg-white/[0.04] hover:bg-white/[0.06]",
          borderColor[selectedColor]["primary"]
        )}
      >
        {project.imageUrl && (
          <GeneralImage
            src={project.imageUrl}
            alt={project.title}
            size={{ width: 150, height: 150 }}
            className="h-40 w-full rounded-[1.2rem] shadow-[0_12px_30px_rgba(15,23,42,0.12)] sm:h-36 sm:w-36"
          />
        )}
        <div className="flex h-full flex-1 flex-col gap-2">
          <div className="flex items-start justify-between gap-3">
            <div className="space-y-2">
              <TextLine text={project.title} type="title" className="text-xl md:text-2xl" />
              <TextLine
                text={new Date(project.date).getFullYear().toString()}
                type="smallText"
                className="inline-flex rounded-full border border-red-500/15 bg-red-500/10 px-3 py-1 dark:border-orange-300/15 dark:bg-orange-300/10"
                color="secondary"
              />
            </div>
          </div>
          {project.subtitle && (
            <TextLine
              text={project.subtitle}
              type="subTitle"
              color="secondary"
              className="mt-1"
            />
          )}
          <TextLine text={project.description} type="text" className="flex-1" />
          {project.tags?.length ? (
            <div className="mt-2 flex flex-wrap gap-2">
              {project.tags.slice(0, 4).map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/40 bg-white/60 px-3 py-1 text-xs uppercase tracking-[0.18em] text-zinc-600 dark:border-white/10 dark:bg-white/[0.05] dark:text-zinc-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </Link>
  );
};
