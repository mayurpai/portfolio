"use client";
import BoilerHeading from "@/common/BoilerHeading";
import Button from "@/components/Button";
import ExperienceCard from "@/components/ExperienceCard";
import Magnetic from "@/components/Magnetic";
import styles from "@/styles/sections/Experience.module.scss";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

const heading = "Experience";



export default function Experience() {
    const timelineRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: timelineRef, offset: ["start 75%", "end 60%"] });
    const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 24, restDelta: 0.001 });
    const cometTop = useTransform(progress, (value) => `${value * 100}%`);

    return (
        <section className={styles.experience_conatiner} id="experience">
            <div className={styles.experience_body_container}>
                <BoilerHeading title={heading} header="h1" section />
                <div className={styles.experience_section_container} ref={timelineRef}>
                    <div className={styles.timeline} aria-hidden="true">
                        <motion.span className={styles.timeline_fill} style={{ scaleY: progress }} />
                        <motion.span className={styles.timeline_comet} style={{ top: cometTop }} />
                    </div>
                    <ExperienceCard />
                </div>
                <div className={styles.experience_resume}>
                    <Magnetic>
                        <Button buttonName="Stalk My Dev Resume" icon={faMagnifyingGlass} href="docs/Resume.pdf" cursor="Open" />
                    </Magnetic>
                </div>
            </div>
        </section>
    );
}
