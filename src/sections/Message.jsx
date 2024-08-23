import styles from "@/styles/sections/Message.module.scss";
import { PT_Mono, Sigmar_One } from "next/font/google";

const pt_mono = PT_Mono({
    weight: "400",
    subsets: ["latin"],
    display: "swap",
});

const sigmar_One = Sigmar_One({
    weight: "400",
    subsets: ["latin"],
    display: "swap",
});

export default function Message() {
    return (
        <section className={styles.message_conatiner} id="message">
            <div className={styles.message_body_container}>
                <div className={`${pt_mono.className} ${styles.message}`}>
                    Designed with the ❤️ of code by<span className={`${sigmar_One.className} ${styles.bold_text}`}> Mayur Pai </span>
                </div>
            </div>
        </section>
    );
}
