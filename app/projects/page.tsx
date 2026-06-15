import Header from "@/components/Header/Header";
import ProjectsShowcase from "@/components/ProjectsShowcase/ProjectsShowcase";
import Contact from "@/components/Contact/Contact";
import styles from "./page.module.scss";

export default function ProjectsPage() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <ProjectsShowcase />
        <Contact />
      </main>
    </>
  );
}
