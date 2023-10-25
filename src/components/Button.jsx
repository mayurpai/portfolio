import React from "react";
import styles from "../styles/Button.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Button(props) {
  return (
    <div className={styles.button}>
      <FontAwesomeIcon
        icon={props.icon}
        style={{ fontSize: "1.4rem", color: "whitesmoke", padding: "0.2rem" }}
        fixedWidth
      />
      {props.buttonName}
    </div>
  );
}
