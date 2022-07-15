import styles from "../styles/Home.module.css";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";

library.add(faGithub, faLink, faCode);

export default function cards(props) {
  return (
    <>
      <div className={styles.card}>
        <div className={styles.box}>
          <div className={styles.content}>
            <h2 className={styles.h2}>{props.id}</h2>
            <h3 className={styles.h3}>{props.title}</h3>
            <p className={styles.p}>{props.desc}</p>
            <p className={styles.tech}>
              {/* <FontAwesomeIcon
                icon={faCode}
                style={{ width: "2.5rem", marginBottom: "1.5rem" }}
                fixedWidth
              />{" "} */}
              🧑‍💻 Tech Stack: &nbsp;
              {props.tech}
            </p>
            <div className={styles.flex_link}>
              <Link href={props.link}>
                <a target="_blank">
                  <FontAwesomeIcon
                    icon={faGithub}
                    style={{ width: "1rem" }}
                    fixedWidth
                  />
                  &nbsp; GitHub
                </a>
              </Link>
              <Link href={props.web}>
                <a>
                  <FontAwesomeIcon
                    icon={faLink}
                    style={{ width: "1rem" }}
                    fixedWidth
                  />
                  &nbsp; Web
                </a>
              </Link>
            </div>
            {/* <a href="https://mayurpai.github.io/">Visit Website</a> */}
          </div>
        </div>
      </div>
    </>
  );
}
