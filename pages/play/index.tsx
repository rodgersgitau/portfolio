import { WorkItem } from "../../components";
import projects from "../../utils/work.json";

const PlayPage = () => {
  return (
    <section className="w-full h-full">
      <div className="grid w-full h-full grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-x-6 gap-y-10">
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
export default PlayPage;
