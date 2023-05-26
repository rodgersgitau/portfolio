import fs from "fs";
import matter from "gray-matter";
import { GetStaticProps, GetStaticPropsContext } from "next";
import { NextSeo } from "next-seo";
import Link from "next/link";
import { useRouter } from "next/router";
import path from "path";
import { FC } from "react";
import { FiArrowLeft } from "react-icons/fi";
import ReactMarkdown from "react-markdown";

import { Image } from "../../components";
import { getImageUrl, getSlug } from "../../utils";

interface ProjectProps {
  content: any;
  frontmatter: {
    date: string;
    title: string;
    description: string;
    image: string;
    techStack: string[];
    images: string[];
  };
}

const SingleProject: FC<ProjectProps> = ({ content, frontmatter }) => {
  const router = useRouter();
  const imageMeta = frontmatter.images.map((image: string) => {
    const imageUrl = getImageUrl(image);
    return {
      url: imageUrl,
      width: 1224,
      height: 724,
      alt: frontmatter.title,
      type: "image/jpeg",
    };
  });

  return (
    <div className="relative flex flex-col w-full gap-12 text-black dark:text-base">
      <NextSeo
        title={frontmatter.title}
        description={frontmatter.description}
        openGraph={{
          url: "https://rodgersgitau.vercel.app",
          title: frontmatter.title,
          description: frontmatter.description,
          type: "article",
          article: {
            publishedTime: frontmatter.date,
            authors: ["https://rodgersgitau.vercel.app/about"],
            tags: frontmatter.techStack,
          },
          images: imageMeta,
          site_name: "Rodgers M Gitau",
        }}
      />
      <div className="w-full">
        <button
          onClick={() => router.back()}
          className="w-50 opacity-80 text-[#fff] bg-black dark:bg-pink-600 hover:opacity-100 focus:ring-4 focus:outline-none focus:ring-pink-300 font-medium rounded-lg text-md sm:w-auto px-5 py-2.5 text-center dark:opacity-100"
        >
          <div className="flex items-center gap-4">
            <FiArrowLeft fontSize="1.25rem" />
            <span className="flex-1 font-semibold">Back</span>
          </div>
        </button>
      </div>
      <div className="relative w-full h-[40vh] rounded-lg">
        <Image
          src={getImageUrl(frontmatter.images[0])}
          alt={frontmatter.title}
          className="object-cover object-left-top w-full h-[40vh] rounded-lg"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-8 p-8 text-base bg-black/80">
          <h1 className="font-sans text-4xl font-bold text-center text-current capitalize ">
            {frontmatter.title}
          </h1>
          <h3 className="font-sans text-current capitalize ext-center ">
            {frontmatter.description}
          </h3>
          <div className="flex flex-wrap items-center gap-8">
            {frontmatter.techStack?.map((tech, idx) => (
              <p
                key={`${tech}-${Math.floor(idx * 0.1)}`}
                className="p-2 font-bold text-pink-300 capitalize border border-pink-300 rounded-md border-spacing-2"
              >
                {tech}
              </p>
            ))}
          </div>
        </div>
      </div>

      <ReactMarkdown className="w-full prose-base dark:prose-invert max-w-none h-max columns-auto prose-headings:text-black dark:prose-headings:text-base prose-headings:font-sans prose-headings:font-semibold prose-li:list-disc">
        {content}
      </ReactMarkdown>

      <h2 className="font-sans text-2xl font-semibold text-current">
        Screenshots
      </h2>

      <div className="grid w-full h-full grid-cols-1 gap-8 lg:grid-cols-2">
        {frontmatter.images.map((image) => (
          <div className="relative w-full h-full rounded-lg shadow-2xl">
            <Image
              priority
              key={image}
              alt={frontmatter.title}
              src={getImageUrl(image)}
              className="object-cover w-full h-full rounded-lg aspect-[16/9]"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export async function getStaticPaths() {
  //  Get files from the posts dir
  const files = fs.readdirSync(path.join("content", "projects"));

  // Get slug and frontmatter from posts
  const temppaths = files.map((filename) => {
    // Get frontmatter
    const markdownWithMeta = fs.readFileSync(
      path.join("content", "projects", filename),
      "utf-8"
    );

    const { data: frontmatter } = matter(markdownWithMeta);

    if (frontmatter.draft === false) {
      return {
        params: {
          slug: filename.replace(".md", ""),
        },
      };
    } else {
      return null;
    }
  });
  //   remove null in tempPosts
  const paths = temppaths.filter((path) => {
    return path && path;
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: GetStaticPropsContext) {
  const slug = params?.slug;

  const markdownWithMeta = fs.readFileSync(
    path.join("content", "projects", slug + ".md"),
    "utf-8"
  );

  const { data: frontmatter, content } = matter(markdownWithMeta);

  return {
    props: {
      frontmatter,
      slug,
      content,
    },
  };
}

export default SingleProject;
