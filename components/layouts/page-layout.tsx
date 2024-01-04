"use client";

import type { ReactNode } from "react";

import { motion } from "framer-motion";

import { Navbar } from "@/components/nav";

import { riseWithFade } from "@/motion/animations";

export default function PageLayout({ children }: { children: ReactNode }) {
  return (
    <motion.section
      initial={{ y: 100, opacity: 0 }}
      animate={{
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.8,
          delay: 0.6,
          type: "spring",
          stiffness: 200,
        },
      }}
      className="relative flex flex-col flex-grow w-full h-full py-10 md:flex-row md:py-16"
    >
      <Navbar />
      <motion.div
        variants={riseWithFade}
        className="flex flex-col flex-grow pt-14 md:pt-0 md:pl-48"
      >
        {children}
      </motion.div>
    </motion.section>
  );
}
