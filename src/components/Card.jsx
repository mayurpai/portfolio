import { Projects } from "@/constants/Project";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCss3Alt,
  faGithub,
  faHtml5,
  faJs,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { faCode, faLink } from "@fortawesome/free-solid-svg-icons";
import { PT_Mono, Sigmar_One } from "next/font/google";
import Link from "next/link";
import Tilt from "react-vanilla-tilt";
import styles from "../styles/Card.module.scss";

library.add(faGithub, faLink, faCode, faHtml5, faCss3Alt, faJs, faReact);

const sigmar_One = Sigmar_One({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const pt_mono = PT_Mono({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export default function Card() {
  return Projects.map((item, id) => {
    let link = item.webLink == "#" ? item.codeLink : item.webLink;
    return (
      <div className={styles.projects_card} key={id}>
        <Link href={link} target="_blank">
          <Tilt
            className={styles.tilt}
            options={{
              reverse: false,
              max: 345,
              perspective: 1000,
              scale: 5,
              speed: 300,
              transition: true,
              axis: null,
              reset: false,
              easing: "cubic-bezier(.03,.98,.52,.99)",
              glare: false,
              "max-glare": 1,
              "glare-prerender": false,
            }}
            style={{
              backgroundColor: "transparent",
              boxShadow: "none",
            }}
          >
            <div className={styles.card}>
              <div className={styles.box}>
                <div className={styles.content}>
                  <h2 className={`${sigmar_One.className} ${styles.h2}`}>
                    {item.id}
                  </h2>
                  <h3 className={`${styles.h3}`}>{item.title}</h3>
                  <p className={`${styles.p} ${pt_mono.className}`}>
                    {item.description}
                  </p>
                  <div className={styles.technologySection}>
                    {/* <Technology names={item.technology} /> */}
                  </div>
                  <div className={styles.flex_link}></div>
                </div>
              </div>
            </div>
          </Tilt>
        </Link>
      </div>
    );
  });
}
