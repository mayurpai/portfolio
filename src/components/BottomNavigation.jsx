"use client";

import { Navigations } from "@/constants/Navigations";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PT_Mono } from "next/font/google";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import styles from "../styles/components/BottomNavigation.module.scss";


const pt_mono = PT_Mono({
    weight: "400",
    subsets: ["latin"],
    display: "swap",
});

const currentPageStyle = {
    backgroundColor: "rgba(239, 234, 221, 0.05)",
    boxShadow: "0 0 1.5rem rgba(0, 0, 0, 0.8)",
    borderBottom: "0.025rem solid rgba(255,255,255,0.1)",
};

export default function BottomNavigation() {
    const currentPage = usePathname();
    return (
        <nav className={`${styles.navigation_links}`}>
            <ul className={styles.links}>
                {Navigations.map((item, id) => {
                    return (
                        <Link href={item.path} key={id}>
                            <div
                                className={styles.nav}
                                style={currentPage === item.path ? currentPageStyle : null}
                            >
                                <div className={styles.spacing}>
                                    <FontAwesomeIcon
                                        className={styles.icon}
                                        icon={item.icon}
                                        fixedWidth
                                        style={{ color: item.color }}
                                    />
                                    <li className={pt_mono.className}>{item.title}</li>
                                </div>
                            </div>
                        </Link>
                    )
                })}
            </ul>
        </nav>
    );
}
