import { Suspense } from "react";
import { readdir } from "fs/promises";

import PostPreview from "@/components/post-preview";
import PageLayout from "@/components/layouts/page-layout";

export const metadata = {
  title: "Blog",
  description: "Read my thoughts on software development, design, and more.",
};

export default async function BlogList() {
  const entries = await readdir("./content/blogs/", { withFileTypes: true });
  const blogs = entries.filter((entry) => entry.isDirectory());

  return (
    <PageLayout>
      <div className="grid flex-1 gap-10 md:gap-16">
        <section className="flex flex-col gap-10 md:gap-16 md:min-h-[75dvh]">
          <h1 className="py-4 text-lg font-black leading-loose tracking-tight border-b-2 md:text-xl xl:text-2xl md:tracking-wide">
            Blog
          </h1>
          <Suspense fallback={<div>Loading...</div>}>
            <div className="flex flex-col w-full gap-4 max-w-screen-2xl">
              {blogs.map((blog) => (
                <PostPreview key={blog.name} name={blog.name} />
              ))}
            </div>
          </Suspense>
        </section>
      </div>
    </PageLayout>
  );
}
