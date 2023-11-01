"use client";
import Card from "@/components/Card";
import Icon from "@/components/Icon";
import TagsCreator from "@/components/TagsCreator";
import { PT_Mono } from "next/font/google";
import { useState } from "react";
import styled, { keyframes } from "styled-components";
import TypingEffect from "../../components/TypingEffect";
import styles from "../../styles/Home.module.scss";

const pt_mono = PT_Mono({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const text = "Mayur Pai";
const aboutText =
  "A web developer, and programmer. An Inquisite who loves exploring routes that I've never come across. One of my favorite ways to learn is to teach. I completed my Bachelor's in Information Science from Sahyadri College of Engineering and Management, Mangalore. <br /> <br />  I'm currently working as an Associate Developer at GalaxE. Solutions India Pvt. Ltd. <br /> <br /> It has been my passion and craze to work with computers since I was a young kid. A priority of mine has always been to learn something new every day. As a result of my studies, I have acquired languages and algorithms, technical skills, leadership qualities, and much more. There's certainly a lot more to learn, a lot more problems to solve, and a lot more to build.";
const project = "Projects";

const move = keyframes`
0% {
    opacity: 0;
    color: transparent;
    width: auto;
  }

  33% {
    opacity: 1;
    color: var(--theme_color_blue);
    width: auto;
    text-shadow: 0.2rem 0.2rem var(--theme_color_pink);
  }

  66% {
    opacity: 1;
    color: var(--theme_color_pink);
    width: auto;
    text-shadow: 0.2rem 0.2rem var(--theme_color_blue);
  }

  100% {
    opacity: 1;
    color: transparent;
    width: auto;
  }`;

const AnimatedText = styled.li`
  animation: ${move} alternate-reverse 1s;
  animation-delay: ${(props) => props.delay}s;
`;

function createAnimatedText(text) {
  return text.split("").map((char, index) => (
    <AnimatedText key={index} delay={0.3 + index * 0.1}>
      {char}
    </AnimatedText>
  ));
}

export default function Home() {
  const [tagDecider, setTagDecider] = useState(false);

  return (
    <>
      <section className={styles.main_container} id="home">
        <div className={styles.page}>
          <TagsCreator
            tag="!DOCTYPE html"
            style={{ marginLeft: "1.5rem" }}
            bool={tagDecider}
          ></TagsCreator>
          <TagsCreator
            tag='html lang="en"'
            style={{ marginLeft: "1.5rem" }}
            bool={tagDecider}
          ></TagsCreator>
          <TagsCreator
            tag="body"
            style={{ marginLeft: "3rem" }}
            bool={tagDecider}
          ></TagsCreator>
          {/* <div className={styles.big_heading}>π</div> */}
          <TagsCreator
            tag="section"
            style={{ marginLeft: "4.5rem" }}
            bool={tagDecider}
          ></TagsCreator>
          <TagsCreator
            tag="h1"
            style={{ marginBottom: "-2rem", marginLeft: "6rem" }}
            bool={tagDecider}
          ></TagsCreator>
          <h1 className={styles.header_font}>
            <ul>{createAnimatedText(text)}</ul>
          </h1>
          <TagsCreator
            tag="h1"
            style={{ marginTop: "-1rem", marginLeft: "6rem" }}
            bool={!tagDecider}
          ></TagsCreator>
          <TagsCreator
            tag="p"
            style={{ marginLeft: "7.5rem" }}
            bool={tagDecider}
          ></TagsCreator>
          <div className={styles.aboutSection}>
            <div className={`${styles.aboutBody} ${pt_mono.className}`}>
              <TypingEffect text={aboutText} />
            </div>
          </div>
          <TagsCreator
            tag="p"
            style={{ marginLeft: "7.5rem" }}
            bool={!tagDecider}
          ></TagsCreator>
          <TagsCreator
            tag="a"
            style={{ marginLeft: "9rem" }}
            bool={tagDecider}
          ></TagsCreator>
          <div className={styles.iconSection}>
            <Icon />
          </div>
          <TagsCreator
            tag="a"
            style={{ marginLeft: "9rem" }}
            bool={!tagDecider}
          ></TagsCreator>
          <TagsCreator
            tag="section"
            style={{ marginLeft: "4.5rem" }}
            bool={!tagDecider}
          ></TagsCreator>
        </div>
      </section>
      <section className={styles.skills} id="projects">
        <div className={styles.page}>
          <TagsCreator
            tag="section"
            style={{ marginLeft: "4.5rem" }}
            bool={tagDecider}
          ></TagsCreator>
          <TagsCreator
            tag="h2"
            style={{ marginBottom: "-2rem", marginLeft: "6rem" }}
            bool={tagDecider}
          ></TagsCreator>
          <h2 className={styles.project_font}>
            <ul>{createAnimatedText(project)}</ul>
          </h2>
          <TagsCreator
            tag="h2"
            style={{ marginTop: "-1rem", marginLeft: "6rem" }}
            bool={!tagDecider}
          ></TagsCreator>
          <div className={styles.projectSection}>
            <Card />
          </div>
          <TagsCreator
            tag="section"
            style={{ marginLeft: "4.5rem" }}
            bool={!tagDecider}
          ></TagsCreator>
        </div>
      </section>
      <TagsCreator
        tag="body"
        style={{ marginLeft: "3rem" }}
        bool={!tagDecider}
      ></TagsCreator>
      <TagsCreator
        tag="html"
        style={{ marginLeft: "1.5rem" }}
        bool={!tagDecider}
      ></TagsCreator>
    </>
  );
}
