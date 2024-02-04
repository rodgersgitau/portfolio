import { readdir } from "fs/promises";
import { ArrowRightIcon, MouseIcon } from "lucide-react";

import PageLayout from "@/components/layouts/page-layout";
import ProjectPreview from "@/components/project-preview";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "@/components/ui/link";

import TestimonyList from "@/components/testimonial";
import Image from "next/image";
import { Icons } from "@/components/ui/icons";

export default async function Page() {
  const entries = await readdir("./content/projects/", {
    withFileTypes: true,
  });
  const projects = entries.filter((entry) => entry.isDirectory());

  return (
    <PageLayout>
      <div className="grid flex-1 gap-10 md:gap-16">
        <section className="w-full flex gap-8 flex-col md:flex-row md:items-end max-h-[65svh]">
          <div className="w-full h-2/3 md:h-full md:flex-1">
            <Icons.logo className="text-current h-full mx-auto md:mx-0" />
          </div>

          <div className="relative w-full md:flex-1 py-10">
            <div className="ml-auto grid gap-6 md:gap-12">
              <h1 className="text-xl md:text-2xl !leading-loose tracking-wide space-x-1">
                <span className="font-bold">Rodgers Gitau</span>
                <span className="font-mono font-bold">[/gĭ-täu/]</span>
              </h1>
              <p className="md:text-lg md:!leading-loose">
                Hi! 👋 I&apos;m a creative web developer with 8+ years of
                experience in building and shipping a myriad of web
                applications.
              </p>
              <Button asChild variant="outline">
                <Link href="/about" underline={false}>
                  <div className="relative flex items-center gap-1 px-4 py-2">
                    <span className="text-sm">more about me</span>
                    <ArrowRightIcon className="w-4 transition-all group-hover:left-8" />
                  </div>
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="grid gap-10 py-10 md:gap-16 md:py-16">
          <div className="flex items-center justify-center max-w-full gap-10">
            <p className="text-base font-medium md:text-lg">
              Scroll to see more ...
            </p>
            <MouseIcon className="w-8 h-8 md:w-10 md:h-10 animate-bounce" />
          </div>
        </section>

        {/* WORK */}
        <section className="relative grid gap-10 py-10 md:gap-16 md:py-16">
          <h2 className="pb-4 text-lg font-black border-b md:text-xl xl:text-2xl border-foreground/50">
            Projects
          </h2>
          <div className="relative grid w-full h-full gap-4 md:gap-8">
            {projects.map((project, index) => (
              <ProjectPreview
                index={index + 1}
                name={project.name}
                key={`project-${project.name}`}
              />
            ))}
          </div>
          <div className="absolute bottom-0 right-0 w-max">
            <Link href="/projects" variant="outline">
              See more ...
            </Link>
          </div>
        </section>

        {/* Testimonials */}
        <section className="grid gap-10 md:gap-16">
          <h2 className="pb-4 text-lg font-black border-b md:text-xl xl:text-2xl border-foreground/50">
            Client Reviews
          </h2>
          <TestimonyList className="flex gap-8 w-full max-w-screen-2xl" />
        </section>
      </div>
    </PageLayout>
  );
}
