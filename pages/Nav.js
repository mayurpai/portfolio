import styles from "../styles/Home.module.css";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Nav() {
  return (
    <>
      <nav className={styles.navigation_links}>
        <ul className={styles.links}>
          <li>
            <Link href="/">
              <a>
                <strong>Home</strong>
                {/* <Image
                  className={styles.logo}
                  src="/logo.png"
                  width={60}
                  height={60}
                /> */}
              </a>
            </Link>
          </li>
          <li>
            <Link href="#about">
              <a>
                <strong>About</strong>
              </a>
            </Link>
          </li>
          <li>
            <Link href="#skills">
              <a>
                <strong>Skills</strong>
              </a>
            </Link>
          </li>
          <li>
            <Link href="#projects">
              <a>
                <strong>Projects</strong>
              </a>
            </Link>
          </li>
          <li>
            <Link href="#contact">
              <a>
                <strong>Contact</strong>
              </a>
            </Link>
          </li>
        </ul>
      </nav>
      ;
    </>
  );
}
