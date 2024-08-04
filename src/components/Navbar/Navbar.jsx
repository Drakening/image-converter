import React from "react";

import styles from "./Navbar.module.css";

export function Navbar() {
  return (
    <div className={styles.navbarContainer}>
      <nav className={styles.navbarMenu}>
        <div className={styles.linksWrapper}>
          <ul className={styles.link}>
              <li><a href="#about">About</a></li>
              <li><a href="#features">Features</a></li>
              <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
