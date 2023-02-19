import Link from "next/link";
import { FC, useMemo } from "react";

import { getImageUrl } from "../utils";
import { Image } from "./Image";

export interface IWorkItem {
  slug: string;
  frontmatter: {
    date: string;
    title: string;
    images: string[];
    techStack: string[];
    description: string;
  };
}

export interface WorkItemPostProps {
  project: IWorkItem;
}

export const WorkItemPost: FC<WorkItemPostProps> = ({ project }) => {
  const {
    slug,
    frontmatter: { date: postDate, title, description, images, techStack },
  } = project;
  const date = useMemo(() => new Date(postDate), [postDate]);

  return (
    <article className="relative w-full bg-white rounded-md shadow-lg h-[35vh] dark:bg-black group shadow-black dark:text-neutral-500">
      <div className="flex h-full gap-2 border-2 rounded-lg border-brightGray/85 dark:border-0">
        <div className="flex-1 w-full h-full rounded-l-lg">
          <Image
            priority
            alt={title}
            src={getImageUrl(images[0])}
            className="object-fill object-left rounded-l-lg w-full h-[35vh] aspect-square"
          />
        </div>

        <div className="flex flex-col justify-between flex-1 w-full h-full gap-8 px-4 py-8 bg-white dark:bg-[#222] dark:text-white">
          <h3 className="text-2xl font-black">{title}</h3>
          <h4 className="text-sm">{description}</h4>
          <div className="flex flex-wrap items-center gap-2 text-xs">
            {techStack?.map((tech, idx) => (
              <p
                key={`${tech}-${Math.floor(idx * 0.1)}`}
                className="px-2 py-1 font-bold text-pink-600 capitalize border border-pink-600 rounded-md border-spacing-2"
              >
                {tech}
              </p>
            ))}
          </div>
          <div className="flex items-center w-max h-max">
            <Link href={`/work/${slug}`} passHref legacyBehavior>
              <a className="w-max px-5 py-2.5 rounded-md bg-black text-brightGray dark:bg-brightGray dark:text-black hover:text-black hover:bg-pink-300 transition-all font-semibold">
                View Case
              </a>
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
};
