"use client";
import styles from "@/styles/components/TiltCard.module.scss";
import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

const spring = { stiffness: 170, damping: 18, mass: 0.6 };

// 3D tilt with a cursor-tracking glare and spotlight border. `max={0}` keeps only the light effects.
// While the card crosses the middle of the screen it gets `data-active`, so hover styles also play on scroll.
export default function TiltCard({ children, className = "", max = 10 }) {
    const ref = useRef(null);
    const px = useMotionValue(0.5);
    const py = useMotionValue(0.5);
    const hover = useMotionValue(0);
    const rotateX = useSpring(useTransform(py, [0, 1], [max, -max]), spring);
    const rotateY = useSpring(useTransform(px, [0, 1], [-max, max]), spring);
    const glareOpacity = useSpring(hover, spring);
    const glareX = useTransform(px, (value) => `${value * 100}%`);
    const glareY = useTransform(py, (value) => `${value * 100}%`);
    const glare = useMotionTemplate`radial-gradient(circle at ${glareX} ${glareY}, rgba(255, 255, 255, 0.14), transparent 55%)`;

    useEffect(() => {
        const element = ref.current;
        const observer = new IntersectionObserver(
            ([entry]) => element.toggleAttribute("data-active", entry.isIntersecting),
            { rootMargin: "-48% 0px -48% 0px" }
        );
        observer.observe(element);
        return () => observer.disconnect();
    }, []);

    const onPointerMove = (event) => {
        if (event.pointerType !== "mouse") return;
        const element = ref.current;
        const rect = element.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width;
        const y = (event.clientY - rect.top) / rect.height;
        px.set(x);
        py.set(y);
        hover.set(1);
        element.style.setProperty("--spot-x", `${event.clientX - rect.left}px`);
        element.style.setProperty("--spot-y", `${event.clientY - rect.top}px`);
        element.style.setProperty("--px", x.toFixed(3));
        element.style.setProperty("--py", y.toFixed(3));
    };

    const onPointerLeave = () => {
        px.set(0.5);
        py.set(0.5);
        hover.set(0);
        ref.current.style.setProperty("--px", "0.5");
        ref.current.style.setProperty("--py", "0.5");
    };

    return (
        <motion.div
            ref={ref}
            className={`${styles.tilt} ${className}`}
            style={{ rotateX, rotateY, transformPerspective: 1000 }}
            onPointerMove={onPointerMove}
            onPointerLeave={onPointerLeave}
        >
            {children}
            <motion.span className={styles.glare} style={{ background: glare, opacity: glareOpacity }} aria-hidden="true" />
            <span className={styles.spotlight} aria-hidden="true" />
        </motion.div>
    );
}
