import Icon from "@/components/Icon";
import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import styles from "../styles/Icon.module.scss";
import { Social } from "@/constants/Social";
library.add(faGithub, faInstagram, faLinkedin, faFacebook);

export default function ParentIcon() {
  const colors = {
    facebook: "#1877f2",
    github: "#171515",
    instagram: "#e4405f",
    linkedin: "#0a66c2",
    whatsapp: "#25d366",
  };
  return (
    <div className={styles.parent_icon}>
      <Icon
        name="LinkedIn"
        icon={faLinkedin}
        url={Social.LinkedIn}
        color={colors.linkedin}
      />
      <Icon
        name="Facebook"
        icon={faFacebook}
        url={Social.Facebook}
        color={colors.facebook}
      />
      <Icon
        name="GitHub"
        icon={faGithub}
        url={Social.GitHub}
        color={colors.github}
      />
      <Icon
        name="Instagram"
        icon={faInstagram}
        url={Social.Instagram}
        color={colors.instagram}
      />
      <Icon
        name="WhatsApp"
        icon={faWhatsapp}
        url={Social.WhatsApp}
        color={colors.whatsapp}
      />
    </div>
  );
}
