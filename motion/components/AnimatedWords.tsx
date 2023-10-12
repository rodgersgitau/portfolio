import { FC } from "react";
import { motion } from "framer-motion";

import { staggerChildren, wordAnimation } from "../animations";

interface AnimatedWordsProps {
  title: string;
}

const AnimatedWords: FC<AnimatedWordsProps> = ({ title }) => {
  return (
    <motion.span variants={staggerChildren}>
      {title.split(" ").map((word, idx) => (
        <div key={`word-${idx}`} className="inline-block overflow-hidden">
          <motion.span
            className="inline-block overflow-hidden"
            variants={wordAnimation}
          >
            {word + "\u00A0"}
          </motion.span>
        </div>
      ))}
    </motion.span>
  );
};
export default AnimatedWords;
