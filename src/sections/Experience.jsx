import styles from "@/styles/sections/Experience.module.scss";
import BoilerHeading from "@/common/BoilerHeading";

const heading = "Experience";

export default function Experience() {
  return (
    <section className={styles.experience_conatiner} id="experience">
      <div className={styles.experience_body_container}>
        <BoilerHeading title={heading} header="h2"/>
        <div className={styles.experience_section_container}>

        </div>
      </div>
    </section>
  );
}
