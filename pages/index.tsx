import React from "react";
import NextImage from "next/image";

import { FiCodesandbox } from "react-icons/fi";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";

const HomePage = () => {
  return (
    <div className="h-full w-full flex flex-col gap-8 items-center justify-center">
      <div className="w-full flex flex-col-reverse md:flex-row py-4 items-center gap-20">
        <div className="w-full md:w-[50%] h-full flex flex-col gap-8 ">
          <h1 className="text-3xl font-semibold">
            Hello, I'm Rodgers M Gitau.
          </h1>
          <div className="flex flex-col gap-8 text-lg text-gray-800 dark:text-gray-400">
            <p>
              I'm a front-end developer based in Nairobi, Kenya. For the past 5+
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
          <div className="z-10 h-max w-max relative">
            <div className="absolute top-0 bottom-0 left-0 right-0 rounded-md border-2 border-gray-200" />
            <NextImage
              alt=""
              width={380}
              height={760}
              src="/images/me.jpg"
              className="-translate-x-8 -translate-y-8 object-cover rounded-md"
            />
          </div>
        </div>
      </div>
      <div className="w-full h-full flex items-center gap-8">
        <a
          title="Github"
          aria-label="github profile"
          referrerPolicy="no-referrer"
          href="https://github.com/rodgersgitau"
          className="w-12 h-12 hover:text-pink-500 transition-all ease-out hover:translate-y-1"
        >
          <FaGithubSquare className="w-full h-full rounded-md" />
        </a>
        <a
          title="LinkedIn"
          aria-label="linked in profile"
          href="https://www.linkedin.com/in/rodgersgitau"
          className="w-12 h-12 hover:text-pink-500 transition-all ease-out hover:translate-y-1"
        >
          <FaLinkedin className="w-full h-full rounded-md" />
        </a>
        <a
          title="Code Sandbox"
          aria-label="code sandbox profile"
          href="https://codesandbox.io/u/rodgersgitau"
          className="w-12 h-12 hover:text-pink-500 transition-all ease-out hover:translate-y-1"
        >
          <FiCodesandbox className="w-full h-full rounded-md" />
        </a>
      </div>
    </div>
  );
};

export default HomePage;
