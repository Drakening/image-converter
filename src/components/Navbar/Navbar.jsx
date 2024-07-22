import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import styles from "./Navbar.module.css";

export const Navbar = ({ navItems, className }) => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current - scrollYProgress.getPrevious();

      if (scrollYProgress.get() < 0.05) {
        setVisible(false);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={`${styles.floatingNav} ${
          className ? className : ""
        } ${styles.floatingNavDark}`}
      >
        {navItems.map((navItem, idx) => (
          <a
            key={`link=${idx}`}
            href={navItem.link}
            className={`${styles.navLink} ${
              styles.navLinkDark
            } ${styles.navLinkHover} ${styles.navLinkHoverDark}`}
          >
            <span className={styles.iconHidden}>{navItem.icon}</span>
            <span className={styles.textHidden}>{navItem.name}</span>
          </a>
        ))}
        <button className={`${styles.button} ${styles.buttonDark}`}>
          <span>Login</span>
          <span className={styles.buttonGradient} />
        </button>
      </motion.div>
    </AnimatePresence>
  );
};
