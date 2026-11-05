"use client";
import styles from "@/styles/components/BackToTop.module.scss";
import { faRocket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useEffect, useState } from "react";

export default function BackToTop() {
    const { scrollY, scrollYProgress } = useScroll();
    const [visible, setVisible] = useState(false);
    const [launching, setLaunching] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => setVisible(latest > 700));

    useEffect(() => {
        if (!launching) return undefined;
        const timer = setTimeout(() => setLaunching(false), 1400);
        return () => clearTimeout(timer);
    }, [launching]);

    const launch = () => {
        setLaunching(true);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <AnimatePresence>
            {visible && (
                <motion.button
                    key="back-to-top"
                    type="button"
                    className={styles.button}
                    onClick={launch}
                    aria-label="Back to top"
                    data-cursor="Lift off"
                    data-launching={launching}
                    initial={{ opacity: 0, scale: 0.4, y: 40 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.4, y: 40 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                    <svg className={styles.ring} viewBox="0 0 48 48" aria-hidden="true">
                        <circle className={styles.track} cx="24" cy="24" r="21" />
                        <motion.circle
                            className={styles.progress}
                            cx="24"
                            cy="24"
                            r="21"
                            style={{ pathLength: scrollYProgress }}
                        />
                    </svg>
                    <motion.span
                        className={styles.rocket}
                        animate={launching ? { y: [0, 4, -90], opacity: [1, 1, 0] } : { y: 0, opacity: 1 }}
                        transition={launching ? { duration: 0.9, times: [0, 0.25, 1], ease: "easeIn" } : { duration: 0.3 }}
                    >
                        <FontAwesomeIcon icon={faRocket} />
                        <span className={styles.flame} />
                    </motion.span>
                </motion.button>
            )}
        </AnimatePresence>
    );
}
