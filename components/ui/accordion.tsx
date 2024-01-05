"use client";

import { type ReactNode } from "react";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowBigDownIcon, ArrowBigUpIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface AccordionProps {
  index: number;
  title: string;
  children: ReactNode;
  className?: string;
}

const Accordion = ({ index, title, children, className }: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.div
        initial={false}
        animate={{
          transition: {
            duration: 0.8,
            type: "spring",
            stiffness: 200,
            delay: 0.1 * index,
          },
        }}
        onClick={() => setIsOpen((prev) => !prev)}
        className={cn(
          "flex items-center justify-between p-6 cursor-pointer transition-all font-medium border-y border-foreground/40",
          isOpen ? "bg-secondary/10 bg-opacity-10" : "bg-transparent",
          className
        )}
      >
        <h3 className="text-sm font-semibold leading-loose tracking-tight sm:text-base md:text-lg xl:text-xl md:tracking-wide">
          {title}
        </h3>
        <div className="w-max">
          {isOpen ? (
            <ArrowBigUpIcon className="w-6 h-6" />
          ) : (
            <ArrowBigDownIcon className="w-6 h-6" />
          )}
        </div>
      </motion.div>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.section
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: {
                opacity: 1,
                height: "max-content",
              },
              collapsed: {
                opacity: 0,
                height: 0,
              },
            }}
            transition={{
              duration: 0.4,
              ease: [0.04, 0.62, 0.23, 0.98],
            }}
            className="bg-background"
          >
            <div className="grid items-center gap-8 p-6">{children}</div>
          </motion.section>
        )}
      </AnimatePresence>
    </>
  );
};

export default Accordion;
