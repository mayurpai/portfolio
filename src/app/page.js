import Head from "next/head";
import styles from "../styles/Home.module.css";
import Home from "./Home/page";
import Navigation from "./Navigation/page";
// import About from "./About";
// import Skills from "./Skills";
// import Projects from "./Projects";
// import Contact from "./Contact";

export default function Index() {
  // let title = "";
  // if (typeof window !== "undefined") {
  //   let url = document.URL;
  //   if (url === "https://mayurpai.github.io/portfolio#about") {
  //     document.title = "Mayur Pai | About";
  //     } else if (url == "http://localhost:3000/#skills") {
  //       document.title = "Mayur Pai | Skills";
  //     } else if (url == "http://localhost:3000/#projects") {
  //       document.title = "Mayur Pai | Projects";
  //   } else if (url == "https://mayurpai.github.io/portfolio#contact") {
  //     document.title = "Mayur Pai | Contact";
  //   } else {
  //     document.title = "Mayur Pai";
  //   }
  //   title = document.title;
  // }
  // let showingAlert = false;
  // const interval = setInterval(() => {
  //   document.title = showingAlert ? "Welcome To" : "My Portfolio ❤️";
  //   showingAlert = !showingAlert;
  // }, 1000);
  // clearInterval(interval);

  return (
    <div className={styles.container}>
      <Navigation />
      <Home />
      {/* <About /> */}
      {/* <Skills />
      <Projects /> */}
      {/* <Contact /> */}
      {/* <footer className={styles.footer}>
      </footer> */}
    </div>
  );
}
