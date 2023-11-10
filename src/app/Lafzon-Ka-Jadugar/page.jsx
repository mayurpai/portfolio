"use client";
import { createAnimatedText } from "@/common/Animation";
import TagsCreator from "@/components/TagsCreator";
import styles from "../../styles/pages/LafzonKaJadugar.module.scss";
import {
  link,
  magicianOfWords,
  lajzonKaJadugar,
  Poetry,
} from "@/constants/Poetry";
import PoetryCard from "@/components/PoetryCard";

const heading = "Lafzon Ka Jadugar";
export default function LafzonKaJadugar() {
  console.log(link, magicianOfWords, lajzonKaJadugar, Poetry);
  return (
    <div>
      <section className={styles.lafzon_ka_jadugar_main_container} id="home">
        <div className={styles.lafzon_ka_jadugar_body_container}>
          <TagsCreator
            tag="h1"
            style={{ marginBottom: "-2rem", marginLeft: "6rem" }}
            bool={false}
          ></TagsCreator>
          <h1 className={styles.lafzon_ka_jadugar_heading_container}>
            <ul>{createAnimatedText(heading)}</ul>
          </h1>
          <TagsCreator
            tag="h1"
            style={{ marginTop: "-1rem", marginLeft: "6rem" }}
            bool={!false}
          ></TagsCreator>
        </div>
        <div className={styles.poetry_section_container}>
          <PoetryCard />
        </div>
      </section>
    </div>
  );
}
