"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, FileText, Copy, CheckCheck } from "lucide-react";
import { useState } from "react";
import { personal } from "@/data/personal";
import styles from "./Contact.module.scss";

const socialLinks = [
  { icon: Github,   href: personal.social.github,   label: "GitHub"   },
  { icon: Linkedin, href: personal.social.linkedin,  label: "LinkedIn" },
  { icon: FileText, href: personal.cv,               label: "Resume"   },
];

function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className={styles.contact}>
      <div className={styles.container}>

        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className={styles.sectionLabel}>Let&apos;s Connect</span>
          <h2>Get In Touch</h2>
          <p className={styles.headerDescription}>
            I&apos;m currently open to new opportunities. Whether you have a
            question or just want to say hi, my inbox is always open.
          </p>
        </motion.div>

        <motion.div
          className={styles.contactCard}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className={styles.emailRow}>
            <motion.a
              href={`mailto:${personal.email}`}
              className={styles.emailButton}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <Mail size={20} />
              <span>{personal.email}</span>
            </motion.a>
            <motion.button
              className={styles.copyButton}
              onClick={handleCopyEmail}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              title="Copy email"
            >
              {copied ? <CheckCheck size={18} /> : <Copy size={18} />}
            </motion.button>
          </div>
        </motion.div>

        <motion.div
          className={styles.socialLinks}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.9 }}
              viewport={{ once: true }}
            >
              <social.icon size={20} />
              <span>{social.label}</span>
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          className={styles.footer}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className={styles.logoContainer}>
            <span className={styles.footerLogo}>Abdelhakam</span>
          </div>
          <p className={styles.copyright}>
            Designed &amp; Built by {personal.name.full}
          </p>
        </motion.div>

      </div>
    </section>
  );
}

export default Contact;
