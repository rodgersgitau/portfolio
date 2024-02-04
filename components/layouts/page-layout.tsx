"use client";

import { type ReactNode } from "react";

import { Separator } from "@/components/ui/separator";

export default function PageLayout({
  aside,
  children,
  className,
}: {
  aside?: ReactNode;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className="flex items-center flex-grow">
      {aside ? (
        <div className="relative flex flex-col-reverse flex-grow gap-8 pt-10 md:flex-row">
          <aside className="w-max pr-4 h-max md:sticky md:left-0 md:top-0 md:w-1/4 max-h-[80svh] overflow-y-auto">
            {aside}
          </aside>
          <Separator className="w-full h-px md:w-px md:h-full" />
          <section className="w-full md:w-3/4 md:h-max">{children}</section>
        </div>
      ) : (
        <section className="relative flex-grow pt-10">{children}</section>
      )}
    </section>
  );
}
