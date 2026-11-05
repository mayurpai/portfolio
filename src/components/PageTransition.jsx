"use client";
import { setStageReady } from "@/common/stage";
import styles from "@/styles/components/PageTransition.module.scss";
import { AnimatePresence, motion } from "framer-motion";
import { La_Belle_Aurore } from "next/font/google";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const la_Belle_Aurore = La_Belle_Aurore({
    weight: "400",
    subsets: ["latin"],
    display: "swap",
});

const EVENT = "page-transition";
const ease = [0.76, 0, 0.24, 1];
// From usePathname(), which drops the basePath; window.location keeps it (/portfolio on GitHub Pages).
let currentPath = null;

// Use as a Link onClick: plays the curtain, then navigates. Modified clicks fall through to the Link.
export function startPageTransition(event, href, label) {
    if (event.defaultPrevented || event.button !== 0) return;
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    if (href === currentPath) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    event.preventDefault();
    window.dispatchEvent(new CustomEvent(EVENT, { detail: { href, label } }));
}

export default function PageTransition() {
    const router = useRouter();
    const pathname = usePathname();
    const [transition, setTransition] = useState(null);

    useEffect(() => {
        currentPath = pathname;
    }, [pathname]);

    useEffect(() => {
        const onStart = (event) => {
            setTransition((current) => current ?? { ...event.detail, phase: "cover" });
        };
        window.addEventListener(EVENT, onStart);
        return () => window.removeEventListener(EVENT, onStart);
    }, []);

    useEffect(() => {
        if (transition?.phase !== "pushed") return undefined;
        const reveal = () => {
            setStageReady(true);
            setTransition((current) => current && { ...current, phase: "reveal" });
        };
        // Give the new page a beat to paint; reveal anyway if the route never changes.
        const timer = setTimeout(reveal, pathname === transition.href ? 120 : 4000);
        return () => clearTimeout(timer);
    }, [pathname, transition]);

    const onAnimationComplete = () => {
        if (transition?.phase === "cover") {
            setStageReady(false);
            setTransition((current) => ({ ...current, phase: "pushed" }));
            router.push(transition.href);
        } else if (transition?.phase === "reveal") {
            setTransition(null);
        }
    };

    const revealing = transition?.phase === "reveal";

    return (
        <AnimatePresence>
            {transition && (
                <motion.div
                    key="curtain"
                    className={styles.curtain}
                    initial={{ y: "100%" }}
                    animate={{ y: revealing ? "-100%" : "0%" }}
                    transition={{ duration: revealing ? 0.85 : 0.6, ease }}
                    onAnimationComplete={onAnimationComplete}
                    aria-hidden="true"
                >
                    <motion.span
                        className={styles.label}
                        initial={{ opacity: 0, y: 60, rotate: 4 }}
                        animate={revealing ? { opacity: 0, y: -60, rotate: -2 } : { opacity: 1, y: 0, rotate: 0 }}
                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: revealing ? 0 : 0.2 }}
                    >
                        <span className={`${styles.tag} ${la_Belle_Aurore.className}`}>&lt;</span>
                        {transition.label}
                        <span className={`${styles.tag} ${la_Belle_Aurore.className}`}>/&gt;</span>
                    </motion.span>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
