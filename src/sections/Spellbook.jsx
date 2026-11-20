"use client";
import BoilerHeading from "@/common/BoilerHeading";
import { jetbrainsMono } from "@/common/fonts";
import { copyText, HANDLE, INSTAGRAM, pad, spellLink, spellText } from "@/common/spells";
import { useStageReady } from "@/common/stage";
import Button from "@/components/Button";
import Spell, { MoodDot } from "@/components/Spell";
import SpellImage from "@/components/SpellImage";
import TagsCreator from "@/components/TagsCreator";
import { languages, moods, spells } from "@/constants/Poetry";
import About from "@/sections/About";
import styles from "@/styles/sections/Spellbook.module.scss";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faWandMagicSparkles } from "@fortawesome/free-solid-svg-icons";
import { AnimatePresence, motion } from "framer-motion";
import { Fragment, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";

const PAGE = 12;
const FOLLOW_AFTER = 6;
const firstFeatured = spells.find((spell) => spell.featured) ?? spells[0];

// A new spell fades out of focus and the next one resolves in its place.
const swap = {
    initial: { opacity: 0, scale: 0.96, filter: "blur(6px)" },
    animate: { opacity: 1, scale: 1, filter: "blur(0px)", transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
    exit: { opacity: 0, scale: 1.03, filter: "blur(6px)", transition: { duration: 0.2, ease: "easeIn" } },
};
const firstYear = Math.min(...spells.map((spell) => new Date(spell.date).getFullYear()));

const matches = (spell, lang, picked) =>
    (lang === "all" || spell.lang === lang) && (!picked.length || spell.moods.some((mood) => picked.includes(mood)));

function SharePopover({ share, onClose, onCopied }) {
    const ref = useRef(null);

    useEffect(() => {
        if (!share) return undefined;
        ref.current.querySelector("a, button").focus();
        const away = (event) => !ref.current.contains(event.target) && !share.button.contains(event.target) && onClose();
        const escape = (event) => event.key === "Escape" && onClose();
        document.addEventListener("pointerdown", away);
        document.addEventListener("keydown", escape);
        return () => {
            document.removeEventListener("pointerdown", away);
            document.removeEventListener("keydown", escape);
        };
    }, [share, onClose]);

    if (!share) return null;
    const { spell, button } = share;
    const url = spellLink(spell);
    const message = `${spellText(spell)}\n\n— Lafzon Ka Jadugar ✦`;
    const rect = button.getBoundingClientRect();
    const left = Math.max(12, Math.min(rect.left, window.innerWidth - 212)) + window.scrollX;

    return createPortal(
        <div
            ref={ref}
            className={`${styles.pop} ${jetbrainsMono.className}`}
            role="menu"
            aria-label={`Share spell #${pad(spell.no)}`}
            style={{ top: rect.bottom + window.scrollY + 6, left }}
        >
            <a role="menuitem" href={`https://wa.me/?text=${encodeURIComponent(`${message}\n${url}`)}`} target="_blank" rel="noopener noreferrer" onClick={onClose}>
                WhatsApp
            </a>
            <a
                role="menuitem"
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(`${spellText(spell).slice(0, 200)}\n\n— Lafzon Ka Jadugar ✦`)}&url=${encodeURIComponent(url)}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClose}
            >
                X (Twitter)
            </a>
            <button
                role="menuitem"
                type="button"
                onClick={async () => {
                    if (await copyText(url)) onCopied("Link copied ✨");
                    onClose();
                }}
            >
                Copy link
            </button>
        </div>,
        document.body
    );
}

export default function Spellbook() {
    const ready = useStageReady();
    const [lang, setLang] = useState("all");
    const [picked, setPicked] = useState([]);
    const [shown, setShown] = useState(PAGE);
    const [featured, setFeatured] = useState(firstFeatured);
    const [share, setShare] = useState(null);
    const [imageOf, setImageOf] = useState(null);
    const [toast, setToast] = useState(null);
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);

    const list = useMemo(() => spells.filter((spell) => matches(spell, lang, picked)), [lang, picked]);
    const filtering = lang !== "all" || picked.length > 0;

    const notify = useCallback((message) => setToast({ message, key: Date.now(), on: true }), []);
    const notifyCopied = useCallback(() => notify("Copied with credit ✨"), [notify]);
    const closeShare = useCallback(() => setShare(null), []);

    useEffect(() => {
        if (!toast?.on) return undefined;
        // Hide, but keep the text so it fades out rather than blanking.
        const timer = setTimeout(() => setToast((current) => ({ ...current, on: false })), 1800);
        return () => clearTimeout(timer);
    }, [toast]);

    const featuredRef = useRef(null);

    // On a phone the featured card sits below the buttons; nudge it into view only if it isn't already.
    const showFeatured = useCallback(() => {
        requestAnimationFrame(() => featuredRef.current?.scrollIntoView({ block: "nearest", behavior: "smooth" }));
    }, []);

    // A shared link (#spell-042) opens with that spell as the spell of the moment.
    useEffect(() => {
        if (!ready) return undefined;
        const open = (event) => {
            const no = Number(window.location.hash.match(/^#spell-(\d+)$/)?.[1]);
            const spell = spells.find((item) => item.no === no);
            if (!spell) return;
            setFeatured(spell);
            if (event) showFeatured();
        };
        open();
        window.addEventListener("hashchange", open);
        return () => window.removeEventListener("hashchange", open);
    }, [ready, showFeatured]);

    const castSpell = () => {
        const pool = list.filter((spell) => spell.no !== featured.no);
        if (!pool.length) return;
        setFeatured(pool[Math.floor(Math.random() * pool.length)]);
        showFeatured();
    };

    const onShare = (spell, button) => {
        const data = { title: `Lafzon Ka Jadugar · spell #${pad(spell.no)}`, text: `${spellText(spell)}\n\n— Lafzon Ka Jadugar ✦`, url: spellLink(spell) };
        // Phones get the system share sheet; desktops get a small menu.
        if (navigator.share && window.matchMedia("(pointer: coarse)").matches) {
            navigator.share(data).catch(() => {});
            return;
        }
        setShare((current) => (current?.spell === spell ? null : { spell, button }));
    };

    const chooseLang = (id) => {
        setLang(id);
        setShown(PAGE);
    };

    const toggleMood = (id) => {
        setPicked((current) => (current.includes(id) ? current.filter((mood) => mood !== id) : [...current, id]));
        setShown(PAGE);
    };

    const clear = () => {
        setLang("all");
        setPicked([]);
        setShown(PAGE);
    };

    const handlers = { onCopied: notifyCopied, onShare, onImage: setImageOf };

    return (
        <div className={`${styles.spellbook} ${jetbrainsMono.className}`}>
            <section className={styles.hero} id="home">
                <BoilerHeading title="Lafzon Ka Jadugar" header="h1" />
                <div className={styles.hero_grid}>
                    <div className={styles.intro}>
                        <TagsCreator tag="p" style={{ marginLeft: "7.5rem" }} bool={false} delay={0.5} />
                        <About page="Lafzon Ka Jadugar" fluid />
                        <TagsCreator tag="p" style={{ marginLeft: "7.5rem" }} bool />
                        <ul className={styles.stats}>
                            <li>
                                <strong>{spells.length}</strong>
                                <span>spells</span>
                            </li>
                            <li>
                                <strong>{languages.length}</strong>
                                <span>languages</span>
                            </li>
                            <li>
                                <strong>{firstYear}</strong>
                                <span>casting since</span>
                            </li>
                        </ul>
                        <div className={styles.cta}>
                            <Button buttonName="Cast a Spell" icon={faWandMagicSparkles} onClick={castSpell} cursor="Abracadabra" />
                            <Button buttonName="More on Instagram" icon={faInstagram} href={INSTAGRAM} cursor="Follow ↗" />
                        </div>
                    </div>
                    <div className={styles.featured_slot} ref={featuredRef} aria-live="polite">
                        <AnimatePresence mode="wait" initial={false}>
                            <motion.div key={featured.no} className={styles.featured_card} {...swap}>
                                <Spell spell={featured} featured {...handlers} />
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </section>

            <section className={styles.library} aria-label="All spells">
                <div className={styles.filters} role="group" aria-label="Filter spells">
                    <div className={styles.row}>
                        <div className={styles.seg} role="group" aria-label="Language">
                            {[["all", "All"], ...languages].map(([id, label]) => (
                                <button type="button" key={id} aria-pressed={lang === id} onClick={() => chooseLang(id)}>
                                    {label} <small>{spells.filter((spell) => (id === "all" || spell.lang === id) && matches(spell, "all", picked)).length}</small>
                                </button>
                            ))}
                        </div>
                        <p className={styles.count} aria-live="polite">
                            {list.length} {list.length === 1 ? "spell" : "spells"}
                            {filtering && (
                                <button type="button" onClick={clear}>
                                    Clear
                                </button>
                            )}
                        </p>
                    </div>
                    <div className={styles.row} role="group" aria-label="Mood">
                        {moods.map(([id, color, label]) => (
                            <button type="button" key={id} className={styles.chip} aria-pressed={picked.includes(id)} onClick={() => toggleMood(id)}>
                                <MoodDot color={color} />
                                {label} <small>{spells.filter((spell) => matches(spell, lang, []) && spell.moods.includes(id)).length}</small>
                            </button>
                        ))}
                    </div>
                </div>

                {list.length ? (
                    <div className={styles.grid}>
                        {list.slice(0, shown).map((spell, index) => (
                            <Fragment key={spell.no}>
                                <Spell spell={spell} {...handlers} />
                                {index === FOLLOW_AFTER - 1 && (
                                    <aside className={styles.follow}>
                                        <p className={styles.follow_title}>More spells on Instagram</p>
                                        <p className={styles.follow_text}>Follow for new verses as they&apos;re written.</p>
                                        <Button buttonName={`Follow ${HANDLE}`} icon={faInstagram} href={INSTAGRAM} cursor="Follow ↗" />
                                    </aside>
                                )}
                            </Fragment>
                        ))}
                    </div>
                ) : (
                    <div className={styles.empty}>
                        <strong>No spells match that mix</strong>
                        Try another mood, or{" "}
                        <button type="button" onClick={clear}>
                            clear the filters
                        </button>
                        .
                    </div>
                )}

                {list.length > shown && (
                    <div className={styles.more}>
                        <Button buttonName={`Show More Spells (${list.length - shown} left)`} onClick={() => setShown((count) => count + PAGE)} />
                    </div>
                )}
            </section>

            <SharePopover share={share} onClose={closeShare} onCopied={notify} />
            <SpellImage spell={imageOf} onClose={() => setImageOf(null)} onSaved={() => notify("Image saved ✨")} />
            {mounted &&
                createPortal(
                    <div className={`${styles.toast} ${toast?.on ? styles.on : ""} ${jetbrainsMono.className}`} role="status">
                        {toast?.message}
                    </div>,
                    document.body
                )}
        </div>
    );
}
