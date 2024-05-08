import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/aiIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>AI Engineer</h3>
              <p>
              I'm a powerhouse in AI, mastering LLMs, GNNs, and an arsenal of ML and DL algorithms.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
              Extensive Python proficiency in Django and Flask development, API optimization, and SQL mastery.
                and APIs
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cloudIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Cloud Engineer</h3>
              <p>
              Highly proficient in cloud platforms, expert in Docker and Kubernetes for deployment, and skilled in crafting robust serverless architectures.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
