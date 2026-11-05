"use client";
import TiltCard from "@/components/TiltCard";
import { Experiences } from "@/constants/Experiences";
import styles from "@/styles/components/ExperienceCard.module.scss";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
    faCss3Alt,
    faGithub,
    faHtml5,
    faJs,
    faReact,
} from "@fortawesome/free-brands-svg-icons";
import { faCode, faLink, faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { PT_Mono, Sigmar_One } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import Technology from "./Technology";
library.add(faGithub, faLink, faCode, faHtml5, faCss3Alt, faJs, faReact, faUpRightFromSquare);

const sigmar_One = Sigmar_One({
    weight: "400",
    subsets: ["latin"],
    display: "swap",
});

const pt_mono = PT_Mono({
    weight: "400",
    subsets: ["latin"],
    display: "swap",
});

const imageStyle = {
    borderRadius: "1rem",
    border: "none",
    padding: "0.25rem",
    outline: "none",
    objectFit: "cover",
};

const cardReveal = {
    hidden: { opacity: 0, x: 70, filter: "blur(8px)" },
    visible: {
        opacity: 1,
        x: 0,
        filter: "blur(0px)",
        transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], staggerChildren: 0.07, delayChildren: 0.2 },
    },
};

const rise = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const nodePop = {
    hidden: { scale: 0 },
    visible: { scale: 1, transition: { type: "spring", stiffness: 400, damping: 14 } },
};

export default function ExperienceCard() {
    return Experiences.map((item, id) => {
        // const isDescTooLong = item?.description?.length > 2;
        return (
            <motion.div
                className={styles.experience_card}
                key={id}
                variants={cardReveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
            >
                <motion.span className={styles.node} variants={nodePop} aria-hidden="true" />
                <Link href={item.website} target="_blank">
                    <TiltCard className={styles.card} max={0}>
                        <div className={styles.box}>
                            <div className={styles.content}>
                                <div className={styles.logo} data-cursor="Visit ↗">
                                    <Image
                                        style={imageStyle}
                                        fill
                                        src={item.image}
                                        alt={item.name}
                                        priority={true}
                                    ></Image>
                                </div>
                                <div className={styles.context_holder}>
                                    <div className={styles.experience_content_section}>
                                        <h3 className={`${styles.title}`}>{item.name} <FontAwesomeIcon icon={faUpRightFromSquare} className={styles.link_icon} /></h3>
                                        <h6 className={`${pt_mono.className} ${styles.id}`}>
                                            {item.role.map((role, index) => {
                                                const fromIndex = index; // Normal index for the 'from' array
                                                const toIndex = fromIndex + 1; // Next index in 'from', or 'to' if it's the last role
                                                return (
                                                    <motion.p className={styles.role_duration} key={index} variants={rise}>
                                                        <span className={styles.role}>{role}</span> <span className={styles.dividor}>|</span> <span className={styles.duration}>{item.from[fromIndex]} - {toIndex < item.from.length ? item.from[toIndex] : item.to}</span>
                                                    </motion.p>
                                                );
                                            }).reverse()}
                                        </h6>
                                    </div>
                                    {/* Animated as one block: transformed children drop out of the gradient text clip. */}
                                    <motion.div className={`${styles.description} ${pt_mono.className}`} variants={rise}>
                                        <ul className={styles.desc_list}>
                                            {item?.description?.map((desc, id) => {
                                                return (
                                                    <li key={id} dangerouslySetInnerHTML={{ __html: desc }} />
                                                );
                                            })}
                                        </ul>
                                    </motion.div>

                                    <Technology names={item.technology} />
                                </div>
                            </div>
                        </div>
                    </TiltCard>
                </Link>
            </motion.div>
        );
    });
}
