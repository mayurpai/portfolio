import styles from "../styles/Home.module.css";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  return (
    <>
      <Head>
        <title>Mayur Pai | Projects</title>
        <link rel="icon" href="../mayur_pai.ico" type="image/x-icon" />
      </Head>
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

          <div className={styles.projects_card}>
            <div className={styles.card}>
              <div className={styles.box}>
                <div className={styles.content}>
                  <h2 className={styles.h2}>01</h2>
                  <h3 className={styles.h3}>Tu Phodega</h3>
                  {/* <p>A website which defines me, my achievements and my endeavors.</p> */}
                  <p className={styles.p}>
                    Designed and developed a website with Mobile Responsive User
                    Experience to include notes, materials, and MQPs from all
                    Engineering colleges in India
                  </p>
                  <a
                    href="https://github.com/mayurpai/TuPhodega"
                    target="_blank"
                  >
                    Read More
                  </a>
                  {/* <a href="https://mayurpai.github.io/">Visit Website</a> */}
                </div>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.box}>
                <div className={styles.content}>
                  <h2 className={styles.h2}>02</h2>
                  <h3 className={styles.h3}>Engineering Calculator</h3>
                  <p className={styles.p}>
                    Povided engineering students with a dynamic, interactive,
                    and responsive webpage that calculates their grade point
                    averages for the semester and the year
                  </p>
                  {/* <p>A SGPA/CGPA calculator built especially for all my Engineering friends.</p> */}
                  <a
                    href="https://github.com/mayurpai/Engineering-Calculator"
                    target="_blank"
                  >
                    Read More
                  </a>
                  {/* <a href="https://mayurpai.github.io/Engineering-Calculator/index.html">Visit Website</a> */}
                </div>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.box}>
                <div className={styles.content}>
                  <h2 className={styles.h2}>03</h2>
                  <h3 className={styles.h3}>Arms And Ammunition</h3>
                  <p className={styles.p}>
                    Implemented an accurate real-time simulation of a military
                    base in order to store and validate weapon and equipment
                    information
                  </p>
                  <a
                    href="https://github.com/mayurpai/ArmsAndAmmunition"
                    target="_blank"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.box}>
                <div className={styles.content}>
                  <h2 className={styles.h2}>04</h2>
                  <h3 className={styles.h3}>Pharmacy System</h3>
                  <p className={styles.p}>
                    Incorporated features such as searching, ordering, deleting,
                    modifying, printing receipts, and daily transaction
                    summaries of medicine orders and customers
                  </p>
                  <a
                    href="https://github.com/mayurpai/Pharmacy-Management-System"
                    target="_blank"
                  >
                    Read More
                  </a>
                  {/* <a href="https://mayurpai.github.io/TuPhodega/index.html">Visit Website</a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
