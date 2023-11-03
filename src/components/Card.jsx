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
import styles from "../styles/components/Card.module.scss";
import Image from "next/image";
import Technology from "./Technology";
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

const imageStyle = {
  borderRadius: "1rem",
  border: "none",
  padding: "0.25rem",
  outline: "none",
};

export default function Card() {
  return Projects.map((item, id) => {
    let link = item.webLink == "#" ? item.codeLink : item.webLink;
    const isTitleTooLong = item.title.length > 16;
    const isTechnologyTooLong = item.technology.length > 3;
    console.log(item);
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
                  <h2 className={`${sigmar_One.className} ${styles.id}`}>
                    {id + 1}
                  </h2>
                  <div className={styles.project_image}>
                    <Image
                      style={imageStyle}
                      fill
                      src={item.imgLink}
                      objectFit="cover"
                      alt={item.title}
                      priority={true}
                    ></Image>
                  </div>
                  <div className={styles.technology_section}>
                    <Technology names={item.technology} />
                    <h3 className={`${styles.title}`}>{item.title}</h3>
                    <h6 className={pt_mono.className}>
                      {item.fromDate} - {item.toDate}
                    </h6>
                    <p
                      className={`${styles.description} ${pt_mono.className}`}
                      style={
                        isTitleTooLong && isTechnologyTooLong
                          ? {
                              display: "-webkit-box",
                              WebkitLineClamp: 3,
                              WebkitBoxOrient: "vertical",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                            }
                          : {}
                      }
                    >
                      {item.shortDescription}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Tilt>
        </Link>
      </div>
    );
  });
}
