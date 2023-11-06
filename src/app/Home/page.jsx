"use client";
import BoilerHeading from "@/common/BoilerHeading";
import Icon from "@/components/Icon";
import TagsCreator from "@/components/TagsCreator";
import About from "@/sections/About";
import Project from "@/sections/Project";
import styles from "../../styles/pages/Home.module.scss";

const heading = "Mayur Pai";

export default function Home() {
  return (
    <div>
      <section className={styles.home_container} id="home">
        <div className={styles.home_body_container}>
          <BoilerHeading title={heading} />
          <TagsCreator
            tag="p"
            style={{ marginLeft: "7.5rem" }}
            bool={false}
          ></TagsCreator>
          <About />
          <TagsCreator
            tag="p"
            style={{ marginLeft: "7.5rem" }}
            bool={!false}
          ></TagsCreator>
          <TagsCreator
            tag="a"
            style={{ marginLeft: "9rem" }}
            bool={false}
          ></TagsCreator>
          <div className={styles.icon_section_container}>
            <Icon />
          </div>
          <TagsCreator
            tag="a"
            style={{ marginLeft: "9rem" }}
            bool={!false}
          ></TagsCreator>
        </div>
        <Project />
      </section>
    </div>
  );
}
