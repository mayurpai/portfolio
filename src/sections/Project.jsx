import { createAnimatedText } from "@/common/Animation";
import Card from "@/components/Card";
import TagsCreator from "@/components/TagsCreator";
import styles from "../styles/pages/Home.module.scss";

const heading = "Projects";

export default function Project() {
  return (
    <section className={styles.projects_conatiner} id="projects">
      <div className={styles.projects_body_container}>
        <TagsCreator
          tag="h1"
          style={{ marginBottom: "-2rem", marginLeft: "6rem" }}
          bool={false}
        ></TagsCreator>
        <h1 className={styles.project_heading_container}>
          <ul>{createAnimatedText(heading)}</ul>
        </h1>
        <TagsCreator
          tag="h1"
          style={{ marginTop: "-1rem", marginLeft: "6rem" }}
          bool={!false}
        ></TagsCreator>
        <div className={styles.project_section_container}>
          <Card />
        </div>
      </div>
    </section>
  );
}
