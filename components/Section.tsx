"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

import AnimatedWords from "../motion/components/AnimatedWords";

import { riseWithFade } from "../motion/animations";
import { cn } from "../utils";

function SectionHeading({ title }: { title: string }) {
  return (
    <motion.div variants={riseWithFade} className="flex items-center gap-6">
      <span className="w-24 h-0.5 bg-current opacity-80" />
      <h1 className="text-3xl text-current capitalize">
        <AnimatedWords title={title} />
      </h1>
      <span className="w-24 h-0.5 bg-current opacity-80" />
    </motion.div>
  );
}

function SectionDescription({ description }: { description: string }) {
  return <h4 className="font-medium leading-6 tracking-[4]">{description}</h4>;
}

interface SectionProps {
  children?: ReactNode;
  className?: string;
  description?: string;
  title: string;
}

function Section({ children, className, description, title }: SectionProps) {
  return (
    <motion.section
      className={cn("relative h-max min-h-[50vh]", className)}
      initial="initial"
      animate="animate"
    >
      <motion.div
        variants={riseWithFade}
        className={"w-full mx-auto flex flex-col items-center gap-8"}
      >
        <SectionHeading title={title} />
        {description && <SectionDescription description={description} />}
        <motion.div className="flex-1" variants={riseWithFade}>
          {children}
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

export { Section, SectionDescription, SectionHeading };

export default Section;
