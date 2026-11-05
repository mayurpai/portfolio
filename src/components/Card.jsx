"use client";
import TiltCard from "@/components/TiltCard";
import { Projects } from "@/constants/Project";
import styles from "@/styles/components/Card.module.scss";
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
library.add(faGithub, faLink, faCode, faHtml5, faCss3Alt, faJs, faReact);

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

// Cards are dealt in from below; the right-hand column lands a beat later.
const cardReveal = {
    hidden: { opacity: 0, y: 90, rotateX: 22, scale: 0.92 },
    visible: (column) => ({
        opacity: 1,
        y: 0,
        rotateX: 0,
        scale: 1,
        transition: { duration: 0.9, delay: column * 0.12, ease: [0.22, 1, 0.36, 1], when: "beforeChildren" },
    }),
};

export default function Card() {
    return Projects.map((item, id) => {
        // let link = item.webLink == "#" ? item.codeLink : item.webLink;
        const isTitleTooLong = item.title.length > 16;
        const isTechnologyTooLong = item.technology.length > 3;
        return (
            <motion.div
                className={styles.projects_card}
                key={id}
                variants={cardReveal}
                custom={id % 2}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                style={{ transformPerspective: 1200 }}
            >
                <Link href={item.codeLink} target="_blank">
                    <TiltCard className={styles.card} max={12}>
                        <div className={styles.box}>
                            <div className={styles.content}>
                                <h2 className={`${sigmar_One.className} ${styles.id}`}>
                                    {String(id + 1).padStart(2, "0")}
                                </h2>
                                <div className={styles.project_image} data-cursor="View code">
                                    <Image
                                        style={imageStyle}
                                        fill
                                        //   sizes="100vw"
                                        src={item.imgLink}
                                        alt={item.title}
                                        priority={true}
                                    ></Image>
                                </div>
                                <div className={styles.technology_section}>
                                    <p className={`${styles.title_name}`}>{item.title}<FontAwesomeIcon icon={faUpRightFromSquare} className={styles.link_icon} /></p>
                                    <h6 className={pt_mono.className}>
                                        {item.fromDate} - {item.toDate}
                                    </h6>
                                    <p
                                        className={`${styles.description} ${pt_mono.className}`}
                                        // style={
                                        //     isTitleTooLong && isTechnologyTooLong
                                        //         ? {
                                        //             display: "-webkit-box",
                                        //             WebkitLineClamp: 3,
                                        //             WebkitBoxOrient: "vertical",
                                        //             overflow: "hidden",
                                        //             textOverflow: "ellipsis",
                                        //         }
                                        //         : {}
                                        // }
                                    >
                                        {item.shortDescription}
                                    </p>
                                    {
                                        item.webLink !== "#" && <div className={`${pt_mono.className} ${styles.web}`}>
                                            <div
                                                onClick={(event) => {
                                                    // Keep the card's own link (the code) from opening as well.
                                                    event.preventDefault();
                                                    window.open(item.webLink, '_blank', 'noopener,noreferrer');
                                                }}
                                                className={`${pt_mono.className} ${styles.inner_button_web}`}
                                                data-cursor="Live ↗"
                                            >
                                                <FontAwesomeIcon icon={faLink} className={styles.redirect_icon} />{item.title}
                                            </div>
                                        </div>
                                    }
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
