import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./feature.module.css";

export const Feature = ({ items, className }) => {
  let [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className={`${styles.container} ${className || ""}`}>
      {items.map((item, idx) => (
        <div
          key={item.link}
          className={styles.item}
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className={styles.hoverBackground}
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
          </Card>
        </div>
      ))}
    </div>
  );
};

export const Card = ({ className, children }) => {
  return (
    <div className={`${styles.card} ${className || ""}`}>
      <div>
        <div>{children}</div>
      </div>
    </div>
  );
};

export const CardTitle = ({ className, children }) => {
  return (
    <h4 className={`${styles.cardTitle} ${className || ""}`}>{children}</h4>
  );
};

export const CardDescription = ({ className, children }) => {
  return (
    <p className={`${styles.cardDescription} ${className || ""}`}>{children}</p>
  );
};
