"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Calendar, Tag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { projects } from "@/data/projects";
import styles from "./ProjectsShowcase.module.scss";

const projectsData = projects;

const categories = ["All", "Frontend"];

function ProjectsShowcase() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState(projectsData);

  useEffect(() => {
    if (selectedCategory === "All") {
      setFilteredProjects(projectsData);
    } else {
      setFilteredProjects(
        projectsData.filter((project) => project.category === selectedCategory)
      );
    }
  }, [selectedCategory]);

  return (
    <section className={styles.projectsShowcase}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>My Projects</h1>
          <p>A collection of projects showcasing my skills and creativity</p>
        </motion.div>

        <motion.div
          className={styles.filters}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              className={`${styles.filterButton} ${
                selectedCategory === category ? styles.active : ""
              }`}
              onClick={() => setSelectedCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        <motion.div
          className={styles.projectsGrid}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className={`${styles.projectCard} ${
                project.featured ? styles.featured : ""
              }`}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className={styles.imageContainer}>
                <Link href={`/projects/${project.id}`}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={250}
                    className={styles.projectImage}
                    style={{ cursor: "pointer" }}
                  />
                </Link>
                {project.links && (
                  <div className={styles.imageOverlay}>
                    <div className={styles.overlayButtons}>
                      {project.links.github && (
                        <motion.a
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.overlayButton}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Github size={20} />
                        </motion.a>
                      )}
                      {project.links.live && (
                        <motion.a
                          href={project.links.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.overlayButton}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <ExternalLink size={20} />
                        </motion.a>
                      )}
                    </div>
                  </div>
                )}
                {project.featured && (
                  <div className={styles.featuredBadge}>Featured</div>
                )}
              </div>

              <div className={styles.projectContent}>
                <div className={styles.projectMeta}>
                  <span className={styles.category}>
                    <Tag size={14} />
                    {project.category}
                  </span>
                  <span className={styles.year}>
                    <Calendar size={14} />
                    {project.year}
                  </span>
                </div>

                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectSubtitle}>{project.subtitle}</p>
                <p className={styles.projectDescription}>
                  {project.description}
                </p>

                <div className={styles.tags}>
                  {project.tags.slice(0, 4).map((tag) => (
                    <span key={tag} className={styles.tag}>
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 4 && (
                    <span className={styles.moreTagsIndicator}>
                      +{project.tags.length - 4}
                    </span>
                  )}
                </div>

                <div className={styles.projectLinks}>
                  <Link
                    href={`/projects/${project.id}`}
                    className={styles.viewProject}
                  >
                    View Details
                  </Link>
                  {project.links && (
                    <div className={styles.externalLinks}>
                      {project.links.github && (
                        <a
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.externalLink}
                        >
                          <Github size={16} />
                        </a>
                      )}
                      {project.links.live && (
                        <a
                          href={project.links.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.externalLink}
                        >
                          <ExternalLink size={16} />
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className={styles.cta}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h2>Interested in working together?</h2>
          <p>
            I&apos;m always open to discussing new opportunities and interesting
            projects.
          </p>
          <Link href="/contact" className={styles.ctaButton}>
            Get In Touch
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default ProjectsShowcase;
