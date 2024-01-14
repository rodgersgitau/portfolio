"use client";

import { type ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const variants = {
  initial: { y: 100, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      delay: 0.6,
      type: "spring",
      stiffness: 200,
    },
  },
};

export default function Template({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={variants}
      className={cn(
        "flex-grow flex h-full py-10 md:py-12",
        "relative container w-full max-w-screen-xl mx-auto"
      )}
    >
      {children}
    </motion.div>
  );
}
