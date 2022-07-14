import styles from "../styles/Home.module.css";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function cards(props) {
  return (
    <>
      <div className={styles.card}>
        <div className={styles.box}>
          <div className={styles.content}>
            <h2 className={styles.h2}>{props.id}</h2>
            <h3 className={styles.h3}>{props.title}</h3>
            <p className={styles.p}>
              {props.desc}
            </p>
            <a href={props.link} target="_blank">
              Read More
            </a>
            {/* <a href="https://mayurpai.github.io/">Visit Website</a> */}
          </div>
        </div>
      </div>
    </>
  );
}
