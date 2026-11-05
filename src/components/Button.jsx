import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../styles/components/Button.module.scss";

export default function Button({ buttonName, icon, href, onClick, cursor }) {
    const content = (
        <>
            <span className={styles.fill} aria-hidden="true" />
            {icon && <FontAwesomeIcon icon={icon} className={styles.icon} fixedWidth />}
            <span className={styles.label} data-text={buttonName}>
                <span>{buttonName}</span>
            </span>
        </>
    );

    // A plain anchor: `href` points at files (the resume PDF), which next/link would try to prefetch as a route.
    if (href) {
        return (
            <a href={href} target="_blank" rel="noopener noreferrer" className={styles.button} data-cursor={cursor}>
                {content}
            </a>
        );
    }

    return (
        <button type="button" className={styles.button} onClick={onClick} data-cursor={cursor}>
            {content}
        </button>
    );
}
