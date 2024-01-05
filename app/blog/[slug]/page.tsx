import type { Metadata } from "next";
import { Suspense, cache } from "react";
import { notFound } from "next/navigation";

import { CustomMDX } from "@/components/mdx";
import ViewsCounter from "@/components/ui/views-counter";

import { siteConfig } from "@/lib/config";
import { increment } from "@/lib/db/actions";
import { getBlogPosts } from "@/lib/db/blog";
import { getFormatedDate } from "@/lib/utils";
import { getViewsCount } from "@/lib/db/queries";

export async function generateMetadata({
  params,
}: {
  params: any;
}): Promise<Metadata | undefined> {
  let post = getBlogPosts().find((post) => post.slug === params.slug);
  if (!post) {
    return;
  }

  let {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = post.metadata;
  let ogImage = image
    ? `${siteConfig.site_url}${image}`
    : `${siteConfig.site_url}/og?title=${title}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `${siteConfig.site_url}/blog/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default function Blog({ params }: { params: Record<string, any> }) {
  const post = getBlogPosts().find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <section className="grid flex-grow gap-8">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.metadata.title,
            datePublished: post.metadata.publishedAt,
            dateModified: post.metadata.publishedAt,
            description: post.metadata.summary,
            image: post.metadata.image
              ? `${siteConfig.site_url}${post.metadata.image}`
              : `${siteConfig.site_url}/og?title=${post.metadata.title}`,
            url: `${siteConfig.site_url}/blog/${post.slug}`,
            author: {
              "@type": "Person",
              name: "Rodgers Gitau",
            },
          }),
        }}
      />
      <h1 className="text-lg font-medium !leading-snug tracking-tight md:text-2xl xl:text-3xl md:tracking-wide">
        {post.metadata.title}
      </h1>

      <div className="flex items-center justify-between text-sm">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          {getFormatedDate(post.metadata.publishedAt)}
        </p>
        <Suspense fallback={<p className="h-5" />}>
          <Views slug={post.slug} />
        </Suspense>
      </div>

      <article className="max-w-full prose 2xl:prose-lg prose-quoteless prose-neutral dark:prose-invert prose-headings:text-lg xl:prose-headings:text-xl">
        <CustomMDX source={post.content} />
      </article>
    </section>
  );
}

let incrementViews = cache(increment);

async function Views({ slug }: { slug: string }) {
  let views = await getViewsCount();
  incrementViews(slug);
  return <ViewsCounter allViews={views} slug={slug} />;
}
