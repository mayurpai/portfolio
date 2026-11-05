"use client";

import { useStageReady } from "@/common/stage";
import { startPageTransition } from "@/components/PageTransition";
import { Navigations } from "@/constants/Navigations";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { PT_Mono } from "next/font/google";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import styles from "../styles/components/BottomNavigation.module.scss";


const pt_mono = PT_Mono({
    weight: "400",
    subsets: ["latin"],
    display: "swap",
});

const item = {
    rest: { y: 0 },
    hover: { y: -3 },
};

const icon = {
    rest: { rotate: 0, scale: 1 },
    hover: { rotate: [0, -18, 14, -8, 0], scale: 1.25, transition: { duration: 0.55 } },
};

export default function BottomNavigation() {
    const currentPage = usePathname();
    const ready = useStageReady();

    return (
        <motion.nav
            className={styles.navigation_links}
            aria-label="Pages"
            initial={{ y: "160%", opacity: 0 }}
            animate={ready ? { y: "0%", opacity: 1 } : { y: "160%", opacity: 0 }}
            transition={{ type: "spring", stiffness: 180, damping: 20, delay: ready ? 0.5 : 0 }}
        >
            <ul className={styles.links}>
                {Navigations.map((navigation) => {
                    const active = currentPage === navigation.path;
                    return (
                        <li key={navigation.path}>
                            <Link
                                href={navigation.path}
                                className={styles.nav}
                                aria-current={active ? "page" : undefined}
                                onClick={(event) => startPageTransition(event, navigation.path, navigation.title)}
                            >
                                {active && (
                                    <motion.span
                                        layoutId="dock-active-pill"
                                        className={styles.active_pill}
                                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                    />
                                )}
                                <motion.span className={styles.spacing} variants={item} initial="rest" whileHover="hover">
                                    <motion.span className={styles.icon_wrap} variants={icon}>
                                        <FontAwesomeIcon
                                            className={styles.icon}
                                            icon={navigation.icon}
                                            fixedWidth
                                            style={{ color: navigation.color }}
                                        />
                                    </motion.span>
                                    <span className={`${pt_mono.className} ${styles.title}`}>{navigation.title}</span>
                                </motion.span>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </motion.nav>
    );
}
