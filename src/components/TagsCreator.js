import React from "react";
import styles from "../styles/Tags.module.css";

import { La_Belle_Aurore } from "next/font/google";

const la_Belle_Aurore = La_Belle_Aurore({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export default function TagsCreator(props) {
  return (
    <div
      className={`${styles.tag} ${la_Belle_Aurore.className}`}
      style={props.style}
    >
      {props.bool ? (
        <span> &lt;/{props.tag}&gt; </span>
      ) : (
        <span> &lt;{props.tag}&gt; </span>
      )}
    </div>
  );
}
