"use client";

import { BasePage } from "@/components/general/base/base-page";
import { borderColor } from "@/components/general/color-format-router";
import { GeneralImage } from "@/components/general/media/general-image";
import { RoundedLink } from "@/components/general/rounded-link/rounded-link";
import { TextLine } from "@/components/general/text/text-line";
import { getProjectBySlug } from "@/components/posts/projects";
import { usePageColor } from "@/contexts/selected-color";
import { cn } from "@/lib/utils";
import { use } from "react";

interface ProjectPageProps {
  params: Promise<{ id: string }>;
}

export default function ProjectClientPage({ params }: ProjectPageProps) {
  const resolvedParams = use(params);
  const { selectedColor } = usePageColor();
  const project = getProjectBySlug(resolvedParams.id);

  if (!project) {
    return (
      <BasePage>
        <div className="flex min-h-[60vh] w-full items-center justify-center">
          <div className="glass-panel flex items-center rounded-[1.5rem] border border-red-500/20 bg-white/55 px-6 py-5 text-center shadow-[0_18px_50px_rgba(15,23,42,0.08)] dark:border-orange-300/20 dark:bg-white/[0.04]">
            <TextLine text="Not valid link" type="title" />
          </div>
        </div>
      </BasePage>
    );
  }

  return (
    <BasePage>
      <div className="relative flex w-full flex-col gap-4">
        <h1 className="text-sm uppercase tracking-[0.28em] text-red-500 dark:text-orange-300">
          Project ID: {resolvedParams.id}
        </h1>

        <div
          className={cn(
            "glass-panel flex h-full w-full flex-col items-center gap-6 rounded-[1.8rem] border bg-white/55 p-5 text-center shadow-[0_18px_60px_rgba(15,23,42,0.08)] md:p-8",
            selectedColor === "dark" && "bg-white/[0.04]",
            borderColor[selectedColor].primary
          )}
        >
          {project.imageUrl && (
            <GeneralImage
              src={project.imageUrl}
              alt={project.title}
              size={{ width: 300, height: 300 }}
              className="mx-auto h-64 w-64 rounded-[1.5rem] shadow-[0_18px_50px_rgba(15,23,42,0.12)] md:h-80 md:w-80"
            />
          )}

          <div className="flex h-full max-w-3xl flex-col gap-6">
            <TextLine text={project.title} type="title" />

            {project.subtitle && (
              <TextLine
                text={project.subtitle}
                type="subTitle"
                color="secondary"
                className="mx-auto rounded-full border border-red-500/20 bg-red-500/10 px-4 py-2 dark:border-orange-300/20 dark:bg-orange-300/10"
              />
            )}

            <TextLine text={project.description} type="text" />

            {project.tags?.length ? (
              <div className="flex flex-wrap justify-center gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/40 bg-white/60 px-3 py-1 text-xs uppercase tracking-[0.18em] text-zinc-600 dark:border-white/10 dark:bg-white/[0.05] dark:text-zinc-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            ) : null}

            <div className="flex w-full flex-wrap items-center justify-center gap-3">
              {project.repoUrl && (
                <RoundedLink
                  link={project.repoUrl}
                  text="Repository link"
                  icon="grommet-icons:github"
                />
              )}

              {project.demoUrl && (
                <RoundedLink
                  link={project.demoUrl}
                  text="Live demo"
                  icon="token:dweb"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </BasePage>
  );
}
