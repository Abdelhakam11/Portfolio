"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FileText, Menu, X, Sun, Moon } from "lucide-react";
import Link from "next/link";
import { useTheme } from "../ThemeProvider/ThemeProvider";
import { personal } from "@/data/personal";
import styles from "./Header.module.scss";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggle } = useTheme();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [isMobileMenuOpen]);

  return (
    <motion.header
      className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <Link href="/">
        <motion.div
          className={styles.logo}
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ duration: 0.3 }}
        >
          <span className={styles.logoText}>Abdelhakam</span>
        </motion.div>
      </Link>

      <nav className={styles.navBar}>
        <motion.ul className={styles.navList}>
          {[
            { label: "Home",     href: "/" },
            { label: "About",    href: "/#about" },
            { label: "Projects", href: "/projects" },
            { label: "Contact",  href: "/#contact" },
          ].map((item) => (
            <motion.li
              key={item.label}
              className={styles.navItem}
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.15 }}
            >
              <Link href={item.href}>{item.label}</Link>
            </motion.li>
          ))}
        </motion.ul>
      </nav>

      <div className={styles.headerActions}>
        {/* Theme toggle */}
        <motion.button
          className={styles.themeToggle}
          onClick={toggle}
          aria-label="Toggle light/dark mode"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.15 }}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={theme}
              initial={{ opacity: 0, rotate: -90, scale: 0.6 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: 90, scale: 0.6 }}
              transition={{ duration: 0.2 }}
              style={{ display: "flex" }}
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </motion.span>
          </AnimatePresence>
        </motion.button>

        <motion.a
          href={personal.cv}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.resumeButton}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FileText size={16} />
          <span>Resume</span>
        </motion.a>

        <button
          className={styles.mobileMenuToggle}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className={styles.mobileMenu}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
          >
            <nav className={styles.mobileNav}>
              {[
                { label: "Home",     href: "/" },
                { label: "About",    href: "/#about" },
                { label: "Projects", href: "/projects" },
                { label: "Contact",  href: "/#contact" },
              ].map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <a
                href={personal.cv}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.mobileResumeLink}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <FileText size={18} />
                Download Resume
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

export default Header;
