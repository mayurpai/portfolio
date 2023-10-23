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
          url="https://www.linkedin.com/in/mayur-pai5/"
          color={colors.linkedin}
        />
        <Icon
          name="Facebook"
          icon={faFacebook}
          url="https://www.facebook.com/profile.php?id=100010154376824"
          color={colors.facebook}
        />
        <Icon
          name="GitHub"
          icon={faGithub}
          url="https://github.com/mayurpai"
          color={colors.github}
        />
        <Icon
          name="Instagram"
          icon={faInstagram}
          url="https://www.instagram.com/mayurpai19/"
          color={colors.instagram}
        />
        <Icon
          name="WhatsApp"
          icon={faWhatsapp}
          url="https://web.whatsapp.com/send/?phone=919611609185/"
          color={colors.whatsapp}
        />
    </div>
  );
}
