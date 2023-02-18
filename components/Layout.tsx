"use client";

import { ThemeProvider } from "next-themes";
import NextImage from "next/image";
import { FC, ReactNode, useEffect, useState } from "react";
import { FaEnvelopeSquare, FaPhoneSquareAlt } from "react-icons/fa";

import { Navigation } from "../components";

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
      <main className="h-full min-h-screen p-0 m-0 overflow-x-hidden overflow-y-auto text-black min-w-screen dark:bg-black dark:text-brightGray ">
        <section className="relative w-full h-full p-8 bg-right bg-no-repeat bg-ascii-pattern-dark dark:bg-ascii-pattern bg-blend-overlay">
          <div className="container relative flex flex-col h-full gap-10 px-2 mx-auto md:px-8">
            <div className="absolute z-10 hidden md:block -top-4 -left-4 ">
              <NextImage
                alt=""
                width={100}
                height={100}
                src="/images/corner_top_left.svg"
                className="inline-block w-12 h-12 text-blue-500 fill-current dark:text-pink-600"
              />
            </div>
            <div className="absolute z-10 hidden text-pink-600  md:block -bottom-4 -right-4">
              <NextImage
                alt=""
                width={100}
                height={100}
                src="/images/corner_bottom_right.svg"
                className="inline-block w-12 h-12 text-blue-500 fill-current dark:text-pink-600"
              />
            </div>

            <Navigation />

            <div className="flex-1 w-full h-full p-8 text-black bg-whitesmoke dark:bg-black/25 dark:text-brightGray">
              {children}
            </div>

            <footer className="flex flex-col w-full gap-8 text-black md:flex-row md:items-center md:gap-20 dark:text-brightGray">
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
