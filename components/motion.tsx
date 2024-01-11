"use client";

import { FC } from "react";
import { motion } from "framer-motion";

export const staggerChildren = {
  animate: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.1,
    },
  },
};

export const easeChildren = {
  initial: {
    y: 100,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      ease: [0.6, 0.01, 0.05, 0.95],
      duration: 1,
    },
  },
};

export const wordAnimation = {
  initial: {
    y: 100,
  },
  animate: {
    y: 0,
    transition: {
      ease: [0.6, 0.01, 0.05, 0.95],
      duration: 1,
    },
  },
};

export const dropWithFade = {
  initial: {
    y: -100,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      ease: [0.6, 0.01, 0.05, 0.95],
      duration: 0.7,
    },
  },
};

export const riseWithFade = {
  initial: {
    y: 100,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      ease: [0.6, 0.01, 0.05, 0.95],
      duration: 0.7,
    },
  },
};

interface AnimatedWordsProps {
  words: string;
  className?: string;
}

export const AnimatedWords: FC<AnimatedWordsProps> = ({ words, className }) => {
  return (
    <motion.span
      initial="initial"
      animate="animate"
      className={className}
      variants={staggerChildren}
    >
      {words.split(" ").map((words, idx) => (
        <span key={`words-${idx}`} className="inline-block overflow-hidden">
          <motion.span
            className="inline-block overflow-hidden"
            variants={wordAnimation}
          >
            {words + "\u00A0"}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
};