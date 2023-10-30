"use client";
import { Icons } from "@/constants/Icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useState } from "react";
import styles from "../styles/Icon.module.scss";

export default function Icon() {
  const [isHovered, setHovered] = useState(false);
  return Icons.map((item, id) => {
    return (
      <div className={styles.parent_icon} key={id}>
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
            <Link href={item.link} target="_blank">
              <FontAwesomeIcon
                icon={item.icon}
                style={{ fontSize: "1.4rem", color: "whitesmoke", zIndex: "9" }}
                fixedWidth
              />
            </Link>
          </span>
        </div>
      </div>
    );
  });
}
