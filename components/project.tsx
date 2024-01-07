"use client";

import Link from "next/link";
import Image from "next/image";
import { BriefcaseIcon, LinkIcon } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import Accordion from "@/components/ui/accordion";

import { cn, getSlug } from "@/lib/utils";
import type { ProjectType } from "@/lib/types";

interface ProjectProps extends ProjectType {
  index: number;
  className?: string;
}

export default function Project({
  index,
  className,
  ...project
}: ProjectProps) {
  return (
    <Accordion
      index={index}
      title={project.name}
      className={cn("relative overflow-clip", className)}
    >
      <div className="flex flex-col items-center gap-4 py-4 md:flex-row">
        <div className={cn("grid gap-10 md:w-1/2", "active:text-secondary")}>
          <p className="text-sm text-foreground/80">{project.description}</p>
          <div className="flex flex-wrap items-center gap-4">
            {project.techStack.map((tech, index) => (
              <span
                className="p-2 text-xs border rounded-lg w-max border-foreground/50"
                key={`category-${tech}-${index}`}
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap items-center w-full gap-2">
            {project.link && (
              <Link
                target="_blank"
                href={project.link}
                title={project.name}
                className={buttonVariants({
                  size: "sm",
                  variant: "accent",
                  className: "flex items-center gap-2",
                })}
              >
                <LinkIcon className="w-4 h-4" />
                <span className="text-sm">Live Preview</span>
              </Link>
            )}
            <Link
              target="_blank"
              title={project.name}
              href={`/work/${getSlug(project.name)}`}
              className={buttonVariants({
                size: "sm",
                variant: "secondary",
                className: "flex items-center gap-2",
              })}
            >
              <BriefcaseIcon className="w-4 h-4" />
              <span className="text-sm">Case Study</span>
            </Link>
          </div>
        </div>
        <div className="relative flex-1 w-full h-56 mx-auto rounded-lg shadow overflow-clip shadow-secondary/20">
          <Image
            fill
            alt={project.name}
            src={project.images[0]}
            className="object-cover"
          />
        </div>
      </div>
    </Accordion>
  );
}
