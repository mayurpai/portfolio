import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from 'next/link';
import styles from "../styles/components/Button.module.scss";

export default function Button(props) {
    return (
        <>
            {props?.buttonName == "Stalk My Dev Resume" ? <Link passHref href="docs/Resume.pdf" target="_blank" rel="noopener noreferrer">
                <div className={styles.button}>
                    <FontAwesomeIcon
                        icon={props.icon}
                        style={{ fontSize: "1.4rem", padding: "0.2rem" }}
                        fixedWidth
                        fade
                    />{props.buttonName}
                </div></Link> :
                <div className={styles.button}>
                    <FontAwesomeIcon
                        icon={props.icon}
                        style={{ fontSize: "1.4rem", padding: "0.2rem" }}
                        fixedWidth
                        fade
                    />
                    {props.buttonName}
                </div>
            }
        </>
    );
}
