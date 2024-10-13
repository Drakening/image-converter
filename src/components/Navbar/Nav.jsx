import React, { useState, useEffect, useCallback } from 'react';
import { motion, useAnimation } from 'framer-motion';
import styles from './Nav.module.css';
import { FiHome, FiInfo, FiMail } from 'react-icons/fi';
import { Link as ScrollLink } from 'react-scroll';

const Nav = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const controls = useAnimation();

  // Memoize handleScroll to prevent it from being a changing dependency
  const handleScroll = useCallback(() => {
    const currentScrollPos = window.pageYOffset;
    const visible = prevScrollPos > currentScrollPos || currentScrollPos < 10;

    setVisible(visible);
    setPrevScrollPos(currentScrollPos);
  }, [prevScrollPos]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  useEffect(() => {
    controls.start({
      opacity: visible ? 1 : 0,
      y: visible ? 0 : -50,
      transition: { duration: 0.3 },
    });
  }, [visible, controls]);

  return (
    <motion.div
      className={styles.navbar}
      initial={{ opacity: 1, y: 0 }}
      animate={controls}
    >
      <ScrollLink
        className={styles.navLink}
        to="home"
        smooth={true}
        duration={500}
      >
        <FiHome className={styles.icon} />
        <span className={styles.navText}>Home</span>
      </ScrollLink>

      <ScrollLink
        className={styles.navLink}
        to="about"
        smooth={true}
        duration={500}
      >
        <FiInfo className={styles.icon} />
        <span className={styles.navText}>About</span>
      </ScrollLink>

      <ScrollLink
        className={styles.navLink}
        to="contact"
        smooth={true}
        duration={500}
      >
        <FiMail className={styles.icon} />
        <span className={styles.navText}>Contact</span>
      </ScrollLink>

      <a
        className={styles.button}
        href="https://github.com/Drakening/image-converter"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span>Github</span>
      </a>
    </motion.div>
  );
};

export default Nav;
