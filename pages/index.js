import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
        <title>Mayur Pai</title>
        <meta
          name="google-site-verification"
          content="rh1RLLiXrVeBTdNJYi9yEqzNYMHcW_ps05wOO0xfhT4"
        />
        <meta
          name="description"
          content="I am Mayur Pai B H, a web developer, and programmer. An inquisitive natured person who loves exploring routes that I've never come across. I'm pursuing my Bachelor's degree, a fourth-year engineering student in the stream of Information Science from Sahyadri College of Engineering and Management, Mangaluru."
        />
        <meta
          name="keywords"
          content="HTML5, CSS3, JavaScript, ReactJS, NextJS, SASS, Portfolio"
        />
        <meta name="author" content="Mayur Pai" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="../mayur_pai.ico" type="image/x-icon" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=La+Belle+Aurore&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@100&display=swap"
          rel="stylesheet"
        />
        {/* <!-- <meta name="robots" content="noindex,nofollow"/> --> */}
        {/* <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.0/jquery.min.js" /> */}
      </Head>
      <nav className={styles.navigation_links}>
        <ul className={styles.links}>
          <li>
            <Link href="/">
              <a>
                <Image
                  className={styles.logo}
                  src="/logo.png"
                  width={60}
                  height={60}
                />
              </a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>
                <strong>About</strong>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/skills">
              <a>
                <strong>Skills</strong>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/projects">
              <a>
                <strong>Projects</strong>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a>
                <strong>Contact</strong>
              </a>
            </Link>
          </li>
        </ul>
      </nav>
      <div className={styles.main_container}>
        <div className={styles.html_body_h1}>
          <span>&lt;html&gt; </span>
          <br />
        </div>
        <div className={styles.html_body_h2}>
          <span>&lt;body&gt; </span>
        </div>
        <div className={styles.html_body_h1}>
          <span> &lt;h1&gt; </span>
        </div>
        <div className={styles.page}>
          <h1 className={styles.header_font}>
            <ul>
              <li>H</li>
              <li>i</li>
              <li>,</li>
              <li>&nbsp;</li>
              <li>I</li>
              <li>
                <sup className={styles.sup}>,</sup>
              </li>
              <li>m</li>
              <div className={styles.br}></div>
              {/* <li>
                <Image
                  className={styles.header_logo}
                  src="/logo.png"
                  width={60}
                  height={60}
                />
              </li> */}
              <li>M</li>
              <li>a</li>
              <li>y</li>
              <li>u</li>
              <li>r</li>
              <li>&nbsp;</li>
              <li>P</li>
              <li>a</li>
              <li>i</li>
              <li>,</li>
              <div className={styles.br}></div>
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
              <li>&nbsp;</li>
            </ul>
          </h1>
          <div className={styles.html_h1}>
            <span>&lt;/h1&gt;</span>
          </div>
          <p className={styles.fp}>Front End Developer | Programmer</p>
          <Link href="/contact">
            <a>
              <div className={styles.contact}>Contact Me!</div>
            </a>
          </Link>
        </div>
        <div className={styles.html_body_html}>
          <span>&lt;/body&gt; </span>
          <br />
          <span>&lt;/html&gt; </span>
        </div>
      </div>

      {/* <footer className={styles.footer}>
      </footer> */}
    </div>
  );
}
