import React from "react";
import NextImage from "next/image";

import "../styles/globals.css";
import { Navigation } from "../components";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body className="m-0 p-0 overflow-x-hidden overflow-y-auto">
        <section className="h-full min-h-screen w-screen p-8 bg-[#1d1d20] text-gray-100 relative flex flex-col gap-8">
          <div className="relative container mx-auto flex flex-col gap-8 px-2 md:px-8">
            <div className="absolute top-0 left-0 z-10 ">
              <NextImage
                alt=""
                width={100}
                height={100}
                src="/images/corner_top_left.svg"
                className="inline-block h-12 w-12 text-purple-500 stroke-current"
              />
            </div>
            <div className="absolute right-0 -bottom-8 z-10 text-pink-500">
              <NextImage
                alt=""
                width={100}
                height={100}
                className="inline-block h-12 w-12"
                src="/images/corner_bottom_right.svg"
              />
            </div>
            <Navigation />
            <div className="h-full w-full min-h-[68vh]">{children}</div>
          </div>
          <footer className="container mx-auto flex flex-col md:flex-row md:items-center gap-20">
            <p className="text-slate-200 ">&copy; Copyright 2022</p>
            <p className="text-slate-200 ">Tel: +254 711408297</p>
            <p className="text-slate-200 ">Email: rodgersgitau@gmail.com</p>
          </footer>
        </section>
      </body>
    </html>
  );
}
