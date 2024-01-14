import matter from "gray-matter";
import { readFile } from "fs/promises";

import ProjectCard from "@/components/project-card";

interface Props {
  index?: number;
  name: string;
  className?: string;
}

export default async function ProjectPreview({ name, className }: Props) {
  const fileContent = await readFile(
    "./content/projects/" + name + "/index.mdx",
    "utf8"
  );
  const { data: metadata, content } = matter(fileContent);
  const wordCount = content.split(" ").filter(Boolean).length;

  return (
    <ProjectCard
      title={metadata.title}
      imgSrc={metadata.images[0]}
      href={"/work/" + metadata.slug}
      description={metadata.description}
    />
  );
}
