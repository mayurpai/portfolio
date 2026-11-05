"use client";
import { motion, useSpring } from "framer-motion";
import { useRef } from "react";

const spring = { stiffness: 220, damping: 14, mass: 0.4 };

// Pulls its child toward the mouse while hovered, then springs back.
export default function Magnetic({ children, strength = 0.35 }) {
    const ref = useRef(null);
    const x = useSpring(0, spring);
    const y = useSpring(0, spring);

    const onPointerMove = (event) => {
        if (event.pointerType !== "mouse") return;
        const rect = ref.current.getBoundingClientRect();
        x.set((event.clientX - (rect.left + rect.width / 2)) * strength);
        y.set((event.clientY - (rect.top + rect.height / 2)) * strength);
    };

    const onPointerLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            style={{ x, y, display: "inline-block" }}
            onPointerMove={onPointerMove}
            onPointerLeave={onPointerLeave}
        >
            {children}
        </motion.div>
    );
}
