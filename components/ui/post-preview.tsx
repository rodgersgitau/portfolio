import Link from "next/link";
import { readFile } from "fs/promises";
import matter from "gray-matter";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface Props {
  name: string;
  className?: string;
}

export default async function PostPreview({ name }: Props) {
  const fileContent = await readFile(
    "./content/blogs/" + name + "/index.mdx",
    "utf8"
  );
  const { data, content } = matter(fileContent);
  const wordCount = content.split(" ").filter(Boolean).length;

  return (
    <Link href={"/blog/" + data.slug} className="w-full group">
      <Card className="w-full rounded-none">
        <CardHeader className="space-y-4">
          <CardTitle>
            <h2 className="!leading-snug group-hover:underline group-hover:underline-offset-4">
              {data.title}
            </h2>
          </CardTitle>
          <CardDescription className="space-y-1">
            <div className="flex items-center justify-between w-full gap-4 py-2">
              <i>{wordCount} words</i>
              <span>{data.publishedAt}</span>
            </div>
            <p>{data.description}</p>
          </CardDescription>
        </CardHeader>
      </Card>
    </Link>
  );
}
