"use client";

import { useRef } from "react";
import { useTransform, useSpring, useMotionValue, motion } from "framer-motion";
import { ArrowRightIcon } from "lucide-react";

interface Props {
  index?: number;
  href: string;
  title: string;
  description: string;
  imgSrc: string;
}

export default function ProjectCard({
  title,
  imgSrc,
  description,
  href,
}: Props) {
  const containRef = useRef<HTMLAnchorElement | null>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const top = useTransform(mouseYSpring, [0.5, -0.5], ["40%", "60%"]);
  const left = useTransform(mouseXSpring, [0.5, -0.5], ["60%", "70%"]);

  const handleMouseMove = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    const rect = containRef.current!.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  return (
    <motion.a
      href={href}
      ref={containRef}
      onMouseMove={handleMouseMove}
      initial="initial"
      whileHover="whileHover"
      className="relative flex items-center justify-between py-4 transition-colors duration-500 border-b-2 group border-foreground/50 hover:border-accent/50"
    >
      <div className="grid items-center max-w-xl gap-4">
        <motion.span
          variants={{
            initial: { x: 0 },
            whileHover: { x: -16 },
          }}
          transition={{
            type: "spring",
            staggerChildren: 0.075,
            delayChildren: 0.25,
          }}
          className="relative z-10 block text-lg font-medium transition-colors duration-500 text-foreground group-hover:text-accent md:text-2xl"
        >
          <span className="sr-only">{title}</span>
          {title.split("").map((word, idx) => (
            <span className="inline-block font-sans" key={`word-${idx}`}>
              {word.split("").map((char, i) => (
                <motion.span
                  variants={{
                    initial: { x: 0 },
                    whileHover: { x: 16 },
                  }}
                  key={`char-${idx}`}
                  className="inline-block"
                  transition={{ type: "spring" }}
                >
                  {char}
                </motion.span>
              ))}
              <span className="inline-block">&nbsp;</span>
            </span>
          ))}
        </motion.span>
        <span className="relative z-10 block text-base leading-relaxed transition-colors duration-500 text-foreground group-hover:text-accent">
          {description}
        </span>
      </div>

      <motion.img
        style={{
          top,
          left,
          translateX: "-50%",
          translateY: "-50%",
        }}
        variants={{
          initial: { scale: 0 },
          whileHover: { scale: 1 },
        }}
        transition={{ type: "spring" }}
        src={imgSrc}
        alt={`Image representing a link for  the project ${title}`}
        className="absolute z-0 object-cover w-48 h-24 rounded-lg md:h-48 md:w-64"
      />

      <motion.div
        variants={{
          initial: {
            x: "25%",
            opacity: 0,
          },
          whileHover: {
            x: "0%",
            opacity: 1,
          },
        }}
        transition={{ type: "spring" }}
        className="relative z-10 p-4"
      >
        <ArrowRightIcon className="text-5xl text-foreground group-hover:text-accent" />
      </motion.div>
    </motion.a>
  );
}
