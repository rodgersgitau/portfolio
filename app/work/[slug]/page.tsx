import { readFile, readdir } from "fs/promises";
import matter from "gray-matter";

import { CustomMDX } from "@/components/mdx";
import { getFormatedDate, parseDate } from "@/lib/utils";

interface Props {
  params: { slug: string };
}

export default async function Project({ params }: Props) {
  const fileContent = await readFile(
    "./content/projects/" + params.slug + "/index.mdx",
    "utf8"
  );
  const { data: metadata, content } = matter(fileContent);

  return (
    <article className="grid flex-grow gap-8 max-w-screen-2xl mx-auto">
      <h1 className="text-lg font-medium !leading-snug tracking-tight md:text-2xl xl:text-3xl md:tracking-wide">
        {metadata.title}
      </h1>

      <div className="flex items-center justify-between text-sm">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          {parseDate(new Date(metadata.date))}
        </p>
      </div>
      <div className="max-w-full prose 2xl:prose-lg prose-quoteless prose-neutral dark:prose-invert prose-headings:text-lg xl:prose-headings:text-xl">
        <CustomMDX source={content} />
      </div>
    </article>
  );
}

export async function generateStaticParams() {
  const entries = await readdir("./content/projects/", { withFileTypes: true });
  const projects = entries
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name);
  return projects.map((file) => ({ slug: file }));
}

export async function generateMetadata({ params }: Props) {
  const file = await readFile(
    "./content/projects/" + params.slug + "/index.mdx",
    "utf8"
  );
  let { data } = matter(file);
  return {
    title: data.title,
    description: data.description,
  };
}
