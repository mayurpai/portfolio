"use client";
import Button from "@/components/Button";
import ModalWidget from "@/components/ModalWidget";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import styles from "../styles/components/Navigation.module.scss";

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
              width={40}
              height={40}
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
      <ModalWidget
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Let's Work Together!"
      ></ModalWidget>
    </nav>
  );
}
