"use client";
import { useStageReady } from "@/common/stage";
import styles from "@/styles/components/Orbit.module.scss";
import {
    faAws,
    faDocker,
    faGitAlt,
    faGithub,
    faGoogle,
    faJava,
    faJs,
    faLinux,
    faNodeJs,
    faPython,
    faReact,
} from "@fortawesome/free-brands-svg-icons";
import { faBrain, faDatabase } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";

const RINGS = [
    {
        size: 46,
        duration: 18,
        reverse: false,
        items: [
            { icon: faReact, label: "React" },
            { icon: faPython, label: "Python" },
            { icon: faJs, label: "JavaScript" },
        ],
    },
    {
        size: 73,
        duration: 30,
        reverse: true,
        items: [
            { icon: faAws, label: "AWS" },
            { icon: faDocker, label: "Docker" },
            { icon: faJava, label: "Java" },
            { icon: faBrain, label: "GenAI" },
        ],
    },
    {
        size: 100,
        duration: 44,
        reverse: false,
        items: [
            { icon: faGithub, label: "GitHub" },
            { icon: faGoogle, label: "GCP" },
            { icon: faNodeJs, label: "Node.js" },
            { icon: faDatabase, label: "Databases" },
            { icon: faGitAlt, label: "Git" },
            { icon: faLinux, label: "Linux" },
        ],
    },
];

const tiltSpring = { stiffness: 120, damping: 16 };

// A tech-stack solar system that leans toward the cursor.
export default function Orbit() {
    const ready = useStageReady();
    const pointerX = useMotionValue(0);
    const pointerY = useMotionValue(0);
    const rotateX = useSpring(useTransform(pointerY, [-1, 1], [16, -16]), tiltSpring);
    const rotateY = useSpring(useTransform(pointerX, [-1, 1], [-16, 16]), tiltSpring);

    useEffect(() => {
        if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return undefined;
        const onPointerMove = (event) => {
            pointerX.set((event.clientX / window.innerWidth) * 2 - 1);
            pointerY.set((event.clientY / window.innerHeight) * 2 - 1);
        };
        window.addEventListener("pointermove", onPointerMove, { passive: true });
        return () => window.removeEventListener("pointermove", onPointerMove);
    }, [pointerX, pointerY]);

    return (
        <motion.div
            className={styles.orbit}
            style={{ rotateX, rotateY, transformPerspective: 900 }}
            initial={{ opacity: 0, scale: 0.5, rotate: -45 }}
            animate={ready ? { opacity: 1, scale: 1, rotate: 0 } : { opacity: 0, scale: 0.5, rotate: -45 }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1], delay: ready ? 0.35 : 0 }}
            aria-hidden="true"
        >
            <div className={styles.core}>
                <span>&lt;/&gt;</span>
            </div>
            {RINGS.map((ring) => (
                <div
                    key={ring.size}
                    className={`${styles.ring} ${ring.reverse ? styles.reverse : ""}`}
                    style={{ "--size": `${ring.size}%`, "--duration": `${ring.duration}s` }}
                >
                    {ring.items.map((item, index) => (
                        <div
                            key={item.label}
                            className={styles.satellite}
                            style={{ "--angle": `${(360 / ring.items.length) * index}deg` }}
                        >
                            <span className={styles.planet} data-cursor={item.label}>
                                <span className={styles.planet_body}>
                                    <FontAwesomeIcon icon={item.icon} fixedWidth />
                                </span>
                            </span>
                        </div>
                    ))}
                </div>
            ))}
        </motion.div>
    );
}
