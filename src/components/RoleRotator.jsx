"use client";
import { useStageReady } from "@/common/stage";
import styles from "@/styles/components/RoleRotator.module.scss";
import { PT_Mono } from "next/font/google";
import { useEffect, useRef, useState } from "react";

const pt_mono = PT_Mono({
    weight: "400",
    subsets: ["latin"],
    display: "swap",
});

const ROLES = [
    "Software Engineer II @ Nike",
    "Cloud Platform & GenAI-Centric Full Stack Engineer",
    "Teacher at Heart",
    "Magician of Words",
];
const GLYPHS = "<>/{}[]=+*#$%&_01";
const HOLD_MS = 2400;
const TICK_MS = 24;

// Cycles through roles with a "decoding" scramble between each one.
export default function RoleRotator() {
    const ready = useStageReady();
    const [text, setText] = useState(ROLES[0]);
    const [round, setRound] = useState(0);
    const current = useRef(ROLES[0]);

    useEffect(() => {
        if (!ready) return undefined;
        const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        let index = 0;
        let frame = 0;
        let timer = 0;

        const show = (value) => {
            current.current = value;
            setText(value);
        };

        const scrambleTo = (target) => {
            setRound((value) => value + 1);
            const from = current.current;
            const length = Math.max(from.length, target.length);
            const queue = Array.from({ length }, (_, i) => {
                const start = Math.floor(Math.random() * 16);
                return { from: from[i] ?? "", to: target[i] ?? "", start, end: start + 6 + Math.floor(Math.random() * 16) };
            });
            const startedAt = performance.now();

            const update = () => {
                // Time-based ticks keep the decode speed the same on 60Hz and 120Hz screens.
                const tick = Math.floor((performance.now() - startedAt) / TICK_MS);
                let output = "";
                let done = 0;
                for (const item of queue) {
                    if (tick >= item.end) {
                        done += 1;
                        output += item.to;
                    } else if (tick >= item.start) {
                        // Spaces stay put so a wrapped role doesn't jump between lines mid-decode.
                        output += item.to === " " ? " " : GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
                    } else {
                        output += item.from;
                    }
                }
                show(output);
                if (done === queue.length) {
                    timer = setTimeout(next, HOLD_MS);
                    return;
                }
                frame = requestAnimationFrame(update);
            };
            update();
        };

        const next = () => {
            index = (index + 1) % ROLES.length;
            if (reduceMotion) {
                show(ROLES[index]);
                timer = setTimeout(next, HOLD_MS + 600);
            } else {
                scrambleTo(ROLES[index]);
            }
        };

        if (reduceMotion) {
            timer = setTimeout(next, HOLD_MS);
        } else {
            current.current = "";
            scrambleTo(ROLES[0]);
        }

        return () => {
            cancelAnimationFrame(frame);
            clearTimeout(timer);
        };
    }, [ready]);

    return (
        <p className={`${styles.role} ${pt_mono.className}`}>
            <span key={round} className={styles.accent} aria-hidden="true" />
            <span className={styles.output} aria-hidden="true">
                {text}
                <span className={styles.caret} />
            </span>
            <span className="sr_only">{ROLES.join(", ")}</span>
        </p>
    );
}
