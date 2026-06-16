"use client";

import { motion } from "framer-motion";
import {
  ArrowLeft,
  ExternalLink,
  Github,
  Calendar,
  Clock,
  User,
  Tag,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { use, useState } from "react";
import { getProjectById } from "@/data/projects";
import ImageModal from "@/components/ImageModal/ImageModal";
import styles from "./page.module.scss";

interface ProjectPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const resolvedParams = use(params);
  const project = getProjectById(parseInt(resolvedParams.id));
  const [modalImage, setModalImage] = useState<{
    src: string;
    alt: string;
  } | null>(null);

  if (!project) {
    notFound();
  }

  const openModal = (src: string, alt: string) => {
    setModalImage({ src, alt });
  };

  const closeModal = () => {
    setModalImage(null);
  };

  return (
    <div className={styles.projectPage}>
      <div className={styles.container}>
        <motion.div
          className={styles.backButton}
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link href="/projects" className={styles.backLink}>
            <ArrowLeft size={20} />
            Back to Projects
          </Link>
        </motion.div>

        <motion.div
          className={styles.projectHeader}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className={styles.projectMeta}>
            <span className={styles.category}>
              <Tag size={16} />
              {project.category || "Project"}
            </span>
            <span className={styles.year}>
              <Calendar size={16} />
              {project.year || "2024"}
            </span>
            <span className={styles.duration}>
              <Clock size={16} />
              {project.duration || "N/A"}
            </span>
            <span className={styles.client}>
              <User size={16} />
              {project.client || "Personal"}
            </span>
          </div>

          <h1 className={styles.title}>{project.title}</h1>
          <p className={styles.subtitle}>{project.subtitle}</p>
          <p className={styles.description}>
            {project.longDescription || project.description}
          </p>

          {project.links && (
            <div className={styles.projectLinks}>
              {project.links.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.projectLink}
                >
                  <Github size={20} />
                  View Code
                </a>
              )}
              {project.links.live && (
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.projectLink}
                >
                  <ExternalLink size={20} />
                  Live Demo
                </a>
              )}
              {project.links.demo && (
                <a
                  href={project.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.projectLink}
                >
                  <ExternalLink size={20} />
                  Demo
                </a>
              )}
            </div>
          )}
        </motion.div>

        <motion.div
          className={styles.projectImages}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className={styles.mainImage}>
            <Image
              src={project.image}
              alt={project.title}
              width={1200}
              height={600}
              sizes="(max-width: 767px) 95vw, (max-width: 1199px) 85vw, 75vw"
              className={styles.image}
              onClick={() => openModal(project.image, project.title)}
              style={{ cursor: "pointer" }}
              priority
            />
          </div>
          {project.images && project.images.length >= 1 && (
            <div className={styles.thumbnails}>
              {project.images.map((image, index) => (
                <div key={index} className={styles.thumbnail}>
                  <Image
                    src={image}
                    alt={`${project.title} - Screenshot ${index + 1}`}
                    width={400}
                    height={300}
                    sizes="(max-width: 767px) 45vw, (max-width: 1199px) 30vw, 25vw"
                    className={styles.thumbnailImage}
                    onClick={() =>
                      openModal(
                        image,
                        `${project.title} - Screenshot ${index + 1}`
                      )
                    }
                    style={{ cursor: "pointer" }}
                  />
                </div>
              ))}
            </div>
          )}
        </motion.div>

        <div className={styles.projectDetails}>
          <motion.div
            className={styles.detailSection}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h2>Technologies Used</h2>
            <div className={styles.techList}>
              {project.tags.map((tag, index) => (
                <span key={index} className={styles.techTag}>
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {project.technologies && (
            <motion.div
              className={styles.detailSection}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <h2>Technical Stack</h2>
              <div className={styles.technologies}>
                {project.technologies.frontend && (
                  <div className={styles.techCategory}>
                    <h3>Frontend</h3>
                    <div className={styles.techList}>
                      {project.technologies.frontend.map((tech) => (
                        <span key={tech} className={styles.techTag}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                {project.technologies.backend && (
                  <div className={styles.techCategory}>
                    <h3>Backend</h3>
                    <div className={styles.techList}>
                      {project.technologies.backend.map((tech) => (
                        <span key={tech} className={styles.techTag}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                {project.technologies.tools && (
                  <div className={styles.techCategory}>
                    <h3>Tools & Services</h3>
                    <div className={styles.techList}>
                      {project.technologies.tools.map((tech) => (
                        <span key={tech} className={styles.techTag}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          )}

          {project.features && (
            <motion.div
              className={styles.detailSection}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              <h2>Key Features</h2>
              <ul className={styles.featuresList}>
                {project.features.map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 1.0 + index * 0.1 }}
                  >
                    {feature}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}

          {project.challenges && project.solutions && (
            <motion.div
              className={styles.detailSection}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <h2>Challenges & Solutions</h2>
              <div className={styles.challengesSolutions}>
                <div className={styles.challenges}>
                  <h3>Challenges</h3>
                  <ul>
                    {project.challenges.map((challenge) => (
                      <li key={challenge}>{challenge}</li>
                    ))}
                  </ul>
                </div>
                <div className={styles.solutions}>
                  <h3>Solutions</h3>
                  <ul>
                    {project.solutions.map((solution) => (
                      <li key={solution}>{solution}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          )}
        </div>

        <motion.div
          className={styles.nextProject}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          <h2>More Projects</h2>
          <Link href="/projects" className={styles.viewAllProjects}>
            View All Projects
          </Link>
        </motion.div>
      </div>

      {modalImage && (
        <ImageModal
          isOpen={!!modalImage}
          onClose={closeModal}
          src={modalImage.src}
          alt={modalImage.alt}
        />
      )}
    </div>
  );
}
