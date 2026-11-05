"use client";
import { motion } from "framer-motion";
import { Fragment } from "react";

const sentence = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.045, delayChildren: 0.05 } },
};

const letter = {
    hidden: { opacity: 0, y: "0.55em", rotateX: -85, filter: "blur(10px)" },
    visible: {
        opacity: 1,
        y: "0em",
        rotateX: 0,
        filter: "blur(0px)",
        transition: {
            type: "spring",
            stiffness: 260,
            damping: 18,
            opacity: { duration: 0.35 },
            filter: { duration: 0.45 },
        },
    },
};

const jelly = {
    scaleX: [1, 1.3, 0.8, 1.12, 0.95, 1],
    scaleY: [1, 0.75, 1.2, 0.9, 1.04, 1],
    transition: { duration: 0.75, ease: "easeInOut" },
};

// Splits text into springy letters. Without `play` it animates when scrolled into view.
export function AnimatedText({ text, play }) {
    const trigger =
        play === undefined
            ? { whileInView: "visible", viewport: { once: true, amount: 0.6 } }
            : { animate: play ? "visible" : "hidden" };
    const words = text.split(" ");
    let index = 0;

    return (
        <motion.span className="animated_text" variants={sentence} initial="hidden" {...trigger} aria-hidden="true">
            {words.map((word, wordIndex) => (
                <Fragment key={wordIndex}>
                    <span className="animated_word">
                        {Array.from(word).map((char) => (
                            <motion.span
                                key={index}
                                className="animated_char"
                                variants={letter}
                                whileHover={jelly}
                                style={{ "--i": index++ }}
                            >
                                {char}
                            </motion.span>
                        ))}
                    </span>
                    {wordIndex < words.length - 1 && " "}
                </Fragment>
            ))}
        </motion.span>
    );
}
