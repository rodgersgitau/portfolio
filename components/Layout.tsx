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
      <main className="w-full h-full min-h-screen p-0 m-0 text-black bg-base min-w-screen dark:bg-black dark:text-base ">
        <section className="relative w-full h-full p-8 bg-right bg-no-repeat bg-ascii-pattern-dark dark:bg-ascii-pattern bg-blend-overlay">
          <div className="relative flex flex-col w-full h-full gap-10 mx-auto lg:container md:px-8">
            <div className="absolute z-10 hidden md:block -top-4 -left-4 ">
              <NextImage
                alt=""
                width={100}
                height={100}
                src="/images/corner_top_left.svg"
                className="inline-block w-12 h-12"
              />
            </div>
            <div className="absolute z-10 hidden md:block -bottom-4 -right-4">
              <NextImage
                alt=""
                width={100}
                height={100}
                src="/images/corner_bottom_right.svg"
                className="inline-block w-12 h-12"
              />
            </div>

            <Navigation />

            <div className="flex-1 w-full h-full p-8">{children}</div>

            <footer className="flex flex-col w-full gap-8 px-8 text-black md:flex-row md:items-center md:gap-20 dark:text-base">
              <p>&copy; Copyright {new Date().getFullYear()}</p>
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
