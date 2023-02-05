import Image from "next/image";
import { getSlug } from "../utils";

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
    <a
      href={`/work/${getSlug(name)}`}
      className="group w-full min-w-[15rem] h-[20rem] bg-transparent relative rounded-md shadow-lg shadow-black "
    >
      <Image
        alt={name}
        fill={true}
        src={images[0]}
        loading="eager"
        priority={true}
        className="object-fill rounded-tl-md rounded-tr-md"
      />

      <div className="hidden group-hover:block absolute h-full w-full p-8 rounded-md bg-brightGray text-black dark:bg-neutral-800 dark:text-brightGray">
        <div className="flex flex-col gap-8 h-max p-4">
          <h1 className=" dark:text-pink-500 font-semibold text-2xl uppercase">
            {name}
          </h1>
          <h2 className="dark:text-neutral-400 text-lg">{description}</h2>
          <div className="flex flex-wrap items-center gap-2">
            {techStack?.map((tech, idx) => (
              <p
                key={`${tech}-${Math.floor(idx * 0.1)}`}
                className="py-1 px-2 border border-spacing-2 border-pink-400 text-pink-400 font-bold rounded-md capitalize"
              >
                {tech}
              </p>
            ))}
          </div>
        </div>
      </div>
    </a>
  );
};
