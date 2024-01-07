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
    <motion.main
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
      className={cn(
        "relative flex-grow pt-20 pb-16 scroll-pt-20 scroll-pb-16",
        "grid container w-full max-w-screen-xl mx-auto h-full"
      )}
    >
      {children}
    </motion.main>
  );
}
