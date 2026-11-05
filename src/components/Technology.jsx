"use client";
import { motion } from "framer-motion";
import { PT_Mono } from "next/font/google";
import styles from "../styles/components/Technology.module.scss";

const pt_mono = PT_Mono({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

// Driven by the parent card's "hidden"/"visible" variants.
const chips = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.03, delayChildren: 0.1 } },
};

const chip = {
  hidden: { opacity: 0, y: 10, scale: 0.7 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 420, damping: 22 } },
};

export default function Technology(props) {
  return (
    <motion.div className={styles.technology_main} variants={chips}>
      {props?.names?.map((tech, id) => {
        return (
          <motion.div className={styles.technology} key={id} variants={chip} whileHover={{ y: -3, scale: 1.06 }}>
            <p className={`${pt_mono.className}`}>{tech}</p>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
