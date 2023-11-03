"use client";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faHatWizard, faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import styles from "../styles/components/BottomNavigation.module.scss";
library.add(faHouse, faHatWizard);

export default function BottomNavigation() {
  return (
    <nav className={`${styles.navigation_links}`}>
      <ul className={styles.links}>
        <Link href="/">
          <FontAwesomeIcon className={styles.icon} icon={faHouse} fixedWidth />
          <li>Home</li>
        </Link>
        <Link href="/Lafzon-Ka-Jadugar">
          <FontAwesomeIcon
            className={styles.icon}
            icon={faHatWizard}
            fixedWidth
          />
          <li>Poetry</li>
        </Link>
      </ul>
    </nav>
  );
}
