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

export interface WorkItemProps {
  project: IWorkItem;
}

export const WorkItem: FC<WorkItemProps> = ({ project }) => {
  const {
    slug,
    frontmatter: { date: postDate, title, description, images, techStack },
  } = project;
  return (
    <article className="relative bg-white rounded-md shadow-lg h-20rem card lg:card-side dark:bg-black group shadow-black dark:text-neutral-500">
      <figure className="w-full h-full lg:w-[50%] card-image">
        <Image
          priority
          alt={title}
          src={getImageUrl(images[0])}
          className="object-cover object-left w-full h-full"
        />
      </figure>

      <div className="w-full lg:w-[50%] card-body bg-white dark:bg-[#222] dark:text-white">
        <div className="flex flex-col gap-8">
          <h3 className="text-2xl font-black">{title}</h3>
          <h4 className="text-sm">{description}</h4>
          <div className="flex flex-wrap items-center gap-2 text-xs">
            {techStack?.map((tech, idx) => (
              <p
                key={`${tech}-${Math.floor(idx * 0.1)}`}
                className="px-2 py-1 font-bold text-pink-600 capitalize border border-pink-600 rounded-md max-w-max"
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
