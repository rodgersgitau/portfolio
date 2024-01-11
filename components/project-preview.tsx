import Link from "next/link";
import { readFile } from "fs/promises";
import matter from "gray-matter";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { cn } from "@/lib/utils";
import Image from "next/image";
import ProjectCard from "@/components/ui/project-card";

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
