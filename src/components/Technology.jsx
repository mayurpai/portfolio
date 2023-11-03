import { PT_Mono } from "next/font/google";
import styles from "../styles/components/Technology.module.scss";

const pt_mono = PT_Mono({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export default function Technology(props) {
  return (
    <div className={styles.technology_main}>
      {props?.names?.map((tech, id) => {
        return (
          <div className={styles.technology} key={id}>
            <p className={`${pt_mono.className}`}>{tech}</p>
          </div>
        );
      })}
    </div>
  );
}
