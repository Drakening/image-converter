import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';
import styles from './Navbar.module.css';

function Navbar() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to="/" className={`${styles.link} lg:text-xl`}>
          FileFlexConverter
        </Link>
        <div className="flex flex-row items-center h-full">
          <Link to="/about" className={styles.textLink}>
            About
          </Link>

          <Link
            id="github"
            to="https://github.com/rahmadnasutionn/file-flex-converter"
            className={styles.iconLink}
          >
            <FaGithub className={styles.icon} />
            <span className={styles.screenReaderOnly}>Github Icon</span>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
