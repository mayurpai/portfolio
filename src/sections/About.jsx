import TypingEffect from "@/components/TypingEffect";
import { PT_Mono } from "next/font/google";
import styles from "../styles/pages/Home.module.scss";

const pt_mono = PT_Mono({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const aboutText =
  "A web developer, and programmer. An Inquisite who loves exploring routes that I've never come across. One of my favorite ways to learn is to teach. I completed my Bachelor's in Information Science from Sahyadri College of Engineering and Management, Mangalore. <br /> <br />  I'm currently working as an Associate Developer at GalaxE. Solutions India Pvt. Ltd. <br /> <br /> It has been my passion and craze to work with computers since I was a young kid. A priority of mine has always been to learn something new every day. As a result of my studies, I have acquired languages and algorithms, technical skills, leadership qualities, and much more. There's certainly a lot more to learn, a lot more problems to solve, and a lot more to build.";

export default function About() {
  return (
    <div className={styles.about_section_container}>
      <div
        className={`${styles.about_section_body_container} ${pt_mono.className}`}
      >
        <TypingEffect text={aboutText} />
      </div>
    </div>
  );
}
