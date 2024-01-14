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
    <section className="flex flex-grow pt-10">
      {aside ? (
        <div className="relative flex flex-col-reverse flex-grow gap-8 md:flex-row">
          <aside className="w-full h-full md:sticky md:h-max md:top-36 md:w-1/4">
            {aside}
          </aside>
          <Separator className="w-full h-px md:w-px md:h-full" />
          <section className="w-full h-full md:w-3/4 md:h-max">
            {children}
          </section>
        </div>
      ) : (
        <section className="relative flex-grow">{children}</section>
      )}
    </section>
  );
}
