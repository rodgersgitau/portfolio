"use client";

import NextImage from "next/image";
import { ThemeProvider } from "next-themes";
import { FC, ReactNode, useEffect, useState } from "react";

import { Navigation } from "../components";
import { FaEnvelopeSquare, FaPhoneSquareAlt } from "react-icons/fa";

export interface LayoutProps {
  children: ReactNode;
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  const [showChild, setShowChild] = useState(false);

  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) {
    return null;
  }

  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <main className="min-h-screen min-w-screen m-0 p-0 overflow-x-hidden overflow-y-auto bg-whitesmoke text-black dark:bg-black dark:text-brightGray">
        <section className="w-full h-full p-8 md:bg-beehive-pattern dark:bg-ascii-pattern bg-no-repeat bg-right relative">
          <div className="container relative h-full mx-auto  px-2 md:px-8 flex flex-col gap-10">
            <div className="hidden md:block absolute -top-4 -left-4 z-10 ">
              <NextImage
                alt=""
                width={100}
                height={100}
                src="/images/corner_top_left.svg"
                className="inline-block h-12 w-12 text-blue-500 dark:text-pink-600 fill-current"
              />
            </div>
            <div className=" hidden md:block absolute -bottom-4 -right-4 z-10 text-pink-600">
              <NextImage
                alt=""
                width={100}
                height={100}
                src="/images/corner_bottom_right.svg"
                className="inline-block h-12 w-12 text-blue-500 dark:text-pink-600 fill-current"
              />
            </div>

            <Navigation />

            <div className="flex-1 h-full w-full p-8 bg-whitesmoke text-black dark:bg-black/25 dark:text-brightGray">
              {children}
            </div>

            <footer className="w-full flex flex-col md:flex-row md:items-center gap-8 md:gap-20 text-black dark:text-brightGray">
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
          </div>
        </section>
      </main>
    </ThemeProvider>
  );
};
