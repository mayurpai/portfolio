import styles from "../styles/Home.module.css";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  return (
    <>
      <section className={styles.projects} id="projects">
        <div className={styles.big_heading}>Projects</div>
        <div className={styles.page}>
          <div className={styles.html_body_h1}>
            <span> &lt;h1&gt; </span>
          </div>
          <h1 className={styles.header_font}>
            <ul>
              <li>P</li>
              <li>r</li>
              <li>o</li>
              <li>j</li>
              <li>e</li>
              <li>c</li>
              <li>t</li>
              <li>s</li>
            </ul>
          </h1>
          <div className={styles.html_h1}>
            <span> &lt;/h1&gt;</span>
          </div>
          <div className={styles.html_body_p}>
            <span> &lt;p&gt; </span>
          </div>
          <p className={styles.fp}>
            <br />
            Based on best practices, I create fast, simple, and easy-to-use
            responsive websites. I have extensive experience with front-end
            development, HTML, CSS, JS, building small and medium websites,
            using custom plugins, animations, and coding interactive layouts. I
            have also interned as a Tech Consultant at QuantumHunts, as a Web
            Developer at LetsGrowMore, as an Outreach Coordinator at Xpert, and
            others. <br />
            <br />
            For more information, please visit my
            <Link href="https://www.linkedin.com/in/mayur-pai5/">
              <a target="_blank"> LinkedIn </a>
            </Link>
            profile or feel free to
            <Link href="#contact">
              <a target="_blank"> Contact Me </a>
            </Link>
            directly.
          </p>
          <div className={styles.html_body_pc}>
            <span> &lt;p/&gt; </span>
          </div>
        </div>
      </section>
    </>
  );
}
