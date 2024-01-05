import { Suspense } from "react";

import Link from "@/components/ui/link";
import { getBlogPosts } from "@/lib/db/blog";
import ViewsCounter from "@/components/ui/views-counter";

export const metadata = {
  title: "Blog",
  description: "Read my thoughts on software development, design, and more.",
};

export default async function About() {
  const allBlogs = getBlogPosts();
  const allViews = allBlogs.map((blog) => ({
    slug: blog.slug,
    count: 0,
  }));

  return (
    <div className="flex-grow w-full h-full">
      <div className="relative grid gap-10 md:gap-16">
        <section className="flex flex-col gap-10 md:gap-16 md:min-h-[75dvh]">
          <h1 className="text-lg font-black leading-loose tracking-tight md:text-xl xl:text-2xl md:tracking-wide">
            BlogList
          </h1>
          <hr />
          <Suspense fallback={<div>Loading...</div>}>
            {allBlogs
              .sort((a, b) => {
                if (
                  new Date(a.metadata.publishedAt) >
                  new Date(b.metadata.publishedAt)
                ) {
                  return -1;
                }
                return 1;
              })
              .map((post) => (
                <Link
                  key={post.slug}
                  underline={false}
                  className="flex flex-col mb-4 space-y-1"
                  href={`/blog/${post.slug}`}
                >
                  <div className="grid w-full gap-4 p-8 border rounded">
                    <p className="tracking-tight text-neutral-900 dark:text-neutral-100">
                      {post.metadata.title}
                    </p>
                    <Suspense fallback={<p className="h-6" />}>
                      <ViewsCounter allViews={allViews} slug={post.slug} />
                    </Suspense>
                  </div>
                </Link>
              ))}
          </Suspense>
        </section>
      </div>
    </div>
  );
}
