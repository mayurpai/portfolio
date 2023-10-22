"use client";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/legacy/image";
import Link from "next/link";
import styles from "../../styles/Home.module.css";

library.add(faGithub, faInstagram, faLinkedin, faFacebook);

import {
  La_Belle_Aurore,
  Montserrat,
  Roboto_Mono,
  Sigmar_One,
  Work_Sans,
} from "next/font/google";
import Button from "@/components/Button";
import TagsCreator from "@/components/TagsCreator";
import { useState } from "react";
import TypingEffect from "../../components/TypingEffect";

const montserrat = Montserrat({
  weight: "300",
  subsets: ["latin"],
  display: "swap",
});

const roboto_Mono = Roboto_Mono({
  weight: "100",
  subsets: ["latin"],
  display: "swap",
});

const sigmar_One = Sigmar_One({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const work_Sans = Work_Sans({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const la_Belle_Aurore = La_Belle_Aurore({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export default function Home() {
  const [tagDecider, setTagDecider] = useState(false);
  return (
    <>
      <section className={styles.main_container} id="home">
        <div className={styles.page}>
          <TagsCreator
            tag="!DOCTYPE html"
            style={{ marginLeft: "2.5rem" }}
            bool={tagDecider}
          ></TagsCreator>
          <TagsCreator
            tag="body"
            style={{ marginLeft: "5rem" }}
            bool={tagDecider}
          ></TagsCreator>
          <TagsCreator
            tag="h1"
            style={{ marginLeft: "7.5rem" }}
            bool={tagDecider}
          ></TagsCreator>
          <h1 className={styles.header_font}>
            <ul>
              {/* <li>H</li>
              <li>i</li>
              <li>,</li>
              <li>&nbsp;</li>
              <li>I</li>
              <li>
                <sup className={styles.sup}>,</sup>
              </li>
              <li>m</li>
              <div className={styles.br}></div> */}
              <li>M</li>
              <li>a</li>
              <li>y</li>
              <li>u</li>
              <li>r</li>
              <li>&nbsp;</li>
              <li>P</li>
              <li>a</li>
              <li>i</li>
              {/* <li>,</li>
              <div className={styles.brbottom}></div>
              <li>W</li>
              <li>e</li>
              <li>b</li>
              <li>&nbsp;</li>
              <li>D</li>
              <li>e</li>
              <li>v</li>
              <li>e</li>
              <li>l</li>
              <li>o</li>
              <li>p</li>
              <li>e</li>
              <li>r</li>
              <li>.</li> */}
            </ul>
          </h1>
          <TagsCreator
            tag="h1"
            style={{ marginTop: "-0.5rem", marginLeft: "7.5rem" }}
            bool={!tagDecider}
          ></TagsCreator>
          {/* <div className={styles.wrapper}>
            <p className={styles.fp}>Check Out My</p>
            <div className={styles.icon_facebook}>
              <div className={styles.tooltip}>Facebook</div>
              <span>
                <Link href="https://www.facebook.com/profile.php?id=100010154376824">
                  <FontAwesomeIcon
                    icon={faFacebook}
                    style={{ fontSize: "2rem" }}
                    fixedWidth
                  />
                </Link>
              </span>
            </div>
            <div className={styles.icon_github}>
              <div className={styles.tooltip}>Github</div>
              <span>
                <Link href="https://github.com/mayurpai">
                  <FontAwesomeIcon
                    icon={faGithub}
                    style={{ fontSize: "2rem" }}
                    fixedWidth
                  />
                </Link>
              </span>
            </div>
            <div className={styles.icon_instagram}>
              <div className={styles.tooltip}>Instagram</div>
              <span>
                <Link href="https://www.instagram.com/mayurpai19/">
                  <FontAwesomeIcon
                    icon={faInstagram}
                    style={{ fontSize: "2rem" }}
                    fixedWidth
                  />
                </Link>
              </span>
            </div>
            <div className={styles.icon_linkedin}>
              <div className={styles.tooltip}>LinkedIn</div>
              <span>
                <Link href="https://www.linkedin.com/in/mayur-pai5/">
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    style={{ fontSize: "2rem" }}
                    fixedWidth
                  />
                </Link>
              </span>
            </div>
          </div> */}
          <TagsCreator
            tag="p"
            style={{ marginLeft: "10rem" }}
            bool={tagDecider}
          ></TagsCreator>
          <div className={styles.aboutSection}>
            <div className={styles.aboutBody}>
              <TypingEffect
                text="A web developer, and programmer. An Inquisite who loves exploring
              routes that I've never come across. One of my favorite ways to
              learn is to teach. I completed my Bachelor's in Information
              Science from Sahyadri College of Engineering and Management,
              Mangalore.
              <br /> <br /> 
              I'm currently working as an Associate Developer at GalaxE. Solutions India Pvt. Ltd.
              <br /> <br />
              It has been my passion and craze to work with computers since I
              was a young kid. A priority of mine has always been to learn
              something new every day. As a result of my studies, I have
              acquired languages and algorithms, technical skills, leadership
              qualities, and much more. There's certainly a lot more to learn, a
              lot more problems to solve, and a lot more to build."
              />
              {/* A web developer, and programmer. An Inquisite who loves exploring
              routes that I've never come across. One of my favorite ways to
              learn is to teach. I completed my Bachelor's in Information
              Science from Sahyadri College of Engineering and Management,
              Mangalore.
              <br />
              <br /> I'm currently working as an <b>
                Associate Developer
              </b> at <b>GalaxE. Solutions India Pvt. Ltd.</b>
              <br />
              <br />
              It has been my passion and craze to work with computers since I
              was a young kid. A priority of mine has always been to learn
              something new every day. As a result of my studies, I have
              acquired languages and algorithms, technical skills, leadership
              qualities, and much more. There's certainly a lot more to learn, a
              lot more problems to solve, and a lot more to build. */}
            </div>
          </div>
          <TagsCreator
            tag="p"
            style={{ marginLeft: "10rem" }}
            bool={!tagDecider}
          ></TagsCreator>
        </div>
      </section>
    </>
  );
}
