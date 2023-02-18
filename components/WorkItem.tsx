import { FiChevronRight } from "react-icons/fi";

import { getSlug } from "../utils";
import { AspectRatio } from "./AspectRatio";
import { Image } from "./Image";

export interface WorkItemProps {
  name: string;
  description?: string;
  techStack?: string[];
  images: string[];
}

export const WorkItem = ({
  name,
  description,
  techStack,
  images,
}: WorkItemProps) => {
  return (
    <div className="relative w-full bg-white rounded-md shadow-lg dark:bg-black group shadow-black dark:shadow-brightGray/25">
      <div className="h-[30vh] flex">
        <div className="flex-1 w-full h-full">
          <Image
            priority
            alt={name}
            src={images[0]}
            className="object-cover w-full h-[30vh] aspect-square"
          />
        </div>

        <div className="flex flex-col justify-between flex-1 w-full h-full gap-8 p-4 bg-brightGray dark:bg-neutral-800">
          <h3 className="text-xl font-black">{name}</h3>
          <h4 className="text-sm">{description}</h4>
          <div className="flex flex-wrap items-center gap-2 text-xs">
            {techStack?.map((tech, idx) => (
              <p
                key={`${tech}-${Math.floor(idx * 0.1)}`}
                className="px-2 py-1 font-bold text-pink-400 capitalize border border-pink-400 rounded-md border-spacing-2"
              >
                {tech}
              </p>
            ))}
          </div>
          <div className="flex items-center w-max h-max">
            <a
              href={`/work/${getSlug(name)}`}
              className="w-max px-5 py-2.5 rounded-md bg-black text-brightGray dark:bg-brightGray dark:text-black hover:text-black hover:bg-pink-300 transition"
            >
              <div className="flex items-center justify-between gap-4">
                <span className="font-semibold">View</span>
                <FiChevronRight fontSize="1.25rem" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
