"use client";
import Button from "@/components/Button";
import Magnetic from "@/components/Magnetic";
import styles from "@/styles/sections/Message.module.scss";
import { motion } from "framer-motion";
import { PT_Mono, Sigmar_One } from "next/font/google";

const pt_mono = PT_Mono({
    weight: "400",
    subsets: ["latin"],
    display: "swap",
});

const sigmar_One = Sigmar_One({
    weight: "400",
    subsets: ["latin"],
    display: "swap",
});

const TAGLINE = ["No", "finish", "line.", "Just", "builds."];

const line = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.09 } },
};

const word = {
    hidden: { y: "115%", rotate: 8 },
    visible: { y: "0%", rotate: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
};

export default function Message() {
    return (
        <section className={styles.message_conatiner} id="message">
            <div className={styles.message_body_container}>
                <motion.h2
                    className={styles.tagline}
                    variants={line}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.6 }}
                    aria-label={TAGLINE.join(" ")}
                >
                    {TAGLINE.map((text, index) => (
                        <span className={styles.word_mask} key={text} aria-hidden="true">
                            <motion.span className={index < 3 ? styles.word_outline : styles.word_fill} variants={word}>
                                {text}
                            </motion.span>
                        </span>
                    ))}
                </motion.h2>
                <Magnetic>
                    <Button
                        buttonName="Let's Debug Our Connection"
                        onClick={() => window.dispatchEvent(new Event("open-connections"))}
                        cursor="Say hi"
                    />
                </Magnetic>
                <div className={`${pt_mono.className} ${styles.message}`}>
                    Designed with the <span className={styles.heart}>❤️</span> of code by<span className={`${sigmar_One.className} ${styles.bold_text}`}> Mayur Pai </span>
                </div>
            </div>
        </section>
    );
}
