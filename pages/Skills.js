import styles from "../styles/Home.module.css";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
// "@fortawesome/free-brands-svg-icons";
// "@fortawesome/free-solid-svg-icons";
// "@fortawesome/pro-duotone-svg-icons";
// "@fortawesome/pro-light-svg-icons"
// "@fortawesome/pro-solid-svg-icons"
// "@fortawesome/free-solid-svg-icons"
// "@fortawesome/free-regular-svg-icons"
// "@fortawesome/pro-regular-svg-icons"
library.add(faDownload);

export default function Skills() {
  return (
    <>
      <section className={styles.skills} id="skills">
        <div className={styles.big_heading}>Skills & Experience</div>
        <div className={styles.page}>
          <div className={styles.html_body_h1}>
            <span> &lt;h1&gt; </span>
          </div>
          <h1 className={styles.header_font}>
            <ul>
              <li>S</li>
              <li>k</li>
              <li>i</li>
              <li>l</li>
              <li>l</li>
              <li>s</li>
              <li>&nbsp;</li>
              <li>&</li>
              <div className={styles.br}></div>
              <li>E</li>
              <li>x</li>
              <li>p</li>
              <li>e</li>
              <li>r</li>
              <li>i</li>
              <li>e</li>
              <li>n</li>
              <li>c</li>
              <li>e</li>
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
          <div className={styles.wrapper}>
            {/* <p className={styles.fp}>Resume</p> */}
            <div className={styles.icon_resume}>
              <div className={styles.tooltip}>Resume</div>
              <span>
                <Link href="https://drive.google.com/uc?export=download&id=1n3VI5hKL2ehBK32jImo6b0ajN1yE7_rU">
                  <a target="_blank">
                    <FontAwesomeIcon
                      icon={faDownload}
                      style={{ width: "2rem" }}
                      fixedWidth
                    />
                  </a>
                </Link>
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
