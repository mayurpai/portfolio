"use client";
import { setStageReady } from "@/common/stage";
import styles from "@/styles/components/Preloader.module.scss";
import { animate, motion, useAnimationControls, useMotionTemplate, useMotionValue, useTransform } from "framer-motion";
import { PT_Mono } from "next/font/google";
import { useCallback, useEffect, useRef, useState } from "react";

const pt_mono = PT_Mono({
    weight: "400",
    subsets: ["latin"],
    display: "swap",
});

// Read by the inline script in layout.js to skip the intro for the rest of the session.
const STORAGE_KEY = "mp-intro-seen";
const COMMAND = "npm run mayur";
const ACCEPTED = [COMMAND, "npm run mayur-pai", "npm start", "yarn mayur", "pnpm mayur"];
const RUN_SECONDS = 2.4;

const RUN_LINES = [
    { text: "> mayur-pai@∞ mayur", tone: "muted" },
    { text: "> ignite --universe=mayur --magic=11", tone: "muted" },
    { text: "✔ brewing caffeine", tone: "ok" },
    { text: "✔ compiling creativity", tone: "ok" },
    { text: "✔ bending systems to my will", tone: "ok" },
    { text: "✔ cranking the tech magic to eleven", tone: "ok" },
    { text: "✦ warping into Mayur's universe…", tone: "magic" },
];

const REPLIES = {
    help: "the only spell you need is npm run mayur",
    ls: "universe/  magic/  coffee.js … but first, npm run mayur",
    exit: "there's no exit from this universe. try npm run mayur",
    whoami: "a curious traveller. npm run mayur to meet Mayur",
};

function replyFor(command) {
    if (command.startsWith("sudo")) return "nice try 😏 root access is earned. npm run mayur";
    const name = command.split(" ")[0];
    return REPLIES[name] ?? `zsh: command not found: ${name} ✦ psst… try npm run mayur`;
}

function Prompt() {
    return (
        <>
            <span className={styles.path}>~/universe</span>
            <span className={styles.sigil}>❯</span>
        </>
    );
}

// Stars stream out of the centre; `speed` + `boost` push them from a drift into hyperspace.
function useStarfield(canvasRef, speedRef, boostRef, enabled) {
    useEffect(() => {
        if (!enabled) return undefined;
        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");
        const colors = ["230, 241, 255", "230, 241, 255", "9, 253, 217", "253, 9, 83", "246, 205, 41"];
        const depth = 1000;
        let width = 0;
        let height = 0;
        let focal = 0;
        let stars = [];
        let speed = speedRef.current;
        let frame = 0;

        const spawn = (star, anywhere) => {
            const span = Math.max(width, height);
            star.x = (Math.random() - 0.5) * 2 * depth * (width / span);
            star.y = (Math.random() - 0.5) * 2 * depth * (height / span);
            star.z = anywhere ? 1 + Math.random() * depth : depth;
            star.color = colors[Math.floor(Math.random() * colors.length)];
            return star;
        };

        const resize = () => {
            const ratio = Math.min(window.devicePixelRatio || 1, 2);
            width = window.innerWidth;
            height = window.innerHeight;
            focal = Math.max(width, height) * 0.5;
            canvas.width = width * ratio;
            canvas.height = height * ratio;
            context.setTransform(ratio, 0, 0, ratio, 0, 0);
            context.lineCap = "round";
            const count = Math.round(Math.min(320, (width * height) / 3500));
            stars = Array.from({ length: count }, () => spawn({}, true));
        };

        const draw = () => {
            const target = speedRef.current + boostRef.current;
            boostRef.current *= 0.92;
            speed += (target - speed) * 0.07;
            context.clearRect(0, 0, width, height);
            const cx = width / 2;
            const cy = height / 2;

            for (const star of stars) {
                const previous = star.z;
                star.z -= speed;
                if (star.z < 1) {
                    spawn(star, false);
                    continue;
                }
                const x = cx + (star.x * focal) / star.z;
                const y = cy + (star.y * focal) / star.z;
                if (x < -40 || x > width + 40 || y < -40 || y > height + 40) {
                    spawn(star, false);
                    continue;
                }
                const near = 1 - star.z / depth;
                context.strokeStyle = `rgba(${star.color}, ${Math.min(1, near * 1.3)})`;
                context.lineWidth = 0.5 + near * 2;
                context.beginPath();
                context.moveTo(cx + (star.x * focal) / previous, cy + (star.y * focal) / previous);
                context.lineTo(x, y);
                context.stroke();
            }

            frame = requestAnimationFrame(draw);
        };

        resize();
        frame = requestAnimationFrame(draw);
        window.addEventListener("resize", resize);
        return () => {
            cancelAnimationFrame(frame);
            window.removeEventListener("resize", resize);
        };
    }, [canvasRef, speedRef, boostRef, enabled]);
}

// boot (server frame) → prompt (type `npm run mayur`) → run (the magic) → launch (portal opens) → gone.
export default function Preloader() {
    const [phase, setPhase] = useState("boot");
    const [typed, setTyped] = useState("");
    const [history, setHistory] = useState([]);
    const [shown, setShown] = useState(0);
    const [stamp, setStamp] = useState("");
    const launched = useRef(false);
    const autoTimer = useRef(0);
    const inputRef = useRef(null);
    const screenRef = useRef(null);
    const canvasRef = useRef(null);
    const speedRef = useRef(0.6);
    const boostRef = useRef(0);
    const terminal = useAnimationControls();
    const count = useMotionValue(0);
    const counter = useTransform(count, (value) => String(Math.round(value)).padStart(3, "0"));
    const hole = useMotionValue(0);
    const mask = useMotionTemplate`radial-gradient(circle at 50% 50%, transparent ${hole}vmax, #000 calc(${hole}vmax + 0.5vmax))`;
    const rimSize = useTransform(hole, (value) => `${value * 2}vmax`);
    const rimOpacity = useTransform(hole, [0, 5, 100, 150], [0, 1, 0.8, 0]);
    const entered = stamp !== "";

    useStarfield(canvasRef, speedRef, boostRef, phase === "prompt" || phase === "run" || phase === "launch");

    const launch = useCallback(() => {
        if (launched.current) return;
        launched.current = true;
        clearTimeout(autoTimer.current);
        setPhase("launch");
        speedRef.current = 70;
        // The page's own entrances play while the portal is opening.
        window.setTimeout(() => setStageReady(true), 250);
        animate(hole, 150, {
            duration: 1.6,
            ease: [0.83, 0, 0.17, 1],
            onComplete: () => {
                try {
                    sessionStorage.setItem(STORAGE_KEY, "1");
                } catch (error) {
                    // Private mode can block storage; the intro simply plays again next time.
                }
                setPhase("gone");
            },
        });
    }, [hole]);

    useEffect(() => {
        // Set by the inline script in layout.js; kept on window because React may reset <html> classes.
        const mode = window.__mpIntro;
        const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        // Hydrating this late means the CSS failsafe already hid the overlay; don't bring it back.
        if (mode === "skip" || reduceMotion || performance.now() > 7000) {
            setPhase("gone");
            setStageReady(true);
            return undefined;
        }

        let cancelled = false;
        const fontsReady = document.fonts ? document.fonts.ready : Promise.resolve();
        Promise.race([fontsReady, new Promise((resolve) => setTimeout(resolve, 1200))]).then(() => {
            if (cancelled) return;
            // Back via the root page after already seeing the intro: just open the portal.
            if (mode === "reveal") {
                launch();
                return;
            }
            const now = new Date().toLocaleString("en-US", {
                weekday: "short",
                month: "short",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
                hour12: false,
            });
            setStamp(now.replace(/,/g, ""));
            setPhase("prompt");
        });

        return () => {
            cancelled = true;
        };
    }, [launch]);

    // Hold the page still (and out of the tab order) until the portal opens.
    const locked = phase === "boot" || phase === "prompt" || phase === "run";
    useEffect(() => {
        if (!locked) return undefined;
        const html = document.documentElement;
        const app = document.querySelector(".main_app_container");
        html.style.overflow = "hidden";
        app?.setAttribute("inert", "");
        return () => {
            html.style.overflow = "";
            app?.removeAttribute("inert");
        };
    }, [locked]);

    useEffect(() => {
        if (phase === "prompt") {
            terminal.start({ opacity: 1, y: 0, scale: 1, filter: "blur(0px)", transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } });
        } else if (phase === "launch" && entered) {
            terminal.start({ opacity: 0, scale: 1.9, filter: "blur(18px)", transition: { duration: 0.9, ease: [0.7, 0, 0.84, 0] } });
        }
    }, [phase, entered, terminal]);

    useEffect(() => {
        if (phase !== "prompt" && phase !== "run") return undefined;
        if (phase === "prompt" && window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
            inputRef.current?.focus({ preventScroll: true });
        }
        const onKeyDown = (event) => {
            if (event.key === "Escape") {
                launch();
                return;
            }
            const input = inputRef.current;
            // Typing anywhere lands in the prompt.
            if (input && document.activeElement !== input && event.key.length === 1 && !event.metaKey && !event.ctrlKey && !event.altKey) {
                input.focus({ preventScroll: true });
            }
        };
        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [phase, launch]);

    useEffect(() => {
        if (phase !== "run") return undefined;
        const timers = RUN_LINES.map((_, index) => window.setTimeout(() => setShown(index + 1), 160 + index * 260));
        const counting = animate(count, 100, {
            duration: RUN_SECONDS,
            ease: [0.45, 0, 0.2, 1],
            onUpdate: (value) => {
                speedRef.current = 0.8 + Math.pow(value / 100, 2.2) * 28;
            },
            onComplete: () => timers.push(window.setTimeout(launch, 350)),
        });
        return () => {
            counting.stop();
            timers.forEach(clearTimeout);
        };
    }, [phase, count, launch]);

    useEffect(() => {
        const screen = screenRef.current;
        if (screen) screen.scrollTop = screen.scrollHeight;
    }, [history, shown, phase]);

    const lower = typed.toLowerCase();
    const suggestion = COMMAND.startsWith(lower) ? COMMAND.slice(typed.length) : "";
    const onTrack = ACCEPTED.some((command) => command.startsWith(lower));

    const run = (text) => {
        clearTimeout(autoTimer.current);
        setHistory((entries) => [...entries, { kind: "cmd", text }]);
        setTyped("");
        setPhase("run");
    };

    // Types the spell out for anyone who'd rather tap (or just hits Enter).
    const castForMe = () => {
        if (phase !== "prompt" || autoTimer.current) return;
        let index = COMMAND.startsWith(lower) ? typed.length : 0;
        const step = () => {
            index += 1;
            setTyped(COMMAND.slice(0, index));
            boostRef.current = Math.min(boostRef.current + 1.2, 6);
            autoTimer.current = index < COMMAND.length ? window.setTimeout(step, 60) : window.setTimeout(() => run(COMMAND), 280);
        };
        step();
    };

    const submit = () => {
        const command = typed.trim().replace(/\s+/g, " ").toLowerCase();
        if (!command) {
            castForMe();
            return;
        }
        if (ACCEPTED.includes(command)) {
            run(typed.trim());
            return;
        }
        setTyped("");
        if (command === "clear") {
            setHistory([]);
            return;
        }
        setHistory((entries) => [...entries.slice(-4), { kind: "cmd", text: typed.trim() }, { kind: "reply", text: replyFor(command) }]);
        terminal.start({ x: [0, -12, 10, -6, 4, 0], transition: { duration: 0.45 } });
    };

    const onChange = (event) => {
        setTyped(event.target.value.slice(0, 40));
        boostRef.current = Math.min(boostRef.current + 1.5, 6);
    };

    const onKeyDown = (event) => {
        if (autoTimer.current) {
            event.preventDefault();
            return;
        }
        if (event.key === "Enter") {
            event.preventDefault();
            submit();
        } else if ((event.key === "Tab" || event.key === "ArrowRight") && suggestion) {
            event.preventDefault();
            setTyped(typed + suggestion);
        } else if (["ArrowLeft", "ArrowUp", "ArrowDown", "Home"].includes(event.key)) {
            // The drawn caret always sits at the end, like a fresh shell line.
            event.preventDefault();
        }
    };

    if (phase === "gone") return null;

    return (
        <>
            <motion.div
                className={`${styles.preloader} ${phase !== "boot" ? styles.live : ""}`}
                data-phase={phase}
                style={phase === "launch" ? { WebkitMaskImage: mask, maskImage: mask } : undefined}
                role="dialog"
                aria-modal="true"
                aria-label="Welcome. Type npm run mayur to enter."
                aria-hidden={entered && phase !== "launch" ? undefined : true}
            >
                {phase === "boot" && <span className={styles.boot} aria-hidden="true" />}
                <canvas ref={canvasRef} className={styles.stars} aria-hidden="true" />
                <div className={styles.horizon} aria-hidden="true" />
                {entered && (
                    <>
                        <div className={styles.brand} aria-hidden="true">
                            <span className={styles.logo}>M</span>
                            <span className={styles.brand_name}>Mayur Pai</span>
                        </div>
                        <button type="button" className={`${styles.skip} ${pt_mono.className}`} onClick={launch}>
                            Skip intro ↠
                        </button>
                        <div className={`${styles.stage} ${pt_mono.className}`}>
                            <motion.div
                                className={styles.terminal}
                                initial={{ opacity: 0, y: 28, scale: 0.94, filter: "blur(10px)" }}
                                animate={terminal}
                                onClick={() => inputRef.current?.focus({ preventScroll: true })}
                            >
                                <div className={styles.titlebar} aria-hidden="true">
                                    <span className={styles.lights}>
                                        <i />
                                        <i />
                                        <i />
                                    </span>
                                    <span className={styles.title}>~/universe — zsh</span>
                                </div>
                                <div ref={screenRef} className={styles.screen}>
                                    <p className={styles.muted}>Last login: {stamp} on ttys042</p>
                                    <p className={styles.magic}>✦ Uplink to Mayur&apos;s universe established.</p>
                                    <p className={styles.muted}>One spell stands between you and the magic.</p>
                                    <div aria-live="polite">
                                        {history.map((entry, index) =>
                                            entry.kind === "cmd" ? (
                                                <p key={index} className={styles.line}>
                                                    <Prompt />
                                                    <span className={styles.typed}>{entry.text}</span>
                                                </p>
                                            ) : (
                                                <p key={index} className={styles.reply}>
                                                    {entry.text}
                                                </p>
                                            )
                                        )}
                                        {RUN_LINES.slice(0, shown).map((line) => (
                                            <motion.p
                                                key={line.text}
                                                className={styles[line.tone]}
                                                initial={{ opacity: 0, x: -10 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                {line.text}
                                            </motion.p>
                                        ))}
                                    </div>
                                    {phase === "prompt" && (
                                        <p className={styles.line}>
                                            <Prompt />
                                            <span className={styles.entry}>
                                                <span className={onTrack ? styles.typed : styles.typed_off}>{typed}</span>
                                                {/* Remounting restarts the blink, so the caret stays lit while typing. */}
                                                <span key={typed.length} className={styles.caret} />
                                                <span className={styles.ghost}>{suggestion}</span>
                                            </span>
                                            <input
                                                ref={inputRef}
                                                className={styles.input}
                                                value={typed}
                                                onChange={onChange}
                                                onKeyDown={onKeyDown}
                                                aria-label="Type npm run mayur and press Enter to begin"
                                                autoComplete="off"
                                                autoCorrect="off"
                                                autoCapitalize="off"
                                                spellCheck={false}
                                                enterKeyHint="go"
                                            />
                                        </p>
                                    )}
                                </div>
                            </motion.div>
                            <motion.div
                                className={styles.hint}
                                initial={{ opacity: 0, y: 12 }}
                                animate={
                                    phase === "prompt"
                                        ? { opacity: 1, y: 0, transition: { delay: 0.7, duration: 0.6 } }
                                        : { opacity: 0, y: 12, transition: { duration: 0.3 } }
                                }
                            >
                                <p className={styles.mouse_only}>
                                    Type <kbd>npm run mayur</kbd> and hit <kbd>↵ Enter</kbd> to begin the journey
                                </p>
                                <p className={styles.touch_only}>
                                    Tap the terminal and type <kbd>npm run mayur</kbd> to begin the journey
                                </p>
                                <div className={styles.actions}>
                                    <button type="button" className={styles.cast} onClick={castForMe} data-cursor="Abracadabra">
                                        ▶ Cast it for me
                                    </button>
                                    <span className={`${styles.keys} ${styles.mouse_only}`}>
                                        <kbd>Tab</kbd> autocompletes · <kbd>Esc</kbd> skips
                                    </span>
                                </div>
                            </motion.div>
                        </div>
                        <motion.div
                            className={styles.counter}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: phase === "run" ? 1 : 0 }}
                            transition={{ duration: 0.4 }}
                            aria-hidden="true"
                        >
                            <motion.span>{counter}</motion.span>
                            <span className={styles.pct}>%</span>
                        </motion.div>
                    </>
                )}
            </motion.div>
            {phase === "launch" && (
                <motion.div className={styles.rim} style={{ width: rimSize, height: rimSize, opacity: rimOpacity }} aria-hidden="true" />
            )}
        </>
    );
}
