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
    <article className="relative h-max lg:h-[30vh] bg-white rounded-lg shadow-lg card lg:card-side dark:bg-black group">
      <Image
        priority
        alt={title}
        src={getImageUrl(images[0])}
        className="object-cover object-left w-full h-full card-image lg:!rounded-l-lg "
      />

      <div className="w-full lg:w-[50%] card-body lg:!rounded-r-lg bg-white dark:bg-[#222] dark:text-white">
        <div className="flex flex-col space-y-4">
          <h3 className="text-2xl font-black">{title}</h3>
          <h4 className="text-sm">{description}</h4>
          <dl className="flex space-x-2 text-xs text-slate-500 dark:text-gray-500">
            {techStack?.map((tech, idx) => (
              <dt
                key={`${tech}-${Math.floor(idx * 0.1)}`}
                className="whitespace-nowrap"
              >
                {tech}
              </dt>
            ))}
          </dl>
        </div>
        <div className="absolute bottom-4 right-4">
          <Link
            href={`/work/${slug}`}
            className="w-max px-5 py-2.5 rounded-md bg-black text-base dark:bg-base dark:text-black hover:text-black hover:bg-pink-300 transition-all font-semibold"
          >
            View Case
          </Link>
        </div>
      </div>
    </article>
  );
};
