import styles from "../../styles/home.module.css";
import Link from "next/link";

export default function Navigation() {
  return (
    <>
      <nav className={styles.navigation_links}>
        <ul className={styles.links}>
          <li>
            <Link href="/">
              <strong>Home</strong>
              {/* <Image
                  className={styles.logo}
                  src="/logo.png"
                  width={60}
                  height={60}
                /> */}
            </Link>
          </li>
          <li>
            {/* <Link href="#about"> */}
            <Link href="/About">
              <strong>About</strong>
            </Link>
          </li>
          <li>
            <Link href="/Skills">
              <strong>Skills</strong>
            </Link>
          </li>
          <li>
            <Link href="/Projects">
              <strong>Projects</strong>
            </Link>
          </li>
          <li>
            {/* <Link href="#contact"> */}
            <Link href="/Contact">
              <strong>Contact</strong>
            </Link>
          </li>
        </ul>
      </nav>
      ;
    </>
  );
}
