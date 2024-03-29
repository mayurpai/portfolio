"use client";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faHatWizard, faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PT_Mono } from "next/font/google";
import styles from "../styles/components/BottomNavigation.module.scss";
library.add(faHouse, faHatWizard);

const pt_mono = PT_Mono({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const currentPageStyle = {
  backgroundColor: "rgba(239, 234, 221, 0.05)",
  boxShadow: "0 0 0.5rem rgba(0, 0, 0, 0.8)",
  // borderBottom: "0.025rem solid rgba(255,255,255,0.4)" ,
};

export default function BottomNavigation({ handlePageChange, currentPage }) {
  return (
    <nav className={`${styles.navigation_links}`}>
      <ul className={styles.links}>
        <div
          className={styles.nav}
          onClick={() => {
            handlePageChange("/");
          }}
          style={currentPage == "/" ? currentPageStyle : null}
        >
          <div className={styles.spacing}>
            <FontAwesomeIcon
              className={styles.icon}
              icon={faHouse}
              fixedWidth
            />
            {/* <li className={pt_mono.className}>Home</li> */}
          </div>
        </div>
        <div
          className={styles.nav}
          onClick={() => {
            handlePageChange("/Lafzon-Ka-Jadugar");
          }}
          style={currentPage != "/" ? currentPageStyle : null}
        >
          <div className={styles.spacing}>
            <FontAwesomeIcon
              className={styles.icon}
              icon={faHatWizard}
              fixedWidth
            />
            {/* <li className={pt_mono.className}>Poetry</li> */}
          </div>
        </div>
      </ul>
    </nav>
  );
}
