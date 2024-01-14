import { Suspense } from "react";
import { readdir } from "fs/promises";

import ProjectPreview from "@/components/project-preview";
import PageLayout from "@/components/layouts/page-layout";

export const metadata = {
  title: "Work",
  description: "See some of the projects that I've worked on.",
};

export default async function WorkList() {
  const entries = await readdir("./content/projects/", { withFileTypes: true });
  const projects = entries.filter((entry) => entry.isDirectory());

  return (
    <PageLayout>
      <div className="grid flex-1 gap-10 md:gap-16">
        <section className="flex flex-col gap-10 md:gap-16 md:min-h-[75dvh]">
          <h1 className="py-4 text-lg font-black leading-loose tracking-tight border-b-2 md:text-xl xl:text-2xl md:tracking-wide">
            Projects
          </h1>
          <Suspense fallback={<div>Loading...</div>}>
            <div className="grid w-full gap-4 mx-auto md:gap-8 max-w-screen-2xl">
              {projects.map((project) => (
                <ProjectPreview key={project.name} name={project.name} />
              ))}
            </div>
          </Suspense>
        </section>
      </div>
    </PageLayout>
  );
}
