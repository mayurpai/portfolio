import Head from "next/head";
import styles from "../styles/Home.module.scss";
import Home from "./Home/page";
import Navigation from "./Navigation/page";

export default function Index() {
  return (
    <div className={styles.container}>
      <Navigation />
      <Home />
    </div>
  );
}
