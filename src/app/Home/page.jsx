"use client";
import ScrambleText, { createAnimatedText } from "@/common/Animation";
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
          <TagsCreator
            tag="!DOCTYPE html"
            style={{ marginLeft: "1.5rem" }}
            bool={false}
          ></TagsCreator>
          <TagsCreator
            tag='html lang="en"'
            style={{ marginLeft: "1.5rem" }}
            bool={false}
          ></TagsCreator>
          <TagsCreator
            tag="body"
            style={{ marginLeft: "3rem" }}
            bool={false}
          ></TagsCreator>
          {/* <div className={styles.big_heading}>π</div> */}
          <TagsCreator
            tag="h1"
            style={{ marginBottom: "-2rem", marginLeft: "6rem" }}
            bool={false}
          ></TagsCreator>
          <h1 className={styles.main_heading_container}>
            <ul>{createAnimatedText(heading)}</ul>
          </h1>
          <TagsCreator
            tag="h1"
            style={{ marginTop: "-1rem", marginLeft: "6rem" }}
            bool={!false}
          ></TagsCreator>
          <TagsCreator
            tag="p"
            style={{ marginLeft: "7.5rem" }}
            bool={false}
          ></TagsCreator>
          <About/>
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
      </section>
      <Project />
      <TagsCreator
        tag="body"
        style={{ marginLeft: "3rem" }}
        bool={!false}
      ></TagsCreator>
      <TagsCreator
        tag="html"
        style={{ marginLeft: "1.5rem" }}
        bool={!false}
      ></TagsCreator>
    </div>
  );
}
