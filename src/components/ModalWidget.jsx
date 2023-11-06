import { Black_Ops_One } from "next/font/google";
import Modal from "react-modal";
import styles from "../styles/components/ModalWidget.module.scss";
import Connections from "./Connections";

const black_Ops_One = Black_Ops_One({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const customModalStyles = {
  content: {
    maxWidth: "30rem",
    height: "24rem",
    margin: "auto",
    border: "0.01rem solid rgba(255,255,255,0.1)",
    borderRadius: "0.5rem",
    boxShadow:
      "rgba(255, 255, 255, .2) 0px 2px 2px -1px, rgba(255, 255, 255, .3) 0px 1px 2px -1px",
    padding: "10px",
    backgroundColor: "rgba(16, 21, 26, 0.65)",
    overflowY: "hidden",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.25)",
    zIndex: "99999",
    backdropFilter: "blur(2.5px)",
    position: "fixed",
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
  },
};

export default function ModalWidget(props) {
  return (
    <Modal
      closeTimeoutMS={100}
      isOpen={props.isOpen}
      onRequestClose={props.onRequestClose}
      contentLabel={props.contentLabel}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
      ariaHideApp={false}
      style={customModalStyles}
    >
      <div className={styles.modalMain}>
        <div className={styles.modalMainHeader}>
          <h2 className={styles.modalHeader}>{props.contentLabel}</h2>
          <button
            onClick={props.onRequestClose}
            className={`${styles.closeButtonStyles} ${black_Ops_One.className}`}
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
