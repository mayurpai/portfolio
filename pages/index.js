import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import Nav from "./Nav";
import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";

export default function Index() {
  // let showingAlert = false;
  // const interval = setInterval(() => {
  //   document.title = showingAlert ? "Welcome To" : "My Portfolio ❤️";
  //   showingAlert = !showingAlert;
  // }, 1000);
  // clearInterval(interval);

  return (
    <div className={styles.container}>
      <Head>
        <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
        <title>Mayur Pai</title>
        <meta
          name="google-site-verification"
          content="rh1RLLiXrVeBTdNJYi9yEqzNYMHcW_ps05wOO0xfhT4"
        />
        <meta
          name="description"
          content="I am Mayur Pai B H, a web developer, and programmer. An inquisitive natured person who loves exploring routes that I've never come across. I'm pursuing my Bachelor's degree, a fourth-year engineering student in the stream of Information Science from Sahyadri College of Engineering and Management, Mangaluru."
        />
        <meta
          name="keywords"
          content="HTML5, CSS3, JavaScript, ReactJS, NextJS, SASS, Portfolio"
        />
        <meta name="author" content="Mayur Pai" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="../mayur_pai.ico" type="image/x-icon" />
        {/* <!-- <meta name="robots" content="noindex,nofollow"/> --> */}
        {/* <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.0/jquery.min.js" /> */}
      </Head>
      <Nav />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      {/* <footer className={styles.footer}>
      </footer> */}
    </div>
  );
}
