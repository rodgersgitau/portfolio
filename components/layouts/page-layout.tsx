"use client";

import type { ReactNode } from "react";

import { motion } from "framer-motion";

import { Navbar } from "@/components/nav";

import { riseWithFade, staggerChildren } from "@/components/motion";
import { cn } from "@/lib/utils";

export default function PageLayout({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
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
      className="relative flex flex-col flex-grow w-full h-full md:flex-row"
    >
      <Navbar />
      <motion.div
        variants={staggerChildren}
        className={cn(
          "flex flex-col flex-grow bg-background/90",
          " py-20 pl-0 md:py-16 md:pl-16 md:max-w-screen-lg md:ml-auto"
        )}
      >
        {children}
      </motion.div>
    </motion.section>
  );
}
