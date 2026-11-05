"use client";
import { useRef } from "react";
import styles from "../styles/components/Tags.module.scss";

import { useStageReady } from "@/common/stage";
import { motion, useInView } from "framer-motion";
import { La_Belle_Aurore } from "next/font/google";

const la_Belle_Aurore = La_Belle_Aurore({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

// Negative insets keep the handwriting's swashes from being clipped once revealed.
const handwriting = {
  hidden: { clipPath: "inset(-50% 100% -50% -10%)", opacity: 0, x: -10 },
  shown: (delay = 0) => ({
    clipPath: "inset(-50% -50% -50% -10%)",
    opacity: 1,
    x: 0,
    transition: { duration: 0.9, delay, ease: [0.65, 0, 0.35, 1] },
  }),
};

export default function TagsCreator(props) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const ready = useStageReady();

  // The wrapper is what gets observed: Chrome counts a target's own clip-path, so it can't be clipped itself.
  return (
    <div
      ref={ref}
      className={`${styles.tag} ${la_Belle_Aurore.className}`}
      style={props.style}
    >
      <motion.span
        className={styles.ink}
        variants={handwriting}
        custom={props.delay}
        initial="hidden"
        animate={inView && ready ? "shown" : "hidden"}
        whileHover={{ scale: 1.08, rotate: -3 }}
      >
        {props.bool ? (
          <span> &lt;/{props.tag}&gt; </span>
        ) : (
          <span> &lt;{props.tag}&gt; </span>
        )}
      </motion.span>
    </div>
  );
}
