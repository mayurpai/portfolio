"use client";
import TiltCard from "@/components/TiltCard";
import { sortedPoetry } from "@/constants/Poetry";
import styles from "@/styles/components/PoetryCard.module.scss";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faCheck, faCopy } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AnimatePresence, motion } from "framer-motion";
import { PT_Mono, Sigmar_One, Tiro_Devanagari_Hindi } from "next/font/google";
import { Fragment, useEffect, useRef, useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { Slide, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
library.add(faCopy, faInstagram);

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

const tiro_Devanagari_Hindi = Tiro_Devanagari_Hindi({
    weight: "400",
    subsets: ["latin"],
    display: "swap",
});

const imageStyle = {
    borderRadius: "1rem",
    border: "none",
    padding: "0.25rem",
    outline: "none",
};

const notify = () => {
    toast.success("Copied ✨", {
        position: "bottom-center",
        autoClose: 100,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Slide,
    });
};

// Alternate cards drift in with a slight opposite tilt, like pages being laid down.
const cardReveal = {
    hidden: (column) => ({ opacity: 0, y: 70, rotate: column ? 3 : -3, scale: 0.94 }),
    visible: { opacity: 1, y: 0, rotate: 0, scale: 1, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

const SPARKS = Array.from({ length: 12 }, (_, index) => {
    const angle = (index / 12) * Math.PI * 2;
    const distance = 2.4 + (index % 3) * 0.7;
    return { x: `${Math.cos(angle) * distance}rem`, y: `${Math.sin(angle) * distance}rem` };
});

function Sparkles() {
    return (
        <span className={styles.sparkles} aria-hidden="true">
            {SPARKS.map((spark, index) => (
                <motion.span
                    key={index}
                    className={styles.sparkle}
                    initial={{ x: 0, y: 0, scale: 0, opacity: 1 }}
                    animate={{ x: spark.x, y: spark.y, scale: [0, 1.2, 0], opacity: [1, 1, 0] }}
                    transition={{ duration: 0.85, ease: "easeOut" }}
                />
            ))}
        </span>
    );
}

function CopyButton({ text }) {
    const [copied, setCopied] = useState(false);
    const [bursts, setBursts] = useState(0);

    useEffect(() => {
        if (!copied) return undefined;
        const timer = setTimeout(() => setCopied(false), 1600);
        return () => clearTimeout(timer);
    }, [copied, bursts]);

    return (
        <CopyToClipboard
            text={text}
            onCopy={() => {
                setCopied(true);
                setBursts((count) => count + 1);
                notify();
            }}
        >
            <button type="button" className={styles.copy_icon} aria-label={copied ? "Poem copied" : "Copy poem"}>
                <AnimatePresence mode="wait" initial={false}>
                    <motion.span
                        key={copied ? "check" : "copy"}
                        className={styles.copy_glyph}
                        initial={{ scale: 0, rotate: -90 }}
                        animate={{ scale: 1, rotate: 0 }}
                        exit={{ scale: 0, rotate: 90 }}
                        transition={{ type: "spring", stiffness: 500, damping: 25 }}
                    >
                        <FontAwesomeIcon icon={copied ? faCheck : faCopy} fixedWidth />
                    </motion.span>
                </AnimatePresence>
                {bursts > 0 && <Sparkles key={bursts} />}
            </button>
        </CopyToClipboard>
    );
}

export default function PoetryCard() {
    const [visibleItems, setVisibleItems] = useState(10); // Number of items to show initially
    const [loading, setLoading] = useState(false);
    const containerRef = useRef(null);

    const loadMoreItems = () => {
        if (loading || visibleItems >= sortedPoetry.length) return;
        setLoading(true);
        setTimeout(() => {
            setVisibleItems((prev) => Math.min(prev + 10, sortedPoetry.length));
            setLoading(false);
        }, 500); // Simulate a delay for loading more items
    };
    useEffect(() => {
        const sentinel = containerRef.current;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    loadMoreItems();
                }
            },
            { threshold: 1.0 }
        );

        if (sentinel) {
            observer.observe(sentinel);
        }

        return () => observer.disconnect();
    }, [loading, visibleItems]);

    return (
        <>
            {sortedPoetry.slice(0, visibleItems).map((item, id) => (
                <motion.div
                    className={styles.poetry_card}
                    key={id}
                    variants={cardReveal}
                    custom={id % 2}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.15 }}
                >
                    <TiltCard className={styles.box} max={6}>
                        <div className={styles.project_image}>
                            <div className={styles.content}>
                                <div className={styles.technology_section}>
                                    <h3
                                        className={
                                            item.category == "Hindi"
                                                ? `${styles.title_hindi} ${styles.title} ${tiro_Devanagari_Hindi.className}`
                                                : `${styles.title_english} ${styles.title} ${pt_mono.className}`
                                        }
                                    >
                                        {item?.description?.map((desc, index) => (
                                            <Fragment key={index}>
                                                {desc}
                                                <br />
                                                {item.description.length - 1 != index ? <br /> : null}
                                            </Fragment>
                                        ))}
                                    </h3>
                                    <div className={styles.poetry_card_footer}>
                                        <h6 className={pt_mono.className}>{item.date}</h6>
                                        <CopyButton text={item.description.join("\n")} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </TiltCard>
                </motion.div>
            ))}
            <div ref={containerRef} className={styles.sentinel} aria-hidden="true"></div>
            <ToastContainer />
        </>
    );
}
