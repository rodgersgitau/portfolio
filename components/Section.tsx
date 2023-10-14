"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";
import { InView } from "react-intersection-observer";

import { riseWithFade } from "../motion/animations";
import AnimatedWords from "../motion/components/AnimatedWords";

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
  title?: string;
}

function Section({ children, className, description, title }: SectionProps) {
  return (
    <InView threshold={0.25}>
      {({ ref, inView }) => (
        <motion.section
          ref={ref}
          initial={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          animate={inView ? { opacity: 1 } : { opacity: 0.25 }}
          className={cn("relative h-max min-h-[50vh]", className)}
        >
          <motion.div
            variants={riseWithFade}
            className={"w-full mx-auto flex flex-col items-center gap-8"}
          >
            {title && <SectionHeading title={title} />}
            {description && <SectionDescription description={description} />}
            <div className="flex-1">{children}</div>
          </motion.div>
        </motion.section>
      )}
    </InView>
  );
}

export { Section, SectionDescription, SectionHeading };

export default Section;
