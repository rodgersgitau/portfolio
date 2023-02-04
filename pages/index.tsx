import React from "react";
import NextImage from "next/image";

import { FiCodesandbox } from "react-icons/fi";
import { FaFilePdf, FaGithubSquare, FaLinkedin } from "react-icons/fa";

const HomePage = () => {
  return (
    <div className="h-full w-full flex flex-col gap-8 items-center justify-center">
      <div className="w-full flex flex-col-reverse lg:flex-row py-4 items-center gap-40">
        <div className="w-full lg:w-[50%] h-full flex flex-col gap-8 ">
          <h1 className="text-3xl font-semibold flex gap-4 items-center">
            <span>Hello, I'm</span>
            <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-black before:dark:bg-pink-500 relative inline-block p-1 px-2 before:rounded-md">
              <span className="relative mx-auto text-brightGray">
                Rodgers M Gitau
              </span>
            </span>
          </h1>
          <div className="flex flex-col gap-8 text-lg text-gray-800 dark:text-gray-400">
            <p>
              I'm a front-end developer based in Nairobi, Kenya. For the past 7+
              years, I've designed, developed & shipped all sorts of web
              applications for a myriad of industries i.e hospitality, real
              estate, ecommerce & healthcare
            </p>
            <p>
              I'm fascinated with cutting-edge, pixel-perfect, beautiful
              interfaces and intuitively implemented UX.
            </p>
          </div>
        </div>

        <div className="w-full md:w-[50vw] h-full flex items-center justify-center gap-8">
          <div className="z-10 h-max w-max relative -inset-1 -skew-y-2">
            <div className="absolute top-0 bottom-0 left-0 right-0 -z-10 translate-x-8 translate-y-8 rounded-lg border-2 border-black dark:border-purpleGray" />
            <NextImage
              alt=""
              width={380}
              height={760}
              loading="eager"
              src="/images/me.jpg"
              className="object-cover rounded-lg shadow-inner shadow-black dark:shadow-purpleGray "
            />
          </div>
        </div>
      </div>
      <div className="w-full h-full flex items-center gap-12">
        <a
          title="Github"
          aria-label="github profile"
          referrerPolicy="no-referrer"
          href="https://github.com/rodgersgitau"
          className=" flex flex-col justify-center items-center gap-4 text-center hover:text-pink-600 transition-all ease-out hover:-translate-y-2"
        >
          <FaGithubSquare className="w-12 h-12 rounded-md" />
          <p className="flex-1 text-sm">Github</p>
        </a>
        <a
          title="LinkedIn"
          aria-label="linked in profile"
          href="https://www.linkedin.com/in/rodgersgitau"
          className=" flex flex-col justify-center items-center gap-4 text-center hover:text-pink-600 transition-all ease-out hover:-translate-y-2"
        >
          <FaLinkedin className="w-12 h-12 rounded-md" />
          <p className="flex-1 text-sm">LinkedIn</p>
        </a>
        <a
          title="Code Sandbox"
          aria-label="code sandbox profile"
          href="https://codesandbox.io/u/rodgersgitau"
          className=" flex flex-col justify-center items-center gap-4 text-center hover:text-pink-600 transition-all ease-out hover:-translate-y-2"
        >
          <FiCodesandbox className="w-12 h-12 rounded-md" />
          <p className="flex-1 text-sm">CodeSandbox</p>
        </a>
        <a
          download={true}
          title="My Resume"
          aria-label="download my resume"
          href="/documents/Rodgers M Gitau CV.pdf"
          className=" flex flex-col justify-center items-center gap-4 text-center hover:text-pink-600 transition-all ease-out hover:-translate-y-2"
        >
          <FaFilePdf className="w-12 h-12 rounded-md" />
          <p className="flex-1 text-sm">Resume</p>
        </a>
      </div>
    </div>
  );
};

export default HomePage;
