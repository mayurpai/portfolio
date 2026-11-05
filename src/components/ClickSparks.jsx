"use client";
import styles from "@/styles/components/ClickSparks.module.scss";
import { useEffect, useRef } from "react";

const COLORS = ["#09fdd9", "#fd0953", "#f6cd29", "#64ffda"];
const SPARKS_PER_CLICK = 10;

export default function ClickSparks() {
    const canvasRef = useRef(null);

    useEffect(() => {
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;

        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");
        let sparks = [];
        let frame = 0;

        const resize = () => {
            const ratio = Math.min(window.devicePixelRatio || 1, 2);
            canvas.width = window.innerWidth * ratio;
            canvas.height = window.innerHeight * ratio;
            context.setTransform(ratio, 0, 0, ratio, 0, 0);
        };

        const draw = () => {
            const now = performance.now();
            context.clearRect(0, 0, window.innerWidth, window.innerHeight);
            sparks = sparks.filter((spark) => now - spark.start < spark.life);

            context.lineCap = "round";
            context.lineWidth = 2;
            for (const spark of sparks) {
                const t = Math.max(0, (now - spark.start) / spark.life);
                const travelled = (1 - Math.pow(1 - t, 3)) * spark.reach;
                const length = (1 - t) * spark.length;
                const cos = Math.cos(spark.angle);
                const sin = Math.sin(spark.angle);
                context.globalAlpha = 1 - t;
                context.strokeStyle = spark.color;
                context.beginPath();
                context.moveTo(spark.x + cos * travelled, spark.y + sin * travelled);
                context.lineTo(spark.x + cos * (travelled + length), spark.y + sin * (travelled + length));
                context.stroke();
            }
            context.globalAlpha = 1;

            frame = sparks.length ? requestAnimationFrame(draw) : 0;
        };

        const onPointerDown = (event) => {
            const start = performance.now();
            const offset = Math.random() * Math.PI;
            for (let i = 0; i < SPARKS_PER_CLICK; i++) {
                sparks.push({
                    x: event.clientX,
                    y: event.clientY,
                    angle: offset + (Math.PI * 2 * i) / SPARKS_PER_CLICK,
                    reach: 28 + Math.random() * 30,
                    length: 10 + Math.random() * 10,
                    life: 450 + Math.random() * 250,
                    color: COLORS[i % COLORS.length],
                    start,
                });
            }
            if (!frame) frame = requestAnimationFrame(draw);
        };

        resize();
        window.addEventListener("resize", resize);
        window.addEventListener("pointerdown", onPointerDown, { passive: true });

        return () => {
            cancelAnimationFrame(frame);
            window.removeEventListener("resize", resize);
            window.removeEventListener("pointerdown", onPointerDown);
        };
    }, []);

    return <canvas ref={canvasRef} className={styles.canvas} aria-hidden="true" />;
}
