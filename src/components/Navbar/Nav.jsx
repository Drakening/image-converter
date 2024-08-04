import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import styles from './Nav.module.css';
import { FiHome, FiInfo, FiMail } from 'react-icons/fi';

const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const controls = useAnimation();

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    const visible = prevScrollPos > currentScrollPos || currentScrollPos < 10;

    setVisible(visible);
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

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
      <a className={`${styles.navLink} ${styles.navLinkDark}`} href="/">
        <span className="block sm:hidden">
          <FiHome className={styles.icon} />
        </span>
        <span className={`${styles.navText} sm:block`}>Home</span>
      </a>
      <a className={`${styles.navLink} ${styles.navLinkDark}`} href="/about">
        <span className="block sm:hidden">
          <FiInfo className={styles.icon} />
        </span>
        <span className={`${styles.navText} sm:block`}>About</span>
      </a>
      <a className={`${styles.navLink} ${styles.navLinkDark}`} href="/contact">
        <span className="block sm:hidden">
          <FiMail className={styles.icon} />
        </span>
        <span className={`${styles.navText} sm:block`}>Contact</span>
      </a>
      <button>
        <span>Login</span>
      </button>
    </motion.div>
  );
};

export default Navbar;
