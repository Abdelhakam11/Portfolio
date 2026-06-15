import Header from "@/components/Header/Header";
import Contact from "@/components/Contact/Contact";
import styles from "./page.module.scss";

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.contactPage}>
          <Contact />
        </div>
      </main>
    </>
  );
}
