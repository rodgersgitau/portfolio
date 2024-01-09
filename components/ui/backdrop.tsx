"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

import { dropWithFade } from "@/components/motion";
import useMousePosition from "@/hooks/useMousePosition";

export default function Backdrop() {
  const { x, y } = useMousePosition();

  const size = 400;

  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={dropWithFade}
      className="fixed inset-0 cursor-pointer -z-50"
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

      <motion.div
        className="absolute z-0 inset-0 !cursor-pointer bg-secondary/10 blur-lg"
        style={{
          maskImage: "url('/images/mask.svg')",
          maskRepeat: "no-repeat",
          maskSize: "400px",
        }}
        animate={{
          WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
          WebkitMaskSize: `${size}px`,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
      />

      <div className="absolute inset-0 z-10 opacity-50 bg-background/20 blur-lg" />
    </motion.div>
  );
}
