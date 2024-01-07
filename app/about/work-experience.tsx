"use client";

import { Icons } from "@/components/ui/icons";
import { cn, getDuration, parseDate } from "@/lib/utils";

interface Props {
  work: any;
  index: number;
}

export default function WorkExperience({ work, index }: Props) {
  return (
    <div
      key={`work-${index * Math.random()}`}
      className={cn(
        "border-2 rounded-lg  border-foreground/20 bg-background",
        "prose prose-neutral dark:prose-invert prose-ul:text-foreground",
        "relative flex-1 grid gap-2 p-6 lg:p-8 max-w-full"
      )}
    >
      <div className="absolute top-4 right-4 w-28 aspect-3 hidden lg:flex items-center justify-center">
        {work.logo === "reconLogo" && <Icons.reconLogo className="w-full" />}
        {work.logo === "savannahLogo" && (
          <Icons.savannahLogo className="w-full" />
        )}
        {work.logo === "uncLogo" && <Icons.uncLogo className="w-full" />}
        {work.logo === "mziziLogo" && <Icons.mziziLogo className="w-full" />}
      </div>

      <h2 className="flex items-center gap-4 mt-0 mb-4 text-xl font-medium tracking-tighter">
        <span className="flex items-center justify-center w-6 h-6 text-sm border border-current rounded-full">
          {index + 1}
        </span>
        <span>{work.company}</span>
      </h2>
      <div className="flex flex-col gap-4 text-sm lg:flex-row text-neutral-600 dark:text-neutral-400">
        <span className="w-max">
          {work.role} {work.contract === "Freelance" && "(Freelance)"}
        </span>
        <span className="flex items-center gap-1 lg:ml-auto text-sm w-max">
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
      {work.description && <p className="text-sm">{work.description}</p>}
      <ul className="!m-0 !py-0 text-sm !list-disk">
        <li>
          On the frontend, I led our move from a custom webpack and React
          configuration to Next.js and the latest React patterns.
        </li>
        <li>
          In the process, I shared my learnings online, helping educate members
          of the React and Next.js community by creating courses.
        </li>
      </ul>
    </div>
  );
}
