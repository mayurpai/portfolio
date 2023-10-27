import React from "react";
import { PT_Mono } from "next/font/google";
import styles from "../styles/Connections.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faGithub,
  faInstagram,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

library.add(faInstagram, faLinkedin, faWhatsapp, faGithub);

const pt_mono = PT_Mono({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const connections = [
  {
    icon: faLinkedin,
    heading: "LinkedIn",
    username: "@mayur-pai5",
    link: "https://www.linkedin.com/in/mayur-pai5/",
  },
  {
    icon: faGithub,
    heading: "GitHub",
    username: "@mayurpai",
    link: "https://github.com/mayurpai",
  },
  {
    icon: faInstagram,
    heading: "Instagram",
    username: "@mayurpai19",
    link: "https://www.instagram.com/mayurpai19/",
  },
  {
    icon: faEnvelope,
    heading: "Email",
    username: "mayur5pai@gmail.com",
    link: "mailto:mayur5pai@gmail.com",
  },
];

export default function Connections() {
  return connections.map((item, id) => {
    return (
      <div className={styles.modalLinks} key={id}>
        <Link href={item.link} target="_blank">
          <div className={styles.modalSingleLink}>
            <span className={styles.modalIcon}>
              <FontAwesomeIcon
                icon={item.icon}
                style={{
                  fontSize: "1.7rem",
                  color: "whitesmoke",
                }}
                fixedWidth
              />
            </span>
            <div className={`${styles.modalIconHeading} ${pt_mono.className}`}>
              <p>{item.heading}</p>
              <p>{item.username}</p>
            </div>
          </div>
        </Link>
      </div>
    );
  });
}
