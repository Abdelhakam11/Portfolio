"use client";

import { Fragment } from "react";
import { motion } from "framer-motion";
import { Download, Mail } from "lucide-react";
import Image from "next/image";
import { personal } from "@/data/personal";
import { withBase } from "@/utils/path";
import styles from "./Hero.module.scss";

const EASE = [0.16, 1, 0.3, 1] as const;

function Hero() {
  return (
    <section className={styles.hero}>

      <div className={styles.container}>

        {/* ── Left: photo + name ───────────────────────── */}
        <motion.div
          className={styles.nameCol}
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.85, ease: EASE }}
        >
          <div className={styles.photoWrap}>
            <Image
              src={withBase(personal.avatar)}
              alt={personal.name.full}
              width={200}
              height={200}
              className={styles.photo}
              priority
            />
          </div>

          <h1 className={styles.name}>
            <span className={styles.nameFirst}>{personal.name.first}</span>
            <span className={styles.nameLast}>{personal.name.last}</span>
          </h1>

          <div className={styles.nameLine} />
        </motion.div>

        {/* ── Right: info ──────────────────────────────── */}
        <div className={styles.infoCol}>

          {personal.available && (
            <motion.div
              className={styles.badge}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: EASE, delay: 0.25 }}
            >
              <span className={styles.dot} />
              {personal.availableText}
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.38 }}
          >
            <p className={styles.role}>{personal.role}</p>
            <p className={styles.location}>{personal.locationDetail}</p>
          </motion.div>

          <motion.p
            className={styles.bio}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.5 }}
          >
            {personal.bio}
          </motion.p>

          <motion.div
            className={styles.ctas}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.62 }}
          >
            <a
              href={personal.cv}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btnPrimary}
            >
              <Download size={15} />
              Download CV
            </a>
            <a href={`mailto:${personal.email}`} className={styles.btnSecondary}>
              <Mail size={15} />
              Hire Me
            </a>
          </motion.div>

          <motion.div
            className={styles.stats}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.75 }}
          >
            {personal.stats.map((s, i) => (
              <Fragment key={s.label}>
                {i > 0 && <span className={styles.statSep} />}
                <div className={styles.stat}>
                  <span className={styles.statNum}>{s.value}</span>
                  <span className={styles.statLabel}>{s.label}</span>
                </div>
              </Fragment>
            ))}
          </motion.div>

        </div>
      </div>

      {/* ── Tech marquee ──────────────────────────────── */}
      <motion.div
        className={styles.marqueeWrapper}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        aria-hidden
      >
        <div className={styles.marqueeTrack}>
          {personal.techStack.map((tech, i) => (
            <span key={i} className={styles.marqueeItem}>
              <span className={styles.marqueeDot}>◆</span>
              {tech}
            </span>
          ))}
        </div>
      </motion.div>

    </section>
  );
}

export default Hero;
