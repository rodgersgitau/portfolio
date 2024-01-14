import { readFile, readdir } from "fs/promises";
import matter from "gray-matter";

import { CustomMDX } from "@/components/markdown/mdx";
import PageLayout from "@/components/layouts/page-layout";

import { getFormatedDate } from "@/lib/utils";

interface Props {
  params: { slug: string };
}

export default async function Blog({ params }: Props) {
  const fileContent = await readFile(
    "./content/blogs/" + params.slug + "/index.mdx",
    "utf8"
  );
  const { data: metadata, content } = matter(fileContent);

  return (
    <PageLayout>
      <article className="grid flex-grow gap-8 mx-auto max-w-screen-2xl">
        <h1 className="text-lg font-medium !leading-snug tracking-tight md:text-2xl xl:text-3xl md:tracking-wide">
          {metadata.title}
        </h1>

        <div className="flex items-center justify-between text-sm">
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            {getFormatedDate(metadata.publishedAt)}
          </p>
        </div>
        <div className="max-w-full prose 2xl:prose-lg prose-quoteless prose-neutral dark:prose-invert prose-headings:text-lg xl:prose-headings:text-xl">
          <CustomMDX source={content} />
        </div>
      </article>
    </PageLayout>
  );
}

export async function generateStaticParams() {
  const entries = await readdir("./content/blogs/", { withFileTypes: true });
  const blogs = entries
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name);
  return blogs.map((file) => ({ slug: file }));
}

export async function generateMetadata({ params }: Props) {
  const file = await readFile(
    "./content/blogs/" + params.slug + "/index.mdx",
    "utf8"
  );
  let { data } = matter(file);
  return {
    title: data.title,
    description: data.description,
  };
}
