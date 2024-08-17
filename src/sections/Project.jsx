import Card from "@/components/Card";
import styles from "../styles/pages/Home.module.scss";
import BoilerHeading from "@/common/BoilerHeading";

const heading = "Projects";

export default function Project() {
  return (
    <section className={styles.projects_conatiner} id="projects">
      <div className={styles.projects_body_container}>
        <BoilerHeading title={heading} header="h2"/>
        <div className={styles.project_section_container}>
          <Card />
        </div>
      </div>
    </section>
  );
}
