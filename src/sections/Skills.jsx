import styles from "@/styles/sections/Skills.module.scss";
import BoilerHeading from "@/common/BoilerHeading";

const heading = "Skills & Experience";

export default function Skills() {
  return (
    <section className={styles.skills_conatiner} id="skills">
      <div className={styles.skills_body_container}>
        <BoilerHeading title={heading} header="h2"/>
        <div className={styles.skills_section_container}>

        </div>
      </div>
    </section>
  );
}
