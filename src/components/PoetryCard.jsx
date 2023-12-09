"use client";
import { Poetry } from "@/constants/Poetry";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faCopy } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PT_Mono, Sigmar_One, Tiro_Devanagari_Hindi } from "next/font/google";
import { useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { Slide, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "../styles/components/PoetryCard.module.scss";
library.add(faCopy, faInstagram);

const sigmar_One = Sigmar_One({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const pt_mono = PT_Mono({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const tiro_Devanagari_Hindi = Tiro_Devanagari_Hindi({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const imageStyle = {
  borderRadius: "1rem",
  border: "none",
  padding: "0.25rem",
  outline: "none",
};

const notify = () => {
  toast.success("Copied ✨", {
    position: "bottom-center",
    autoClose: 100,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    transition: Slide,
  });
};

function sortByDate(poetry) {
  poetry.sort((a, b) => {
    const date1 = new Date(a.date);
    const date2 = new Date(b.date);
    return date1 - date2;
  });
  return poetry;
}


export default function PoetryCard() {
  const [clipBoardState, setClipBoardState] = useState(false);
  const [isHovered, setHovered] = useState(false);

  return Poetry.map((item, id) => {
    return (
      <div className={styles.poetry_card} key={id}>
        {console.log(item)}
        <div className={styles.box}>
          <div className={styles.project_image}>
            <div className={styles.content}>
              {/* <Image
                      style={imageStyle}
                      fill
                      src={item.imgLink}
                      objectFit="cover"
                      alt={item.title}
                      priority={true}
                    ></Image> */}
              <div className={styles.technology_section}>
                <h3
                  className={
                    item.category == "Hindi"
                      ? `${styles.title} ${tiro_Devanagari_Hindi.className}`
                      : `${styles.title}`
                  }
                >
                  {item?.description?.map((desc) => (
                    <>
                      {desc}
                      <br />
                    </>
                  ))}
                </h3>
                <div className={styles.poetry_card_footer}>
                  <h6 className={pt_mono.className}>{item.date}</h6>
                  <CopyToClipboard
                    text={item.description}
                    onCopy={() => {
                      setClipBoardState(true);
                      notify();
                    }}
                  >
                    <div
                      className={styles.copy_icon}
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
                        <FontAwesomeIcon
                          icon={faCopy}
                          style={{
                            fontSize: "1.25rem",
                          }}
                          fixedWidth
                        />
                      </span>
                    </div>
                  </CopyToClipboard>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button onClick={() => sortByDate(Poetry)}>Click</button>
        <ToastContainer />
      </div>
    );
  });
}
