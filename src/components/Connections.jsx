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
import { Social } from "@/constants/Social";

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
    link: Social.LinkedIn,
  },
  {
    icon: faGithub,
    heading: "GitHub",
    username: "@mayurpai",
    link: Social.GitHub,
  },
  {
    icon: faInstagram,
    heading: "Instagram",
    username: "@mayurpai19",
    link: Social.Instagram,
  },
  {
    icon: faEnvelope,
    heading: "Email",
    username: "mayur5pai@gmail.com",
    link: Social.Email,
  },
];

export default function Connections(props) {
  return connections.map((item, id) => {
    return (
      <div className={styles.modalLinks} key={id}>
        <Link href={item.link} target="_blank" onClick={props.onRequestClose}>
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
