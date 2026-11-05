"use client";
import styles from "@/styles/components/Marquee.module.scss";
import {
    motion,
    useAnimationFrame,
    useMotionValue,
    useReducedMotion,
    useScroll,
    useSpring,
    useTransform,
    useVelocity,
    wrap,
} from "framer-motion";
import { useRef } from "react";

const TECH = [
    "React.js",
    "Next.js",
    "Python",
    "FastAPI",
    "Kubernetes",
    "AWS",
    "Generative AI",
    "RAG",
    "Java",
    "Spring Boot",
    "Go",
    "Docker",
    "Redis",
    "PostgreSQL",
];

const MOTTO = [
    "No finish line",
    "Just builds",
    "Bending systems to my will",
    "Teaching fuels my passion",
    "Cranking the tech magic to eleven",
];

// Drifts on its own and speeds up (or reverses) with the page's scroll velocity.
function Band({ items, baseVelocity, className }) {
    const reduceMotion = useReducedMotion();
    const baseX = useMotionValue(0);
    const direction = useRef(1);
    const { scrollY } = useScroll();
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, { damping: 50, stiffness: 400 });
    const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 4], { clamp: false });
    // Four copies of the content; wrapping across one copy (25%) makes the loop seamless.
    const x = useTransform(baseX, (value) => `${wrap(-50, -25, value)}%`);

    useAnimationFrame((_, delta) => {
        if (reduceMotion) return;
        const factor = velocityFactor.get();
        if (factor < 0) direction.current = -1;
        else if (factor > 0) direction.current = 1;
        let moveBy = direction.current * baseVelocity * (delta / 1000);
        moveBy += moveBy * Math.abs(factor);
        baseX.set(baseX.get() + moveBy);
    });

    return (
        <div className={`${styles.band} ${className}`}>
            <motion.div className={styles.track} style={{ x }}>
                {[0, 1, 2, 3].map((copy) => (
                    <div className={styles.group} key={copy}>
                        {items.map((item) => (
                            <span className={styles.item} key={item}>
                                {item}
                                <span className={styles.star}>✦</span>
                            </span>
                        ))}
                    </div>
                ))}
            </motion.div>
        </div>
    );
}

export default function Marquee() {
    return (
        <section className={styles.marquee} aria-hidden="true">
            <Band items={TECH} baseVelocity={-0.6} className={styles.band_primary} />
            <Band items={MOTTO} baseVelocity={0.6} className={styles.band_outline} />
        </section>
    );
}
