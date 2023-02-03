import Image from "next/image";
import { useCallback } from "react";
import { FiCornerDownRight } from "react-icons/fi";

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
  const getSlug = useCallback((name: string) => {
    return name
      .toString()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .trim()
      .replace(/\s+/g, "-")
      .replace(/[^\w-]+/g, "")
      .replace(/--+/g, "-");
  }, []);

  return (
    <a
      href={`/work/${getSlug(name)}`}
      className="group w-full min-w-[15rem] h-[20rem] bg-purpleGray relative rounded-md"
    >
      <Image
        alt={name}
        fill={true}
        src={images[0]}
        loading="eager"
        className="object-fill rounded-tl-md rounded-tr-md"
      />

      <div className="hidden group-hover:block absolute transition-all duration-500  h-full w-full p-8 opacity-95 bg-neutral-800">
        <div className="flex flex-col gap-8 shadow-md shadow-neutral-800 h-max bg-black p-4 rounded-md">
          <h1 className=" text-pink-200 font-semibold text-2xl uppercase">
            {name}
          </h1>
          <h2 className="text-neutral-400 text-lg">{description}</h2>
          <div className="flex flex-wrap items-center gap-2">
            {techStack?.map((tech, idx) => (
              <p
                key={`${tech}-${Math.floor(idx * 0.1)}`}
                className="py-1 px-2 border border-spacing-2 border-pink-200 text-pink-200 font-bold rounded-md capitalize"
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
