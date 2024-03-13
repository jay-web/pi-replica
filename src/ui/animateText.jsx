import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const defaultAnimation = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.3,
      duration: 0.5,
    },
  },
};
const AnimateText = ({ content }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5, once: true });

  return (
    <motion.div
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{ staggerChildren: 0.1 }}
      ref={ref}
    >
      {content.split(" ").map((word, index) => {
        return (
          <span className="inline-block" key={index}>
            {word.split("").map((char, index) => {
              return (
                <motion.span variants={defaultAnimation} key={index}>
                  {char}
                </motion.span>
              );
            })}
            <span className="inline-block">&nbsp;</span>
          </span>
        );
      })}
    </motion.div>
  );
};

export default AnimateText;
