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
  const { data, content } = matter(fileContent);
  const wordCount = content.split(" ").filter(Boolean).length;

  return (
    <Link href={"/work/" + data.slug} className={cn("w-full group", className)}>
      <Card className="w-full bg-transparent rounded-md">
        <CardHeader className="space-y-4">
          <CardTitle className="group-hover:underline group-hover:underline-offset-4">
            {data.title}
          </CardTitle>
          <CardDescription className="flex items-center justify-between gap-4 py-2">
            {data.description}
          </CardDescription>
        </CardHeader>
      </Card>
    </Link>
  );
}
