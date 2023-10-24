import Image from "next/image";
import React from "react";
import styles from "../styles/Technology.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
  faJava,
  faPython,
  faBootstrap,
} from "@fortawesome/free-brands-svg-icons";
import {
  faCompassDrafting,
  faDatabase,
  faFolderTree,
  faNetworkWired,
  faPepperHot,
} from "@fortawesome/free-solid-svg-icons";
library.add(
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
  faJava,
  faPython,
  faBootstrap,
  faNetworkWired,
  faDatabase,
  faPepperHot,
  faFolderTree,
  faCompassDrafting
);

export default function Technology(props) {
  const technologyFaMapper = {
    HTML5: { logo: faHtml5, color: "#e7542e", title: "HTML5" },
    CSS3: { logo: faCss3Alt, color: "#1c76b8", title: "CSS3" },
    JavaScript: { logo: faJs, color: "#ffdb43", title: "JavaScript" },
    Java: { logo: faJava, color: "#ec2226", title: "Java" },
    SQLAlchemy: { logo: faDatabase, color: "#db290f", title: "SQLAlchemy" },
    Internet_Of_Things: {
      logo: faNetworkWired,
      color: "#2e426a",
      title: "Internet Of Things",
    },
    Bootstrap: { logo: faBootstrap, color: "#820ff8", title: "Bootstrap" },
    React: { logo: faReact, color: "#149eca", title: "React" },
    Python: { logo: faPython, color: "#f6c538", title: "Python" },
    Flask: { logo: faPepperHot, color: "#060606", title: "Flask" },
    File_Structures: {
      logo: faFolderTree,
      color: "#182331",
      title: "File Structures",
    },
    Android_Studio: {
      logo: faCompassDrafting,
      color: "#4ee08f",
      title: "Android Studio",
    },
  };
  return (
    <div className={styles.technology_main}>
      {props?.names?.map((tech) => (
        <FontAwesomeIcon
          title={technologyFaMapper[tech]?.title}
          className={styles.faIcon}
          icon={technologyFaMapper[tech]?.logo}
          fixedWidth
          // style={{ color: `${technologyFaMapper[tech]?.color}` }}
        />
      ))}
    </div>
  );
}
