import fs from "fs";
import matter from "gray-matter";
import NextImage from "next/image";
import Link from "next/link";
import path from "path";
import { FaFilePdf, FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { FiCodesandbox } from "react-icons/fi";

import { Image, IWorkItem } from "../components";
import Section from "../components/Section";
import AnimatedWords from "../motion/components/AnimatedWords";

const HomePage = ({ projects }: { projects: IWorkItem[] }) => {
  return (
    <div className="h-full min-h-[60vh] w-full flex flex-col gap-16 items-center justify-center">
      <div className="flex flex-col-reverse items-center w-full gap-40 py-4 lg:flex-row">
        <div className="w-full lg:w-[50%] h-full flex flex-col gap-8 ">
          <h1 className="flex items-center gap-4 font-semibold">
            <span className="text-3xl">Hello, I'm</span>
            <span className="relative inline-block p-1 px-2 before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-black before:dark:bg-pink-500 before:rounded-md">
              <span className="relative mx-auto text-2xl text-white">
                Rodgers M Gitau
              </span>
            </span>
          </h1>
          <div className="flex flex-col gap-8 text-lg text-slate-800 dark:text-slate-400">
            <p>
              I'm a full-stack software engineer based in Nairobi, Kenya. For
              the past 7+ years, I've designed, developed & shipped all sorts of
              web applications for a myriad of industries i.e hospitality, real
              estate, ecommerce & healthcare
            </p>
            <p>
              I'm fascinated with cutting-edge, pixel-perfect, beautiful
              interfaces and intuitively implemented UX.
            </p>
          </div>
        </div>

        <div className="w-full md:w-[50vw] flex items-center justify-center gap-8">
          <div className="relative z-10 transition duration-300 -inset-1 -skew-y-2">
            <Image
              shadow
              width={380}
              height={760}
              alt="a photo of me"
              src="/images/me.jpg"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
      <div className="flex items-center w-full h-full gap-12">
        <a
          title="Github"
          aria-label="github profile"
          referrerPolicy="no-referrer"
          href="https://github.com/rodgersgitau"
          className="flex flex-col items-center justify-center gap-4 text-center transition-all ease-out hover:text-pink-600 hover:-translate-y-2"
        >
          <FaGithubSquare className="w-12 h-12 rounded-md" />
          <p className="flex-1 text-sm">Github</p>
        </a>
        <a
          title="LinkedIn"
          aria-label="linked in profile"
          href="https://www.linkedin.com/in/rodgersgitau"
          className="flex flex-col items-center justify-center gap-4 text-center transition-all ease-out hover:text-pink-600 hover:-translate-y-2"
        >
          <FaLinkedin className="w-12 h-12 rounded-md" />
          <p className="flex-1 text-sm">LinkedIn</p>
        </a>
        <a
          title="Code Sandbox"
          aria-label="code sandbox profile"
          href="https://codesandbox.io/u/rodgersgitau"
          className="flex flex-col items-center justify-center gap-4 text-center transition-all ease-out hover:text-pink-600 hover:-translate-y-2"
        >
          <FiCodesandbox className="w-12 h-12 rounded-md" />
          <p className="flex-1 text-sm">CodeSandbox</p>
        </a>
        <a
          download={true}
          title="My Resume"
          aria-label="download my resume"
          href="/documents/Rodgers M Gitau CV.pdf"
          className="flex flex-col items-center justify-center gap-4 text-center transition-all ease-out hover:text-pink-600 hover:-translate-y-2"
        >
          <FaFilePdf className="w-12 h-12 rounded-md" />
          <p className="flex-1 text-sm">Resume</p>
        </a>
      </div>
      <Section title="projects" className="w-full mx-auto my-8">
        <div className="grid w-full h-full grid-cols-1 gap-8 py-8 lg:grid-cols-2">
          {projects.map((project) => (
            <div key={project.slug} className="relative group">
              <div className="absolute transition duration-1000 rounded-lg opacity-20 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur group-hover:opacity-100 group-hover:duration-200" />
              <div className="relative flex flex-col justify-center h-full gap-4 p-6 rounded-lg bg-slate-100 lg:flex-row text-black/70 dark:text-slate-100 dark:bg-black/90 group-hover:dark:bg-black group-hover:bg-slate-100 ring-slate-400/5 ring-1 dark:ring-slate-900/5">
                <div className="relative flex-1 w-full min-h-[20rem] p-2 overflow-hidden rounded-t-lg shadow shadow-current/90 lg:rounded-lg">
                  <NextImage
                    alt=""
                    fill
                    className="object-cover object-left-top"
                    src={`/${project.frontmatter.images[0]}`}
                  />
                </div>
                <div className="grid self-center flex-1 w-full gap-8 py-4 h-max lg:py-0 lg:w-1/2">
                  <h3 className="text-xl font-black capitalize lg:text-2xl text-slate-600 dark:text-slate-400">
                    <AnimatedWords title={project.frontmatter.title} />
                  </h3>
                  <p className="text-base leading-8 text-current">
                    {project.frontmatter.description}
                  </p>
                  <a
                    href={project.slug}
                    title={project.frontmatter.title}
                    className="block font-semibold transition duration-200 text-slate-600 dark:text-slate-400 hover:text-pink-600 group-hover:underline underline-offset-4"
                    target="_blank"
                  >
                    View Project →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <div className="w-full p-8 my-8 bg-white/80 min-h-[18rem] h-max dark:bg-black/50 rounded-md flex items-center shadow shadow-current">
        <div className="flex flex-col w-full gap-8">
          <h2 className="font-sans text-3xl capitalize">
            Ready to take your digital presence to the next level?
          </h2>
          <p className="my-4">
            I would love to hear about what you want to accomplish and how I can
            partner together to achieve your goals.
          </p>
          <div className="w-max">
            <Link href="/contact">
              <span className="capitalize transition-all ease-out bg-black rounded-md btn-lg btn btn-primary hover:text-black hover:bg-pink-300 hover:translate-y-1">
                Let's Talk
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  // Get files from the projects dir
  const files = fs.readdirSync(path.join("content", "projects"));
  // Get slug and frontmatter from projects
  const tempPosts = files.map((filename) => {
    // Create slug
    const slug = filename.replace(".md", "");

    // Get frontmatter
    const markdownWithMeta = fs.readFileSync(
      path.join("content", "projects", filename),
      "utf-8"
    );

    const { data: frontmatter } = matter(markdownWithMeta);

    if (frontmatter.draft === false) {
      return {
        slug,
        frontmatter,
      };
    } else {
      return null;
    }
  });

  //  remove null in tempPosts
  const projects = tempPosts.filter((workItem) => {
    return workItem && workItem;
  });

  return {
    props: {
      projects,
    },
  };
}

export default HomePage;
