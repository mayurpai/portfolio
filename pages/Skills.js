import styles from "../styles/Home.module.css";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";


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
        </div>
        <div className={styles.image_page_skill}>
          <div className={styles.frost}></div>
          <div className={styles.skill}>
            <h3 className={styles.h3}>Hyper-Text Markup Language (HTML)</h3>
            <div className={styles.hr}></div>
            <div className={styles.max}></div>
            <div className={styles.brbottom}></div>
            <h3 className={styles.h3}>Cascading Style Sheets (CSS)</h3>
            <div className={styles.hr}></div>
            <div className={styles.max}></div>
            <div className={styles.brbottom}></div>
            <h3 className={styles.h3}>Java Script (JS)</h3>
            <div className={styles.hr}></div>
            <div className={styles.max}></div>
            <div className={styles.brbottom}></div>
            <h3 className={styles.h3}>
              Syntactically Awesome Style Sheets (SASS)
            </h3>
            <div className={styles.hr}></div>
            <div className={styles.max}></div>
            <div className={styles.brbottom}></div>
            <h3 className={styles.h3}>jQuery</h3>
            <div className={styles.hr}></div>
            <div className={styles.max}></div>
            <div className={styles.brbottom}></div>
            <h3 className={styles.h3}>Git & GitHub</h3>
            <div className={styles.hr}></div>
            <div className={styles.max}></div>
            <div className={styles.brbottom}></div>
            <h3 className={styles.h3}>Flask</h3>
            <div className={styles.hr}></div>
            <div className={styles.max}></div>
            <div className={styles.brbottom}></div>
            <h3 className={styles.h3}>MySQL</h3>
            <div className={styles.hr}></div>
            <div className={styles.max}></div>
            <div className={styles.brbottom}></div>
            <h3 className={styles.h3}>React</h3>
            <div className={styles.hr}></div>
            <div className={styles.max}></div>
            <div className={styles.brbottom}></div>
            <h3 className={styles.h3}>C</h3>
            <div className={styles.hr}></div>
            <div className={styles.max}></div>
            <div className={styles.brbottom}></div>
            <h3 className={styles.h3}>C++</h3>
            <div className={styles.hr}></div>
            <div className={styles.max}></div>
            <div className={styles.brbottom}></div>
            <h3 className={styles.h3}>Java</h3>
            <div className={styles.hr}></div>
            <div className={styles.max}></div>
            <div className={styles.brbottom}></div>
            <h3 className={styles.h3}>Python</h3>
            <div className={styles.hr}></div>
            <div className={styles.max}></div>
            <div className={styles.brbottom}></div>
          </div>
        </div>
      </section>
    </>
  );
}
