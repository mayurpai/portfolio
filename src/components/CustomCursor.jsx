"use client";
import styles from "@/styles/components/CustomCursor.module.scss";
import { useEffect, useRef } from "react";

const INTERACTIVE = "a, button, [role='button'], [data-cursor], label, input, textarea, select";

export default function CustomCursor() {
    const rootRef = useRef(null);
    const dotRef = useRef(null);
    const ringRef = useRef(null);
    const labelRef = useRef(null);

    useEffect(() => {
        const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
        const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (!finePointer || reduceMotion) return undefined;

        const html = document.documentElement;
        const root = rootRef.current;
        const dot = dotRef.current;
        const ring = ringRef.current;
        const label = labelRef.current;
        const target = { x: 0, y: 0 };
        const ringPosition = { x: 0, y: 0 };
        let frame = 0;

        html.classList.add("has-custom-cursor");

        const follow = () => {
            ringPosition.x += (target.x - ringPosition.x) * 0.2;
            ringPosition.y += (target.y - ringPosition.y) * 0.2;
            ring.style.transform = `translate3d(${ringPosition.x}px, ${ringPosition.y}px, 0)`;
            const settled = Math.abs(target.x - ringPosition.x) < 0.1 && Math.abs(target.y - ringPosition.y) < 0.1;
            frame = settled ? 0 : requestAnimationFrame(follow);
        };

        const onMove = (event) => {
            target.x = event.clientX;
            target.y = event.clientY;
            dot.style.transform = `translate3d(${target.x}px, ${target.y}px, 0)`;
            if (root.dataset.visible !== "true") {
                ringPosition.x = target.x;
                ringPosition.y = target.y;
                root.dataset.visible = "true";
            }
            if (!frame) frame = requestAnimationFrame(follow);
        };

        const onOver = (event) => {
            const element = event.target instanceof Element ? event.target : null;
            const interactive = element?.closest(INTERACTIVE);
            const text = element?.closest("[data-cursor]")?.getAttribute("data-cursor") || "";
            root.dataset.hover = interactive ? "true" : "false";
            root.dataset.label = text ? "true" : "false";
            if (text) label.textContent = text;
        };

        const onDown = () => {
            root.dataset.down = "true";
        };
        const onUp = () => {
            root.dataset.down = "false";
        };
        const onLeave = (event) => {
            if (!event.relatedTarget) root.dataset.visible = "false";
        };

        window.addEventListener("pointermove", onMove, { passive: true });
        window.addEventListener("pointerover", onOver, { passive: true });
        window.addEventListener("pointerdown", onDown, { passive: true });
        window.addEventListener("pointerup", onUp, { passive: true });
        window.addEventListener("pointerout", onLeave, { passive: true });

        return () => {
            cancelAnimationFrame(frame);
            html.classList.remove("has-custom-cursor");
            window.removeEventListener("pointermove", onMove);
            window.removeEventListener("pointerover", onOver);
            window.removeEventListener("pointerdown", onDown);
            window.removeEventListener("pointerup", onUp);
            window.removeEventListener("pointerout", onLeave);
        };
    }, []);

    return (
        <div ref={rootRef} className={styles.cursor} data-visible="false" aria-hidden="true">
            <div ref={ringRef} className={styles.ring}>
                <div className={styles.ring_inner}>
                    <span ref={labelRef} className={styles.label} />
                </div>
            </div>
            <div ref={dotRef} className={styles.dot} />
        </div>
    );
}
