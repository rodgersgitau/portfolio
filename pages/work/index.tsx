import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { useMemo, useState } from "react";

import { Filters, IWorkItem, WorkItemPost } from "../../components";

const WorkPage = ({
  projects,
  filters,
}: {
  projects: IWorkItem[];
  filters: string[];
}) => {
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
          .filter(({ frontmatter: project }) =>
            activeFilter !== "All"
              ? project.techStack.includes(activeFilter)
              : project
          )
          .map((workItem, index) => (
            <WorkItemPost key={index} project={workItem} />
          ))}
      </div>
    </section>
  );
};

export async function getStaticProps() {
  // Get files from the projects dir
  const files = fs.readdirSync(path.join("content", "projects"));
  // Get slug and frontmatter from projects
  const tempPosts = files.map((filename) => {
    // Create slug
    const slug = filename.replace(".md", "");

    // Get frontmatter
    const markdownWithMeta = fs.readFileSync(
      path.join("content", "projects", filename),
      "utf-8"
    );

    const { data: frontmatter } = matter(markdownWithMeta);

    if (frontmatter.draft === false) {
      return {
        slug,
        frontmatter,
      };
    } else {
      return null;
    }
  });

  //  remove null in tempPosts
  const projects = tempPosts.filter((workItem) => {
    return workItem && workItem;
  });

  const filters = new Set("").add("All");
  projects?.map((project) => {
    project?.frontmatter?.techStack.map((tech: string) => filters.add(tech));
  });

  return {
    props: {
      projects,
      filters: [...filters],
    },
  };
}

export default WorkPage;
