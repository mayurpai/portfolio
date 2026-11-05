import { Black_Ops_One } from "next/font/google";
import Modal from "react-modal";
import styles from "../styles/components/ModalWidget.module.scss";
import Connections from "./Connections";

const black_Ops_One = Black_Ops_One({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export default function ModalWidget(props) {
  return (
    <Modal
      closeTimeoutMS={300}
      isOpen={props.isOpen}
      onRequestClose={props.onRequestClose}
      contentLabel={props.contentLabel}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
      ariaHideApp={false}
      className={{ base: styles.content, afterOpen: styles.content_open, beforeClose: styles.content_close }}
      overlayClassName={{ base: styles.overlay, afterOpen: styles.overlay_open, beforeClose: styles.overlay_close }}
    >
      <div className={styles.modalMain}>
        <div className={styles.modalMainHeader}>
          <h2 className={styles.modalHeader}>{props.contentLabel}</h2>
          <button
            onClick={props.onRequestClose}
            className={`${styles.closeButtonStyles} ${black_Ops_One.className}`}
            aria-label="Close"
          >
            x
          </button>
        </div>
        <div className={styles.modalHolder}>
          <Connections onRequestClose={props.onRequestClose} />
        </div>
      </div>
    </Modal>
  );
}
