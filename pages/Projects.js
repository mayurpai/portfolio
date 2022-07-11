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

          <div className={styles.projects_card}>
            <div className={styles.card}>
              <div className={styles.box}>
                <div className={styles.content}>
                  <h2 className={styles.h2}>01</h2>
                  <h3 className={styles.h3}>Portfolio</h3>
                  {/* <p>A website which defines me, my achievements and my endeavors.</p> */}
                  <p className={styles.p}>
                    Developed a fully responsive personal portfolio website
                    using HTML5, CSS3 and JavaScript.
                  </p>
                  <a href="https://github.com/mayurpai/mayurpai.github.io">
                    Read More
                  </a>
                  {/* <a href="https://mayurpai.github.io/">Visit Website</a> */}
                </div>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.box}>
                <div className={styles.content}>
                  <h2>02</h2>
                  <h3>Tu Phodega</h3>
                  {/* <p>A website which provides all the engineering subject's notes.</p> */}
                  <p>
                    A fully responsive website using HTML5, CSS3 and JavaScript
                    that comprises the notes, materials, and MQPs of the
                    branches of Engineering.
                  </p>
                  <a href="https://github.com/mayurpai/TuPhodega">Read More</a>
                  {/* <a href="https://mayurpai.github.io/TuPhodega/index.html">Visit Website</a> */}
                </div>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.box}>
                <div className={styles.content}>
                  <h2>03</h2>
                  <h3>Engineering Calculator</h3>
                  <p>
                    The primary focus is to gather all the Engineering students
                    who wish to calculate their marks.
                  </p>
                  {/* <p>A SGPA/CGPA calculator built especially for all my Engineering friends.</p> */}
                  <a href="https://github.com/mayurpai/Engineering-Calculator">
                    Read More
                  </a>
                  {/* <a href="https://mayurpai.github.io/Engineering-Calculator/index.html">Visit Website</a> */}
                </div>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.box}>
                <div className={styles.content}>
                  <h2>04</h2>
                  <h3>Arms And Ammunition</h3>
                  <p>
                    Built a professional real-time military base simulation
                    project over Database Management System.
                  </p>
                  <a href="https://github.com/mayurpai/ArmsAndAmmunition">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
