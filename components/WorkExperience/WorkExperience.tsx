"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { workExperience } from "@/data/experience";
import styles from "./WorkExperience.module.scss";

const EASE = [0.16, 1, 0.3, 1] as const;

function WorkExperience() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>

        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: EASE }}
          viewport={{ once: true, amount: 0.15 }}
        >
          <span className={styles.sectionLabel}>Career Path</span>
          <h2>Work Experience</h2>
        </motion.div>

        <div className={styles.grid}>
          {workExperience.map((exp, i) => (
            <motion.div
              key={exp.id}
              className={styles.card}
              style={{ "--card-accent": exp.color } as React.CSSProperties}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: EASE, delay: i * 0.08 }}
              viewport={{ once: true, amount: 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.2, ease: "easeOut" } }}
            >
              <div className={styles.cardTop}>
                <span className={styles.cardNum}>{exp.num}</span>
                <div className={styles.cardRight}>
                  {exp.current && (
                    <span className={styles.currentBadge}>Now</span>
                  )}
                  <div className={styles.logoWrap}>
                    <Image
                      src={exp.logo}
                      alt={`${exp.company} logo`}
                      width={90}
                      height={28}
                      className={styles.logo}
                      unoptimized
                    />
                  </div>
                </div>
              </div>

              <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>{exp.title}</h3>
                <p className={styles.cardCompany}>{exp.company}</p>
                <p className={styles.cardMeta}>{exp.location} · {exp.period}</p>
                <p className={styles.cardDesc}>{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default WorkExperience;
