import { WorkItem } from "../../components";
import projects from "../../utils/work.json";

const WorkPage = () => {
  return (
    <section className="min-h-[60vh] h-full w-full">
      <div className="grid w-full h-full grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-10">
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
