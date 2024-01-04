import Image from "next/image";

import projects from "@/content/projects/index.json";
import { cn } from "@/lib/utils";
import FilterForm from "./_filterForm";

export default function Work() {
  return (
    <div className="flex flex-grow w-full h-full">
      <div className="relative flex flex-col flex-grow gap-8 md:ml-auto">
        <div className="flex items-center w-full h-max">
          <FilterForm />
        </div>
        <div className="grid justify-center w-full grid-cols-1 gap-2 h-max sm:grid-cols-2 lg:grid-cols-3 ">
          {projects.map((project, index) => (
            <div
              key={`project-${index}`}
              className="relative w-full h-full min-h-[15rem] col-span-1 rounded-lg aspect-video overflow-clip"
            >
              <Image
                fill
                alt={project.name}
                src={project.images[0]}
                className="object-cover h-full"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
