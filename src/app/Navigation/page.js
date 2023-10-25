"use client";
import Image from "next/image";
import styles from "../../styles/Navigation.module.scss";
import Link from "next/link";
import Button from "@/components/Button";
import { useState } from "react";
// import Modal from "@/components/Modal";
import Modal from "react-modal";

const customModalStyles = {
  content: {
    width: "30rem",
    height: "24rem",
    margin: "auto",
    border: "2px solid #333",
    borderRadius: "8px",
    padding: "20px",
    backgroundColor: "chartreuse",
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

const customModalMainStyles = {};

export default function Navigation() {
  const [isModalOpen, setModalOpen] = useState(false);

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
        contentLabel="Example Modal"
        shouldCloseOnOverlayClick={true}
        shouldCloseOnEsc={true}
        style={customModalStyles}
      >
        <h2>Modal Content</h2>
        <p>This is the content of the modal.</p>
        <button onClick={closeModal}>Close</button>
      </Modal>
    </nav>
  );
}
