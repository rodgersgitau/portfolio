import { useMemo, useState } from "react";

import { Filters, WorkItem } from "../../components";
import { getFilters, getProjects } from "../../utils";

const PlayPage = () => {
  const filters = useMemo(() => getFilters(), []);
  const projects = useMemo(() => getProjects(), []);
  const [activeFilter, setActiveFilter] = useState("All");

  return (
    <section className="min-h-[60vh] h-full w-full flex flex-col">
      <Filters
        filters={filters}
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
      />
      <div className="grid w-full h-full grid-cols-1 py-12 transition-all lg:grid-cols-2 gap-x-6 gap-y-10">
        {projects
          .filter((project) =>
            activeFilter !== "All"
              ? project.techStack.includes(activeFilter)
              : project
          )
          .map((project) => (
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
export default PlayPage;
