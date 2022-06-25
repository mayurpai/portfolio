import styles from "../styles/Home.module.css";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <>
      <section className={styles.about} id="about">
        <div className={styles.big_heading}>Me, Myself & I</div>
        <div className={styles.page}>
          <div className={styles.html_body_h1}>
            <span> &lt;h1&gt; </span>
          </div>
          <h1 className={styles.header_font}>
            <ul>
              <li>M</li>
              <li>e</li>
              <li>,</li>
              <li>&nbsp;</li>
              <li>M</li>
              <li>y</li>
              <li>s</li>
              <li>e</li>
              <li>l</li>
              <li>f</li>
              <li>&nbsp;</li>
              <li>&</li>
              <li>&nbsp;</li>
              <li>I</li>
            </ul>
          </h1>
          <div className={styles.html_h1}>
            <span> &lt;/h1&gt;</span>
          </div>
          <div className={styles.html_body_p}>
            <span> &lt;p&gt; </span>
          </div>
          <p className={styles.fp}>
            <br />I am Mayur Pai B H, a web developer, and programmer. An
            inquisitive-natured person who loves exploring routes that I've
            never come across. One of my favorite ways to learn is to teach. I'm
            pursuing my Bachelor's degree, a fourth-year engineering student in
            the stream of Information Science from Sahyadri College of
            Engineering and Management, Mangaluru. <br />
            <br />
            Ever since I was a little kid, Computers have fascinated me and have
            driven my passion and craze for them. Learning new things on a daily
            basis has always been my priority. I studied languages, algorithms,
            built up my technicality, leadership skills, and much more. There's
            certainly yet more to learn, yet more problems to solve, and yet
            more to build.
          </p>
          <div className={styles.html_body_pc}>
            <span> &lt;p/&gt; </span>
          </div>
        </div>
      </section>
    </>
  );
}
