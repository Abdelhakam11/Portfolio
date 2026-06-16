"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { getFeaturedProjects } from "@/data/projects";
import { withBase } from "@/utils/path";
import styles from "./Projects.module.scss";

const EASE = [0.16, 1, 0.3, 1] as const;
const projects = getFeaturedProjects();

function Projects() {
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
          <span className={styles.sectionLabel}>Work</span>
          <div className={styles.headerRow}>
            <h2>Featured Projects</h2>
            <Link href="/projects" className={styles.viewAllLink}>
              View all <ArrowUpRight size={15} />
            </Link>
          </div>
        </motion.div>

        <div className={styles.grid}>
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              className={`${styles.card} ${i === 0 ? styles.cardFeatured : ""}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: EASE, delay: (i % 2) * 0.07 }}
              viewport={{ once: true, amount: 0.08 }}
            >
              {/* Image */}
              <Link href={`/projects/${project.id}`} className={styles.cardImageWrap}>
                <Image
                  src={withBase(project.image)}
                  alt={project.title}
                  width={700}
                  height={420}
                  className={styles.cardImg}
                  unoptimized
                  priority={i === 0}
                />
                <div className={styles.imageOverlay}>
                  <span className={styles.overlayLabel}>
                    View Project <ArrowUpRight size={16} />
                  </span>
                </div>
              </Link>

              {/* Content */}
              <div className={styles.cardContent}>
                <div className={styles.cardTop}>
                  <span className={styles.cardCategory}>{project.category ?? "Frontend"}</span>
                  <div className={styles.cardLinks}>
                    {project.links?.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.iconLink}
                        title="GitHub"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Github size={16} />
                      </a>
                    )}
                    {project.links?.live && (
                      <a
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.iconLink}
                        title="Live Demo"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className={styles.cardTitle}>{project.title}</h3>
                <p className={styles.cardDesc}>{project.description}</p>

                <div className={styles.cardTags}>
                  {project.tags.slice(0, 4).map((tag) => (
                    <span key={tag} className={styles.tag}>{tag}</span>
                  ))}
                  {project.tags.length > 4 && (
                    <span className={styles.tagMore}>+{project.tags.length - 4}</span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;
