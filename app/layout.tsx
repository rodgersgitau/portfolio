import React from "react";
import NextImage from "next/image";

import "../styles/globals.css";
import { Navigation } from "../components";
import { FaEnvelopeSquare, FaPhone, FaPhoneSquareAlt } from "react-icons/fa";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body className="m-0 p-0 overflow-x-hidden overflow-y-auto bg-[#1d1d20] text-gray-100">
        <section className="h-full min-h-screen w-screen p-8 bg-ascii-pattern bg-no-repeat bg-right-bottom  relative flex flex-col gap-8">
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
          <footer className="container mx-auto flex flex-col md:flex-row md:items-center gap-20 text-slate-200">
            <p>&copy; Copyright 2022</p>
            <div className="flex items-center gap-1">
              <FaPhoneSquareAlt fontSize="1.25rem" />
              <span>+254 759085920</span>
            </div>
            <div className="flex items-center gap-1">
              <FaEnvelopeSquare fontSize="1.25rem" />
              <span>rodgersgitau@gmail.com</span>
            </div>
          </footer>
        </section>
      </body>
    </html>
  );
}
