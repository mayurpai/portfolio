import { PT_Mono } from "next/font/google";
import styles from "@/styles/components/About.module.scss";
import ScrambleText from "@/components/ScrambleText";
import TypingEffect from "@/components/TypingEffect";
import { AboutDesc } from "@/constants/AboutDesc";

const pt_mono = PT_Mono({
    weight: "400",
    subsets: ["latin"],
    display: "swap",
});

export default function About({ page }) {
    const matchedParent = AboutDesc.filter(parent => parent.page === page);
    return (
        <div className={styles.about_section_container}>
            <div
                className={`${styles.about_section_body_container} ${pt_mono.className}`}
            >
                {matchedParent.map((parent, index) => (
                    <TypingEffect
                        key={index}
                        htmlString={parent.description}
                        typingSpeed={0}
                    />
                ))}
                {/* <ScrambleText htmlString={aboutText} duration={1000} slowMotionFactor={50} /> */}
            </div>
        </div>
    );
}
