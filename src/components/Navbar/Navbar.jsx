import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const downloadResume = () => {
    // Create a temporary anchor element
    const link = document.createElement("a");
    link.href = "/assets/nav/resume.pdf"; // Update with the actual file path or URL
    link.download = "SriPhaniSubramanyamResume.pdf"; // Set the desired download file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">
        Sri Phani Subramanyam
      </a>
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={
            menuOpen
              ? getImageUrl("nav/closeIcon.png")
              : getImageUrl("nav/menuIcon.png")
          }
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
          <button className={styles.resumeBtn} onClick={downloadResume}>
              Resume
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};
