import Image from "next/image";
import { FiCornerDownRight } from "react-icons/fi";

import projects from "../../utils/work.json";

export interface WorkItemProps {
  name: string;
  description?: string;
  techStack?: string[];
  images: string[];
}

const WorkItem = ({ name, description, techStack, images }: WorkItemProps) => {
  return (
    <div className="group bg-transparent min-w-[15rem] min-h-[15rem] md:min-w-[25rem] md:min-h-[25rem] relative rounded-md">
      <Image src={images[0]} alt={name} fill={true} className="rounded-md" />

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

      <div className="hidden group-hover:block absolute right-8 bottom-2">
        <button className="py-1.5 px-2 rounded-md bg-neutral-200 text-neutral-800">
          <div className="flex items-center gap-2">
            <FiCornerDownRight />
            <span className="font-semibold ">View Case</span>
          </div>
        </button>
      </div>
    </div>
  );
};

const WorkPage = () => {
  return (
    <section className="h-full w-full">
      <h1 className="text-lg md:text-2xl my-8 font-black">
        Some things I've built...
      </h1>
      <div className="w-full h-full grid grid-cols-fit-25 gap-8">
        {projects.map((project) => (
          <WorkItem
            key={project.name}
            name={project.name}
            images={project.images}
            techStack={project.techStack}
            description={project.description}
          />
        ))}
      </div>
    </section>
  );
};
export default WorkPage;
