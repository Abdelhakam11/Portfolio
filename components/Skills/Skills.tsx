"use client";

import { motion } from "framer-motion";
import { skillCategories } from "@/data/skills";
import styles from "./Skills.module.scss";

const EASE = [0.16, 1, 0.3, 1] as const;

function Skills() {
  return (
    <section className={styles.skills}>
      <div className={styles.container}>

        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: EASE }}
          viewport={{ once: true, amount: 0.15 }}
        >
          <span className={styles.sectionLabel}>Expertise</span>
          <h2>Skills &amp; Technologies</h2>
          <p className={styles.sub}>
            Frontend-focused, with a deep understanding of modern tooling,
            accessible design, and performance-first development.
          </p>
        </motion.div>

        <div className={styles.list}>
          {skillCategories.map((cat, catIdx) => (
            <motion.div
              key={cat.num}
              className={styles.categoryRow}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: EASE, delay: catIdx * 0.08 }}
              viewport={{ once: true, amount: 0.1 }}
            >
              <div className={styles.catMeta}>
                <span className={styles.catNum}>{cat.num}</span>
                <span className={styles.catTitle}>{cat.title}</span>
              </div>

              <div className={styles.pills}>
                {cat.skills.map((skill, si) => (
                  <motion.div
                    key={skill.name}
                    className={styles.pill}
                    style={{ "--skill-color": skill.color } as React.CSSProperties}
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.35, ease: EASE, delay: catIdx * 0.06 + si * 0.04 }}
                    viewport={{ once: true, amount: 0.05 }}
                    whileHover={{ y: -3, transition: { duration: 0.15 } }}
                  >
                    <skill.icon size={16} />
                    <span>{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;
