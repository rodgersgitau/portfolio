import Image from "next/image";

import { cn } from "@/lib/utils";
import { faqs } from "@/lib/config";
import Accordion from "@/components/ui/accordion";

export default function About() {
  return (
    <div className="grid flex-1 w-full h-full md:justify-items-end">
      <div className="relative grid gap-10 md:gap-16 md:max-w-screen-md md:ml-auto">
        <section className="grid gap-10 md:gap-16">
          <div className="relative w-full mx-auto ml-0 rounded-lg aspect-1 md:w-64 md:h-64 md:ml-auto md:mx-0 overflow-clip opacity-85">
            <Image
              fill
              alt="Rodgers"
              src="/images/me.webp"
              className="object-cover object-top bg-black"
            />
          </div>
          <div className="grid gap-10">
            <h2 className="text-lg leading-loose tracking-tight md:text-xl xl:text-2xl md:tracking-wide">
              Rodgers Gitau
              <span className="mx-2 font-mono">[/gĭ-täu/]</span>
              is a creative software engineer presently living in Nairobi,
              Kenya. But his location is neither here nor there.
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
        <section className="grid gap-10 py-10">
          <h2 className="text-lg font-black leading-loose tracking-tight md:text-xl xl:text-2xl md:tracking-wide">
            FAQs
          </h2>
          <div className="relative grid w-full h-full gap-0 py-8">
            {faqs.map((faq, index) => (
              <Accordion
                index={index + 1}
                title={faq.question}
                key={`faq-${faq.question}`}
              >
                <div className="flex items-center py-6 leading-loose tracking-tight prose md:tracking-wide text-foreground">
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
