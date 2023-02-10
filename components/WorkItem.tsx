import Image from "next/image";
import { FiChevronRight } from "react-icons/fi";
import { getSlug } from "../utils";
import { AspectRatio } from "./AspectRatio";

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
    // <a
    //   href={`/work/${getSlug(name)}`}
    //   className="group w-full min-w-[15rem] h-[20rem] bg-transparent relative rounded-md shadow-lg shadow-black "
    // >
    //   <Image
    //     alt={name}
    //     fill={true}
    //     src={images[0]}
    //     loading="eager"
    //     priority={true}
    //     className="object-fill rounded-tl-md rounded-tr-md"
    //   />

    //   <div className="hidden group-hover:block absolute h-full w-full p-8 rounded-md bg-brightGray text-black dark:bg-neutral-800 dark:text-brightGray">
    //     <div className="flex flex-col gap-8 h-max p-4">
    //       <h1 className=" dark:text-pink-500 font-semibold text-2xl uppercase">
    //         {name}
    //       </h1>
    //       <h2 className="dark:text-neutral-400 text-lg">{description}</h2>
    //       <div className="flex flex-wrap items-center gap-2">
    //         {techStack?.map((tech, idx) => (
    //           <p
    //             key={`${tech}-${Math.floor(idx * 0.1)}`}
    //             className="py-1 px-2 border border-spacing-2 border-pink-400 text-pink-400 font-bold rounded-md capitalize"
    //           >
    //             {tech}
    //           </p>
    //         ))}
    //       </div>
    //     </div>
    //   </div>
    // </a>

    <div className="bg-white dark:bg-black group relative w-full h-[22.5rem] rounded-md shadow-lg shadow-black flex">
      <AspectRatio ratio={3 / 2}>
        <img
          alt={name}
          src={images[0]}
          className="w-full h-full object-cover rounded-l-sm"
        />
      </AspectRatio>

      <div className="peer hidden absolute right-0 w-1/2 h-full group-hover:flex flex-col p-4 gap-8 bg-brightGray dark:bg-neutral-800 justify-between">
        <h3 className="text-xl font-black">{name}</h3>
        <h4 className="text-sm">{description}</h4>
        <div className="flex flex-wrap items-center gap-2 text-xs">
          {techStack?.map((tech, idx) => (
            <p
              key={`${tech}-${Math.floor(idx * 0.1)}`}
              className="py-1 px-2 border border-spacing-2 border-pink-400 text-pink-400 font-bold rounded-md capitalize"
            >
              {tech}
            </p>
          ))}
        </div>
        <div className="w-max h-max flex items-center">
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
  );
};
