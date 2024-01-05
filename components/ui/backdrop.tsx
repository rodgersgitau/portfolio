"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { dropWithFade } from "@/components/motion";

export default function Backdrop() {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={dropWithFade}
      className="fixed inset-0 -z-50 bg-gradient"
    >
      <Image
        fill
        src="/images/ascii-pattern.svg"
        alt="ascii pattern in background"
        className="block object-cover object-top dark:hidden"
      />
      <Image
        fill
        src="/images/ascii-pattern-dark.svg"
        alt="ascii pattern in background"
        className="hidden object-cover object-top dark:block"
      />
    </motion.div>
  );
}
