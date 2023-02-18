import projects from "./work.json";

export const getSlug = (name: string) => {
  return name
    .toString()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-");
};

export const getProjects = () => projects;

export const getFilters = () => {
  const allCategories = new Set("");
  allCategories.add("All");
  projects.map((project) => {
    project.techStack.map((tech) => allCategories.add(tech));
  });
  return [...allCategories];
};
