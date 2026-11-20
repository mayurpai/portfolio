"use client";
import BoilerHeading from "@/common/BoilerHeading";
import { jetbrainsMono } from "@/common/fonts";
import { noLayer } from "@/common/motion";
import Button from "@/components/Button";
import Magnetic from "@/components/Magnetic";
import { Experiences } from "@/constants/Experiences";
import styles from "@/styles/sections/Experience.module.scss";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { motion, useMotionValue, useTransform } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const heading = "Experience";
const VISIBLE_LINES = 3;
const VISIBLE_SKILLS = 5;

const terminalIn = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], staggerChildren: 0.09, delayChildren: 0.25 } },
};

const commitIn = {
    hidden: { opacity: 0, x: -18 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

// A stable, decorative 7-character "commit hash" for each role.
function shortHash(text) {
    let hash = 0x811c9dc5;
    for (const char of text) hash = Math.imul(hash ^ char.charCodeAt(0), 0x01000193);
    return (hash >>> 0).toString(16).padStart(8, "0").slice(0, 7);
}

function span(from, to) {
    const end = to === "Present" ? "now" : to;
    return from === to ? to : `${from} → ${end}`;
}

function hostname(url) {
    try {
        return new URL(url).hostname.replace(/^www\./, "");
    } catch (error) {
        return url;
    }
}

function Commit({ item }) {
    const [allLines, setAllLines] = useState(false);
    const [allSkills, setAllSkills] = useState(false);
    const current = item.to === "Present";
    // Several roles at one company: the row shows the latest, the bracket below lists them all.
    const multi = item.role.length > 1;
    const internship = /\(internship\)/i.test(item.role[item.role.length - 1]);
    const title = item.role[item.role.length - 1].replace(/\s*\(internship\)/i, "");
    const lines = allLines ? item.description : item.description.slice(0, VISIBLE_LINES);
    const hiddenLines = item.description.length - lines.length;
    const skills = allSkills ? item.technology : item.technology.slice(0, VISIBLE_SKILLS);
    const hiddenSkills = item.technology.length - skills.length;
    const refs = [
        current && (
            <span className={styles.ref_head} key="head">
                <span className={styles.head_pointer}>HEAD -&gt; </span>main
            </span>
        ),
        current && (
            <span className={styles.ref_tag} key="current">
                tag: current
            </span>
        ),
        multi && (
            <span className={styles.ref_branch} key="roles">
                {item.role.length} roles
            </span>
        ),
        internship && (
            <span className={styles.ref_branch} key="internship">
                internship
            </span>
        ),
        item.badge && (
            <span className={styles.ref_tag} key="badge">
                {item.badge}
            </span>
        ),
    ].filter(Boolean);

    return (
        <motion.li className={`${styles.commit} ${current ? styles.head : ""} ${multi ? styles.multi : ""}`} variants={commitIn} transformTemplate={noLayer}>
            <span className={styles.lane} aria-hidden="true">
                <span className={styles.node} data-node />
            </span>
            <details className={styles.details} open={current}>
                <summary className={styles.summary} data-cursor="git show">
                    <span className={styles.hash}>{shortHash(item.name + item.role.join())}</span>
                    {item.initials ? (
                        <span className={`${styles.logo} ${styles.initials}`} aria-hidden="true">
                            {item.initials}
                        </span>
                    ) : (
                        <Image className={styles.logo} src={item.image} width={26} height={26} alt="" />
                    )}
                    <span className={styles.msg}>
                        <b>{title.replace(" II", "\u00a0II")}</b>
                        <span className={styles.at}>@</span>
                        {item.name}
                        {refs.length > 0 && (
                            <span className={styles.refs}>
                                (
                                {refs.map((ref, index) => (
                                    <span key={index}>
                                        {index > 0 && ", "}
                                        {ref}
                                    </span>
                                ))}
                                )
                            </span>
                        )}
                        {item.impact && <span className={styles.win}>{item.impact[0].value} {item.impact[0].label.split(" from ")[0]}</span>}
                    </span>
                    <span className={styles.date}>
                        {span(item.from[0], item.to)}
                        <span className={styles.chevron} aria-hidden="true">›</span>
                    </span>
                </summary>

                <div className={styles.diff}>
                    <p className={styles.stat}>
                        <span className={styles.plus}>+{item.description.length} achievements</span> · {item.technology.length} skills
                        {item.focus && <> · {item.focus}</>} ·{" "}
                        <a href={item.website} target="_blank" rel="noopener noreferrer" className={styles.site} data-cursor="Visit ↗">
                            {hostname(item.website)} ↗
                        </a>
                    </p>
                    {item.impact && (
                        <div className={styles.impact}>
                            {item.impact.map((metric) => (
                                <div className={styles.metric} key={metric.value}>
                                    <strong>{metric.value}</strong>
                                    <span>{metric.label}</span>
                                </div>
                            ))}
                        </div>
                    )}
                    <ul className={styles.lines}>
                        {lines.map((line, index) => (
                            <li key={index} dangerouslySetInnerHTML={{ __html: line }} />
                        ))}
                        {hiddenLines > 0 && (
                            <li className={styles.more}>
                                <button type="button" onClick={() => setAllLines(true)}>
                                    {hiddenLines} more {hiddenLines === 1 ? "line" : "lines"}
                                </button>
                            </li>
                        )}
                    </ul>
                    <div className={styles.chips}>
                        {skills.map((skill) => (
                            <span className={styles.chip} key={skill}>
                                {skill}
                            </span>
                        ))}
                        {hiddenSkills > 0 && (
                            <button type="button" className={`${styles.chip} ${styles.chip_more}`} onClick={() => setAllSkills(true)}>
                                +{hiddenSkills} more
                            </button>
                        )}
                    </div>
                </div>
            </details>

            {multi && (
                <ol className={styles.branch} aria-label={`Roles at ${item.name}`}>
                    {item.role
                        .map((role, index) => {
                            const next = index + 1 < item.from.length ? item.from[index + 1] : item.to;
                            const verb = index === 0 ? "init" : item.promoted ? "promote" : "role";
                            return (
                                <li key={role}>
                                    <span className={styles.hash}>{shortHash(item.name + role)}</span>
                                    <span className={styles.who}>
                                        {verb}: {role}
                                    </span>
                                    <span className={styles.when}>{span(item.from[index], next)}</span>
                                </li>
                            );
                        })
                        .reverse()}
                </ol>
            )}
        </motion.li>
    );
}

// The graph's main line: a dim track from the first commit's node to the last, filled with light
// (and a comet riding its tip) as the log scrolls past. Tied straight to scroll, no smoothing:
// the tip stays on the line 60% down the screen, so it moves exactly as the page does.
function ScrollRail({ logRef }) {
    const railRef = useRef(null);
    const progress = useMotionValue(0);
    // Moves a full-height track, so the comet glides on the GPU instead of re-laying out every frame.
    const cometY = useTransform(progress, (value) => `${value * 100}%`);

    // Pin the rail to the node centres (opening a commit or resizing moves them), and read its live
    // position on every scroll: a cached measurement goes stale as soon as a commit opens.
    useEffect(() => {
        const log = logRef.current;
        const rail = railRef.current;
        if (!log || !rail) return undefined;
        const track = () => {
            const box = rail.getBoundingClientRect();
            const value = box.height ? (window.innerHeight * 0.6 - box.top) / box.height : 0;
            progress.set(Math.min(1, Math.max(0, value)));
        };
        const place = () => {
            const nodes = log.querySelectorAll("[data-node]");
            if (!nodes.length) return;
            // Layout offsets, not getBoundingClientRect: the commits slide in with a transform, and
            // measuring mid-slide would leave the rail off the circles once they settle.
            const centre = (node) => {
                let x = node.offsetWidth / 2;
                let y = node.offsetHeight / 2;
                for (let el = node; el && el !== log; el = el.offsetParent) {
                    x += el.offsetLeft;
                    y += el.offsetTop;
                }
                return { x, y };
            };
            const first = centre(nodes[0]);
            const last = centre(nodes[nodes.length - 1]);
            rail.style.left = `${first.x}px`;
            rail.style.top = `${first.y}px`;
            rail.style.height = `${last.y - first.y}px`;
            track();
        };
        place();
        const observer = new ResizeObserver(place);
        observer.observe(log);
        window.addEventListener("scroll", track, { passive: true });
        window.addEventListener("resize", track);
        return () => {
            observer.disconnect();
            window.removeEventListener("scroll", track);
            window.removeEventListener("resize", track);
        };
    }, [logRef, progress]);

    return (
        <div className={styles.rail} ref={railRef} aria-hidden="true">
            <motion.span className={styles.rail_fill} style={{ scaleY: progress }} />
            <motion.span className={styles.rail_track} style={{ y: cometY }}>
                <span className={styles.rail_comet} />
            </motion.span>
        </div>
    );
}

export default function Experience() {
    const logRef = useRef(null);

    return (
        <section className={styles.experience_conatiner} id="experience">
            <div className={`${styles.experience_body_container} ${jetbrainsMono.className}`}>
                <BoilerHeading title={heading} header="h1" section />
                <p className={styles.lede}>Every role, as commits on one branch. Open one to read the diff.</p>

                <motion.div
                    className={styles.terminal}
                    variants={terminalIn}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                >
                    <div className={styles.titlebar} aria-hidden="true">
                        <span className={styles.lights}>
                            <i />
                            <i />
                            <i />
                        </span>
                        <span>~/universe/career — zsh</span>
                    </div>
                    <p className={styles.prompt}>
                        <span className={styles.path}>~/universe/career</span>
                        <span className={styles.sigil}>❯</span>git log --graph --career
                    </p>
                    <div className={styles.graph} ref={logRef}>
                        <ScrollRail logRef={logRef} />
                        <ol className={styles.log}>
                            {Experiences.map((item) => (
                                <Commit item={item} key={item.name} />
                            ))}
                        </ol>
                    </div>
                    <p className={styles.end}>(END)</p>
                </motion.div>

                <div className={styles.experience_resume}>
                    <Magnetic>
                        <Button buttonName="Stalk My Dev Resume" icon={faMagnifyingGlass} href="docs/Resume.pdf" cursor="Open" />
                    </Magnetic>
                </div>
            </div>
        </section>
    );
}
