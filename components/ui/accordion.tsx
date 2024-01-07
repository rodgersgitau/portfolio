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
    <motion.div
      initial={false}
      animate={{
        transition: {
          duration: 0.8,
          type: "spring",
          stiffness: 200,
          delay: 0.6,
        },
      }}
      onClick={() => setIsOpen((prev) => !prev)}
      className={cn(
        "grid gap-4 p-6 rounded cursor-pointer transition-all border border-foreground/10",
        isOpen && "bg-opacity-10",
        className
      )}
    >
      <div className="flex-1 flex items-center justify-between">
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
      </div>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ y: -20, opacity: 0.2 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{
              y: -20,
              opacity: 0.2,
              transition: { duration: 0.2, type: "spring" },
            }}
            transition={{
              duration: 0.15,
              type: "spring",
            }}
            className="m-0 px-0 py-4 grid border-t border-foreground/10 items-center gap-8 text-foreground/80"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Accordion;
