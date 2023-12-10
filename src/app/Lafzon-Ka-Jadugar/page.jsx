"use client";
import BoilerHeading from "@/common/BoilerHeading";
import PoetryCard from "@/components/PoetryCard";
import styles from "../../styles/pages/LafzonKaJadugar.module.scss";

const heading = "Lafzon Ka Jadugar";

export default function LafzonKaJadugar() {
  return (
    <div>
      <section className={styles.lafzon_ka_jadugar_main_container} id="home">
        <div className={styles.lafzon_ka_jadugar_body_container}>
          <BoilerHeading title={heading} />
        </div>
        <div className={styles.poetry_section_container}>
          <PoetryCard />
        </div>
      </section>
    </div>
  );
}
