"use client";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faHatWizard, faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PT_Mono } from "next/font/google";
import styles from "../styles/components/BottomNavigation.module.scss";
import Link from "next/link";
import { usePathname } from 'next/navigation';

library.add(faHouse, faHatWizard);

const pt_mono = PT_Mono({
    weight: "400",
    subsets: ["latin"],
    display: "swap",
});

const currentPageStyle = {
    backgroundColor: "rgba(239, 234, 221, 0.05)",
    boxShadow: "0 0 1.5rem rgba(0, 0, 0, 0.8)",
    borderBottom: "0.025rem solid rgba(255,255,255,0.1)" ,
};

export default function BottomNavigation() {
    const currentPage = usePathname();

    return (
        <nav className={`${styles.navigation_links}`}>
            <ul className={styles.links}>
                <Link href="/">
                    <div
                        className={styles.nav}
                        style={currentPage === "/" ? currentPageStyle : null}
                    >
                        <div className={styles.spacing}>
                            <FontAwesomeIcon
                                className={styles.icon}
                                icon={faHouse}
                                fixedWidth
                                style={{color: "#09fdd9"}}
                            />
                            <li className={pt_mono.className}>Home</li>
                        </div>
                    </div>
                </Link>
                <Link href="/Lafzon-Ka-Jadugar">
                    <div
                        className={styles.nav}
                        style={currentPage === "/Lafzon-Ka-Jadugar" ? currentPageStyle : null}
                    >
                        <div className={styles.spacing}>
                            <FontAwesomeIcon
                                className={styles.icon}
                                icon={faHatWizard}
                                fixedWidth
                                style={{color: "#f6cd29"}}
                            />
                            <li className={pt_mono.className}>Poetry</li>
                        </div>
                    </div>
                </Link>
            </ul>
        </nav>
    );
}
