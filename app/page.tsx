import { readdir } from "fs/promises";
import { ArrowRightIcon, MouseIcon } from "lucide-react";

import Link from "@/components/ui/link";
import { Button } from "@/components/ui/button";
import Accordion from "@/components/ui/accordion";

import ProjectPreview from "@/components/project-preview";

import { faqs } from "@/lib/data";

export default async function Page() {
  const entries = await readdir("./content/projects/", {
    withFileTypes: true,
  });
  const projects = entries.filter((entry) => entry.isDirectory());

  return (
    <div className="flex flex-grow w-full h-full py-10 md:py-16">
      <div className="grid flex-1 gap-10 md:gap-16">
        <section className="relative grid gap-4 h-full grid-cols-2 md:grid-cols-4 md:grid-rows-2 min-h-[60svh]">
          <div className="relative col-[1/-1] row-[1/-1] md:col-[1/3] self-end h-full">
            <figure className="relative -z-10 md:z-0 w-full h-[25svh] md:h-[60svh] rounded-lg overflow-clip">
              <img
                alt="Rodgers"
                src="/images/logo.svg"
                className="block object-cover object-top w-auto h-full dark:hidden"
              />
              <img
                alt="Rodgers"
                src="/images/logo-dark.svg"
                className="hidden object-cover object-top w-auto h-full dark:block"
              />
            </figure>
          </div>
          <div className="relative z-10 col-[1/-1] row-[1/-1] md:col-[3/-1] p-8 self-end">
            <div className="grid gap-6 md:gap-12">
              <h1 className="text-lg md:text-xl !leading-loose tracking-wide space-x-1">
                <span className="font-bold">Rodgers Gitau</span>
                <span className="font-mono font-bold">[/gĭ-täu/]</span>
                <span>is a creative software engineer.</span>
              </h1>
              <p className="md:text-lg md:!leading-loose">
                Since 2016, he has worked on a myriad of applications for SME's,
                solutions for healthcare service providers &amp; consumers,
                eCommerce for an international companies, personal web spaces
                for creatives and everything in between.
              </p>
              <Button asChild variant="outline" className="text-accent">
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
            Work
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
            <Link href="/projects">See more ...</Link>
          </div>
        </section>
        {/* FAQs */}
        <section className="grid gap-10 md:gap-16">
          <h2 className="pb-4 text-lg font-black border-b md:text-xl xl:text-2xl border-foreground/50">
            FAQs
          </h2>
          <div className="relative grid w-full h-full max-w-screen-xl gap-2 mx-auto">
            {faqs.map((faq, index) => (
              <Accordion
                index={index + 1}
                title={faq.question}
                key={`faq-${faq.question}`}
              >
                <div className="flex items-center max-w-screen-xl leading-loose tracking-tight prose dark:prose-invert md:tracking-wide text-foreground">
                  {faq.answer}
                </div>
              </Accordion>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
