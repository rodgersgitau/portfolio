"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import useMousePosition from "@/hooks/useMousePosition";

export default function Backdrop() {
  const { x, y } = useMousePosition();

  const size = 300;

  return (
    <motion.div
      initial="initial"
      animate="animate"
      className="fixed inset-0 cursor-pointer -z-50 blur-2xl"
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
        className="absolute inset-0 duration-1000 cursor-pointer bg-accent/20 dark:bg-foreground/10"
        style={{
          maskRepeat: "no-repeat",
          maskImage: "url('/images/mask.svg')",
        }}
        animate={{
          WebkitMaskSize: `${size}px`,
          WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
      />
    </motion.div>
  );
}
