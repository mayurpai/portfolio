"use client";
import Button from "@/components/Button";
import { Black_Ops_One, PT_Mono } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Modal from "react-modal";
import styles from "../../styles/Navigation.module.scss";

const black_Ops_One = Black_Ops_One({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const pt_mono = PT_Mono({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const customModalStyles = {
  content: {
    maxWidth: "30rem",
    height: "24rem",
    margin: "auto",
    border: "0.01rem solid rgba(255,255,255,0.1)",
    borderRadius: "0.5rem",
    boxShadow:
      "rgba(255, 255, 255, .2) 0px 2px 2px -1px, rgba(255, 255, 255, .3) 0px 1px 2px -1px",
    padding: "20px",
    backgroundColor: "#1f2528",
    overflowY: "auto",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.25)",
    zIndex: "99999",
    backdropFilter: "blur(2.5px)",
    position: "fixed",
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
  },
};

const closeButtonStyles = {
  position: "absolute",
  color: "var(--theme_color_blue)",
  boxShadow: "0.1rem 0.1rem var(--theme_color_pink)",
  borderRadius: "0.5rem",
  backgroundColor: "rgba(255,255,255,0.05)",
  height: "2.25rem",
  width: "2.25rem",
  right: "1rem",
  border: "0.1rem solid var(--theme_color_blue)",
  top: "1rem",
  fontSize: "1rem",
  fontWeight: "100",
};

const modalHeader = {
  position: "absolute",
  top: "1rem",
  left: "1rem",
  height: "2.25rem",
  color: "var(--theme_color_blue)",
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  alignItems: "center",
  fontFamily: "Coolvetica Rg",
  letterSpacing: "0.05rem"
  // width: "20rem",
};

export default function Navigation() {
  const [isModalOpen, setModalOpen] = useState(true);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
  return (
    <nav className={`${styles.navigation_links}`}>
      <ul className={styles.links}>
        <li>
          <Link href="/">
            <Image
              className={styles.logo}
              src="/images/BestLogo.png"
              width={35}
              height={35}
              alt="logo"
              loading="eager"
            />
          </Link>
        </li>
        <li>
          <div onClick={openModal}>
            <Button buttonName="Let's Connect!"></Button>
          </div>
        </li>
      </ul>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Let's Connect!"
        shouldCloseOnOverlayClick={true}
        shouldCloseOnEsc={true}
        style={customModalStyles}
      >
        <button
          onClick={closeModal}
          className={`${black_Ops_One.className}`}
          style={closeButtonStyles}
        >
          x
        </button>
        <h2 style={modalHeader}>Let's Work Together!</h2>
      </Modal>
    </nav>
  );
}

// .navigation_links :checked~.icon-burger .line:nth-child(2) {
//   animation: circular alternate-reverse 1s infinite;
//   transform: translateY(20px) rotate(225deg);
//   background-color: var(--theme_color_pink);
// }

// .navigation_links :checked~.icon-burger .line:nth-child(3) {
//   transform: translateY(-10px) rotate(-225deg);
//   background-color: var(--theme_color_blue);
// }

// .navigation_links :checked~.icon-burger .line:nth-child(1) {
//   transform: translateY(10px) rotate(225deg);
//   background-color: var(--theme_color_blue);
// }
