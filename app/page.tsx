import Project from "@/components/project";
import { Icons } from "@/components/ui/icons";

import { projects } from "@/lib/data";

export default function Page() {
  return (
    <div className="flex-grow w-full h-full">
      <div className="grid w-full h-full gap-10 md:gap-16">
        <section className="grid gap-8 pt-0 md:min-h-[35svh] md:pt-[50%]">
          <h1 className="space-y-8 text-lg md:space-y-10 xl:text-3xl md:text-2xl md:!leading-snug tracking-wide">
            <p>
              Rodgers Gitau
              <span className="mx-2 font-mono">[/gĭ-täu/]</span>is a creative
              software engineer.
            </p>
            <p>
              Since 2016, he has worked on a myriad of applications for SME's,
              solutions for healthcare service providers &amp; consumers,
              eCommerce for an international companies, personal web spaces for
              creatives and everything in between.
            </p>
          </h1>
        </section>

        <section className="grid gap-10 py-10 md:gap-16 md:py-16">
          <div className="flex items-start gap-10">
            <h2 className="text-lg font-medium !leading-snug tracking-tight md:text-xl xl:text-2xl md:tracking-wide">
              Check out my work ...
            </h2>
            <Icons.pointerIcon className="w-8 h-8 md:w-12 md:h-12 animate-bounce" />
          </div>
          <hr />
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
