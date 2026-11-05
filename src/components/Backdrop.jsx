"use client";
import styles from "@/styles/components/Backdrop.module.scss";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

const PALETTES = {
    code: ["9, 253, 217", "253, 9, 83", "100, 255, 218"],
    poetry: ["246, 205, 41", "237, 216, 73", "253, 9, 83"],
};
const LINK_DISTANCE = 130;
const POINTER_RADIUS = 170;

export default function Backdrop() {
    const pathname = usePathname();
    const theme = pathname?.startsWith("/Lafzon-Ka-Jadugar") ? "poetry" : "code";
    const rootRef = useRef(null);
    const canvasRef = useRef(null);
    const paletteRef = useRef(PALETTES[theme]);

    useEffect(() => {
        paletteRef.current = PALETTES[theme];
    }, [theme]);

    useEffect(() => {
        const root = rootRef.current;
        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");
        const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        const pointer = { x: -1e4, y: -1e4, moved: false };
        let particles = [];
        let width = 0;
        let height = 0;
        let frame = 0;

        const createParticles = () => {
            const count = Math.min(110, Math.floor((width * height) / 14000));
            particles = Array.from({ length: count }, () => {
                const depth = Math.random();
                return {
                    x: Math.random() * width,
                    y: Math.random() * height,
                    vx: (Math.random() - 0.5) * 0.3,
                    vy: (Math.random() - 0.5) * 0.3,
                    radius: 0.6 + depth * 1.8,
                    alpha: 0.35 + depth * 0.5,
                    // Nearer (bigger) particles drift faster with the page scroll.
                    parallax: 0.05 + depth * 0.25,
                    color: Math.floor(Math.random() * 3),
                    sx: 0,
                    sy: 0,
                };
            });
        };

        const resize = () => {
            const ratio = Math.min(window.devicePixelRatio || 1, 2);
            const widthChanged = window.innerWidth !== width;
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width * ratio;
            canvas.height = height * ratio;
            canvas.style.width = `${width}px`;
            canvas.style.height = `${height}px`;
            context.setTransform(ratio, 0, 0, ratio, 0, 0);
            // Mobile URL bars only change the height; keep particles so they don't jump.
            if (widthChanged || !particles.length) createParticles();
        };

        const draw = () => {
            const palette = paletteRef.current;
            const span = height + 40;
            const scroll = reduceMotion ? 0 : window.scrollY;

            if (pointer.moved) {
                root.style.setProperty("--mx", `${pointer.x}px`);
                root.style.setProperty("--my", `${pointer.y}px`);
                pointer.moved = false;
            }

            context.clearRect(0, 0, width, height);

            for (const particle of particles) {
                if (!reduceMotion) {
                    particle.x += particle.vx;
                    particle.y += particle.vy;
                }
                if (particle.x < -20) particle.x = width + 20;
                else if (particle.x > width + 20) particle.x = -20;

                particle.sx = particle.x;
                particle.sy = ((((particle.y + 20 - scroll * particle.parallax) % span) + span) % span) - 20;

                const dx = particle.sx - pointer.x;
                const dy = particle.sy - pointer.y;
                const distanceSquared = dx * dx + dy * dy;
                if (!reduceMotion && distanceSquared < POINTER_RADIUS * POINTER_RADIUS && distanceSquared > 0) {
                    const distance = Math.sqrt(distanceSquared);
                    const force = (1 - distance / POINTER_RADIUS) * 1.6;
                    particle.x += (dx / distance) * force;
                    particle.y += (dy / distance) * force;
                }
            }

            context.lineWidth = 0.6;
            for (let i = 0; i < particles.length; i++) {
                const a = particles[i];
                for (let j = i + 1; j < particles.length; j++) {
                    const b = particles[j];
                    const dx = a.sx - b.sx;
                    const dy = a.sy - b.sy;
                    const distanceSquared = dx * dx + dy * dy;
                    if (distanceSquared > LINK_DISTANCE * LINK_DISTANCE) continue;
                    const alpha = (1 - Math.sqrt(distanceSquared) / LINK_DISTANCE) * 0.22;
                    context.strokeStyle = `rgba(${palette[a.color]}, ${alpha})`;
                    context.beginPath();
                    context.moveTo(a.sx, a.sy);
                    context.lineTo(b.sx, b.sy);
                    context.stroke();
                }

                const px = a.sx - pointer.x;
                const py = a.sy - pointer.y;
                const pointerDistanceSquared = px * px + py * py;
                if (pointerDistanceSquared < POINTER_RADIUS * POINTER_RADIUS) {
                    const alpha = (1 - Math.sqrt(pointerDistanceSquared) / POINTER_RADIUS) * 0.45;
                    context.strokeStyle = `rgba(${palette[0]}, ${alpha})`;
                    context.beginPath();
                    context.moveTo(a.sx, a.sy);
                    context.lineTo(pointer.x, pointer.y);
                    context.stroke();
                }
            }

            for (const particle of particles) {
                context.fillStyle = `rgba(${palette[particle.color]}, ${particle.alpha})`;
                context.beginPath();
                context.arc(particle.sx, particle.sy, particle.radius, 0, Math.PI * 2);
                context.fill();
            }

            frame = reduceMotion ? 0 : requestAnimationFrame(draw);
        };

        const start = () => {
            if (!frame) frame = requestAnimationFrame(draw);
        };
        const stop = () => {
            cancelAnimationFrame(frame);
            frame = 0;
        };

        const onPointerMove = (event) => {
            pointer.x = event.clientX;
            pointer.y = event.clientY;
            pointer.moved = true;
            if (reduceMotion) start();
        };
        const onPointerLeave = () => {
            pointer.x = -1e4;
            pointer.y = -1e4;
        };
        const onVisibility = () => (document.hidden ? stop() : start());
        const onResize = () => {
            resize();
            if (reduceMotion) start();
        };

        resize();
        start();
        window.addEventListener("resize", onResize);
        window.addEventListener("pointermove", onPointerMove, { passive: true });
        document.documentElement.addEventListener("pointerleave", onPointerLeave);
        document.addEventListener("visibilitychange", onVisibility);

        return () => {
            stop();
            window.removeEventListener("resize", onResize);
            window.removeEventListener("pointermove", onPointerMove);
            document.documentElement.removeEventListener("pointerleave", onPointerLeave);
            document.removeEventListener("visibilitychange", onVisibility);
        };
    }, []);

    return (
        <div ref={rootRef} className={styles.backdrop} data-theme={theme} aria-hidden="true">
            <div className={styles.aurora}>
                <span className={styles.blob_a} />
                <span className={styles.blob_b} />
                <span className={styles.blob_c} />
            </div>
            <div className={styles.grid} />
            <canvas ref={canvasRef} className={styles.canvas} />
            <div className={styles.grain} />
            <div className={styles.vignette} />
        </div>
    );
}
