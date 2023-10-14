"use client";

import NextImage from "next/image";
import { motion } from "framer-motion";
import { ThemeProvider } from "next-themes";
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
      <motion.main
        initial="initial"
        animate="animate"
        className="relative w-full h-full min-h-screen text-black bg-base dark:bg-black dark:text-base"
      >
        <div className="absolute inset-0 z-50 h-full bg-right bg-repeat-y opacity-25 bg-ascii-pattern-dark dark:bg-ascii-pattern" />
        <div className="relative flex flex-col w-full h-full gap-10 p-8 mx-auto lg:container">
          <div className="absolute z-10 hidden md:block top-8 left-8 ">
            <NextImage
              alt=""
              width={100}
              height={100}
              src="/images/corner_top_left.svg"
              className="inline-block w-12 h-12"
            />
          </div>
          <div className="absolute z-10 hidden md:block bottom-8 right-8">
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
      </motion.main>
    </ThemeProvider>
  );
};
