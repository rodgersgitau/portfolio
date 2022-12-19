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
      <body className="m-0 p-0 box-content">
        <section className="min-h-screen h-max p-8 bg-[#1d1d20] text-gray-100 flex items-center relative">
          <div className="h-full relative container mx-auto p-8">
            <div className="absolute top-0 left-0 z-10 ">
              <NextImage
                alt=""
                width={100}
                height={100}
                src="/images/corner_top_left.svg"
                className="inline-block h-12 w-12 text-purple-500 stroke-current"
              />
            </div>
            <div className="absolute right-0 bottom-0 z-10 text-pink-500">
              <NextImage
                alt=""
                width={100}
                height={100}
                className="inline-block h-12 w-12"
                src="/images/corner_bottom_right.svg"
              />
            </div>
            <Navigation />
            {children}
          </div>
        </section>
      </body>
    </html>
  );
}
