"use client";
import styles from "@/styles/components/ScrollProgress.module.scss";
import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, { stiffness: 160, damping: 30, restDelta: 0.001 });

    return <motion.div className={styles.bar} style={{ scaleX }} aria-hidden="true" />;
}
