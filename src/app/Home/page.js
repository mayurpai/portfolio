"use client";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/legacy/image";
import Link from "next/link";
import styles from "../../styles/home.module.css";

library.add(faGithub, faInstagram, faLinkedin, faFacebook);

import {
  La_Belle_Aurore,
  Montserrat,
  Roboto_Mono,
  Sigmar_One,
  Work_Sans,
} from "next/font/google";

const la_Belle_Aurore = La_Belle_Aurore({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const montserrat = Montserrat({
  weight: "300",
  subsets: ["latin"],
  display: "swap",
});

const roboto_Mono = Roboto_Mono({
  weight: "100",
  subsets: ["latin"],
  display: "swap",
});

const sigmar_One = Sigmar_One({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const work_Sans = Work_Sans({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export default function Home() {
  return (
    <>
      <section className={styles.main_container} id="home">
        <div className={styles.page}>
          <div
            className={`${styles.html_body_h2} ${la_Belle_Aurore.className}`}
          >
            <span>&lt;!DOCTYPE html&gt; </span>
            <br />
            <span>&lt;body&gt; </span>
          </div>
          {/* <div className={styles.html_body_h1}>
            <span> &lt;h1&gt; </span>
          </div> */}
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
          {/* <div className={styles.html_h1}>
            <span>&lt;/h1&gt;</span>
          </div> */}
          <Link href="/Contact">
            {/* <Link href="#contact"> */}
            <div className={styles.contact}>Contact Me!</div>
          </Link>
          <div className={styles.wrapper}>
            <p className={styles.fp}>Check Out My</p>
            <div className={styles.icon_facebook}>
              <div className={styles.tooltip}>Facebook</div>
              <span>
                <Link href="https://www.facebook.com/profile.php?id=100010154376824">
                  <FontAwesomeIcon
                    icon={faFacebook}
                    style={{ fontSize: '2rem' }}
                    fixedWidth
                  />
                </Link>
              </span>
            </div>
            <div className={styles.icon_github}>
              <div className={styles.tooltip}>Github</div>
              <span>
                <Link href="https://github.com/mayurpai">
                  <FontAwesomeIcon
                    icon={faGithub}
                    style={{ fontSize: '2rem' }}
                    fixedWidth
                  />
                </Link>
              </span>
            </div>
            <div className={styles.icon_instagram}>
              <div className={styles.tooltip}>Instagram</div>
              <span>
                <Link href="https://www.instagram.com/mayurpai19/">
                  <FontAwesomeIcon
                    icon={faInstagram}
                    style={{ fontSize: '2rem' }}
                    fixedWidth
                  />
                </Link>
              </span>
            </div>
            <div className={styles.icon_linkedin}>
              <div className={styles.tooltip}>LinkedIn</div>
              <span>
                <Link href="https://www.linkedin.com/in/mayur-pai5/">
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    style={{ fontSize: '2rem' }}
                    fixedWidth
                  />
                </Link>
              </span>
            </div>
          </div>
        </div>
        <div className={styles.image_page}>
          {/* <div className={styles.hexagon}></div> */}
          <Image
            className={styles.image_logo}
            src="/images/mayurpai.png"
            layout="fill"
            objectFit="contain"
            objectPosition="top center"
            alt="Profile"
            priority
            loading="eager"
            // width="480px"
            // height="480px"
          />
        </div>
      </section>
    </>
  );
}
