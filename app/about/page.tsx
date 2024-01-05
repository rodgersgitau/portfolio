import Image from "next/image";

import { faqs, workExperiences } from "@/lib/data";
import Accordion from "@/components/ui/accordion";
import Link from "@/components/ui/link";
import { cn, getDuration, parseDate, sortDates } from "@/lib/utils";
import { intervalToDuration } from "date-fns";

export default function About() {
  return (
    <div className="flex-grow w-full h-full">
      <div className="relative grid gap-10 md:gap-16">
        <section className="grid gap-10 md:gap-16 pt-0 md:min-h-[60svh]">
          <div className="flex flex-col gap-10 md:gap-16 md:flex-row md:items-end">
            <h1 className="text-lg font-black leading-loose tracking-tight md:text-xl xl:text-2xl md:tracking-wide">
              About
            </h1>
            <hr />
            <div className="relative mx-auto md:mx-0 md:ml-auto aspect-1 w-[clamp(20rem,_30px,_20svw)] rounded-lg overflow-clip">
              <Image
                fill
                alt="Rodgers"
                src="/images/me.webp"
                className="object-cover object-top"
              />
              <div className="absolute inset-0 opacity-60 bg-black/20" />
            </div>
          </div>
          <div className="grid gap-6 md:gap-10">
            <h2 className="space-y-8 text-base md:space-y-10 md:text-xl md:leading-snug md:tracking-tight xl:text-2xl xl:leading-loose xl:tracking-wide">
              <p>
                Rodgers Gitau
                <span className="mx-2 font-mono">[/gĭ-täu/]</span>
                is a creative software engineer presently living in Nairobi,
                Kenya. But his location is neither here nor there.
              </p>
            </h2>
            <p className="leading-loose tracking-tight md:text-lg md:tracking-wide">
              <span>
                He started his career with big design dreams and eventually
                pivoted to dev in 2016. After bouncing around a few agencies
                &amp; spending 4+ years creating frontend healthcare solutions
                at
              </span>
              <a
                className="mx-2 link"
                target="_blank"
                href="https://savannahinformatics.com"
              >
                SIL,
              </a>
              <span>
                he went independent in mid 2023 setting up his own agency
              </span>
              <a
                className="mx-2 link"
                target="_blank"
                href="https://mzizistudio.com"
              >
                Mzizi Studio.
              </a>
            </p>
            <p className="leading-loose tracking-tight md:text-lg md:tracking-wide">
              <span>
                When not working, he often spends his time making 2D/3D video
                games &amp; visual effects for
              </span>
              <a
                className="mx-2 link"
                target="_blank"
                href="https://rodgersgitau.github.io/labs"
              >
                labs
              </a>
              <span>, teaching the next-gen of developers over at</span>
              <a
                className="mx-2 link"
                target="_blank"
                href="https://devcoach.com"
              >
                dev coach,
              </a>
              <span>and seeking/sharing philosophy &amp; enlightment on</span>
              <a
                className="mx-2 link"
                target="_blank"
                href="https://hermitology.com"
              >
                hermitology.
              </a>
            </p>
            <p className="leading-loose tracking-tight md:text-lg md:tracking-wide">
              Nowadays, he lives with his girlfriend with a bunch chickens
              trying to build a self-sufficient homestead before the impending
              climate doomsday.
            </p>
          </div>
        </section>

        {/* Work Experience */}
        <section className="relative z-10 grid gap-4 py-8 md:gap-8">
          <h2 className="my-2 text-lg font-black leading-loose tracking-tight md:text-xl xl:text-2xl md:tracking-wide">
            Work Experience
          </h2>
          <div className="relative flex flex-col lg:flex-row lg:flex-wrap gap-8 h-full max-w-screen-lg !my-0">
            {/* <div className="absolute w-2 rounded-lg -bottom-4 -top-4 -z-10 left-1/2 bg-foreground/50" /> */}
            {workExperiences
              .sort(function (a, b) {
                const cur = a.endDate ? a.endDate : new Date().toString();
                const acc = b.endDate ? b.endDate : new Date().toString();
                return sortDates(acc, cur);
              })
              .map((work, index) => (
                <div
                  key={`work-${index * Math.random()}`}
                  className={cn(
                    "border-2 rounded-lg  border-foreground/20 bg-background",
                    "prose prose-neutral dark:prose-invert prose-ul:text-foreground",
                    "flex-1 grid gap-2 p-6 w-full lg:w-[20rem] xl:w-[30rem]"
                  )}
                >
                  <h2 className="flex items-center gap-4 mb-4 text-xl font-medium tracking-tighter">
                    <span className="flex items-center justify-center w-6 h-6 text-sm border border-current rounded-full">
                      {index + 1}
                    </span>
                    <span>{work.company}</span>
                  </h2>
                  <div className="flex flex-col gap-4 text-sm md:flex-row text-neutral-600 dark:text-neutral-400">
                    <span className="w-max">{work.role}</span>
                    <span className="flex items-center gap-1 ml-auto text-sm w-max">
                      <span>{parseDate(work.startDate)}</span>
                      <span>-</span>
                      <span>
                        {work.endDate
                          ? `${parseDate(work.endDate)} ${getDuration(
                              work.startDate.toString(),
                              work.endDate.toString()
                            )}`
                          : "Current"}
                      </span>
                      <span></span>
                    </span>
                  </div>
                  <hr className="my-3" />
                  {work.description && (
                    <p className="text-sm">{work.description}</p>
                  )}
                  <ul className="!m-0 !py-0 text-sm !list-disk">
                    <li>
                      On the frontend, I led our move from a custom webpack and
                      React configuration to Next.js and the latest React
                      patterns.
                    </li>
                    <li>
                      In the process, I shared my learnings online, helping
                      educate members of the React and Next.js community by
                      creating courses.
                    </li>
                  </ul>
                </div>
              ))}
          </div>
        </section>

        {/* FAQs */}

        <section className="grid gap-10 md:gap-16">
          <h2 className="text-lg font-black leading-loose tracking-tight md:text-xl xl:text-2xl md:tracking-wide">
            FAQs
          </h2>
          <div className="relative grid w-full h-full gap-0">
            {faqs.map((faq, index) => (
              <Accordion
                index={index + 1}
                title={faq.question}
                key={`faq-${faq.question}`}
              >
                <div className="flex items-center leading-loose tracking-tight md:tracking-wide text-foreground">
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
