"use client";
import { useStageReady } from "@/common/stage";
import Button from "@/components/Button";
import Magnetic from "@/components/Magnetic";
import ModalWidget from "@/components/ModalWidget";
import { startPageTransition } from "@/components/PageTransition";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
// Imported so the URL carries the basePath; a relative path breaks on nested routes like /Lafzon-Ka-Jadugar/.
import logo from "../../public/images/BestLogo.png";
import styles from "../styles/components/Navigation.module.scss";

export default function Navigation() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef(null);
  const ready = useStageReady();
  const { scrollY } = useScroll();

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  // Tuck away while reading down the page, come back as soon as the visitor scrolls up.
  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 24);
    setHidden(latest > scrollY.getPrevious() && latest > 240);
  });

  const shown = ready && (!hidden || isModalOpen);

  // Publishes how much of the top the bar covers, so sticky toolbars (the poetry filters) can sit just below it.
  useEffect(() => {
    const root = document.documentElement;
    const nav = navRef.current;
    const measure = () => root.style.setProperty("--nav-height", `${nav.offsetHeight}px`);
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(nav);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.documentElement.style.setProperty("--nav-shown", shown ? "1" : "0");
  }, [shown]);

  // Lets other sections (e.g. the footer call-to-action) open the connections modal.
  useEffect(() => {
    const open = () => setModalOpen(true);
    window.addEventListener("open-connections", open);
    return () => window.removeEventListener("open-connections", open);
  }, []);

  return (
    <motion.nav
      ref={navRef}
      className={`${styles.navigation_links} ${scrolled ? styles.scrolled : ""}`}
      initial={{ y: "-110%" }}
      animate={{ y: shown ? "0%" : "-110%" }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      <ul className={styles.links}>
        <li>
          <Link href="/" aria-label="Home" onClick={(event) => startPageTransition(event, "/", "Home")}>
            <motion.span
              className={styles.logo_wrap}
              whileHover={{ rotate: 360, scale: 1.15 }}
              whileTap={{ scale: 0.85 }}
              transition={{ type: "spring", stiffness: 200, damping: 12 }}
            >
              <Image
                className={styles.logo}
                src={logo}
                width={40}
                height={40}
                alt="logo"
                loading="eager"
              />
            </motion.span>
          </Link>
        </li>
        <li>
          <Magnetic>
            <Button buttonName="Let's Debug Our Connection" onClick={openModal} cursor="Say hi" />
          </Magnetic>
        </li>
      </ul>
      <ModalWidget
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Crush Code Together!"
      ></ModalWidget>
    </motion.nav>
  );
}
