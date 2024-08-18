import { Connections } from "@/constants/Connections";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PT_Mono } from "next/font/google";
import Link from "next/link";
import styles from "@/styles/components/Connections.module.scss";


const pt_mono = PT_Mono({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export default function ModalLinks(props) {
  return Connections.map((item, id) => {
    return (
      <div className={styles.modalLinks} key={id}>
        <Link href={item.link} target="_blank" onClick={props.onRequestClose}>
          <div className={styles.modalSingleLink}>
            <span className={styles.modalIcon}>
              <FontAwesomeIcon
                icon={item.icon}
                style={{
                  fontSize: "1.7rem",
                  color: "whitesmoke",
                }}
                fixedWidth
              />
            </span>
            <div className={`${styles.modalIconHeading} ${pt_mono.className}`}>
              <p>{item.heading}</p>
              <p>{item.username}</p>
            </div>
          </div>
        </Link>
      </div>
    );
  });
}
