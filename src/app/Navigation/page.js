import Image from "next/image";
import styles from "../../styles/Navigation.module.scss";
import Link from "next/link";
import Button from "@/components/Button";

export default function Navigation() {
  return (
    <nav className={`${styles.navigation_links}`}>
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
            <Button buttonName="Let's Connect!"></Button>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
