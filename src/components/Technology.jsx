import Image from "next/image";
import React from "react";
import styles from "../styles/Technology.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
  faWhatsapp,
  faHtml5,
  faCss3Alt,
  faJs,
} from "@fortawesome/free-brands-svg-icons";
library.add(
  faGithub,
  faInstagram,
  faLinkedin,
  faFacebook,
  faHtml5,
  faCss3Alt,
  faJs
);

export default function Technology(props) {
  //   const basePath = "/technology";
  //   const technologyMapper = {
  //     HTML5: `${basePath}/html5.png`,
  //     CSS3: `${basePath}/css3.png`,
  //     JavaScript: `${basePath}/js.png`,
  //     CPP: `${basePath}/cpp.png`,
  //     Java: `${basePath}/java.png`,
  //     SQLAlchemy: `${basePath}/flask-sqlalchemy.png`,
  //     Internet_Of_Things: `${basePath}/iot.png`,
  //     jQuery: `${basePath}/jquery.png`,
  //     Machine_Learning: `${basePath}/machine-learning.png`,
  //     Next: `${basePath}/next.png`,
  //     phpMyAdmin: `${basePath}/phpmyadmin.png`,
  //     React: `${basePath}/react.png`,
  //     Python: `${basePath}/python.png`,
  //     Flask: `${basePath}/flask.png`,
  //     Android_Studio: `${basePath}/android-studio.png`,
  //   };
  const technologyFaMapper = {
    HTML5: { logo: "faHtml5", color: "red" },
    CSS3: { logo: "faCss3Alt", color: "red" },
    JavaScript: { logo: "faJs", color: "red" },
    // CPP: `${basePath}/cpp.png`,
    // Java: `${basePath}/java.png`,
    // SQLAlchemy: `${basePath}/flask-sqlalchemy.png`,
    // Internet_Of_Things: `${basePath}/iot.png`,
    // jQuery: `${basePath}/jquery.png`,
    // Machine_Learning: `${basePath}/machine-learning.png`,
    // Next: `${basePath}/next.png`,
    // phpMyAdmin: `${basePath}/phpmyadmin.png`,
    // React: `${basePath}/react.png`,
    // Python: `${basePath}/python.png`,
    // Flask: `${basePath}/flask.png`,
    // Android_Studio: `${basePath}/android-studio.png`,
  };
  return (
    <div className={styles.technology_main}>
      {props?.names?.map((tech) => (
        <FontAwesomeIcon
          className={styles.faIcon}
          icon={technologyFaMapper[tech]?.logo}
          fixedWidth
          style={{ color: `${technologyFaMapper[tech]?.color}` }}
        />
      ))}
      {/* <Image
          className={styles.technology}
          key={tech}
          src={technologyMapper[tech]}
          width={35}
          height={35}
          alt={`${tech} Logo`}
          loading="eager"
        /> */}
    </div>
  );
}
