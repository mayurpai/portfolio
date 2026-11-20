"use client";
import { playEntrance, playPoetry, unlockSound } from "@/common/sound";
import { setStageReady } from "@/common/stage";
import styles from "@/styles/components/PageTransition.module.scss";
import { animate, motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { Bungee, PT_Mono } from "next/font/google";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";

const bungee = Bungee({
    weight: "400",
    subsets: ["latin"],
    display: "swap",
});

const pt_mono = PT_Mono({
    weight: "400",
    subsets: ["latin"],
    display: "swap",
});

const EVENT = "page-transition";
// Long enough for the destination's name to finish writing itself before the realm opens.
const MIN_HOLD_MS = 1500;
const MOTE_TONES = ["255, 250, 235", "246, 205, 41", "9, 253, 217", "253, 9, 83"];

// Each destination gets its own light and sound: gold and a harp for the realm of words,
// cyan and the intro's warp for Mayur's universe.
const REALMS = {
    "/": { title: "Mayur Pai", whisper: "returning to the universe", glow: "9, 253, 217", sound: playEntrance },
    "/Lafzon-Ka-Jadugar": { title: "Lafzon Ka Jadugar", whisper: "entering the realm of words", glow: "246, 205, 41", sound: playPoetry },
};

// From usePathname(), which drops the basePath; window.location keeps it (/portfolio on GitHub Pages).
let currentPath = null;

// usePathname() keeps the trailing slash (trailingSlash: true); routes here are written without one.
export function routeOf(pathname) {
    return pathname && pathname.length > 1 ? pathname.replace(/\/+$/, "") : pathname;
}

// Use as a Link onClick: opens the realm, then navigates. Modified clicks fall through to the Link.
export function startPageTransition(event, href, label) {
    if (event.defaultPrevented || event.button !== 0) return;
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    if (href === currentPath) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    event.preventDefault();
    // The click is the gesture browsers need before audio can play when the portal opens.
    unlockSound();
    // Keyboard "clicks" report 0,0, so fall back to the link's centre.
    const box = event.currentTarget.getBoundingClientRect();
    const origin = event.clientX || event.clientY
        ? { x: event.clientX, y: event.clientY }
        : { x: box.left + box.width / 2, y: box.top + box.height / 2 };
    window.dispatchEvent(new CustomEvent(EVENT, { detail: { href, label, origin } }));
}

function makeMotes(count) {
    return Array.from({ length: count }, (_, index) => ({
        id: index,
        x: Math.random() * 100,
        size: 2 + Math.random() * 4,
        duration: 3 + Math.random() * 3,
        delay: -Math.random() * 6,
        drift: (Math.random() - 0.5) * 12,
        tone: MOTE_TONES[index % MOTE_TONES.length],
    }));
}

export default function PageTransition() {
    const router = useRouter();
    const pathname = usePathname();
    const route = routeOf(pathname);
    const [transition, setTransition] = useState(null);
    const startedAt = useRef(0);
    const hole = useMotionValue(0);
    const mask = useMotionTemplate`radial-gradient(circle at 50% 50%, transparent ${hole}vmax, #000 calc(${hole}vmax + 8vmax))`;

    useEffect(() => {
        currentPath = route;
    }, [route]);

    useEffect(() => {
        const onStart = (event) => {
            setTransition((current) => {
                if (current) return current;
                startedAt.current = performance.now();
                hole.set(0);
                return { ...event.detail, phase: "cover" };
            });
        };
        window.addEventListener(EVENT, onStart);
        return () => window.removeEventListener(EVENT, onStart);
    }, [hole]);

    const phase = transition?.phase;
    const href = transition?.href;
    const arrived = transition ? route === href : false;

    // While the veil fully covers the old page, stop it painting; the new page paints underneath once it arrives.
    useEffect(() => {
        if (phase !== "pushed" || arrived) return undefined;
        const app = document.querySelector(".main_app_container");
        if (app) app.style.visibility = "hidden";
        return () => {
            if (app) app.style.visibility = "";
        };
    }, [phase, arrived]);

    useEffect(() => {
        if (phase !== "pushed") return undefined;
        const wait = Math.max(120, MIN_HOLD_MS - (performance.now() - startedAt.current));
        // Give the new page a beat to paint; reveal anyway if the route never changes.
        const timer = setTimeout(() => setTransition((current) => current && { ...current, phase: "reveal" }), arrived ? wait : 4000);
        return () => clearTimeout(timer);
    }, [phase, arrived]);

    useEffect(() => {
        if (phase !== "reveal") return undefined;
        // Timed like the intro's entrance sound: it starts as the portal does.
        REALMS[href]?.sound();
        // Like the intro: let the portal start opening before the page's own entrances add work.
        let staged = false;
        const stage = setTimeout(() => {
            staged = true;
            setStageReady(true);
        }, 250);
        const opening = animate(hole, 150, {
            duration: 1.2,
            ease: [0.83, 0, 0.17, 1],
            onComplete: () => setTransition(null),
        });
        return () => {
            clearTimeout(stage);
            if (!staged) setStageReady(true);
            opening.stop();
        };
    }, [phase, hole, href]);

    const realm = transition && (REALMS[transition.href] ?? { title: transition.label, whisper: "entering", glow: "9, 253, 217" });
    const motes = useMemo(() => (href ? makeMotes(36) : []), [href]);

    if (!transition) return null;

    const { x, y } = transition.origin;
    const revealing = phase === "reveal";
    // Exactly far enough to reach the farthest corner from where the visitor clicked.
    const reach = Math.ceil(Math.hypot(Math.max(x, window.innerWidth - x), Math.max(y, window.innerHeight - y))) + 40;

    const onCovered = () => {
        if (transition.phase !== "cover") return;
        setStageReady(false);
        setTransition((current) => ({ ...current, phase: "pushed" }));
        router.push(transition.href);
    };

    // Everything inside the veil runs as CSS transform/opacity/filter animations, so the compositor keeps
    // them moving while the main thread swaps pages; only the veil's clip and mask are driven from here.
    return (
        <>
            <motion.div
                className={styles.veil}
                data-phase={phase}
                style={{ "--glow": realm.glow, ...(revealing ? { WebkitMaskImage: mask, maskImage: mask } : null) }}
                initial={{ clipPath: `circle(0px at ${x}px ${y}px)` }}
                animate={{ clipPath: `circle(${reach}px at ${x}px ${y}px)` }}
                transition={{ duration: 0.9, ease: [0.65, 0, 0.35, 1] }}
                onAnimationComplete={onCovered}
                aria-hidden="true"
            >
                <div className={styles.scene}>
                    <div className={styles.rays} />
                    <div className={`${styles.rays} ${styles.rays_reverse}`} />
                    <div className={styles.halo} />
                    <div className={styles.clouds}>
                        <span />
                        <span />
                        <span />
                        <span />
                    </div>
                    <div className={styles.motes}>
                        {motes.map((mote) => (
                            <span
                                key={mote.id}
                                style={{
                                    "--x": `${mote.x}%`,
                                    "--size": `${mote.size}px`,
                                    "--duration": `${mote.duration}s`,
                                    "--delay": `${mote.delay}s`,
                                    "--drift": `${mote.drift}vw`,
                                    "--tone": mote.tone,
                                }}
                            />
                        ))}
                    </div>
                </div>
                <div className={styles.title}>
                    <span className={`${styles.whisper} ${pt_mono.className}`}>{realm.whisper}</span>
                    <span className={`${styles.name} ${bungee.className}`}>
                        {realm.title.split(" ").map((word, wordIndex, words) => {
                            const offset = words.slice(0, wordIndex).join(" ").length + (wordIndex ? 1 : 0);
                            return (
                                <span key={wordIndex}>
                                    <span className={styles.word}>
                                        {[...word].map((letter, index) => (
                                            <span key={index} className={styles.letter} style={{ "--delay": `${0.4 + (offset + index) * 0.035}s` }}>
                                                {letter}
                                            </span>
                                        ))}
                                    </span>
                                    {wordIndex < words.length - 1 && " "}
                                </span>
                            );
                        })}
                    </span>
                    <span className={styles.flourish} />
                </div>
            </motion.div>
            {revealing && <div className={styles.ring} style={{ "--glow": realm.glow }} aria-hidden="true" />}
        </>
    );
}
