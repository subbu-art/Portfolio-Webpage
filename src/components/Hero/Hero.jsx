import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hey, I'm Sri Phani</h1>
        <p className={styles.description}>
        A tech alchemist specializing in Python, Django, LLMs, and ML algorithms. With 4+ years of experience, I craft powerful AI-Cloud synergies for impactful solutions.
        </p>
        <a href="mailto:subbu27498@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
