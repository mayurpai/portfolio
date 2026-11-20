"use client";
import BoilerHeading from "@/common/BoilerHeading";
import { jetbrainsMono } from "@/common/fonts";
import { noLayer } from "@/common/motion";
import TiltCard from "@/components/TiltCard";
import { Projects } from "@/constants/Project";
import styles from "@/styles/sections/Project.module.scss";
import { motion } from "framer-motion";
import Image from "next/image";

const heading = "Projects";

const featured = Projects.filter((project) => project.featured).sort((a, b) => a.featured - b.featured);
const archive = Projects.filter((project) => !project.featured).sort(
    (a, b) => yearOf(b.toDate) - yearOf(a.toDate) || yearOf(b.fromDate) - yearOf(a.fromDate)
);

function yearOf(date) {
    return Number(date.match(/\d{4}/)?.[0] ?? 0);
}

const shotIn = (side) => ({
    hidden: { opacity: 0, x: side * 60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
});

const metaIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] } },
};

const rows = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.07 } },
};

const rowIn = {
    hidden: { opacity: 0, y: 14 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const live = (project) => !project.self && project.webLink && project.webLink !== "#";

// Each case study lights its card in its own accent, matching the glow behind it.
const SPOT_COLORS = ["9, 253, 217", "246, 205, 41", "253, 9, 83"];

function CaseStudy({ project, index }) {
    const flip = index % 2 === 1;
    const [host, ...rest] = project.urlLabel.split("/");
    return (
        <motion.article
            className={`${styles.case} ${flip ? styles.flip : ""}`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
        >
            <motion.a
                className={styles.shot}
                href={live(project) ? project.webLink : project.codeLink}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor={live(project) ? "Visit ↗" : "View code"}
                aria-label={`${project.title}: ${live(project) ? "visit the live site" : "view the source code"}`}
                variants={shotIn(flip ? 1 : -1)}
                style={{ "--spot-color": SPOT_COLORS[index % SPOT_COLORS.length] }}
            >
                <TiltCard className={styles.tilt} max={8}>
                    <span className={styles.browser}>
                    <span className={styles.bar} aria-hidden="true">
                        <span className={styles.lights}>
                            <i />
                            <i />
                            <i />
                        </span>
                        <span className={styles.url}>
                            <span className={styles.host}>{host}</span>
                            {rest.length > 0 && `/${rest.join("/")}`}
                        </span>
                    </span>
                    <Image
                        className={styles.screenshot}
                        src={project.imgLink}
                        width={project.imgSize[0]}
                        height={project.imgSize[1]}
                        sizes="(max-width: 992px) 100vw, 620px"
                        alt={`${project.title} screenshot`}
                    />
                    </span>
                </TiltCard>
            </motion.a>

            <motion.div className={styles.meta} variants={metaIn} transformTemplate={noLayer}>
                <div className={styles.kicker}>
                    <span className={styles.eyebrow}>Featured · {project.eyebrow}</span>
                    <span className={styles.num} aria-hidden="true">
                        {String(index + 1).padStart(2, "0")}
                    </span>
                </div>
                <h3 className={styles.title}>{project.title}</h3>
                <span className={styles.dates}>
                    {project.fromDate} → {project.toDate}
                </span>
                <dl className={styles.story}>
                    <div>
                        <dt>{project.ideaLabel}</dt>
                        <dd>{project.idea}</dd>
                    </div>
                    <div>
                        <dt>What I built</dt>
                        <dd>{project.built}</dd>
                    </div>
                </dl>
                <div className={styles.chips}>
                    {project.technology.map((tech) => (
                        <span className={styles.chip} key={tech}>
                            {tech}
                        </span>
                    ))}
                </div>
                <div className={styles.links}>
                    {live(project) && (
                        <a className={styles.btn} href={project.webLink} target="_blank" rel="noopener noreferrer" data-cursor="Visit ↗">
                            Visit live ↗
                        </a>
                    )}
                    <a
                        className={`${styles.btn} ${live(project) ? styles.subtle : ""}`}
                        href={project.codeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-cursor="View code"
                    >
                        Source code
                    </a>
                    {project.self && <span className={styles.here}>✦ You&apos;re exploring it right now</span>}
                </div>
            </motion.div>
        </motion.article>
    );
}

export default function Project() {
    return (
        <section className={styles.projects_conatiner} id="projects">
            <div className={`${styles.projects_body_container} ${jetbrainsMono.className}`}>
                <BoilerHeading title={heading} header="h1" section />
                <p className={styles.lede}>Three builds worth a closer look, and an archive of the rest.</p>

                <div className={styles.featured}>
                    {featured.map((project, index) => (
                        <CaseStudy project={project} index={index} key={project.title} />
                    ))}
                </div>

                <div className={styles.archive_head}>
                    <h3>The archive</h3>
                    <p>More builds, newest first.</p>
                </div>
                <table className={styles.archive}>
                    <thead>
                        <tr>
                            <th>Year</th>
                            <th>Project</th>
                            <th className={styles.stack}>Built with</th>
                            <th className={styles.links_head}>Links</th>
                        </tr>
                    </thead>
                    <motion.tbody variants={rows} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
                        {archive.map((project) => (
                            <motion.tr key={project.title} variants={rowIn} transformTemplate={noLayer}>
                                <td className={styles.year}>{yearOf(project.toDate)}</td>
                                <td>
                                    <span className={styles.pname}>{project.title}</span>
                                    {project.tagline && <span className={styles.pdesc}>{project.tagline}</span>}
                                </td>
                                <td className={styles.stack}>{project.technology.join(" · ")}</td>
                                <td className={styles.plinks}>
                                    {live(project) && (
                                        <a href={project.webLink} target="_blank" rel="noopener noreferrer" data-cursor="Visit ↗">
                                            Live ↗
                                        </a>
                                    )}
                                    <a href={project.codeLink} target="_blank" rel="noopener noreferrer" data-cursor="View code">
                                        Code ↗
                                    </a>
                                </td>
                            </motion.tr>
                        ))}
                    </motion.tbody>
                </table>
            </div>
        </section>
    );
}
