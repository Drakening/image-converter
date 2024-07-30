import React, { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import styles from "./flips.module.css";

const Flip = ({ words, duration = 3000, extraDisplayTime = 5000 }) => {
  const [currentSentence, setCurrentSentence] = useState(words.join(" "));
  const [isAnimating, setIsAnimating] = useState(false);

  const startAnimation = useCallback(() => {
    setCurrentSentence(prev => {
      const nextSentence = words[(words.indexOf(prev) + 1) % words.length];
      return nextSentence;
    });
    setIsAnimating(true);
  }, [words]);

  useEffect(() => {
    if (!isAnimating) {
      const timer = setTimeout(() => {
        startAnimation();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [isAnimating, duration, startAnimation]);

  useEffect(() => {
    const displayTime = duration + extraDisplayTime;
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, displayTime);
    return () => clearTimeout(timer);
  }, [duration, extraDisplayTime]);

  return (
    <AnimatePresence
      onExitComplete={() => {
        setIsAnimating(false);
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 10 }}
        exit={{
          opacity: 0,
          y: 20,
          filter: "blur(8px)",
          scale: 1,
          position: "absolute",
        }}
        className={styles.flipWords}
        key={currentSentence}
      >
        {currentSentence.split("").map((letter, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ delay: index * 0.05, duration: 0.4 }}
            className={styles.letter}
          >
            {letter}
          </motion.span>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};

export default Flip;
