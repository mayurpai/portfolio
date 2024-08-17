import { Social } from "@/constants/Social";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
    faFacebook,
    faGithub,
    faInstagram,
    faLinkedin,
    faWhatsapp,
    faYoutube
} from "@fortawesome/free-brands-svg-icons";
library.add(faInstagram, faLinkedin, faGithub, faWhatsapp);

export const colors = {
  facebook: "#1877f2",
  github: "#171515",
  instagram: "#e4405f",
  linkedin: "#0a66c2",
  whatsapp: "#25d366",
};

export const Icons = [
  {
    icon: faLinkedin,
    heading: "LinkedIn",
    username: "@mayur-pai5",
    link: Social.LinkedIn,
    color: colors.linkedin,
  },
  {
    icon: faGithub,
    heading: "GitHub",
    username: "@mayurpai",
    link: Social.GitHub,
    color: colors.linkedin,
  },
  {
    icon: faInstagram,
    heading: "Instagram",
    username: "@mayurpai19",
    link: Social.Instagram,
    color: colors.instagram,
  },
  {
    icon: faYoutube,
    heading: "Facebook",
    username: "Mayur Pai B H",
    link: Social.YouTube,
  },
  {
    icon: faWhatsapp,
    heading: "WhatsApp",
    username: "मयूर पै",
    link: Social.WhatsApp,
  },
];
