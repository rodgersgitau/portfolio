import Image from "next/image";

import { sortDates } from "@/lib/utils";
import { faqs, workExperiences } from "@/lib/data";

import Accordion from "@/components/ui/accordion";
import PageLayout from "@/components/layouts/page-layout";

// child components
import Bio from "./bio";
import WorkExperience from "./work-experience";

export default function About() {
  return (
    <PageLayout>
      <div className="relative grid gap-10 md:gap-16">
        {/* Bio */}
        <section className="flex flex-col-reverse gap-10 md:gap-16 md:flex-row md:min-h-[40svh] items-start pt-8 lg:pt-10">
          <div className="grid gap-6 !leading-loose tracking-wide md:flex-1">
            <h2 className="pb-4 text-lg font-black border-b md:text-xl xl:text-2xl border-foreground/50">
              About
            </h2>
            <Bio />
          </div>
          <div className="relative w-[clamp(15rem,_24px,_15svw)] md:w-[40%] lg:w-1/3 md:h-full mx-auto lg:mx-0 md:ml-auto aspect-1 rounded-lg overflow-clip">
            <Image
              fill
              alt="Rodgers Gitau"
              src="/images/me.webp"
              className="relative object-cover object-top rounded-lg"
            />
            <div className="absolute inset-0 rounded-lg opacity-50 -z-10 bg-accent/20" />
          </div>
        </section>

        {/* Work Experiences */}
        <section className="relative z-10 grid gap-4 py-8 md:gap-8">
          <h2 className="pb-4 text-lg font-black border-b md:text-xl xl:text-2xl border-foreground/50">
            Work Experience
          </h2>
          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 h-full !my-0">
            <div className="absolute bottom-0 w-px rounded-lg -top-4 -z-10 left-1/2 bg-foreground/50" />
            {workExperiences
              .sort(function (a, b) {
                const cur = a.endDate ? a.endDate : new Date().toString();
                const acc = b.endDate ? b.endDate : new Date().toString();
                return sortDates(acc, cur);
              })
              .map((work, index) => (
                <WorkExperience
                  index={index}
                  work={work}
                  key={`work-${index * Math.random()}`}
                />
              ))}
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
                <div className="grid max-w-screen-xl gap-1.5 leading-loose tracking-tight prose dark:prose-invert md:tracking-wide text-foreground">
                  <span className="sr-only">{faq.answer}</span>
                  <ul>
                    {faq.answer.split(".").map((word, idx) => {
                      if (word === "") {
                        return;
                      }
                      return (
                        <li
                          key={`word-${idx}`}
                          className="max-w-[90ch] m-0 text-pretty"
                        >
                          <span>{word}</span>
                          <span>.</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </Accordion>
            ))}
          </div>
        </section>
      </div>
    </PageLayout>
  );
}
