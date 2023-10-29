import { Social } from "@/constants/Social";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
library.add(faInstagram, faLinkedin, faGithub);

export const Connections = [
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
