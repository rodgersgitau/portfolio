import { WorkItem } from "../../components";
import projects from "../../utils/work.json";

const WorkPage = () => {
  return (
    <section className="h-full w-full">
      <div className="w-full h-full grid-auto-columns gap-8">
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
