import Project from "@/components/project";
import { Icons } from "@/components/ui/icons";

import projects from "@/content/projects/index.json";

export default function Page() {
  return (
    <div className="grid flex-grow w-full md:justify-items-end pt-0 md:pt-[35%]">
      <div className="grid w-full gap-10 md:gap-16 md:max-w-screen-md md:ml-auto h-max">
        <h2 className="grid gap-8 text-base md:text-xl md:leading-snug md:tracking-tight xl:text-2xl xl:leading-loose xl:tracking-wide">
          <p>
            Rodgers Gitau
            <span className="mx-2 font-mono">[gĭ-täu]</span>is a creative
            software engineer.
          </p>
          <p>
            Since 2016, he has worked on a myriad of applications for SME's,
            solutions for healthcare service providers &amp; consumers,
            eCommerce for an international companies, personal web spaces for
            creatives and everything in between.
          </p>
        </h2>

        <section className="grid gap-10 md:gap-16 md:py-16">
          <div className="flex items-start gap-10">
            <h2 className="text-lg md:text-xl xl:text-2xl">
              Check out my work ...
            </h2>
            <Icons.pointerIcon className="w-8 h-8 md:w-12 md:h-12 animate-bounce" />
          </div>
          <div className="relative grid w-full h-full gap-0">
            {projects.map((project, index) => (
              <Project
                {...project}
                index={index + 1}
                key={`project-${project.name}`}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
