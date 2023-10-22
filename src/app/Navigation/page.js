import Image from "next/image";
import styles from "../../styles/Navigation.module.css";
import home_styles from "../../styles/Home.module.css";
import Link from "next/link";
import Button from "@/components/Button";

export default function Navigation() {
  return (
    <>
      <nav
        className={`${styles.navigation_links} ${home_styles.navigation_links}`}
      >
        <ul className={styles.links}>
          <li>
            <Link href="/">
              <Image
                className={styles.logo}
                src="/images/BestLogo.png"
                width={35}
                height={35}
                alt="logo"
                loading="eager"
              />
            </Link>
          </li>
          <li>
            <Link href="/Contact">
              <Button buttonName="Get in touch!"></Button>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
