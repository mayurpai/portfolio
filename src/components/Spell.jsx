"use client";
import { verseFont } from "@/common/poetryFonts";
import { copyText, pad, withCredit } from "@/common/spells";
import TiltCard from "@/components/TiltCard";
import styles from "@/styles/components/Spell.module.scss";
import { faCopy, faImage } from "@fortawesome/free-regular-svg-icons";
import { faArrowUpFromBracket, faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// Same three accents as the project case studies on the home page; the featured spell is always gold.
const ACCENTS = ["9, 253, 217", "246, 205, 41", "253, 9, 83"];
const GOLD = ACCENTS[1];

const reveal = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export function MoodDot({ color }) {
    return <i className={styles.dot} style={{ "--c": color }} aria-hidden="true" />;
}

export default function Spell({ spell, featured = false, onCopied, onShare, onImage }) {
    const [copied, setCopied] = useState(false);
    const no = pad(spell.no);

    useEffect(() => {
        if (!copied) return undefined;
        const timer = setTimeout(() => setCopied(false), 1600);
        return () => clearTimeout(timer);
    }, [copied]);

    const copy = async () => {
        if (await copyText(withCredit(spell))) {
            setCopied(true);
            onCopied();
        }
    };

    return (
        <motion.article
            className={`${styles.spell} ${featured ? styles.featured : ""}`}
            style={{ "--spot-color": featured ? GOLD : ACCENTS[spell.no % ACCENTS.length] }}
            variants={featured ? undefined : reveal}
            initial={featured ? false : "hidden"}
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
        >
            <TiltCard className={styles.tilt} max={8}>
                <div className={styles.window}>
                    <div className={styles.bar}>
                        <span className={styles.lights} aria-hidden="true">
                            <i />
                            <i />
                            <i />
                        </span>
                        <span className={styles.url}>
                            <span className={styles.host}>lafzon-ka-jadugar/</span>#{no}
                        </span>
                        {featured && <span className={styles.label}>✦ Spell of the moment</span>}
                    </div>
                    <div className={styles.body}>
                        <span className={styles.quote} aria-hidden="true">
                            “
                        </span>
                        <p className={styles.verse} style={{ fontFamily: verseFont }} lang={spell.lang === "en" ? "en" : "hi"}>
                            {spell.description.map((line, index) => (
                                <span key={index}>{line}</span>
                            ))}
                        </p>
                        <div className={styles.actions}>
                            <button
                                type="button"
                                className={`${styles.act} ${copied ? styles.done : ""}`}
                                onClick={copy}
                                aria-label={copied ? `Spell #${no} copied` : `Copy spell #${no} with credit`}
                            >
                                <FontAwesomeIcon icon={copied ? faCheck : faCopy} fixedWidth />
                                <span>{copied ? "Copied" : "Copy"}</span>
                            </button>
                            <button
                                type="button"
                                className={styles.act}
                                onClick={(event) => onShare(spell, event.currentTarget)}
                                aria-label={`Share spell #${no}`}
                                aria-haspopup="menu"
                            >
                                <FontAwesomeIcon icon={faArrowUpFromBracket} fixedWidth />
                                <span>Share</span>
                            </button>
                            <button type="button" className={styles.act} onClick={() => onImage(spell)} aria-label={`Share spell #${no} as an image`}>
                                <FontAwesomeIcon icon={faImage} fixedWidth />
                                <span>Image</span>
                            </button>
                        </div>
                    </div>
                </div>
            </TiltCard>
        </motion.article>
    );
}
