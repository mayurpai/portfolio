import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCss3Alt,
  faGithub,
  faHtml5,
  faJs,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import styles from "../styles/Card.module.scss";
import { Sigmar_One, PT_Mono } from "next/font/google";
import Tilt from "react-vanilla-tilt";

library.add(faGithub, faLink, faCode, faHtml5, faCss3Alt, faJs, faReact);

const sigmar_One = Sigmar_One({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const pt_mono = PT_Mono({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export default function Card(props) {
  console.log(props);
  return (
    <Tilt
      className={styles.tilt}
      options={{
        reverse: false,
        max: 345,
        perspective: 1000,
        scale: 5,
        speed: 300,
        transition: true,
        axis: null,
        reset: false,
        easing: "cubic-bezier(.03,.98,.52,.99)",
        glare: false,
        "max-glare": 1,
        "glare-prerender": false,
      }}
      style={{
        backgroundColor: "transparent",
        boxShadow: "none",
      }}
    >
      <div className={styles.card}>
        <div className={styles.box}>
          <div className={styles.content}>
            <h2 className={`${sigmar_One.className} ${styles.h2}`}>
              {props.id}
            </h2>
            <h3 className={`${styles.h3}`}>{props.title}</h3>
            <p className={`${styles.p} ${pt_mono.className}`}>{props.desc}</p>
            {/* <p className={styles.tech}> */}
            {/* <FontAwesomeIcon
                icon={faCode}
                style={{ width: "2.5rem", marginBottom: "1.5rem" }}
                fixedWidth
              />{" "} */}
            {/* 🧑‍💻 Tech Stack: &nbsp; */}
            {/* {props.tech} */}
            {/* </p> */}
            <div className={styles.flex_link}></div>
          </div>
        </div>
      </div>
    </Tilt>
  );
}
