import fs from "fs";
import matter from "gray-matter";
import Link from "next/link";
import path from "path";
import { FaFilePdf, FaGithubSquare, FaLinkedin } from "react-icons/fa";
import {
  FiCalendar,
  FiCodesandbox,
  FiKey,
  FiMonitor,
  FiSearch,
  FiSettings,
  FiTool,
} from "react-icons/fi";

import { CardList, Image, ItemList, IWorkItem } from "../components";

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
          <div className="flex flex-col gap-8 text-lg text-gray-800 dark:text-gray-400">
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
      <div className="w-full my-8">
        <CardList
          title="Services"
          cardItems={[
            { title: "Planning & Consultation", icon: <FiCalendar /> },
            { title: "Brand Development", icon: <FiTool /> },
            { title: "Web Design & Development", icon: <FiMonitor /> },
            { title: "Search Engine Optimization", icon: <FiSearch /> },
            { title: "Support & Maintainance", icon: <FiSettings /> },
            { title: "Content Management", icon: <FiKey /> },
          ]}
        />
      </div>
      <div className="w-full my-8">
        <ItemList
          title="Recent Work"
          items={projects.map((project) => ({
            type: "study",
            link: `/work/${project.slug}`,
            title: project.frontmatter.title,
            technologies: project.frontmatter.techStack,
            description: project.frontmatter.description,
          }))}
        />
      </div>
      <div className="w-full p-8 my-8 bg-white/80 min-h-[18rem] dark:bg-slate-600/10 rounded-md flex items-center">
        <div className="flex flex-col w-full gap-8 h-max">
          <h2 className="font-sans text-3xl capitalize">
            Ready to take your digital presence to the next level?
          </h2>
          <p>
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
