"use client";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faHatWizard, faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../styles/components/BottomNavigation.module.scss";
import { PT_Mono } from "next/font/google";
library.add(faHouse, faHatWizard);

const pt_mono = PT_Mono({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const currentPageStyle = {
  backgroundColor: "rgba(239, 234, 221, 0.1)",
  boxShadow: "0 0 0.3rem rgba(255, 255, 255, 0.5)",
  borderBottom: "0.025rem solid rgba(255,255,255,0.4)",
};

export default function BottomNavigation({ handlePageChange, currentPage }) {
  console.log(currentPage);
  return (
    <nav className={`${styles.navigation_links}`}>
      <ul className={styles.links}>
        <div
          className={styles.nav}
          onClick={() => handlePageChange("/")}
          style={currentPage == "/" ? currentPageStyle : null}
        >
          <div className={styles.spacing}>
            <FontAwesomeIcon
              className={styles.icon}
              icon={faHouse}
              fixedWidth
            />
            <li className={pt_mono.className}>Home</li>
          </div>
        </div>
        <div
          className={styles.nav}
          onClick={() => handlePageChange("/Lafzon-Ka-Jadugar")}
          style={currentPage != "/" ? currentPageStyle : null}
        >
          <div className={styles.spacing}>
            <FontAwesomeIcon
              className={styles.icon}
              icon={faHatWizard}
              fixedWidth
            />
            <li className={pt_mono.className}>Poetry</li>
          </div>
        </div>
      </ul>
    </nav>
  );
}
