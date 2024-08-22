import { Experiences } from "@/constants/Experiences";
import styles from "@/styles/components/ExperienceCard.module.scss";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
    faCss3Alt,
    faGithub,
    faHtml5,
    faJs,
    faReact,
} from "@fortawesome/free-brands-svg-icons";
import { faCode, faLink, faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PT_Mono, Sigmar_One } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import Technology from "./Technology";
library.add(faGithub, faLink, faCode, faHtml5, faCss3Alt, faJs, faReact, faUpRightFromSquare);

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

const imageStyle = {
    borderRadius: "1rem",
    border: "none",
    padding: "0.25rem",
    outline: "none",
    objectFit: "cover",
};

export default function ExperienceCard() {
    return Experiences.map((item, id) => {
        // const isDescTooLong = item?.description?.length > 2;
        return (
            <div className={styles.experience_card} key={id}>
                <Link href={item.website} target="_blank">
                    <div className={styles.card}>
                        <div className={styles.box}>
                            <div className={styles.content}>
                                <div className={styles.logo}>
                                    <Image
                                        style={imageStyle}
                                        fill
                                        src={item.image}
                                        alt={item.name}
                                        priority={true}
                                    ></Image>
                                </div>
                                <div className={styles.context_holder}>
                                    <div className={styles.experience_content_section}>
                                        <h3 className={`${styles.title}`}>{item.name} <FontAwesomeIcon icon={faUpRightFromSquare} className={styles.link_icon} /></h3>
                                        <h6 className={`${pt_mono.className} ${styles.id}`}>
                                            {item.role.map((role, index) => {
                                                const fromIndex = index; // Normal index for the 'from' array
                                                const toIndex = fromIndex + 1; // Next index in 'from', or 'to' if it's the last role
                                                return (
                                                    <p className={styles.role_duration} key={index}>
                                                        <span className={styles.role}>{role}</span> <span className={styles.dividor}>|</span> <span className={styles.duration}>{item.from[fromIndex]} - {toIndex < item.from.length ? item.from[toIndex] : item.to}</span>
                                                    </p>
                                                );
                                            }).reverse()}
                                        </h6>
                                    </div>
                                    <h1
                                        className={`${styles.description} ${pt_mono.className}`}
                                    // style={
                                    //     isDescTooLong
                                    //         ? {
                                    //             display: "-webkit-box",
                                    //             WebkitLineClamp: 5,
                                    //             WebkitBoxOrient: "vertical",
                                    //             overflow: "hidden",
                                    //             textOverflow: "ellipsis",
                                    //         }
                                    //         : {}
                                    // }
                                    >
                                        <ul className={styles.desc_list}>
                                            {item?.description?.map((desc, id) => {
                                                return (
                                                    <li key={id}>{desc}</li>
                                                )
                                            }
                                            )}
                                        </ul>
                                    </h1>

                                    <Technology names={item.technology} />
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        );
    });
}
