"use client";
import React, { useState } from "react";
import styles from "../styles/Icon.module.scss";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Icon(props) {
  const [isHovered, setHovered] = useState(false);
  return (
    <div
      className={styles.icon}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        transition: "0.5s",
        backgroundColor: !isHovered
          ? "transparent"
          : "rgba(255, 255, 255, 0.075)",
      }}
    >
      <span>
        <Link href={props.url} target="_blank">
          <FontAwesomeIcon
            icon={props.icon}
            style={{ fontSize: "1.4rem", color: "whitesmoke", zIndex: "9" }}
            fixedWidth
          />
        </Link>
      </span>
    </div>
  );
}
