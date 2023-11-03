"use client"
import React from "react";
import styles from "../../styles/pages/LafzonKaJadugar.module.scss";
import TagsCreator from "@/components/TagsCreator";
import Navigation from "@/components/Navigation";
import { createAnimatedText } from "@/common/Animation";
import "../globals.scss";

const heading = "Lafzon Ka Jadugar";

export default function LafzonKaJadugar() {
  return (
    <div className="main_app_container">
      <Navigation />
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
      </section>
    </div>
  );
}