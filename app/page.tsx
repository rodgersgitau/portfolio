import Image from "next/image";

import Project from "@/components/project";
import { Icons } from "@/components/ui/icons";

import { projects } from "@/lib/data";
import Link from "@/components/ui/link";
import { ArrowRightIcon } from "lucide-react";
import { AnimatedWords } from "@/components/motion";
import { Button, buttonVariants } from "@/components/ui/button";

export default function Page() {
  return (
    <div className="flex-grow w-full h-full flex">
      <div className="flex-1 grid gap-10 md:gap-16">
        <section className="relative grid gap-4 h-full grid-cols-2 lg:grid-cols-4 lg:grid-rows-2 min-h-[50svh]">
          <div className="relative col-[1/-1] row-[1/-1] lg:col-[1/3] self-end h-full">
            <figure className="relative -z-10 lg:z-0 w-full h-full lg:h-[55svh] rounded-lg overflow-clip">
              <img
                alt="Rodgers"
                src="/images/logo.svg"
                className="object-cover object-top h-full w-auto block dark:hidden"
              />
              <img
                alt="Rodgers"
                src="/images/logo-dark.svg"
                className="object-cover object-top h-full w-auto hidden dark:block"
              />
            </figure>
          </div>
          <div className="relative z-10 col-[1/-1] row-[1/-1] lg:col-[3/-1] p-8 self-end">
            <div className="grid gap-6 lg:gap-12">
              <h1 className="text-lg lg:text-xl !leading-loose tracking-wide space-x-1">
                <span className="font-bold">Rodgers Gitau</span>
                <span className="font-mono font-bold">[/gĭ-täu/]</span>
                <span>is a creative software engineer.</span>
              </h1>
              <p className="xl:text-lg xl:!leading-relaxed">
                Since 2016, he has worked on a myriad of applications for SME's,
                solutions for healthcare service providers &amp; consumers,
                eCommerce for an international companies, personal web spaces
                for creatives and everything in between.
              </p>
              <Button asChild variant="outline" className="text-accent">
                <Link href="/about" underline={false}>
                  <div className="relative flex items-center gap-1 px-4 py-2">
                    <span className="text-sm">more about me</span>
                    <ArrowRightIcon className="w-4 group-hover:left-8 transition-all" />
                  </div>
                </Link>
              </Button>
            </div>
          </div>
        </section>
        <section className="grid gap-10 py-10 md:gap-16 md:py-16">
          <div className="flex items-start gap-10">
            <h2 className="text-lg font-medium !leading-snug tracking-tight md:text-xl xl:text-2xl md:tracking-wide">
              Check out my work ...
            </h2>
            <Icons.pointerIcon className="w-8 h-8 md:w-12 md:h-12 animate-bounce" />
          </div>
          <hr />
          <div className="relative grid w-full h-full gap-2">
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
