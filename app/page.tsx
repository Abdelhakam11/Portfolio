import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import WorkExperience from "@/components/WorkExperience/WorkExperience";
import Skills from "@/components/Skills/Skills";
import Projects from "@/components/Projects/Projects";
import Contact from "@/components/Contact/Contact";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <section id="home">
          <Hero />
        </section>
        <section id="about">
          <WorkExperience />
          <Skills />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
    </>
  );
}
